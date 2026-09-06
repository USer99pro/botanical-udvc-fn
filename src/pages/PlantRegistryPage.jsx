import React, { useState } from 'react';
import Breadcrumb from '../components/shared/Breadcrumb';
import PageHeader from '../components/shared/PageHeader';
import SearchFilter from '../components/shared/SearchFilter';
import Pagination from '../components/shared/Pagination';
import Footer from '../components/shared/Footer';

export default function PlantRegistryPage({ onNavigate, onSelectPlant }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const statuses = [
    { id: 'all', label: 'ทุกสถานะ' },
    { id: 'completed', label: 'สมบูรณ์ (ติดป้ายแล้ว)' },
    { id: 'verifying', label: 'อยู่ระหว่างตรวจสอบ' },
    { id: 'surveying', label: 'สำรวจขั้นต้น' },
  ];

  const registryRecords = [
    {
      regNumber: 'REG-2567-001',
      plantCode: '7-41000-001-001',
      thaiName: 'ราชพฤกษ์',
      scientificName: 'Cassia fistula L.',
      family: 'FABACEAE',
      location: 'แปลง A-01 ด้านหน้าอาคาร 1',
      recordedDate: '15 พ.ค. 2567',
      status: 'completed',
      statusLabel: 'สมบูรณ์ (ติดป้ายแล้ว)',
      surveyor: 'ครูสมศักดิ์ สุวรรณ / นักศึกษาแผนกวิจิตรศิลป์',
      plantId: 'cassia-fistula',
    },
    {
      regNumber: 'REG-2567-002',
      plantCode: '7-41000-001-002',
      thaiName: 'ยางนา',
      scientificName: 'Dipterocarpus alatus Roxb. ex G.Don',
      family: 'DIPTEROCARPACEAE',
      location: 'แปลง D-04 ลานธรรมเฉลิมพระเกียรติ',
      recordedDate: '18 พ.ค. 2567',
      status: 'completed',
      statusLabel: 'สมบูรณ์ (ติดป้ายแล้ว)',
      surveyor: 'คณะทำงานสวนพฤกษศาสตร์ UDVC',
      plantId: 'dipterocarpus-alatus',
    },
    {
      regNumber: 'REG-2567-003',
      plantCode: '7-41000-001-003',
      thaiName: 'พิกุล',
      scientificName: 'Mimusops elengi L.',
      family: 'SAPOTACEAE',
      location: 'แปลง A-03 สวนหย่อมด้านข้างหอประชุม',
      recordedDate: '20 พ.ค. 2567',
      status: 'completed',
      statusLabel: 'สมบูรณ์ (ติดป้ายแล้ว)',
      surveyor: 'นักศึกษาแผนกคหกรรมศาสตร์',
      plantId: 'mimusops-elengi',
    },
    {
      regNumber: 'REG-2567-004',
      plantCode: '7-41000-001-004',
      thaiName: 'โมกบ้าน',
      scientificName: 'Wrightia religiosa (Teijsm. & Binn.)',
      family: 'APOCYNACEAE',
      location: 'แปลง B-02 เรือนเพาะชำพรรณไม้',
      recordedDate: '25 พ.ค. 2567',
      status: 'completed',
      statusLabel: 'สมบูรณ์ (ติดป้ายแล้ว)',
      surveyor: 'ครูณัฐวุฒิ การุณยพงศ์',
      plantId: 'wrightia-religiosa',
    },
    {
      regNumber: 'REG-2567-005',
      plantCode: '7-41000-001-005',
      thaiName: 'ทองกวาว',
      scientificName: 'Butea monosperma (Lam.) Taub.',
      family: 'FABACEAE',
      location: 'แปลง D-08 ริมรั้วทิศตะวันออก',
      recordedDate: '02 มิ.ย. 2567',
      status: 'completed',
      statusLabel: 'สมบูรณ์ (ติดป้ายแล้ว)',
      surveyor: 'ชมรมอนุรักษ์ธรรมชาติ UDVC',
      plantId: 'butea-monosperma',
    },
    {
      regNumber: 'REG-2567-006',
      plantCode: '7-41000-001-006',
      thaiName: 'ว่านหางจระเข้',
      scientificName: 'Aloe vera (L.) Burm.f.',
      family: 'ASPHODELACEAE',
      location: 'แปลง C-01 แปลงสมุนไพรแผนกอาหาร',
      recordedDate: '10 มิ.ย. 2567',
      status: 'completed',
      statusLabel: 'สมบูรณ์ (ติดป้ายแล้ว)',
      surveyor: 'ครูจริยา บุญชู',
      plantId: 'aloe-vera',
    },
    {
      regNumber: 'REG-2567-007',
      plantCode: '7-41000-001-007',
      thaiName: 'ต้นแคนา',
      scientificName: 'Dolichandrone serrulata (Wall. ex DC.) Seem.',
      family: 'BIGNONIACEAE',
      location: 'แปลง A-06 ลานจอดรถหน้าวิทยาลัย',
      recordedDate: '15 มิ.ย. 2567',
      status: 'verifying',
      statusLabel: 'อยู่ระหว่างตรวจสอบ',
      surveyor: 'ครูพงษ์ศักดิ์ ธรรมรัตน์',
      plantId: 'dolichandrone-serrulata',
    },
    {
      regNumber: 'REG-2567-008',
      plantCode: '7-41000-001-008',
      thaiName: 'ขี้เหล็ก',
      scientificName: 'Senna siamea (Lam.) H.S.Irwin & Barneby',
      family: 'FABACEAE',
      location: 'แปลง C-05 สวนพืชอาหารพื้นถิ่น',
      recordedDate: '22 มิ.ย. 2567',
      status: 'verifying',
      statusLabel: 'อยู่ระหว่างตรวจสอบ',
      surveyor: 'นักศึกษาแผนกการโรงแรม',
      plantId: 'senna-siamea',
    },
    {
      regNumber: 'REG-2567-009',
      plantCode: '7-41000-001-009',
      thaiName: 'มะม่วงหิมพานต์',
      scientificName: 'Anacardium occidentale L.',
      family: 'ANACARDIACEAE',
      location: 'แปลง D-12 แปลงศึกษาพืชเศรษฐกิจ',
      recordedDate: '01 ก.ค. 2567',
      status: 'surveying',
      statusLabel: 'สำรวจขั้นต้น',
      surveyor: 'ทีมสำรวจพฤกษศาสตร์ภาคสนาม',
      plantId: 'anacardium-occidentale',
    },
  ];

  const filteredRecords = registryRecords.filter((rec) => {
    const matchesStatus = statusFilter === 'all' || rec.status === statusFilter;
    const matchesQuery =
      rec.thaiName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.plantCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.regNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.family.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesQuery;
  });

  const totalPages = Math.ceil(filteredRecords.length / itemsPerPage);
  const displayedRecords = filteredRecords.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
        <Breadcrumb
          items={[
            { label: 'ประเภทพรรณไม้' },
            { label: 'ทะเบียนพรรณไม้' },
          ]}
          onNavigate={onNavigate}
        />

        <PageHeader
          title="ทะเบียนพรรณไม้ (Plant Registry Ledger)"
          subtitle="Official Form Kor.7-005 Plant Registry & Digital Archive"
          description="สารบบทะเบียนพรรณไม้ทางการตามแบบ ก.7-005 ของโครงการอนุรักษ์พันธุกรรมพืชฯ (อพ.สธ.) วิทยาลัยอาชีวศึกษาอุดรธานี บันทึกหมายเลขทะเบียน รหัสประจำต้น พิกัดแปลง และสถานะการตรวจสอบพรรณพฤกษชาติ"
          icon="menu_book"
          badge="แบบ ก.7-005"
        >
          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-xl bg-surface-container text-xs font-bold text-primary border border-outline-variant/30">
              รวม {filteredRecords.length} รายการ
            </span>
          </div>
        </PageHeader>

        {/* Filter */}
        <SearchFilter
          searchQuery={searchQuery}
          onSearchChange={(q) => {
            setSearchQuery(q);
            setCurrentPage(1);
          }}
          placeholder="ค้นหาเลขทะเบียน รหัสต้น ชื่อไทย ชื่อวิทย์ หรือวงศ์..."
          categories={statuses}
          selectedCategory={statusFilter}
          onCategoryChange={(s) => {
            setStatusFilter(s);
            setCurrentPage(1);
          }}
        />

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-hidden rounded-2xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 shadow-xs mb-6">
          <table className="w-full text-left text-xs text-on-surface">
            <thead className="bg-surface-container text-primary font-bold border-b border-outline-variant/30">
              <tr>
                <th className="py-3.5 px-4">เลขทะเบียน</th>
                <th className="py-3.5 px-4">รหัสพรรณไม้</th>
                <th className="py-3.5 px-4">ชื่อพื้นเมือง / ชื่อไทย</th>
                <th className="py-3.5 px-4">ชื่อวิทยาศาสตร์ / วงศ์</th>
                <th className="py-3.5 px-4">พิกัด / แปลงศึกษา</th>
                <th className="py-3.5 px-4">สถานะ</th>
                <th className="py-3.5 px-4 text-right">ดำเนินการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/15">
              {displayedRecords.map((rec) => (
                <tr
                  key={rec.regNumber}
                  className="hover:bg-surface-container/50 transition-colors"
                >
                  <td className="py-3.5 px-4 font-mono font-bold text-secondary">
                    {rec.regNumber}
                  </td>
                  <td className="py-3.5 px-4 font-mono text-on-surface-variant font-medium">
                    {rec.plantCode}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-primary">
                    {rec.thaiName}
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-serif italic font-semibold text-primary">
                      {rec.scientificName}
                    </div>
                    <div className="text-[11px] text-on-surface-variant">
                      {rec.family}
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-on-surface-variant">
                    {rec.location}
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                        rec.status === 'completed'
                          ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20'
                          : rec.status === 'verifying'
                          ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/20'
                          : 'bg-sky-500/15 text-sky-700 dark:text-sky-400 border border-sky-500/20'
                      }`}
                    >
                      {rec.statusLabel}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      type="button"
                      onClick={() => {
                        if (onSelectPlant) onSelectPlant(rec.plantId);
                        else if (onNavigate) onNavigate('explorer');
                      }}
                      className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-secondary hover:text-on-secondary text-secondary font-semibold text-xs transition-colors cursor-pointer"
                    >
                      ดูแฟ้ม ก.7-003
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card Layout */}
        <div className="md:hidden space-y-3 mb-6">
          {displayedRecords.map((rec) => (
            <div
              key={rec.regNumber}
              className="p-4 rounded-2xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 space-y-2.5 text-xs"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-secondary">{rec.regNumber}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                    rec.status === 'completed'
                      ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400'
                      : 'bg-amber-500/15 text-amber-700 dark:text-amber-400'
                  }`}
                >
                  {rec.statusLabel}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-base text-primary">{rec.thaiName}</h3>
                <p className="font-serif italic text-secondary">{rec.scientificName}</p>
                <p className="text-[11px] text-on-surface-variant font-mono">รหัส: {rec.plantCode} | วงศ์: {rec.family}</p>
              </div>
              <p className="text-on-surface-variant">พิกัด: {rec.location}</p>
              <div className="pt-2 border-t border-outline-variant/20 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectPlant) onSelectPlant(rec.plantId);
                    else if (onNavigate) onNavigate('explorer');
                  }}
                  className="px-3 py-1.5 rounded-lg bg-secondary text-on-secondary font-semibold text-xs cursor-pointer"
                >
                  เปิดแบบบันทึก ก.7-003
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
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
