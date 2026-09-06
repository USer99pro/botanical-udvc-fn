/**
 * Central Navigation Configuration for Botanical UDVC
 * Supports both URL paths and state-based page IDs for seamless navigation.
 */

export const menuItems = [
  {
    id: 'home',
    title: 'หน้าแรก',
    path: '/',
    pageId: 'home',
    icon: 'home',
    type: 'link',
  },
  {
    id: 'plantStudy',
    title: 'พืชศึกษา',
    path: '/plant-study',
    pageId: 'plantStudy',
    icon: 'nature_people',
    type: 'link',
  },
  {
    id: 'fiveElements',
    title: '5 องค์ประกอบ',
    path: '/five-elements',
    pageId: 'fiveElements',
    icon: 'account_tree',
    type: 'link',
  },
  {
    id: 'threeLearningAreas',
    title: '3 สาระการเรียนรู้',
    path: '/three-learning-areas',
    pageId: 'threeLearningAreas',
    icon: 'psychology',
    type: 'link',
  },
  {
    id: 'localResources',
    title: 'ฐานทรัพยากรท้องถิ่น',
    path: '/local-resources',
    pageId: 'localResources',
    icon: 'landscape',
    type: 'link',
  },
  {
    id: 'plantTypes',
    title: 'ประเภทพรรณไม้',
    path: '/plant-types',
    pageId: 'plantTypes',
    icon: 'forest',
    type: 'dropdown',
    children: [
      {
        id: 'plantSignboard',
        title: 'ป้ายพรรณไม้สมบูรณ์',
        path: '/plant-types/signboard',
        pageId: 'plantSignboard',
        icon: 'badge',
        description: 'ป้ายชื่อพรรณไม้สมบูรณ์มาตรฐาน อพ.สธ. และ QR Code ประจำต้นไม้',
      },
      {
        id: 'plantDrawing',
        title: 'ภาพวาดพรรณไม้',
        path: '/plant-types/drawing',
        pageId: 'plantDrawing',
        icon: 'palette',
        description: 'ผลงานภาพวาดทางพฤกษศาสตร์และภาพทางวิทยาศาสตร์โดยนักศึกษา',
      },
      {
        id: 'plantRegistry',
        title: 'ทะเบียนพรรณไม้',
        path: '/plant-types/registry',
        pageId: 'plantRegistry',
        icon: 'menu_book',
        description: 'สมุดทะเบียนบันทึกและระบบรหัสพรรณไม้ ก.7-003',
      },
      {
        id: 'plantData',
        title: 'ข้อมูลพรรณไม้',
        path: '/plant-types/data',
        pageId: 'plantData',
        icon: 'search_insights',
        description: 'ฐานข้อมูลรายละเอียดพรรณไม้ การจำแนก และการใช้ประโยชน์',
      },
      {
        id: 'plantPhotos',
        title: 'ทะเบียนภาพถ่ายพรรณไม้',
        path: '/plant-types/photos',
        pageId: 'plantPhotos',
        icon: 'photo_library',
        description: 'คลังภาพถ่ายพรรณไม้ ดอก ใบ ลำต้น ผล และระบบนิเวศ',
      },
    ],
  },
  {
    id: 'projects',
    title: 'ผลงานและนวัตกรรม',
    path: '/projects',
    pageId: 'projects',
    icon: 'lightbulb',
    type: 'link',
  },
  {
    id: 'achievementTable',
    title: 'ตารางสะสมผลงาน',
    path: '/achievement-table',
    pageId: 'achievementTable',
    icon: 'emoji_events',
    type: 'link',
  },
  {
    id: 'goodnessSharing',
    title: 'แบ่งปันความดี',
    path: '/goodness-sharing',
    pageId: 'goodnessSharing',
    icon: 'volunteer_activism',
    type: 'link',
  },
  {
    id: 'studyAreaMap',
    title: 'แผนผังพื้นที่ศึกษา',
    path: '/study-area-map',
    pageId: 'studyAreaMap',
    icon: 'map',
    type: 'link',
  },
  {
    id: 'integrationGuide',
    title: 'คู่มือแผนบูรณาการ',
    path: '/integration-guide',
    pageId: 'integrationGuide',
    icon: 'menu_book',
    type: 'link',
  },
  {
    id: 'relatedAgencies',
    title: 'หน่วยงานที่เกี่ยวข้อง',
    path: '/related-agencies',
    pageId: 'relatedAgencies',
    icon: 'hub',
    type: 'link',
  },
  {
    id: 'schoolBotanical',
    title: 'ประวัติงานสวนพฤกษศาสตร์ฯ',
    path: '/school-botanical',
    pageId: 'botanicalHistory',
    icon: 'history_edu',
    type: 'dropdown',
    children: [
      {
        id: 'botanicalHistory',
        title: 'ประวัติงานสวนพฤกษศาสตร์โรงเรียน',
        path: '/school-botanical/history',
        pageId: 'botanicalHistory',
        icon: 'history',
        description: 'ความเป็นมา พัฒนาการ และเกียรติประวัติการสนองพระราชดำริ',
      },
      {
        id: 'botanicalRoles',
        title: 'บทบาทหน้าที่',
        path: '/school-botanical/roles',
        pageId: 'botanicalRoles',
        icon: 'task_alt',
        description: 'ภารกิจ หน้าที่ และแนวทางการดำเนินงานสวนพฤกษศาสตร์โรงเรียน',
      },
    ],
  },
  {
    id: 'personnelStructure',
    title: 'โครงสร้างบุคลากร',
    path: '/personnel-structure',
    pageId: 'personnelStructure',
    icon: 'groups',
    type: 'link',
  },
  {
    id: 'collegeMap',
    title: 'แผนผังวิทยาลัย',
    path: '/college-map',
    pageId: 'collegeMap',
    icon: 'domain',
    type: 'link',
  },
  {
    id: 'news',
    title: 'ข่าวสารประชาสัมพันธ์',
    path: '/news',
    pageId: 'news',
    icon: 'newspaper',
    type: 'link',
  },
];

// Helper to find navigation item by pageId or path
export function findMenuItem(identifier) {
  for (const item of menuItems) {
    if (item.pageId === identifier || item.path === identifier) return item;
    if (item.children) {
      const child = item.children.find((c) => c.pageId === identifier || c.path === identifier);
      if (child) return { ...child, parent: item };
    }
  }
  return null;
}
