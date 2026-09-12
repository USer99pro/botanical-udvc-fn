# Botanical UDVC — Website Data Specification for AI Coding Agent

> เอกสารนี้ใช้เป็น Specification / Prompt สำหรับ AI Coding Agent เพื่อสร้างระบบข้อมูลเว็บไซต์ใหม่ของ **งานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี (Botanical UDVC)** โดยยึดโครงสร้างและประเภทข้อมูลจากเว็บไซต์ต้นแบบ Google Sites ที่ผู้ใช้ระบุ
>
> เป้าหมายหลัก: เปลี่ยนเว็บไซต์เดิมที่ใช้หน้าเนื้อหา + ลิงก์เอกสาร ให้เป็น **ระบบฐานข้อมูลที่ค้นหาได้ จัดหมวดหมู่ได้ และบริหารจัดการผ่าน Admin Dashboard**

---

## 1. Project Identity

### Website Name
- Botanical UDVC
- School Botanical Garden by Udonthani Vocational College
- งานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี

### Organization
- วิทยาลัยอาชีวศึกษาอุดรธานี
- ฝ่ายวิชาการ
- งานสวนพฤกษศาสตร์โรงเรียน

### Technology Target
- Frontend: React
- Backend: Node.js + Express
- Database: MongoDB + Mongoose
- API: REST API / JSON
- Authentication: JWT สำหรับ Admin/Staff
- Image/File Storage: รองรับ local storage หรือ cloud object storage
- UI: Responsive / Mobile First
- Language: Thai เป็นหลัก และรองรับ English field ในจุดสำคัญ
- Date display: รองรับ พ.ศ. และ ค.ศ.

---

# 2. Core Objective

สร้างระบบข้อมูล Botanical UDVC ที่สามารถ:

1. นำเสนอข้อมูลสวนพฤกษศาสตร์โรงเรียนแก่ผู้เข้าชมทั่วไป
2. จัดเก็บฐานข้อมูลพรรณไม้แบบเป็นระบบ
3. ค้นหาพรรณไม้จากชื่อไทย ชื่อวิทยาศาสตร์ รหัสทะเบียน หรือวงศ์ได้
4. จัดเก็บข้อมูลกิจกรรม โครงการ ผลงาน และนวัตกรรม
5. จัดเก็บข้อมูลบุคลากรและโครงสร้างงาน
6. จัดเก็บแผนผังและพื้นที่ศึกษา
7. จัดการเอกสาร PDF / คู่มือ / แบบฟอร์ม / คำสั่ง
8. จัดเก็บข่าวสารประชาสัมพันธ์
9. เชื่อมโยงหน่วยงานที่เกี่ยวข้อง
10. ให้ผู้ดูแลระบบสามารถเพิ่ม แก้ไข ลบ และเผยแพร่ข้อมูลโดยไม่ต้องแก้โค้ด

---

# 3. Website Information Architecture

```text
HOME
│
├── เกี่ยวกับงานสวนพฤกษศาสตร์โรงเรียน
│   ├── ประวัติ
│   ├── บทบาทหน้าที่
│   ├── โครงสร้างบุคลากร
│   └── ติดต่อเรา
│
├── พืชศึกษา
│   ├── ประเภทพรรณไม้
│   ├── ป้ายพรรณไม้สมบูรณ์
│   ├── ภาพวาดพรรณไม้
│   ├── ทะเบียนพรรณไม้
│   ├── ข้อมูลพรรณไม้
│   ├── ทะเบียนภาพถ่ายพรรณไม้
│   ├── 5 องค์ประกอบ
│   ├── 3 สาระการเรียนรู้
│   └── ฐานทรัพยากรท้องถิ่น
│
├── ผลงานและนวัตกรรม
├── ตารางสะสมผลงาน
├── แบ่งปันความดี
├── แผนผังพื้นที่ศึกษา
├── คู่มือแผนบูรณาการ
├── ข่าวสารประชาสัมพันธ์
├── กิจกรรม
│   ├── การประชุมวิชาการและนิทรรศการ
│   ├── การประชุม / อบรม
│   ├── การบูรณาการการเรียนการสอน
│   ├── โครงการประจำปี
│   ├── ศึกษาดูงาน
│   └── กิจกรรมอื่น ๆ
├── เอกสารดาวน์โหลด
└── หน่วยงานที่เกี่ยวข้อง
```

---

# 4. Global Content Rules

## 4.1 Language

ข้อมูลหลักทั้งหมดเป็นภาษาไทย

ทุก Collection ที่เป็นเนื้อหาสำคัญควรมี:

```js
{
  title: String,
  titleEn: String,
  description: String,
  descriptionEn: String
}
```

ไม่บังคับ titleEn/descriptionEn สำหรับข้อมูลที่ยังไม่มีภาษาอังกฤษ แต่ Schema ต้องรองรับ

## 4.2 Publication Status

ใช้สถานะกลาง:

```text
draft
published
archived
```

## 4.3 Standard Metadata

ทุก Content Collection ควรรองรับ:

```js
{
  status: String,
  isFeatured: Boolean,
  sortOrder: Number,
  publishedAt: Date,
  createdAt: Date,
  updatedAt: Date,
  createdBy: ObjectId,
  updatedBy: ObjectId
}
```

## 4.4 SEO Fields

สำหรับหน้า public:

```js
{
  slug: String,
  seoTitle: String,
  seoDescription: String,
  seoKeywords: [String]
}
```

---

# 5. Home Page Data Model

Home ไม่ควร hard-code เนื้อหาทั้งหมดใน React

สร้าง Collection:

`site_settings`

ตัวอย่าง:

```js
{
  siteName: "Botanical UDVC",
  siteNameTh: "งานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี",
  tagline: "แหล่งเรียนรู้ทรัพยากรพรรณไม้และการอนุรักษ์พันธุกรรมพืช",
  logoUrl: String,
  faviconUrl: String,
  heroImageUrl: String,
  heroTitle: String,
  heroDescription: String,
  phone: "042-246-690 ต่อ 115",
  fax: "042-243-236",
  email: "botanicgarden@gsuite.udvc.ac.th",
  address: "8 ถนนโพศรี ตำบลหมากแข้ง อำเภอเมือง จังหวัดอุดรธานี 41000",
  socialLinks: [
    {
      name: String,
      url: String,
      icon: String,
      isActive: Boolean
    }
  ]
}
```

## Home Sections

Home API ต้องสามารถคืนข้อมูล:

- Site introduction
- Director / executive profile
- Featured plants
- Featured activities
- Featured projects
- Latest news
- Featured documents
- Statistics
- YouTube / video embeds
- Contact information

---

# 6. Organization Profile

Collection: `organization_profile`

```js
{
  organizationName: "วิทยาลัยอาชีวศึกษาอุดรธานี",
  departmentName: "งานสวนพฤกษศาสตร์โรงเรียน",
  affiliation: "ฝ่ายวิชาการ",
  history: String,
  mission: [String],
  vision: String,
  objectives: [String],
  address: String,
  phone: String,
  fax: String,
  email: String,
  mapUrl: String,
  mapEmbedUrl: String,
  images: [String]
}
```

---

# 7. History Timeline

Collection: `history_timeline`

เก็บประวัติการดำเนินงานเป็นเหตุการณ์ตามปี

```js
{
  yearBE: Number,
  yearAD: Number,
  date: Date,
  title: String,
  description: String,
  eventType: String,
  achievementLevel: String,
  certificateName: String,
  referenceDocumentId: ObjectId,
  images: [String],
  sortOrder: Number,
  status: String
}
```

### Initial Seed Events

ข้อมูลตัวอย่างที่ควรมีใน seed:

```text
2544 — สมัครเป็นสมาชิกโครงการอนุรักษ์พันธุกรรมพืชฯ ในกิจกรรมที่ 7
2545 — ได้รับการพิจารณาเป็นสมาชิกงานสวนพฤกษศาสตร์โรงเรียน
หมายเลขสมาชิก — 7-41000-003
2548 — รับพระราชทานป้ายสนองพระราชดำริ
2552 — รับพระราชทานเกียรติบัตร ขั้นที่ 1
2555 — รับพระราชทานเกียรติบัตร ขั้นที่ 2
2560 — เยี่ยมชมอาคารสวนพฤกษศาสตร์โรงเรียนหลังใหม่
```

> หมายเหตุ: ให้ Admin ตรวจสอบและแก้ไขข้อความ/วันที่จริงก่อนเผยแพร่เป็นข้อมูลทางการ

---

# 8. Roles and Responsibilities

Collection: `responsibilities`

```js
{
  title: String,
  description: String,
  order: Number,
  status: String
}
```

### Seed Responsibilities

1. จัดทำรายงานความก้าวหน้า คำสั่ง และเอกสารผลการดำเนินงาน
2. รวบรวมและเผยแพร่สารสนเทศ
3. กำกับดูแลเว็บไซต์และแฟนเพจ
4. ดำเนินงานตาม อพ.สธ. 5 องค์ประกอบ 3 สาระ และฐานทรัพยากรท้องถิ่น
5. จัดทำรายงานผลการดำเนินงานของสำนักงานคณะกรรมการการอาชีวศึกษา
6. ประสานงานกับหน่วยงานภายในและภายนอก
7. จัดทำปฏิทินการปฏิบัติงานและโครงการ
8. ดูแลทรัพย์สินที่ได้รับมอบหมาย
9. ปฏิบัติงานอื่นตามที่ได้รับมอบหมาย

---

# 9. Personnel Data

Collection: `personnel`

```js
{
  prefix: String,
  firstName: String,
  lastName: String,
  fullName: String,
  position: String,
  department: String,
  roleType: String,
  biography: String,
  responsibilities: [String],
  imageUrl: String,
  email: String,
  phone: String,
  displayOrder: Number,
  isExecutive: Boolean,
  isActive: Boolean,
  status: String
}
```

`roleType`:

```text
executive
manager
staff
committee
other
```

---

# 10. Plant Database — Core Collection

Collection: `plants`

นี่คือ Collection หลักของระบบ

```js
{
  registrationNo: String,
  plantCode: String,
  thaiName: String,
  localNames: [String],
  scientificName: String,
  authorName: String,
  family: String,
  genus: String,
  species: String,
  commonNames: [String],

  origin: String,
  distributionThailand: String,
  distributionOtherCountries: String,
  ecology: String,
  habitat: String,

  floweringPeriod: String,
  fruitingPeriod: String,
  propagation: String,
  uses: [String],
  characteristics: String,

  plantTypeId: ObjectId,
  studyAreaId: ObjectId,
  yearBE: Number,

  images: [
    {
      url: String,
      caption: String,
      type: String,
      sortOrder: Number
    }
  ],

  botanicalDrawingUrl: String,
  specimenLabelUrl: String,
  photoRegistrationUrl: String,

  qrCodeUrl: String,
  mapPoint: {
    latitude: Number,
    longitude: Number
  },

  references: [String],
  notes: String,

  slug: String,
  seoTitle: String,
  seoDescription: String,

  status: String,
  isFeatured: Boolean,
  sortOrder: Number,

  createdBy: ObjectId,
  updatedBy: ObjectId,
  createdAt: Date,
  updatedAt: Date
}
```

## Required Plant Indexes

สร้าง MongoDB indexes:

```js
{ registrationNo: 1 }
{ plantCode: 1 }
{ thaiName: "text" }
{ scientificName: "text" }
{ family: 1 }
{ yearBE: 1 }
{ plantTypeId: 1 }
{ studyAreaId: 1 }
{ status: 1 }
```

สร้าง unique index สำหรับ `registrationNo` เมื่อข้อมูลจริงไม่มีรายการซ้ำ

---

# 11. Plant Type

Collection: `plant_types`

```js
{
  name: String,
  description: String,
  imageUrl: String,
  slug: String,
  sortOrder: Number,
  status: String
}
```

ตัวอย่างประเภท:

```text
ป้ายพรรณไม้สมบูรณ์
ภาพวาดพรรณไม้
ทะเบียนพรรณไม้
ข้อมูลพรรณไม้
ทะเบียนภาพถ่ายพรรณไม้
```

---

# 12. Plant Registration / Label Records

เพื่อรองรับงานเอกสารทะเบียนพรรณไม้ แยก Collection:

`plant_registrations`

```js
{
  plantId: ObjectId,
  registrationNo: String,
  recordYearBE: Number,
  registrationDate: Date,
  labelText: String,
  labelImageUrl: String,
  documentUrl: String,
  remarks: String,
  status: String
}
```

---

# 13. Plant Images

Collection: `plant_images`

```js
{
  plantId: ObjectId,
  imageUrl: String,
  thumbnailUrl: String,
  title: String,
  caption: String,
  category: String,
  photographer: String,
  takenAt: Date,
  sortOrder: Number,
  status: String
}
```

`category`:

```text
plant
leaf
flower
fruit
stem
bark
habitat
botanical_drawing
specimen_label
registration
other
```

---

# 14. Five Components

Collection: `five_components`

เก็บข้อมูลการดำเนินงาน 5 องค์ประกอบแบบเนื้อหาเชิงโครงสร้าง

```js
{
  componentNo: Number,
  title: String,
  titleEn: String,
  objective: String,
  description: String,
  activities: [
    {
      title: String,
      description: String,
      images: [String],
      documentIds: [ObjectId]
    }
  ],
  evidenceDocuments: [ObjectId],
  yearBE: Number,
  status: String,
  sortOrder: Number
}
```

`componentNo` = 1–5

ห้าม hard-code ชื่อองค์ประกอบใน frontend ให้ดึงจาก database เพื่อให้แก้ไขได้

---

# 15. Three Learning Contents

Collection: `three_learning_contents`

```js
{
  topicNo: Number,
  title: String,
  description: String,
  details: String,
  learningActivities: [String],
  images: [String],
  documents: [ObjectId],
  videos: [String],
  yearBE: Number,
  status: String,
  sortOrder: Number
}
```

`topicNo` = 1–3

---

# 16. Local Resource Database

Collection: `local_resources`

```js
{
  resourceCode: String,
  resourceName: String,
  resourceType: String,
  category: String,
  community: String,
  district: String,
  province: String,
  description: String,
  localWisdom: String,
  utilization: String,
  images: [String],
  mapPoint: {
    latitude: Number,
    longitude: Number
  },
  surveyDate: Date,
  surveyTeam: [String],
  worksheetNo: String,
  documents: [ObjectId],
  status: String
}
```

รองรับการสำรวจทรัพยากรท้องถิ่นและการเชื่อมโยงใบงาน 9 ใบงาน

---

# 17. Study Areas

Collection: `study_areas`

```js
{
  areaCode: String,
  areaNo: Number,
  name: String,
  description: String,
  locationDescription: String,
  latitude: Number,
  longitude: Number,
  mapX: Number,
  mapY: Number,
  imageUrl: String,
  mapImageUrl: String,
  plantIds: [ObjectId],
  facilities: [String],
  status: String,
  sortOrder: Number
}
```

### Initial Requirement

รองรับพื้นที่ศึกษาอย่างน้อย **16 พื้นที่**

อย่าสร้างชื่อพื้นที่สมมติเป็นข้อมูลทางการ หากยังไม่มีข้อมูลจริง ให้ใช้:

```text
พื้นที่ศึกษา 01
พื้นที่ศึกษา 02
...
พื้นที่ศึกษา 16
```

และให้ Admin แก้ไขภายหลัง

---

# 18. Projects

Collection: `projects`

```js
{
  projectCode: String,
  title: String,
  description: String,
  objective: [String],
  projectType: String,
  academicYearBE: Number,
  startDate: Date,
  endDate: Date,
  responsiblePersonIds: [ObjectId],
  departments: [String],
  budget: Number,
  outcomes: String,
  images: [String],
  documents: [ObjectId],
  externalUrl: String,
  status: String,
  isFeatured: Boolean
}
```

ตัวอย่างประเภท:

```text
โครงการประจำปี
โครงการอนุรักษ์พันธุกรรมพืช
โครงการอบรม
โครงการบูรณาการการเรียนการสอน
โครงการสำรวจ
โครงการพัฒนาสื่อ
อื่น ๆ
```

---

# 19. Activities

Collection: `activities`

```js
{
  title: String,
  slug: String,
  activityCategoryId: ObjectId,
  description: String,
  eventDate: Date,
  eventDateText: String,
  location: String,
  organizer: String,
  participants: [String],
  summary: String,
  images: [String],
  videos: [String],
  documents: [ObjectId],
  projectId: ObjectId,
  relatedPlantIds: [ObjectId],
  academicYearBE: Number,
  status: String,
  isFeatured: Boolean
}
```

---

# 20. Activity Categories

Collection: `activity_categories`

Seed categories:

```text
การประชุมวิชาการและนิทรรศการ
การประชุม / อบรม
การบูรณาการการเรียนการสอน
โครงการประจำปี
ศึกษาดูงาน
กิจกรรมอื่น ๆ
```

Schema:

```js
{
  name: String,
  slug: String,
  description: String,
  icon: String,
  sortOrder: Number,
  status: String
}
```

---

# 21. Works and Innovations

Collection: `innovations`

```js
{
  title: String,
  slug: String,
  type: String,
  yearBE: Number,
  academicYearBE: Number,
  authors: [String],
  department: String,
  advisor: String,
  abstract: String,
  description: String,
  objectives: [String],
  methods: String,
  results: String,
  benefits: String,
  images: [String],
  coverImageUrl: String,
  documentUrl: String,
  externalUrl: String,
  awards: [String],
  status: String,
  isFeatured: Boolean
}
```

รองรับข้อมูลจากเอกสารประเภท **ผลงานและนวัตกรรมเด่น**

---

# 22. Achievement / Good Deeds

Collection: `achievements`

```js
{
  title: String,
  description: String,
  yearBE: Number,
  category: String,
  personIds: [ObjectId],
  images: [String],
  documentUrl: String,
  externalUrl: String,
  status: String,
  isFeatured: Boolean
}
```

หน้า Public ชื่อ:

`แบ่งปันความดี`

---

# 23. Accumulated Works by Academic Year

Collection: `annual_works`

```js
{
  academicYearBE: Number,
  title: String,
  description: String,
  summary: String,
  spreadsheetUrl: String,
  documentUrl: String,
  projectIds: [ObjectId],
  innovationIds: [ObjectId],
  achievementIds: [ObjectId],
  status: String,
  sortOrder: Number
}
```

### Seed Academic Years

```text
2569
2568
2567
2566
2565
2564
2563
2562
2561
2560
```

หากข้อมูลปีใดยังไม่มี ให้เก็บเป็น record placeholder โดยไม่สร้างข้อมูลเท็จ

---

# 24. News / PR

Collection: `news`

```js
{
  title: String,
  slug: String,
  excerpt: String,
  content: String,
  coverImageUrl: String,
  images: [String],
  category: String,
  publishDate: Date,
  authorId: ObjectId,
  tags: [String],
  externalUrl: String,
  status: String,
  isFeatured: Boolean
}
```

---

# 25. Documents

Collection: `documents`

เป็นระบบจัดเก็บเอกสารกลาง

```js
{
  title: String,
  description: String,
  category: String,
  fileType: String,
  fileUrl: String,
  thumbnailUrl: String,
  fileSize: Number,
  pageCount: Number,
  academicYearBE: Number,
  yearBE: Number,
  documentNo: String,
  issuedDate: Date,
  tags: [String],
  relatedPage: String,
  relatedPlantId: ObjectId,
  relatedProjectId: ObjectId,
  downloadCount: Number,
  status: String,
  isFeatured: Boolean
}
```

## Document Categories

```text
คู่มือ
แบบฟอร์ม
คำสั่ง
รายงาน
ใบงาน
เอกสารการอบรม
เอกสารการบูรณาการ
ผลงานและนวัตกรรม
ประชาสัมพันธ์
อื่น ๆ
```

### Initial Document Topics from Source Website

ให้สร้าง seed records เฉพาะในลักษณะ metadata/placeholder เมื่อยังไม่มีไฟล์จริง:

```text
ขั้นตอนการสมัครสมาชิก
คู่มืองานสวนพฤกษศาสตร์โรงเรียน ปี 2560
ก.7-003
การดำเนินงาน 5 องค์ประกอบ
กระดาษวาดภาพทางพฤกษศาสตร์โรงเรียน
การดำเนินงาน 3 สาระ และ 1 ฐานทรัพยากร
ใบงาน 3 สาระการเรียนรู้
คำสั่งแต่งตั้งคณะกรรมการดำเนินงาน
การสำรวจฐานทรัพยากรท้องถิ่น 9 ใบงาน
ใบงานการสำรวจฐานทรัพยากรท้องถิ่น 9 ใบงาน
แบบฟอร์มรายงานผลการดำเนินงาน
ใบปฏิบัติงานบูรณาการ ศึกษาข้อมูลนิทรรศการ
```

**ห้ามสร้าง URL ไฟล์ปลอม** ให้ใช้ `fileUrl: null` จนกว่าจะได้รับ URL/file จริง

---

# 26. Videos

Collection: `videos`

```js
{
  title: String,
  description: String,
  provider: String,
  videoId: String,
  embedUrl: String,
  thumbnailUrl: String,
  category: String,
  publishDate: Date,
  sortOrder: Number,
  isFeatured: Boolean,
  status: String
}
```

`provider`:

```text
youtube
facebook
other
```

ไม่ควรฝัง URL YouTube กระจายอยู่ใน frontend

---

# 27. Related Agencies

Collection: `related_agencies`

Seed data categories:

```text
โครงการอนุรักษ์พันธุกรรมพืช
ฐานทรัพยากรท้องถิ่น อพ.สธ.
หน่วยงานสนองพระราชดำริ
สำนักงานหอพรรณไม้
```

Schema:

```js
{
  name: String,
  description: String,
  logoUrl: String,
  websiteUrl: String,
  facebookUrl: String,
  phone: String,
  email: String,
  address: String,
  category: String,
  sortOrder: Number,
  status: String
}
```

---

# 28. Integration Guides

Collection: `integration_guides`

สำหรับหน้า **คู่มือแผนบูรณาการ**

```js
{
  title: String,
  description: String,
  academicYearBE: Number,
  subject: String,
  department: String,
  teacherIds: [ObjectId],
  content: String,
  lessonPlanUrl: String,
  documents: [ObjectId],
  images: [String],
  status: String
}
```

---

# 29. Contact Information

Collection: `contact_information`

```js
{
  organizationName: String,
  address: String,
  phone: String,
  fax: String,
  email: String,
  website: String,
  mapUrl: String,
  officeHours: String,
  socialLinks: [
    {
      name: String,
      url: String,
      icon: String,
      isActive: Boolean
    }
  ],
  status: String
}
```

---

# 30. Admin Users

Collection: `users`

```js
{
  username: String,
  email: String,
  passwordHash: String,
  displayName: String,
  role: String,
  avatarUrl: String,
  isActive: Boolean,
  lastLoginAt: Date,
  createdAt: Date,
  updatedAt: Date
}
```

Roles:

```text
superadmin
admin
editor
staff
```

ห้ามเก็บ password แบบ plaintext

---

# 31. Audit Logs

Collection: `audit_logs`

```js
{
  userId: ObjectId,
  action: String,
  collectionName: String,
  documentId: ObjectId,
  before: Object,
  after: Object,
  ipAddress: String,
  userAgent: String,
  createdAt: Date
}
```

Actions:

```text
create
update
delete
publish
archive
login
logout
```

---

# 32. Recommended MongoDB Collection Summary

ระบบเริ่มต้นให้รองรับ Collections อย่างน้อยดังนี้:

```text
1.  site_settings
2.  organization_profile
3.  history_timeline
4.  responsibilities
5.  personnel
6.  plants
7.  plant_types
8.  plant_registrations
9.  plant_images
10. five_components
11. three_learning_contents
12. local_resources
13. study_areas
14. projects
15. activities
16. activity_categories
17. innovations
18. achievements
19. annual_works
20. news
21. documents
22. videos
23. related_agencies
24. integration_guides
25. contact_information
26. users
27. audit_logs
```

> แม้ระบบเดิมจะเรียกโครงสร้างเป็น 22 Collections แต่ Specification นี้แยกข้อมูลที่มีความสัมพันธ์สูงออกเป็นหลาย Collection เพื่อรองรับการค้นหา การบริหารข้อมูล และการขยายระบบในอนาคต

---

# 33. Data Relationships

```text
plants
 ├── plant_types
 ├── plant_images
 ├── plant_registrations
 ├── study_areas
 └── documents

activities
 ├── activity_categories
 ├── projects
 ├── plants
 └── documents

projects
 ├── personnel
 ├── innovations
 └── documents

innovations
 ├── personnel
 └── documents

five_components
 └── documents

three_learning_contents
 └── documents

local_resources
 └── documents

news
 └── users
```

---

# 34. API Requirements

สร้าง REST API ตาม resource

## Public API

```text
GET    /api/site-settings
GET    /api/organization
GET    /api/history
GET    /api/responsibilities
GET    /api/personnel
GET    /api/plants
GET    /api/plants/:id
GET    /api/plants/search?q=
GET    /api/plant-types
GET    /api/five-components
GET    /api/three-learning-contents
GET    /api/local-resources
GET    /api/study-areas
GET    /api/projects
GET    /api/activities
GET    /api/activity-categories
GET    /api/innovations
GET    /api/achievements
GET    /api/annual-works
GET    /api/news
GET    /api/documents
GET    /api/videos
GET    /api/related-agencies
GET    /api/integration-guides
GET    /api/contact
```

## Admin API

ทุก Resource หลักควรมี:

```text
POST   /api/admin/:resource
GET    /api/admin/:resource
GET    /api/admin/:resource/:id
PUT    /api/admin/:resource/:id
PATCH  /api/admin/:resource/:id/status
DELETE /api/admin/:resource/:id
```

ใช้ middleware:

```text
authenticateJWT
requireRole
validateRequest
errorHandler
```

---

# 35. Plant Search Requirements

หน้าค้นหาพรรณไม้ต้องค้นหาได้จาก:

- รหัสทะเบียน
- รหัสพรรณไม้
- ชื่อไทย
- ชื่อพื้นเมือง
- ชื่อวิทยาศาสตร์
- ชื่อสามัญ
- วงศ์
- สกุล
- ปี พ.ศ.
- ประเภทพรรณไม้
- พื้นที่ศึกษา

ตัวอย่าง API:

```text
GET /api/plants?q=ผักชีช้าง
GET /api/plants?family=ASPARAGACEAE
GET /api/plants?yearBE=2565
GET /api/plants?plantTypeId=...
GET /api/plants?studyAreaId=...
```

รองรับ pagination:

```text
?page=1&limit=20
```

Response format:

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 0,
    "totalPages": 0
  }
}
```

---

# 36. Plant Detail Page

URL pattern:

```text
/plants/:slug
```

ต้องแสดงอย่างน้อย:

```text
รหัสทะเบียน
ชื่อไทย
ชื่อพื้นเมือง
ชื่อวิทยาศาสตร์
วงศ์
สกุล
ถิ่นกำเนิด
การกระจายพันธุ์ในประเทศไทย
การกระจายพันธุ์ในต่างประเทศ
สภาพนิเวศวิทยา
ช่วงออกดอก
ช่วงติดผล
การขยายพันธุ์
การใช้ประโยชน์
รูปภาพ
ภาพวาดพรรณไม้
ป้ายพรรณไม้
ทะเบียนภาพถ่าย
พื้นที่ศึกษา
แผนที่
เอกสารอ้างอิง
QR Code
```

---

# 37. Initial Plant Seed Data

ใช้ข้อมูลตัวอย่างที่ตรวจพบจากเว็บไซต์ต้นแบบโดยเน้นข้อมูลที่ปรากฏชัดเจน

## Plant Example 1

```json
{
  "registrationNo": "example",
  "thaiName": "ผักชีช้าง",
  "scientificName": "Asparagus racemosus Willd.",
  "family": "ASPARAGACEAE",
  "commonNames": ["Shatavari"],
  "status": "draft"
}
```

## Plant Example 2

```json
{
  "thaiName": "ผักโหม",
  "status": "draft"
}
```

> Seed ชุดแรกให้ถือเป็น **draft/reference seed** จนกว่าจะมีการตรวจสอบเลขทะเบียน ชื่อพื้นเมือง และรายละเอียดทางพฤกษศาสตร์จากแหล่งข้อมูลต้นฉบับ

---

# 38. Initial Plant Year Data

ข้อมูลรายการที่ตรวจพบจากหน้าเว็บไซต์ต้นแบบสามารถจัด seed เป็นรายการอ้างอิง เช่น:

### ปี 2565

```text
302 — กล้วยไม้ดิน
303 — ไก่ฟ้ายักษ์
304 — สร้อยสายเพชร
305 — เดหลีเล็ก
306 — เกล็ดทับทิม
307 — เกล็ดแก้ว
```

### ปี 2564

```text
297 — ลิ้นมังกรแคระ
298 — คล้าพญาคล้าทอง
299 — สาลิกาด่าง
300 — นาคบริพัตร
301 — หมากผู้หมากเมีย
```

### ปี 2563

```text
291 — รวงผึ้ง
292 — พุดพิชญา
293 — ใบเงิน
294 — ใบทอง
295 — ใบนาก
296 — หนวดปลาดุกแคระ
```

### ปี 2562

```text
286 — เศรษฐีเรือนนอก
287 — ขิง
288 — ข่า
289 — อ้อย
290 — มะละกอ
```

สำหรับปีอื่น ๆ ที่ยังไม่ได้ยืนยันรายละเอียด ให้สร้างเฉพาะปี/หมวดหมู่โดยไม่แต่งข้อมูลชื่อพรรณไม้เพิ่ม

---

# 39. Data Validation Rules

## Plants

```text
registrationNo — string, indexed
thaiName — required
scientificName — recommended
family — recommended
status — enum
```

## News

```text
title — required
content — required
publishDate — requiredเมื่อ status = published
```

## Documents

```text
title — required
fileType — required
fileUrl — requiredเมื่อเผยแพร่จริง
```

## Personnel

```text
firstName — required
lastName — required
position — required
```

---

# 40. Admin Dashboard Modules

สร้าง Dashboard ตามโมดูล:

```text
Dashboard
├── Statistics
├── Plant Management
├── Plant Categories
├── Personnel
├── 5 Components
├── 3 Learning Contents
├── Local Resources
├── Study Areas
├── Projects
├── Activities
├── Innovations
├── Achievements
├── Annual Works
├── News
├── Documents
├── Videos
├── Related Agencies
├── Integration Guides
├── Site Settings
├── Users
└── Audit Logs
```

Dashboard ต้องมี:

- Search
- Filter
- Sort
- Pagination
- Create
- Edit
- Delete
- Publish / Unpublish
- Bulk actions เมื่อเหมาะสม
- Image preview
- File upload
- Form validation
- Confirmation dialog

---

# 41. Dashboard Statistics

แสดงอย่างน้อย:

```text
จำนวนพรรณไม้ทั้งหมด
จำนวนพื้นที่ศึกษา
จำนวนกิจกรรม
จำนวนโครงการ
จำนวนผลงานและนวัตกรรม
จำนวนข่าว
จำนวนเอกสาร
จำนวนบุคลากร
```

API:

```text
GET /api/admin/dashboard/stats
```

---

# 42. Public Website UI Data Requirements

หน้าแรกควรดึงข้อมูลจาก API ในลำดับ:

```text
1. Site Settings
2. Hero / Intro
3. Organization / Director
4. Plant Statistics
5. Featured Plants
6. 5 Components
7. 3 Learning Contents
8. Study Areas
9. Featured Activities
10. Featured Projects
11. Innovations
12. Latest News
13. Featured Documents
14. Related Agencies
15. Contact
```

ห้ามเขียนข้อมูลซ้ำในหลาย component

---

# 43. Media Rules

Image Object:

```js
{
  url: String,
  alt: String,
  caption: String,
  width: Number,
  height: Number,
  sortOrder: Number
}
```

ทุกภาพบน public website ต้องมี `alt`

ต้องใช้ lazy loading สำหรับ gallery ที่มีรูปจำนวนมาก

เอกสาร PDF ไม่ควรโหลดทั้งไฟล์ในหน้า list

---

# 44. Slug Rules

สร้าง slug ภาษาอังกฤษ/อักษรละตินเป็นหลัก เพื่อความเสถียรของ URL

ตัวอย่าง:

```text
/plants/phakchi-chang
/activities/botanical-training-2566
/projects/local-resource-survey
/news/annual-event-2569
```

Slug ต้อง unique ต่อ Collection

---

# 45. SEO and Metadata

ทุกหน้าสำคัญต้องสร้าง:

```text
Title
Description
Canonical URL
Open Graph Title
Open Graph Description
Open Graph Image
```

หน้า Plant Detail ให้ใช้ชื่อพรรณไม้เป็น title หลัก

---

# 46. Thai Date Rules

Database เก็บ Date แบบ ISO Date / UTC

Frontend แสดง:

```text
วัน/เดือน/พ.ศ.
```

ตัวอย่าง:

```text
12 กันยายน 2569
```

Utility functions ต้องมี:

```text
formatThaiDate()
formatThaiDateShort()
formatThaiYear()
```

ห้ามเก็บวันที่เป็น string อย่างเดียวหากข้อมูลนั้นต้อง sort/filter ตามเวลา

---

# 47. Seed.js Requirement

สร้างไฟล์:

```text
server/seed.js
```

Seed ต้องสร้างข้อมูลอย่างน้อย:

```text
site_settings
organization_profile
history_timeline
responsibilities
plant_types
plants
five_components
three_learning_contents
activity_categories
activities
annual_works
related_agencies
study_areas
```

ข้อมูลที่ยังไม่มีแหล่งต้นฉบับให้ใช้:

```text
status: "draft"
```

และใส่ note:

```text
"ข้อมูลตัวอย่างจากโครงสร้างเว็บไซต์ต้นแบบ ต้องตรวจสอบก่อนเผยแพร่"
```

ห้ามสร้างข้อมูลราชการ ผู้บริหาร รางวัล หรือเอกสารที่ไม่ได้ตรวจสอบขึ้นเองเป็น `published`

---

# 48. File / Folder Structure Recommendation

```text
project/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── types/
│   └── public/
│
├── server/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── middleware/
│   ├── validators/
│   ├── utils/
│   ├── uploads/
│   ├── seed.js
│   └── app.js
│
├── docs/
│   └── data-spec.md
└── .env
```

---

# 49. Backend Model Naming

ใช้ชื่อ model เอกพจน์ PascalCase:

```text
SiteSetting
OrganizationProfile
HistoryTimeline
Responsibility
Personnel
Plant
PlantType
PlantRegistration
PlantImage
FiveComponent
ThreeLearningContent
LocalResource
StudyArea
Project
Activity
ActivityCategory
Innovation
Achievement
AnnualWork
News
Document
Video
RelatedAgency
IntegrationGuide
ContactInformation
User
AuditLog
```

Collection MongoDB ใช้ snake_case หรือ plural ตามมาตรฐานเดียวกันทั้งระบบ

---

# 50. API Error Format

ทุก API ต้องคืน format เดียวกัน:

```json
{
  "success": false,
  "message": "ไม่พบข้อมูล",
  "errorCode": "RESOURCE_NOT_FOUND",
  "errors": []
}
```

Validation error:

```json
{
  "success": false,
  "message": "ข้อมูลไม่ถูกต้อง",
  "errorCode": "VALIDATION_ERROR",
  "errors": [
    {
      "field": "thaiName",
      "message": "กรุณาระบุชื่อพรรณไม้"
    }
  ]
}
```

---

# 51. Security Requirements

- JWT authentication สำหรับ Admin
- bcrypt/argon2 สำหรับ password hashing
- Helmet
- CORS configuration
- Rate limiting สำหรับ login
- Request validation
- MongoDB query sanitization
- จำกัดชนิดและขนาดไฟล์ upload
- ตรวจสอบ MIME type
- ห้าม executable upload
- Audit log สำหรับข้อมูลสำคัญ
- Environment variables สำหรับ secrets

---

# 52. Performance Requirements

- Pagination ทุก list
- Lazy loading images
- Thumbnail generation
- MongoDB indexes สำหรับ search fields
- Server-side filtering
- Server-side sorting
- Cache สำหรับ Site Settings / category data เมื่อเหมาะสม
- ไม่ส่งข้อมูล document เต็มใน list endpoint
- ใช้ `.select()` เพื่อลด payload ใน endpoint list

---

# 53. Data Import Strategy

ควรรองรับการนำเข้าข้อมูลพรรณไม้จาก CSV/Excel ในอนาคต

ตัวอย่าง columns:

```text
registrationNo
plantCode
thaiName
localNames
scientificName
family
genus
species
commonNames
origin
distributionThailand
distributionOtherCountries
ecology
floweringPeriod
fruitingPeriod
propagation
uses
yearBE
studyAreaCode
```

Admin ต้องตรวจสอบ preview ก่อน import จริง

---

# 54. Backup Strategy

ระบบ Production ต้องมี:

- MongoDB backup
- File backup
- Database restore procedure
- Export JSON/CSV สำหรับข้อมูลพรรณไม้

อย่างน้อย Admin ต้องสามารถ export:

```text
Plants CSV
Activities CSV
Projects CSV
Personnel CSV
Documents CSV
```

---

# 55. Content Quality Rules

AI Coding Agent ต้อง **ไม่สร้างข้อมูลจริงขึ้นเอง** ในกรณีที่ไม่มีแหล่งอ้างอิง

แยกข้อมูลเป็น:

```text
verified
reference
placeholder
```

โดยแนะนำเพิ่ม field:

```js
sourceType: String,
sourceUrl: String,
sourceNote: String,
verifiedAt: Date,
verifiedBy: ObjectId
```

`sourceType`:

```text
official
source_website
uploaded_document
manual_entry
placeholder
```

---

# 56. Recommended Source Tracking

ข้อมูลที่นำมาจากเว็บไซต์ต้นแบบต้องมี metadata เช่น:

```js
{
  sourceType: "source_website",
  sourceUrl: "https://sites.google.com/gsuite.udvc.ac.th/botanicaludvc/",
  sourceNote: "ข้อมูลอ้างอิงจากเว็บไซต์ Botanical UDVC ต้นแบบ",
  verifiedAt: null
}
```

เมื่อผู้ดูแลตรวจสอบแล้วจึงเปลี่ยนเป็น:

```text
sourceType = official
verifiedAt = <date>
verifiedBy = <admin user id>
```

---

# 57. Public Data vs Admin Data

Public API ต้องไม่ส่ง:

- passwordHash
- internal audit data
- private user information
- draft content เว้นแต่ Admin
- internal file storage path

Public API ส่งเฉพาะ:

```text
published
```

Admin API สามารถเห็น:

```text
draft
published
archived
```

---

# 58. Required Deliverables for AI Coding Agent

AI Coding Agent ต้องสร้าง:

### Database

```text
models/*.js
seed.js
indexes
relationships
validation
```

### Backend

```text
controllers/
routes/
services/
middleware/
validators/
```

### Frontend

```text
Public pages
Admin pages
CRUD forms
Search pages
Detail pages
Gallery
Document viewer/link
```

### API Documentation

สร้าง:

```text
API.md
```

พร้อม endpoint, request, response และตัวอย่าง

---

# 59. Acceptance Criteria

ระบบถือว่าผ่านเมื่อ:

1. เปิดหน้า Home ได้โดยไม่มีข้อมูล hard-coded ที่ควรอยู่ใน database
2. ค้นหาพรรณไม้ได้จากชื่อและรหัสทะเบียน
3. เปิดหน้า Plant Detail ได้
4. Filter พรรณไม้ตามปี/วงศ์/ประเภท/พื้นที่ได้
5. Admin สามารถเพิ่มพรรณไม้ได้
6. Admin สามารถแก้ไขพรรณไม้ได้
7. Admin สามารถเปลี่ยน draft/published ได้
8. Admin สามารถเพิ่มกิจกรรมได้
9. Admin สามารถเพิ่มข่าวได้
10. Admin สามารถจัดการเอกสารได้
11. Admin สามารถจัดการบุคลากรได้
12. หน้า 5 องค์ประกอบดึงข้อมูลจาก database
13. หน้า 3 สาระการเรียนรู้ดึงข้อมูลจาก database
14. หน้า Local Resources ดึงข้อมูลจาก database
15. หน้า Study Areas รองรับอย่างน้อย 16 พื้นที่
16. Annual Works รองรับปี 2560–2569
17. Responsive บน Desktop / Tablet / Mobile
18. Thai UTF-8 แสดงผลถูกต้อง
19. API มี validation และ error handling
20. มี seed data สำหรับเริ่มระบบ

---

# 60. Final AI Coding Instruction

```text
Build a production-ready Botanical UDVC information management website using React + Node.js/Express + MongoDB/Mongoose.

Use this document as the authoritative DATA SPECIFICATION.

Do not hard-code content that belongs in the database.
Create normalized Mongoose models with relationships, indexes, validation, CRUD APIs, seed.js, public APIs, admin APIs, and responsive frontend pages.

Preserve Thai language content and support Buddhist Era years.
Use draft/published/archived workflow.
Track source provenance for historical and botanical data.
Never invent official personnel, awards, documents, plant registration numbers, or institutional facts.
Unknown data must be stored as draft/placeholder and clearly marked for verification.

The main data domains are:
- Organization
- History
- Responsibilities
- Personnel
- Plants
- Plant Types
- Plant Registrations
- Plant Images
- Five Components
- Three Learning Contents
- Local Resources
- Study Areas
- Projects
- Activities
- Innovations
- Achievements
- Annual Works
- News
- Documents
- Videos
- Related Agencies
- Integration Guides
- Contact
- Users
- Audit Logs

Build reusable components and services so the public website and admin dashboard consume the same REST API.
```

---

# 61. Important Data Integrity Note

เอกสารนี้เป็นการแปลง **โครงสร้าง/ประเภทข้อมูลจากเว็บไซต์ต้นแบบ** ให้เป็นรูปแบบระบบฐานข้อมูลสำหรับการพัฒนาเว็บไซต์ใหม่ ไม่ใช่การยืนยันว่าข้อมูลทุก record ในฐานข้อมูลเป็นข้อมูลทางราชการที่ผ่านการตรวจสอบแล้ว

ข้อมูลใน seed ที่ยังไม่มีไฟล์ต้นฉบับหรือไม่ได้ตรวจสอบกับเอกสารทางการต้องตั้งเป็น `draft` หรือ `placeholder` และเปิดให้ Admin ตรวจสอบก่อนเผยแพร่

