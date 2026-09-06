import React from 'react';

export default function Timeline({ items = [], className = '' }) {
  if (!items || items.length === 0) return null;

  return (
    <div className={`relative border-l-2 border-secondary/30 ml-4 sm:ml-8 space-y-8 sm:space-y-12 py-4 ${className}`}>
      {items.map((item, index) => {
        const { year, title, description, image, highlight } = item;
        return (
          <div key={index} className="relative pl-6 sm:pl-8 group">
            {/* Timeline Dot */}
            <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
              highlight
                ? 'bg-secondary border-secondary ring-4 ring-secondary/20'
                : 'bg-surface border-secondary group-hover:bg-secondary'
            }`} />

            <div className="bg-surface-container-lowest dark:bg-surface-dim rounded-2xl p-5 sm:p-6 border border-outline-variant/30 hover:border-secondary/40 hover:shadow-md transition-all">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-secondary/15 text-secondary border border-secondary/20">
                  {year}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                  {title}
                </h3>
              </div>

              {description && (
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-3">
                  {description}
                </p>
              )}

              {image && (
                <div className="mt-3 rounded-xl overflow-hidden max-w-md max-h-56 bg-surface-container">
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
