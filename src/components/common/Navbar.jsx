import React, { useState, useRef, useEffect } from 'react';

export default function Navbar({
  currentPage = 'home',
  onNavigate,
  onOpenSearch,
  onOpenMobileMenu,
  onOpenLogin,
  onLogout,
  isAdmin = false,
  currentUser = null,
  className = '',
}) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  // Close dropdowns on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
      }
      // Quick search hotkey Ctrl+K / Cmd+K
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        if (onOpenSearch) onOpenSearch();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onOpenSearch]);

  const handleNav = (pageId) => {
    setOpenDropdown(null);
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  // Navigation sections
  const navSections = [
    {
      id: 'home',
      label: 'หน้าแรก',
      type: 'link',
      icon: 'home',
      pageId: 'home',
    },
    {
      id: 'study-group',
      label: 'พืชศึกษา',
      type: 'dropdown',
      icon: 'nature_people',
      badge: 'อพ.สธ.',
      align: 'left',
      items: [
        {
          id: 'plantStudy',
          title: 'พืชศึกษา (ก.7-003)',
          description: '8 ขั้นตอนการศึกษาพรรณไม้ตามแนวทาง อพ.สธ.',
          icon: 'nature_people',
          pageId: 'plantStudy',
        },
        {
          id: 'fiveElements',
          title: '5 องค์ประกอบงานสวนพฤกษศาสตร์',
          description: 'การรวบรวม ปลูก บันทึก รายงาน และใช้ประโยชน์',
          icon: 'account_tree',
          pageId: 'fiveElements',
        },
        {
          id: 'threeLearningAreas',
          title: '3 สาระการเรียนรู้',
          description: 'ธรรมชาติแห่งชีวิต สรรพสิ่งล้วนพันเกี่ยว ประโยชน์แท้แก่มหาชน',
          icon: 'psychology',
          pageId: 'threeLearningAreas',
        },
        {
          id: 'localResources',
          title: 'ฐานทรัพยากรท้องถิ่น',
          description: 'ทรัพยากรชีวภาพ กายภาพ และภูมิปัญญาวัฒนธรรมอุดรธานี',
          icon: 'landscape',
          pageId: 'localResources',
        },
        {
          id: 'explorer',
          title: 'ทะเบียนพืชศึกษา (Explorer & Grid)',
          description: 'สืบค้นฐานข้อมูลพรรณไม้ ค้นหาตามชื่อวิทย์/ชื่อพื้นเมือง',
          icon: 'search_insights',
          pageId: 'explorer',
        },
        {
          id: 'categories',
          title: 'หมวดหมู่พันธุ์ไม้ (Collections)',
          description: 'พืชดอก ไม้ใบประดับ สมุนไพร พืชอวบน้ำ',
          icon: 'category',
          pageId: 'categories',
        },
      ],
    },
    {
      id: 'plant-types-group',
      label: 'ประเภทพรรณไม้',
      type: 'dropdown',
      icon: 'forest',
      badge: 'หมวดหมู่',
      align: 'left',
      items: [
        {
          id: 'plantSignboard',
          title: 'ป้ายพรรณไม้สมบูรณ์',
          description: 'ป้ายชื่อพรรณไม้มาตรฐาน อพ.สธ. และ QR Code ประจำต้น',
          icon: 'badge',
          pageId: 'plantSignboard',
        },
        {
          id: 'plantDrawing',
          title: 'ภาพวาดพรรณไม้',
          description: 'ภาพวาดพฤกษศาสตร์ทางวิทยาศาสตร์โดยนักศึกษา',
          icon: 'palette',
          pageId: 'plantDrawing',
        },
        {
          id: 'plantRegistry',
          title: 'ทะเบียนพรรณไม้ (ก.7-005)',
          description: 'สมุดทะเบียนบันทึกและระบบรหัสพรรณไม้มาตรฐาน',
          icon: 'menu_book',
          pageId: 'plantRegistry',
        },
        {
          id: 'plantData',
          title: 'ข้อมูลพรรณไม้',
          description: 'สัณฐานวิทยา การจำแนกตามวิสัย และการใช้ประโยชน์',
          icon: 'search_insights',
          pageId: 'plantData',
        },
        {
          id: 'plantPhotos',
          title: 'ทะเบียนภาพถ่ายพรรณไม้',
          description: 'คลังภาพถ่ายดอก ใบ ลำต้น ผล และระบบนิเวศ',
          icon: 'photo_library',
          pageId: 'plantPhotos',
        },
      ],
    },
    {
      id: 'news-group',
      label: 'ข่าวสาร',
      type: 'dropdown',
      icon: 'newspaper',
      align: 'left',
      items: [
        {
          id: 'news',
          title: 'ข่าวสารประชาสัมพันธ์',
          description: 'ข่าวประกาศ กิจกรรม และข้อมูลประชาสัมพันธ์ของสวนพฤกษศาสตร์',
          icon: 'newspaper',
          pageId: 'news',
        },
        {
          id: 'projects',
          title: 'ผลงานและนวัตกรรม',
          description: 'สิ่งประดิษฐ์และผลิตภัณฑ์ชีวภาพจากพืชพรรณ',
          icon: 'lightbulb',
          pageId: 'projects',
        },
        {
          id: 'achievementTable',
          title: 'ตารางสะสมผลงาน',
          description: 'ทำเนียบผลงานและรางวัลที่ได้รับประจำปีการศึกษา',
          icon: 'emoji_events',
          pageId: 'achievementTable',
        },
        {
          id: 'goodnessSharing',
          title: 'แบ่งปันความดี',
          description: 'กิจกรรมจิตอาสา เพาะพันธุ์กล้าไม้ และบริการชุมชน',
          icon: 'volunteer_activism',
          pageId: 'goodnessSharing',
        },
      ],
    },
    {
      id: 'maps-guide-group',
      label: 'แผนผัง & คู่มือ',
      type: 'dropdown',
      icon: 'map',
      align: 'right',
      items: [
        {
          id: 'studyAreaMap',
          title: 'แผนผังพื้นที่ศึกษา',
          description: 'ผังแม่บทแปลงพรรณไม้ A-E และเรือนเพาะชำ',
          icon: 'map',
          pageId: 'studyAreaMap',
        },
        {
          id: 'integrationGuide',
          title: 'คู่มือแผนบูรณาการ',
          description: 'ดาวน์โหลดคู่มือแผนบูรณาการและตัวอย่างแผนการสอน',
          icon: 'menu_book',
          pageId: 'integrationGuide',
        },
        {
          id: 'collegeMap',
          title: 'แผนผังวิทยาลัย',
          description: 'แผนผังอาคารสถานที่และการเดินทาง UDVC',
          icon: 'domain',
          pageId: 'collegeMap',
        },
      ],
    },
    {
      id: 'about-group',
      label: 'ข้อมูล & องค์กร',
      type: 'dropdown',
      icon: 'history_edu',
      align: 'right',
      items: [
        {
          id: 'botanicalHistory',
          title: 'ประวัติงานสวนพฤกษศาสตร์โรงเรียน',
          description: 'ความเป็นมา พัฒนาการ และเกียรติประวัติพระราชทาน',
          icon: 'history',
          pageId: 'botanicalHistory',
        },
        {
          id: 'botanicalRoles',
          title: 'บทบาทหน้าที่',
          description: 'ภารกิจ 5 ด้านของงานสวนพฤกษศาสตร์โรงเรียน',
          icon: 'task_alt',
          pageId: 'botanicalRoles',
        },
        {
          id: 'personnelStructure',
          title: 'โครงสร้างบุคลากร',
          description: 'ทำเนียบคณะกรรมการดำเนินงานและคณาจารย์',
          icon: 'groups',
          pageId: 'personnelStructure',
        },
        {
          id: 'relatedAgencies',
          title: 'หน่วยงานที่เกี่ยวข้อง',
          description: 'โครงการ อพ.สธ., สอศ., อพพ. และมหาวิทยาลัยพี่เลี้ยง',
          icon: 'hub',
          pageId: 'relatedAgencies',
        },
        {
          id: 'about',
          title: 'ข้อมูลสวน & อนุรักษ์ (ระบบเดิม)',
          description: 'วิสัยทัศน์ ความเป็นมา และคณะกรรมการดำเนินงานเดิม',
          icon: 'info',
          pageId: 'about',
        },
      ],
    },
  ];

  // Admin management section if logged in
  if (isAdmin) {
    navSections.push({
      id: 'management',
      label: 'จัดการระบบ',
      type: 'dropdown',
      icon: 'admin_panel_settings',
      badge: currentUser?.role === 'admin' ? 'Admin' : 'Staff',
      align: 'right',
      items: [
        {
          id: 'dashboard',
          title: 'แผงควบคุมระบบ (Dashboard)',
          description: 'สถิติภาพรวม ทะเบียนพืช และกิจกรรมล่าสุด',
          icon: 'dashboard',
          pageId: 'dashboard',
        },
        {
          id: 'addPlant',
          title: 'เพิ่มข้อมูลพรรณไม้ใหม่ (Add Plant)',
          description: 'กรอกแบบบันทึกทะเบียนพรรณไม้ ก.7-003',
          icon: 'add_circle',
          pageId: 'addPlant',
        },
      ],
    });
  }

  return (
    <header
      ref={navRef}
      className={`sticky top-0 left-0 w-full max-w-full z-40 overflow-visible
    bg-surface/98 dark:bg-surface-dim/98 backdrop-blur-md
    border-b border-outline-variant/30 shadow-xs
    transition-all duration-300 ${className}`}
      id="full-navbar"
    >
      <div className="w-full px-3 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-3">
        {/* 1. Far Left: Logo & College Title (โลโก้อยู่ซ้ายมือสุดเสมอ) */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleNav('home')}
            className="text-left cursor-pointer group flex items-center gap-2.5 sm:gap-3"
            title="งานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี"
          >
            <div className="w-10 h-10 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary group-hover:scale-105 group-hover:bg-secondary/25 transition-all shadow-2xs shrink-0">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                local_florist
              </span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-xs sm:text-sm md:text-base text-primary leading-tight tracking-tight whitespace-nowrap">
                สวนพฤกษศาสตร์ วอศ.อุดรธานี
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-[11px] font-medium text-secondary tracking-wide uppercase truncate max-w-[180px] sm:max-w-xs md:max-w-none">
                School Botanical Garden UDVC
              </span>
            </div>
          </button>
        </div>

        {/* 2. Middle: Desktop Navigation Menus (Visible on XL+ screens) */}
        <nav className="hidden xl:flex flex-1 min-w-0 items-center justify-center gap-0.5 2xl:gap-1 font-body-md text-xs 2xl:text-[13px] overflow-visible flex-wrap px-1">
          {navSections.map((item) => {
            if (item.type === 'link') {
              const isActive = currentPage === item.pageId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNav(item.pageId)}
                  className={`px-2.5 py-1.5 2xl:px-3 2xl:py-2 rounded-xl font-medium transition-all duration-150 cursor-pointer flex items-center gap-1 whitespace-nowrap ${isActive
                      ? 'text-primary font-bold bg-secondary-container/50'
                      : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                    }`}
                >
                  <span className="material-symbols-outlined text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              );
            }

            // Dropdown Menu Item
            const isOpen = openDropdown === item.id;
            const hasActiveChild = item.items.some((sub) => sub.pageId === currentPage);

            return (
              <div key={item.id} className="relative group shrink-0">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => toggleDropdown(item.id)}
                  className={`px-2.5 py-1.5 2xl:px-3 2xl:py-2 rounded-xl font-medium transition-all duration-150 cursor-pointer flex items-center gap-1 whitespace-nowrap ${isOpen || hasActiveChild
                      ? 'text-primary font-bold bg-secondary-container/50'
                      : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                    }`}
                >
                  <span className="material-symbols-outlined text-base">{item.icon}</span>
                  <span>{item.label}</span>
                  <span
                    className={`material-symbols-outlined text-sm transition-transform duration-200 ${isOpen ? 'rotate-180 text-primary' : 'text-on-surface-variant/70'
                      }`}
                  >
                    expand_more
                  </span>
                </button>

                {/* Dropdown Menu Popup */}
                {isOpen && (
                  <div
                    role="menu"
                    className={`absolute ${item.align === 'right' ? 'right-0' : 'left-0'
                      } mt-2 w-72 sm:w-80 p-2 bg-surface/98 dark:bg-surface-dim/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-outline-variant/30 z-50 animate-fade-in`}
                  >
                    <div className="px-2.5 py-1 border-b border-outline-variant/15 mb-1 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm">{item.icon}</span>
                        <span>{item.label}</span>
                      </span>
                      {item.badge && (
                        <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-secondary/15 text-secondary font-bold">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <div className="space-y-0.5 max-h-[70vh] overflow-y-auto">
                      {item.items.map((subItem) => {
                        const isSubActive = subItem.pageId && currentPage === subItem.pageId;
                        return (
                          <button
                            key={subItem.id}
                            type="button"
                            role="menuitem"
                            onClick={() => handleNav(subItem.pageId)}
                            className={`w-full text-left p-2 rounded-xl transition-all duration-150 flex items-start gap-2.5 group/sub cursor-pointer ${isSubActive
                                ? 'bg-secondary-container/40 text-primary font-semibold'
                                : 'hover:bg-surface-container-high text-on-surface'
                              }`}
                          >
                            <div
                              className={`p-1.5 rounded-lg mt-0.5 transition-colors shrink-0 ${isSubActive
                                  ? 'bg-secondary text-on-secondary'
                                  : 'bg-surface-container text-secondary group-hover/sub:bg-secondary group-hover/sub:text-on-secondary'
                                }`}
                            >
                              <span className="material-symbols-outlined text-base">{subItem.icon}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-semibold tracking-tight truncate">
                                {subItem.title}
                              </div>
                              <p className="text-[10px] text-on-surface-variant/80 font-normal line-clamp-1 mt-0.5">
                                {subItem.description}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* 3. Far Right: Actions (ค้นหา + เข้าสู่ระบบ/สมัครสมาชิก + Hamburger บนจอเล็ก) */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 ml-auto xl:ml-0">
          {/* Search Button */}
          {onOpenSearch && (
            <button
              type="button"
              onClick={onOpenSearch}
              className="p-2 rounded-full hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors cursor-pointer flex items-center gap-1"
              title="ค้นหาพรรณไม้ด่วน (Ctrl+K)"
              aria-label="ค้นหาพรรณไม้"
            >
              <span className="material-symbols-outlined text-xl text-secondary">search</span>
              <span className="hidden 2xl:inline text-xs font-medium text-on-surface-variant">ค้นหา</span>
            </button>
          )}

          {/* Auth Section: Login/Register entry point or Logged In State */}
          {!isAdmin ? (
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                type="button"
                onClick={onOpenLogin}
                className="inline-flex items-center gap-1 sm:gap-1.5 bg-primary text-on-primary hover:bg-secondary text-xs font-semibold px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full transition-all shadow-2xs cursor-pointer whitespace-nowrap"
                title="เข้าสู่ระบบหรือสมัครสมาชิก"
              >
                <span className="material-symbols-outlined text-base">person</span>
                <span className="sm:hidden">เข้าสู่ระบบ</span>
                <span className="hidden sm:inline">เข้าสู่ระบบ</span>
              </button>
            </div>
          ) : (
            /* เมื่อเข้าสู่ระบบแล้ว: แสดงสถานะและปุ่มออกจากระบบ */
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <div
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-secondary/15 text-secondary text-xs font-bold"
                title={`${currentUser?.name || 'ผู้ใช้งาน'} (${currentUser?.roleLabel || (currentUser?.role === 'admin' ? 'ผู้ดูแลระบบ' : 'เจ้าหน้าที่')})`}
              >
                <span className="material-symbols-outlined text-sm">
                  {currentUser?.role === 'admin' ? 'shield_person' : 'badge'}
                </span>
                <span className="hidden sm:inline truncate max-w-[120px]">
                  {currentUser?.role === 'admin' ? 'ผู้ดูแลระบบ' : 'เจ้าหน้าที่'}
                </span>
              </div>
              <button
                type="button"
                onClick={onLogout}
                className="p-1.5 sm:px-3 sm:py-1.5 rounded-full border border-outline-variant/50 hover:bg-error-container/20 hover:text-error text-xs font-semibold text-on-surface-variant transition-colors cursor-pointer flex items-center gap-1"
                title="ออกจากระบบ"
              >
                <span className="material-symbols-outlined text-sm">logout</span>
                <span className="hidden sm:inline">ออก</span>
              </button>
            </div>
          )}

          {/* Mobile Menu Toggle (Visible on screens < xl) */}
          <button
            type="button"
            onClick={onOpenMobileMenu}
            className="xl:hidden p-2 text-primary hover:bg-surface-container rounded-xl transition-colors cursor-pointer shrink-0"
            aria-label="เปิดเมนูนำทาง"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
