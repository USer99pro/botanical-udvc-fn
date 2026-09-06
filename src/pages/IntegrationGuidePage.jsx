import React, { useState } from 'react';
import Breadcrumb from '../components/shared/Breadcrumb';
import PageHeader from '../components/shared/PageHeader';
import SearchFilter from '../components/shared/SearchFilter';
import Footer from '../components/shared/Footer';

export default function IntegrationGuidePage({ onNavigate }) {
  const [selectedDept, setSelectedDept] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDoc, setActiveDoc] = useState(null);

  const departments = [
    { id: 'all', label: 'ทุกกลุ่มสาขาวิชา' },
    { id: 'general', label: 'คู่มือกลาง อพ.สธ.' },
    { id: 'home-ec', label: 'คหกรรมศาสตร์ / อาหาร' },
    { id: 'fine-arts', label: 'ศิลปกรรม / การออกแบบ' },
    { id: 'it', label: 'เทคโนโลยีสารสนเทศ' },
    { id: 'business', label: 'การบริหารธุรกิจ / การตลาด' },
  ];

  const guides = [
    {
      id: 'guide-01',
      title: 'คู่มือการดำเนินงานสวนพฤกษศาสตร์โรงเรียน ฉบับบูรณาการอาชีวศึกษา',
      category: 'general',
      categoryLabel: 'คู่มือกลาง อพ.สธ.',
      academic_year: '2567',
      author: 'คณะกรรมการดำเนินงาน อพ.สธ. วิทยาลัยอาชีวศึกษาอุดรธานี',
      pages: 148,
      fileSize: '12.4 MB',
      format: 'PDF',
      description: 'คู่มือฉบับสมบูรณ์อธิบายแนวทางการบูรณาการ 5 องค์ประกอบและ 3 สาระการเรียนรู้เข้าสู่หลักสูตรประกาศนียบัตรวิชาชีพ (ปวช.) และประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) ทุกสาขาวิชา',
      topics: ['กรอบแนวคิด อพ.สธ.', 'ขั้นตอนการจัดทำแผนบูรณาการ', 'เกณฑ์การประเมินผลผู้เรียน', 'ตัวอย่างแบบบันทึก ก.7-003'],
    },
    {
      id: 'guide-02',
      title: 'แผนการจัดการเรียนรู้บูรณาการ: สาขาวิชาอาหารและโภชนาการ',
      category: 'home-ec',
      categoryLabel: 'คหกรรมศาสตร์ / อาหาร',
      academic_year: '2567',
      author: 'ครูจริยา บุญชู และคณาจารย์แผนกอาหาร',
      pages: 64,
      fileSize: '4.8 MB',
      format: 'PDF',
      description: 'ตัวอย่างแผนการสอนวิชาอาหารไทยและอาหารฟิวชั่น โดยใช้พืชอาหาร สมุนไพร และดอกไม้พื้นถิ่นในสวนพฤกษศาสตร์ เช่น ดอกทองกวาว ใบย่านาง และว่านหางจระเข้',
      topics: ['คุณค่าทางโภชนาการพืชพื้นบ้าน', 'การสกัดสีธรรมชาติจากดอกไม้', 'การพัฒนาเมนูอัตลักษณ์อีสาน'],
    },
    {
      id: 'guide-03',
      title: 'แผนการจัดการเรียนรู้บูรณาการ: สาขาวิชาวิจิตรศิลป์และการออกแบบ',
      category: 'fine-arts',
      categoryLabel: 'ศิลปกรรม / การออกแบบ',
      academic_year: '2566',
      author: 'ครูพงษ์ศักดิ์ ธรรมรัตน์',
      pages: 52,
      fileSize: '8.2 MB',
      format: 'PDF',
      description: 'การฝึกทักษะการวาดภาพพฤกษศาสตร์ (Botanical Illustration) ทั้งภาพลายเส้นทางวิทยาศาสตร์ สัดส่วนขยาย และเทคนิคสีน้ำบันทึกธรรมชาติ',
      topics: ['การสังเกตสัณฐานวิทยา', 'เทคนิคสเต็ปการวาดดอกและใบ', 'การกำหนดมาตราส่วน (Scale bar)'],
    },
    {
      id: 'guide-04',
      title: 'แผนการจัดการเรียนรู้บูรณาการ: สาขาวิชาเทคโนโลยีสารสนเทศ',
      category: 'it',
      categoryLabel: 'เทคโนโลยีสารสนเทศ',
      academic_year: '2567',
      author: 'ครูอัครเดช รุ่งเรือง',
      pages: 58,
      fileSize: '5.1 MB',
      format: 'PDF',
      description: 'การพัฒนาระบบฐานข้อมูลพฤกษศาสตร์ Web Application การจัดการรหัสคิวอาร์โค้ด และการประยุกต์ใช้ปัญญาประดิษฐ์เพื่อการอนุรักษ์ธรรมชาติ',
      topics: ['การออกแบบดาต้าเบสแบบ ก.7-003', 'การทำ RESTful API', 'ระบบบริหารป้ายชื่อดิจิทัล'],
    },
    {
      id: 'guide-05',
      title: 'แผนการจัดการเรียนรู้บูรณาการ: สาขาวิชาการตลาดและการเป็นผู้ประกอบการ',
      category: 'business',
      categoryLabel: 'การบริหารธุรกิจ / การตลาด',
      academic_year: '2567',
      author: 'ครูกรรณิการ์ สวัสดิ์ผล',
      pages: 46,
      fileSize: '3.9 MB',
      format: 'PDF',
      description: 'การพัฒนาแผนธุรกิจ (Business Plan) บรรจุภัณฑ์ และการตลาดดิจิทัลสำหรับผลิตภัณฑ์ชีวภาพจากสวนพฤกษศาสตร์ตามโมเดลเศรษฐกิจ BCG',
      topics: ['การสร้างแบรนด์ผลิตภัณฑ์ชีวภาพ', 'การกำหนดราคาสินค้าสมุนไพร', 'การตลาดออนไลน์เพื่อสังคม'],
    },
  ];

  const filteredGuides = guides.filter((g) => {
    const matchesDept = selectedDept === 'all' || g.category === selectedDept;
    const matchesQuery =
      g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDept && matchesQuery;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
        <Breadcrumb
          items={[{ label: 'คู่มือแผนบูรณาการ' }]}
          onNavigate={onNavigate}
        />

        <PageHeader
          title="คู่มือแผนบูรณาการ (Curriculum Integration Guides)"
          subtitle="Vocational Curriculum Plans, Lesson Exemplars & Teaching Manuals"
          description="เอกสารคู่มือแนวทางการจัดการเรียนรู้แบบบูรณาการงานสวนพฤกษศาสตร์โรงเรียน (อพ.สธ.) วิทยาลัยอาชีวศึกษาอุดรธานี เข้ากับกลุ่มสาขาวิชาชีพต่างๆ เพื่อเป็นต้นแบบให้คณาจารย์และสถานศึกษาเครือข่ายนำไปปรับใช้"
          icon="menu_book"
          badge="คลังเอกสารทางการ"
        />

        {/* Filter */}
        <SearchFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          placeholder="ค้นหาชื่อคู่มือ แผนการสอน สาขาวิชา หรือหัวข้อ..."
          categories={departments}
          selectedCategory={selectedDept}
          onCategoryChange={setSelectedDept}
        />

        {/* Guides List */}
        <div className="space-y-4 mb-12">
          {filteredGuides.map((guide) => (
            <div
              key={guide.id}
              className="p-6 rounded-2xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 hover:border-secondary/50 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4 flex-1">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0 border border-red-500/20">
                  <span className="material-symbols-outlined text-3xl">picture_as_pdf</span>
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-secondary/15 text-secondary">
                      {guide.categoryLabel}
                    </span>
                    <span className="text-xs font-mono text-on-surface-variant">
                      ปีการศึกษา {guide.academic_year}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-primary">
                    {guide.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                    {guide.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {guide.topics.map((top, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-[11px] bg-surface-container text-on-surface-variant"
                      >
                        • {top}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action and File Metadata */}
              <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-3 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-outline-variant/20">
                <div className="text-left md:text-right text-xs text-on-surface-variant font-mono">
                  <div>ขนาด: {guide.fileSize}</div>
                  <div>จำนวน: {guide.pages} หน้า ({guide.format})</div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveDoc(guide)}
                    className="px-3.5 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-semibold text-xs transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-base">visibility</span>
                    <span>ดูตัวอย่าง</span>
                  </button>
                  <a
                    href={`#download-${guide.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`กำลังเตรียมดาวน์โหลดไฟล์เอกสาร: ${guide.title} (${guide.fileSize})`);
                    }}
                    className="px-4 py-2 rounded-xl bg-secondary text-on-secondary font-semibold text-xs hover:bg-primary transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
                  >
                    <span className="material-symbols-outlined text-base">download</span>
                    <span>ดาวน์โหลด PDF</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Document Preview Modal */}
        {activeDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="relative max-w-2xl w-full bg-surface-container-lowest dark:bg-surface-dim rounded-3xl p-6 sm:p-8 shadow-2xl border border-outline-variant/30 space-y-5">
              <div className="flex items-start justify-between">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-secondary/15 text-secondary">
                    {activeDoc.categoryLabel}
                  </span>
                  <h3 className="text-lg font-bold text-primary mt-2">
                    {activeDoc.title}
                  </h3>
                  <p className="text-xs text-secondary font-medium mt-0.5">
                    ผู้จัดทำ: {activeDoc.author}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveDoc(null)}
                  className="p-1.5 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container"
                >
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
              </div>

              {/* Simulated Document Preview Area */}
              <div className="p-6 rounded-2xl bg-surface-container border border-outline-variant/20 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20 text-xs text-on-surface-variant">
                  <span>ตัวอย่างเอกสารเผยแพร่ (Document Preview)</span>
                  <span className="font-mono">{activeDoc.pages} หน้า • {activeDoc.fileSize}</span>
                </div>
                <div className="space-y-2 text-xs text-on-surface leading-relaxed">
                  <p className="font-semibold text-primary">คำนำและสาระสำคัญ:</p>
                  <p>{activeDoc.description}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary mb-2">โครงสร้างหัวข้อในเอกสาร:</p>
                  <ul className="space-y-1 text-xs text-on-surface-variant">
                    {activeDoc.topics.map((t, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setActiveDoc(null)}
                  className="px-4 py-2 rounded-xl border border-outline-variant text-xs font-semibold hover:bg-surface-container transition-colors cursor-pointer"
                >
                  ปิดหน้าต่าง
                </button>
                <a
                  href={`#download-${activeDoc.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`ดาวน์โหลดสำเร็จ: ${activeDoc.title}`);
                    setActiveDoc(null);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-secondary text-on-secondary text-xs font-semibold hover:bg-primary transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
                >
                  <span className="material-symbols-outlined text-base">download</span>
                  <span>ดาวน์โหลดไฟล์ฉบับเต็ม</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
