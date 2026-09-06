import React from 'react';

export default function Footer({ onNavigate }) {
  const handleNav = (pageId) => {
    if (onNavigate) {
      onNavigate(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full mt-auto bg-surface-container-lowest/80 dark:bg-surface-dim/80 border-t border-outline-variant/30 text-on-surface-variant text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: About Botanical Garden */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary shrink-0">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  local_florist
                </span>
              </div>
              <div>
                <h3 className="font-bold text-sm text-primary leading-tight">
                  งานสวนพฤกษศาสตร์โรงเรียน
                </h3>
                <p className="text-xs text-secondary font-medium">
                  วิทยาลัยอาชีวศึกษาอุดรธานี
                </p>
              </div>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              การดำเนินงานสนองพระราชดำริ โครงการอนุรักษ์พันธุกรรมพืชอันเนื่องมาจากพระราชดำริฯ (อพ.สธ.) มุ่งเน้นการศึกษา รวบรวม อนุรักษ์ และใช้ประโยชน์จากพืชพรรณและฐานทรัพยากรท้องถิ่นอย่างยั่งยืน
            </p>
            <div className="flex items-center gap-2 text-xs text-secondary font-semibold">
              <span className="material-symbols-outlined text-base">verified</span>
              <span>มาตรฐานงานสวนพฤกษศาสตร์โรงเรียน อพ.สธ.</span>
            </div>
          </div>

          {/* Col 2: Quick Links - Education */}
          <div>
            <h4 className="font-bold text-primary text-sm mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-base">school</span>
              <span>การเรียนรู้และอนุรักษ์</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('plantStudy')}
                  className="hover:text-primary hover:underline transition-colors text-left"
                >
                  พืชศึกษา (ก.7-003)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('fiveElements')}
                  className="hover:text-primary hover:underline transition-colors text-left"
                >
                  5 องค์ประกอบงานสวนพฤกษศาสตร์
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('threeLearningAreas')}
                  className="hover:text-primary hover:underline transition-colors text-left"
                >
                  3 สาระการเรียนรู้
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('localResources')}
                  className="hover:text-primary hover:underline transition-colors text-left"
                >
                  ฐานทรัพยากรท้องถิ่น
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('integrationGuide')}
                  className="hover:text-primary hover:underline transition-colors text-left"
                >
                  คู่มือแผนบูรณาการการเรียนรู้
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Database & Works */}
          <div>
            <h4 className="font-bold text-primary text-sm mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-base">menu_book</span>
              <span>ฐานข้อมูลและผลงาน</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('plantSignboard')}
                  className="hover:text-primary hover:underline transition-colors text-left"
                >
                  ป้ายพรรณไม้สมบูรณ์
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('plantDrawing')}
                  className="hover:text-primary hover:underline transition-colors text-left"
                >
                  ภาพวาดพรรณไม้
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('plantRegistry')}
                  className="hover:text-primary hover:underline transition-colors text-left"
                >
                  ทะเบียนพรรณไม้
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('projects')}
                  className="hover:text-primary hover:underline transition-colors text-left"
                >
                  ผลงานและนวัตกรรม
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('achievementTable')}
                  className="hover:text-primary hover:underline transition-colors text-left"
                >
                  ตารางสะสมผลงาน
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('goodnessSharing')}
                  className="hover:text-primary hover:underline transition-colors text-left"
                >
                  แบ่งปันความดี
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Maps */}
          <div>
            <h4 className="font-bold text-primary text-sm mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-base">place</span>
              <span>สถานที่และการติดต่อ</span>
            </h4>
            <div className="space-y-2.5 text-xs text-on-surface-variant">
              <p className="leading-relaxed">
                วิทยาลัยอาชีวศึกษาอุดรธานี
                <br />117 ถนนโพศรี ตำบลหมากแข้ง อำเภอเมือง จังหวัดอุดรธานี 41000
              </p>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-secondary">call</span>
                <span>042-221-538</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-secondary">mail</span>
                <span>udvc.botanical@udvc.ac.th</span>
              </div>
              <div className="pt-2 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => handleNav('studyAreaMap')}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-surface-container hover:bg-secondary-container text-primary transition-colors cursor-pointer"
                >
                  แผนผังพื้นที่ศึกษา
                </button>
                <button
                  type="button"
                  onClick={() => handleNav('collegeMap')}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-surface-container hover:bg-secondary-container text-primary transition-colors cursor-pointer"
                >
                  แผนผังวิทยาลัย
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
          <p>© {new Date().getFullYear()} งานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี. สงวนลิขสิทธิ์.</p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => handleNav('botanicalHistory')}
              className="hover:text-primary transition-colors"
            >
              ประวัติความเป็นมา
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => handleNav('personnelStructure')}
              className="hover:text-primary transition-colors"
            >
              โครงสร้างบุคลากร
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => handleNav('relatedAgencies')}
              className="hover:text-primary transition-colors"
            >
              หน่วยงานที่เกี่ยวข้อง
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
