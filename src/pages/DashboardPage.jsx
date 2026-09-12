import React, { useState, useMemo, useCallback } from 'react';
import { useDashboardStats, usePlants, useRecentActivity } from '../services/hooks';
import { DataGrid, getPlantColumns, useHeadlessDataGrid } from '../components/datagrid';

export default function DashboardPage({ onNavigate, onSelectPlant }) {
  const [activeTab, setActiveTab] = useState('overview');

  const { data: stats } = useDashboardStats();
  const { data: plantsData, loading: plantsLoading } = usePlants({ limit: 50 });
  const { data: activities } = useRecentActivity({ limit: 5 });

  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
  };

  const handlePlantClick = useCallback((plantId) => {
    if (onSelectPlant) onSelectPlant(plantId);
    else if (onNavigate) onNavigate('plantDetail');
  }, [onNavigate, onSelectPlant]);

  const plants = plantsData?.plants || [];
  const dataSummary = [
    { label: 'พรรณไม้', value: stats?.totalPlants ?? 0, icon: 'forest', color: 'bg-secondary' },
    { label: 'ข่าวสาร', value: stats?.totalNews ?? 0, icon: 'newspaper', color: 'bg-primary' },
    { label: 'เอกสารการเรียนรู้', value: stats?.researchDocuments ?? 0, icon: 'description', color: 'bg-tertiary' },
    { label: 'กิจกรรม', value: stats?.totalActivities ?? 0, icon: 'event', color: 'bg-secondary/70' },
    { label: 'ผู้ใช้งานระบบ', value: stats?.totalUsers ?? 0, icon: 'group', color: 'bg-primary/70' },
  ];
  const summaryMax = Math.max(...dataSummary.map((item) => item.value), 1);

  const columns = useMemo(() => {
    return getPlantColumns({ onSelectPlant: handlePlantClick });
  }, [handlePlantClick]);

  const table = useHeadlessDataGrid({
    data: plants,
    columns,
    initialState: {
      pagination: { pageIndex: 0, pageSize: 5 },
    },
  });

  return (
    <div className="flex min-h-screen bg-background text-on-background">
      {/* Sidebar Navigation */}
      <nav className="hidden md:flex flex-col w-64 bg-surface-container-low border-r border-outline-variant/30 h-auto min-h-screen sticky top-0">
        <div className="p-6">
          <button 
            type="button"
            onClick={() => handleNav('home')}
            className="font-headline-md text-headline-md text-primary text-left hover:opacity-80 transition-opacity flex items-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-secondary text-2xl">local_florist</span>
            <div className="flex flex-col">
              <span className="text-sm font-bold leading-tight">งานสวนพฤกษศาสตร์โรงเรียน</span>
              <span className="text-[11px] font-medium text-secondary">วิทยาลัยอาชีวศึกษาอุดรธานี</span>
            </div>
          </button>
          <p className="font-body-md text-[10px] text-on-surface-variant mt-1.5 uppercase tracking-tight">
            School Botanical Garden
          </p>
        </div>

        <ul className="flex-1 px-4 space-y-2 mt-2">
          <li>
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center space-x-3 p-3 rounded-xl font-label-md text-sm transition-all text-left cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-secondary-container text-on-secondary-container font-semibold shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-lg">dashboard</span>
              <span>ภาพรวม (Overview)</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleNav('addPlant')}
              className="w-full flex items-center space-x-3 p-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all font-label-md text-sm text-left cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">add_circle</span>
              <span>เพิ่มพรรณไม้ (Add Plant)</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleNav('explorer')}
              className="w-full flex items-center space-x-3 p-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all font-label-md text-sm text-left cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">local_florist</span>
              <span>ทะเบียนพืชศึกษา (Explorer)</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleNav('userManagement')}
              className="w-full flex items-center space-x-3 p-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all font-label-md text-sm text-left cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">manage_accounts</span>
              <span>จัดการผู้ใช้งาน (Users)</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => setActiveTab('activities')}
              className={`w-full flex items-center space-x-3 p-3 rounded-xl font-label-md text-sm transition-all text-left cursor-pointer ${
                activeTab === 'activities'
                  ? 'bg-secondary-container text-on-secondary-container font-semibold shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-lg">history_edu</span>
              <span>กิจกรรม & รายงาน (Reports)</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleNav('home')}
              className="w-full flex items-center space-x-3 p-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all font-label-md text-sm text-left cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              <span>กลับสู่หน้าหลัก</span>
            </button>
          </li>
        </ul>

        <div className="p-4 border-t border-outline-variant/30">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold">
              U
            </div>
            <div>
              <p className="font-label-md text-xs font-bold text-on-surface">เจ้าหน้าที่สวนพฤกษศาสตร์</p>
              <p className="font-label-sm text-[10px] text-on-surface-variant">UDVC Botanical Admin</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-y-auto bg-background min-h-screen">
        {/* Top App Bar */}
        <header className="bg-surface/90 backdrop-blur-md sticky top-0 z-20 px-margin-desktop py-4 flex justify-between items-center shadow-[0_1px_2px_rgba(0,0,0,0.05)] md:shadow-none border-b border-outline-variant/20">
          <div className="md:hidden">
            <h1 className="font-headline-md text-headline-md text-primary">Verdant Wisdom</h1>
          </div>
          <h2 className="hidden md:block font-headline-sm text-xl font-bold text-on-surface">แผงควบคุมระบบ (Dashboard)</h2>
          <div className="flex items-center gap-3">
            <button 
              type="button"
              onClick={() => handleNav('addPlant')}
              className="bg-primary text-on-primary px-4 py-2 rounded-full font-label-sm text-xs hover:bg-secondary transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <span className="material-symbols-outlined text-sm">add</span>
              <span>เพิ่มพรรณไม้ใหม่</span>
            </button>
          </div>
        </header>

        <div className="p-margin-desktop flex-1 max-w-container-max mx-auto w-full space-y-8">
          {/* Statistics Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Stat Card 1 */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/20 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-label-md text-sm text-on-surface-variant">จำนวนพรรณไม้ที่บันทึก (ก.7-003)</p>
                  <h3 className="font-display-lg text-3xl font-bold text-primary mt-2">
                    {stats?.totalPlants?.toLocaleString() || '12,450'}
                  </h3>
                </div>
                <div className="p-3 bg-secondary-container/60 rounded-full text-secondary">
                  <span className="material-symbols-outlined text-2xl">forest</span>
                </div>
              </div>
              <div className="mt-4 flex items-center text-secondary text-xs font-semibold">
                <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                <span>+{stats?.newPlantsThisTerm || 240} สายพันธุ์ใหม่ (เทอมนี้)</span>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/20 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-label-md text-sm text-on-surface-variant">ผู้เข้าชม / ศึกษาดูงาน</p>
                  <h3 className="font-display-lg text-3xl font-bold text-primary mt-2">
                    {stats?.totalVisitors?.toLocaleString() || '8,920'}
                  </h3>
                </div>
                <div className="p-3 bg-secondary-container/60 rounded-full text-secondary">
                  <span className="material-symbols-outlined text-2xl">group</span>
                </div>
              </div>
              <div className="mt-4 flex items-center text-secondary text-xs font-semibold">
                <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                <span>+{stats?.visitorGrowthPercent || 18.2}% จากภาคเรียนก่อน</span>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/20 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-label-md text-sm text-on-surface-variant">เอกสารวิจัย & สาระการเรียนรู้</p>
                  <h3 className="font-display-lg text-3xl font-bold text-primary mt-2">
                    {stats?.researchDocuments?.toLocaleString() || '1,580'}
                  </h3>
                </div>
                <div className="p-3 bg-secondary-container/60 rounded-full text-secondary">
                  <span className="material-symbols-outlined text-2xl">description</span>
                </div>
              </div>
              <div className="mt-4 flex items-center text-secondary text-xs font-semibold">
                <span className="material-symbols-outlined text-sm mr-1">check_circle</span>
                <span>บันทึกครบ 5 องค์ประกอบ อพ.สธ.</span>
              </div>
            </div>
          </section>

          {/* Data Summary Chart */}
          <section className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/20">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between mb-6">
              <div>
                <h3 className="font-headline-sm text-lg font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">bar_chart</span>
                  <span>สรุปข้อมูลในระบบ</span>
                </h3>
                <p className="text-xs text-on-surface-variant mt-1">
                  จำนวนรายการปัจจุบันจากฐานข้อมูล แยกตามประเภทข้อมูล
                </p>
              </div>
              <span className="text-xs text-on-surface-variant">อัปเดตจากข้อมูลล่าสุด</span>
            </div>
            <div className="space-y-4">
              {dataSummary.map((item) => (
                <div key={item.label} className="grid grid-cols-[minmax(130px,180px)_1fr_64px] items-center gap-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-on-surface">
                    <span className="material-symbols-outlined text-base text-secondary">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-surface-container">
                    <div
                      className={`h-full rounded-full ${item.color} transition-all duration-500`}
                      style={{ width: `${Math.max((item.value / summaryMax) * 100, item.value ? 3 : 0)}%` }}
                    />
                  </div>
                  <span className="text-right text-sm font-bold text-primary">{item.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </section>

          {/* TanStack Table V9 Plant Management Data Grid */}
          <section>
            <DataGrid
              table={table}
              title="รายการพรรณไม้ในระบบฐานข้อมูล"
              subtitle="ฐานข้อมูลพืชศึกษาและป้ายพรรณไม้สมบูรณ์ (ขับเคลื่อนด้วย TanStack Table V9 Data Grid)"
              isLoading={plantsLoading}
              density="compact"
              onRowClick={(p) => handlePlantClick(p.id)}
            />
          </section>

          {/* Activities Feed */}
          {activities && activities.length > 0 && (
            <section className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/20">
              <h3 className="font-headline-sm text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">history_edu</span>
                <span>กิจกรรมและการดำเนินงานล่าสุด</span>
              </h3>
              <div className="divide-y divide-outline-variant/20">
                {activities.map((act) => (
                  <div key={act.id} className="py-3.5 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <div>
                      <h4 className="font-semibold text-sm text-primary">{act.title}</h4>
                      <p className="text-xs text-on-surface-variant mt-0.5">{act.summary}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
                        {act.category}
                      </span>
                      <span className="text-xs text-on-surface-variant font-mono">{act.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
