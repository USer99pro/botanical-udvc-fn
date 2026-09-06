import React, { useState } from 'react';
import Breadcrumb from '../components/shared/Breadcrumb';
import PageHeader from '../components/shared/PageHeader';
import SectionHeader from '../components/shared/SectionHeader';
import SearchFilter from '../components/shared/SearchFilter';
import Footer from '../components/shared/Footer';

export default function PlantSignboardPage({ onNavigate, onSelectPlant }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState('all');

  const zones = [
    { id: 'all', label: 'ทุกโซนพื้นที่' },
    { id: 'zone-a', label: 'โซน A: หน้าอาคารอำนวยการ' },
    { id: 'zone-b', label: 'โซน B: สวนหย่อมเรือนเพาะชำ' },
    { id: 'zone-c', label: 'โซน C: สวนสมุนไพรแผนกคหกรรม' },
    { id: 'zone-d', label: 'โซน D: ลานธรรมเฉลิมพระเกียรติ' },
  ];

  const signboards = [
    {
      id: 'sb-001',
      code: '7-41000-001-001',
      number: 'ป้ายที่ 001/2567',
      thaiName: 'ราชพฤกษ์',
      commonName: 'Golden Shower',
      scientificName: 'Cassia fistula L.',
      family: 'FABACEAE',
      zone: 'zone-a',
      zoneLabel: 'โซน A: หน้าอาคารอำนวยการ',
      benefits: 'เนื้อไม้แข็งแรง ดอกสวยงาม เปลือกและฝักมีฤทธิ์เป็นยาระบาย',
      material: 'แผ่นอะคริลิกเลเซอร์สลัก ลายเคลือบ UV กันแดด ทนน้ำ',
      dimensions: '20 x 30 ซม.',
      qrCodeUrl: '#',
      qrText: 'สแกนดูข้อมูล ก.7-003',
      plantId: 'cassia-fistula',
    },
    {
      id: 'sb-002',
      code: '7-41000-001-002',
      number: 'ป้ายที่ 002/2567',
      thaiName: 'ยางนา',
      commonName: 'Yang',
      scientificName: 'Dipterocarpus alatus Roxb. ex G.Don',
      family: 'DIPTEROCARPACEAE',
      zone: 'zone-d',
      zoneLabel: 'โซน D: ลานธรรมเฉลิมพระเกียรติ',
      benefits: 'น้ำมันยางใช้ยาแนวเรือและคบเพลิง เปลือกต้มรักษาแผล',
      material: 'แผ่นสแตนเลสกัดกรดเคลือบเงา แข็งแรงทนทานสูง',
      dimensions: '20 x 30 ซม.',
      qrCodeUrl: '#',
      qrText: 'สแกนดูข้อมูล ก.7-003',
      plantId: 'dipterocarpus-alatus',
    },
    {
      id: 'sb-003',
      code: '7-41000-001-003',
      number: 'ป้ายที่ 003/2567',
      thaiName: 'พิกุล',
      commonName: 'Asian Bulletwood',
      scientificName: 'Mimusops elengi L.',
      family: 'SAPOTACEAE',
      zone: 'zone-a',
      zoneLabel: 'โซน A: หน้าอาคารอำนวยการ',
      benefits: 'ดอกแห้งเข้ายาหอมบำรุงหัวใจ เนื้อไม้ใช้ทำด้ามเครื่องมือ',
      material: 'แผ่นอะคริลิกเลเซอร์สลัก ลายเคลือบ UV',
      dimensions: '15 x 20 ซม.',
      qrCodeUrl: '#',
      qrText: 'สแกนดูข้อมูล ก.7-003',
      plantId: 'mimusops-elengi',
    },
    {
      id: 'sb-004',
      code: '7-41000-001-004',
      number: 'ป้ายที่ 004/2567',
      thaiName: 'โมกบ้าน',
      commonName: 'Water Jasmine',
      scientificName: 'Wrightia religiosa (Teijsm. & Binn.) Benth. ex Kurz',
      family: 'APOCYNACEAE',
      zone: 'zone-b',
      zoneLabel: 'โซน B: สวนหย่อมเรือนเพาะชำ',
      benefits: 'ไม้ประดับดอกหอม ใบรักษาโรคผิวหนัง รากแก้พิษสัตว์กัดต่อย',
      material: 'แผ่นอะคริลิกเลเซอร์สลัก ลายเคลือบ UV',
      dimensions: '15 x 20 ซม.',
      qrCodeUrl: '#',
      qrText: 'สแกนดูข้อมูล ก.7-003',
      plantId: 'wrightia-religiosa',
    },
    {
      id: 'sb-005',
      code: '7-41000-001-005',
      number: 'ป้ายที่ 005/2567',
      thaiName: 'ทองกวาว (กวาว)',
      commonName: 'Flame of the Forest',
      scientificName: 'Butea monosperma (Lam.) Taub.',
      family: 'FABACEAE',
      zone: 'zone-d',
      zoneLabel: 'โซน D: ลานธรรมเฉลิมพระเกียรติ',
      benefits: 'ดอกให้สีย้อมผ้าสีส้มทอง เส้นใยเปลือกทำเชือก ใบใช้ห่อของ',
      material: 'แผ่นสแตนเลสกัดกรดเคลือบเงา',
      dimensions: '20 x 30 ซม.',
      qrCodeUrl: '#',
      qrText: 'สแกนดูข้อมูล ก.7-003',
      plantId: 'butea-monosperma',
    },
    {
      id: 'sb-006',
      code: '7-41000-001-006',
      number: 'ป้ายที่ 006/2567',
      thaiName: 'ว่านหางจระเข้',
      commonName: 'Aloe Vera',
      scientificName: 'Aloe vera (L.) Burm.f.',
      family: 'ASPHODELACEAE',
      zone: 'zone-c',
      zoneLabel: 'โซน C: สวนสมุนไพรแผนกคหกรรม',
      benefits: 'วุ้นใสรักษาแผลไฟไหม้ น้ำร้อนลวก บำรุงผิวพรรณ',
      material: 'แผ่นอะคริลิกขนาดเล็กประจำกระถาง/แปลง',
      dimensions: '10 x 15 ซม.',
      qrCodeUrl: '#',
      qrText: 'สแกนดูข้อมูล ก.7-003',
      plantId: 'aloe-vera',
    },
  ];

  const filteredSignboards = signboards.filter((sb) => {
    const matchesZone = selectedZone === 'all' || sb.zone === selectedZone;
    const matchesQuery =
      sb.thaiName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sb.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sb.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sb.family.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesZone && matchesQuery;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
        <Breadcrumb
          items={[
            { label: 'ประเภทพรรณไม้' },
            { label: 'ป้ายพรรณไม้สมบูรณ์' },
          ]}
          onNavigate={onNavigate}
        />

        <PageHeader
          title="ป้ายพรรณไม้สมบูรณ์ (Complete Botanical Signboard)"
          subtitle="RSPG Standard Plant Labeling & Digital QR Code System"
          description="ระบบป้ายพรรณไม้สมบูรณ์ตามมาตรฐานโครงการอนุรักษ์พันธุกรรมพืชฯ (อพ.สธ.) วิทยาลัยอาชีวศึกษาอุดรธานี แสดงรหัสพรรณไม้ ชื่อวิทยาศาสตร์ ชื่อวงศ์ ประโยชน์ พร้อมคิวอาร์โค้ดเชื่อมต่อระบบแบบบันทึก ก.7-003 ดิจิทัล"
          icon="badge"
          badge="มาตรฐาน อพ.สธ."
        />

        {/* Filter */}
        <SearchFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          placeholder="ค้นหาตามชื่อไทย ชื่อวิทยาศาสตร์ รหัสต้น หรือวงศ์..."
          categories={zones}
          selectedCategory={selectedZone}
          onCategoryChange={setSelectedZone}
        />

        {/* Signboard Display Grid (Styled as authentic RSPG botanical signboards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredSignboards.map((sb) => (
            <div
              key={sb.id}
              className="rounded-2xl bg-linear-to-b from-surface-container-lowest to-surface-container dark:from-surface-dim dark:to-surface-container-high border-2 border-primary/20 hover:border-secondary shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group"
            >
              {/* Signboard Header with emblem/badge */}
              <div>
                <div className="flex items-center justify-between pb-3 border-b-2 border-primary/15 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-secondary/15 flex items-center justify-center text-secondary text-xs font-black">
                      ก
                    </span>
                    <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">
                      งานสวนพฤกษศาสตร์โรงเรียน UDVC
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-primary/10 text-primary">
                    {sb.number}
                  </span>
                </div>

                {/* Main Plant Identity */}
                <div className="text-center py-2 space-y-1">
                  <h3 className="text-xl sm:text-2xl font-black text-primary tracking-tight group-hover:text-secondary transition-colors">
                    {sb.thaiName}
                  </h3>
                  <p className="text-xs font-semibold text-on-surface-variant">
                    {sb.commonName}
                  </p>
                  <p className="text-xs sm:text-sm font-serif italic font-bold text-secondary">
                    {sb.scientificName}
                  </p>
                  <p className="text-[11px] font-mono text-on-surface-variant/90">
                    วงศ์ : <span className="font-bold text-primary">{sb.family}</span>
                  </p>
                </div>

                {/* Botanical Code Bar */}
                <div className="my-3 py-1.5 px-3 rounded-lg bg-surface-container-high/60 border border-outline-variant/30 text-center font-mono text-xs font-bold text-secondary">
                  รหัสพรรณไม้ : {sb.code}
                </div>

                {/* Benefits / Uses */}
                <div className="text-xs text-on-surface-variant bg-surface-container-lowest/80 dark:bg-surface-dim/80 p-3 rounded-xl border border-outline-variant/20 mb-4">
                  <span className="font-bold text-primary">ประโยชน์: </span>
                  <span>{sb.benefits}</span>
                </div>
              </div>

              {/* Signboard Footer with QR Code & Navigation */}
              <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {/* Simulated QR Code box */}
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary shrink-0 shadow-2xs">
                    <span className="material-symbols-outlined text-2xl">qr_code_2</span>
                  </div>
                  <div className="text-[10px] text-on-surface-variant leading-tight">
                    <p className="font-bold text-secondary">QR Code ก.7-003</p>
                    <p className="truncate max-w-[120px]">{sb.zoneLabel}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (onSelectPlant) onSelectPlant(sb.plantId);
                    else if (onNavigate) onNavigate('explorer');
                  }}
                  className="px-3 py-1.5 rounded-lg bg-secondary text-on-secondary font-semibold text-xs hover:bg-primary transition-colors cursor-pointer shrink-0 shadow-2xs flex items-center gap-1"
                >
                  <span>ข้อมูลต้นไม้</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Standard Info Box */}
        <div className="p-6 rounded-2xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 mb-8">
          <SectionHeader
            title="มาตรฐานป้ายพรรณไม้สมบูรณ์ตามเกณฑ์ อพ.สธ."
            subtitle="Signboard Specifications & Installation Standards"
            icon="verified"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-on-surface-variant">
            <div className="p-4 rounded-xl bg-surface-container space-y-1.5">
              <h4 className="font-bold text-primary">1. ข้อความในป้าย</h4>
              <p>ต้องมีชื่อพื้นเมือง, ชื่อวิทยาศาสตร์ถูกต้องตามหลักพฤกษศาสตร์, ชื่อวงศ์, รหัสพรรณไม้มาตรฐาน และประโยชน์หลัก</p>
            </div>
            <div className="p-4 rounded-xl bg-surface-container space-y-1.5">
              <h4 className="font-bold text-primary">2. วัสดุและความคงทน</h4>
              <p>ใช้วัสดุทนแดดฝน เช่น แผ่นอะคริลิกเลเซอร์ แผ่นสแตนเลส หรือคอมโพสิต ไม่ผุกร่อนง่ายและปลอดภัยต่อต้นไม้</p>
            </div>
            <div className="p-4 rounded-xl bg-surface-container space-y-1.5">
              <h4 className="font-bold text-primary">3. การติดตั้งและ QR Code</h4>
              <p>ยึดติดในระดับสายตา (1.20 - 1.50 ม.) ด้วยสปริงยืดหยุ่นไม่รัดต้นไม้ พร้อมคิวอาร์โค้ดที่สแกนเข้าถึงแบบ ก.7-003 ได้ทันที</p>
            </div>
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
