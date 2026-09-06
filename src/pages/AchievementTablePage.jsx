import React, { useState } from 'react';
import Breadcrumb from '../components/shared/Breadcrumb';
import PageHeader from '../components/shared/PageHeader';
import SearchFilter from '../components/shared/SearchFilter';
import Pagination from '../components/shared/Pagination';
import Footer from '../components/shared/Footer';

export default function AchievementTablePage({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [yearFilter, setYearFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeItem, setActiveItem] = useState(null);
  const itemsPerPage = 8;

  const years = [
    { id: 'all', label: 'ทุกปีการศึกษา' },
    { id: '2567', label: 'ปีการศึกษา 2567' },
    { id: '2566', label: 'ปีการศึกษา 2566' },
    { id: '2565', label: 'ปีการศึกษา 2565' },
  ];

  const achievements = [
    {
      id: 'ach-01',
      index: 1,
      academic_year: '2567',
      title: 'การพัฒนาสบู่เหลวสมุนไพรสารสกัดว่านหางจระเข้ผสมใบทองกวาว',
      owner_name: 'นางสาวจิราภรณ์ วงศ์ไทย และคณะ',
      department: 'แผนกวิชาคหกรรมศาสตร์',
      category: 'ผลิตภัณฑ์ชีวภาพแปรรูป',
      status: 'approved',
      statusLabel: 'เผยแพร่สมบูรณ์',
      award_level: 'รางวัลชนะเลิศ ระดับจังหวัด',
      date: '10 ส.ค. 2567',
      description: 'ผลงานสิ่งประดิษฐ์และผลิตภัณฑ์ชีวภาพได้รับรางวัลชนะเลิศ การประกวดสิ่งประดิษฐ์คนรุ่นใหม่ อาชีวศึกษาจังหวัดอุดรธานี',
    },
    {
      id: 'ach-02',
      index: 2,
      academic_year: '2567',
      title: 'ระบบจำแนกพรรณไม้อัตโนมัติด้วย AI Vision และป้ายชื่อดิจิทัล',
      owner_name: 'นายวรเมธ ศิริสุข และคณะ',
      department: 'แผนกวิชาเทคโนโลยีสารสนเทศ',
      category: 'สื่อและเทคโนโลยีดิจิทัล',
      status: 'approved',
      statusLabel: 'เผยแพร่สมบูรณ์',
      award_level: 'รางวัลเหรียญทอง ระดับภาค',
      date: '15 ก.ค. 2567',
      description: 'นวัตกรรมระบบป้ายและซอฟต์แวร์สแกนชนิดพรรณไม้อัจฉริยะ สำหรับโรงเรียนเครือข่าย อพ.สธ.',
    },
    {
      id: 'ach-03',
      index: 3,
      academic_year: '2567',
      title: 'เครื่องดื่มไซรัปดอกทองกวาวผสมน้ำผึ้งชันโรงอัตลักษณ์อีสาน',
      owner_name: 'นางสาวปรียาภรณ์ ชัยนาม และคณะ',
      department: 'แผนกวิชาอาหารและโภชนาการ',
      category: 'อาหารและเครื่องดื่มสุขภาพ',
      status: 'approved',
      statusLabel: 'เผยแพร่สมบูรณ์',
      award_level: 'รางวัลผลงานดีเด่น',
      date: '02 ก.ย. 2567',
      description: 'ผลิตภัณฑ์เครื่องดื่มสุขภาพแปรรูปจากกลีบดอกทองกวาวในวิทยาลัย ต่อยอดสู่เชิงพาณิชย์',
    },
    {
      id: 'ach-04',
      index: 4,
      academic_year: '2566',
      title: 'แผ่นแปะสมุนไพรลูกประคบเย็นแก้ปวดเมื่อยจากสารสกัดไพลและพิกุล',
      owner_name: 'นายกิตติคุณ ดำรงธรรม และคณะ',
      department: 'แผนกวิชาการโรงแรมและสปา',
      category: 'สิ่งประดิษฐ์และนวัตกรรม',
      status: 'approved',
      statusLabel: 'เผยแพร่สมบูรณ์',
      award_level: 'รางวัลรองชนะเลิศอันดับ 1',
      date: '20 พ.ย. 2566',
      description: 'นวัตกรรมแผ่นเจลประคบสมุนไพรนาโน บรรเทาอาการปวดกล้ามเนื้อจากภูมิปัญญาหมอพื้นบ้าน',
    },
    {
      id: 'ach-05',
      index: 5,
      academic_year: '2566',
      title: 'กระดาษสาใยธรรมชาติจากเปลือกต้นยางนาและเส้นใยสับปะรด',
      owner_name: 'นายธีรภัทร ชาญวิชัย และคณะ',
      department: 'แผนกวิชาวิจิตรศิลป์',
      category: 'สิ่งประดิษฐ์และนวัตกรรม',
      status: 'approved',
      statusLabel: 'เผยแพร่สมบูรณ์',
      award_level: 'รางวัลรองชนะเลิศอันดับ 2',
      date: '05 ธ.ค. 2566',
      description: 'กระดาษหัตถกรรมเชิงนิเวศน์สำหรับบรรจุภัณฑ์สินค้าชุมชน ย่อยสลายได้ตามธรรมชาติ 100%',
    },
    {
      id: 'ach-06',
      index: 6,
      academic_year: '2566',
      title: 'ชุดนิทรรศการมีชีวิต 5 องค์ประกอบงานสวนพฤกษศาสตร์โรงเรียน',
      owner_name: 'คณะกรรมการดำเนินงานสวนพฤกษศาสตร์ UDVC',
      department: 'ฝ่ายวิชาการและงานสวนพฤกษศาสตร์',
      category: 'นิทรรศการและการศึกษา',
      status: 'approved',
      statusLabel: 'เผยแพร่สมบูรณ์',
      award_level: 'เกียรติบัตรงานสวนพฤกษศาสตร์ดีเด่น',
      date: '18 ม.ค. 2567',
      description: 'นิทรรศการบูรณาการ 5 องค์ประกอบและ 3 สาระการเรียนรู้ ในงานมหกรรมวิชาการอาชีวศึกษา',
    },
    {
      id: 'ach-07',
      index: 7,
      academic_year: '2567',
      title: 'ชาสมุนไพรใบหม่อนอินทรีย์ผสมเกสรดอกพิกุลและเตยหอม',
      owner_name: 'นางสาวกมลวรรณ นนทบุรี และคณะ',
      department: 'แผนกวิชาอาหารและโภชนาการ',
      category: 'อาหารและเครื่องดื่มสุขภาพ',
      status: 'approved',
      statusLabel: 'เผยแพร่สมบูรณ์',
      award_level: 'รางวัลรองชนะเลิศ อันดับ 1',
      date: '14 ส.ค. 2567',
      description: 'ชาชงสมุนไพรอบแห้งลดระดับน้ำตาลในเลือด จากแปลงปลูกพืชศึกษาในวิทยาลัย',
    },
    {
      id: 'ach-08',
      index: 8,
      academic_year: '2567',
      title: 'การสำรวจความหลากหลายของพรรณไม้น้ำในระบบนิเวศหนองประจักษ์',
      owner_name: 'ชมรมวิทยาศาสตร์และสิ่งแวดล้อม UDVC',
      department: 'หมวดวิชาวิทยาศาสตร์',
      category: 'โครงงานวิทยาศาสตร์',
      status: 'pending',
      statusLabel: 'รอการตรวจรับขั้นสุดท้าย',
      award_level: 'อยู่ระหว่างพิจารณาผลงาน',
      date: '28 ส.ค. 2567',
      description: 'รายงานการสำรวจและจัดทำตัวอย่างพรรณไม้น้ำและพืชชายน้ำในพื้นที่ชุ่มน้ำเมืองอุดรธานี',
    },
    {
      id: 'ach-09',
      index: 9,
      academic_year: '2565',
      title: 'การย้อมเส้นใยฝ้ายด้วยสีธรรมชาติจากเปลือกต้นราชพฤกษ์และใบขี้เหล็ก',
      owner_name: 'นางสาวสุดารัตน์ คำมี และคณะ',
      department: 'แผนกวิชาการออกแบบและแฟชั่น',
      category: 'ผลิตภัณฑ์ชีวภาพแปรรูป',
      status: 'approved',
      statusLabel: 'เผยแพร่สมบูรณ์',
      award_level: 'รางวัลชนะเลิศ ทักษะวิชาชีพ',
      date: '10 มี.ค. 2566',
      description: 'คู่มือและคอลเลกชันผ้าทอมือย้อมสีธรรมชาติจากพรรณไม้ท้องถิ่นอีสาน',
    },
  ];

  const filteredAchievements = achievements.filter((item) => {
    const matchesYear = yearFilter === 'all' || item.academic_year === yearFilter;
    const matchesQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.owner_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.award_level.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesQuery;
  });

  const totalPages = Math.ceil(filteredAchievements.length / itemsPerPage);
  const displayedItems = filteredAchievements.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
        <Breadcrumb
          items={[{ label: 'ตารางสะสมผลงาน' }]}
          onNavigate={onNavigate}
        />

        <PageHeader
          title="ตารางสะสมผลงาน (Achievement Ledger)"
          subtitle="Cumulative Record of Student, Faculty & Institutional Awards"
          description="ทำเนียบและตารางสะสมผลงานทางวิชาการ โครงงาน สิ่งประดิษฐ์ นวัตกรรม และรางวัลเชิดชูเกียรติที่เกิดจากการดำเนินงานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี ในแต่ละปีการศึกษา"
          icon="emoji_events"
          badge="ทำเนียบผลงาน"
        >
          <span className="px-3 py-1.5 rounded-xl bg-surface-container text-xs font-bold text-primary border border-outline-variant/30">
            สะสมทั้งหมด {filteredAchievements.length} ผลงาน
          </span>
        </PageHeader>

        {/* Filter */}
        <SearchFilter
          searchQuery={searchQuery}
          onSearchChange={(q) => {
            setSearchQuery(q);
            setCurrentPage(1);
          }}
          placeholder="ค้นหาชื่อผลงาน ผู้จัดทำ แผนกวิชา หรือรางวัล..."
          categories={years}
          selectedCategory={yearFilter}
          onCategoryChange={(y) => {
            setYearFilter(y);
            setCurrentPage(1);
          }}
        />

        {/* Responsive Table for Desktop */}
        <div className="hidden md:block overflow-hidden rounded-2xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 shadow-xs mb-6">
          <table className="w-full text-left text-xs text-on-surface">
            <thead className="bg-surface-container text-primary font-bold border-b border-outline-variant/30">
              <tr>
                <th className="py-3.5 px-4 w-12 text-center">ลำดับ</th>
                <th className="py-3.5 px-4 w-24">ปีการศึกษา</th>
                <th className="py-3.5 px-4">ชื่อผลงาน / นวัตกรรม</th>
                <th className="py-3.5 px-4">ผู้จัดทำ / แผนกวิชา</th>
                <th className="py-3.5 px-4">ประเภท</th>
                <th className="py-3.5 px-4">รางวัล / สถานะ</th>
                <th className="py-3.5 px-4 text-right">รายละเอียด</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/15">
              {displayedItems.map((item, idx) => (
                <tr
                  key={item.id}
                  className="hover:bg-surface-container/50 transition-colors"
                >
                  <td className="py-3.5 px-4 text-center font-bold text-secondary">
                    {(currentPage - 1) * itemsPerPage + idx + 1}
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-on-surface">
                    {item.academic_year}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-primary max-w-xs">
                    {item.title}
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-semibold text-on-surface">{item.owner_name}</div>
                    <div className="text-[11px] text-on-surface-variant">{item.department}</div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-surface-container text-on-surface-variant">
                      {item.category}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="text-amber-600 dark:text-amber-400 font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">emoji_events</span>
                      <span>{item.award_level}</span>
                    </div>
                    <span
                      className={`inline-block mt-0.5 px-2 py-0.2 rounded-full text-[10px] font-semibold ${
                        item.status === 'approved'
                          ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400'
                          : 'bg-amber-500/15 text-amber-700 dark:text-amber-400'
                      }`}
                    >
                      {item.statusLabel}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      type="button"
                      onClick={() => setActiveItem(item)}
                      className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-secondary hover:text-on-secondary text-secondary font-semibold text-xs transition-colors cursor-pointer"
                    >
                      ดูข้อมูล
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3 mb-6">
          {displayedItems.map((item, idx) => (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 space-y-2 text-xs"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-secondary">
                  ลำดับที่ {(currentPage - 1) * itemsPerPage + idx + 1} • ปี {item.academic_year}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-secondary/15 text-secondary">
                  {item.category}
                </span>
              </div>
              <h3 className="font-bold text-sm text-primary">{item.title}</h3>
              <p className="text-on-surface-variant">
                <span className="font-medium text-on-surface">{item.owner_name}</span> ({item.department})
              </p>
              <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-semibold text-[11px]">
                <span className="material-symbols-outlined text-sm">emoji_events</span>
                <span>{item.award_level}</span>
              </div>
              <div className="pt-2 border-t border-outline-variant/20 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveItem(item)}
                  className="px-3 py-1.5 rounded-lg bg-secondary text-on-secondary font-semibold text-xs cursor-pointer"
                >
                  ดูรายละเอียดผลงาน
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />

        {/* Detail Modal */}
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="relative max-w-lg w-full bg-surface-container-lowest dark:bg-surface-dim rounded-3xl p-6 sm:p-8 shadow-2xl border border-outline-variant/30 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-secondary/15 text-secondary">
                    ปีการศึกษา {activeItem.academic_year} • {activeItem.category}
                  </span>
                  <h3 className="text-lg font-bold text-primary mt-2">
                    {activeItem.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  className="p-1.5 text-on-surface-variant hover:text-primary rounded-full hover:bg-surface-container"
                >
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
              </div>

              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-2.5 text-xs text-amber-800 dark:text-amber-300 font-bold">
                <span className="material-symbols-outlined text-base">emoji_events</span>
                <span>{activeItem.award_level}</span>
              </div>

              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {activeItem.description}
              </p>

              <div className="p-3 rounded-xl bg-surface-container space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">ผู้จัดทำ:</span>
                  <span className="font-bold text-primary">{activeItem.owner_name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">แผนกวิชา:</span>
                  <span className="font-bold text-primary">{activeItem.department}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">วันที่บันทึก:</span>
                  <span className="font-bold text-primary">{activeItem.date}</span>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  className="px-4 py-2 rounded-xl bg-secondary text-on-secondary text-xs font-semibold hover:bg-primary transition-colors cursor-pointer"
                >
                  ปิดหน้าต่าง
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
