import React, { useState } from 'react';
import Breadcrumb from '../components/shared/Breadcrumb';
import PageHeader from '../components/shared/PageHeader';
import SectionHeader from '../components/shared/SectionHeader';
import Footer from '../components/shared/Footer';

export default function CollegeMapPage({ onNavigate }) {
  const [selectedBuilding, setSelectedBuilding] = useState(0);

  const buildings = [
    {
      id: 'bldg-01',
      code: 'อาคาร 1',
      name: 'อาคารอำนวยการและบริหารส่วนกลาง',
      type: 'administration',
      typeLabel: 'อาคารบริหาร',
      icon: 'corporate_fare',
      location: 'บริเวณด้านหน้า ติดถนนโพศรี',
      floors: '4 ชั้น',
      botanicalFeatures: 'แปลงพรรณไม้โซน A, ป้ายพรรณไม้ราชพฤกษ์ประจำวิทยาลัย, ซุ้มกล้วยไม้ประดับ',
      description: 'ศูนย์กลางการบริหารงานวิทยาลัย ห้องผู้อำนวยการ ฝ่ายวิชาการ ฝ่ายแผนงานและความร่วมมือ และจุดประชาสัมพันธ์ข้อมูลสวนพฤกษศาสตร์สำหรับผู้มาติดต่อ',
    },
    {
      id: 'bldg-02',
      code: 'อาคาร 2',
      name: 'อาคารคหกรรมศาสตร์และปฏิบัติการอาหาร',
      type: 'academic',
      typeLabel: 'อาคารเรียนปฏิบัติการ',
      icon: 'restaurant',
      location: 'ปีกทิศตะวันตก ติดสวนสมุนไพรโซน C',
      floors: '4 ชั้น',
      botanicalFeatures: 'แปลงสมุนไพรไทยโซน C, ซุ้มไม้เลื้อยรางจืด, สวนครัวพืชผักอินทรีย์',
      description: 'ห้องปฏิบัติการอาหาร ขนมอบ แฟชั่นดีไซน์ และการแปรรูปสมุนไพร แหล่งทดลองพัฒนาผลิตภัณฑ์อาหารและเครื่องดื่มจากพรรณไม้สวนพฤกษศาสตร์',
    },
    {
      id: 'bldg-03',
      code: 'อาคาร 3',
      name: 'อาคารวิจิตรศิลป์และการออกแบบ',
      type: 'arts',
      typeLabel: 'อาคารศิลปกรรม',
      icon: 'palette',
      location: 'ปีกทิศใต้ ติดลานธรรม',
      floors: '3 ชั้น',
      botanicalFeatures: 'หอศิลป์ภาพวาดพฤกษศาสตร์, สตูดิโอวาดภาพสีน้ำ, สวนหย่อมไม้ใบประดับ',
      description: 'ห้องปฏิบัติการวาดเขียน ภาพพิมพ์ เซรามิก และการออกแบบหัตถกรรม ศูนย์กลางการสร้างสรรค์ภาพวาดทางพฤกษศาสตร์ของนักศึกษาตามแบบ ก.7-003',
    },
    {
      id: 'bldg-04',
      code: 'อาคาร 4',
      name: 'อาคารเทคโนโลยีสารสนเทศและบริหารธุรกิจ',
      type: 'technology',
      typeLabel: 'อาคารเทคโนโลยี',
      icon: 'computer',
      location: 'ทิศตะวันออก ติดสนามฟุตบอล',
      floors: '5 ชั้น',
      botanicalFeatures: 'ศูนย์ข้อมูลเซิร์ฟเวอร์ระบบฐานข้อมูลพฤกษศาสตร์ดิจิทัล, ห้องปฏิบัติการมัลติมีเดีย',
      description: 'ห้องปฏิบัติการคอมพิวเตอร์ เครือข่าย และสตูดิโอดิจิทัล ผู้ดูแลระบบเว็บไซต์ QR Code และคลังข้อมูลออนไลน์สวนพฤกษศาสตร์โรงเรียน',
    },
    {
      id: 'bldg-05',
      code: 'อาคาร 5',
      name: 'เรือนเพาะชำและพิพิธภัณฑ์พืชพรรณ อพ.สธ.',
      type: 'botanical',
      typeLabel: 'ศูนย์พฤกษศาสตร์',
      icon: 'yard',
      location: 'พื้นที่โซน B ทิศตะวันออกเฉียงเหนือ',
      floors: '1 ชั้น (เรือนกระจกและอาคารนิทรรศการ)',
      botanicalFeatures: 'เรือนเพาะชำกล้าไม้, ตู้เก็บตัวอย่างพรรณไม้แห้ง Herbarium, โหลพรรณไม้ดอง',
      description: 'หัวใจสำคัญของการอนุรักษ์พันธุกรรมพืช แหล่งเรียนรู้ 5 องค์ประกอบ ห้องปฏิบัติการขยายพันธุ์พืช และนิทรรศการมีชีวิตเพื่อการศึกษาดูงาน',
    },
    {
      id: 'bldg-06',
      code: 'ลานธรรม',
      name: 'ลานธรรมและสวนป่าเฉลิมพระเกียรติ',
      type: 'park',
      typeLabel: 'พื้นที่สีเขียว/อนุรักษ์',
      icon: 'forest',
      location: 'พื้นที่โซน D ทิศตะวันตกเฉียงใต้',
      floors: 'ลานกลางแจ้งและศาลาปฏิบัติธรรม',
      botanicalFeatures: 'ต้นยางนาโบราณ 40 ปี, ดงต้นทองกวาว, ระบบนิเวศป่าจำลอง',
      description: 'พื้นที่สีเขียวขนาดใหญ่ใจกลางวิทยาลัย ร่มรื่นด้วยไม้ยืนต้นมีค่า แหล่งพักผ่อนหย่อนใจและจัดกิจกรรมทางศาสนาและคุณธรรม',
    },
  ];

  const currentBuilding = buildings[selectedBuilding];

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
        <Breadcrumb
          items={[{ label: 'แผนผังวิทยาลัย' }]}
          onNavigate={onNavigate}
        />

        <PageHeader
          title="แผนผังวิทยาลัยอาชีวศึกษาอุดรธานี (College Campus Map)"
          subtitle="Campus Map, Academic Facilities & Botanical Integration Zones"
          description="แผนผังอาคาร สถานที่สำคัญ แหล่งเรียนรู้วิชาชีพ และจุดเชื่อมโยงงานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี พื้นที่การเรียนรู้ 24 ไร่ ใจกลางเมืองอุดรธานี"
          icon="domain"
          badge="แผนผังวิทยาลัย"
        />

        {/* Campus Map Layout Visualization */}
        <div className="rounded-3xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 p-6 sm:p-8 mb-8">
          <SectionHeader
            title="ผังอาคารและจุดบริการสำคัญ"
            subtitle="Campus Master Plan & Facilities"
            icon="map"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {buildings.map((bldg, idx) => {
              const isSelected = selectedBuilding === idx;
              return (
                <button
                  key={bldg.id}
                  type="button"
                  onClick={() => setSelectedBuilding(idx)}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-secondary text-on-secondary border-secondary shadow-md scale-[1.02]'
                      : 'bg-surface-container hover:bg-surface-container-high border-outline-variant/30 text-on-surface'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-secondary/15 text-secondary'
                    }`}
                  >
                    <span className="material-symbols-outlined text-xl">{bldg.icon}</span>
                  </div>
                  <div className="min-w-0">
                    <span className={`text-[11px] font-bold block ${isSelected ? 'text-white/80' : 'text-secondary'}`}>
                      {bldg.code} • {bldg.typeLabel}
                    </span>
                    <h4 className={`text-sm font-bold truncate ${isSelected ? 'text-white' : 'text-primary'}`}>
                      {bldg.name}
                    </h4>
                    <p className={`text-[11px] truncate mt-0.5 ${isSelected ? 'text-white/90' : 'text-on-surface-variant'}`}>
                      {bldg.location}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Building Card */}
          <div className="p-6 rounded-2xl bg-surface-container border border-outline-variant/30 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-outline-variant/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">{currentBuilding.icon}</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-secondary uppercase">
                    {currentBuilding.code} ({currentBuilding.typeLabel})
                  </span>
                  <h3 className="text-lg font-bold text-primary">
                    {currentBuilding.name}
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono text-on-surface-variant bg-surface-container-lowest dark:bg-surface-dim px-3 py-1 rounded-lg self-start sm:self-auto">
                ความสูง: {currentBuilding.floors}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-on-surface leading-relaxed">
              <div className="space-y-1.5">
                <h5 className="font-bold text-primary">หน้าที่และหน่วยงานในอาคาร:</h5>
                <p className="text-on-surface-variant">{currentBuilding.description}</p>
                <p className="text-on-surface-variant font-medium pt-1">
                  <strong>ตำแหน่งที่ตั้ง:</strong> {currentBuilding.location}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/20 space-y-1.5">
                <h5 className="font-bold text-secondary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">eco</span>
                  <span>ความเชื่อมโยงกับงานสวนพฤกษศาสตร์:</span>
                </h5>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {currentBuilding.botanicalFeatures}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information & Directions Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 mb-8">
          <SectionHeader
            title="ข้อมูลการติดต่อและการเดินทาง"
            subtitle="Campus Location & Contact Directory"
            icon="place"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-on-surface-variant">
            <div className="space-y-2">
              <h4 className="font-bold text-primary text-sm flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-base">domain</span>
                <span>ที่อยู่สถานศึกษา</span>
              </h4>
              <p className="leading-relaxed">
                วิทยาลัยอาชีวศึกษาอุดรธานี
                <br />117 ถนนโพศรี ตำบลหมากแข้ง อำเภอเมือง จังหวัดอุดรธานี 41000
              </p>
              <p className="text-[11px] text-secondary font-medium">
                (ตรงข้ามสวนสาธารณะหนองประจักษ์ศิลปาคม)
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-primary text-sm flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-base">call</span>
                <span>ช่องทางติดต่อราชการ</span>
              </h4>
              <p>โทรศัพท์กลาง: 042-221-538, 042-246-690</p>
              <p>โทรสาร: 042-246-691</p>
              <p>อีเมลงานสวนพฤกษศาสตร์: udvc.botanical@udvc.ac.th</p>
              <p>เว็บไซต์หลัก: www.udvc.ac.th</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-primary text-sm flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-base">schedule</span>
                <span>เวลาเปิดทำการและการเข้าชม</span>
              </h4>
              <p>วันจันทร์ - วันศุกร์: 08.00 - 16.30 น.</p>
              <p>วันเสาร์ - วันอาทิตย์: ปิดทำการ (ยกเว้นกรณีประสานศึกษาดูงานล่วงหน้า)</p>
              <p className="text-[11px] text-secondary font-medium pt-1">
                *สถาบันการศึกษาที่ประสงค์นำนักเรียนเข้าศึกษาดูงาน กรุณาทำหนังสือราชการล่วงหน้า 7 วันทำการ
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
