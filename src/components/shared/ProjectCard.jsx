import React from 'react';

export default function ProjectCard({
  project,
  onClick,
  className = '',
}) {
  const {
    title,
    summary,
    category,
    cover_image,
    academic_year,
    authors = [],
    awards = [],
  } = project;

  return (
    <div
      onClick={onClick}
      className={`group flex flex-col rounded-2xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-secondary/50 transition-all duration-300 cursor-pointer ${className}`}
    >
      <div className="relative w-full h-48 overflow-hidden bg-surface-container">
        <img
          src={cover_image || 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80'}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80';
          }}
        />
        {category && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-surface/90 dark:bg-surface-dim/90 text-primary backdrop-blur-md border border-outline-variant/30">
            {category}
          </span>
        )}
        {academic_year && (
          <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-medium bg-secondary text-on-secondary shadow-2xs">
            ปี {academic_year}
          </span>
        )}
      </div>

      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <h3 className="text-base font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 mb-2">
            {title}
          </h3>

          {summary && (
            <p className="text-xs sm:text-sm text-on-surface-variant line-clamp-2 mb-3 leading-relaxed">
              {summary}
            </p>
          )}

          {authors && authors.length > 0 && (
            <div className="flex items-center gap-1.5 text-xs text-on-surface-variant mb-2">
              <span className="material-symbols-outlined text-sm text-secondary">person</span>
              <span className="truncate">
                {authors.map((a) => a.name || a).join(', ')}
              </span>
            </div>
          )}

          {awards && awards.length > 0 && (
            <div className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 font-medium">
              <span className="material-symbols-outlined text-sm">emoji_events</span>
              <span className="truncate">{awards[0]?.title || awards[0]?.name || awards[0]}</span>
            </div>
          )}
        </div>

        <div className="pt-4 mt-3 border-t border-outline-variant/20 flex items-center justify-between">
          <span className="text-xs font-semibold text-secondary group-hover:underline flex items-center gap-1">
            <span>ดูรายละเอียดผลงาน</span>
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
