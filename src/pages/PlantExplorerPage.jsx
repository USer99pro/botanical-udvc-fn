import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { usePlants } from '../services/hooks';
import {
  DataGrid,
  getPlantColumns,
  useHeadlessDataGrid,
  useUrlTableSync,
} from '../components/datagrid';

// Skeleton card shown while plants are loading
function PlantCardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-surface-container-low animate-pulse border border-outline-variant/20 flex flex-col justify-end p-6">
      <div className="h-4 w-24 bg-surface-container-highest rounded mb-2" />
      <div className="h-6 w-40 bg-surface-container-highest rounded mb-2" />
      <div className="h-3 w-full bg-surface-container-highest rounded" />
    </div>
  );
}

export default function PlantExplorerPage({ onNavigate, onSelectPlant, onOpenSearch: _onOpenSearch }) {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  // Debounce the search input (300 ms)
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchTerm), 300);
    return () => clearTimeout(t);
  }, [searchTerm]);

  // Fetch all plants for comprehensive DataGrid & cards
  const { data: allPlantsData, loading: allLoading } = usePlants({ limit: 100 });
  // Filtered plants for card view based on debounced search and active filter
  const { data: plantsData, loading } = usePlants({
    search: debouncedSearch,
    category: activeFilter,
    limit: 18,
  });

  const handlePlantClick = useCallback((plantId) => {
    if (onSelectPlant) onSelectPlant(plantId);
    else if (onNavigate) onNavigate('plantDetail');
  }, [onNavigate, onSelectPlant]);

  const handleCopyCode = useCallback((code) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(code);
      setToastMessage(`คัดลอกรหัส "${code}" สำเร็จ!`);
      setTimeout(() => setToastMessage(''), 2500);
    }
  }, []);

  // TanStack Table V9: Stable columns definition
  const columns = useMemo(() => {
    return getPlantColumns({
      onSelectPlant: handlePlantClick,
      onCopyCode: handleCopyCode,
    });
  }, [handleCopyCode, handlePlantClick]);

  // TanStack Table V9: External atoms with URL synchronization
  const { atoms } = useUrlTableSync({
    defaultPageSize: 10,
    enabled: true,
  });

  // Filter data for the table if category filter is active
  const tableData = useMemo(() => {
    const allPlants = allPlantsData?.plants || [];
    if (!activeFilter || activeFilter === 'all') return allPlants;
    return allPlants.filter((p) => p.category === activeFilter);
  }, [allPlantsData, activeFilter]);

  // TanStack Table V9: Headless data grid hook
  const table = useHeadlessDataGrid({
    data: tableData,
    columns,
    atoms,
    enableRowSelection: true,
    enableColumnResizing: true,
  });

  const filterTabs = [
    { id: 'all', label: 'ทั้งหมด (All)' },
    { id: 'flowering', label: 'พืชดอก' },
    { id: 'tropical', label: 'ไม้ใบประดับ' },
    { id: 'succulents', label: 'พืชอวบน้ำ' },
    { id: 'herbs', label: 'สมุนไพร' },
    { id: 'ferns', label: 'ป่าเฟิน' },
  ];

  const plants = plantsData?.plants || [];

  return (
    <div className="min-h-screen bg-background text-on-background">
      {/* Main Container */}
      <main className="pt-8 pb-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header Title Section */}
        <section className="mb-10 text-center md:text-left">
          <span className="font-label-sm text-secondary uppercase tracking-widest block mb-2 font-semibold">
            ระบบสืบค้นทะเบียนพรรณไม้สมบูรณ์
          </span>
          <h1 className="font-display-lg text-4xl md:text-5xl text-primary mb-3">
            ทะเบียนพืชศึกษาและสารสนเทศพฤกษศาสตร์
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            สืบค้นข้อมูลพรรณไม้ตามแบบบันทึก ก.7-003 โครงการอนุรักษ์พันธุกรรมพืชอันเนื่องมาจากพระราชดำริ (อพ.สธ.) วิทยาลัยอาชีวศึกษาอุดรธานี
          </p>
        </section>

        {/* Search & Filter Controls */}
        <section className="mb-10 space-y-4">
          {/* Search Input Bar */}
          <div className="relative max-w-2xl">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-2xl">
              search
            </span>
            <input 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="ค้นหาด้วยชื่อไทย, ชื่อวิทยาศาสตร์, วงศ์, รหัสพรรณไม้ หรือประโยชน์..."
              className="w-full bg-surface-container-low border border-outline-variant/40 rounded-full py-3.5 pl-12 pr-10 text-body-md focus:border-secondary focus:ring-0 transition-colors shadow-sm"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-secondary text-on-secondary font-semibold shadow-sm'
                    : 'bg-surface-container-low border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* Floating / Inline Toast Notification */}
        {toastMessage && (
          <div className="mb-6 p-3 px-4 bg-secondary-container text-on-secondary-container rounded-xl border border-secondary/30 flex items-center gap-2 text-xs font-semibold shadow-sm animate-fade-in">
            <span className="material-symbols-outlined text-[18px] text-secondary">check_circle</span>
            <span>{toastMessage}</span>
          </div>
        )}

        {/* View Switcher & Status Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="text-sm text-on-surface-variant flex items-center gap-2">
            <span>พบพรรณไม้ในระบบ <strong>{viewMode === 'table' ? tableData.length : plants.length}</strong> รายการ</span>
            {viewMode === 'table' && (
              <span className="text-xs bg-surface-container-high px-2 py-0.5 rounded-full text-secondary font-semibold">
                URL Synchronized
              </span>
            )}
          </div>

          {/* View Mode Toggle */}
          <div className="inline-flex items-center gap-1 bg-surface-container-low p-1 rounded-xl border border-outline-variant/30">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-surface-container-lowest text-primary shadow-xs font-bold'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">grid_view</span>
              <span>การ์ดพรรณไม้</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-surface-container-lowest text-primary shadow-xs font-bold'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">table_chart</span>
              <span>ตารางข้อมูล (V9 Grid)</span>
            </button>
          </div>
        </div>

        {/* Main View Content: DataGrid (Table V9) vs Photo Cards Grid */}
        {viewMode === 'table' ? (
          <section className="space-y-4">
            <DataGrid
              table={table}
              title="ทะเบียนพรรณไม้สมบูรณ์"
              subtitle="ระบบจัดเก็บและสืบค้นพรรณไม้ตามแบบบันทึก ก.7-003 อพ.สธ. — ขับเคลื่อนด้วย TanStack Table V9 Headless Engine"
              isLoading={allLoading}
              onRowClick={(plant) => handlePlantClick(plant.id)}
            />
          </section>
        ) : (
          /* Plant Cards Masonry Grid */
          <section className="space-y-6">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((idx) => (
                  <PlantCardSkeleton key={idx} />
                ))}
              </div>
            ) : plants.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {plants.map((plant) => (
                  <div 
                    key={plant.id}
                    onClick={() => handlePlantClick(plant.id)}
                    className="group rounded-2xl overflow-hidden aspect-[4/5] relative cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/20 bg-surface-container-low flex flex-col justify-end"
                  >
                    <img 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      alt={plant.nameTh} 
                      src={plant.imageUrl}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/45 to-transparent"></div>
                    
                    <div className="relative z-10 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-xs">
                          {plant.plantCode || 'ก.7-003'}
                        </span>
                        <span className="text-xs text-primary-fixed bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full truncate">
                          {plant.family}
                        </span>
                      </div>

                      <h3 className="font-headline-sm text-xl md:text-2xl text-on-primary font-bold mb-1">
                        {plant.nameTh}
                      </h3>
                      <p className="font-body-md text-xs text-primary-fixed-dim italic mb-2">
                        {plant.scientificName}
                      </p>
                      <p className="font-body-md text-xs text-surface-container-low/90 line-clamp-2 mb-3">
                        {plant.description}
                      </p>

                      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs text-secondary-fixed">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">location_on</span>
                          <span>{plant.zone || 'สวนพฤกษศาสตร์'}</span>
                        </span>
                        <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          <span>ข้อมูลพฤกษศาสตร์</span>
                          <span className="material-symbols-outlined text-xs">arrow_forward</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-surface-container-low rounded-3xl border border-outline-variant/30">
                <span className="material-symbols-outlined text-5xl text-on-surface-variant/40 mb-3">psychology_alt</span>
                <h3 className="font-headline-sm text-xl text-primary font-bold mb-2">ไม่พบข้อมูลพรรณไม้ที่ค้นหา</h3>
                <p className="text-sm text-on-surface-variant max-w-md mx-auto mb-6">
                  ไม่พบพรรณไม้ที่ตรงกับคำค้น "{searchTerm}" กรุณาตรวจสอบการสะกดหรือลองค้นหาด้วยหมวดหมู่อื่น
                </p>
                <button
                  type="button"
                  onClick={() => { setSearchTerm(''); setActiveFilter('all'); }}
                  className="px-6 py-2.5 rounded-full bg-primary text-on-primary text-sm font-semibold hover:bg-secondary transition-colors cursor-pointer"
                >
                  ล้างคำค้นหา
                </button>
              </div>
            )}
          </section>
        )}
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
