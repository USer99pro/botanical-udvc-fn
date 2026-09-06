import React from 'react';

export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  className = '',
}) {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav aria-label="Pagination" className={`flex items-center justify-center gap-1.5 py-6 ${className}`}>
      {/* Previous Button */}
      <button
        type="button"
        disabled={currentPage <= 1}
        onClick={() => onPageChange && onPageChange(currentPage - 1)}
        className="w-9 h-9 rounded-xl flex items-center justify-center border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:bg-surface-container disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer"
        aria-label="Previous Page"
      >
        <span className="material-symbols-outlined text-lg">chevron_left</span>
      </button>

      {/* Page Numbers */}
      {pages.map((p) => {
        const isCurrent = p === currentPage;
        return (
          <button
            key={p}
            type="button"
            onClick={() => onPageChange && onPageChange(p)}
            className={`w-9 h-9 rounded-xl text-xs font-semibold flex items-center justify-center transition-all cursor-pointer ${
              isCurrent
                ? 'bg-secondary text-on-secondary shadow-2xs'
                : 'border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container'
            }`}
            aria-current={isCurrent ? 'page' : undefined}
          >
            {p}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        type="button"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange && onPageChange(currentPage + 1)}
        className="w-9 h-9 rounded-xl flex items-center justify-center border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:bg-surface-container disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer"
        aria-label="Next Page"
      >
        <span className="material-symbols-outlined text-lg">chevron_right</span>
      </button>
    </nav>
  );
}
