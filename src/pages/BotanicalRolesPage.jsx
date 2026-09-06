import React from 'react';
import Breadcrumb from '../components/shared/Breadcrumb';
import PageHeader from '../components/shared/PageHeader';
import SectionHeader from '../components/shared/SectionHeader';
import Footer from '../components/shared/Footer';

export default function BotanicalRolesPage({ onNavigate }) {
  const roles = [
    {
      id: 'role-01',
      number: 'บทบาทที่ 1',
      title: 'การสำรวจ รวบรวม และอนุรักษ์พันธุกรรมพืช',
      subtitle: 'Exploration, Collection & Genetic Conservation',
      icon: 'yard',
      color: 'emerald',
      description: 'สำรวจและบันทึกข้อมูลพรรณไม้ทุกชนิดภายในบริเวณวิทยาลัย จัดทำป้ายรหัสประจำต้น ป้ายชื่อพรรณไม้สมบูรณ์ รวบรวมตัวอย่างพรรณไม้แห้ง-พรรณไม้ดอง และเพาะขยายพันธุ์พืชท้องถิ่นใกล้สูญพันธุ์',
      responsibilities: [
        'ดำเนินการสำรวจรังวัดพิกัดต้นไม้ในวิทยาลัย 100%',
        'ติดตั้งและบำรุงรักษาป้ายชื่อพรรณไม้มาตรฐาน อพ.สธ. และ QR Code',
        'ดูแลเรือนเพาะชำ แปลงอนุบาล และจัดการระบบน้ำเพื่อการเจริญเติบโต',
        'จัดทำและรักษาตัวอย่างพรรณไม้แห้งในพิพิธภัณฑ์พืชพรรณ',
      ],
    },
    {
      id: 'role-02',
      number: 'บทบาทที่ 2',
      title: 'การจัดการข้อมูลและงานทะเบียน ก.7-003',
      subtitle: 'Botanical Data Management & Form Kor.7-003 Archive',
      icon: 'menu_book',
      color: 'teal',
      description: 'ศึกษาและบันทึกรายละเอียดสัณฐานวิทยา ชีววิทยา การใช้ประโยชน์พรรณไม้ตามแบบบันทึก ก.7-003 ครบทุกส่วน และจัดทำสมุดทะเบียนพรรณไม้ (ก.7-005) ในระบบสารสนเทศดิจิทัล',
      responsibilities: [
        'กำกับดูแลความถูกต้องทางอนุกรมวิธาน (Taxonomy) และชื่อวิทยาศาสตร์',
        'บันทึกแฟ้มข้อมูลพืชศึกษา ก.7-003 รายต้นอย่างละเอียด',
        'จัดเก็บภาพถ่ายทางพฤกษศาสตร์และภาพวาดลายเส้นวิทยาศาสตร์',
        'บริหารและปรับปรุงระบบฐานข้อมูลดิจิทัลให้พร้อมบริการสืบค้นตลอด 24 ชั่วโมง',
      ],
    },
    {
      id: 'role-03',
      number: 'บทบาทที่ 3',
      title: 'การส่งเสริมและบูรณาการการเรียนการสอนวิชาชีพ',
      subtitle: 'Curriculum Integration & Applied Vocational Learning',
      icon: 'school',
      color: 'sky',
      description: 'ส่งเสริมให้ครูผู้สอนทุกแผนกวิชานำพืชพรรณและสวนพฤกษศาสตร์ไปเป็นสื่อและบริบทในการจัดการเรียนรู้ สร้างนวัตกรรม สิ่งประดิษฐ์คนรุ่นใหม่ และผลิตภัณฑ์ชีวภาพ',
      responsibilities: [
        'พัฒนาคู่มือและตัวอย่างแผนการจัดการเรียนรู้บูรณาการ 5 องค์ประกอบ',
        'สนับสนุนการทำโครงงานวิจัย สิ่งประดิษฐ์ และผลิตภัณฑ์แปรรูปสมุนไพร',
        'จัดกิจกรรมการเรียนรู้ภาคสนามและค่ายเยาวชนพฤกษศาสตร์ในสถานศึกษา',
        'ประเมินผลสัมฤทธิ์ทางการเรียนและเจตคติแห่งการอนุรักษ์ของผู้เรียน',
      ],
    },
    {
      id: 'role-04',
      number: 'บทบาทที่ 4',
      title: 'การบริการวิชาการ ถ่ายทอดความรู้ และเครือข่ายชุมชน',
      subtitle: 'Community Outreach, Exhibitions & RSPG Networking',
      icon: 'hub',
      color: 'indigo',
      description: 'เปิดสวนพฤกษศาสตร์เป็นแหล่งเรียนรู้ตลอดชีวิตแก่ประชาชน ชุมชนท้องถิ่น และสถานศึกษาเครือข่าย จัดนิทรรศการ และถ่ายทอดภูมิปัญญาการใช้ประโยชน์จากทรัพยากรชีวภาพอย่างยั่งยืน',
      responsibilities: [
        'ให้บริการนำชมและศึกษาดูงานแก่นักเรียน นักศึกษา และคณะศึกษาดูงานภายนอก',
        'จัดนิทรรศการเผยแพร่ผลงานสวนพฤกษศาสตร์ในระดับจังหวัดและระดับชาติ',
        'สนับสนุนการดำเนินงานสวนพฤกษศาสตร์โรงเรียนแก่สถานศึกษาเครือข่าย',
        'ส่งเสริมการมีส่วนร่วมของปราชญ์ชาวบ้านและชุมชนในการอนุรักษ์ภูมิปัญญาอีสาน',
      ],
    },
    {
      id: 'role-05',
      number: 'บทบาทที่ 5',
      title: 'การปลูกฝังจิตสำนึก คุณธรรม และสุนทรียภาพ',
      subtitle: 'Environmental Ethics, Moral Values & Nature Aesthetics',
      icon: 'spa',
      color: 'amber',
      description: 'น้อมนำพระราชดำริและปรัชญา 3 สาระการเรียนรู้ มาบ่มเพาะจิตใจของผู้เรียนให้มีความอ่อนโยน กตัญญูต่อธรรมชาติ มีจิตสาธารณะ และร่วมรับผิดชอบต่อสิ่งแวดล้อม',
      responsibilities: [
        'จัดกิจกรรมจิตอาสาบำเพ็ญประโยชน์และการแบ่งปันความดีในสถานศึกษา',
        'ส่งเสริมกิจกรรมศิลปะพฤกษศาสตร์และดนตรีในสวนเพื่อเสริมสร้างสุนทรียภาพ',
        'สร้างค่านิยมการใช้ทรัพยากรอย่างรู้คุณค่าและลดการสร้างขยะมลพิษ',
        'เชิดชูเกียรติผู้ทำความดีและมีผลงานโดดเด่นด้านการอนุรักษ์ธรรมชาติ',
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
        <Breadcrumb
          items={[
            { label: 'ประวัติงานสวนพฤกษศาสตร์ฯ' },
            { label: 'บทบาทหน้าที่' },
          ]}
          onNavigate={onNavigate}
        />

        <PageHeader
          title="บทบาทหน้าที่ (Roles & Responsibilities)"
          subtitle="Mandates, Core Missions & Operational Guidelines of RSPG UDVC"
          description="กรอบภารกิจและบทบาทหน้าที่หลักของงานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี ในการขับเคลื่อนงานสนองพระราชดำริ ทั้งด้านการอนุรักษ์ การจัดการข้อมูล การบูรณาการวิชาชีพ และการบริการวิชาการแก่สังคม"
          icon="task_alt"
          badge="กรอบภารกิจ 5 ด้าน"
        />

        {/* Roles Cards Grid */}
        <div className="space-y-6 mb-12">
          {roles.map((role) => (
            <div
              key={role.id}
              className="p-6 sm:p-8 rounded-3xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 hover:border-secondary/50 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline-variant/20 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl">{role.icon}</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                      {role.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-primary">
                      {role.title}
                    </h3>
                    <p className="text-xs text-secondary font-medium">
                      {role.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
                {role.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-base">checklist</span>
                  <span>ภารกิจและขอบเขตความรับผิดชอบหลัก:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {role.responsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-surface-container flex items-start gap-2.5 text-xs text-on-surface"
                    >
                      <span className="material-symbols-outlined text-secondary text-base mt-0.5 shrink-0">check_circle</span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Committee Link Callout */}
        <div className="p-6 rounded-3xl bg-surface-container border border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h4 className="font-bold text-primary text-base">คณะกรรมการดำเนินงานสวนพฤกษศาสตร์โรงเรียน</h4>
            <p className="text-xs text-on-surface-variant mt-0.5">
              ดูรายนามผู้บริหาร คณะกรรมการ และผู้รับผิดชอบงานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate && onNavigate('personnelStructure')}
            className="px-5 py-2.5 rounded-xl bg-secondary text-on-secondary font-semibold text-xs hover:bg-primary transition-colors cursor-pointer shrink-0 flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-base">groups</span>
            <span>ดูโครงสร้างบุคลากร</span>
          </button>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
