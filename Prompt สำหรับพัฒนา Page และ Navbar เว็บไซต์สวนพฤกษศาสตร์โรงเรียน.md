# Website Page & Navbar Specification

## 1. เป้าหมาย

พัฒนาโครงสร้างหน้าเว็บไซต์ใหม่สำหรับระบบ **งานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี** โดยมีข้อกำหนดสำคัญดังนี้

- ต้อง **คงหน้าเว็บไซต์เดิมทั้งหมดไว้**
- ห้ามลบหรือเขียนทับ Page เดิมที่มีอยู่
- เพิ่ม Page ใหม่ตามรายการเมนูที่กำหนด
- เพิ่มเมนูใหม่ใน Navbar
- เมนูที่มีหัวข้อย่อยต้องแสดงเป็น Dropdown / Mega Menu
- ทุกเมนูสามารถกดเพื่อเข้าสู่ Page ที่เกี่ยวข้องได้
- รองรับ Responsive Design บน Desktop, Tablet และ Mobile
- ใช้ Component ที่สามารถนำกลับมาใช้ซ้ำได้
- โครงสร้าง URL ต้องเป็นระบบและอ่านเข้าใจง่าย
- UI ต้องสอดคล้องกับเว็บไซต์เดิม ไม่ทำให้ Design Language ของระบบเปลี่ยนไปโดยไม่มีเหตุผล

---

# 2. ข้อกำหนดสำคัญเกี่ยวกับหน้าเดิม

ก่อนพัฒนา Page ใหม่ ให้ตรวจสอบโครงสร้างเว็บไซต์ปัจจุบันก่อน

### ห้ามทำ

- ห้ามลบ Page เดิม
- ห้ามลบ Route เดิม
- ห้ามลบ Component เดิม
- ห้ามเปลี่ยนเนื้อหาเดิมโดยไม่จำเป็น
- ห้ามเปลี่ยน Navbar เดิมจนทำให้เมนูเดิมหาย
- ห้ามเปลี่ยน Layout หลักของเว็บไซต์โดยไม่มีเหตุผล

### ให้ทำ

สร้างระบบในลักษณะ

```text
Existing Pages
      │
      ├── Page เดิม
      ├── Page เดิม
      └── Page เดิม

New Botanical Pages
      │
      ├── พืชศึกษา
      ├── 5 องค์ประกอบ
      ├── 3 สาระการเรียนรู้
      ├── ฐานทรัพยากรท้องถิ่น
      ├── ประเภทพรรณไม้
      ├── ผลงานและนวัตกรรม
      ├── ตารางสะสมผลงาน
      ├── แบ่งปันความดี
      ├── แผนผังพื้นที่ศึกษา
      ├── คู่มือแผนบูรณาการ
      ├── หน่วยงานที่เกี่ยวข้อง
      ├── ประวัติงานสวนพฤกษศาสตร์โรงเรียน
      ├── โครงสร้างบุคลากร
      ├── แผนผังวิทยาลัย
      └── ข่าวสารประชาสัมพันธ์
```

---

# 3. โครงสร้าง Navbar

สร้าง Navbar ใหม่โดยนำเมนูเดิมของระบบมาแสดงร่วมกับเมนูใหม่

## เมนูหลัก

```text
พืชศึกษา
5 องค์ประกอบ
3 สาระการเรียนรู้
ฐานทรัพยากรท้องถิ่น
ประเภทพรรณไม้
ผลงานและนวัตกรรม
ตารางสะสมผลงาน
แบ่งปันความดี
แผนผังพื้นที่ศึกษา
คู่มือแผนบูรณาการ
หน่วยงานที่เกี่ยวข้อง
ประวัติงานสวนพฤกษศาสตร์โรงเรียน
โครงสร้างบุคลากรงานสวนพฤกษศาสตร์โรงเรียน
แผนผังวิทยาลัยอาชีวศึกษาอุดรธานี
ข่าวสารประชาสัมพันธ์
```

---

# 4. Navbar Dropdown

เมนูที่มีหัวข้อย่อยให้ใช้ Dropdown

## 4.1 ฐานทรัพยากรท้องถิ่น

```text
ฐานทรัพยากรท้องถิ่น
```

สามารถเปิดไปยัง Page หลักของฐานทรัพยากรท้องถิ่น

Route:

```text
/local-resources
```

---

# 5. เมนูประเภทพรรณไม้

เมนูนี้ต้องเป็น Dropdown

```text
ประเภทพรรณไม้
│
├── ป้ายพรรณไม้สมบูรณ์
├── ภาพวาดพรรณไม้
├── ทะเบียนพรรณไม้
├── ข้อมูลพรรณไม้
└── ทะเบียนภาพถ่ายพรรณไม้
```

Routes แนะนำ

```text
/plant-types
/plant-types/signboard
/plant-types/drawing
/plant-types/registry
/plant-types/data
/plant-types/photos
```

---

# 6. ประวัติงานสวนพฤกษศาสตร์โรงเรียน

เมนูนี้เป็น Dropdown

```text
ประวัติงานสวนพฤกษศาสตร์โรงเรียน
│
└── บทบาทหน้าที่
```

Routes

```text
/school-botanical/history
/school-botanical/roles
```

---

# 7. Page ที่ต้องสร้าง

## 7.1 พืชศึกษา

Route:

```text
/plant-study
```

Page ต้องประกอบด้วย

```text
Hero Section
Page Title
Introduction
Content Section
Image / Illustration
Related Content
Navigation / Breadcrumb
```

ชื่อหน้า:

```text
พืชศึกษา
```

---

## 7.2 5 องค์ประกอบ

Route:

```text
/five-elements
```

แสดงข้อมูล 5 องค์ประกอบในลักษณะ Card / Grid

ตัวอย่างโครงสร้าง

```text
5 องค์ประกอบ

[องค์ประกอบที่ 1]
[องค์ประกอบที่ 2]
[องค์ประกอบที่ 3]
[องค์ประกอบที่ 4]
[องค์ประกอบที่ 5]
```

แต่ละ Card สามารถกดเข้าไปดูรายละเอียดได้

---

## 7.3 3 สาระการเรียนรู้

Route:

```text
/three-learningสาระ
```

หรือใช้ URL ภาษาอังกฤษที่เหมาะสม เช่น

```text
/three-learning-areas
```

ออกแบบเป็น 3 Card หลัก

```text
สาระที่ 1
สาระที่ 2
สาระที่ 3
```

---

# 8. ผลงานและนวัตกรรม

Route:

```text
/projects
```

สร้าง Page สำหรับแสดงผลงานของนักเรียน นักศึกษา และบุคลากร

Layout:

```text
ผลงานและนวัตกรรม

Search
Filter
Category

┌──────────────────┐
│ Image            │
│ Project Title    │
│ Description      │
│ Year             │
│ View Details     │
└──────────────────┘
```

ต้องรองรับการเพิ่มข้อมูลในอนาคต

---

# 9. ตารางสะสมผลงาน

Route:

```text
/achievement-table
```

ใช้สำหรับแสดงข้อมูลผลงานแบบตาราง

Column ตัวอย่าง

```text
ลำดับ
ปีการศึกษา
ชื่อผลงาน
ผู้จัดทำ
ประเภท
สถานะ
ดูรายละเอียด
```

ต้องรองรับ Responsive Table

สำหรับ Mobile ให้เปลี่ยนเป็น Card Layout หรือ Horizontal Scroll

---

# 10. แบ่งปันความดี

Route:

```text
/goodness-sharing
```

Page สำหรับแสดงกิจกรรมหรือเรื่องราวการแบ่งปันความดี

Layout:

```text
Hero
Introduction

Goodness Cards
├── รูปภาพ
├── ชื่อกิจกรรม
├── วันที่
├── รายละเอียด
└── อ่านเพิ่มเติม
```

---

# 11. แผนผังพื้นที่ศึกษา

Route:

```text
/study-area-map
```

Page สำหรับแสดงแผนผังพื้นที่ศึกษา

ต้องรองรับ

- รูปภาพแผนผัง
- Zoom
- Fullscreen
- รายละเอียดจุดศึกษา
- Legend
- จุดสำคัญของพื้นที่

Layout

```text
แผนผังพื้นที่ศึกษา

[ Interactive / Image Map ]

[Legend]

รายละเอียดพื้นที่
```

---

# 12. คู่มือแผนบูรณาการ

Route:

```text
/integration-guide
```

แสดงเอกสารคู่มือ

รองรับ

```text
PDF
Download
Preview
Document Information
```

---

# 13. หน่วยงานที่เกี่ยวข้อง

Route:

```text
/related-agencies
```

แสดงหน่วยงานในรูปแบบ Card

ข้อมูลแต่ละหน่วยงาน

```text
Logo
ชื่อหน่วยงาน
รายละเอียด
เว็บไซต์
เบอร์ติดต่อ
Email
```

---

# 14. ประวัติงานสวนพฤกษศาสตร์โรงเรียน

Route:

```text
/school-botanical/history
```

Page ประกอบด้วย

```text
Hero
ประวัติความเป็นมา
Timeline
ข้อมูลสำคัญ
Gallery
```

แนะนำให้ใช้ Timeline เพื่อแสดงพัฒนาการของงานสวนพฤกษศาสตร์โรงเรียน

---

# 15. บทบาทหน้าที่

Route:

```text
/school-botanical/roles
```

แสดงบทบาทและหน้าที่ของงานสวนพฤกษศาสตร์โรงเรียน

ออกแบบเป็น Card

```text
บทบาทหน้าที่

[บทบาทที่ 1]
[บทบาทที่ 2]
[บทบาทที่ 3]
...
```

---

# 16. โครงสร้างบุคลากรงานสวนพฤกษศาสตร์โรงเรียน

Route:

```text
/personnel-structure
```

สร้างหน้า Organization Structure

ตัวอย่าง

```text
หัวหน้างาน
      │
      ├── รองหัวหน้างาน
      │
      ├── คณะกรรมการ
      │
      └── ผู้รับผิดชอบ
```

สามารถแสดงข้อมูลบุคลากรเป็น

```text
รูปภาพ
ชื่อ - นามสกุล
ตำแหน่ง
หน้าที่
ข้อมูลติดต่อ
```

---

# 17. แผนผังวิทยาลัยอาชีวศึกษาอุดรธานี

Route:

```text
/college-map
```

แสดงแผนผังวิทยาลัย

ประกอบด้วย

```text
Image Map
สถานที่สำคัญ
อาคาร
พื้นที่บริการ
ข้อมูลติดต่อ
```

---

# 18. ข่าวสารประชาสัมพันธ์

Route:

```text
/news
```

Page ข่าวสารต้องมี

```text
Search
Category Filter
Featured News
News Grid
Pagination
```

Card ข่าวประกอบด้วย

```text
รูปภาพ
หัวข้อข่าว
วันที่เผยแพร่
หมวดหมู่
รายละเอียดสั้น
อ่านเพิ่มเติม
```

---

# 19. Breadcrumb

ทุก Page ใหม่ต้องมี Breadcrumb

ตัวอย่าง

```text
หน้าแรก
/
ประเภทพรรณไม้
/
ทะเบียนพรรณไม้
```

เพื่อให้ผู้ใช้สามารถย้อนกลับไปยังระดับก่อนหน้าได้ง่าย

---

# 20. Page Template

ทุก Page ใหม่ควรใช้ Layout กลางร่วมกัน

```text
<PageLayout>

    <Navbar />

    <Breadcrumb />

    <PageHeader />

    <MainContent />

    <RelatedContent />

    <Footer />

</PageLayout>
```

ห้ามสร้าง Layout ซ้ำโดยไม่จำเป็น

---

# 21. Component ที่ควรสร้าง

สร้าง Component กลาง เช่น

```text
components/
├── Navbar
├── DropdownMenu
├── Breadcrumb
├── PageHeader
├── SectionHeader
├── ContentCard
├── NewsCard
├── ProjectCard
├── PersonnelCard
├── AgencyCard
├── Timeline
├── Gallery
├── SearchBar
├── Filter
├── Pagination
├── DocumentViewer
├── ImageViewer
└── Footer
```

---

# 22. Responsive Design

Navbar ต้องรองรับ Desktop

```text
Logo | เมนู | Dropdown | Search
```

บน Mobile เปลี่ยนเป็น

```text
Logo                     ☰
                          │
                          ├── พืชศึกษา
                          ├── 5 องค์ประกอบ
                          ├── 3 สาระการเรียนรู้
                          ├── ฐานทรัพยากรท้องถิ่น
                          └── ...
```

Dropdown บน Mobile ต้องสามารถ Expand / Collapse ได้

---

# 23. URL และ Routing

ใช้ Routing ที่เหมาะสมกับ Framework ของ Project

ตัวอย่าง

```text
/
├── /plant-study
├── /five-elements
├── /three-learning-areas
├── /local-resources
├── /plant-types
│   ├── /signboard
│   ├── /drawing
│   ├── /registry
│   ├── /data
│   └── /photos
├── /projects
├── /achievement-table
├── /goodness-sharing
├── /study-area-map
├── /integration-guide
├── /related-agencies
├── /school-botanical
│   ├── /history
│   └── /roles
├── /personnel-structure
├── /college-map
└── /news
```

---

# 24. Design Requirement

Design ต้องมีลักษณะ

```text
Modern
Clean
Academic
Professional
Nature / Botanical
Accessible
Responsive
```

เน้นความรู้สึกเกี่ยวกับ

```text
ต้นไม้
ธรรมชาติ
การศึกษา
สถานศึกษา
ฐานทรัพยากร
งานวิชาการ
```

ใช้ UI ที่อ่านง่ายและไม่รก

---

# 25. Navigation Behavior

เมื่อผู้ใช้ Hover หรือ Click เมนู Dropdown:

### Desktop

```text
ประเภทพรรณไม้
        ↓
┌────────────────────────────┐
│ ป้ายพรรณไม้สมบูรณ์         │
│ ภาพวาดพรรณไม้              │
│ ทะเบียนพรรณไม้             │
│ ข้อมูลพรรณไม้              │
│ ทะเบียนภาพถ่ายพรรณไม้      │
└────────────────────────────┘
```

### Mobile

```text
ประเภทพรรณไม้          >
```

เมื่อกด

```text
ประเภทพรรณไม้          ∨
│
├─ ป้ายพรรณไม้สมบูรณ์
├─ ภาพวาดพรรณไม้
├─ ทะเบียนพรรณไม้
├─ ข้อมูลพรรณไม้
└─ ทะเบียนภาพถ่ายพรรณไม้
```

---

# 26. Data Driven Menu

ไม่ควร Hard-code Navbar หลายจุด

ให้เก็บข้อมูล Menu เป็น Object / Array กลาง เช่น

```js
const menuItems = [
  {
    title: "พืชศึกษา",
    path: "/plant-study"
  },
  {
    title: "5 องค์ประกอบ",
    path: "/five-elements"
  },
  {
    title: "3 สาระการเรียนรู้",
    path: "/three-learning-areas"
  },
  {
    title: "ฐานทรัพยากรท้องถิ่น",
    path: "/local-resources"
  },
  {
    title: "ประเภทพรรณไม้",
    children: [
      {
        title: "ป้ายพรรณไม้สมบูรณ์",
        path: "/plant-types/signboard"
      },
      {
        title: "ภาพวาดพรรณไม้",
        path: "/plant-types/drawing"
      },
      {
        title: "ทะเบียนพรรณไม้",
        path: "/plant-types/registry"
      },
      {
        title: "ข้อมูลพรรณไม้",
        path: "/plant-types/data"
      },
      {
        title: "ทะเบียนภาพถ่ายพรรณไม้",
        path: "/plant-types/photos"
      }
    ]
  }
];
```

ให้ Navbar Render จาก `menuItems`

เพื่อให้ในอนาคตสามารถเพิ่ม/แก้ไขเมนูได้จากจุดเดียว

---

# 27. Important Development Rule

ก่อนเริ่มเขียน Code ให้ Agent ตรวจสอบ Project ปัจจุบันก่อน เช่น

```text
src/
pages/
components/
routes/
layouts/
assets/
```

ตรวจสอบว่าใช้

```text
React Router
Next.js
Vue Router
หรือ Routing ระบบอื่น
```

จากนั้นให้ Integrate Page ใหม่เข้ากับระบบเดิม

**ห้ามสร้าง Project ใหม่ทับ Project เดิม**

---

# 28. Acceptance Criteria

งานถือว่าสมบูรณ์เมื่อ

- หน้าเดิมยังทำงานได้เหมือนเดิม
- Navbar แสดงเมนูเดิม + เมนูใหม่
- Dropdown ทำงานได้
- Mobile Menu ทำงานได้
- ทุกเมนูมี Route
- ทุก Route เปิด Page ได้จริง
- Breadcrumb ทำงาน
- Responsive ครบ
- ไม่มี Broken Link
- ไม่มี Console Error
- ไม่มี Route Conflict
- Component ที่ซ้ำกันถูกแยกเป็น Shared Component
- Menu สามารถบริหารผ่าน Configuration / Array กลางได้

---

# 29. Final Instruction สำหรับ AI Coding Agent

ให้ทำงานตามลำดับดังนี้

```text
1. วิเคราะห์ Project ปัจจุบัน
2. ตรวจสอบ Existing Pages
3. ตรวจสอบ Existing Navbar
4. ตรวจสอบ Routing
5. ห้ามลบ Code เดิม
6. สร้าง Shared Components ที่จำเป็น
7. สร้าง Menu Configuration
8. เพิ่ม Navbar Items
9. สร้าง Dropdown Menu
10. สร้าง Page ใหม่ทั้งหมด
11. เพิ่ม Routes
12. เพิ่ม Breadcrumb
13. ทำ Responsive Design
14. ตรวจสอบทุก Link
15. Run Build
16. แก้ Error ทั้งหมด
17. ตรวจสอบ Console
18. สรุปไฟล์ที่สร้างและไฟล์ที่แก้ไข
```

ผลลัพธ์สุดท้ายต้องเป็นเว็บไซต์ที่ **หน้าเดิมยังอยู่ครบ และสามารถเข้าถึงข้อมูลสวนพฤกษศาสตร์ทั้งหมดผ่าน Navbar ใหม่ได้อย่างเป็นระบบ**