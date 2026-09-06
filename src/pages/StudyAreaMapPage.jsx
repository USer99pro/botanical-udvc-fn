import React, { useState } from 'react';
import Breadcrumb from '../components/shared/Breadcrumb';
import PageHeader from '../components/shared/PageHeader';
import SectionHeader from '../components/shared/SectionHeader';
import Footer from '../components/shared/Footer';

export default function StudyAreaMapPage({ onNavigate, onSelectPlant }) {
  const [selectedArea, setSelectedArea] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const areas = [
    {
      id: 'area-a',
      code: 'โซน A',
      title: 'แปลงพรรณไม้หน้าอาคาร 1 (อำนวยการ)',
      subtitle: 'Zone A: Administration & Front Landmark Garden',
      badge: 'ไม้ยืนต้นหลัก & สัญลักษณ์',
      icon: 'park',
      coordinates: { x: '35%', y: '28%' },
      description: 'พื้นที่ภูมิทัศน์หน้าอาคารอำนวยการ ปลูกไม้ยืนต้นสำคัญ เช่น ราชพฤกษ์ พิกุล และไม้ดัดทรงพุ่ม เป็นด่านแรกของการต้อนรับและป้ายชื่อพรรณไม้มาตรฐาน',
      highlights: [
        'ต้นราชพฤกษ์ประจำวิทยาลัย รหัส 7-41000-001-001',
        'ต้นพิกุลดอกหอม รหัส 7-41000-001-003',
        'ลานแสดงป้ายพรรณไม้สมบูรณ์มาตรฐาน อพ.สธ.',
        'ระบบรดน้ำอัตโนมัติพลังงานแสงอาทิตย์',
      ],
      plantCount: 28,
      areaSize: '1,200 ตร.ม.',
    },
    {
      id: 'area-b',
      code: 'โซน B',
      title: 'เรือนเพาะชำและแปลงอนุบาลพรรณไม้',
      subtitle: 'Zone B: Nursery & Living Specimen Greenhouse',
      badge: 'การขยายพันธุ์ (องค์ประกอบที่ 2)',
      icon: 'yard',
      coordinates: { x: '70%', y: '45%' },
      description: 'ศูนย์กลางการเพาะเมล็ด ปักชำ ตอนกิ่ง และอนุบาลต้นกล้าพืชพรรณไม้พื้นเมืองอีสานเพื่อส่งต่อสู่แปลงปลูกและโรงเรียนเครือข่าย',
      highlights: [
        'โต๊ะเพาะชำกล้าไม้พร้อมระบบพ่นหมอกความชื้น',
        'แปลงทดลองขยายพันธุ์พืชหายากและใกล้สูญพันธุ์',
        'โรงเรือนเก็บตัวอย่างพืชอวบน้ำและเฟินประดับ',
        'จุดเก็บข้อมูลการเจริญเติบโตของต้นกล้า',
      ],
      plantCount: 85,
      areaSize: '800 ตร.ม.',
    },
    {
      id: 'area-c',
      code: 'โซน C',
      title: 'สวนสมุนไพรและพืชอาหารพื้นถิ่น',
      subtitle: 'Zone C: Ethnobotanical Herbs & Local Food Crops',
      badge: 'บูรณาการคหกรรม & โภชนาการ',
      icon: 'local_florist',
      coordinates: { x: '45%', y: '75%' },
      description: 'แปลงรวบรวมพืชสมุนไพรไทยและผักพื้นบ้านอีสานกว่า 50 ชนิด สำหรับการเรียนการสอนวิชาอาหารและโภชนาการ การแปรรูป และการสกัดสารธรรมชาติ',
      highlights: [
        'แปลงว่านหางจระเข้และสมุนไพรบำรุงผิว',
        'ซุ้มพืชสมุนไพรเถาเลื้อย (รางจืด, บอระเพ็ด)',
        'แปลงผักพื้นบ้านต้านอนุมูลอิสระ (ขี้เหล็ก, ชะอม, แคนา)',
        'แปลงหม่อนอินทรีย์สำหรับชาและผลิตภัณฑ์',
      ],
      plantCount: 54,
      areaSize: '950 ตร.ม.',
    },
    {
      id: 'area-d',
      code: 'โซน D',
      title: 'ลานธรรมและสวนป่าเฉลิมพระเกียรติ',
      subtitle: 'Zone D: Spiritual Forest & Deep Ecology Area',
      badge: 'ป่าอนุรักษ์ & ไม้มีค่า',
      icon: 'forest',
      coordinates: { x: '20%', y: '60%' },
      description: 'พื้นที่สวนป่าเงียบสงบ ร่มรื่นด้วยไม้ยืนต้นขนาดใหญ่ เช่น ยางนา ตะเคียนทอง ทองกวาว เป็นแหล่งศึกษาระบบนิเวศป่าและพื้นที่พักผ่อนหย่อนใจทางจิตวิญญาณ',
      highlights: [
        'ต้นยางนายักษ์อายุกว่า 40 ปี รหัส 7-41000-001-002',
        'ต้นทองกวาวออกดอกส้มสะพรั่งยามหน้าแล้ง',
        'ศาลาธรรมกลางแมกไม้เพื่อการฝึกสมาธิและสนทนาธรรม',
        'แหล่งอาศัยของนกและแมลงผสมเกสรประจำถิ่น',
      ],
      plantCount: 42,
      areaSize: '2,400 ตร.ม.',
    },
    {
      id: 'area-e',
      code: 'โซน E',
      title: 'ห้องนิทรรศการและพิพิธภัณฑ์พืชพรรณ',
      subtitle: 'Zone E: Botanical Herbarium & Exhibition Center',
      badge: 'คลังตัวอย่างแห้ง-ดอง (ก.7-003)',
      icon: 'domain',
      coordinates: { x: '55%', y: '30%' },
      description: 'ศูนย์รวมแฟ้มเอกสารทะเบียนพรรณไม้ ก.7-003 ตัวอย่างพรรณไม้แห้ง (Herbarium specimens) พรรณไม้ดอง และหอศิลป์ภาพวาดพฤกษศาสตร์นักศึกษา',
      highlights: [
        'ตู้เก็บตัวอย่างพรรณไม้แห้งมาตรฐานสากล',
        'ตู้จัดแสดงโหลพรรณไม้ดองวิทยาศาสตร์',
        'จุดบริการค้นหาฐานข้อมูลพฤกษศาสตร์คอมพิวเตอร์',
        'พื้นที่จัดแสดงผลงานสิ่งประดิษฐ์และผลิตภัณฑ์ชีวภาพ',
      ],
      plantCount: 120,
      areaSize: '400 ตร.ม.',
    },
  ];

  const currentArea = areas[selectedArea];

  const handleZoomIn = () => setZoomLevel((z) => Math.min(z + 0.25, 2));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(z - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
        <Breadcrumb
          items={[{ label: 'แผนผังพื้นที่ศึกษา' }]}
          onNavigate={onNavigate}
        />

        <PageHeader
          title="แผนผังพื้นที่ศึกษา (Study Area & Botanical Map)"
          subtitle="Spatial Zoning, Physical Layout & Survey Coordinates"
          description="แผนที่ผังพื้นที่ศึกษาและโซนนิ่งสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี แสดงตำแหน่งแปลงปลูก แปลงสำรวจ เรือนเพาะชำ สวนสมุนไพร และพิพิธภัณฑ์พืชพรรณ เพื่อการนำทางและศึกษาภาคสนามอย่างเป็นระบบ"
          icon="map"
          badge="ผังแม่บทพฤกษศาสตร์"
        />

        {/* Interactive Map Canvas Container */}
        <div className={`relative rounded-3xl overflow-hidden border border-outline-variant/30 bg-surface-container-lowest dark:bg-surface-dim shadow-lg mb-8 ${
          isFullscreen ? 'fixed inset-4 z-50 max-w-none' : ''
        }`}>
          {/* Map Toolbar */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-surface/90 dark:bg-surface-dim/90 backdrop-blur-md p-1.5 rounded-2xl border border-outline-variant/30 shadow-md">
            <button
              type="button"
              onClick={handleZoomIn}
              title="ขยายแผนที่"
              className="p-2 rounded-xl text-primary hover:bg-surface-container transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">zoom_in</span>
            </button>
            <button
              type="button"
              onClick={handleZoomOut}
              title="ย่อแผนที่"
              className="p-2 rounded-xl text-primary hover:bg-surface-container transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">zoom_out</span>
            </button>
            <button
              type="button"
              onClick={handleResetZoom}
              title="รีเซ็ตขนาด"
              className="px-2.5 py-1 text-xs font-mono font-bold text-secondary hover:bg-surface-container rounded-lg"
            >
              {Math.round(zoomLevel * 100)}%
            </button>
            <div className="w-px h-5 bg-outline-variant/30 mx-1" />
            <button
              type="button"
              onClick={() => setIsFullscreen(!isFullscreen)}
              title={isFullscreen ? 'ออกจากโหมดเต็มจอ' : 'แสดงเต็มจอ'}
              className="p-2 rounded-xl text-primary hover:bg-surface-container transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">
                {isFullscreen ? 'fullscreen_exit' : 'fullscreen'}
              </span>
            </button>
          </div>

          {/* Map Graphic Area */}
          <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden bg-radial from-emerald-950/20 via-surface-container-high/40 to-surface-container-lowest flex items-center justify-center p-8">
            <div
              className="relative w-full max-w-3xl h-full border-2 border-dashed border-secondary/30 rounded-3xl p-6 transition-transform duration-300 flex items-center justify-center bg-surface/40 backdrop-blur-2xs"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              {/* College Campus stylized footprint & roads */}
              <div className="absolute inset-4 rounded-2xl border border-outline-variant/40 pointer-events-none bg-linear-to-br from-emerald-500/5 via-teal-500/5 to-primary/5">
                <div className="absolute top-4 left-4 text-[10px] font-mono font-bold text-secondary tracking-widest uppercase">
                  วิทยาลัยอาชีวศึกษาอุดรธานี • พื้นที่รวม 24 ไร่
                </div>
                {/* Compass Rose */}
                <div className="absolute top-4 right-4 flex flex-col items-center text-[10px] font-bold text-primary">
                  <span className="material-symbols-outlined text-xl text-secondary">navigation</span>
                  <span>ทิศเหนือ (N)</span>
                </div>
              </div>

              {/* Area Markers */}
              {areas.map((area, idx) => {
                const isSelected = selectedArea === idx;
                return (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => setSelectedArea(idx)}
                    style={{ left: area.coordinates.x, top: area.coordinates.y }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-all duration-300 z-10 ${
                      isSelected ? 'scale-125 z-20' : 'hover:scale-110'
                    }`}
                  >
                    <div
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold shadow-md transition-all border ${
                        isSelected
                          ? 'bg-secondary text-on-secondary border-secondary ring-4 ring-secondary/30 scale-105'
                          : 'bg-surface/95 text-primary border-outline-variant/50 hover:bg-secondary-container'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">{area.icon}</span>
                      <span className="whitespace-nowrap">{area.code}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Legend & Selected Area Detailed Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Area Selector / Legend */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-base">format_list_bulleted</span>
              <span>เลือกโซนศึกษา (Interactive Legend)</span>
            </h3>
            {areas.map((area, index) => {
              const isSelected = selectedArea === index;
              return (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => setSelectedArea(index)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-secondary text-on-secondary border-secondary shadow-md'
                      : 'bg-surface-container-lowest dark:bg-surface-dim border-outline-variant/30 hover:bg-surface-container hover:border-secondary/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-secondary/15 text-secondary'
                      }`}
                    >
                      <span className="material-symbols-outlined text-xl">{area.icon}</span>
                    </div>
                    <div>
                      <span className={`text-xs font-bold block ${isSelected ? 'text-white/80' : 'text-secondary'}`}>
                        {area.code}
                      </span>
                      <h4 className={`text-sm font-bold truncate max-w-[180px] sm:max-w-xs ${isSelected ? 'text-white' : 'text-primary'}`}>
                        {area.title}
                      </h4>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-sm">
                    {isSelected ? 'check_circle' : 'chevron_right'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Area Deep Dive Info */}
          <div className="lg:col-span-2 rounded-3xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-outline-variant/20">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-secondary/15 text-secondary">
                  {currentArea.code} • {currentArea.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-primary mt-2">
                  {currentArea.title}
                </h3>
                <p className="text-xs sm:text-sm text-secondary font-medium">
                  {currentArea.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-on-surface-variant bg-surface-container px-3 py-2 rounded-xl self-start sm:self-auto">
                <div>
                  <span className="text-secondary font-bold block">พรรณไม้</span>
                  <span>{currentArea.plantCount} ต้น</span>
                </div>
                <div className="w-px h-6 bg-outline-variant/30" />
                <div>
                  <span className="text-secondary font-bold block">ขนาดพื้นที่</span>
                  <span>{currentArea.areaSize}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                คำอธิบายและวัตถุประสงค์การใช้พื้นที่
              </h4>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {currentArea.description}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-3">
                จุดศึกษาและพืชพรรณสำคัญในโซนนี้
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentArea.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-surface-container flex items-start gap-2.5 text-xs text-on-surface"
                  >
                    <span className="material-symbols-outlined text-secondary text-base mt-0.5 shrink-0">place</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-on-surface-variant">
                ต้องการดูรายการพรรณไม้ทั้งหมดในโซนนี้?
              </span>
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('plantSignboard')}
                className="px-4 py-2 rounded-xl bg-secondary text-on-secondary text-xs font-semibold hover:bg-primary transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>ดูป้ายพรรณไม้ในโซน</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
