import React from 'react';

export default function SearchFilter({
  searchQuery = '',
  onSearchChange,
  placeholder = 'ค้นหาข้อมูล...',
  categories = [],
  selectedCategory = 'all',
  onCategoryChange,
  extraFilters,
  className = '',
}) {
  return (
    <div className={`flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between bg-surface-container-lowest dark:bg-surface-dim p-4 rounded-2xl border border-outline-variant/30 shadow-2xs mb-6 ${className}`}>
      {/* Search Input */}
      <div className="relative flex-1 min-w-[240px]">
        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl pointer-events-none">
          search
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-surface-container border border-outline-variant/30 text-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange && onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
        )}
      </div>

      {/* Category Filter Pills / Dropdown */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.length > 0 && (
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full">
            <button
              type="button"
              onClick={() => onCategoryChange && onCategoryChange('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-secondary text-on-secondary shadow-2xs'
                  : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'
              }`}
            >
              ทั้งหมด
            </button>
            {categories.map((cat) => {
              const catId = typeof cat === 'string' ? cat : cat.id || cat.value;
              const catLabel = typeof cat === 'string' ? cat : cat.name || cat.label;
              const isSelected = selectedCategory === catId;
              return (
                <button
                  key={catId}
                  type="button"
                  onClick={() => onCategoryChange && onCategoryChange(catId)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-secondary text-on-secondary shadow-2xs'
                      : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'
                  }`}
                >
                  {catLabel}
                </button>
              );
            })}
          </div>
        )}

        {extraFilters}
      </div>
    </div>
  );
}
