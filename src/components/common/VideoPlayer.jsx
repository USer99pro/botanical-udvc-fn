import React, { useState } from 'react';
import { getAspectRatioClass, getTikTokId, getYouTubeId } from './videoUtils';

/**
 * Multi-platform responsive Video & Banner Player
 * Supports:
 * - YouTube standard & shorts (16:9, 9:16, 4:3)
 * - TikTok embedded video (9:16)
 * - Direct MP4 / WebM video
 * - Banner / Image display
 */
export default function VideoPlayer({
  mediaType = 'image',
  videoUrl = '',
  coverImage = '',
  aspectRatio = '16:9',
  title = '',
  autoplay = false,
  controls = true,
  className = '',
  showOverlayPlay = false,
  onPlayClick = null,
}) {
  const [isPlaying, setIsPlaying] = useState(autoplay);

  const aspectClass = getAspectRatioClass(aspectRatio);
  const isYouTube = mediaType === 'youtube' || videoUrl?.includes('youtube.com') || videoUrl?.includes('youtu.be');
  const isTikTok = mediaType === 'tiktok' || videoUrl?.includes('tiktok.com');
  const isDirectVideo = mediaType === 'video' || (videoUrl && /\.(mp4|webm|ogg)(\?.*)?$/i.test(videoUrl));

  const ytId = isYouTube ? getYouTubeId(videoUrl) : null;
  const tikTokId = isTikTok ? getTikTokId(videoUrl) : null;

  const handleStartPlay = (e) => {
    if (onPlayClick) {
      onPlayClick(e);
      return;
    }
    setIsPlaying(true);
  };

  // Fallback image if cover is missing
  const displayImage = coverImage || (ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200&auto=format&fit=crop');

  return (
    <div
      className={`relative w-full ${aspectClass} overflow-hidden rounded-2xl bg-surface-container-high shadow-md transition-all ${className}`}
    >
      {/* ─── YOUTUBE PLAYER ────────────────────────────────────────── */}
      {isYouTube && ytId && isPlaying ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title || 'YouTube video player'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      ) : isTikTok && isPlaying ? (
        /* ─── TIKTOK PLAYER EMBED ──────────────────────────────────── */
        <div className="absolute inset-0 w-full h-full bg-black flex items-center justify-center">
          {tikTokId ? (
            <iframe
              src={`https://www.tiktok.com/embed/v2/${tikTokId}`}
              title={title || 'TikTok video player'}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-6 text-center text-white space-y-3">
              <span className="material-symbols-outlined text-5xl text-pink-500">smart_display</span>
              <p className="text-sm font-medium">เปิดชมคลิป TikTok บนเบราว์เซอร์</p>
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white text-xs font-semibold rounded-full shadow-md transition-colors"
              >
                ดูบน TikTok Official
              </a>
            </div>
          )}
        </div>
      ) : isDirectVideo && isPlaying ? (
        /* ─── DIRECT HTML5 VIDEO ──────────────────────────────────── */
        <video
          src={videoUrl}
          controls={controls}
          autoPlay
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        /* ─── PREVIEW / BANNER / COVER MODE ───────────────────────── */
        <div className="absolute inset-0 w-full h-full group">
          <img
            src={displayImage}
            alt={title || 'Media thumbnail'}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Aspect Ratio Badge & Platform Badge */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            {isYouTube && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-600/90 text-white text-[11px] font-semibold backdrop-blur-md shadow-sm">
                <span className="material-symbols-outlined text-[14px]">play_circle</span>
                <span>{aspectRatio === '9:16' ? 'YouTube Shorts' : 'YouTube'}</span>
              </span>
            )}
            {isTikTok && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/85 text-white border border-pink-500/50 text-[11px] font-semibold backdrop-blur-md shadow-sm">
                <span className="material-symbols-outlined text-[14px] text-pink-400">music_note</span>
                <span>TikTok</span>
              </span>
            )}
            {!isYouTube && !isTikTok && mediaType === 'banner' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/80 text-white text-[11px] font-semibold backdrop-blur-md shadow-sm">
                <span className="material-symbols-outlined text-[14px]">photo_camera</span>
                <span>แบนเนอร์</span>
              </span>
            )}

            {/* Aspect Ratio Pill */}
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-mono tracking-wider backdrop-blur-md border border-white/30">
              {aspectRatio}
            </span>
          </div>

          {/* Play Overlay Button for Videos */}
          {(isYouTube || isTikTok || isDirectVideo || showOverlayPlay) && (
            <button
              type="button"
              onClick={handleStartPlay}
              aria-label={`เล่นวิดีโอ: ${title}`}
              className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer group/btn"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-surface-container-lowest/90 text-primary shadow-2xl flex items-center justify-center transition-all duration-300 transform group-hover/btn:scale-110 group-hover/btn:bg-secondary group-hover/btn:text-white">
                <span className="material-symbols-outlined text-3xl md:text-4xl translate-x-0.5">
                  play_arrow
                </span>
              </div>
            </button>
          )}

          {/* Caption Overlay */}
          {title && (
            <div className="absolute bottom-0 left-0 right-0 p-4 z-10 pointer-events-none">
              <p className="text-white text-xs md:text-sm font-medium line-clamp-2 drop-shadow-md">
                {title}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
