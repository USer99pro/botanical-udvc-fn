import React from 'react';

export default function Breadcrumb({ items = [], onNavigate }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="w-full py-3">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm text-on-surface-variant">
        <li>
          <button
            type="button"
            onClick={() => onNavigate && onNavigate('home')}
            className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-base text-secondary">home</span>
            <span>หน้าแรก</span>
          </button>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <li className="text-outline-variant select-none">/</li>
              <li>
                {isLast || !item.pageId ? (
                  <span className="font-semibold text-primary" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => onNavigate && onNavigate(item.pageId)}
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
