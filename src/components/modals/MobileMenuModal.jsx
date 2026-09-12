import React, { useState } from 'react';

export default function MobileMenuModal({
  isOpen,
  onClose,
  onNavigate,
  isAdmin = false,
  isMember = false,
  currentUser = null,
  onOpenLogin,
  onLogout,
  onOpenSearch,
}) {
  const [openSections, setOpenSections] = useState({
    study: true,
    plantTypes: false,
    news: false,
    maps: false,
    about: false,
    admin: false,
  });

  if (!isOpen) return null;

  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    if (onClose) onClose();
  };

  const toggleSection = (sectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const mobileSections = [
    {
      key: 'study',
      title: 'การศึกษาพรรณไม้',
      icon: 'nature_people',
      items: [
        { id: 'plantStudy', label: 'พืชศึกษา (ก.7-003)', icon: 'nature_people' },
        { id: 'fiveElements', label: '5 องค์ประกอบงานสวนพฤกษศาสตร์', icon: 'account_tree' },
        { id: 'threeLearningAreas', label: '3 สาระการเรียนรู้', icon: 'psychology' },
        { id: 'localResources', label: 'ฐานทรัพยากรท้องถิ่น', icon: 'landscape' },
        { id: 'explorer', label: 'ทะเบียนพืชศึกษา (Explorer & Grid)', icon: 'search_insights' },
        { id: 'categories', label: 'หมวดหมู่พันธุ์ไม้ (Collections)', icon: 'category' },
      ],
    },
    {
      key: 'plantTypes',
      title: 'ประเภทพรรณไม้',
      icon: 'forest',
      items: [
        { id: 'plantSignboard', label: 'ป้ายพรรณไม้สมบูรณ์', icon: 'badge' },
        { id: 'plantDrawing', label: 'ภาพวาดพรรณไม้', icon: 'palette' },
        { id: 'plantRegistry', label: 'ทะเบียนพรรณไม้ ก.7-005', icon: 'menu_book' },
        { id: 'plantData', label: 'ข้อมูลพรรณไม้เชิงลึก', icon: 'search_insights' },
        { id: 'plantPhotos', label: 'ทะเบียนภาพถ่ายพรรณไม้', icon: 'photo_library' },
      ],
    },
    {
      key: 'news',
      title: 'ข่าวสาร',
      icon: 'newspaper',
      items: [
        { id: 'news', label: 'ข่าวสารประชาสัมพันธ์', icon: 'newspaper' },
        { id: 'projects', label: 'ผลงานและนวัตกรรม', icon: 'lightbulb' },
        { id: 'achievementTable', label: 'ตารางสะสมผลงาน', icon: 'emoji_events' },
        { id: 'goodnessSharing', label: 'แบ่งปันความดี', icon: 'volunteer_activism' },
      ],
    },
    {
      key: 'maps',
      title: 'แผนผัง & คู่มือ',
      icon: 'map',
      items: [
        { id: 'studyAreaMap', label: 'แผนผังพื้นที่ศึกษา', icon: 'map' },
        { id: 'integrationGuide', label: 'คู่มือแผนบูรณาการ', icon: 'menu_book' },
        { id: 'collegeMap', label: 'แผนผังวิทยาลัย', icon: 'domain' },
      ],
    },
    {
      key: 'about',
      title: 'ประวัติ & องค์กร',
      icon: 'history_edu',
      items: [
        { id: 'botanicalHistory', label: 'ประวัติงานสวนพฤกษศาสตร์โรงเรียน', icon: 'history' },
        { id: 'botanicalRoles', label: 'บทบาทหน้าที่', icon: 'task_alt' },
        { id: 'personnelStructure', label: 'โครงสร้างบุคลากร', icon: 'groups' },
        { id: 'relatedAgencies', label: 'หน่วยงานที่เกี่ยวข้อง', icon: 'hub' },
        { id: 'about', label: 'ข้อมูลงานสวนพฤกษศาสตร์เดิม', icon: 'info' },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in">
      {/* Click outside backdrop */}
      <div className="absolute inset-0 z-0" onClick={onClose} />

      {/* Slide-out Drawer */}
      <nav className="relative z-10 h-full w-full max-w-sm bg-surface/98 dark:bg-surface-dim/98 backdrop-blur-md shadow-2xl flex flex-col justify-between border-l border-outline-variant/30">
        {/* Header with official branding */}
        <div className="p-4 border-b border-outline-variant/20 flex justify-between items-start">
          <div className="flex items-start gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-2xl">local_florist</span>
            </div>
            <div>
              <h3 className="font-bold text-sm text-primary leading-tight">
                งานสวนพฤกษศาสตร์โรงเรียน
              </h3>
              <p className="text-xs text-on-surface-variant font-medium">
                วิทยาลัยอาชีวศึกษาอุดรธานี
              </p>
              <p className="text-[10px] text-secondary uppercase tracking-tight mt-0.5">
                School Botanical Garden UDVC
              </p>
            </div>
          </div>
          <button
            type="button"
            aria-label="ปิดเมนู"
            onClick={onClose}
            className="p-1.5 text-on-surface-variant hover:text-primary rounded-full hover:bg-surface-container cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Navigation Accordion Sections */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
          {/* Home Link */}
          <button
            type="button"
            onClick={() => handleNav('home')}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-surface-container/60 hover:bg-secondary-container/40 text-primary font-semibold text-xs transition-colors cursor-pointer text-left"
          >
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-secondary text-lg">home</span>
              <span>หน้าแรก (Home)</span>
            </div>
            <span className="material-symbols-outlined text-xs text-secondary">arrow_forward</span>
          </button>

          {/* Quick Search Button in Mobile Drawer */}
          {onOpenSearch && (
            <button
              type="button"
              onClick={() => {
                if (onClose) onClose();
                if (onOpenSearch) onOpenSearch();
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-surface-container/60 hover:bg-secondary-container/40 text-primary font-semibold text-xs transition-colors cursor-pointer text-left"
            >
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-secondary text-lg">search</span>
                <span>ค้นหาพรรณไม้ (Search)</span>
              </div>
              <span className="material-symbols-outlined text-xs text-secondary">arrow_forward</span>
            </button>
          )}

          {/* Section Accordions */}
          {mobileSections.map((sec) => {
            const isOpenSection = !!openSections[sec.key];
            return (
              <div
                key={sec.key}
                className="border border-outline-variant/30 rounded-2xl overflow-hidden bg-surface-container-lowest/50"
              >
                <button
                  type="button"
                  onClick={() => toggleSection(sec.key)}
                  className="w-full flex items-center justify-between p-3 text-on-surface font-semibold text-xs hover:bg-surface-container transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-lg">{sec.icon}</span>
                    <span className="font-bold text-primary">{sec.title}</span>
                  </div>
                  <span
                    className={`material-symbols-outlined text-base transition-transform duration-200 ${
                      isOpenSection ? 'rotate-180 text-secondary' : 'text-on-surface-variant'
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpenSection && (
                  <div className="px-2 pb-2.5 space-y-1 border-t border-outline-variant/15 pt-1.5">
                    {sec.items.map((sub) => (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => handleNav(sub.id)}
                        className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-on-surface-variant hover:text-primary hover:bg-secondary-container/30 transition-colors text-left cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-sm text-secondary">{sub.icon}</span>
                        <span className="font-medium truncate">{sub.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Admin Management Section if Logged In */}
          {isAdmin && (
            <div className="border border-secondary/40 rounded-2xl overflow-hidden bg-secondary/5 mt-4">
              <button
                type="button"
                onClick={() => toggleSection('admin')}
                className="w-full flex items-center justify-between p-3 text-primary font-bold text-xs hover:bg-secondary/15 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-lg">admin_panel_settings</span>
                  <span>ระบบจัดการผู้ดูแล (Admin)</span>
                </div>
                <span
                  className={`material-symbols-outlined text-base transition-transform duration-200 ${
                    openSections.admin ? 'rotate-180 text-secondary' : 'text-on-surface-variant'
                  }`}
                >
                  expand_more
                </span>
              </button>

              {openSections.admin && (
                <div className="px-2 pb-2.5 space-y-1 border-t border-secondary/20 pt-1.5">
                  <button
                    type="button"
                    onClick={() => handleNav('dashboard')}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-on-surface-variant hover:text-primary hover:bg-secondary-container/40 transition-colors text-left cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm text-secondary">dashboard</span>
                    <span className="font-medium">แผงควบคุมระบบ (Dashboard)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNav('addPlant')}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-on-surface-variant hover:text-primary hover:bg-secondary-container/40 transition-colors text-left cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm text-secondary">add_circle</span>
                    <span className="font-medium">เพิ่มข้อมูลพรรณไม้ (Add Plant)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNav('userManagement')}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-on-surface-variant hover:text-primary hover:bg-secondary-container/40 transition-colors text-left cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm text-secondary">manage_accounts</span>
                    <span className="font-medium">จัดการผู้ใช้งาน (Users)</span>
                  </button>
                </div>
              )}
            </div>
          )}
          {!isAdmin && isMember && (
            <div className="border border-secondary/40 rounded-2xl overflow-hidden bg-secondary/5 mt-4">
              <button
                type="button"
                onClick={() => handleNav('addPlant')}
                className="w-full flex items-center gap-2 p-3 text-primary font-bold text-xs hover:bg-secondary/15 transition-colors cursor-pointer text-left"
              >
                <span className="material-symbols-outlined text-secondary text-lg">add_circle</span>
                <span>เพิ่มข้อมูลพรรณไม้ (สมาชิก)</span>
              </button>
            </div>
          )}
        </div>

        {/* Footer actions: Admin Login / Logout */}
        <div className="p-4 border-t border-outline-variant/20 bg-surface-container/40">
          {isMember ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-lg">verified_user</span>
                <span className="text-xs font-semibold text-primary truncate max-w-[150px]">
                  {currentUser?.name || (isAdmin ? 'ผู้ดูแลระบบ' : 'สมาชิก')}
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (onLogout) onLogout();
                  if (onClose) onClose();
                }}
                className="px-3 py-1.5 rounded-lg border border-error/40 text-error hover:bg-error-container/20 text-xs font-semibold transition-colors cursor-pointer"
              >
                ออกจากระบบ
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  if (onClose) onClose();
                  if (onNavigate) onNavigate('register');
                }}
                className="py-2.5 px-3 rounded-xl border border-secondary text-secondary hover:bg-secondary/10 text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-base">person_add</span>
                <span>สมัครสมาชิก</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  if (onClose) onClose();
                  if (onOpenLogin) onOpenLogin();
                }}
                className="py-2.5 px-3 rounded-xl bg-primary text-on-primary text-xs font-bold hover:bg-secondary transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span className="material-symbols-outlined text-base">admin_panel_settings</span>
                <span>เข้าสู่ระบบ</span>
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
