import React, { useState } from 'react';
import VideoPlayer from '../common/VideoPlayer';
import { createNews } from '../../services/api';

export default function AddNewsModal({
  isOpen,
  onClose,
  onSuccess,
}) {
  const [formData, setFormData] = useState({
    title: '',
    category: 'ข่าวกิจกรรม',
    media_type: 'youtube',
    aspect_ratio: '16:9',
    video_url: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
    cover_image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200&auto=format&fit=crop',
    excerpt: '',
    content: '',
    tags: 'อพ.สธ., พฤกษศาสตร์, UDVC',
    featured: false,
    author: 'งานสวนพฤกษศาสตร์โรงเรียน วอศ.อุดรธานี',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Quick preset helper to let user test YouTube 16:9, TikTok 9:16, Shorts 9:16, Banner 16:9, 4:3 in 1 click
  const applyPreset = (type) => {
    switch (type) {
      case 'yt-16-9':
        setFormData((prev) => ({
          ...prev,
          title: 'วีดิทัศน์แนะนำงานสวนพฤกษศาสตร์โรงเรียน สนองพระราชดำริ อพ.สธ. (16:9)',
          media_type: 'youtube',
          aspect_ratio: '16:9',
          video_url: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
          cover_image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200&auto=format&fit=crop',
        }));
        break;
      case 'tiktok-9-16':
        setFormData((prev) => ({
          ...prev,
          title: 'คลิปสั้น TikTok: น้องนักศึกษาพาบุกเรือนเพาะชำ ไขปริศนารหัส ก.7-003 (9:16)',
          media_type: 'tiktok',
          aspect_ratio: '9:16',
          video_url: 'https://www.tiktok.com/@botanical_udvc/video/7200000000000000000',
          cover_image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=800&auto=format&fit=crop',
        }));
        break;
      case 'shorts-9-16':
        setFormData((prev) => ({
          ...prev,
          title: 'YouTube Shorts: 60 วินาที เทคนิคติดป้ายพรรณไม้สมบูรณ์ (9:16)',
          media_type: 'youtube',
          aspect_ratio: '9:16',
          video_url: 'https://www.youtube.com/shorts/kJQP7kiw5Fk',
          cover_image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop',
        }));
        break;
      case 'banner-16-9':
        setFormData((prev) => ({
          ...prev,
          title: 'แบนเนอร์ประชาสัมพันธ์: โครงการสัมมนางานสวนพฤกษศาสตร์ ประจำปี 2568 (16:9)',
          media_type: 'banner',
          aspect_ratio: '16:9',
          video_url: '',
          cover_image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1600&auto=format&fit=crop',
        }));
        break;
      case 'banner-4-3':
        setFormData((prev) => ({
          ...prev,
          title: 'ภาพถ่ายวิชาการ: การศึกษาความหลากหลายของพืชวงศ์ขิงข่าในแปลงศึกษา (4:3)',
          media_type: 'banner',
          aspect_ratio: '4:3',
          video_url: '',
          cover_image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop',
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      setError('กรุณาระบุหัวข้อข่าว');
      return;
    }

    setLoading(true);
    setError(null);

    const tagsArray = formData.tags
      ? formData.tags.split(',').map((t) => t.trim()).filter(Boolean)
      : [];

    const payload = {
      ...formData,
      slug: `news-${Date.now()}`,
      tags: tagsArray,
      published_at: new Date().toISOString().split('T')[0],
      view_count: Math.floor(Math.random() * 50) + 10,
    };

    try {
      const res = await createNews(payload);
      if (res.data) {
        if (onSuccess) onSuccess(res.data);
        onClose();
      } else {
        setError(res.error || 'เกิดข้อผิดพลาดในการบันทึกข้อมูล');
      }
    } catch (err) {
      setError(err.message || 'บันทึกล้มเหลว');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="fixed inset-0 z-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl bg-surface dark:bg-surface-dim rounded-3xl shadow-2xl border border-outline-variant/30 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-surface-container flex items-center justify-between bg-surface-container-lowest/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-2xl">post_add</span>
            </div>
            <div>
              <h3 className="font-bold text-base text-primary">เพิ่มข่าวสารและวิดีโอใหม่</h3>
              <p className="text-xs text-on-surface-variant">
                รองรับ YouTube, TikTok, แบนเนอร์ สัดส่วน 16:9, 9:16, 4:3
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
          {error && (
            <div className="p-4 rounded-xl bg-error-container text-on-error-container text-xs font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-base">error</span>
              <span>{error}</span>
            </div>
          )}

          {/* Quick Demo Presets */}
          <div className="p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/30 space-y-2">
            <span className="text-xs font-semibold text-primary block">
              💡 ตัวอย่างทดสอบด่วน (Quick Presets):
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => applyPreset('yt-16-9')}
                className="px-3 py-1 rounded-full bg-red-600/10 text-red-700 dark:text-red-300 hover:bg-red-600/20 text-xs font-medium transition-colors cursor-pointer"
              >
                YouTube 16:9
              </button>
              <button
                type="button"
                onClick={() => applyPreset('tiktok-9-16')}
                className="px-3 py-1 rounded-full bg-black/10 dark:bg-white/10 text-on-surface hover:bg-black/20 text-xs font-medium transition-colors cursor-pointer"
              >
                TikTok 9:16
              </button>
              <button
                type="button"
                onClick={() => applyPreset('shorts-9-16')}
                className="px-3 py-1 rounded-full bg-pink-600/10 text-pink-700 dark:text-pink-300 hover:bg-pink-600/20 text-xs font-medium transition-colors cursor-pointer"
              >
                Shorts 9:16
              </button>
              <button
                type="button"
                onClick={() => applyPreset('banner-16-9')}
                className="px-3 py-1 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 text-xs font-medium transition-colors cursor-pointer"
              >
                แบนเนอร์ 16:9
              </button>
              <button
                type="button"
                onClick={() => applyPreset('banner-4-3')}
                className="px-3 py-1 rounded-full bg-tertiary-container/30 text-on-surface hover:bg-tertiary-container/50 text-xs font-medium transition-colors cursor-pointer"
              >
                ภาพ 4:3
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column: Form Fields */}
            <div className="space-y-4">
              {/* Title */}
              <div>
                <label className="block text-xs font-bold text-primary mb-1">
                  หัวข้อข่าว / สื่อวิดีโอ <span className="text-error">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  placeholder="เช่น วีดิทัศน์แนะนำงานสวนพฤกษศาสตร์..."
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/40 bg-surface-container-lowest focus:border-secondary focus:outline-hidden text-sm"
                />
              </div>

              {/* Media Type & Aspect Ratio Selector */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-primary mb-1">
                    ประเภทสื่อ (Media Type)
                  </label>
                  <select
                    value={formData.media_type}
                    onChange={(e) => handleChange('media_type', e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-outline-variant/40 bg-surface-container-lowest focus:border-secondary focus:outline-hidden text-sm"
                  >
                    <option value="youtube">YouTube (คลิป / Shorts)</option>
                    <option value="tiktok">TikTok (คลิปสั้นแนวตั้ง)</option>
                    <option value="banner">แบนเนอร์ภาพ (Banner)</option>
                    <option value="video">วิดีโอไฟล์ตรง (MP4)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-primary mb-1">
                    สัดส่วนภาพ (Aspect Ratio)
                  </label>
                  <select
                    value={formData.aspect_ratio}
                    onChange={(e) => handleChange('aspect_ratio', e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-outline-variant/40 bg-surface-container-lowest focus:border-secondary focus:outline-hidden text-sm font-semibold text-secondary"
                  >
                    <option value="16:9">16:9 (แนวนอน Widescreen)</option>
                    <option value="9:16">9:16 (แนวตั้ง TikTok / Shorts)</option>
                    <option value="4:3">4:3 (มาตรฐาน Standard)</option>
                  </select>
                </div>
              </div>

              {/* Video URL */}
              {(formData.media_type === 'youtube' ||
                formData.media_type === 'tiktok' ||
                formData.media_type === 'video') && (
                <div>
                  <label className="block text-xs font-bold text-primary mb-1">
                    URL วิดีโอ (YouTube / TikTok / Video Link)
                  </label>
                  <input
                    type="url"
                    value={formData.video_url}
                    onChange={(e) => handleChange('video_url', e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=... หรือ https://www.tiktok.com/@..."
                    className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/40 bg-surface-container-lowest focus:border-secondary focus:outline-hidden text-sm font-mono text-xs"
                  />
                </div>
              )}

              {/* Cover / Banner Image URL */}
              <div>
                <label className="block text-xs font-bold text-primary mb-1">
                  URL ภาพหน้าปก / ภาพแบนเนอร์
                </label>
                <input
                  type="url"
                  value={formData.cover_image}
                  onChange={(e) => handleChange('cover_image', e.target.value)}
                  placeholder="https://..."
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/40 bg-surface-container-lowest focus:border-secondary focus:outline-hidden text-sm font-mono text-xs"
                />
              </div>

              {/* Category & Author */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-primary mb-1">
                    หมวดหมู่
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleChange('category', e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-outline-variant/40 bg-surface-container-lowest focus:border-secondary focus:outline-hidden text-sm"
                  >
                    <option value="ข่าวกิจกรรม">ข่าวกิจกรรม</option>
                    <option value="พืชศึกษาน่ารู้">พืชศึกษาน่ารู้</option>
                    <option value="ความรู้ อพ.สธ.">ความรู้ อพ.สธ.</option>
                    <option value="ประกาศทั่วไป">ประกาศทั่วไป</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-primary mb-1">
                    ผู้จัดทำ / แหล่งที่มา
                  </label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => handleChange('author', e.target.value)}
                    placeholder="เช่น งานสวนพฤกษศาสตร์"
                    className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/40 bg-surface-container-lowest focus:border-secondary focus:outline-hidden text-sm"
                  />
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-xs font-bold text-primary mb-1">
                  แท็กคำค้น (คั่นด้วยจุลภาค)
                </label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => handleChange('tags', e.target.value)}
                  placeholder="อพ.สธ., พฤกษศาสตร์, กิจกรรม"
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/40 bg-surface-container-lowest focus:border-secondary focus:outline-hidden text-sm"
                />
              </div>

              {/* Featured Checkbox */}
              <label className="flex items-center gap-2 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => handleChange('featured', e.target.checked)}
                  className="w-4 h-4 rounded text-secondary focus:ring-secondary cursor-pointer"
                />
                <span className="text-xs font-semibold text-primary">
                  ปักหมุดเป็นแบนเนอร์เด่นประจำหน้า (Featured Banner)
                </span>
              </label>
            </div>

            {/* Right Column: Live Interactive Preview */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-secondary">visibility</span>
                  <span>ตัวอย่างแสดงผลสด (Live Preview)</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-secondary/15 text-secondary font-mono text-[11px] font-bold">
                  {formData.aspect_ratio}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col items-center justify-center">
                <div className={`w-full ${formData.aspect_ratio === '9:16' ? 'max-w-[240px]' : 'max-w-full'}`}>
                  <VideoPlayer
                    mediaType={formData.media_type}
                    videoUrl={formData.video_url}
                    coverImage={formData.cover_image}
                    aspectRatio={formData.aspect_ratio}
                    title={formData.title || 'ตัวอย่างหัวข้อข่าว...'}
                    autoplay={false}
                  />
                </div>
                <p className="text-[11px] text-on-surface-variant text-center mt-3">
                  พรีวิวนี้จำลองสัดส่วนจริง <strong>{formData.aspect_ratio}</strong> สำหรับ {formData.media_type}
                </p>
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-xs font-bold text-primary mb-1">
                  คำโปรยย่อ (Excerpt)
                </label>
                <textarea
                  rows={2}
                  value={formData.excerpt}
                  onChange={(e) => handleChange('excerpt', e.target.value)}
                  placeholder="ข้อความสรุปสั้น 1-2 ประโยคสำหรับแสดงบนการ์ด..."
                  className="w-full px-4 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-lowest focus:border-secondary focus:outline-hidden text-sm resize-none"
                />
              </div>

              {/* Full Content */}
              <div>
                <label className="block text-xs font-bold text-primary mb-1">
                  เนื้อหาฉบับเต็ม (Full Content)
                </label>
                <textarea
                  rows={4}
                  value={formData.content}
                  onChange={(e) => handleChange('content', e.target.value)}
                  placeholder="รายละเอียดข่าว กิจกรรม หรือบทบรรยาย..."
                  className="w-full px-4 py-2 rounded-xl border border-outline-variant/40 bg-surface-container-lowest focus:border-secondary focus:outline-hidden text-sm resize-none"
                />
              </div>
            </div>
          </div>

          {/* Footer Submit */}
          <div className="pt-4 border-t border-surface-container flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-outline-variant/40 text-on-surface-variant font-medium text-xs hover:bg-surface-container transition-colors cursor-pointer"
            >
              ยกเลิก
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 rounded-full bg-primary text-on-primary font-semibold text-xs hover:bg-secondary transition-colors cursor-pointer shadow-md flex items-center gap-1.5 disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-base">save</span>
              <span>{loading ? 'กำลังบันทึก...' : 'เผยแพร่ข่าวสาร / สื่อ'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
