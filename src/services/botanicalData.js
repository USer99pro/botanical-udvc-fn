/**
 * Botanical UDVC — Authentic Botanical Fact & Plant Dataset
 * Reference: โครงการอนุรักษ์พันธุกรรมพืชอันเนื่องมาจากพระราชดำริ (อพ.สธ.)
 * วิทยาลัยอาชีวศึกษาอุดรธานี
 */

export const INITIAL_CATEGORIES = [
  { id: 'all', label: 'ทั้งหมด (All)', count: 12, icon: 'spa' },
  { id: 'flowering', label: 'พืชดอก (Flowering)', count: 4, icon: 'local_florist', desc: 'พรรณไม้ดอกสีสันสดใส และกล้วยไม้ประจำถิ่น' },
  { id: 'tropical', label: 'พืชใบประดับ & เขตร้อน (Tropical Foliage)', count: 3, icon: 'forest', desc: 'ไม้ใบฟอกอากาศและพืชป่าดิบชื้นในเรือนกระจก' },
  { id: 'succulents', label: 'พืชอวบน้ำ & แคคตัส (Succulents)', count: 2, icon: 'eco', desc: 'พืชทนแล้งและโครงสร้างทางกายวิภาคพิเศษ' },
  { id: 'herbs', label: 'พืชสมุนไพรท้องถิ่น (Medicinal Herbs)', count: 2, icon: 'vaccines', desc: 'สมุนไพรพื้นบ้านตาม 3 สาระการเรียนรู้' },
  { id: 'ferns', label: 'ป่าเฟิน & มอส (Ferns & Moss)', count: 1, icon: 'grass', desc: 'กลุ่มพืชโบราณไร้ดอกและระบบนิเวศชุ่มชื้น' },
];

export const INITIAL_PLANTS = [
  {
    id: 'monstera-deliciosa',
    slug: 'monstera-deliciosa',
    plantCode: '7-41000-001/01',
    nameTh: 'มอนสเตอร่า (พลูฉีก)',
    nameLocal: 'พลูฉลุใหญ่, พลูฉีก',
    commonName: 'Swiss Cheese Plant, Split-leaf Philodendron',
    scientificName: 'Monstera deliciosa Liebm.',
    family: 'Araceae (วงศ์บอน)',
    genus: 'Monstera',
    species: 'M. deliciosa',
    category: 'tropical',
    categoryLabel: 'พืชใบประดับ & เขตร้อน',
    tag: 'เรือนกระจกพืชศึกษา',
    status: 'สมบูรณ์ (ก.7-003)',
    zone: 'โซนเรือนกระจก A-04 (อาคารพืชศึกษา)',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaJcrAikIfS1VMetS8YxJfAvgEBPm4nEyJHpvQ_5paM1Ff5IuUtghzRCQkNKR3Cd6OeLyflgvy6r-c3A-IX-LtMKFhDK90ANqKpjkU5vpChFOFrp6h1q9Eg1Dbc-87sZxYYdkOybKpiwXZ4ElntwMhbtVh3hQHKJAX_bE6XlRVjK_YLakGIbZhDan4mb6LxvtgXDOkx72o5WehClXGfNTsNKCRMU2-VGpGkvp9qL7J0ykHo-c6wlXKQw',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAaJcrAikIfS1VMetS8YxJfAvgEBPm4nEyJHpvQ_5paM1Ff5IuUtghzRCQkNKR3Cd6OeLyflgvy6r-c3A-IX-LtMKFhDK90ANqKpjkU5vpChFOFrp6h1q9Eg1Dbc-87sZxYYdkOybKpiwXZ4ElntwMhbtVh3hQHKJAX_bE6XlRVjK_YLakGIbZhDan4mb6LxvtgXDOkx72o5WehClXGfNTsNKCRMU2-VGpGkvp9qL7J0ykHo-c6wlXKQw',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAhPl960cWBsH64JKloCMOdIVKHnEdVoZBu5eZ8dAKaPiAKgKV8qe-07zA3cHuhf4fp6OOGeWqnlB3BE-U8MgJMKhJ9F-thQwIZJKjQpq4nKem2heqN61xIqCJn9YKXaby-pGZTCVQaCFwyimDiVgNsk4LO6bnU1DdBZDjqFTsVNL3f2mnQX9H-AyOIp6cfInLknalum0teBTIwdHUHz-HakYRGHBOXDDNBVVb13Oeb7XIVTZbmE_Vtqw',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD3zPj5HiuE0jCuv-c9NkGKLS9ccw1gQEnTiUjjFNNnwqKxfX6mfip-2jZED-PqBXcA6NYyrJqJXPdltr7xgAsFYUT2x6XMZCDhjemmeD6Bbv5113zqO0WDh3bzTyEtojzuj8Mlw16q9x8kIVH68iUMLLHJvp1WG-N75VIa-xzOLyBOPCUqizyXa40Javw1cbOXSIZi_WH27XZznBqtP-tPNrVll1VAylNowI03PwzzuuNPGVegM10j1Q',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAKTDuW6qEgbu1z5E2Sf_CWLxWeoi2lsVPAHoolnuhOwTr01Pgk4sRWEFSm6jpUQxL6sZwWSxHoQ3vKUBufgvAc3TSlpy8bhlZa86bQz5GarDWfPURn9rnobLl2AHAzBmtXC34zY1WDTuYiK5DrNhj2sTMsCM8Q94hP9D4PoNgRrR7DSs2Sgm2ywECJL0laLRVcsa1gBOD8Y7Khw2dBlw0okOd8dtYRHSgj5L4iPBqDrQ9QsNju0erLvQ'
    ],
    description: 'มอนสเตอร่า (Monstera deliciosa) เป็นไม้เลื้อยเนื้ออ่อนขนาดใหญ่ มีถิ่นกำเนิดในป่าดิบชื้นของทวีปอเมริกากลาง ลักษณะเด่นคือใบเดี่ยวขนาดใหญ่ รูปหัวใจ ขอบใบหยักเว้าลึกเป็นแฉกและมีรูตามช่องระหว่างเส้นใบ',
    morphology: {
      stem: 'ลำต้นทรงกลม อวบน้ำ มีข้อปล้องชัดเจน มีรากอากาศแทงออกตามข้อเพื่อยึดเกาะ',
      leaves: 'ใบเดี่ยว เรียงสลับ รูปไข่กว้างถึงรูปหัวใจ ยาว 25-90 ซม. ปลายใบแหลม แผ่นใบมีรอยฉีกและรูตามธรรมชาติ (Fenestration)',
      flowers: 'ช่อดอกแบบ Spadix หุ้มด้วยกาบสีขาวนวล (Spathe) ดอกย่อยขนาดเล็กอัดแน่น',
      fruits: 'ผลรวมรูปทรงกระบอก ผิวเป็นเกล็ดหกเหลี่ยม เมื่อสุกเต็มที่จะมีกลิ่นหอมคล้ายสับปะรดผสมกล้วย'
    },
    ecology: {
      sunlight: 'แสงแดดรำไร 60-70% (ไม่ควรโดนแดดจัดตรงๆ)',
      water: 'ปานกลาง รดน้ำสัปดาห์ละ 2-3 ครั้ง ชอบความชื้นสัมพัทธ์สูง',
      soil: 'ดินร่วนโปร่ง ระบายน้ำดี ผสมกาบมะพร้าวสับและเพอร์ไลต์',
      temp: '20°C - 30°C'
    },
    botanicalFacts: [
      'รูบนใบ (Fenestration) วิวัฒนาการมาเพื่อให้แสงแดดส่องลอดลงไปยังใบชั้นล่างในป่าดิบชื้น และช่วยลดแรงปะทะจากลมพายุ',
      'ชื่อ "deliciosa" มีความหมายว่า "อร่อย" สื่อถึงผลที่สุกเต็มที่ซึ่งสามารถรับประทานได้ แต่ผลดิบมีผลึกแคลเซียมออกซาเลตสูงทำให้ระคายเคือง',
      'มีรากอากาศ (Aerial roots) ที่ทำหน้าที่ดูดซับความชื้นและสารอาหารจากอากาศโดยตรง'
    ],
    uses: 'ไม้ประดับฟอกอากาศ ดูดซับสารพิษจำพวกฟอร์มาลดีไฮด์ และใช้ตกแต่งภูมิทัศน์อาคารสถานที่',
    surveyDate: '2024-02-15',
    surveyor: 'คณะทำงานสวนพฤกษศาสตร์ สาขาวิชาพืชศาสตร์ UDVC'
  },
  {
    id: 'rhynchostylis-gigantea',
    slug: 'rhynchostylis-gigantea',
    plantCode: '7-41000-001/02',
    nameTh: 'กล้วยไม้ช้างกระ',
    nameLocal: 'เอื้องช้างกระ, ช้างเผือก',
    commonName: 'Giant Rhynchostylis Orchid',
    scientificName: 'Rhynchostylis gigantea (Lindl.) Ridl.',
    family: 'Orchidaceae (วงศ์กล้วยไม้)',
    genus: 'Rhynchostylis',
    species: 'R. gigantea',
    category: 'flowering',
    categoryLabel: 'พืชดอก',
    tag: 'กล้วยไม้หายาก',
    status: 'สมบูรณ์ (ก.7-003)',
    zone: 'เรือนกล้วยไม้อนุรักษ์ B-02',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBCz-JEIzLDghXGBO6WThRjI72iiJaJ3AhmCM7arFS3LbL2em9-CGkYcB4G_K0l0CtjSes3jwdUmivyr0VY13Ym2FkW4ZXp7dXAYrjPe1KDhpxiR7vNfTNv7vw0b0VijfZIJjoGYcpKQ_aqzRm0T5jk93pwLpE6NYeQiUaUuwMB8DJ08IzMXEXCqUQJJd6jW_FAyLkJ0xRt0LIuT0bTVTy5_pf2nosxUFDDj9S6Gl58itwbYXlqslMJQ',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDBCz-JEIzLDghXGBO6WThRjI72iiJaJ3AhmCM7arFS3LbL2em9-CGkYcB4G_K0l0CtjSes3jwdUmivyr0VY13Ym2FkW4ZXp7dXAYrjPe1KDhpxiR7vNfTNv7vw0b0VijfZIJjoGYcpKQ_aqzRm0T5jk93pwLpE6NYeQiUaUuwMB8DJ08IzMXEXCqUQJJd6jW_FAyLkJ0xRt0LIuT0bTVTy5_pf2nosxUFDDj9S6Gl58itwbYXlqslMJQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCn3eVm6rHZECLwD5SKwF7iF5u66JlQrW_3_wYUPLZ-HktgjkfWia5E5b1bDULCVQNHLQ__Dhx-2g8UNkN6EFMkjF3ZialC-WoPMqT_UAI4DTOR_Q2IIVFSm5fcGOBg_gu2Y1yYVJ9E3c52Sfz7rpCzlghulbc-AH0Hnbs_YKXWiegjrJyUM_5OHSvw877TqIEt4c4gLTp0wlQXrmROqGJy5-BxUx5J-aGWtUvqaTwvk7XFm2ZZyY3Zgw'
    ],
    description: 'กล้วยไม้อิงอาศัยขนาดใหญ่ ดอกออกเป็นช่อย้อยยาว มีกลิ่นหอมแรงในตอนเช้า ดอกสีขาวประจุดสีม่วงแดงหรือชมพู บานในช่วงฤดูหนาว (ธันวาคม - กุมภาพันธ์)',
    morphology: {
      stem: 'ลำต้นสั้น หนา อวบน้ำ ขึ้นตรง',
      leaves: 'ใบหนา แข็ง รูปขอบขนาน เรียงสลับซ้อนกัน ปลายใบหยักเว้าเป็น 2 แฉกไม่เท่ากัน',
      flowers: 'ช่อดอกรูปทรงกระบอก โค้งห้อยลง ยาว 20-40 ซม. ดอกขนาด 2.5-3 ซม. มีจุดกระสีม่วงแดงสดใส',
      fruits: 'ฝักรูปทรงกระบอก เมื่อแก่แตกออก เมล็ดขนาดเล็กละเอียดคล้ายฝุ่น'
    },
    ecology: {
      sunlight: 'แสงแดด 50-60% ผ่านสแลนกรองแสง',
      water: 'รดน้ำทุกเช้า ต้องการการระบายอากาศที่ดีเยี่ยม',
      soil: 'กล้วยไม้อิงอาศัย นิยมเกาะขอนไม้หรือกระเช้าแขวนไร้ดิน',
      temp: '18°C - 32°C'
    },
    botanicalFacts: [
      'เป็นสัญลักษณ์ความงดงามของป่าผลัดใบในภาคตะวันออกเฉียงเหนือของไทย',
      'ส่งกลิ่นหอมเข้มข้นที่สุดในช่วง 08:00 - 11:00 น. เพื่อดึงดูดผึ้งและแมลงผสมเกสร',
      'ได้รับการขึ้นทะเบียนในบัญชีอนุรักษ์ CITES Appendix II'
    ],
    uses: 'ไม้ดอกไม้ประดับทรงคุณค่า การศึกษาวิจัยการเพาะเลี้ยงเนื้อเยื่อพืช และอนุรักษ์พันธุกรรมพืชท้องถิ่น',
    surveyDate: '2024-01-20',
    surveyor: 'ศูนย์อนุรักษ์พันธุกรรมกล้วยไม้ UDVC'
  },
  {
    id: 'asplenium-nidus',
    slug: 'asplenium-nidus',
    plantCode: '7-41000-001/03',
    nameTh: 'เฟินข้าหลวงหลังลาย',
    nameLocal: 'ข้าหลวงหลังลาย, เฟินรังนก',
    commonName: "Bird's Nest Fern",
    scientificName: 'Asplenium nidus L.',
    family: 'Aspleniaceae (วงศ์เฟินข้าหลวง)',
    genus: 'Asplenium',
    species: 'A. nidus',
    category: 'ferns',
    categoryLabel: 'ป่าเฟิน & มอส',
    tag: 'พืชไร้ดอกโบราณ',
    status: 'สมบูรณ์ (ก.7-003)',
    zone: 'สวนเฟินชื้น โซน C-01',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdP17p_hfdvZZlnsk9WhXq1HkneU1W9Oinia2yq9MehLERnMosKD2ozEAOGZvaXTosYvjrNDYKGvQMkCzp3bbRWnCo1VCWTftnG5FDVC_OwK_qYU4mJlqXMDJGDhXMveWgHvWVngbKxi5ni8rn2CkxpBfYDkPJewZkZ3ub9zHuRNJurcZVx21Z9zPqQizceNWmT-Cyv-RxWFC2zFwWRwsZb5LjxK4lXuZ6-SXb8kA08Da65xfnpfwjDw',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDdP17p_hfdvZZlnsk9WhXq1HkneU1W9Oinia2yq9MehLERnMosKD2ozEAOGZvaXTosYvjrNDYKGvQMkCzp3bbRWnCo1VCWTftnG5FDVC_OwK_qYU4mJlqXMDJGDhXMveWgHvWVngbKxi5ni8rn2CkxpBfYDkPJewZkZ3ub9zHuRNJurcZVx21Z9zPqQizceNWmT-Cyv-RxWFC2zFwWRwsZb5LjxK4lXuZ6-SXb8kA08Da65xfnpfwjDw'
    ],
    description: 'เฟินอิงอาศัยขนาดใหญ่ ใบแผ่ออกเป็นวงคล้ายรังนก ช่วยรองรับอินทรียวัตถุและใบไม้ที่ร่วงหล่นลงมาเพื่อย่อยสลายเป็นปุ๋ยเลี้ยงตนเอง ด้านหลังใบมีกลุ่มอับสปอร์ (Sori) เรียงเป็นเส้นลายเฉียงสวยงาม',
    morphology: {
      stem: 'เหง้าสั้น ตั้งตรง มีเกล็ดสีน้ำตาลปกคลุมหนาแน่น',
      leaves: 'ใบเดี่ยว รูปขอบขนาน ปลายแหลม ขอบใบเรียบหรือเป็นคลื่นเล็กน้อย สีเขียวสดเป็นมัน ยาวได้ถึง 1-1.5 เมตร',
      flowers: 'ไม่มีดอก ขยายพันธุ์ด้วยสปอร์',
      fruits: 'ไม่มีผล มีกลุ่มอับสปอร์ (Sori) สีน้ำตาลใต้ใบ'
    },
    ecology: {
      sunlight: 'ร่มรำไร ไม่ทนแดดจัดโดยตรง',
      water: 'ชุ่มชื้นสม่ำเสมอ ความชื้นในอากาศสูง',
      soil: 'วัสดุปลูกโปร่ง เช่น กาบมะพร้าวสับ ขุยมะพร้าว และใบก้ามปูผุ',
      temp: '22°C - 30°C'
    },
    botanicalFacts: [
      'รูปทรงรังนกทำหน้าที่เป็นกับดักน้ำฝนและใบไม้ร่วง สร้างระบบนิเวศขนาดจิ๋วสำหรับมดและแมลงขนาดเล็ก',
      'คำว่า "หลังลาย" มาจากแถบสปอร์ที่เรียงตัวเป็นแนวเส้นขนานเฉียงตามเส้นใบด้านหลัง',
      'ตามความเชื่อโบราณ เป็นไม้มงคลเสริมสร้างบารมีและความซื่อสัตย์สุจริต'
    ],
    uses: 'ตกแต่งสวนสไตล์ Tropical Rainforest ฟอกอากาศ และใช้ศึกษาชีววิทยาของพืชกลุ่ม Pteridophytes',
    surveyDate: '2024-03-01',
    surveyor: 'ฝ่ายวิชาการงานสวนพฤกษศาสตร์ UDVC'
  },
  {
    id: 'aloe-vera',
    slug: 'aloe-vera',
    plantCode: '7-41000-001/04',
    nameTh: 'ว่านหางจระเข้',
    nameLocal: 'ว่านไฟไหม้, หางตะเข้',
    commonName: 'Aloe Vera, Medicinal Aloe',
    scientificName: 'Aloe vera (L.) Burm.f.',
    family: 'Asphodelaceae (วงศ์ว่านหางจระเข้)',
    genus: 'Aloe',
    species: 'A. vera',
    category: 'succulents',
    categoryLabel: 'พืชอวบน้ำ & สมุนไพร',
    tag: 'สมุนไพรสารพัดประโยชน์',
    status: 'สมบูรณ์ (ก.7-003)',
    zone: 'แปลงพืชสมุนไพรสาธิต D-03',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3O1kejYsao48JSYvaY-w4smapMOEbQaDEE8bXe3tIYq7DiMnZWACgpLPJo-5Wf6jQg6WofzG6KVyvY1tQ-L6FBobml75tMmsUGFlWrEg-APloihkswxJERZvgD3E1ESfXWoWBzHL7QgcQlmovoYfkJAdHn2cS3LNJWkJ15AhrSK-bQXiab53GYSwpGdr4ZefjwVl8wu29lJxbff8jZA3GCAvzEwmdb-IJtFUYZYwG7l5ocFJihdWBQA',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3O1kejYsao48JSYvaY-w4smapMOEbQaDEE8bXe3tIYq7DiMnZWACgpLPJo-5Wf6jQg6WofzG6KVyvY1tQ-L6FBobml75tMmsUGFlWrEg-APloihkswxJERZvgD3E1ESfXWoWBzHL7QgcQlmovoYfkJAdHn2cS3LNJWkJ15AhrSK-bQXiab53GYSwpGdr4ZefjwVl8wu29lJxbff8jZA3GCAvzEwmdb-IJtFUYZYwG7l5ocFJihdWBQA'
    ],
    description: 'พืชล้มลุกอวบน้ำ ใบหนายาวขอบมีหนาม ภายในบรรจุวุ้นใสและน้ำยางสีเหลือง มีคุณสมบัติสมานแผล รักษาแผลไฟไหม้ น้ำร้อนลวก และบำรุงผิวพรรณ',
    morphology: {
      stem: 'ลำต้นสั้น ข้อถี่มาก ใบออกเวียนเรียงซ้อนกันเป็นกอ',
      leaves: 'ใบอวบน้ำ หนาและฉ่ำน้ำ ขอบใบมีหนามแหลม ผิวใบสีเขียวอาจมีจุดขาวประ',
      flowers: 'ช่อดอกแทงออกจากกึ่งกลางกอ ดอกรูปหลอดยาว สีส้มแดงหรือเหลือง',
      fruits: 'ผลแห้งแตกได้ มีเมล็ดจำนวนมาก'
    },
    ecology: {
      sunlight: 'แดดเต็มวันถึงแดดครึ่งวันเช้า',
      water: 'น้อย ทนแล้งได้ดีมาก รดน้ำสัปดาห์ละ 1-2 ครั้ง',
      soil: 'ดินร่วนปนทราย ระบายน้ำได้รวดเร็ว ป้องกันรากเน่า',
      temp: '25°C - 38°C'
    },
    botanicalFacts: [
      'เนื้อวุ้นใสประกอบด้วยน้ำกว่า 99% และสารโพลีแซ็กคาไรด์ Acemannan ที่ช่วยเร่งการเจริญเติบโตของเนื้อเยื่อ',
      'ยางสีเหลืองใต้ผิวใบมีสาร Aloin ซึ่งมีฤทธิ์เป็นยาระบาย',
      'สามารถดูดซับสารคาร์บอนไดออกไซด์และปล่อยออกซิเจนในเวลากลางคืนผ่านกระบวนการ CAM photosynthesis'
    ],
    uses: 'ใช้เป็นยารักษาแผลไฟไหม้น้ำร้อนลวก เครื่องสำอางบำรุงผิว แชมพู และแปรรูปเป็นเครื่องดื่มเพื่อสุขภาพ',
    surveyDate: '2024-01-18',
    surveyor: 'กลุ่มสาระการเรียนรู้พืชสมุนไพร UDVC'
  },
  {
    id: 'alstonia-scholaris',
    slug: 'alstonia-scholaris',
    plantCode: '7-41000-001/05',
    nameTh: 'พญาสัตบรรณ (ตีนเป็ด)',
    nameLocal: 'สัตบรรณ, ตีนเป็ดไทย, หัสบรรณ',
    commonName: 'Devil Tree, Blackboard Tree, White Cheesewood',
    scientificName: 'Alstonia scholaris (L.) R. Br.',
    family: 'Apocynaceae (วงศ์ตีนเป็ด)',
    genus: 'Alstonia',
    species: 'A. scholaris',
    category: 'flowering',
    categoryLabel: 'ไม้ยืนต้น & พืชดอก',
    tag: 'ไม้ยืนต้นประจำวิทยาลัย',
    status: 'สมบูรณ์ (ก.7-003)',
    zone: 'ลานพฤกษ์เฉลิมพระเกียรติ โซน E-01',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMrQRvPvDJspC1V_rUvrzW-Ojw1YxfBuXYIYJ_xaIkML2T1eExpQk_pYLlGxyFZp72YRxWfOJnY2I1Ni1raLmjbGq341i32zCyQdoKH7Uqh30QcjY9AEJIIv4DEupW_NrguSuWjMLz3erX88VO6futjIZfsS4s_945qEGtKShyVqWhzP2toi27KIU0awaV7GeUwau5BqPPStxrTIoCFPw2hPMXEoCLBZKSW0jOebmFPf8YB-nbSpUv_A',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBMrQRvPvDJspC1V_rUvrzW-Ojw1YxfBuXYIYJ_xaIkML2T1eExpQk_pYLlGxyFZp72YRxWfOJnY2I1Ni1raLmjbGq341i32zCyQdoKH7Uqh30QcjY9AEJIIv4DEupW_NrguSuWjMLz3erX88VO6futjIZfsS4s_945qEGtKShyVqWhzP2toi27KIU0awaV7GeUwau5BqPPStxrTIoCFPw2hPMXEoCLBZKSW0jOebmFPf8YB-nbSpUv_A'
    ],
    description: 'ไม้ยืนต้นขนาดใหญ่ เรือนยอดเป็นชั้นๆ ใบออกเป็นวงรอบข้อ 7 ใบ เปลือกต้นและน้ำยางมีสรรพคุณทางยา ดอกสีขาวอมเขียวส่งกลิ่นหอมแรงในยามพลบค่ำช่วงต้นฤดูหนาว',
    morphology: {
      stem: 'ลำต้นเปลาตรง สูง 15-35 เมตร เปลือกต้นสีเทา แตกกิ่งก้านแผ่เป็นชั้นคล้ายฉัตร',
      leaves: 'ใบเดี่ยว เรียงรอบข้อเป็นวง วงละ 5-8 ใบ (ส่วนใหญ่ 7 ใบ) แผ่นใบหนาเหนียว',
      flowers: 'ช่อดอกแบบซี่ร่ม ดอกย่อยขนาดเล็กสีขาวแกมเขียว กลิ่นหอมฉุน',
      fruits: 'ผลเป็นฝักคู่ ทรงกระบอกยาว 20-50 ซม. เมล็ดมีขนปุยปลิวตามลม'
    },
    ecology: {
      sunlight: 'แดดจัดเต็มวัน',
      water: 'ปานกลาง ทนแล้งและทนน้ำท่วมขังชั่วคราวได้ดี',
      soil: 'ดินร่วน ดินเหนียวปนทราย ทุกสภาพดิน',
      temp: '20°C - 40°C'
    },
    botanicalFacts: [
      'ชื่อ "scholaris" มีที่มาจากเนื้อไม้สีขาวเนื้อละเอียดที่ในอดีตใช้ทำกระดานชนวน (Blackboard) สำหรับนักเรียน',
      'คำว่า "สัตบรรณ" มาจากคำว่า สัต (เจ็ด) + บรรณ (ใบ) สื่อถึงใบที่เรียงรอบข้อละ 7 ใบ',
      'เปลือกต้นมีสาร Ditamine และ Echitamine ใช้ในตำรับยาแผนไทยแก้ไข้ ขับพยาธิ และแก้หวัด'
    ],
    uses: 'ให้ร่มเงาในพื้นที่สถานศึกษา เนื้อไม้ใช้ทำของเล่น หีบไม้ และตำรับสมุนไพรพื้นบ้าน',
    surveyDate: '2024-01-10',
    surveyor: 'คณะทำงานงานสวนพฤกษศาสตร์ UDVC'
  },
  {
    id: 'curcuma-longa',
    slug: 'curcuma-longa',
    plantCode: '7-41000-001/06',
    nameTh: 'ขมิ้นชัน',
    nameLocal: 'ขมิ้นแกง, หมิ้น, ขมิ้นหยอก',
    commonName: 'Turmeric',
    scientificName: 'Curcuma longa L.',
    family: 'Zingiberaceae (วงศ์ขิงข่า)',
    genus: 'Curcuma',
    species: 'C. longa',
    category: 'herbs',
    categoryLabel: 'พืชสมุนไพรท้องถิ่น',
    tag: 'สมุนไพรภูมิปัญญาอีสาน',
    status: 'สมบูรณ์ (ก.7-003)',
    zone: 'แปลงสมุนไพร 3 สาระ D-01',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASofqvRzbJz0ksHsUaIow5ff7vGdjRFVchh2b22Tez_70C01pplUP66C7AXi1pMGSIoFD9E2skSmx6kX0ujFkIEQy3m6jJpKQJAZS8TIInEAvOI_4h1y1Q_izb0APHDgXK0ugSDe33OnKHXCymMMFi1bHqvSV_L7V8gcKNzZQua2xoLrULpGbvYs0GyzaGlfid5J3mqzJbCpdK7r_cwO3SYM5adAi-gq-trHNiZ2zylAg9daBZ-IMWEg',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuASofqvRzbJz0ksHsUaIow5ff7vGdjRFVchh2b22Tez_70C01pplUP66C7AXi1pMGSIoFD9E2skSmx6kX0ujFkIEQy3m6jJpKQJAZS8TIInEAvOI_4h1y1Q_izb0APHDgXK0ugSDe33OnKHXCymMMFi1bHqvSV_L7V8gcKNzZQua2xoLrULpGbvYs0GyzaGlfid5J3mqzJbCpdK7r_cwO3SYM5adAi-gq-trHNiZ2zylAg9daBZ-IMWEg'
    ],
    description: 'ไม้ล้มลุกมีเหง้าใต้ดินสีเหลืองส้มเข้ม กลิ่นหอมเฉพาะตัว มีสารเคอร์คูมินอยด์ (Curcuminoids) ฤทธิ์ต้านอนุมูลอิสระ ต้านการอักเสบ และรักษาโรคกระเพาะอาหาร',
    morphology: {
      stem: 'ลำต้นใต้ดินเป็นเหง้า แตกแขนงเป็นแง่งคล้ายนิ้วมือ เนื้อในสีเหลืองส้มถึงส้มแสด',
      leaves: 'ใบเดี่ยว แทงขึ้นจากเหง้า รูปใบหอก กว้าง 12-15 ซม. ยาว 30-40 ซม.',
      flowers: 'ช่อดอกแทงขึ้นจากเหง้า ใบประดับสีเขียวอ่อน ปลายสีชมพูเรื่อ ดอกย่อยสีขาวอมเหลือง',
      fruits: 'ผลรูปทรงกลม เกิดได้ยาก'
    },
    ecology: {
      sunlight: 'แดดรำไรถึงแดดปานกลาง',
      water: 'ปานกลาง ชอบดินชื้นแต่ไม่ท่วมขัง',
      soil: 'ดินร่วนซุย มีอินทรียวัตถุสูง ระบายน้ำได้ดี',
      temp: '24°C - 35°C'
    },
    botanicalFacts: [
      'สารสีเหลืองส้ม "Curcumin" ได้รับการยอมรับจากองค์การอนามัยโลก (WHO) ในการรักษาแผลในทางเดินอาหาร',
      'เป็นพืชสำคัญในสาระการเรียนรู้ที่ 2 (การใช้ประโยชน์ในท้องถิ่น) ของงานสวนพฤกษศาสตร์โรงเรียน',
      'ใช้สีย้อมธรรมชาติในงานหัตถกรรมสิ่งทอพื้นบ้านอีสาน'
    ],
    uses: 'เครื่องเทศปรุงอาหาร ยาสมุนไพรแผนไทย สีย้อมผ้าธรรมชาติ และผลิตภัณฑ์เวชสำอาง',
    surveyDate: '2024-02-05',
    surveyor: 'สาขาวิชาเทคโนโลยีอาหารและโภชนาการ UDVC'
  }
];

export const BOTANICAL_FACTS_OF_THE_DAY = [
  {
    id: 1,
    title: 'ปรากฏการณ์ Fenestration ของ Monstera',
    plantName: 'Monstera Deliciosa (พลูฉีก)',
    fact: 'รูและรอยฉลุบนใบมอนสเตอร่าไม่ได้มีไว้เพื่อความสวยงามเพียงอย่างเดียว แต่เกิดขึ้นตามธรรมชาติเพื่อช่วยให้แสงแดดส่องผ่านไปยังใบชั้นล่าง และลดแรงต้านลมพายุฝนเขตร้อนเพื่อไม่ให้ใบฉีกขาด',
    icon: 'flare',
    category: 'พฤกษศาสตร์สรีรวิทยา'
  },
  {
    id: 2,
    title: 'กลิ่นหอมตามนาฬิกาชีวภาพของช้างกระ',
    plantName: 'กล้วยไม้ช้างกระ (Rhynchostylis gigantea)',
    fact: 'กล้วยไม้ช้างกระจะผลิตสารหอมระเหยเข้มข้นที่สุดในช่วง 08:00 - 11:00 น. ซึ่งเป็นช่วงเวลาที่แมลงผสมเกสรและผึ้งป่าออกหากินมากที่สุด เพื่อเพิ่มโอกาสในการติดฝักและขยายพันธุ์',
    icon: 'schedule',
    category: 'นิเวศวิทยาการผสมเกสร'
  },
  {
    id: 3,
    title: 'ระบบสะสมสารอาหารรังนกของเฟินข้าหลวง',
    plantName: 'เฟินข้าหลวงหลังลาย (Asplenium nidus)',
    fact: 'ทรงใบที่แผ่ออกเป็นวงกลมคล้ายรังนกทำหน้าที่เป็นอ่างกักเก็บเศษใบไม้ร่วงและหยดน้ำฝน ซึ่งเมื่อย่อยสลายจะกลายเป็นฮิวมัสให้สารอาหารแก่ระบบรากโดยตรงโดยไม่ต้องพึ่งพาดิน',
    icon: 'nature',
    category: 'การปรับตัวของพืช'
  },
  {
    id: 4,
    title: 'กระบวนการหายใจแบบ CAM ในพืชอวบน้ำ',
    plantName: 'ว่านหางจระเข้ (Aloe vera)',
    fact: 'ว่านหางจระเข้เปิดปากใบเพื่อตรึงคาร์บอนไดออกไซด์เฉพาะในเวลากลางคืนเพื่อลดการสูญเสียน้ำในเวลากลางวัน จึงเป็นพืชที่ช่วยปล่อยออกซิเจนบริสุทธิ์ในเวลากลางคืนได้อย่างยอดเยี่ยม',
    icon: 'bedtime',
    category: 'สรีรวิทยาพืช'
  }
];

export const FIVE_ELEMENTS = [
  {
    step: '01',
    title: 'การจัดทำป้ายชื่อพรรณไม้',
    desc: 'สำรวจพื้นที่ กำหนดรหัสพรรณไม้ และจัดทำป้ายชื่อพรรณไม้สมบูรณ์ตามหลักเกณฑ์ อพ.สธ.',
    icon: 'badge'
  },
  {
    step: '02',
    title: 'การรวบรวมพรรณไม้เข้าปลูก',
    desc: 'ศึกษาพืชพรรณท้องถิ่น อนุรักษ์พันธุกรรม และจัดโซนปลูกพืชศึกษาในวิทยาลัย',
    icon: 'yard'
  },
  {
    step: '03',
    title: 'การศึกษาข้อมูลด้านต่าง ๆ',
    desc: 'ศึกษาลักษณะทางพฤกษศาสตร์ กายวิภาค สัณฐานวิทยา และการใช้ประโยชน์ทางภูมิปัญญา',
    icon: 'menu_book'
  },
  {
    step: '04',
    title: 'การรายงานผลการเรียนรู้',
    desc: 'บันทึกสมุดทะเบียน ก.7-003 เอกสารทางวิชาการ และภาพวาดทางพฤกษศาสตร์',
    icon: 'assignment'
  },
  {
    step: '05',
    title: 'การนำไปใช้ประโยชน์ทางการศึกษา',
    desc: 'บูรณาการเข้าสู่หลักสูตรวิชาชีพ 3 สาระการเรียนรู้ และเผยแพร่สู่ชุมชน',
    icon: 'school'
  }
];

export const INITIAL_DASHBOARD_STATS = {
  totalPlants: 12450,
  recordedSpecies: 5320,
  totalVisitors: 8920,
  researchDocuments: 1580,
  verifiedForms: 420,
  newPlantsThisTerm: 240,
  visitorGrowthPercent: 18.2
};

export const INITIAL_ACTIVITIES = [
  {
    id: 'act-1',
    title: 'อบรมเชิงปฏิบัติการการบันทึกข้อมูลพรรณไม้ ก.7-003',
    date: '2024-03-01',
    category: 'อบรม/สัมมนา',
    author: 'งานสวนพฤกษศาสตร์ UDVC',
    summary: 'จัดกิจกรรมให้ความรู้แก่นักเรียนนักศึกษาในการสำรวจและจำแนกลักษณะทางพฤกษศาสตร์'
  },
  {
    id: 'act-2',
    title: 'นิทรรศการพรรณไม้เฉลิมพระเกียรติ อพ.สธ.',
    date: '2024-02-18',
    category: 'นิทรรศการ',
    author: 'ฝ่ายวิชาการ',
    summary: 'จัดแสดงพันธุ์กล้วยไม้หายากและพืชสมุนไพรอีสาน พร้อมสาธิตการสกัดสารสำคัญ'
  },
  {
    id: 'act-3',
    title: 'ปรับปรุงเรือนกระจกพืชศึกษาโซน A',
    date: '2024-02-02',
    category: 'พัฒนาพื้นที่',
    author: 'ฝ่ายอาคารสถานที่',
    summary: 'ติดตั้งระบบพ่นหมอกและเซ็นเซอร์วัดความชื้นอัตโนมัติเพื่อการวิจัย'
  }
];

export const INITIAL_DOCUMENTS = [
  {
    id: 'doc-1',
    title: 'แบบฟอร์มบันทึกข้อมูลพรรณไม้ (ก.7-003)',
    category: 'แบบฟอร์ม',
    fileSize: '2.4 MB',
    format: 'PDF',
    updatedAt: '2024-01-15'
  },
  {
    id: 'doc-2',
    title: 'คู่มือการดำเนินงาน 5 องค์ประกอบ อพ.สธ.',
    category: 'คู่มือ',
    fileSize: '5.8 MB',
    format: 'PDF',
    updatedAt: '2024-02-01'
  },
  {
    id: 'doc-3',
    title: 'ทะเบียนพืชสมุนไพรท้องถิ่น วิทยาลัยอาชีวศึกษาอุดรธานี',
    category: 'งานวิจัย',
    fileSize: '8.1 MB',
    format: 'PDF',
    updatedAt: '2024-02-28'
  }
];

export const INITIAL_PERSONNEL = [
  {
    id: 'p-1',
    name: 'ดร. นิภาพร เกียรติสกุล',
    role: 'ประธานกรรมการงานสวนพฤกษศาสตร์โรงเรียน',
    department: 'ฝ่ายวิชาการ วิทยาลัยอาชีวศึกษาอุดรธานี',
    contact: 'botanical@udvc.ac.th'
  },
  {
    id: 'p-2',
    name: 'อาจารย์ ธีรวัฒน์ ชัยมงคล',
    role: 'หัวหน้างานทะเบียนและป้ายพรรณไม้ (องค์ประกอบที่ 1)',
    department: 'สาขาวิชาพืชศาสตร์และเกษตรกรรม',
    contact: 'teerawat@udvc.ac.th'
  },
  {
    id: 'p-3',
    name: 'อาจารย์ วรรณภา สุขสมบูรณ์',
    role: 'หัวหน้างานวิจัยและพืชสมุนไพร 3 สาระการเรียนรู้',
    department: 'สาขาวิชาเคมีและอาหาร',
    contact: 'wannapa@udvc.ac.th'
  }
];

export const INITIAL_NEWS = [
  {
    id: 'news-1',
    title: 'วีดิทัศน์นำชม: สวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี สนองพระราชดำริ อพ.สธ.',
    slug: 'udvc-botanical-garden-tour-video',
    excerpt: 'ร่วมรับชมสารคดีและวีดิทัศน์นำชมพื้นที่สวนพฤกษศาสตร์ การเก็บรวบรวมตัวอย่างพรรณไม้ และการเรียนรู้แบบบูรณาการ 5 องค์ประกอบ',
    content: 'งานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี ได้ดำเนินงานสนองพระราชดำริ โครงการอนุรักษ์พันธุกรรมพืชอันเนื่องมาจากพระราชดำริ สมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี (อพ.สธ.) โดยมุ่งเน้นการสร้างจิตสำนึกในการอนุรักษ์พันธุกรรมพืชและทรัพยากรท้องถิ่นแก่นักเรียน นักศึกษา และบุคลากร นำชมจุดศึกษาสำคัญ 5 องค์ประกอบ พร้อมระบบป้ายรหัสทะเบียน ก.7-003 แบบดิจิทัล',
    media_type: 'youtube',
    video_url: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
    aspect_ratio: '16:9',
    cover_image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200&auto=format&fit=crop',
    banner_image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1600&auto=format&fit=crop',
    category: 'ข่าวกิจกรรม',
    tags: ['YouTube 16:9', 'วิดีโอนำชม', 'อพ.สธ.', 'UDVC'],
    featured: true,
    author: 'งานประชาสัมพันธ์ วอศ.อุดรธานี',
    published_at: '2026-08-20',
    view_count: 2450
  },
  {
    id: 'news-2',
    title: 'TikTok ไวรัล: น้องนักศึกษาพาบุกเรือนเพาะชำ ไขปริศนา "มอนสเตอร่า" และป้ายรหัส ก.7-003',
    slug: 'tiktok-student-monstera-qr-code',
    excerpt: 'คลิปสั้นแนวตั้ง 9:16 สนุกๆ สไตล์คนรุ่นใหม่ กับภารกิจตามหาพืชศึกษาเด่นประจำวิทยาลัยและการสแกน QR Code',
    content: 'ตัวแทนนักศึกษาสาขาวิชาการท่องเที่ยวและการโรงแรม นำชมกิจกรรมการสำรวจพืชศึกษาบริเวณสวนหย่อมหน้าอาคาร 1 พร้อมสาธิตการสแกน QR Code เข้าสู่ระบบฐานข้อมูล ก.7-003 ผ่านคลิปแนวตั้งสไตล์ TikTok ยอดวิวทะลุหลักพันอย่างรวดเร็ว!',
    media_type: 'tiktok',
    video_url: 'https://www.tiktok.com/@botanical_udvc/video/7200000000000000000',
    aspect_ratio: '9:16',
    cover_image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=800&auto=format&fit=crop',
    banner_image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=800&auto=format&fit=crop',
    category: 'พืชศึกษาน่ารู้',
    tags: ['TikTok 9:16', 'คลิปแนวตั้ง', 'นักศึกษา', 'มอนสเตอร่า'],
    featured: true,
    author: 'ชมรมเยาวชนอนุรักษ์ธรรมชาติ UDVC',
    published_at: '2026-08-28',
    view_count: 6120
  },
  {
    id: 'news-3',
    title: 'YouTube Shorts: 60 วินาที เจาะลึกวิธีอ่านป้ายพรรณไม้สมบูรณ์ตามมาตรฐาน อพ.สธ.',
    slug: 'youtube-shorts-botanical-labeling',
    excerpt: 'คลิปแนวตั้ง 9:16 สรุปสั้นกระชับ 3 องค์ประกอบสำคัญบนป้ายชื่อพรรณไม้ รหัสพืชศึกษา ชื่อวิทยาศาสตร์ และการใช้ประโยชน์',
    content: 'การจัดทำป้ายชื่อพรรณไม้เป็นส่วนสำคัญขององค์ประกอบที่ 1 ในการสำรวจและจัดเก็บข้อมูลพรรณไม้ โดยต้องระบุข้อมูลที่ถูกต้อง ชัดเจน และทนทานต่อสภาพอากาศ คลิปสั้นนี้สรุปเทคนิคการจำและข้อควรระวังในการติดป้ายภายใน 60 วินาที',
    media_type: 'youtube',
    video_url: 'https://www.youtube.com/shorts/kJQP7kiw5Fk',
    aspect_ratio: '9:16',
    cover_image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop',
    banner_image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop',
    category: 'ความรู้ อพ.สธ.',
    tags: ['YouTube Shorts', 'แนวตั้ง 9:16', 'ป้ายชื่อพรรณไม้'],
    featured: false,
    author: 'กลุ่มงานทะเบียนพรรณไม้ (ก.7-003)',
    published_at: '2026-09-01',
    view_count: 3410
  },
  {
    id: 'news-4',
    title: 'แบนเนอร์ประชาสัมพันธ์: ขอเชิญร่วมงานนิทรรศการพฤกษศาสตร์และนวัตกรรมพืชพื้นถิ่น ประจำปี 2568',
    slug: 'banner-botanical-workshop-2026',
    excerpt: 'ขอเชิญชวนครู บุคลากร และนักเรียนนักศึกษา เข้าร่วมการอบรมเชิงปฏิบัติการ 5 องค์ประกอบงานสวนพฤกษศาสตร์ ณ หอประชุมวิทยาลัย',
    content: 'วิทยาลัยอาชีวศึกษาอุดรธานีจัดโครงการอบรมเชิงปฏิบัติการและนิทรรศการ เพื่อเสริมสร้างความรู้ความเข้าใจในแนวทางการดำเนินงานสวนพฤกษศาสตร์โรงเรียน การเก็บรักษาตัวอย่างพรรณไม้แห้ง (Herbarium) และการนำเข้าข้อมูลสู่ระบบดิจิทัลแบบครบวงจร',
    media_type: 'banner',
    aspect_ratio: '16:9',
    cover_image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1600&auto=format&fit=crop',
    banner_image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1600&auto=format&fit=crop',
    category: 'ประกาศทั่วไป',
    tags: ['แบนเนอร์ 16:9', 'นิทรรศการ', 'อพ.สธ.', 'ประกาศ'],
    featured: true,
    author: 'ฝ่ายบริหารงานวิชาการ',
    published_at: '2026-09-03',
    view_count: 1290
  },
  {
    id: 'news-5',
    title: 'สารคดีภาพและวิชาการ: การสำรวจความหลากหลายทางชีวภาพของพืชสมุนไพรภาคอีสาน (สัดส่วน 4:3)',
    slug: 'ginger-family-biodiversity-survey-4-3',
    excerpt: 'รวมภาพบันทึกภาคสนามและการจำแนกลักษณะสัณฐานวิทยาของพืชสมุนไพรและพืชวงศ์ Zingiberaceae ในสัดส่วนคลาสสิก 4:3',
    content: 'คณะทำงานงานสวนพฤกษศาสตร์ได้ดำเนินการสำรวจและบันทึกลักษณะทางพฤกษศาสตร์ของพืชในแปลงสมุนไพร เพื่อใช้เป็นสื่อการเรียนการสอนในกลุ่มวิชาชีววิทยาและเกษตรกรรมยั่งยืน พร้อมบันทึกภาพถ่ายมาตรฐาน 4:3 สำหรับงานวิจัย',
    media_type: 'banner',
    aspect_ratio: '4:3',
    cover_image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop',
    banner_image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop',
    category: 'พืชศึกษาน่ารู้',
    tags: ['แบนเนอร์ 4:3', 'พืชสมุนไพร', 'ภาพศึกษา', 'งานวิจัย'],
    featured: false,
    author: 'งานวิจัยและพัฒนาสวนพฤกษศาสตร์',
    published_at: '2026-09-04',
    view_count: 890
  },
  {
    id: 'news-6',
    title: 'วิดีโอบรรยายสารคดี: ธรรมชาติศึกษาและการสำรวจพรรณไม้รอบรั้ววิทยาลัย (สัดส่วนคลาสสิก 4:3)',
    slug: 'nature-study-classical-documentary-4-3',
    excerpt: 'รับชมการบรรยายวิชาการทางพฤกษศาสตร์ ถ่ายทอดความรู้เรื่องระบบนิเวศและคุณค่าของสิ่งแวดล้อมในสัดส่วน 4:3',
    content: 'วีดิทัศน์บรรยายพิเศษโดยผู้เชี่ยวชาญด้านชีววิทยา ถ่ายทอดองค์ความรู้ในสาระการเรียนรู้ที่ 1 ธรรมชาติศึกษา เพื่อให้นักเรียนเข้าใจความสัมพันธ์ของสิ่งแวดล้อมและพรรณไม้ยืนต้นในรั้ววิทยาลัยอาชีวศึกษาอุดรธานี',
    media_type: 'youtube',
    video_url: 'https://www.youtube.com/watch?v=kYJ5bK_42sI',
    aspect_ratio: '4:3',
    cover_image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=1200&auto=format&fit=crop',
    banner_image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=1200&auto=format&fit=crop',
    category: 'ข่าวกิจกรรม',
    tags: ['YouTube 4:3', 'สารคดี', 'ธรรมชาติศึกษา', '4:3'],
    featured: false,
    author: 'ฝ่ายโสตทัศนูปกรณ์และเทคโนโลยี',
    published_at: '2026-09-05',
    view_count: 1150
  }
];
