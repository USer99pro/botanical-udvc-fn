import React, { useState } from 'react';
import Breadcrumb from '../components/shared/Breadcrumb';
import PageHeader from '../components/shared/PageHeader';
import SectionHeader from '../components/shared/SectionHeader';
import ContentCard from '../components/shared/ContentCard';
import Footer from '../components/shared/Footer';

export default function PlantStudyPage({ onNavigate, onSelectPlant }) {
  const [activeTab, setActiveTab] = useState('steps');

  const studySteps = [
    {
      step: '01',
      title: 'การสำรวจและบันทึกข้อมูลเบื้องต้น',
      subtitle: 'Field Survey & Initial Observation',
      description: 'กำหนดพิกัดพื้นที่ศึกษา บันทึกสภาพแวดล้อม ลักษณะภูมิประเทศ และประเภทของพืชพรรณที่พบ',
      icon: 'explore',
      badge: 'ขั้นตอนที่ 1',
    },
    {
      step: '02',
      title: 'การติดป้ายรหัสประจำต้น (ก.7-001 / ก.7-002)',
      subtitle: 'Tagging & Identification',
      description: 'กำหนดรหัสพรรณไม้ผูกป้ายประจำต้นตามลำดับ เพื่อการติดตามศึกษาและตรวจสอบข้อมูลต่อเนื่อง',
      icon: 'label',
      badge: 'ขั้นตอนที่ 2',
    },
    {
      step: '03',
      title: 'การบันทึกแบบ ก.7-003 (ลักษณะทางพฤกษศาสตร์)',
      subtitle: 'Form Kor.7-003 Botanical Recording',
      description: 'บันทึกวิสัย ลำต้น ใบ ดอก ผล เมล็ด สี กลิ่น ยาง และลักษณะเฉพาะตามมาตรฐานวิชาการ',
      icon: 'edit_note',
      badge: 'ขั้นตอนที่ 3',
    },
    {
      step: '04',
      title: 'การวาดภาพทางพฤกษศาสตร์และถ่ายภาพ',
      subtitle: 'Scientific Illustration & Photography',
      description: 'วาดภาพลายเส้นทางพฤกษศาสตร์และบันทึกภาพถ่ายอวัยวะพืชทุกส่วนที่มีมาตราส่วนชัดเจน',
      icon: 'palette',
      badge: 'ขั้นตอนที่ 4',
    },
    {
      step: '05',
      title: 'การทำตัวอย่างพรรณไม้แห้งและดอง',
      subtitle: 'Herbarium Specimen Preparation',
      description: 'อัดพรรณไม้แห้ง (Herbarium) และดองดอกหรือผลเพื่อเก็บรักษาไว้เป็นหลักฐานอ้างอิงทางวิชาการ',
      icon: 'inventory_2',
      badge: 'ขั้นตอนที่ 5',
    },
    {
      step: '06',
      title: 'การสืบค้นและระบุชื่อวิทยาศาสตร์',
      subtitle: 'Taxonomic Identification',
      description: 'เทียบตัวอย่างกับรูปวิธาน (Key to species) สารานุกรมพืช และหนังสือพรรณพฤกษชาติของไทย',
      icon: 'menu_book',
      badge: 'ขั้นตอนที่ 6',
    },
    {
      step: '07',
      title: 'การจัดทำป้ายพรรณไม้สมบูรณ์',
      subtitle: 'Complete Signboard Installation',
      description: 'จัดทำป้ายโลหะ/อะคริลิกระบุชื่อไทย ชื่อวิทยาศาสตร์ วงศ์ ประโยชน์ และ QR Code เชื่อมต่อระบบ',
      icon: 'badge',
      badge: 'ขั้นตอนที่ 7',
    },
    {
      step: '08',
      title: 'การบันทึกทะเบียนพรรณไม้และเผยแพร่',
      subtitle: 'Registry Archive & Digital Dissemination',
      description: 'ลงทะเบียนในระบบฐานข้อมูลดิจิทัลสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี',
      icon: 'cloud_done',
      badge: 'ขั้นตอนที่ 8',
    },
  ];

  const featuredPlants = [
    {
      id: 'cassia-fistula',
      title: 'ราชพฤกษ์ (ชัยพฤกษ์)',
      subtitle: 'Cassia fistula L.',
      family: 'FABACEAE',
      code: '7-41000-001-001',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
      description: 'ไม้ยืนต้นผลัดใบ ดอกสีเหลืองอร่ามเป็นช่อห้อย เป็นต้นไม้ประจำชาติไทย และพืชศึกษาหลักในพื้นที่วิทยาลัย',
      tags: ['ไม้ยืนต้น', 'สมุนไพร', 'ไม้ประดับ'],
    },
    {
      id: 'dipterocarpus-alatus',
      title: 'ยางนา',
      subtitle: 'Dipterocarpus alatus Roxb. ex G.Don',
      family: 'DIPTEROCARPACEAE',
      code: '7-41000-001-002',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
      description: 'ไม้ยืนต้นขนาดใหญ่ สูงเด่นตระหง่าน น้ำมันยางใช้ประโยชน์ได้หลากหลาย สัญลักษณ์แห่งความอุดมสมบูรณ์',
      tags: ['ไม้ยืนต้นขนาดใหญ่', 'ไม้มีค่า', 'อนุรักษ์'],
    },
    {
      id: 'mimusops-elengi',
      title: 'พิกุล',
      subtitle: 'Mimusops elengi L.',
      family: 'SAPOTACEAE',
      code: '7-41000-001-003',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
      description: 'ไม้ยืนต้นทรงพุ่มแน่น ดอกหอมชื่นใจ กลีบดอกใช้ทำยาหอมบำรุงหัวใจและยาโบราณ',
      tags: ['ไม้ดอกหอม', 'สมุนไพร', 'ไม้มงคล'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
        <Breadcrumb
          items={[{ label: 'พืชศึกษา' }]}
          onNavigate={onNavigate}
        />

        <PageHeader
          title="พืชศึกษา (ก.7-003)"
          subtitle="Botanical Study & Taxonomic Documentation"
          description="การศึกษาพรรณไม้แบบครบวงจรตามแนวทางโครงการอนุรักษ์พันธุกรรมพืชอันเนื่องมาจากพระราชดำริฯ (อพ.สธ.) วิทยาลัยอาชีวศึกษาอุดรธานี โดยฝึกทักษะการสังเกต จำแนก วาดภาพ และบันทึกข้อมูลอย่างเป็นระบบ"
          icon="nature_people"
          badge="อพ.สธ."
        >
          <button
            type="button"
            onClick={() => onNavigate && onNavigate('explorer')}
            className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-semibold text-xs sm:text-sm hover:bg-secondary transition-colors cursor-pointer shadow-xs flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">search_insights</span>
            <span>เปิดค้นหาพรรณไม้ (Explorer)</span>
          </button>
        </PageHeader>

        {/* Tab switcher */}
        <div className="flex items-center gap-2 border-b border-outline-variant/30 mb-8 pb-2 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('steps')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'steps'
                ? 'bg-secondary text-on-secondary shadow-xs'
                : 'text-on-surface-variant hover:bg-surface-container'
            }`}
          >
            <span className="material-symbols-outlined text-lg">format_list_numbered</span>
            <span>8 ขั้นตอนการศึกษาพรรณไม้</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('form')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'form'
                ? 'bg-secondary text-on-secondary shadow-xs'
                : 'text-on-surface-variant hover:bg-surface-container'
            }`}
          >
            <span className="material-symbols-outlined text-lg">description</span>
            <span>องค์ประกอบแบบ ก.7-003</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('examples')}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'examples'
                ? 'bg-secondary text-on-secondary shadow-xs'
                : 'text-on-surface-variant hover:bg-surface-container'
            }`}
          >
            <span className="material-symbols-outlined text-lg">forest</span>
            <span>ตัวอย่างพืชศึกษาเด่น</span>
          </button>
        </div>

        {/* Tab 1: 8 Steps */}
        {activeTab === 'steps' && (
          <div className="space-y-6 animate-fade-in">
            <SectionHeader
              title="8 ลำดับขั้นตอนการเรียนรู้พืชศึกษา"
              subtitle="Systematic Learning Process"
              icon="timeline"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {studySteps.map((item, idx) => (
                <div
                  key={idx}
                  className="group p-6 rounded-2xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 hover:border-secondary/50 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-secondary/40 group-hover:text-secondary transition-colors">
                        {item.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined text-xl">{item.icon}</span>
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-secondary mb-2">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-outline-variant/20">
                    <span className="text-[11px] font-semibold text-secondary">
                      {item.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Form Structure */}
        {activeTab === 'form' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
            <div className="lg:col-span-2 space-y-6">
              <SectionHeader
                title="โครงสร้างการบันทึกตามแบบ ก.7-003"
                subtitle="Form Kor.7-003 Sections"
                icon="assignment"
              />
              <div className="space-y-4">
                {[
                  { title: 'ส่วนที่ 1: ข้อมูลทั่วไปและการจำแนก', desc: 'รหัสพรรณไม้, ชื่อพื้นเมือง, ชื่อสามัญ, ชื่อวิทยาศาสตร์, ชื่อวงศ์, ถิ่นกำเนิด, การกระจายพันธุ์' },
                  { title: 'ส่วนที่ 2: สัณฐานวิทยาลำต้นและกิ่งก้าน', desc: 'วิสัย (ไม้ยืนต้น/ไม้พุ่ม/ไม้ล้มลุก/เถาเลื้อย), ความสูง, ทรงพุ่ม, เปลือกนอก, เปลือกใน, น้ำยาง' },
                  { title: 'ส่วนที่ 3: สัณฐานวิทยาใบ', desc: 'ชนิดของใบ (ใบเดี่ยว/ใบประกอบ), การเรียงตัว, รูปร่างแผ่นใบ, ฐานใบ, ปลายใบ, ขอบใบ, เส้นใบ, สีและขน' },
                  { title: 'ส่วนที่ 4: สัณฐานวิทยาดอกและช่อดอก', desc: 'ชนิดช่อดอก, ตำแหน่งการเกิด, กลีบเลี้ยง, กลีบดอก, เกสรเพศผู้, เกสรเพศเมีย, กลิ่น และช่วงเวลาออกดอก' },
                  { title: 'ส่วนที่ 5: ผลและเมล็ด', desc: 'ชนิดผล, รูปร่าง, ผิวเปลือก, เนื้อผล, จำนวนเมล็ดต่อผล, ลักษณะเมล็ด และวิธีแพร่กระจายพันธุ์' },
                  { title: 'ส่วนที่ 6: การใช้ประโยชน์และภูมิปัญญาท้องถิ่น', desc: 'ด้านอาหาร, สมุนไพร, เนื้อไม้, ก่อสร้าง, พิธีกรรมความเชื่อ และงานหัตถกรรมพื้นบ้านอีสาน' },
                ].map((sec, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary shrink-0 font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-primary mb-1">{sec.title}</h4>
                      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">{sec.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 h-fit space-y-4">
              <h3 className="font-bold text-primary text-base flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">link</span>
                <span>ระบบและฐานข้อมูลที่เกี่ยวข้อง</span>
              </h3>
              <div className="space-y-2 text-xs">
                {[
                  { label: 'ป้ายพรรณไม้สมบูรณ์', page: 'plantSignboard', icon: 'badge' },
                  { label: 'ภาพวาดทางพฤกษศาสตร์', page: 'plantDrawing', icon: 'palette' },
                  { label: 'ทะเบียนพรรณไม้ ก.7-003', page: 'plantRegistry', icon: 'menu_book' },
                  { label: 'ทะเบียนภาพถ่ายพรรณไม้', page: 'plantPhotos', icon: 'photo_library' },
                  { label: '5 องค์ประกอบงานสวนพฤกษศาสตร์', page: 'fiveElements', icon: 'account_tree' },
                ].map((lnk, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => onNavigate && onNavigate(lnk.page)}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-surface-container hover:bg-secondary-container/50 text-on-surface hover:text-primary transition-all cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary text-base">{lnk.icon}</span>
                      <span className="font-medium">{lnk.label}</span>
                    </div>
                    <span className="material-symbols-outlined text-xs text-secondary">arrow_forward</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Featured Plants */}
        {activeTab === 'examples' && (
          <div className="space-y-6 animate-fade-in">
            <SectionHeader
              title="พรรณไม้ศึกษาเด่นประจำวิทยาลัย"
              subtitle="Featured Botanical Study Species"
              icon="local_florist"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPlants.map((plant) => (
                <ContentCard
                  key={plant.id}
                  title={plant.title}
                  subtitle={plant.subtitle}
                  description={plant.description}
                  image={plant.image}
                  badge={plant.code}
                  tags={plant.tags}
                  onClick={() => {
                    if (onSelectPlant) onSelectPlant(plant.id);
                    else if (onNavigate) onNavigate('explorer');
                  }}
                  footer={
                    <div className="flex items-center justify-between text-xs text-secondary font-semibold">
                      <span>วงศ์: {plant.family}</span>
                      <span className="flex items-center gap-1 group-hover:underline">
                        <span>ดูแบบศึกษา</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </span>
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
