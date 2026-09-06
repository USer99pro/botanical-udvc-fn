import React, { useState } from 'react';
import { usePlant, usePlants } from '../services/hooks';

export default function PlantDetailPage({ plantId, onSelectPlant, onNavigate, onOpenSearch }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSaved, setIsSaved] = useState(false);

  const { data: plant, loading } = usePlant(plantId || 'monstera-deliciosa');
  const { data: allPlantsData } = usePlants({ limit: 6 });

  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
  };

  const handleRelatedClick = (targetId) => {
    if (onSelectPlant) onSelectPlant(targetId);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-on-background flex items-center justify-center p-8">
        <div className="flex flex-col items-center gap-4">
          <span className="material-symbols-outlined text-4xl text-secondary animate-spin">local_florist</span>
          <p className="text-on-surface-variant font-body-md">กำลังโหลดข้อมูลพฤกษศาสตร์และทะเบียนพืชศึกษา...</p>
        </div>
      </div>
    );
  }

  if (!plant) {
    return (
      <div className="min-h-screen bg-background text-on-background flex items-center justify-center p-8">
        <div className="text-center space-y-4 max-w-md">
          <span className="material-symbols-outlined text-5xl text-on-surface-variant">spa</span>
          <h2 className="font-headline-md text-2xl text-primary font-bold">ไม่พบข้อมูลพรรณไม้</h2>
          <p className="text-sm text-on-surface-variant">รหัสพรรณไม้ที่ท่านระบุไม่มีในระบบหรือถูกย้ายแล้ว</p>
          <button
            type="button"
            onClick={() => handleNav('explorer')}
            className="px-6 py-2.5 bg-primary text-on-primary rounded-full hover:bg-secondary transition-colors text-sm"
          >
            กลับสู่ทะเบียนพืชศึกษา
          </button>
        </div>
      </div>
    );
  }

  const relatedPlants = (allPlantsData?.plants || []).filter((p) => p.id !== plant.id);

  return (
    <div className="min-h-screen bg-background text-on-background">
      <main className="pt-8 pb-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Back Link & Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-on-surface-variant">
          <button
            type="button"
            onClick={() => handleNav('explorer')}
            className="inline-flex items-center gap-1 text-secondary font-label-md hover:underline cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            <span>กลับสู่ทะเบียนพืชศึกษา</span>
          </button>
          <span>/</span>
          <span>{plant.categoryLabel || plant.category}</span>
          <span>/</span>
          <span className="text-primary font-semibold truncate">{plant.nameTh}</span>
        </div>

        {/* Hero Header Section */}
        <header className="mb-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-on-secondary rounded-full font-label-sm text-xs mb-3 shadow-sm">
              <span className="material-symbols-outlined text-[16px]">eco</span>
              <span>{plant.family} • รหัสพรรณไม้ {plant.plantCode}</span>
            </div>
            <h1 className="font-display-lg text-4xl md:text-5xl text-primary mb-2 leading-tight">
              {plant.nameTh}
            </h1>
            <p className="font-headline-sm text-lg md:text-xl text-tertiary italic">
              {plant.scientificName} {plant.commonName ? `(${plant.commonName})` : ''}
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end gap-3 mt-4 lg:mt-0">
            <button 
              type="button"
              onClick={() => setIsSaved(!isSaved)}
              className={`flex items-center gap-2 px-5 py-2.5 border-2 rounded-full transition-all font-label-md text-sm cursor-pointer ${
                isSaved
                  ? 'border-secondary bg-secondary-container text-on-secondary-container font-semibold'
                  : 'border-outline-variant text-primary hover:border-primary'
              }`}
            >
              <span className="material-symbols-outlined text-lg">{isSaved ? 'bookmark_added' : 'bookmark_add'}</span>
              <span>{isSaved ? 'บันทึกแล้ว' : 'บันทึกพรรณไม้'}</span>
            </button>
            <button 
              type="button"
              onClick={() => handleNav('explorer')}
              className="flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-full hover:bg-secondary transition-colors font-label-md text-sm cursor-pointer shadow-sm"
            >
              <span className="material-symbols-outlined text-lg">search_insights</span>
              <span>ทะเบียนพืชศึกษา</span>
            </button>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left Column: Gallery & Botanical Details */}
          <div className="lg:col-span-8 space-y-8">
            {/* Bento Gallery */}
            <section className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[380px] md:h-[480px]">
              <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-sm border border-outline-variant/20 relative group">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt={plant.nameTh} 
                  src={plant.gallery?.[0] || plant.imageUrl}
                />
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs">
                  ภาพพรรณไม้สมบูรณ์
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm border border-outline-variant/20 relative group">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt="Stem / Morphology" 
                  src={plant.gallery?.[1] || plant.imageUrl}
                />
                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-white text-[10px]">
                  ลักษณะลำต้น/ใบ
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm border border-outline-variant/20 relative group">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt="Habitat" 
                  src={plant.gallery?.[2] || plant.imageUrl}
                />
                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-white text-[10px]">
                  นิเวศวิทยา
                </div>
              </div>
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-sm border border-outline-variant/20 relative group">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt="Greenhouse Garden" 
                  src={plant.gallery?.[3] || plant.imageUrl}
                />
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs">
                  {plant.zone}
                </div>
              </div>
            </section>

            {/* Tab Navigation */}
            <div className="flex border-b border-outline-variant/30 gap-4 overflow-x-auto pb-1">
              {[
                { id: 'overview', label: 'ข้อมูลทั่วไป & ก.7-003', icon: 'badge' },
                { id: 'morphology', label: 'สัณฐานวิทยา (พฤกษศาสตร์)', icon: 'nature' },
                { id: 'facts', label: 'เกร็ดความรู้ (Botanical Facts)', icon: 'lightbulb' },
                { id: 'ecology', label: 'นิเวศวิทยา & การดูแล', icon: 'rainy' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 pb-3 font-label-md text-sm border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-secondary text-primary font-bold'
                      : 'border-transparent text-on-surface-variant hover:text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined text-base">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content 1: Overview */}
            {activeTab === 'overview' && (
              <section className="bg-surface-container-low p-8 rounded-2xl space-y-6 border border-outline-variant/20 shadow-sm animate-fade-in">
                <div>
                  <h3 className="font-headline-sm text-xl text-primary font-bold mb-2">คำอธิบายและประวัติพรรณไม้</h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    {plant.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-outline-variant/20">
                  <div className="p-4 rounded-xl bg-surface border border-outline-variant/20">
                    <span className="font-label-sm text-secondary text-xs block mb-1">รหัสพรรณไม้ อพ.สธ.</span>
                    <p className="text-on-surface font-semibold">{plant.plantCode}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface border border-outline-variant/20">
                    <span className="font-label-sm text-secondary text-xs block mb-1">ชื่อพื้นเมือง / ท้องถิ่น</span>
                    <p className="text-on-surface font-semibold">{plant.nameLocal || plant.nameTh}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface border border-outline-variant/20">
                    <span className="font-label-sm text-secondary text-xs block mb-1">วงศ์ (Family)</span>
                    <p className="text-on-surface font-semibold">{plant.family}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface border border-outline-variant/20">
                    <span className="font-label-sm text-secondary text-xs block mb-1">พิกัดในสวนพฤกษศาสตร์ UDVC</span>
                    <p className="text-on-surface font-semibold">{plant.zone}</p>
                  </div>
                </div>

                {plant.uses && (
                  <div className="p-4 rounded-xl bg-secondary-container/40 border border-secondary/20">
                    <h4 className="font-label-md text-sm font-bold text-secondary mb-1 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-base">verified</span>
                      <span>การนำไปใช้ประโยชน์และสาระการเรียนรู้</span>
                    </h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {plant.uses}
                    </p>
                  </div>
                )}
              </section>
            )}

            {/* Tab Content 2: Morphology */}
            {activeTab === 'morphology' && (
              <section className="bg-surface-container-low p-8 rounded-2xl space-y-6 border border-outline-variant/20 shadow-sm animate-fade-in">
                <h3 className="font-headline-sm text-xl text-primary font-bold mb-4">
                  ลักษณะทางกายวิภาคและสัณฐานวิทยา (ก.7-003)
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-surface rounded-xl border border-outline-variant/20">
                    <h4 className="font-label-md text-sm font-bold text-secondary mb-1">ลำต้น (Stem)</h4>
                    <p className="text-sm text-on-surface-variant">{plant.morphology?.stem || 'ลำต้นสมบูรณ์'}</p>
                  </div>
                  <div className="p-4 bg-surface rounded-xl border border-outline-variant/20">
                    <h4 className="font-label-md text-sm font-bold text-secondary mb-1">ใบ (Leaves)</h4>
                    <p className="text-sm text-on-surface-variant">{plant.morphology?.leaves || 'ลักษณะใบเดี่ยวหรือประกอบ'}</p>
                  </div>
                  <div className="p-4 bg-surface rounded-xl border border-outline-variant/20">
                    <h4 className="font-label-md text-sm font-bold text-secondary mb-1">ดอก (Flowers)</h4>
                    <p className="text-sm text-on-surface-variant">{plant.morphology?.flowers || 'โครงสร้างช่อดอก'}</p>
                  </div>
                  <div className="p-4 bg-surface rounded-xl border border-outline-variant/20">
                    <h4 className="font-label-md text-sm font-bold text-secondary mb-1">ผลและเมล็ด (Fruits & Seeds)</h4>
                    <p className="text-sm text-on-surface-variant">{plant.morphology?.fruits || 'ผลและสัณฐานวิทยา'}</p>
                  </div>
                </div>
              </section>
            )}

            {/* Tab Content 3: Botanical Facts */}
            {activeTab === 'facts' && (
              <section className="bg-surface-container-low p-8 rounded-2xl space-y-6 border border-outline-variant/20 shadow-sm animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary text-on-secondary flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">psychology</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-xl text-primary font-bold">เกร็ดความรู้ทางพฤกษศาสตร์ (Botanical Facts)</h3>
                    <p className="text-xs text-on-surface-variant">สาระน่ารู้และการปรับตัวของ {plant.nameTh}</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  {(plant.botanicalFacts || []).map((fact, idx) => (
                    <div key={idx} className="p-4 bg-surface rounded-xl border border-secondary/30 flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary text-xl mt-0.5">check_circle</span>
                      <p className="text-sm text-on-surface leading-relaxed">{fact}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Tab Content 4: Ecology */}
            {activeTab === 'ecology' && (
              <section className="bg-surface-container-low p-8 rounded-2xl space-y-6 border border-outline-variant/20 shadow-sm animate-fade-in">
                <h3 className="font-headline-sm text-xl text-primary font-bold mb-4">
                  สภาพแวดล้อมที่เหมาะสมและการดูแล
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-surface rounded-xl border border-outline-variant/20">
                    <span className="font-label-sm text-secondary text-xs block mb-1">แสงแดด (Sunlight)</span>
                    <p className="text-sm font-semibold text-on-surface">{plant.ecology?.sunlight || 'แสงแดดรำไร'}</p>
                  </div>
                  <div className="p-4 bg-surface rounded-xl border border-outline-variant/20">
                    <span className="font-label-sm text-secondary text-xs block mb-1">ปริมาณน้ำ (Water)</span>
                    <p className="text-sm font-semibold text-on-surface">{plant.ecology?.water || 'ปานกลาง'}</p>
                  </div>
                  <div className="p-4 bg-surface rounded-xl border border-outline-variant/20">
                    <span className="font-label-sm text-secondary text-xs block mb-1">ชนิดดิน (Soil)</span>
                    <p className="text-sm font-semibold text-on-surface">{plant.ecology?.soil || 'ดินร่วนโปร่ง'}</p>
                  </div>
                  <div className="p-4 bg-surface rounded-xl border border-outline-variant/20">
                    <span className="font-label-sm text-secondary text-xs block mb-1">อุณหภูมิ (Temperature)</span>
                    <p className="text-sm font-semibold text-on-surface">{plant.ecology?.temp || '22°C - 32°C'}</p>
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Sidebar (Related Plants & Quick Info) */}
          <aside className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="sticky top-32 space-y-6">
              {/* Plant Quick Tag Card */}
              <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 shadow-sm">
                <h3 className="font-headline-sm text-lg text-primary font-bold border-b border-surface-variant pb-3 mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">qr_code_2</span>
                  <span>ป้ายทะเบียนพรรณไม้</span>
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-1 border-b border-outline-variant/20">
                    <span className="text-on-surface-variant">รหัสพรรณไม้:</span>
                    <span className="font-semibold text-primary">{plant.plantCode}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-outline-variant/20">
                    <span className="text-on-surface-variant">วันที่สำรวจ:</span>
                    <span className="font-semibold text-primary">{plant.surveyDate || '2024-02-01'}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-outline-variant/20">
                    <span className="text-on-surface-variant">ผู้สำรวจ:</span>
                    <span className="font-semibold text-primary text-right">{plant.surveyor || 'UDVC Botanical'}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-on-surface-variant">สถานะ:</span>
                    <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-semibold">
                      {plant.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Related Plants */}
              <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 shadow-sm">
                <h3 className="font-headline-sm text-lg text-primary font-bold border-b border-surface-variant pb-3 mb-4">
                  พรรณไม้แนะนำอื่น ๆ
                </h3>
                <div className="space-y-3">
                  {relatedPlants.slice(0, 4).map((rel) => (
                    <div 
                      key={rel.id}
                      onClick={() => handleRelatedClick(rel.id)}
                      className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-surface transition-all cursor-pointer border border-transparent hover:border-outline-variant/30"
                    >
                      <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                        <img 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                          alt={rel.nameTh} 
                          src={rel.imageUrl}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-label-md text-sm text-primary group-hover:text-secondary transition-colors truncate font-semibold">
                          {rel.nameTh}
                        </h4>
                        <p className="text-xs text-on-surface-variant italic truncate">{rel.scientificName}</p>
                        <span className="text-[10px] text-secondary font-semibold">{rel.plantCode}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full mt-section-gap bg-surface-container-lowest dark:bg-surface-container-highest border-t border-outline-variant/30 py-12">
        <div className="max-w-container-max mx-auto px-margin-desktop text-center">
          <p className="font-body-md text-body-md text-on-surface-variant">
            © 2024 งานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี (School Botanical Garden by Udonthani Vocatinoal College) — สงวนลิขสิทธิ์ทั้งหมด
          </p>
        </div>
      </footer>
    </div>
  );
}
