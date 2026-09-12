import React from 'react';
import VideoPlayer from './VideoPlayer';

export default function NewsCard({
  news,
  onClick,
  onPlay,
  className = '',
}) {
  if (!news) return null;

  const {
    title,
    excerpt,
    category = 'ข่าวสาร',
    media_type = 'image',
    video_url = '',
    aspect_ratio = '16:9',
    cover_image,
    banner_image,
    published_at,
    view_count = 0,
    tags = [],
  } = news;

  const displayImage = cover_image || banner_image;
  const isVertical = aspect_ratio === '9:16';
  const isVideo = media_type === 'youtube' || media_type === 'tiktok' || media_type === 'video';

  const handleClick = () => {
    if (onClick) onClick(news);
  };

  const handlePlayDirect = (e) => {
    e.stopPropagation();
    if (onPlay) {
      onPlay(news);
    } else if (onClick) {
      onClick(news);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`group relative flex flex-col bg-surface-container-lowest dark:bg-surface-dim rounded-3xl overflow-hidden border border-outline-variant/30 shadow-sm hover:shadow-xl hover:border-secondary/50 transition-all duration-300 cursor-pointer ${
        isVertical ? 'row-span-2' : ''
      } ${className}`}
    >
      {/* Media Container with Aspect Ratio */}
      <div className="relative w-full overflow-hidden bg-surface-container-high">
        <VideoPlayer
          mediaType={media_type}
          videoUrl={video_url}
          coverImage={displayImage}
          aspectRatio={aspect_ratio}
          title={title}
          autoplay={false}
          showOverlayPlay={isVideo}
          onPlayClick={handlePlayDirect}
          className="rounded-none border-b border-outline-variant/20 group-hover:scale-[1.02] transition-transform duration-500"
        />

        {/* Category Chip floating on top-right */}
        <div className="absolute top-3 right-3 z-20">
          <span className="px-2.5 py-1 rounded-full bg-surface/90 dark:bg-surface-dim/90 backdrop-blur-md text-primary font-semibold text-[11px] shadow-sm border border-outline-variant/20">
            {category}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2">
              {tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] text-secondary font-medium px-2 py-0.5 rounded-md bg-secondary/10"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3 className="font-headline-sm text-base md:text-lg font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 leading-snug mb-1.5">
            {title}
          </h3>

          {/* Excerpt */}
          {excerpt && (
            <p className="font-body-md text-xs md:text-sm text-on-surface-variant line-clamp-2 leading-relaxed">
              {excerpt}
            </p>
          )}
        </div>

        {/* Footer Info & Action */}
        <div className="pt-3 border-t border-surface-container flex items-center justify-between text-xs text-on-surface-variant">
          <div className="flex items-center gap-3">
            {published_at && (
              <span className="flex items-center gap-1 font-medium">
                <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                <span>{new Date(published_at).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
              </span>
            )}
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">visibility</span>
              <span>{view_count.toLocaleString()}</span>
            </span>
          </div>

          <div className="flex items-center gap-1 text-secondary font-semibold group-hover:translate-x-1 transition-transform">
            <span>{isVideo ? 'ชมคลิป' : 'อ่านต่อ'}</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </div>
        </div>
      </div>
    </div>
  );
}
