import React, { useState } from 'react';
import { useCategories, usePlants } from '../services/hooks';

export default function PlantCategoriesPage({ onNavigate, onSelectPlant, onOpenSearch: _onOpenSearch }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const { data: categoriesData } = useCategories();
  const { data: plantsData, loading } = usePlants({
    category: selectedCategory,
    search: searchQuery,
    limit: 12,
  });

  const categories = categoriesData || [
    { id: 'all', label: 'ทั้งหมด (All)' },
    { id: 'flowering', label: 'พืชดอก (Flowering)' },
    { id: 'tropical', label: 'พืชใบประดับ & เขตร้อน' },
    { id: 'succulents', label: 'พืชอวบน้ำ & แคคตัส' },
    { id: 'herbs', label: 'พืชสมุนไพรท้องถิ่น' },
    { id: 'ferns', label: 'ป่าเฟิน & มอส' },
  ];

  const plants = plantsData?.plants || [];

  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
  };

  const handleCardClick = (plantId) => {
    if (onSelectPlant) onSelectPlant(plantId);
    else handleNav('plantDetail');
  };

  return (
    <div className="min-h-screen bg-background text-on-background">
      {/* Main Content Area */}
      <main className="flex-grow pt-8 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        {/* Header Section */}
        <section className="mb-10">
          <span className="font-label-sm text-secondary uppercase tracking-widest block mb-2 font-semibold">คลังพฤกษศาสตร์ UDVC</span>
          <h1 className="font-display-lg text-4xl md:text-5xl text-primary mb-4">หมวดหมู่พันธุ์ไม้และพืชศึกษา</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            สำรวจความหลากหลายทางพฤกษศาสตร์ผ่านคอลเลกชันที่ได้รับการดูแลและจัดทำทะเบียนตามหลักเกณฑ์ อพ.สธ.
          </p>
        </section>

        {/* Filters & Search */}
        <section className="mb-10 flex flex-col md:flex-row gap-4 justify-between items-center bg-surface-container-low p-4 rounded-2xl shadow-sm border border-outline-variant/30">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-secondary text-on-secondary shadow-sm font-semibold'
                    : 'bg-surface border border-outline-variant text-on-surface-variant hover:bg-surface-container'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-72">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50">search</span>
              <input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-surface border border-outline-variant/40 focus:outline-none focus:border-secondary rounded-full text-body-md" 
                placeholder="ค้นหาในหมวดหมู่นี้..." 
                type="text"
              />
            </div>
            <button 
              type="button"
              onClick={() => handleNav('explorer')}
              className="hidden md:flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md cursor-pointer hover:text-primary transition-colors whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-lg">tune</span>
              <span>ตัวกรองขั้นสูง</span>
            </button>
          </div>
        </section>

        {/* Dynamic Plant Cards Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="h-80 bg-surface-container rounded-2xl animate-pulse border border-outline-variant/20" />
            ))}
          </div>
        ) : plants.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plants.map((plant) => (
              <div 
                key={plant.id}
                onClick={() => handleCardClick(plant.id)}
                className="group relative rounded-2xl overflow-hidden h-[380px] shadow-sm hover:shadow-xl transition-all cursor-pointer border border-outline-variant/20 bg-surface-container-low flex flex-col justify-end p-6"
              >
                <img 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt={plant.nameTh} 
                  src={plant.imageUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-secondary text-on-secondary rounded-full font-label-sm text-xs">
                      {plant.categoryLabel || plant.category}
                    </span>
                    <span className="text-xs text-primary-fixed bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
                      {plant.plantCode}
                    </span>
                  </div>
                  <h2 className="font-headline-sm text-2xl text-on-primary font-bold mb-1">{plant.nameTh}</h2>
                  <p className="text-xs text-primary-fixed-dim italic mb-2">{plant.scientificName}</p>
                  <p className="text-sm text-surface-container-low/90 line-clamp-2">{plant.description}</p>
                  <div className="mt-3 flex items-center gap-2 text-secondary-fixed text-xs font-semibold">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span>{plant.zone}</span>
                  </div>
                </div>
              </div>
            ))}
          </section>
        ) : (
          <div className="text-center py-16 bg-surface-container-low rounded-2xl border border-outline-variant/20">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant/40 mb-3">search_off</span>
            <h3 className="font-headline-sm text-lg text-primary mb-1">ไม่พบพรรณไม้ในหมวดหมู่นี้</h3>
            <p className="text-sm text-on-surface-variant">ลองค้นหาด้วยคำค้นอื่น หรือเลือกดูหมวดหมู่ทั้งหมด</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest dark:bg-surface-container-highest font-body-md text-body-md w-full mt-section-gap border-t border-outline-variant/30">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max mx-auto px-margin-desktop py-16">
          <div className="col-span-1 md:col-span-2">
            <div className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed mb-4">Verdant Wisdom UDVC</div>
            <p className="text-on-surface-variant dark:text-on-surface-variant/70 mb-6 max-w-md">
              ศูนย์การเรียนรู้งานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี
            </p>
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-wrap gap-x-12 gap-y-4 justify-start md:justify-end">
            <button type="button" onClick={() => handleNav('about')} className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">เกี่ยวกับและโครงการ อพ.สธ.</button>
            <button type="button" onClick={() => handleNav('explorer')} className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">ทะเบียนพืชศึกษา</button>
          </div>
          <div className="col-span-1 md:col-span-4 mt-12 pt-8 border-t border-outline-variant/30 text-center text-on-surface-variant dark:text-on-surface-variant/70 font-label-sm text-label-sm">
            © 2024 งานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี (School Botanical Garden by Udonthani Vocatinoal College) — สงวนลิขสิทธิ์ทั้งหมด
          </div>
        </div>
      </footer>
    </div>
  );
}
