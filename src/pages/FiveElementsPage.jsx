import React, { useState } from 'react';
import Breadcrumb from '../components/shared/Breadcrumb';
import PageHeader from '../components/shared/PageHeader';
import SectionHeader from '../components/shared/SectionHeader';
import Footer from '../components/shared/Footer';

export default function FiveElementsPage({ onNavigate }) {
  const [selectedElement, setSelectedElement] = useState(0);

  const elements = [
    {
      number: 'องค์ประกอบที่ 1',
      title: 'การจัดทำป้ายชื่อพรรณไม้',
      subtitle: 'Plant Signboard Making & Identification',
      icon: 'badge',
      color: 'emerald',
      summary: 'การสำรวจ รังวัด แปลงพื้นที่ ติดป้ายรหัสประจำต้น จัดทำป้ายชื่อชั่วคราว จนถึงป้ายพรรณไม้สมบูรณ์',
      details: [
        'การกำหนดพื้นที่ศึกษาและขอบเขตสำรวจในวิทยาลัย',
        'การติดป้ายรหัสประจำต้น (ก.7-001 และ ก.7-002)',
        'การจัดทำป้ายชื่อพรรณไม้ชั่วคราวเพื่อการตรวจสอบและศึกษา',
        'การประสานงานตรวจสอบความถูกต้องของชื่อวิทยาศาสตร์และชื่อพื้นเมือง',
        'การจัดทำป้ายพรรณไม้สมบูรณ์ตามเกณฑ์มาตรฐาน อพ.สธ. พร้อม QR Code ดิจิทัล',
      ],
      deliverables: 'ป้ายรหัสประจำต้น, ป้ายชั่วคราว, ป้ายพรรณไม้สมบูรณ์, แผนผังต้นไม้',
      badge: 'พื้นฐานสำคัญ',
    },
    {
      number: 'องค์ประกอบที่ 2',
      title: 'การรวบรวมพรรณไม้เข้าปลูกในโรงเรียน',
      subtitle: 'Collection & Living Plant Propagation',
      icon: 'yard',
      color: 'teal',
      summary: 'การสืบค้นพรรณไม้ท้องถิ่น พรรณไม้หายาก การเพาะ ขยายพันธุ์ อนุบาล และปลูกเพิ่มพูนในพื้นที่วิทยาลัย',
      details: [
        'การสำรวจแหล่งขยายพันธุ์และคัดเลือกชนิดพันธุ์ที่เหมาะสมกับพื้นที่',
        'การเพาะเมล็ด ปักชำ ทาบกิ่ง ตอนกิ่ง และแยกหน่อพรรณไม้',
        'การจัดทำเรือนเพาะชำและพื้นที่อนุบาลกล้าไม้',
        'การจัดหมวดหมู่แปลงปลูก (พืชสมุนไพร ไม้ดอกไม้ประดับ ไม้ผล ไม้ป่าอีสาน)',
        'การดูแล บำรุงรักษา และติดตามอัตราการเจริญเติบโตอย่างสม่ำเสมอ',
      ],
      deliverables: 'เรือนเพาะชำ, แปลงปลูกรวบรวมพันธุ์, บันทึกการขยายพันธุ์, กล้าไม้พร้อมปลูก',
      badge: 'การอนุรักษ์พันธุกรรม',
    },
    {
      number: 'องค์ประกอบที่ 3',
      title: 'การศึกษาข้อมูลด้านต่างๆ',
      subtitle: 'Multidisciplinary Botanical Studies',
      icon: 'biotech',
      color: 'sky',
      summary: 'การศึกษาสัณฐานวิทยา ชีววิทยา นิเวศวิทยา กายวิภาคศาสตร์ เคมี และภูมิปัญญาการใช้ประโยชน์ของพืช',
      details: [
        'การบันทึกลักษณะสัณฐานวิทยาตามแบบบันทึก ก.7-003 ทุกมิติ',
        'การศึกษาชีววิทยาของพืช การผลิใบ ออกดอก ติดผล และการแพร่พันธุ์',
        'การศึกษาความสัมพันธ์ของพืชกับสิ่งแวดล้อม ดิน น้ำ แมลงผสมเกสร',
        'การศึกษาคุณสมบัติทางเคมี สรรพคุณทางเภสัชกรรม และสารสกัด',
        'การรวบรวมองค์ความรู้ภูมิปัญญาพื้นบ้านการใช้ประโยชน์ของชาวอุดรธานี',
      ],
      deliverables: 'แฟ้มเอกสาร ก.7-003, ตัวอย่างพรรณไม้แห้ง-ดอง, สื่อภาพวาดทางพฤกษศาสตร์',
      badge: 'งานวิชาการเชิงลึก',
    },
    {
      number: 'องค์ประกอบที่ 4',
      title: 'การรายงานผลการเรียนรู้',
      subtitle: 'Reporting, Synthesis & Exhibitions',
      icon: 'assessment',
      color: 'indigo',
      summary: 'การรวบรวม ประมวลผล วิเคราะห์ข้อมูล และจัดทำรายงานผลการดำเนินงานทุกระดับเพื่อเผยแพร่',
      details: [
        'การประมวลผลข้อมูลจากแบบบันทึกและระบบฐานข้อมูลดิจิทัล',
        'การจัดทำสมุดทะเบียนพรรณไม้ (ก.7-005) และรายงานสรุปประจำปี',
        'การจัดนิทรรศการแสดงผลงานสวนพฤกษศาสตร์โรงเรียนในโอกาสต่างๆ',
        'การนำเสนอผลงานทางวิชาการและการแลกเปลี่ยนเรียนรู้ระหว่างสถาบัน',
        'การประเมินผลการเรียนรู้ของผู้เรียนและการพัฒนาคุณภาพโครงการต่อเนื่อง',
      ],
      deliverables: 'รายงานประจำปี, ทะเบียน ก.7-005, นิทรรศการสวนพฤกษศาสตร์, แพลตฟอร์มออนไลน์',
      badge: 'การประมวลผลและเผยแพร่',
    },
    {
      number: 'องค์ประกอบที่ 5',
      title: 'การนำไปใช้ประโยชน์ทางการเรียนการสอน',
      subtitle: 'Curriculum Integration & Community Service',
      icon: 'hub',
      color: 'amber',
      summary: 'การบูรณาการสวนพฤกษศาสตร์เข้าสู่หลักสูตรวิชาชีพ การวิจัยสร้างนวัตกรรม และการบริการชุมชน',
      details: [
        'การบูรณาการเข้ากับแผนการสอนทุกแผนกวิชา (คหกรรม ศิลปกรรม คอมพิวเตอร์ บัญชี ฯลฯ)',
        'การพัฒนานวัตกรรม ผลิตภัณฑ์ชีวภาพ และงานสร้างสรรค์จากฐานพืชพรรณ',
        'การเปิดสวนพฤกษศาสตร์เป็นแหล่งเรียนรู้ชุมชนและศูนย์ฝึกอบรมเยาวชน',
        'การสร้างจิตสำนึกรักและหวงแหนธรรมชาติ สิ่งแวดล้อม และศิลปวัฒนธรรม',
        'การต่อยอดสู่เศรษฐกิจชีวภาพ (BCG Economy) และการพัฒนาที่ยั่งยืน (SDGs)',
      ],
      deliverables: 'แผนการสอนบูรณาการ, นวัตกรรมและผลิตภัณฑ์นักศึกษา, เครือข่ายชุมชน',
      badge: 'การประยุกต์ใช้สูงสุด',
    },
  ];

  const current = elements[selectedElement];

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
        <Breadcrumb
          items={[{ label: '5 องค์ประกอบ' }]}
          onNavigate={onNavigate}
        />

        <PageHeader
          title="5 องค์ประกอบงานสวนพฤกษศาสตร์โรงเรียน"
          subtitle="The 5 Core Elements of School Botanical Garden (RSPG)"
          description="หัวใจหลักของการดำเนินงานสนองพระราชดำริ อพ.สธ. ซึ่งเป็นกระบวนการเรียนรู้ 5 มิติที่เชื่อมโยงตั้งแต่การสำรวจเบื้องต้นจนถึงการประยุกต์ใช้ในการศึกษาวิชาชีพและพัฒนาสังคม"
          icon="account_tree"
          badge="กรอบการดำเนินงาน อพ.สธ."
        />

        {/* 5 Elements Tabs / Cards Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
          {elements.map((el, index) => {
            const isSelected = selectedElement === index;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedElement(index)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-secondary text-on-secondary border-secondary shadow-md scale-[1.02]'
                    : 'bg-surface-container-lowest dark:bg-surface-dim border-outline-variant/30 hover:border-secondary/40 hover:bg-surface-container'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-bold ${isSelected ? 'text-on-secondary/80' : 'text-secondary'}`}>
                      {el.number}
                    </span>
                    <span className="material-symbols-outlined text-xl">{el.icon}</span>
                  </div>
                  <h3 className={`text-sm font-bold line-clamp-2 ${isSelected ? 'text-on-secondary' : 'text-primary'}`}>
                    {el.title}
                  </h3>
                </div>
                <div className="mt-3 pt-2 border-t border-current/15 text-[11px] font-medium opacity-90 truncate">
                  {el.badge}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Element Deep Dive */}
        <div className="bg-surface-container-lowest dark:bg-surface-dim rounded-3xl border border-outline-variant/30 p-6 sm:p-8 md:p-10 shadow-xs mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-outline-variant/20 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-3xl">{current.icon}</span>
              </div>
              <div>
                <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                  {current.number} • {current.badge}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-primary">
                  {current.title}
                </h2>
                <p className="text-xs sm:text-sm text-secondary font-medium">
                  {current.subtitle}
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-secondary/15 text-secondary self-start md:self-auto">
              ลำดับการเรียนรู้ที่ {selectedElement + 1} / 5
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-base">info</span>
                  <span>สาระสังเขปและจุดมุ่งหมาย</span>
                </h4>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  {current.summary}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-base">task_alt</span>
                  <span>กิจกรรมและขอบข่ายการปฏิบัติ</span>
                </h4>
                <div className="space-y-2.5">
                  {current.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-surface-container">
                      <span className="material-symbols-outlined text-secondary text-lg mt-0.5 shrink-0">check_circle</span>
                      <span className="text-xs sm:text-sm text-on-surface leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-surface-container space-y-4">
                <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-lg">folder_open</span>
                  <span>ผลผลิตและชิ้นงาน (Deliverables)</span>
                </h4>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {current.deliverables}
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-secondary/30 bg-secondary/5 space-y-3">
                <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-lg">alt_route</span>
                  <span>ขั้นตอนถัดไป</span>
                </h4>
                <p className="text-xs text-on-surface-variant">
                  {selectedElement < 4
                    ? `ศึกษาต่อใน ${elements[selectedElement + 1].number}: ${elements[selectedElement + 1].title}`
                    : 'ครบทั้ง 5 องค์ประกอบ! นำไปประยุกต์ใช้ในการบูรณาการการเรียนรู้'}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedElement((prev) => (prev + 1) % 5)}
                  className="w-full py-2.5 px-4 rounded-xl bg-secondary text-on-secondary font-semibold text-xs hover:bg-primary transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{selectedElement < 4 ? 'ดูองค์ประกอบถัดไป' : 'กลับไปองค์ประกอบที่ 1'}</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick action grid */}
        <SectionHeader
          title="ข้อมูลและเอกสารสนับสนุน"
          subtitle="Related Botanical Modules"
          icon="menu_book"
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { title: 'คู่มือแผนบูรณาการ', desc: 'ดาวน์โหลดคู่มือการจัดทำแผนการเรียนรู้ 5 องค์ประกอบ', page: 'integrationGuide', icon: 'download' },
            { title: '3 สาระการเรียนรู้', desc: 'เชื่อมโยง 5 องค์ประกอบสู่ 3 สาระธรรมชาติศึกษา', page: 'threeLearningAreas', icon: 'psychology' },
            { title: 'ทะเบียนพรรณไม้ ก.7-003', desc: 'ดูผลลัพธ์การบันทึกข้อมูลพรรณไม้สมบูรณ์ในระบบ', page: 'plantRegistry', icon: 'menu_book' },
          ].map((item, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onNavigate && onNavigate(item.page)}
              className="p-5 rounded-2xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 hover:border-secondary/50 hover:shadow-md transition-all text-left cursor-pointer flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">{item.icon}</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-primary mb-1">{item.title}</h4>
                <p className="text-xs text-on-surface-variant line-clamp-2">{item.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
