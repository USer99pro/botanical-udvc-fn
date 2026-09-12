import React from 'react';
import { usePlants, useDailyFact, useSiteSettings } from '../services/hooks';

export default function HomePage({ onNavigate, onSelectPlant, onOpenSearch: _onOpenSearch }) {
  const { data: plantsData, loading: plantsLoading } = usePlants({ limit: 4 });
  const { data: dailyFact } = useDailyFact();
  const { data: siteSettings } = useSiteSettings();

  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
  };

  const plants = plantsData?.plants || [];
  const primaryPlant = plants[0];
  const secondaryPlants = plants.slice(1, 4);
  const homeVideos = Array.isArray(siteSettings?.home_videos) ? siteSettings.home_videos : [];
  const homeResources = Array.isArray(siteSettings?.home_resources) ? siteSettings.home_resources : [];
  const hasImportedContent = homeVideos.length > 0 || homeResources.length > 0 || siteSettings?.home_director;

  return (
    <div className="min-h-screen bg-background text-on-background">
      {/* Immersive Hero Section */}
      <header className="relative min-h-[680px] w-full flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover object-center scale-105 animate-fade-in" 
            alt="Botanical Garden Sunrise" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAURIFkNwuqX3KaDGpGjNJ71A77p8ch7ORtkzFuhJMJWtwmL0P0_MxQ8I7mUcOkMD_ugM0H6c3xYPPvFpkljpcJI8sjhg0vasWdLQRBzzk1wFz8sB5Uf3ZH3-6TUBajp3VFKRNvV0317wPIk7h28mU5gpZjqqi8ylkV3CxQP7mFXd7K9TfjFWhojcqexemYp_ItGpMTXcw5jAbwV8LOCHcC1_Pukd7pAPGxc5162S3Mpk5JcAWEbDdmow"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary/75 via-primary/60 to-primary/95 backdrop-blur-[2px]"></div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto py-24">
          <span className="font-label-md text-label-md text-secondary-fixed tracking-[0.2em] uppercase mb-4 inline-block opacity-90 px-4 py-1.5 rounded-full bg-primary-container/70 backdrop-blur-md border border-secondary-fixed/30">
            งานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี
          </span>
          <h1 className="font-display-lg text-4xl md:text-6xl text-on-primary mb-6 leading-tight">
            ค้นพบความลับ<br /><span className="italic font-light text-primary-fixed">ของธรรมชาติและพรรณไม้</span>
          </h1>
          <p className="font-body-lg text-body-lg text-surface-container-low/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            ดื่มด่ำไปกับความงามอันเงียบสงบของคอลเลกชันพฤกษศาสตร์ ฐานข้อมูลพืชศึกษา ก.7-003 และการอนุรักษ์พันธุกรรมพืชตามพระราชดำริ อพ.สธ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              type="button"
              onClick={() => handleNav('explorer')} 
              className="bg-secondary text-on-secondary font-label-md text-label-md px-8 py-4 rounded-full hover:bg-primary-container hover:text-on-primary transition-all duration-300 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              สำรวจทะเบียนพืชศึกษา <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <button 
              type="button"
              onClick={() => handleNav('about')} 
              className="bg-surface-container-lowest/15 backdrop-blur-md border border-surface-container-lowest/30 text-on-primary font-label-md text-label-md px-8 py-4 rounded-full hover:bg-surface-container-lowest/25 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">info</span>
              เกี่ยวกับโครงการ อพ.สธ.
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 space-y-16">
        
        {/* Botanical Fact of the Day Banner */}
        {dailyFact && (
          <section className="bg-surface-container-low rounded-3xl p-6 md:p-8 border border-secondary/30 shadow-sm relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-10 text-secondary pointer-events-none">
              <span className="material-symbols-outlined text-[200px]">psychology</span>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center shrink-0 shadow-md">
                <span className="material-symbols-outlined text-3xl">{dailyFact.icon || 'lightbulb'}</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="px-3 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-xs font-semibold">
                    เกร็ดความรู้พฤกษศาสตร์ • {dailyFact.category}
                  </span>
                  <span className="text-xs text-on-surface-variant italic">{dailyFact.plantName}</span>
                </div>
                <h3 className="font-headline-sm text-xl text-primary font-bold mb-2">
                  {dailyFact.title}
                </h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed text-sm md:text-base">
                  {dailyFact.fact}
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleNav('explorer')}
                className="shrink-0 px-5 py-2.5 rounded-full bg-surface border border-outline-variant hover:bg-surface-container text-primary font-label-sm text-xs transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>เรียนรู้เพิ่มเติม</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </section>
        )}

        {/* Imported content from the official Google Sites source */}
        {hasImportedContent && (
          <section className="space-y-8" aria-labelledby="official-content-title">
            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
                ข้อมูลจากเว็บไซต์ต้นแบบ
              </span>
              <h2 id="official-content-title" className="font-display-lg text-3xl md:text-4xl text-primary">
                สื่อและเอกสารงานสวนพฤกษศาสตร์
              </h2>
              {siteSettings?.home_director && (
                <p className="text-sm text-on-surface-variant">
                  ผู้อำนวยการวิทยาลัยอาชีวศึกษาอุดรธานี: {siteSettings.home_director}
                </p>
              )}
            </div>

            {homeVideos.length > 0 && (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {homeVideos.map((video) => (
                  <a
                    key={video.url}
                    href={video.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-lowest shadow-sm transition-shadow hover:shadow-lg"
                  >
                    <div className="flex aspect-video items-center justify-center bg-primary-container text-primary-fixed">
                      <span className="material-symbols-outlined text-5xl transition-transform group-hover:scale-110">play_circle</span>
                    </div>
                    <div className="p-4">
                      <h3 className="line-clamp-2 text-sm font-semibold text-primary">{video.title}</h3>
                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-secondary">
                        รับชมบน YouTube
                        <span className="material-symbols-outlined text-sm">open_in_new</span>
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            )}

            {homeResources.length > 0 && (
              <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-low p-6">
                <h3 className="mb-4 flex items-center gap-2 font-headline-sm text-lg font-bold text-primary">
                  <span className="material-symbols-outlined text-secondary">folder_open</span>
                  เอกสารและแหล่งข้อมูล
                </h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {homeResources.map((resource) => (
                    <a
                      key={resource.url}
                      href={resource.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between gap-3 rounded-xl bg-surface-container-lowest px-4 py-3 text-sm text-on-surface transition-colors hover:bg-secondary-container/40"
                    >
                      <span>{resource.title}</span>
                      <span className="material-symbols-outlined shrink-0 text-base text-secondary">open_in_new</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Welcome Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="font-label-sm text-secondary uppercase tracking-widest block font-semibold">งานสวนพฤกษศาสตร์โรงเรียน อพ.สธ.</span>
            <h2 className="font-display-lg text-3xl md:text-4xl text-primary leading-tight">โอเอซิสแห่งความสงบและศูนย์การเรียนรู้</h2>
            <div className="w-16 h-[3px] bg-secondary rounded-full"></div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              ที่งานสวนพฤกษศาสตร์ เราเชื่อมั่นในพลังแห่งการเรียนรู้และการอนุรักษ์ธรรมชาติ สวนของเราได้รับการดูแลอย่างพิถีพิถันเพื่อเป็นแหล่งรวบรวมพรรณไม้สมบูรณ์ การวิจัยทางพฤกษศาสตร์ และการศึกษาแบบบูรณาการ 5 องค์ประกอบ
            </p>
            <div className="pt-2">
              <button 
                type="button"
                onClick={() => handleNav('about')} 
                className="inline-flex items-center gap-2 text-secondary font-label-md text-label-md hover:text-primary transition-colors group cursor-pointer"
              >
                <span>อ่านเรื่องราวและพันธกิจ 5 องค์ประกอบของเรา</span>
                <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">east</span>
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-7 relative mt-8 lg:mt-0">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-lg">
              <img 
                className="w-full h-full object-cover rounded-2xl" 
                alt="Greenhouse" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhPl960cWBsH64JKloCMOdIVKHnEdVoZBu5eZ8dAKaPiAKgKV8qe-07zA3cHuhf4fp6OOGeWqnlB3BE-U8MgJMKhJ9F-thQwIZJKjQpq4nKem2heqN61xIqCJn9YKXaby-pGZTCVQaCFwyimDiVgNsk4LO6bnU1DdBZDjqFTsVNL3f2mnQX9H-AyOIp6cfInLknalum0teBTIwdHUHz-HakYRGHBOXDDNBVVb13Oeb7XIVTZbmE_Vtqw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-high rounded-2xl p-6 hidden md:flex flex-col justify-end shadow-xl z-10 border border-outline-variant/30">
              <span className="material-symbols-outlined text-secondary text-4xl mb-3">eco</span>
              <h3 className="font-headline-sm text-headline-sm text-primary">พรรณไม้กว่า 12,000 ต้น</h3>
              <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">ได้รับการบันทึกรหัส ก.7-003 และดูแลอย่างยั่งยืน</p>
            </div>
          </div>
        </section>

        {/* Featured Collections / Live Plants */}
        <section className="pt-8" id="collections">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-1 block">คลังพฤกษศาสตร์</span>
              <h2 className="font-display-lg text-3xl md:text-4xl text-primary">คอลเลกชันพรรณไม้ที่โดดเด่น</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">สำรวจความหลากหลายทางชีวภาพและพืชศึกษาจากระบบฐานข้อมูล</p>
            </div>
            <button 
              type="button"
              onClick={() => handleNav('explorer')} 
              className="hidden sm:inline-flex items-center gap-1 text-secondary font-label-md text-label-md hover:text-primary transition-colors cursor-pointer"
            >
              ดูพรรณไม้ทั้งหมด ({plantsLoading ? '...' : plants.length}) <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
            {/* Primary Plant Card */}
            {primaryPlant && (
              <div 
                onClick={() => onSelectPlant ? onSelectPlant(primaryPlant.id) : handleNav('plantDetail')}
                className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group cursor-pointer shadow-md hover:shadow-xl transition-all"
              >
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt={primaryPlant.nameTh} 
                  src={primaryPlant.imageUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className="inline-block px-3 py-1 bg-secondary-container/90 text-on-secondary-container font-label-sm text-label-sm rounded-full mb-3 backdrop-blur-sm">
                    {primaryPlant.plantCode} • {primaryPlant.tag || 'พืชศึกษา'}
                  </span>
                  <h3 className="font-headline-md text-2xl md:text-3xl text-on-primary mb-2">
                    {primaryPlant.nameTh} <span className="italic text-base opacity-80">({primaryPlant.scientificName})</span>
                  </h3>
                  <p className="font-body-md text-body-md text-surface-container-low/90 max-w-md hidden sm:block line-clamp-2">
                    {primaryPlant.description}
                  </p>
                </div>
              </div>
            )}

            {/* Secondary Plants */}
            {secondaryPlants.map((plant) => (
              <div 
                key={plant.id}
                onClick={() => onSelectPlant ? onSelectPlant(plant.id) : handleNav('plantDetail')}
                className="rounded-2xl overflow-hidden relative group cursor-pointer shadow-md hover:shadow-xl transition-all bg-surface-container"
              >
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt={plant.nameTh} 
                  src={plant.imageUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="font-label-sm text-secondary-fixed uppercase text-xs tracking-wider">
                    {plant.plantCode}
                  </span>
                  <h3 className="font-headline-sm text-lg text-on-primary font-semibold">{plant.nameTh}</h3>
                  <p className="text-xs text-primary-fixed-dim italic truncate">{plant.scientificName}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:hidden text-center">
            <button 
              type="button"
              onClick={() => handleNav('explorer')} 
              className="inline-block text-secondary font-label-md text-label-md border-b border-secondary pb-1"
            >
              ดูคอลเลกชันทั้งหมด
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full mt-section-gap bg-surface-container-lowest dark:bg-surface-container-highest border-t border-surface-container dark:border-surface-container-high">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max mx-auto px-margin-desktop py-16">
          <div className="col-span-1 md:col-span-2 pr-8">
            <h2 className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed mb-4">
              งานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant/70 max-w-sm mb-6">
              แหล่งเรียนรู้และอนุรักษ์ทรัพยากรธรรมชาติและพรรณไม้ท้องถิ่น เพื่อการศึกษาและการพัฒนาอย่างยั่งยืน
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="font-label-md text-label-md text-primary mb-4 uppercase tracking-wider">หน้าสำคัญ</h3>
            <ul className="space-y-3 font-body-md text-body-md">
              <li><button type="button" onClick={() => handleNav('categories')} className="text-on-surface-variant hover:text-primary transition-colors text-left">หมวดหมู่พรรณไม้</button></li>
              <li><button type="button" onClick={() => handleNav('explorer')} className="text-on-surface-variant hover:text-primary transition-colors text-left">ทะเบียนพืชศึกษา</button></li>
              <li><button type="button" onClick={() => handleNav('about')} className="text-on-surface-variant hover:text-primary transition-colors text-left">เกี่ยวกับและการอนุรักษ์</button></li>
              <li><button type="button" onClick={() => handleNav('dashboard')} className="text-on-surface-variant hover:text-primary transition-colors text-left">แผงควบคุมระบบ</button></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-label-md text-label-md text-primary mb-4 uppercase tracking-wider">ข้อมูลและบริการ</h3>
            <ul className="space-y-3 font-body-md text-body-md">
              <li><button type="button" onClick={() => handleNav('explorer')} className="text-on-surface-variant hover:text-primary transition-colors text-left">ทะเบียนพืชศึกษา</button></li>
              <li><button type="button" onClick={() => handleNav('categories')} className="text-on-surface-variant hover:text-primary transition-colors text-left">หมวดหมู่พันธุ์ไม้</button></li>
              <li><button type="button" onClick={() => handleNav('about')} className="text-on-surface-variant hover:text-primary transition-colors text-left">เกี่ยวกับโครงการ อพ.สธ.</button></li>
            </ul>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-margin-desktop pb-8 pt-4 border-t border-surface-container/50">
          <p className="font-body-md text-body-md text-tertiary dark:text-tertiary-fixed text-sm">
            © 2024 งานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี (School Botanical Garden by Udonthani Vocatinoal College) — สงวนลิขสิทธิ์ทั้งหมด
          </p>
        </div>
      </footer>
    </div>
  );
}
