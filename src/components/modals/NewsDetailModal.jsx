import React, { useState, useEffect } from 'react';
import VideoPlayer from '../common/VideoPlayer';

export default function NewsDetailModal({
  news,
  isOpen,
  onClose,
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !news) return null;

  const {
    title,
    excerpt,
    content,
    category = 'ข่าวสาร',
    media_type = 'image',
    video_url = '',
    aspect_ratio = '16:9',
    cover_image,
    banner_image,
    author,
    published_at,
    view_count = 0,
    tags = [],
  } = news;

  const displayImage = cover_image || banner_image;
  const handleCopyLink = () => {
    try {
      const url = window.location.href;
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleShareSocial = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);
    let shareUrl = '';

    if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (platform === 'line') {
      shareUrl = `https://social-plugins.line.me/lineit/share?url=${url}`;
    } else if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=500');
    }
  };

  // Determine modal width based on aspect ratio: 9:16 vertical can look cleaner with max-w-2xl or max-w-3xl, 16:9 with max-w-4xl
  const modalMaxWidth = aspect_ratio === '9:16' ? 'max-w-2xl' : 'max-w-4xl';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto animate-fade-in">
      {/* Background click to dismiss */}
      <div className="fixed inset-0 z-0" onClick={onClose} />

      {/* Modal Container */}
      <div
        className={`relative z-10 w-full ${modalMaxWidth} bg-surface dark:bg-surface-dim rounded-3xl shadow-2xl border border-outline-variant/30 overflow-hidden my-auto max-h-[92vh] flex flex-col`}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-surface-container flex items-center justify-between bg-surface-container-lowest/80 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-semibold text-xs">
              {category}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-surface-container border border-outline-variant/30 font-mono text-xs text-on-surface-variant">
              สัดส่วน {aspect_ratio}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyLink}
              title="คัดลอกลิงก์"
              className="p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">
                {copied ? 'check' : 'share'}
              </span>
            </button>
            <button
              type="button"
              onClick={onClose}
              title="ปิด"
              className="p-2 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
          {/* Media Player Section */}
          <div className="w-full flex justify-center bg-black/5 rounded-2xl p-2">
            <div className={`w-full ${aspect_ratio === '9:16' ? 'max-w-sm mx-auto' : 'max-w-full'}`}>
              <VideoPlayer
                mediaType={media_type}
                videoUrl={video_url}
                coverImage={displayImage}
                aspectRatio={aspect_ratio}
                title={title}
                autoplay={true}
                className="shadow-lg"
              />
            </div>
          </div>

          {/* Article Header & Metadata */}
          <div className="space-y-3">
            <h1 className="font-headline-md text-2xl md:text-3xl font-bold text-primary leading-tight">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-on-surface-variant pt-1 border-b border-surface-container pb-3">
              {author && (
                <span className="flex items-center gap-1.5 font-medium text-primary">
                  <span className="material-symbols-outlined text-base">person</span>
                  <span>{author}</span>
                </span>
              )}
              {published_at && (
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">calendar_today</span>
                  <span>
                    {new Date(published_at).toLocaleDateString('th-TH', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base">visibility</span>
                <span>{view_count.toLocaleString()} ครั้ง</span>
              </span>
            </div>
          </div>

          {/* Excerpt Lead Box */}
          {excerpt && (
            <div className="p-4 rounded-2xl bg-secondary-container/20 border-l-4 border-secondary text-primary font-medium text-sm md:text-base leading-relaxed">
              {excerpt}
            </div>
          )}

          {/* Full Content */}
          <div className="prose dark:prose-invert max-w-none text-on-surface leading-relaxed text-sm md:text-base space-y-4 font-body-md">
            {content ? (
              content.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))
            ) : (
              <p className="text-on-surface-variant italic">ไม่มีข้อมูลเนื้อหาเพิ่มเติม</p>
            )}
          </div>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="pt-4 border-t border-surface-container">
              <span className="text-xs font-semibold text-on-surface-variant block mb-2">
                คำค้น / แท็กที่เกี่ยวข้อง:
              </span>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-surface-container-high text-primary text-xs font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* External Platform Link if available */}
          {video_url && (
            <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-2xl">
                  smart_display
                </span>
                <div>
                  <h4 className="text-sm font-bold text-primary">รับชมบนแพลตฟอร์มต้นฉบับ</h4>
                  <p className="text-xs text-on-surface-variant truncate max-w-xs md:max-w-md">
                    {video_url}
                  </p>
                </div>
              </div>
              <a
                href={video_url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2 rounded-full bg-secondary text-on-secondary text-xs font-semibold hover:bg-secondary/90 transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>เปิดลิงก์ภายนอก</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          )}

          {/* Social Share Section */}
          <div className="pt-4 border-t border-surface-container flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-semibold text-on-surface-variant">
              แบ่งปันเรื่องราวนี้:
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleShareSocial('facebook')}
                className="px-3 py-1.5 rounded-full bg-[#1877F2] text-white text-xs font-medium hover:opacity-90 transition-opacity flex items-center gap-1 cursor-pointer"
              >
                <span>Facebook</span>
              </button>
              <button
                type="button"
                onClick={() => handleShareSocial('line')}
                className="px-3 py-1.5 rounded-full bg-[#06C755] text-white text-xs font-medium hover:opacity-90 transition-opacity flex items-center gap-1 cursor-pointer"
              >
                <span>LINE</span>
              </button>
              <button
                type="button"
                onClick={() => handleShareSocial('twitter')}
                className="px-3 py-1.5 rounded-full bg-black text-white text-xs font-medium hover:opacity-90 transition-opacity flex items-center gap-1 cursor-pointer"
              >
                <span>X (Twitter)</span>
              </button>
              <button
                type="button"
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-full bg-surface-container text-on-surface text-xs font-medium hover:bg-surface-container-high transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">
                  {copied ? 'check' : 'link'}
                </span>
                <span>{copied ? 'คัดลอกแล้ว' : 'คัดลอกลิงก์'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-surface-container bg-surface-container-lowest/80 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold text-xs transition-colors cursor-pointer"
          >
            ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  );
}
