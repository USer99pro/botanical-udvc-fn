import React from 'react';

export default function ContentCard({
  title,
  subtitle,
  description,
  image,
  icon = 'eco',
  badge,
  tags = [],
  onClick,
  footer,
  className = '',
}) {
  return (
    <div
      onClick={onClick}
      className={`group relative flex flex-col rounded-2xl bg-surface-container-lowest/90 dark:bg-surface-dim/90 border border-outline-variant/30 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-secondary/50 ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {image && (
        <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-surface-container">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80';
            }}
          />
          {badge && (
            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-surface/90 dark:bg-surface-dim/90 text-primary backdrop-blur-md shadow-xs border border-outline-variant/30">
              {badge}
            </span>
          )}
        </div>
      )}

      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          {!image && badge && (
            <span className="inline-block mb-2 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-secondary/15 text-secondary border border-secondary/20">
              {badge}
            </span>
          )}

          {subtitle && (
            <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">
              {subtitle}
            </p>
          )}

          <div className="flex items-start gap-2.5 mb-2">
            {!image && icon && (
              <div className="w-8 h-8 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-lg">{icon}</span>
              </div>
            )}
            <h3 className="text-base sm:text-lg font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
              {title}
            </h3>
          </div>

          {description && (
            <p className="text-xs sm:text-sm text-on-surface-variant line-clamp-3 leading-relaxed mb-3">
              {description}
            </p>
          )}

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-surface-container text-on-surface-variant"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {footer && <div className="pt-3 border-t border-outline-variant/20">{footer}</div>}
      </div>
    </div>
  );
}
