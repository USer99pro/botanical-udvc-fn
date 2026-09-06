import React, { useState } from 'react';
import Breadcrumb from '../components/shared/Breadcrumb';
import PageHeader from '../components/shared/PageHeader';
import SearchFilter from '../components/shared/SearchFilter';
import ProjectCard from '../components/shared/ProjectCard';
import Footer from '../components/shared/Footer';

export default function ProjectsPage({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProject, setActiveProject] = useState(null);

  const categories = [
    { id: 'all', label: 'ทุกประเภทผลงาน' },
    { id: 'innovation', label: 'สิ่งประดิษฐ์และนวัตกรรม' },
    { id: 'bioproduct', label: 'ผลิตภัณฑ์ชีวภาพแปรรูป' },
    { id: 'food', label: 'อาหารและเครื่องดื่มสุขภาพ' },
    { id: 'digital', label: 'สื่อและเทคโนโลยีดิจิทัล' },
  ];

  const projects = [
    {
      id: 'proj-01',
      title: 'สบู่เหลวสมุนไพรสารสกัดว่านหางจระเข้ผสมสารสกัดใบทองกวาว',
      category: 'ผลิตภัณฑ์ชีวภาพแปรรูป',
      categoryId: 'bioproduct',
      academic_year: '2567',
      cover_image: 'https://images.unsplash.com/photo-1608248597359-0524458b53db?auto=format&fit=crop&w=800&q=80',
      summary: 'การพัฒนาสูตรสบู่เหลวบำรุงผิวจากสารสกัดพืชในสวนพฤกษศาสตร์วิทยาลัย ยับยั้งแบคทีเรียและเพิ่มความชุ่มชื้นแก่ผิวพรรณ',
      authors: [
        { name: 'นางสาวจิราภรณ์ วงศ์ไทย', student_id: '66201040003', department: 'แผนกวิชาคหกรรมศาสตร์' },
        { name: 'นายธนาธิป สุขเกษม', student_id: '66201040007', department: 'แผนกวิชาคหกรรมศาสตร์' },
      ],
      advisors: ['ครูจริยา บุญชู', 'ครูสมศักดิ์ สุวรรณ'],
      awards: [
        { title: 'รางวัลชนะเลิศ การประกวดสิ่งประดิษฐ์คนรุ่นใหม่ ระดับอาชีวศึกษาจังหวัดอุดรธานี ปี 2567' },
      ],
      description: 'งานวิจัยทดลองสกัดสารออกฤทธิ์ทางชีวภาพจากว่านหางจระเข้และใบทองกวาว เพื่อพัฒนาผลิตภัณฑ์ทำความสะอาดผิวที่มีส่วนผสมธรรมชาติ ปราศจากสารพาราเบนและสารเคมีรุนแรง ผ่านการทดสอบค่า pH และความคงตัวตามมาตรฐานผลิตภัณฑ์ชุมชน (มผช.)',
    },
    {
      id: 'proj-02',
      title: 'ระบบสแกนคิวอาร์โค้ดและจำแนกพรรณไม้อัตโนมัติด้วย AI Vision (Smart Botanical Guide)',
      category: 'สื่อและเทคโนโลยีดิจิทัล',
      categoryId: 'digital',
      academic_year: '2567',
      cover_image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      summary: 'เว็บแอปพลิเคชันและโมเดล AI จำแนกพรรณไม้ด้วยภาพถ่ายใบและดอก เชื่อมโยงฐานข้อมูลแบบ ก.7-003 บนสมาร์ตโฟน',
      authors: [
        { name: 'นายวรเมธ ศิริสุข', student_id: '66201040034', department: 'แผนกวิชาเทคโนโลยีสารสนเทศ' },
        { name: 'นางสาวนภัสสร แก้วมณี', student_id: '66201040038', department: 'แผนกวิชาคอมพิวเตอร์ธุรกิจ' },
      ],
      advisors: ['ครูอัครเดช รุ่งเรือง', 'ครูพีระเดช จันทรา'],
      awards: [
        { title: 'รางวัลเหรียญทอง นวัตกรรมซอฟต์แวร์เพื่อการอนุรักษ์ธรรมชาติ ระดับภาคตะวันออกเฉียงเหนือ' },
      ],
      description: 'พัฒนาระบบ Deep Learning แบบ Transfer Learning เพื่อตรวจจับและจำแนกชนิดพันธุ์ไม้ในวิทยาลัยได้แม่นยำกว่า 94.2% พร้อมแสดงข้อมูลการใช้งาน ป้ายชื่อสมบูรณ์ และพิกัดบนแผนที่ดาวเทียม',
    },
    {
      id: 'proj-03',
      title: 'แผ่นแปะสมุนไพรลูกประคบเย็นแก้ปวดเมื่อยจากสารสกัดไพลและพิกุล',
      category: 'สิ่งประดิษฐ์และนวัตกรรม',
      categoryId: 'innovation',
      academic_year: '2566',
      cover_image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
      summary: 'นวัตกรรมแผ่นเจลประคบสมุนไพรนาโน ใช้งานสะดวก พกพาง่าย บรรเทาอาการอักเสบของกล้ามเนื้อและผ่อนคลายกลิ่นหอมอโรมา',
      authors: [
        { name: 'นายกิตติคุณ ดำรงธรรม', student_id: '65201040019', department: 'แผนกวิชาการโรงแรมและสปา' },
        { name: 'นางสาวรัตนาพร ศรีจันทร์', student_id: '65201040023', department: 'แผนกวิชาการตลาด' },
      ],
      advisors: ['ครูกรรณิการ์ สวัสดิ์ผล'],
      awards: [
        { title: 'รางวัลรองชนะเลิศอันดับ 1 สิ่งประดิษฐ์ด้านการแพทย์และการส่งเสริมสุขภาพ' },
      ],
      description: 'นำสมุนไพรพื้นถิ่นอีสาน ได้แก่ เหง้าไพล ดอกพิกุล และใบพลับพลึง มาผ่านกระบวนการสกัดน้ำมันหอมระเหยและเอนแคปซูเลชัน ผสมในไฮโดรเจลสังเคราะห์จากแป้งข้าวเหนียวพื้นบ้าน',
    },
    {
      id: 'proj-04',
      title: 'เครื่องดื่มไซรัปดอกทองกวาวผสมน้ำผึ้งชันโรงและมะนาวพื้นถิ่น',
      category: 'อาหารและเครื่องดื่มสุขภาพ',
      categoryId: 'food',
      academic_year: '2567',
      cover_image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
      summary: 'เครื่องดื่มสุขภาพอุดมด้วยสารต้านอนุมูลอิสระ แอนโทไซยานิน และฟลาโวนอยด์ สีสันธรรมชาติจากกลีบดอกทองกวาว',
      authors: [
        { name: 'นางสาวปรียาภรณ์ ชัยนาม', student_id: '66201040081', department: 'แผนกวิชาอาหารและโภชนาการ' },
        { name: 'นายศราวุธ บุญมี', student_id: '66201040085', department: 'แผนกวิชาอาหารและโภชนาการ' },
      ],
      advisors: ['ครูมาลี เจริญสุข', 'ครูสุพัตรา นิลรัตน์'],
      awards: [
        { title: 'รางวัลผลงานดีเด่น โครงการสร้างสรรค์ผลิตภัณฑ์อาหารอัตลักษณ์อีสาน' },
      ],
      description: 'พัฒนาผลิตภัณฑ์เครื่องดื่มไซรัปจากดอกทองกวาวซึ่งร่วงหล่นตามฤดูกาลในวิทยาลัย ผสมน้ำผึ้งชันโรงแท้ ให้รสหวานอมเปรี้ยวชื่นใจ ลดการอักเสบในลำคอ ต่อยอดสู่เชิงพาณิชย์ในร้านศูนย์ฝึกปฏิบัติการวิชาชีพ UDVC',
    },
    {
      id: 'proj-05',
      title: 'กระดาษสาใยธรรมชาติจากเปลือกต้นยางนาและเส้นใยสับปะรด',
      category: 'สิ่งประดิษฐ์และนวัตกรรม',
      categoryId: 'innovation',
      academic_year: '2566',
      cover_image: 'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?auto=format&fit=crop&w=800&q=80',
      summary: 'การผลิตกระดาษหัตถกรรมเชิงนิเวศน์สำหรับบรรจุภัณฑ์และงานศิลปะพิมพ์ลาย สลายตัวได้ตามธรรมชาติ 100%',
      authors: [
        { name: 'นายธีรภัทร ชาญวิชัย', student_id: '65201040050', department: 'แผนกวิชาวิจิตรศิลป์' },
        { name: 'นางสาวชลธิชา สมควร', student_id: '65201040055', department: 'แผนกวิชาการออกแบบ' },
      ],
      advisors: ['ครูพงษ์ศักดิ์ ธรรมรัตน์'],
      awards: [
        { title: 'รางวัลรองชนะเลิศอันดับ 2 สิ่งประดิษฐ์ด้านพลังงานและสิ่งแวดล้อม' },
      ],
      description: 'นำเศษเปลือกไม้และกิ่งไม้จากการตัดแต่งพรรณไม้ในวิทยาลัยมาแปรรูปเป็นเยื่อกระดาษหัตถกรรมเหนียวนุ่ม ผสมลวดลายกลีบดอกไม้แห้ง ใช้ทำกล่องบรรจุภัณฑ์และป้ายห้อยสินค้า',
    },
    {
      id: 'proj-06',
      title: 'ชาสมุนไพรใบหม่อนอินทรีย์ผสมเกสรดอกพิกุลและเตยหอม',
      category: 'อาหารและเครื่องดื่มสุขภาพ',
      categoryId: 'food',
      academic_year: '2567',
      cover_image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
      summary: 'ชาชงดื่มกลิ่นหอมละมุน บำรุงหัวใจ ลดระดับน้ำตาลในเลือด จากพรรณไม้แปลงปลูกสวนพฤกษศาสตร์',
      authors: [
        { name: 'นางสาวกมลวรรณ นนทบุรี', student_id: '66201040112', department: 'แผนกวิชาอาหารและโภชนาการ' },
        { name: 'นายอานนท์ บุตรดี', student_id: '66201040115', department: 'แผนกวิชาการตลาด' },
      ],
      advisors: ['ครูจริยา บุญชู'],
      awards: [
        { title: 'รางวัลรองชนะเลิศ อันดับ 1 การแข่งขันทักษะวิชาชีพการแปรรูปอาหาร' },
      ],
      description: 'คัดเลือกใบหม่อนออร์แกนิกอบแห้งด้วยลมร้อน ผสมเกสรดอกพิกุลที่เก็บรวบรวมอย่างถูกวิธี และใบเตยหอม ให้กลิ่นหอมอบอุ่นและคุณประโยชน์ต่อสุขภาพ',
    },
  ];

  const filteredProjects = projects.filter((p) => {
    const matchesCat = selectedCategory === 'all' || p.categoryId === selectedCategory;
    const matchesQuery =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.authors.some((a) => a.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
        <Breadcrumb
          items={[{ label: 'ผลงานและนวัตกรรม' }]}
          onNavigate={onNavigate}
        />

        <PageHeader
          title="ผลงานและนวัตกรรม (Projects & Innovation)"
          subtitle="Student & Faculty Research, Inventions, and Botanical Bio-products"
          description="ศูนย์รวมผลงานวิจัย โครงงานสิ่งประดิษฐ์ นวัตกรรม และผลิตภัณฑ์ชีวภาพจากฐานพืชพรรณและทรัพยากรท้องถิ่น ผลงานสร้างสรรค์ของนักเรียน นักศึกษา และคณาจารย์วิทยาลัยอาชีวศึกษาอุดรธานี ที่ได้รับรางวัลระดับจังหวัดและระดับชาติ"
          icon="lightbulb"
          badge="นวัตกรรมอาชีวศึกษา"
        />

        {/* Filter */}
        <SearchFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          placeholder="ค้นหาชื่อผลงาน นวัตกรรม ผู้จัดทำ หรือรางวัล..."
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((proj) => (
            <ProjectCard
              key={proj.id}
              project={proj}
              onClick={() => setActiveProject(proj)}
            />
          ))}
        </div>

        {/* Project Detail Modal */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="relative max-w-3xl w-full bg-surface-container-lowest dark:bg-surface-dim rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/30 max-h-[90vh] flex flex-col">
              <div className="relative h-64 sm:h-72 bg-surface-container overflow-hidden">
                <img
                  src={activeProject.cover_image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md text-primary hover:bg-surface flex items-center justify-center cursor-pointer shadow-md"
                >
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-surface/90 text-primary backdrop-blur-md">
                  {activeProject.category} • ปี {activeProject.academic_year}
                </span>
              </div>

              <div className="p-6 overflow-y-auto space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">
                    {activeProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                {activeProject.awards && activeProject.awards.length > 0 && (
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
                    <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-2xl shrink-0">
                      emoji_events
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider">
                        เกียรติประวัติและรางวัลที่ได้รับ
                      </h4>
                      <p className="text-xs font-semibold text-primary mt-0.5">
                        {activeProject.awards[0]?.title}
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-surface-container space-y-2">
                    <h4 className="text-xs font-bold text-secondary uppercase tracking-wider flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">groups</span>
                      <span>ผู้จัดทำผลงาน (นักศึกษา)</span>
                    </h4>
                    <div className="space-y-1 text-xs">
                      {activeProject.authors.map((auth, idx) => (
                        <div key={idx} className="flex justify-between text-on-surface">
                          <span>{auth.name}</span>
                          <span className="text-on-surface-variant/80 text-[11px]">{auth.department}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-container space-y-2">
                    <h4 className="text-xs font-bold text-secondary uppercase tracking-wider flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">school</span>
                      <span>ครูที่ปรึกษา</span>
                    </h4>
                    <div className="space-y-1 text-xs text-on-surface">
                      {activeProject.advisors.map((adv, idx) => (
                        <p key={idx}>{adv}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveProject(null)}
                    className="px-5 py-2 rounded-xl bg-primary text-on-primary text-xs font-semibold hover:bg-secondary transition-colors cursor-pointer"
                  >
                    ปิดหน้าต่าง
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
