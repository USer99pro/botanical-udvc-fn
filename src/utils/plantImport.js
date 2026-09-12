const HEADER_ALIASES = {
  plant_code: ['plant_code', 'plantcode', 'code', 'รหัสพรรณไม้', 'รหัสพืช', 'รหัส'],
  thai_name: ['thai_name', 'thainame', 'plantnameth', 'name_th', 'ชื่อพรรณไม้', 'ชื่อไทย'],
  local_name: ['local_name', 'localname', 'name_local', 'ชื่อท้องถิ่น'],
  common_name: ['common_name', 'commonname', 'ชื่อสามัญ'],
  scientific_name: ['scientific_name', 'scientificname', 'ชื่อวิทยาศาสตร์'],
  family: ['family', 'วงศ์'],
  genus: ['genus', 'สกุล'],
  species: ['species', 'ชนิดพันธุ์'],
  description: ['description', 'รายละเอียด', 'คำอธิบาย'],
  botanical_characteristics: ['botanical_characteristics', 'botanicalcharacteristics', 'ลักษณะทางพฤกษศาสตร์', 'ลักษณะ'],
  origin: ['origin', 'ถิ่นกำเนิด'],
  distribution: ['distribution', 'การกระจายพันธุ์'],
  benefits: ['benefits', 'uses', 'ประโยชน์', 'การใช้ประโยชน์'],
  medicinal_properties: ['medicinal_properties', 'medicinalproperties', 'สรรพคุณทางยา', 'สรรพคุณ'],
  location: ['location', 'zone', 'จุดที่พบ', 'บริเวณที่พบ'],
  source_url: ['source_url', 'sourceurl', 'แหล่งข้อมูล', 'ลิงก์แหล่งข้อมูล'],
  image_url: ['image_url', 'imageurl', 'รูปภาพ', 'ลิงก์รูปภาพ'],
  status: ['status', 'สถานะ'],
  survey_date: ['survey_date', 'surveydate', 'วันที่สำรวจ'],
};

function normalizeHeader(value) {
  return String(value ?? '')
    .trim()
    .toLowerCase()
    .replace(/[\s_.-]+/g, '');
}

function normalizeCell(value) {
  if (value === null || value === undefined) return '';
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value).trim();
}

function createHeaderMap(headers) {
  const aliases = new Map();
  Object.entries(HEADER_ALIASES).forEach(([field, names]) => {
    names.forEach((name) => aliases.set(normalizeHeader(name), field));
  });

  return headers.reduce((map, header, index) => {
    const field = aliases.get(normalizeHeader(header));
    if (field && !map[field]) map[field] = index;
    return map;
  }, {});
}

function rowsFromMatrix(matrix) {
  const rows = matrix.filter((row) => row.some((cell) => normalizeCell(cell)));
  if (!rows.length) return [];

  const headers = rows[0].map(normalizeCell);
  const headerMap = createHeaderMap(headers);
  if (!Object.keys(headerMap).length) {
    throw new Error('ไม่พบหัวคอลัมน์ที่รองรับ กรุณาดาวน์โหลดไฟล์ตัวอย่างและใช้ชื่อคอลัมน์ตามนั้น');
  }

  return rows.slice(1).map((row) => {
    const values = Object.entries(headerMap).reduce((result, [field, index]) => {
      const value = normalizeCell(row[index]);
      if (value) result[field] = value;
      return result;
    }, {});

    return values;
  });
}

function parseCsvText(text) {
  const matrix = [];
  let row = [];
  let cell = '';
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    const nextCharacter = text[index + 1];

    if (character === '"') {
      if (quoted && nextCharacter === '"') {
        cell += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
    } else if (character === ',' && !quoted) {
      row.push(cell);
      cell = '';
    } else if ((character === '\n' || character === '\r') && !quoted) {
      if (character === '\r' && nextCharacter === '\n') index += 1;
      row.push(cell);
      matrix.push(row);
      row = [];
      cell = '';
    } else {
      cell += character;
    }
  }

  if (cell || row.length) {
    row.push(cell);
    matrix.push(row);
  }

  return matrix;
}

function readUint16(view, offset) {
  return view.getUint16(offset, true);
}

function readUint32(view, offset) {
  return view.getUint32(offset, true);
}

async function readZipEntries(buffer) {
  const bytes = new Uint8Array(buffer);
  const view = new DataView(buffer);
  let endOfCentralDirectory = -1;

  for (let offset = bytes.length - 22; offset >= 0; offset -= 1) {
    if (readUint32(view, offset) === 0x06054b50) {
      endOfCentralDirectory = offset;
      break;
    }
  }

  if (endOfCentralDirectory < 0) throw new Error('ไฟล์ Excel ไม่ใช่รูปแบบ .xlsx ที่ถูกต้อง');

  const entryCount = readUint16(view, endOfCentralDirectory + 10);
  const centralDirectoryOffset = readUint32(view, endOfCentralDirectory + 16);
  const entries = new Map();
  let offset = centralDirectoryOffset;

  for (let index = 0; index < entryCount; index += 1) {
    if (readUint32(view, offset) !== 0x02014b50) throw new Error('โครงสร้างไฟล์ Excel ไม่ถูกต้อง');

    const compressionMethod = readUint16(view, offset + 10);
    const compressedSize = readUint32(view, offset + 20);
    const fileNameLength = readUint16(view, offset + 28);
    const extraLength = readUint16(view, offset + 30);
    const commentLength = readUint16(view, offset + 32);
    const localHeaderOffset = readUint32(view, offset + 42);
    const name = new TextDecoder().decode(bytes.slice(offset + 46, offset + 46 + fileNameLength));
    const localNameLength = readUint16(view, localHeaderOffset + 26);
    const localExtraLength = readUint16(view, localHeaderOffset + 28);
    const dataStart = localHeaderOffset + 30 + localNameLength + localExtraLength;
    const compressedData = bytes.slice(dataStart, dataStart + compressedSize);

    if (compressionMethod === 0) {
      entries.set(name, compressedData);
    } else if (compressionMethod === 8) {
      if (typeof DecompressionStream === 'undefined') {
        throw new Error('เบราว์เซอร์นี้ไม่รองรับการอ่านไฟล์ .xlsx กรุณาใช้ Chrome หรือ Edge รุ่นล่าสุด');
      }
      const stream = new Blob([compressedData])
        .stream()
        .pipeThrough(new DecompressionStream('deflate-raw'));
      entries.set(name, new Uint8Array(await new Response(stream).arrayBuffer()));
    } else {
      throw new Error('ไฟล์ Excel ใช้วิธีบีบอัดที่ไม่รองรับ');
    }

    offset += 46 + fileNameLength + extraLength + commentLength;
  }

  return entries;
}

function xmlFromEntry(entries, name) {
  const bytes = entries.get(name);
  return bytes ? new DOMParser().parseFromString(new TextDecoder().decode(bytes), 'application/xml') : null;
}

function columnIndex(reference) {
  const letters = reference.match(/^[A-Z]+/i)?.[0] || '';
  return [...letters.toUpperCase()].reduce((total, letter) => total * 26 + letter.charCodeAt(0) - 64, 0) - 1;
}

function parseXlsxMatrix(entries) {
  const sharedStringsDocument = xmlFromEntry(entries, 'xl/sharedStrings.xml');
  const sharedStrings = sharedStringsDocument
    ? [...sharedStringsDocument.querySelectorAll('si')].map((item) => [...item.querySelectorAll('t')].map((text) => text.textContent || '').join(''))
    : [];
  const worksheetName = [...entries.keys()].find((name) => /^xl\/worksheets\/sheet\d+\.xml$/.test(name));
  const worksheetDocument = worksheetName ? xmlFromEntry(entries, worksheetName) : null;
  if (!worksheetDocument) throw new Error('ไม่พบข้อมูลในแผ่นงาน Excel');

  return [...worksheetDocument.querySelectorAll('row')].map((row) => {
    const values = [];
    row.querySelectorAll(':scope > c').forEach((cell) => {
      const index = columnIndex(cell.getAttribute('r') || '');
      const type = cell.getAttribute('t');
      const inlineText = [...cell.querySelectorAll('is t')].map((text) => text.textContent || '').join('');
      const rawValue = cell.querySelector('v')?.textContent || inlineText;
      const value = type === 's' ? sharedStrings[Number(rawValue)] || '' : rawValue;
      values[index] = value;
    });
    return values;
  });
}

export function mapImportedPlantRow(row, index) {
  const plantCode = row.plant_code || `IMPORT-${Date.now()}-${index + 1}`;
  return {
    ...row,
    plantCode,
    nameTh: row.thai_name,
    scientificName: row.scientific_name || 'Botanical sp.',
    commonName: row.common_name,
    family: row.family || 'Plantae',
    local_name: row.local_name,
    genus: row.genus,
    species: row.species,
    description: row.description,
    botanical_characteristics: row.botanical_characteristics,
    origin: row.origin,
    distribution: row.distribution,
    benefits: row.benefits,
    medicinal_properties: row.medicinal_properties,
    location: row.location,
    source_url: row.source_url,
    status: row.status || 'draft',
    survey_date: row.survey_date,
    imageUrl: row.image_url,
  };
}

export function validateImportedPlantRow(row, index) {
  const errors = [];
  if (!row.plant_code) errors.push('ไม่มีรหัสพรรณไม้');
  if (!row.thai_name) errors.push('ไม่มีชื่อพรรณไม้ภาษาไทย');
  return errors.length ? `แถวที่ ${index + 2}: ${errors.join(', ')}` : null;
}

export async function parsePlantFile(file) {
  const extension = file.name.split('.').pop()?.toLowerCase();
  if (extension === 'csv') {
    const text = await file.text();
    return rowsFromMatrix(parseCsvText(text.replace(/^\uFEFF/, '')));
  }

  if (extension === 'xlsx' || extension === 'xls') {
    if (extension === 'xls') {
      throw new Error('รองรับ Excel รุ่นใหม่ .xlsx เท่านั้น กรุณาเปิดไฟล์ .xls แล้วบันทึกเป็น .xlsx ก่อนนำเข้า');
    }
    return rowsFromMatrix(parseXlsxMatrix(await readZipEntries(await file.arrayBuffer())));
  }

  throw new Error('รองรับเฉพาะไฟล์ .csv, .xlsx และ .xls เท่านั้น');
}

export const PLANT_IMPORT_HEADERS = [
  'plant_code',
  'thai_name',
  'scientific_name',
  'local_name',
  'common_name',
  'family',
  'genus',
  'species',
  'description',
  'botanical_characteristics',
  'benefits',
  'location',
  'image_url',
  'status',
];
