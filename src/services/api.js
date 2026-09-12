const DEFAULT_API_BASE = 'http://localhost:5000';
const BASE_URL = String(import.meta.env.VITE_API_BASE_URL || DEFAULT_API_BASE).trim().replace(/\/$/, '');

function parseErrorBody(text, statusText) {
  if (!text) return statusText || 'Request failed';
  try {
    const json = JSON.parse(text);
    return json.message || json.error || text;
  } catch {
    return text || statusText;
  }
}

async function apiFetch(path, options = {}, timeoutMs = 20000) {
  if (!BASE_URL) {
    return { data: null, error: 'ไม่ได้ตั้งค่า VITE_API_BASE_URL', status: 0 };
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  const { headers: extraHeaders, ...rest } = options;
  const isForm = rest.body instanceof FormData;

  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
        ...(isForm ? {} : { 'Content-Type': 'application/json' }),
        ...extraHeaders,
      },
      ...rest,
    });
    clearTimeout(timer);

    const text = await res.text().catch(() => '');
    let json = null;
    if (text) {
      try {
        json = JSON.parse(text);
      } catch {
        json = null;
      }
    }

    if (!res.ok) {
      return {
        data: null,
        error: parseErrorBody(text, res.statusText),
        status: res.status,
      };
    }

    return { data: json, error: null, status: res.status };
  } catch (err) {
    clearTimeout(timer);
    const aborted = err?.name === 'AbortError';
    return {
      data: null,
      error: aborted ? 'หมดเวลาเชื่อมต่อ API' : err.message ?? 'Network error',
      status: 0,
    };
  }
}

function unwrapList(payload) {
  if (!payload) return { items: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
  if (Array.isArray(payload)) {
    return { items: payload, pagination: { page: 1, limit: payload.length, total: payload.length, totalPages: 1 } };
  }
  const items = Array.isArray(payload.data) ? payload.data : [];
  return {
    items,
    pagination: payload.pagination || {
      page: 1,
      limit: items.length,
      total: items.length,
      totalPages: 1,
    },
  };
}

function unwrapItem(payload) {
  if (!payload) return null;
  if (payload.data && typeof payload.data === 'object' && !Array.isArray(payload.data)) {
    return payload.data;
  }
  if (payload._id || payload.id) return payload;
  return payload.data ?? payload;
}

function qs(params = {}) {
  const search = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '' || value === 'all') return;
    search.set(key, String(value));
  });
  const str = search.toString();
  return str ? `?${str}` : '';
}

function formatDate(value) {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' });
}

function coverImage(item) {
  if (!item) return '';
  if (item.cover_image) return item.cover_image;
  if (item.image) return item.image;
  if (item.avatar) return item.avatar;
  if (item.map_image) return item.map_image;
  if (Array.isArray(item.images) && item.images.length) {
    const first = item.images[0];
    return typeof first === 'string' ? first : first.file_url || '';
  }
  return '';
}

export function mapPlant(item) {
  if (!item) return null;
  const images = Array.isArray(item.images) ? item.images : [];
  const gallery = images.map((img) => (typeof img === 'string' ? img : img.file_url)).filter(Boolean);
  const cover =
    images.find((img) => img?.type === 'cover')?.file_url || gallery[0] || item.imageUrl || '';
  const facts = item.botanical_characteristics
    ? String(item.botanical_characteristics).split('\n').map((s) => s.trim()).filter(Boolean)
    : item.botanicalFacts || [];

  return {
    ...item,
    id: item._id || item.id,
    slug: item.slug,
    plantCode: item.plant_code || item.plantCode || '',
    nameTh: item.thai_name || item.nameTh || '',
    nameLocal: item.local_name || item.nameLocal || '',
    commonName: item.common_name || item.commonName || '',
    scientificName: item.scientific_name || item.scientificName || '',
    family: item.family || '',
    genus: item.genus || '',
    species: item.species || '',
    description: item.description || '',
    category: item.category_id || item.category || '',
    categoryLabel: item.categoryLabel || '',
    tag: item.verified ? 'ตรวจสอบแล้ว' : item.status || '',
    status: item.status || '',
    zone: item.location?.description || item.zone || '',
    imageUrl: cover,
    gallery: gallery.length ? gallery : cover ? [cover] : [],
    morphology: item.morphology || {
      stem: '',
      leaves: '',
      flowers: '',
      fruits: '',
    },
    ecology: item.ecology || {
      sunlight: '',
      water: '',
      soil: '',
      temp: '',
    },
    botanicalFacts: facts,
    uses: item.benefits || item.medicinal_properties || item.uses || '',
    surveyDate: item.survey_date || item.surveyDate || '',
    surveyor: item.surveyor || '',
  };
}

function mapNews(item) {
  if (!item) return null;
  return {
    ...item,
    id: item._id || item.id,
    title: item.title,
    excerpt: item.excerpt || '',
    content: item.content || '',
    cover_image: item.cover_image || item.banner_image || '',
    media_type: item.media_type || 'image',
    aspect_ratio: item.aspect_ratio || '16:9',
    category: item.category || '',
    tags: item.tags || [],
    featured: Boolean(item.featured),
    published_at: item.published_at,
    view_count: item.view_count || 0,
  };
}

function slugFrom(text, fallback) {
  const ascii = String(text || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  return ascii || fallback || `item-${Date.now()}`;
}

export async function getList(path, params = {}) {
  const apiRes = await apiFetch(`${path}${qs(params)}`);
  if (apiRes.error) return { data: null, error: apiRes.error, status: apiRes.status };
  const { items, pagination } = unwrapList(apiRes.data);
  return { data: { items, pagination }, error: null, status: apiRes.status };
}

export async function getItem(path, id) {
  if (!id) return { data: null, error: 'ไม่พบรหัสรายการ', status: 400 };
  const apiRes = await apiFetch(`${path}/${id}`);
  if (apiRes.error) return { data: null, error: apiRes.error, status: apiRes.status };
  return { data: unwrapItem(apiRes.data), error: null, status: apiRes.status };
}

export async function createItem(path, body) {
  const apiRes = await apiFetch(path, { method: 'POST', body: JSON.stringify(body) });
  if (apiRes.error) return { data: null, error: apiRes.error, status: apiRes.status };
  return { data: unwrapItem(apiRes.data) || apiRes.data, error: null, status: apiRes.status || 201 };
}

export async function updateItem(path, id, body) {
  const apiRes = await apiFetch(`${path}/${id}`, { method: 'PUT', body: JSON.stringify(body) });
  if (apiRes.error) return { data: null, error: apiRes.error, status: apiRes.status };
  return { data: unwrapItem(apiRes.data) || apiRes.data, error: null, status: apiRes.status };
}

export async function deleteItem(path, id) {
  const apiRes = await apiFetch(`${path}/${id}`, { method: 'DELETE' });
  if (apiRes.error) return { data: null, error: apiRes.error, status: apiRes.status };
  return { data: unwrapItem(apiRes.data) || { success: true }, error: null, status: apiRes.status };
}

function mapUser(item) {
  if (!item) return null;
  return {
    ...item,
    id: item._id || item.id,
    role: item.role || 'Viewer',
    status: item.status || 'active',
  };
}

export async function getUsers({ page = 1, limit = 100, search = '', role = '', status = '' } = {}) {
  const result = await getList('/api/users', { page, limit, q: search, role, status });
  if (result.error) return result;
  return {
    data: {
      users: result.data.items.map(mapUser),
      total: result.data.pagination.total,
      page: result.data.pagination.page,
      limit: result.data.pagination.limit,
    },
    error: null,
    status: result.status,
  };
}

export async function createUser(payload) {
  const result = await createItem('/api/users', {
    name: payload.name,
    email: payload.email,
    password: payload.password,
    role: payload.role,
    status: payload.status,
    ...(payload.avatar ? { avatar: payload.avatar } : {}),
  });
  if (result.error) return result;
  return { data: mapUser(result.data), error: null, status: result.status };
}

export async function updateUser(id, payload) {
  const body = {
    name: payload.name,
    email: payload.email,
    role: payload.role,
    status: payload.status,
    ...(payload.password ? { password: payload.password } : {}),
    ...(payload.avatar ? { avatar: payload.avatar } : {}),
  };
  const result = await updateItem('/api/users', id, body);
  if (result.error) return result;
  return { data: mapUser(result.data), error: null, status: result.status };
}

export async function deleteUser(id) {
  return deleteItem('/api/users', id);
}

export async function getPlants({ page = 1, limit = 12, search = '', category = '' } = {}) {
  const params = { page, limit, q: search };
  if (category && category !== 'all') {
    if (/^[a-fA-F0-9]{24}$/.test(category)) params.category_id = category;
  }
  const result = await getList('/api/plants', params);
  if (result.error) return result;
  return {
    data: {
      plants: result.data.items.map(mapPlant),
      total: result.data.pagination.total,
      page: result.data.pagination.page,
      limit: result.data.pagination.limit,
    },
    error: null,
    status: 200,
  };
}

export async function getPlantById(idOrSlug) {
  if (!idOrSlug) return { data: null, error: 'ไม่พบรหัสพรรณไม้', status: 400 };
  const result = await getItem('/api/plants', idOrSlug);
  if (result.error) return result;
  return { data: mapPlant(result.data), error: null, status: 200 };
}

export async function createPlant(payload) {
  const plantCode = payload.plant_code || payload.plantCode || `7-41000-${Date.now().toString().slice(-6)}`;
  const body = {
    plant_code: plantCode,
    slug: payload.slug || slugFrom(payload.scientificName || payload.scientific_name, slugFrom(plantCode, `plant-${Date.now()}`)),
    thai_name: payload.thai_name || payload.nameTh || payload.plantNameTh,
    local_name: payload.local_name || payload.nameLocal || payload.nameTh,
    common_name: payload.common_name || payload.commonName,
    scientific_name: payload.scientific_name || payload.scientificName,
    family: payload.family,
    genus: payload.genus,
    species: payload.species,
    description: payload.description,
    botanical_characteristics: Array.isArray(payload.botanicalFacts)
      ? payload.botanicalFacts.join('\n')
      : payload.botanical_characteristics || payload.facts,
    benefits: payload.benefits || payload.uses,
    location: payload.location?.description
      ? payload.location
      : { description: payload.zone || payload.location || '' },
    images: payload.imageUrl || payload.cover_image
      ? [{ file_url: payload.imageUrl || payload.cover_image, type: 'cover', sort_order: 0 }]
      : payload.images || [],
    status: payload.status || 'published',
  };
  const result = await createItem('/api/plants', body);
  if (result.error) return result;
  return { data: mapPlant(result.data), error: null, status: 201 };
}

export async function getCategories() {
  const result = await getList('/api/plant-categories', { page: 1, limit: 100 });
  if (result.error) return result;
  const items = result.data.items.map((item) => ({
    id: item._id || item.id,
    slug: item.slug,
    label: item.name,
    name: item.name,
    description: item.description,
    count: 0,
  }));
  return {
    data: [{ id: 'all', slug: 'all', label: 'ทั้งหมด (All)', name: 'ทั้งหมด' }, ...items],
    error: null,
    status: 200,
  };
}

export async function getBotanicalFacts() {
  const plants = await getPlants({ page: 1, limit: 20 });
  if (plants.error) return plants;
  const facts = (plants.data.plants || [])
    .filter((p) => p.botanicalFacts?.length || p.description)
    .map((p) => ({
      title: p.nameTh,
      plantName: p.scientificName,
      fact: p.botanicalFacts?.[0] || p.description,
      category: p.family || p.categoryLabel,
      icon: 'spa',
    }));
  return { data: facts, error: null, status: 200 };
}

export async function getDailyFact() {
  const facts = await getBotanicalFacts();
  if (facts.error) return facts;
  if (!facts.data?.length) return { data: null, error: null, status: 200 };
  const dayIndex = new Date().getDate() % facts.data.length;
  return { data: facts.data[dayIndex], error: null, status: 200 };
}

export async function globalSearch(query, { limit = 10 } = {}) {
  if (!query || !query.trim()) {
    return { data: { plants: [], facts: [], results: [], total: 0 }, error: null, status: 200 };
  }
  const q = query.trim();
  const [plantsRes, searchRes] = await Promise.all([
    getPlants({ search: q, limit }),
    apiFetch(`/api/search${qs({ q })}`),
  ]);
  const plants = plantsRes.data?.plants || [];
  const extra = unwrapList(searchRes.data).items.length
    ? unwrapList(searchRes.data).items
    : searchRes.data?.results || [];
  const facts = extra
    .filter((row) => row.type && row.type !== 'plant')
    .slice(0, limit)
    .map((row) => ({
      title: row.title,
      plantName: row.type,
      fact: row.title,
      category: row.type,
      id: row.id,
    }));
  return {
    data: {
      plants,
      facts,
      results: extra,
      total: plants.length + facts.length,
    },
    error: plantsRes.error || searchRes.error,
    status: plantsRes.error ? plantsRes.status : 200,
  };
}

export async function getDashboardStats() {
  const [plants, news, docs, activities, users] = await Promise.all([
    getList('/api/plants', { page: 1, limit: 1 }),
    getList('/api/news', { page: 1, limit: 1 }),
    getList('/api/documents', { page: 1, limit: 1 }),
    getList('/api/activities', { page: 1, limit: 1 }),
    getList('/api/users', { page: 1, limit: 1 }),
  ]);
  const error = plants.error || news.error || docs.error || activities.error || users.error;
  if (error && !plants.data) return { data: null, error, status: plants.status || 500 };
  return {
    data: {
      totalPlants: plants.data?.pagination.total ?? 0,
      totalNews: news.data?.pagination.total ?? 0,
      researchDocuments: docs.data?.pagination.total ?? 0,
      totalActivities: activities.data?.pagination.total ?? 0,
      totalUsers: users.data?.pagination.total ?? 0,
      totalVisitors: news.data?.pagination.total ?? 0,
      newPlantsThisTerm: 0,
      visitorGrowthPercent: 0,
    },
    error: null,
    status: 200,
  };
}

export async function getRecentActivity({ limit = 10 } = {}) {
  const result = await getList('/api/activities', { page: 1, limit });
  if (result.error) return result;
  return {
    data: result.data.items.map((item) => ({
      id: item._id || item.id,
      title: item.title,
      summary: item.description || '',
      category: item.location || item.status || '',
      date: formatDate(item.event_date || item.createdAt),
      cover_image: coverImage(item),
    })),
    error: null,
    status: 200,
  };
}

export async function getActivities({ page = 1, limit = 9 } = {}) {
  const result = await getList('/api/activities', { page, limit });
  if (result.error) return result;
  return {
    data: {
      activities: result.data.items,
      total: result.data.pagination.total,
    },
    error: null,
    status: 200,
  };
}

export async function submitVisitBooking(payload) {
  return createItem('/api/contact-messages', {
    name: payload.name || payload.fullName || 'ผู้เยี่ยมชม',
    email: payload.email,
    phone: payload.phone,
    subject: payload.subject || 'นัดหมายศึกษาดูงาน',
    message: payload.message || JSON.stringify(payload),
  });
}

export async function getDocuments({ category = '', page = 1, limit = 50 } = {}) {
  const params = { page, limit };
  if (category && category !== 'all') params.category_id = category;
  const result = await getList('/api/documents', params);
  if (result.error) return result;
  return { data: result.data.items, error: null, status: 200 };
}

export async function getSiteSettings({ group = '', limit = 100 } = {}) {
  const result = await getList('/api/site-settings', { page: 1, limit, group });
  if (result.error) return result;

  const settings = result.data.items.reduce((values, item) => {
    values[item.key] = item.value;
    return values;
  }, {});

  return { data: settings, error: null, status: result.status };
}

export async function getPersonnel({ page = 1, limit = 100 } = {}) {
  const result = await getList('/api/personnel', { page, limit });
  if (result.error) return result;
  return {
    data: result.data.items.map((item) => ({
      ...item,
      id: item._id || item.id,
      image: item.avatar,
      role: item.biography || item.expertise?.join(', ') || '',
      department: item.department_id || item.department || '',
      group: item.department_id || 'all',
      badge: item.position,
    })),
    error: null,
    status: 200,
  };
}

export async function getNews({
  page = 1,
  limit = 20,
  search = '',
  category = '',
  media_type = '',
  aspect_ratio = '',
  featured = null,
} = {}) {
  const params = { page, limit, q: search, category, media_type, aspect_ratio };
  if (featured !== null && featured !== undefined) params.featured = featured;
  const result = await getList('/api/news', params);
  if (result.error) return result;
  return {
    data: {
      news: result.data.items.map(mapNews),
      total: result.data.pagination.total,
      page: result.data.pagination.page,
      limit: result.data.pagination.limit,
    },
    error: null,
    status: 200,
  };
}

export async function getNewsById(idOrSlug) {
  const result = await getItem('/api/news', idOrSlug);
  if (result.error) return result;
  return { data: mapNews(result.data), error: null, status: 200 };
}

export async function createNews(newsData) {
  const title = newsData.title;
  const body = {
    title,
    slug: newsData.slug || slugFrom(title, `news-${Date.now()}`),
    excerpt: newsData.excerpt,
    content: newsData.content || newsData.excerpt || title,
    cover_image: newsData.cover_image,
    banner_image: newsData.banner_image,
    media_type: newsData.media_type || 'image',
    video_url: newsData.video_url,
    aspect_ratio: newsData.aspect_ratio || '16:9',
    category: newsData.category,
    tags: Array.isArray(newsData.tags)
      ? newsData.tags
      : String(newsData.tags || '')
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean),
    featured: Boolean(newsData.featured),
    published_at: newsData.published_at || new Date().toISOString(),
    status: newsData.status || 'published',
  };
  const result = await createItem('/api/news', body);
  if (result.error) return result;
  return { data: mapNews(result.data), error: null, status: 201 };
}

export async function updateNews(id, patch) {
  const result = await updateItem('/api/news', id, patch);
  if (result.error) return result;
  return { data: mapNews(result.data), error: null, status: 200 };
}

export async function deleteNews(id) {
  return deleteItem('/api/news', id);
}

export async function getPlantStudies(params = {}) {
  return getList('/api/plant-studies', { page: 1, limit: 50, ...params });
}

export async function getFiveComponents(params = {}) {
  const result = await getList('/api/five-components', { page: 1, limit: 50, ...params });
  if (result.error) return result;
  return {
    data: result.data.items
      .slice()
      .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))
      .map((item, index) => ({
        ...item,
        id: item._id || item.id,
        number: `องค์ประกอบที่ ${index + 1}`,
        title: item.name,
        subtitle: item.slug,
        summary: item.description || '',
        details: String(item.details || item.description || '')
          .split('\n')
          .map((line) => line.trim())
          .filter(Boolean),
        icon: 'account_tree',
        badge: item.status,
      })),
    error: null,
    status: 200,
  };
}

export async function getLearningThemes(params = {}) {
  const result = await getList('/api/learning-themes', { page: 1, limit: 50, ...params });
  if (result.error) return result;
  return {
    data: result.data.items
      .slice()
      .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))
      .map((item) => ({
        ...item,
        id: item._id || item.id,
        title: item.name,
        objectives: item.objectives || [],
      })),
    error: null,
    status: 200,
  };
}

export async function getLocalResources(params = {}) {
  const result = await getList('/api/local-resources', { page: 1, limit: 100, q: params.search, ...params });
  if (result.error) return result;
  return {
    data: result.data.items.map((item) => ({
      ...item,
      id: item._id || item.id,
      title: item.name,
      image: coverImage(item),
    })),
    error: null,
    status: 200,
  };
}

export async function getPlantSignboards(params = {}) {
  const result = await getList('/api/plant-signboards', { page: 1, limit: 100, q: params.search, ...params });
  if (result.error) return result;
  return {
    data: result.data.items.map((item) => ({
      ...item,
      id: item._id || item.id,
      code: item.signboard_number,
      number: item.signboard_number,
      thaiName: item.plant_name,
      scientificName: item.scientific_name,
      family: item.family,
      zoneLabel: item.habitat || '',
      zone: item.habitat || 'all',
      benefits: item.uses || item.description || '',
      qrCodeUrl: item.qr_code || '#',
      qrText: 'สแกนดูข้อมูล ก.7-003',
      plantId: item.plant_id,
      image: item.signboard_image,
    })),
    error: null,
    status: 200,
  };
}

export async function getPlantDrawings(params = {}) {
  const result = await getList('/api/plant-drawings', { page: 1, limit: 100, q: params.search, ...params });
  if (result.error) return result;
  return {
    data: result.data.items.map((item) => ({
      ...item,
      id: item._id || item.id,
      plantName: item.title,
      artist: item.artist_name,
      studentId: item.student_id,
      academicYear: item.academic_year,
      image: item.image || item.images?.[0],
      plantId: item.plant_id,
      technique: item.department || 'all',
      techniqueLabel: item.department || '',
    })),
    error: null,
    status: 200,
  };
}

export async function getPlantRegistries(params = {}) {
  const result = await getList('/api/plant-registries', { page: 1, limit: 100, q: params.search, ...params });
  if (result.error) return result;
  return {
    data: result.data.items.map((item) => ({
      ...item,
      id: item._id || item.id,
      regNumber: item.registration_number,
      plantCode: item.plant_code,
      thaiName: item.registered_name,
      scientificName: item.scientific_name,
      family: item.family,
      location: item.location,
      recordedDate: formatDate(item.registration_date),
      status: item.status,
      statusLabel: item.status,
      surveyor: item.collector,
      plantId: item.plant_id,
    })),
    error: null,
    status: 200,
  };
}

export async function getPlantPhotos(params = {}) {
  const result = await getList('/api/plant-photo-registries', { page: 1, limit: 100, q: params.search, ...params });
  if (result.error) return result;
  return {
    data: result.data.items.map((item) => ({
      ...item,
      id: item._id || item.id,
      image: item.image,
      organ: item.tags?.[0] || 'all',
    })),
    error: null,
    status: 200,
  };
}

export async function getProjects(params = {}) {
  const result = await getList('/api/projects', { page: 1, limit: 100, q: params.search, ...params });
  if (result.error) return result;
  return {
    data: result.data.items.map((item) => ({
      ...item,
      id: item._id || item.id,
      categoryId: item.category,
      advisors: item.advisor ? [item.advisor] : [],
    })),
    error: null,
    status: 200,
  };
}

export async function getAchievements(params = {}) {
  const result = await getList('/api/achievements', { page: 1, limit: 100, q: params.search, ...params });
  if (result.error) return result;
  return {
    data: result.data.items.map((item) => ({
      ...item,
      id: item._id || item.id,
    })),
    error: null,
    status: 200,
  };
}

export async function getGoodness(params = {}) {
  const result = await getList('/api/goodness', { page: 1, limit: 100, q: params.search, ...params });
  if (result.error) return result;
  return {
    data: result.data.items.map((item) => ({
      ...item,
      id: item._id || item.id,
      image: coverImage(item),
    })),
    error: null,
    status: 200,
  };
}

export async function getStudyAreas(params = {}) {
  const result = await getList('/api/study-areas', { page: 1, limit: 50, ...params });
  if (result.error) return result;
  return {
    data: result.data.items.map((item) => ({
      ...item,
      id: item._id || item.id,
      image: item.map_image,
    })),
    error: null,
    status: 200,
  };
}

export async function getIntegrationGuides(params = {}) {
  const result = await getList('/api/integration-guides', { page: 1, limit: 100, q: params.search, ...params });
  if (result.error) return result;
  return {
    data: result.data.items.map((item) => ({
      ...item,
      id: item._id || item.id,
      image: item.cover_image,
    })),
    error: null,
    status: 200,
  };
}

export async function getRelatedOrganizations(params = {}) {
  const result = await getList('/api/related-organizations', { page: 1, limit: 100, q: params.search, ...params });
  if (result.error) return result;
  return {
    data: result.data.items.map((item) => ({
      ...item,
      id: item._id || item.id,
      image: item.logo,
    })),
    error: null,
    status: 200,
  };
}

export async function getBotanicalHistory(params = {}) {
  const result = await getList('/api/botanical-history', { page: 1, limit: 20, ...params });
  if (result.error) return result;
  const docs = result.data.items;
  const timeline = docs.flatMap((doc) => {
    if (Array.isArray(doc.timeline) && doc.timeline.length) {
      return doc.timeline
        .slice()
        .sort((a, b) => (a.order || 0) - (b.order || 0))
        .map((entry) => ({
          year: entry.year,
          title: entry.title || doc.title,
          description: entry.description || doc.summary || doc.content,
          image: entry.image || doc.cover_image,
        }));
    }
    return [
      {
        year: formatDate(doc.createdAt),
        title: doc.title,
        description: doc.summary || doc.content,
        image: doc.cover_image,
      },
    ];
  });
  return { data: { docs, timeline }, error: null, status: 200 };
}

export async function getBotanicalRoles(params = {}) {
  const result = await getList('/api/botanical-roles', { page: 1, limit: 50, ...params });
  if (result.error) return result;
  return {
    data: result.data.items
      .slice()
      .sort((a, b) => (a.order || 0) - (b.order || 0))
      .map((item, index) => ({
        ...item,
        id: item._id || item.id,
        number: `บทบาทที่ ${index + 1}`,
        icon: item.icon || 'task_alt',
        responsibilities: item.responsibilities || [],
      })),
    error: null,
    status: 200,
  };
}

export async function getCollegeMaps(params = {}) {
  const result = await getList('/api/college-maps', { page: 1, limit: 20, ...params });
  if (result.error) return result;
  const maps = result.data.items;
  const buildings = maps.flatMap((doc) =>
    (doc.locations || []).map((loc, index) => ({
      id: `${doc._id}-${index}`,
      code: loc.building || loc.room || `จุดที่ ${index + 1}`,
      name: loc.name,
      type: loc.category || 'location',
      typeLabel: loc.category || '',
      icon: 'domain',
      location: [loc.floor, loc.room].filter(Boolean).join(' ') || loc.description,
      floors: loc.floor || '',
      botanicalFeatures: loc.description || '',
      description: loc.description || doc.description || '',
      image: loc.image || doc.map_image,
    }))
  );
  return { data: { maps, buildings }, error: null, status: 200 };
}

export async function register(payload) {
  const body = {
    name: payload.name,
    email: payload.email,
    password: payload.password,
  };
  const apiRes = await apiFetch('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify(body),
  });
  if (!apiRes.error) {
    return { data: unwrapItem(apiRes.data), error: null, status: apiRes.status || 201 };
  }

  // Production deployments that do not have /api/auth yet
  if (apiRes.status === 404) {
    const fallback = await apiFetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        password_hash: payload.password,
        role: 'Viewer',
        status: 'active',
      }),
    });
    if (fallback.error) {
      return { data: null, error: fallback.error, status: fallback.status };
    }
    return { data: unwrapItem(fallback.data), error: null, status: fallback.status || 201 };
  }

  return { data: null, error: apiRes.error, status: apiRes.status };
}

export async function login(payload) {
  const email = payload.email || payload.username;
  const apiRes = await apiFetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      email: String(email || '').includes('@') ? String(email).trim() : undefined,
      username: String(email || '').includes('@') ? undefined : String(email || '').trim(),
      password: payload.password,
    }),
  });
  if (apiRes.error) return { data: null, error: apiRes.error, status: apiRes.status };
  const user = unwrapItem(apiRes.data);
  return { data: { user }, error: null, status: 200 };
}

export const API_BASE_URL = BASE_URL;
