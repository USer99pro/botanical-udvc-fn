# Botanical UDVC — Website Specification & AI Build Prompt

> เอกสาร Specification สำหรับสร้างเว็บไซต์ใหม่ของ **งานสวนพฤกษศาสตร์โรงเรียน ฝ่ายวิชาการ วิทยาลัยอาชีวศึกษาอุดรธานี (UDVC)** โดยอ้างอิงโครงสร้างและเนื้อหาที่เผยแพร่บน Google Sites เดิม
>
> **Reference:** https://sites.google.com/gsuite.udvc.ac.th/botanicaludvc/home
>
> **เป้าหมาย:** สร้างเว็บไซต์ใหม่ที่ทันสมัย Responsive ใช้งานง่าย รองรับภาษาไทย และเปลี่ยนจากเว็บ Google Sites แบบเดิมให้เป็นระบบเว็บไซต์ที่ดูแลข้อมูลได้เป็นระบบ โดยคงหมวดหมู่และสาระสำคัญเดิมไว้

---

## 1. Project Overview

### ชื่อโครงการ

**ระบบเว็บไซต์งานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี**

### ชื่อภาษาอังกฤษ

**School Botanical Garden — Udonthani Vocational College**

### วัตถุประสงค์

1. เป็นศูนย์กลางข้อมูลและสารสนเทศของงานสวนพฤกษศาสตร์โรงเรียน
2. เผยแพร่ข้อมูลพรรณไม้และผลงานของนักเรียน/นักศึกษา
3. เผยแพร่กิจกรรม ข่าวสาร และประชาสัมพันธ์
4. ให้บริการดาวน์โหลดเอกสาร แบบฟอร์ม และคู่มือ
5. เชื่อมโยงข้อมูลกับหน่วยงานที่เกี่ยวข้อง
6. รองรับการค้นหาข้อมูลพรรณไม้และเอกสาร
7. รองรับการจัดการข้อมูลผ่านระบบ Admin ในอนาคต

---

# 2. Information Architecture

โครงสร้างหลักของเว็บไซต์:

```text
Home
│
├── เกี่ยวกับงานสวนพฤกษศาสตร์
│   ├── ความเป็นมา
│   ├── วัตถุประสงค์
│   ├── บทบาทหน้าที่
│   ├── โครงสร้างบุคลากร
│   └── แผนผังวิทยาลัย
│
├── พืชศึกษา
│   ├── ป้ายพรรณไม้สมบูรณ์
│   ├── ทะเบียนพรรณไม้
│   ├── ภาพวาดพรรณไม้
│   └── ทะเบียนภาพถ่ายพรรณไม้
│
├── การดำเนินงาน
│   ├── 5 องค์ประกอบ
│   ├── 3 สาระการเรียนรู้
│   ├── ฐานทรัพยากรท้องถิ่น
│   ├── ข้อมูลพรรณไม้
│   └── ประเภทพรรณไม้
│
├── ผลงาน
│   ├── ผลงานและนวัตกรรม
│   ├── ตารางสะสมผลงาน
│   ├── แบ่งปันความดี
│   ├── แผนผังพื้นที่ศึกษา
│   └── คู่มือแผนบูรณาการ
│
├── กิจกรรม
│   ├── การประชุมวิชาการและนิทรรศการ
│   ├── การประชุมกลุ่มสมาชิกและอบรม
│   ├── การบูรณาการการเรียนการสอน
│   ├── โครงการประจำปีการศึกษา
│   ├── ศึกษาดูงาน
│   ├── กิจกรรมอื่น ๆ
│   └── วารสารประชาสัมพันธ์
│
├── เอกสารดาวน์โหลด
│   ├── คู่มือ
│   ├── แบบฟอร์ม
│   ├── ใบงาน
│   ├── ก.7-003
│   ├── แบบรายงาน
│   └── เอกสารคำสั่ง
│
├── ข่าวสาร / ประชาสัมพันธ์
│
└── ติดต่อเรา
```

---

# 3. Homepage Specification

หน้าแรกต้องทำหน้าที่เป็น Dashboard ของเว็บไซต์

## 3.1 Header

ประกอบด้วย:

- Logo วิทยาลัย/งานสวนพฤกษศาสตร์
- ชื่อเว็บไซต์
- เมนูหลัก
- ปุ่มค้นหา
- ปุ่มเมนู Mobile
- Sticky Header เมื่อ Scroll

### Menu

```text
หน้าแรก
เกี่ยวกับเรา
พืชศึกษา
การดำเนินงาน
ผลงาน
กิจกรรม
เอกสาร
ข่าวสาร
ติดต่อเรา
```

---

## 3.2 Hero Section

แสดงภาพพื้นที่สวนพฤกษศาสตร์/พรรณไม้

ข้อความ:

> งานสวนพฤกษศาสตร์โรงเรียน  
> วิทยาลัยอาชีวศึกษาอุดรธานี

ข้อความรอง:

> แหล่งเรียนรู้ด้านพรรณไม้ ทรัพยากรธรรมชาติ และการอนุรักษ์พันธุกรรมพืช

ปุ่ม:

- `สำรวจพรรณไม้`
- `ดูผลงาน`
- `ดาวน์โหลดเอกสาร`

---

# 4. Quick Access

สร้าง Card สำหรับเข้าถึงข้อมูลสำคัญ:

```text
🌱 พืชศึกษา
📚 5 องค์ประกอบ
🌿 3 สาระการเรียนรู้
🗺️ พื้นที่ศึกษา
📊 ผลงาน
📄 เอกสารดาวน์โหลด
📰 ข่าวสาร
📷 ภาพกิจกรรม
```

Card ต้องมี:

- Icon
- Title
- Description
- จำนวนข้อมูล (ถ้ามี)
- ปุ่ม `ดูรายละเอียด`

---

# 5. About Section

หน้าเกี่ยวกับงานสวนพฤกษศาสตร์ต้องมี:

## ความเป็นมา

อธิบายแนวคิดของงานสวนพฤกษศาสตร์โรงเรียน และความสัมพันธ์กับการอนุรักษ์พันธุกรรมพืช

## บทบาทหน้าที่

ข้อมูลหลักจากเว็บไซต์เดิม:

1. จัดทำแบบรายงานความก้าวหน้า คำสั่ง และรวบรวมเอกสารรายงานผลการดำเนินงานประจำปีการศึกษา
2. รวบรวมและเผยแพร่สารสนเทศที่เป็นประโยชน์ต่อนักเรียน นักศึกษา สถานศึกษา องค์กร และประชาชน
3. กำกับ ดูแลเว็บไซต์และช่องทางประชาสัมพันธ์ให้เป็นไปตามกฎหมายที่เกี่ยวข้อง
4. ดำเนินงานตาม 5 องค์ประกอบ 3 สาระการเรียนรู้ และฐานทรัพยากรท้องถิ่น
5. รวบรวมและจัดทำรายงานผลการดำเนินงาน
6. ประสานงานกับหน่วยงานภายในและภายนอก
7. จัดทำปฏิทินการปฏิบัติงานและรายงานผล
8. ดูแลทรัพย์สินที่ได้รับมอบหมาย
9. ปฏิบัติงานอื่นตามที่ได้รับมอบหมาย

> หมายเหตุ: ข้อความทางราชการควรเก็บในฐานข้อมูล CMS เพื่อให้ผู้ดูแลแก้ไขได้โดยไม่ต้องแก้ Source Code

---

# 6. Personnel

สร้างหน้า:

`/about/personnel`

แสดงบุคลากรแบบ Card

แต่ละ Card:

```text
[รูปภาพ]
ชื่อ-นามสกุล
ตำแหน่ง
ฝ่าย/หน่วยงาน
รายละเอียดเพิ่มเติม
```

ข้อมูลจากเว็บไซต์เดิมควรนำเข้าเป็น Initial Data และเปิดให้ Admin แก้ไขได้

---

# 7. Plant Study

หน้า `/plants`

เป็นส่วนสำคัญที่สุดของระบบ

## 7.1 Plant Database

แต่ละพรรณไม้ควรมี:

```text
Plant ID
ชื่อไทย
ชื่อท้องถิ่น
ชื่อสามัญ
ชื่อวิทยาศาสตร์
วงศ์
สกุล
ชนิด
ลักษณะทางพฤกษศาสตร์
ถิ่นกำเนิด
การกระจายพันธุ์
ประโยชน์
สรรพคุณ
ส่วนที่ใช้
ข้อมูลการอนุรักษ์
พื้นที่พบ
วันที่สำรวจ
ผู้สำรวจ
รูปภาพ
ภาพดอก
ภาพใบ
ภาพผล
ภาพลำต้น
เอกสารอ้างอิง
สถานะเผยแพร่
```

## 7.2 Search

ต้องค้นหาได้จาก:

- ชื่อพรรณไม้
- ชื่อวิทยาศาสตร์
- ชื่อท้องถิ่น
- วงศ์
- ประเภท
- พื้นที่ศึกษา

รองรับ:

- Search แบบ Instant Search
- Filter
- Sort
- Pagination

---

# 8. Plant Detail

URL:

```text
/plants/:slug
```

Layout:

```text
รูปภาพหลัก
ชื่อพรรณไม้
ชื่อวิทยาศาสตร์
วงศ์
ประเภท
```

Tabs:

```text
ข้อมูลทั่วไป
ลักษณะทางพฤกษศาสตร์
การใช้ประโยชน์
ภาพถ่าย
พื้นที่พบ
เอกสาร
```

เพิ่ม:

- Share
- Print
- Download PDF
- QR Code สำหรับพรรณไม้แต่ละรายการ

---

# 9. Plant Gallery

หน้า:

`/plants/gallery`

แสดง:

- ภาพวาดพรรณไม้
- ภาพถ่ายพรรณไม้
- ภาพกิจกรรมเกี่ยวกับพืช
- ภาพตัวอย่างพรรณไม้

ต้องรองรับ:

- Masonry/Grid
- Lightbox
- Fullscreen
- Caption
- Search
- Category Filter

---

# 10. Five Components

หน้า:

`/operation/five-components`

สร้าง UI แบบ Timeline / Stepper:

```text
01 การจัดทำป้ายชื่อพรรณไม้
        ↓
02 การรวบรวมพรรณไม้เข้าปลูกในโรงเรียน
        ↓
03 การศึกษาข้อมูลด้านต่าง ๆ
        ↓
04 การรายงานผลการเรียนรู้
        ↓
05 การนำไปใช้ประโยชน์ทางการศึกษา
```

แต่ละองค์ประกอบต้องมี:

- ชื่อ
- คำอธิบาย
- ขั้นตอน
- เอกสาร
- ภาพประกอบ
- ตัวอย่างผลงาน
- Download

---

# 11. Three Learning Themes

หน้า:

`/operation/three-learning-themes`

สร้าง Card:

```text
🌱 ธรรมชาติแห่งชีวิต
🌿 สรรพสิ่งล้วนพันเกี่ยว
🌏 ประโยชน์แท้แก่มหาชน
```

แต่ละหัวข้อมี:

- ความหมาย
- แนวทางดำเนินงาน
- ตัวอย่างกิจกรรม
- ผลงาน
- เอกสารประกอบ

---

# 12. Local Resource Database

หน้า:

`/operation/local-resources`

ระบบฐานทรัพยากรท้องถิ่นควรแบ่งเป็น:

```text
ทรัพยากรกายภาพ
ทรัพยากรชีวภาพ
ทรัพยากรวัฒนธรรมและภูมิปัญญา
```

รองรับ:

- รายการทรัพยากร
- รูปภาพ
- พิกัด/พื้นที่
- รายละเอียด
- ภูมิปัญญาท้องถิ่น
- การใช้ประโยชน์
- เอกสารอ้างอิง

---

# 13. Works & Innovation

หน้า:

`/works`

Card:

```text
รูปภาพ
ชื่อผลงาน
ผู้จัดทำ
ระดับชั้น
ปีการศึกษา
ประเภท
คำอธิบาย
```

Filter:

```text
ปีการศึกษา
ประเภทผลงาน
แผนกวิชา
ระดับการศึกษา
```

---

# 14. Accumulated Works

หน้า:

`/works/archive`

ต้องรองรับข้อมูลตามปีการศึกษา:

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

ใช้ Timeline หรือ Year Selector

---

# 15. Activities

หน้า:

`/activities`

Category:

```text
การประชุมวิชาการและนิทรรศการ
การประชุมกลุ่มสมาชิกและอบรม
การบูรณาการการเรียนการสอน
โครงการประจำปีการศึกษา
ศึกษาดูงาน
กิจกรรมอื่น ๆ
วารสารประชาสัมพันธ์
```

Activity Card:

```text
Cover Image
ชื่อกิจกรรม
วันที่
สถานที่
ประเภท
Short Description
จำนวนภาพ
```

---

# 16. Activity Detail

URL:

```text
/activities/:slug
```

ประกอบด้วย:

- ชื่อกิจกรรม
- วันที่
- สถานที่
- รายละเอียด
- Gallery
- เอกสาร
- Video
- Related Activities

---

# 17. News / Public Relations

หน้า:

`/news`

รองรับ:

- ข่าวประชาสัมพันธ์
- ประกาศ
- ข่าวกิจกรรม
- ข่าวผลงาน
- ข่าวรับสมัคร/แจ้งข้อมูล

Fields:

```text
title
slug
excerpt
content
cover_image
category
author
published_at
status
view_count
```

---

# 18. Documents

หน้า:

`/documents`

หมวดเอกสาร:

```text
คู่มือ
แบบฟอร์ม
ใบงาน
ก.7-003
เอกสาร 5 องค์ประกอบ
เอกสาร 3 สาระ
เอกสารฐานทรัพยากรท้องถิ่น
คำสั่ง
แบบรายงาน
แผนบูรณาการ
```

Document Card:

```text
Icon
ชื่อเอกสาร
ประเภทไฟล์
ขนาดไฟล์
ปีการศึกษา
วันที่เผยแพร่
Download
Preview
```

รองรับ:

- PDF
- DOC/DOCX
- XLS/XLSX
- PPT/PPTX
- ZIP
- Image

---

# 19. Download Management

Admin ต้องสามารถ:

- Upload File
- Replace File
- Delete File
- ตั้งชื่อไฟล์
- ตั้งหมวดหมู่
- ระบุปีการศึกษา
- Preview
- กำหนด Public/Private
- Download Counter

---

# 20. College Map

หน้า:

`/map`

แสดง:

- แผนผังวิทยาลัย
- พื้นที่ศึกษา
- จุดพรรณไม้
- พื้นที่สำรวจ

ควรรองรับ:

```text
Interactive Map
Marker
Plant Location
Area
Popup
Search
```

ถ้ามีข้อมูลพิกัดในอนาคตให้เพิ่ม GIS Layer

---

# 21. Donation / Plant Contribution Form

เว็บไซต์เดิมมีช่องทางให้กรอกข้อมูลบริจาคต้นไม้ผ่าน Google Forms

ระบบใหม่ควรทำเป็น Form ภายในเว็บไซต์:

```text
ชื่อผู้บริจาค
เบอร์โทรศัพท์
Email
ชื่อพรรณไม้
จำนวน
รายละเอียด
รูปภาพ
วันที่บริจาค
หมายเหตุ
```

สถานะ:

```text
รอตรวจสอบ
ตรวจสอบแล้ว
ไม่ผ่าน
```

Admin สามารถตรวจสอบและอนุมัติข้อมูลก่อนเผยแพร่

---

# 22. Search System

สร้าง Global Search

ค้นหาได้จาก:

```text
พรรณไม้
ผลงาน
กิจกรรม
ข่าวสาร
เอกสาร
บุคลากร
พื้นที่ศึกษา
```

UI:

```text
[ 🔍 ค้นหาข้อมูล... ]

ผลการค้นหา
ทั้งหมด | พรรณไม้ | เอกสาร | ข่าว | กิจกรรม | ผลงาน
```

---

# 23. Admin Dashboard

สร้างระบบหลังบ้าน:

`/admin`

Dashboard:

```text
จำนวนพรรณไม้
จำนวนผลงาน
จำนวนกิจกรรม
จำนวนเอกสาร
จำนวนข่าว
จำนวนผู้ใช้งาน
```

Charts:

- จำนวนพรรณไม้ตามประเภท
- ผลงานตามปีการศึกษา
- กิจกรรมรายเดือน
- Download เอกสาร
- จำนวนข้อมูลที่เพิ่มต่อเดือน

---

# 24. Admin Modules

```text
Dashboard
├── Plants
├── Plant Categories
├── Plant Images
├── Personnel
├── Works
├── Activities
├── News
├── Documents
├── Learning Themes
├── Five Components
├── Local Resources
├── Map Areas
├── Forms
├── Users
└── Settings
```

---

# 25. User Roles

## Admin

สิทธิ์ทั้งหมด

## Editor

สามารถ:

- เพิ่ม/แก้ไข Plant
- เพิ่มข่าว
- เพิ่มกิจกรรม
- เพิ่มผลงาน
- Upload เอกสาร

## Staff

สามารถ:

- เพิ่มข้อมูล
- แก้ไขข้อมูลที่ได้รับมอบหมาย

## Viewer

อ่านข้อมูลอย่างเดียว

---

# 26. Data Model

## users

```text
id
name
email
password_hash
role
avatar
status
created_at
updated_at
```

## plants

```text
id
plant_code
slug
thai_name
local_name
common_name
scientific_name
family
genus
species
description
botanical_characteristics
origin
distribution
benefits
medicinal_properties
location
survey_date
survey_by
status
created_at
updated_at
```

## plant_images

```text
id
plant_id
file_url
type
caption
sort_order
created_at
```

## works

```text
id
title
slug
description
cover_image
academic_year
department
education_level
creator
category
status
created_at
updated_at
```

## activities

```text
id
title
slug
description
category
event_date
location
cover_image
status
created_at
updated_at
```

## activity_images

```text
id
activity_id
file_url
caption
sort_order
```

## documents

```text
id
title
description
category
academic_year
file_url
file_type
file_size
download_count
status
created_at
updated_at
```

## news

```text
id
title
slug
excerpt
content
cover_image
category
author_id
published_at
status
view_count
created_at
updated_at
```

## local_resources

```text
id
name
category
description
benefit
wisdom
latitude
longitude
images
references
status
created_at
updated_at
```

---

# 27. Recommended Tech Stack

## Frontend

แนะนำ:

```text
React
Vite
TypeScript
Tailwind CSS
shadcn/ui
Lucide Icons
```

หรือหากต้องการ SEO สูง:

```text
Next.js
TypeScript
Tailwind CSS
shadcn/ui
```

## Backend

ตัวเลือก:

```text
Node.js
Express / NestJS
REST API
```

หรือใช้:

```text
Supabase
```

เพื่อให้พัฒนาเร็วขึ้น

## Database

แนะนำ:

```text
PostgreSQL
```

## Storage

```text
Supabase Storage
```

หรือ

```text
Cloudflare R2
```

## Authentication

```text
Supabase Auth
```

หรือ JWT

---

# 28. UI/UX Design

## Design Direction

เว็บไซต์ต้องให้ความรู้สึก:

```text
ธรรมชาติ
สะอาด
ทันสมัย
เป็นทางการ
เป็นเว็บไซต์สถานศึกษา
ใช้งานง่าย
```

## Color System

ใช้โทน:

```text
Primary   : Green
Secondary : Dark Green
Accent    : Natural / Earth
Background: White / Off White
Text      : Dark Gray
```

ไม่ควรใช้สีเขียวเข้มทั้งเว็บไซต์จนทำให้อ่านยาก

---

# 29. Typography

รองรับภาษาไทย

แนะนำ:

```text
Noto Sans Thai
IBM Plex Sans Thai
Sarabun
```

Heading:

```text
font-weight: 700
```

Body:

```text
font-weight: 400
```

---

# 30. Responsive Design

ต้องรองรับ:

```text
Mobile
Tablet
Laptop
Desktop
Large Desktop
```

Breakpoints:

```text
sm
md
lg
xl
2xl
```

Mobile ต้องมี:

```text
Hamburger Menu
Bottom-friendly buttons
Responsive cards
Responsive tables
Horizontal scroll สำหรับข้อมูลตาราง
```

---

# 31. Accessibility

ต้องรองรับ:

- Keyboard Navigation
- Alt Text
- Semantic HTML
- Contrast
- Focus State
- Screen Reader
- Accessible Form
- Error Message

---

# 32. SEO

ทุกหน้าต้องมี:

```text
title
description
canonical
Open Graph
Twitter Card
structured data
```

สร้าง:

```text
sitemap.xml
robots.txt
```

Schema ที่ควรใช้:

```text
Organization
EducationalOrganization
Article
ImageObject
BreadcrumbList
```

---

# 33. Performance

ต้อง:

- Lazy Load Image
- Optimize Image
- WebP/AVIF
- Code Splitting
- Cache API
- Pagination
- CDN
- Minify CSS/JS

เป้าหมาย:

```text
Lighthouse Performance > 90
Accessibility > 90
Best Practices > 90
SEO > 90
```

---

# 34. Security

ต้องมี:

```text
HTTPS
Authentication
Authorization
RBAC
Input Validation
File Type Validation
File Size Validation
Rate Limiting
XSS Protection
CSRF Protection
SQL Injection Protection
Secure Headers
```

ห้ามเปิดเผย:

```text
Database credentials
API Secret
JWT Secret
Service Account
Admin credentials
```

ใน Frontend

---

# 35. Content Management

ข้อมูลทั้งหมดควรแก้ไขผ่าน Admin ได้

ห้าม Hard-code เนื้อหาสำคัญ เช่น:

```text
ข่าว
กิจกรรม
บุคลากร
พรรณไม้
เอกสาร
ผลงาน
```

ให้เก็บใน Database

---

# 36. Migration จาก Google Sites

ต้องเตรียมระบบสำหรับนำข้อมูลเดิมเข้าระบบใหม่

Mapping:

```text
Google Sites Page
        ↓
Content Type
        ↓
Database
        ↓
New Website
```

ตัวอย่าง:

```text
พืชศึกษา
→ plants

ผลงานและนวัตกรรม
→ works

กิจกรรม
→ activities

เอกสารดาวน์โหลด
→ documents

ประชาสัมพันธ์
→ news

โครงสร้างบุคลากร
→ personnel
```

---

# 37. URL Structure

ใช้ URL ที่อ่านง่าย:

```text
/
/about
/about/history
/about/roles
/about/personnel
/about/map

/plants
/plants/:slug
/plants/gallery

/operation/five-components
/operation/three-learning-themes
/operation/local-resources

/works
/works/:slug
/works/archive

/activities
/activities/:slug

/news
/news/:slug

/documents

/contact

/admin
```

---

# 38. Components

สร้าง Reusable Components:

```text
Navbar
Footer
Hero
SectionHeader
Container
Card
PlantCard
WorkCard
ActivityCard
NewsCard
DocumentCard
PersonnelCard
SearchBar
Filter
Pagination
Modal
Gallery
Lightbox
Breadcrumb
Tabs
Accordion
Timeline
Stepper
DataTable
FileUploader
RichTextEditor
Map
Toast
ConfirmDialog
Loading
EmptyState
ErrorState
```

---

# 39. Homepage Component Tree

```text
<App>
 ├── <Navbar />
 ├── <Hero />
 ├── <QuickAccess />
 ├── <AboutPreview />
 ├── <FeaturedPlants />
 ├── <LatestWorks />
 ├── <LatestActivities />
 ├── <LatestNews />
 ├── <DocumentHighlights />
 ├── <RelatedOrganizations />
 ├── <ContactCTA />
 └── <Footer />
```

---

# 40. Footer

Footer ต้องแสดง:

**งานสวนพฤกษศาสตร์โรงเรียน ฝ่ายวิชาการ  
วิทยาลัยอาชีวศึกษาอุดรธานี**

ที่อยู่:

**เลขที่ 8 ถนนโพศรี อำเภอเมือง จังหวัดอุดรธานี 41000**

โทร:

**042-246-690 ต่อ 115**

และ:

```text
Quick Links
Facebook
Google Maps
Email
เว็บไซต์วิทยาลัย
```

---

# 41. Related Organizations

สร้าง Section:

```text
โครงการอนุรักษ์พันธุกรรมพืช
ฐานทรัพยากรท้องถิ่น อพ.สธ.
หน่วยงานสนองพระราชดำริ
สำนักงานหอพรรณไม้
```

ใช้ Logo + ชื่อ + Link

---

# 42. Initial Content

นำหมวดข้อมูลจากเว็บไซต์เดิมมาเป็น Initial Content ได้แก่:

- พืชศึกษา
- ป้ายพรรณไม้สมบูรณ์
- ทะเบียนพรรณไม้
- ภาพวาดพรรณไม้
- ทะเบียนภาพถ่ายพรรณไม้
- 5 องค์ประกอบ
- 3 สาระการเรียนรู้
- ฐานทรัพยากรท้องถิ่น
- ข้อมูลพรรณไม้
- ประเภทพรรณไม้
- ผลงานและนวัตกรรม
- ตารางสะสมผลงาน
- แบ่งปันความดี
- แผนผังพื้นที่ศึกษา
- คู่มือแผนบูรณาการ
- กิจกรรม
- ข่าวประชาสัมพันธ์
- เอกสารดาวน์โหลด
- หน่วยงานที่เกี่ยวข้อง

---

# 43. Content Accuracy Rules

สำคัญมาก:

1. ห้ามสร้างข้อมูลพรรณไม้ขึ้นมาเอง
2. ห้ามสร้างชื่อบุคลากรขึ้นมาเอง
3. ห้ามสร้างผลงาน/กิจกรรมที่ไม่มีหลักฐาน
4. ถ้าข้อมูลเดิมไม่มี ให้แสดง `ยังไม่มีข้อมูล`
5. วันที่ต้องเก็บเป็น ISO 8601 ใน Database
6. แสดงวันที่ภาษาไทยใน Frontend
7. รองรับปีการศึกษาแบบ พ.ศ.
8. เอกสารทุกไฟล์ต้องมี Source URL
9. รูปภาพต้องมี Alt Text
10. ข้อมูลที่นำเข้าจากเว็บไซต์เดิมควรมี `source_url`

---

# 44. Suggested Plant Schema Extension

เพิ่ม:

```text
source_url
source_type
verified
verified_by
verified_at
```

เพื่อให้สามารถตรวจสอบย้อนกลับได้ว่าแต่ละข้อมูลมาจากแหล่งใด

---

# 45. API Design

## Plants

```http
GET /api/plants
GET /api/plants/:id
POST /api/plants
PUT /api/plants/:id
DELETE /api/plants/:id
```

## Activities

```http
GET /api/activities
GET /api/activities/:id
POST /api/activities
PUT /api/activities/:id
DELETE /api/activities/:id
```

## Documents

```http
GET /api/documents
POST /api/documents
DELETE /api/documents/:id
GET /api/documents/:id/download
```

## Search

```http
GET /api/search?q=...
```

Response:

```json
{
  "query": "พรรณไม้",
  "total": 10,
  "results": [
    {
      "type": "plant",
      "title": "ตัวอย่าง",
      "url": "/plants/example"
    }
  ]
}
```

---

# 46. Admin Workflow

## เพิ่มพรรณไม้

```text
Admin Login
    ↓
Plants
    ↓
เพิ่มพรรณไม้
    ↓
กรอกข้อมูล
    ↓
Upload รูป
    ↓
Preview
    ↓
Save Draft
    ↓
Publish
```

## เพิ่มข่าว

```text
Create News
→ Rich Text Editor
→ Cover Image
→ Category
→ SEO
→ Preview
→ Publish
```

---

# 47. Error Handling

ทุกหน้า API ต้องรองรับ:

```text
Loading
Empty
Error
Success
Unauthorized
Forbidden
Not Found
```

ตัวอย่าง:

```text
ไม่พบข้อมูล
ยังไม่มีข้อมูลในหมวดหมู่นี้
```

---

# 48. Database Seed

สร้าง Seed Data สำหรับ:

```text
Categories
Five Components
Three Learning Themes
Document Categories
Activity Categories
User Roles
Academic Years
```

ปีการศึกษาเริ่มต้น:

```text
2560
2561
2562
2563
2564
2565
2566
2567
2568
2569
```

---

# 49. Development Phases

## Phase 1 — Foundation

- Project Setup
- Design System
- Navbar
- Footer
- Routing
- Responsive Layout

## Phase 2 — Public Website

- Home
- About
- Plants
- Works
- Activities
- News
- Documents
- Contact

## Phase 3 — Database

- PostgreSQL
- API
- Authentication
- Storage

## Phase 4 — Admin

- Dashboard
- CRUD
- Upload
- User Management

## Phase 5 — Advanced

- Search
- Map
- QR Code
- Analytics
- PDF Export

## Phase 6 — Migration

- Import Google Sites Content
- Import Images
- Import Documents
- Verify Links
- Verify Content

---

# 50. AI Coding Instructions

เมื่อใช้เอกสารนี้เป็น Prompt สำหรับ AI Coding Agent ให้ปฏิบัติตาม:

1. อ่าน Specification ทั้งหมดก่อนเริ่ม Coding
2. ห้ามสร้างข้อมูลจริงที่ไม่มี Source
3. สร้าง UI แบบ Production Ready
4. รองรับภาษาไทยตั้งแต่เริ่มต้น
5. Mobile First
6. ใช้ Component ที่ Reusable
7. ห้าม Hard-code ข้อมูล Dynamic
8. แยก Frontend / Backend / Database อย่างชัดเจน
9. ใช้ Environment Variables สำหรับ Secret
10. เขียน Error Handling
11. เขียน Loading State
12. เขียน Empty State
13. เขียน Responsive Table
14. Optimize Image
15. ทำ SEO
16. ทำ Accessibility
17. เขียน TypeScript แบบ Strict
18. ใช้ Database Migration
19. เตรียมระบบ Seed
20. เตรียมระบบ Import ข้อมูลเดิม

---

# 51. Definition of Done

เว็บไซต์ถือว่าเสร็จเมื่อ:

- [ ] ทุกหน้า Responsive
- [ ] Navigation ทำงานครบ
- [ ] Search ทำงาน
- [ ] Plant Database ทำงาน
- [ ] Plant Detail ทำงาน
- [ ] Works ทำงาน
- [ ] Activities ทำงาน
- [ ] News ทำงาน
- [ ] Documents ทำงาน
- [ ] Admin Login ทำงาน
- [ ] CRUD ทำงาน
- [ ] Upload File ทำงาน
- [ ] Image Gallery ทำงาน
- [ ] Map ทำงาน
- [ ] SEO พร้อม
- [ ] Accessibility พร้อม
- [ ] Security พร้อม
- [ ] Database Backup พร้อม
- [ ] Migration Data ผ่านการตรวจสอบ
- [ ] ไม่มี Broken Links
- [ ] Lighthouse ผ่านเกณฑ์
- [ ] Production Build สำเร็จ

---

# 52. Final AI Prompt

ให้สร้างเว็บไซต์ Production-Ready สำหรับ **งานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี**

โดยใช้ Specification ฉบับนี้เป็น Source of Truth

เว็บไซต์ต้องมีภาพลักษณ์เป็นเว็บไซต์สถานศึกษาที่ทันสมัย ผสมแนวคิดธรรมชาติและเทคโนโลยี มี UX ที่เรียบง่าย ใช้งานได้ทั้งบุคลากร นักเรียน นักศึกษา และประชาชนทั่วไป

ระบบต้องรองรับฐานข้อมูลพรรณไม้ ผลงาน กิจกรรม ข่าวสาร เอกสาร บุคลากร และฐานทรัพยากรท้องถิ่น พร้อมระบบค้นหาและ Admin Dashboard

ให้เริ่มพัฒนาตามลำดับ:

```text
1. Project Architecture
2. Design System
3. Database Schema
4. Backend/API
5. Authentication
6. Public Website
7. Admin Dashboard
8. Search
9. File Storage
10. Data Migration
11. SEO
12. Security
13. Testing
14. Production Build
```

ก่อนสร้างข้อมูลใด ๆ ที่เป็นข้อมูลจริง ให้ตรวจสอบ Source URL และห้ามสมมติข้อมูล

---

## Source Reference

เว็บไซต์ต้นฉบับ:

https://sites.google.com/gsuite.udvc.ac.th/botanicaludvc/home

ข้อมูลโครงสร้างหน้าแรกและหมวดหมู่หลักอ้างอิงจากเว็บไซต์ Botanical UDVC โดยตรง รวมถึงหมวดพืชศึกษา 5 องค์ประกอบ 3 สาระ ผลงาน กิจกรรม เอกสาร และหน่วยงานที่เกี่ยวข้อง

ข้อมูลบทบาทหน้าที่อ้างอิงจากหน้า "บทบาทหน้าที่" ของเว็บไซต์ต้นฉบับ

ข้อมูลบุคลากรอ้างอิงจากหน้า "โครงสร้างบุคลากร"

ข้อมูลแผนผังอ้างอิงจากหน้า "แผนผังวิทยาลัย"

> **หมายเหตุ:** เอกสารนี้เป็น Specification สำหรับสร้างเว็บไซต์ใหม่ ไม่ใช่การรับรองว่าข้อมูลทั้งหมดในเว็บไซต์ต้นฉบับเป็นข้อมูลปัจจุบัน ข้อมูลบุคลากร ลิงก์ เอกสาร และเนื้อหาที่เปลี่ยนแปลงตามเวลา ควรตรวจสอบก่อนนำขึ้น Production
