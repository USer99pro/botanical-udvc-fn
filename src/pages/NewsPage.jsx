import React, { useState, useMemo } from 'react';
import { useNews } from '../services/hooks';
import NewsCard from '../components/common/NewsCard';
import VideoPlayer from '../components/common/VideoPlayer';
import NewsDetailModal from '../components/modals/NewsDetailModal';
import AddNewsModal from '../components/modals/AddNewsModal';

export default function NewsPage({ onNavigate, isAdmin = false }) {
  // State for filters
  const [selectedRatio, setSelectedRatio] = useState('all'); // 'all', '16:9', '9:16', '4:3'
  const [selectedMediaType, setSelectedMediaType] = useState('all'); // 'all', 'youtube', 'tiktok', 'banner'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals state
  const [activeNews, setActiveNews] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);

  // Fetch news data
  const { data: newsData, loading, refetch } = useNews({
    aspect_ratio: selectedRatio,
    media_type: selectedMediaType,
    category: selectedCategory,
    search: searchQuery,
    limit: 30,
  });

  const newsList = newsData?.news || [];

  // Identify featured banner items for the top hero showcase
  const featuredNews = useMemo(() => {
    const featured = newsList.filter((n) => n.featured);
    return featured.length > 0 ? featured[0] : newsList[0];
  }, [newsList]);

  const handleOpenDetail = (newsItem) => {
    setActiveNews(newsItem);
    setIsDetailOpen(true);
  };

  const handleAddSuccess = () => {
    refetch();
  };

  return (
    <div className="min-h-screen bg-background text-on-background pb-20">
      {/* ─── Hero Showcase Section ───────────────────────────────────── */}
      <section className="relative bg-surface-container-low border-b border-outline-variant/30 overflow-hidden pt-8 pb-12">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          {/* Header Tagline */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-xs font-semibold">
                  <span className="material-symbols-outlined text-[14px]">feed</span>
                  <span>ศูนย์ข่าวสารและมีเดียพฤกษศาสตร์</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold">
                  อพ.สธ. วอศ.อุดรธานี
                </span>
              </div>
              <h1 className="font-display-lg text-3xl md:text-5xl text-primary leading-tight font-bold">
                ข่าวสาร & มีเดียวิดีโอพฤกษศาสตร์
              </h1>
              <p className="font-body-md text-sm md:text-base text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
                อัปเดตกิจกรรม สารคดีการเรียนรู้ คลิปสั้น TikTok และวิดีโอ YouTube ในสัดส่วน 16:9, 9:16 และ 4:3 ตอบสนองทุกการรับชมบนทุกอุปกรณ์
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setIsAddOpen(true)}
                className="px-5 py-2.5 rounded-full bg-primary text-on-primary text-xs font-semibold hover:bg-secondary transition-all shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">add_circle</span>
                <span>เพิ่มข่าวสาร / คลิปใหม่</span>
              </button>
            </div>
          </div>

          {/* Featured Hero Banner Showcase (16:9 / Responsive) */}
          {featuredNews && (
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-outline-variant/30 bg-surface-container-lowest">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                {/* Media Preview (16:9 or native) */}
                <div className="lg:col-span-7 bg-black">
                  <VideoPlayer
                    mediaType={featuredNews.media_type}
                    videoUrl={featuredNews.video_url}
                    coverImage={featuredNews.banner_image || featuredNews.cover_image}
                    aspectRatio={featuredNews.aspect_ratio || '16:9'}
                    title={featuredNews.title}
                    autoplay={false}
                    className="rounded-none shadow-none"
                    onPlayClick={() => handleOpenDetail(featuredNews)}
                  />
                </div>

                {/* Info Column */}
                <div className="lg:col-span-5 p-6 md:p-10 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-sm text-xs font-semibold">
                        ⭐ เรื่องเด่นแนะนำ (Featured)
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-mono text-xs">
                        {featuredNews.aspect_ratio}
                      </span>
                    </div>

                    <h2
                      onClick={() => handleOpenDetail(featuredNews)}
                      className="font-headline-sm text-xl md:text-2xl font-bold text-primary hover:text-secondary cursor-pointer transition-colors leading-snug"
                    >
                      {featuredNews.title}
                    </h2>

                    <p className="font-body-md text-sm text-on-surface-variant leading-relaxed line-clamp-3">
                      {featuredNews.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-surface-container flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">visibility</span>
                      <span>{featuredNews.view_count.toLocaleString()} เข้าชม</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleOpenDetail(featuredNews)}
                      className="px-5 py-2 rounded-full bg-secondary text-on-secondary text-xs font-semibold hover:bg-primary-container transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <span>{featuredNews.media_type === 'youtube' || featuredNews.media_type === 'tiktok' ? 'รับชมวิดีโอ' : 'อ่านรายละเอียด'}</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─── Interactive Filtering Toolbar ───────────────────────────── */}
      <section className="sticky top-16 z-30 bg-surface/95 dark:bg-surface-dim/95 backdrop-blur-md border-b border-outline-variant/30 py-4 shadow-xs">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-3">
          {/* Row 1: Aspect Ratio Pills & Search */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
            {/* Aspect Ratio Presets: 16:9, 9:16, 4:3, All */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 scrollbar-none">
              <span className="text-xs font-bold text-primary shrink-0 flex items-center gap-1 mr-1">
                <span className="material-symbols-outlined text-base text-secondary">aspect_ratio</span>
                <span>สัดส่วน:</span>
              </span>

              <button
                type="button"
                onClick={() => setSelectedRatio('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer shrink-0 ${
                  selectedRatio === 'all'
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'
                }`}
              >
                ทั้งหมด (All)
              </button>

              <button
                type="button"
                onClick={() => setSelectedRatio('16:9')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                  selectedRatio === '16:9'
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'
                }`}
              >
                <span className="material-symbols-outlined text-sm">crop_16_9</span>
                <span>16:9 แนวนอน Widescreen</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedRatio('9:16')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                  selectedRatio === '9:16'
                    ? 'bg-secondary text-on-secondary shadow-sm'
                    : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'
                }`}
              >
                <span className="material-symbols-outlined text-sm">crop_portrait</span>
                <span>9:16 แนวตั้ง TikTok/Shorts</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedRatio('4:3')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                  selectedRatio === '4:3'
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'
                }`}
              >
                <span className="material-symbols-outlined text-sm">crop_5_4</span>
                <span>4:3 มาตรฐาน Standard</span>
              </button>
            </div>

            {/* Instant Search input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ค้นหาชื่อข่าว, วิดีโอ, แฮชแท็ก..."
                className="w-full pl-9 pr-8 py-2 rounded-full border border-outline-variant/40 bg-surface-container-lowest text-xs focus:border-secondary focus:outline-hidden"
              />
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-base text-on-surface-variant pointer-events-none">
                search
              </span>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2.5 text-on-surface-variant hover:text-primary cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">cancel</span>
                </button>
              )}
            </div>
          </div>

          {/* Row 2: Media Type & Category Filters */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-surface-container/60">
            {/* Media Type Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto">
              <span className="text-[11px] font-bold text-on-surface-variant mr-1">แพลตฟอร์ม:</span>
              <button
                type="button"
                onClick={() => setSelectedMediaType('all')}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedMediaType === 'all'
                    ? 'bg-secondary-container text-on-secondary-container font-semibold'
                    : 'hover:bg-surface-container text-on-surface-variant'
                }`}
              >
                ทั้งหมด
              </button>

              <button
                type="button"
                onClick={() => setSelectedMediaType('youtube')}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                  selectedMediaType === 'youtube'
                    ? 'bg-red-600 text-white font-semibold'
                    : 'hover:bg-surface-container text-on-surface-variant'
                }`}
              >
                <span className="material-symbols-outlined text-[14px]">smart_display</span>
                <span>YouTube</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedMediaType('tiktok')}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                  selectedMediaType === 'tiktok'
                    ? 'bg-black text-white font-semibold border border-pink-500/50'
                    : 'hover:bg-surface-container text-on-surface-variant'
                }`}
              >
                <span className="material-symbols-outlined text-[14px] text-pink-400">music_note</span>
                <span>TikTok</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedMediaType('banner')}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                  selectedMediaType === 'banner'
                    ? 'bg-primary text-on-primary font-semibold'
                    : 'hover:bg-surface-container text-on-surface-variant'
                }`}
              >
                <span className="material-symbols-outlined text-[14px]">photo_library</span>
                <span>แบนเนอร์ภาพ</span>
              </button>
            </div>

            {/* Category Select */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-on-surface-variant">หมวดหมู่:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-1 rounded-lg border border-outline-variant/40 bg-surface-container-lowest text-xs focus:border-secondary focus:outline-hidden"
              >
                <option value="all">ทุกหมวดหมู่ (All)</option>
                <option value="ข่าวกิจกรรม">ข่าวกิจกรรม</option>
                <option value="พืชศึกษาน่ารู้">พืชศึกษาน่ารู้</option>
                <option value="ความรู้ อพ.สธ.">ความรู้ อพ.สธ.</option>
                <option value="ประกาศทั่วไป">ประกาศทั่วไป</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* ─── News Grid Feed ("all response") ─────────────────────────── */}
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-10">
        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-base md:text-lg text-primary">
              รายการข่าวและสื่อทั้งหมด
            </h3>
            <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-mono text-xs font-semibold">
              {newsList.length} รายการ
            </span>
          </div>

          {(selectedRatio !== 'all' || selectedMediaType !== 'all' || selectedCategory !== 'all' || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setSelectedRatio('all');
                setSelectedMediaType('all');
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs text-secondary hover:underline cursor-pointer flex items-center gap-1"
            >
              <span>รีเซ็ตตัวกรอง</span>
              <span className="material-symbols-outlined text-sm">restart_alt</span>
            </button>
          )}
        </div>

        {/* Loading state */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-80 rounded-3xl bg-surface-container-high animate-pulse border border-outline-variant/30"
              />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && newsList.length === 0 && (
          <div className="min-h-[40vh] flex flex-col items-center justify-center p-8 text-center bg-surface-container-low rounded-3xl border border-outline-variant/30">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant/40 mb-3">
              search_off
            </span>
            <h4 className="font-bold text-lg text-primary mb-1">
              ไม่พบข่าวสารหรือสื่อที่ตรงกับเงื่อนไข
            </h4>
            <p className="text-xs text-on-surface-variant max-w-sm mb-4">
              ลองเปลี่ยนคำค้นหา หรือรีเซ็ตตัวกรองสัดส่วนและประเภทสื่อเพื่อดูรายการทั้งหมด
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedRatio('all');
                setSelectedMediaType('all');
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2 rounded-full bg-secondary text-on-secondary text-xs font-semibold hover:bg-secondary/90 transition-colors cursor-pointer"
            >
              แสดงข่าวทั้งหมด
            </button>
          </div>
        )}

        {/* Responsive Grid: adapts automatically to mobile, tablet, and widescreen */}
        {!loading && newsList.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 items-start">
            {newsList.map((item) => (
              <NewsCard
                key={item.id}
                news={item}
                onClick={handleOpenDetail}
                onPlay={handleOpenDetail}
              />
            ))}
          </div>
        )}
      </main>

      {/* ─── Modals ─────────────────────────────────────────────────── */}
      <NewsDetailModal
        news={activeNews}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
      />

      <AddNewsModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSuccess={handleAddSuccess}
      />
    </div>
  );
}
