import React, { useState } from 'react';
import { useSearch } from '../../services/hooks';

export default function SearchOverlayModal({ isOpen, onClose, onNavigate, onSelectPlant }) {
  const [query, setQuery] = useState('');
  const { data: searchResults, loading } = useSearch(query, { minChars: 1, limit: 8 });

  if (!isOpen) return null;

  const handlePlantClick = (plantId) => {
    if (onSelectPlant) onSelectPlant(plantId);
    else if (onNavigate) onNavigate('plantDetail');
    if (onClose) onClose();
  };

  const handleCategoryClick = (_catName) => {
    if (onNavigate) onNavigate('categories');
    if (onClose) onClose();
  };

  const plants = searchResults?.plants || [];
  const facts = searchResults?.facts || [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-surface-container-highest/95 backdrop-blur-md transition-opacity duration-300 flex flex-col min-h-screen">
      {/* Background decoration */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuA_zrXWdsRoOu0oHScbs180h-ZjqKkFrcz7dcWIXJWae68ajHCZZnuJJ7OBcccmtw0Ym3iN4wbjKXnB7-zPMn4zX2hZwf5J-osiJSarp6-Cp9FCNZ9Cx3nXS5eORm5JpXnWuvUpkYWBC7v90UhidvGk_wGXY1rC2yLavUINFvTMEGkhktPg_X5QtoeSG9eEn5dM6jJnb2sbxGfYA7vjR2JzskEMX_g8JolJHB-Nx1a4PN0wxnzYY3jATw\')' }}
      />

      {/* Header / Search Input Area */}
      <header className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 flex flex-col items-center">
        <div className="w-full flex justify-between items-center mb-6">
          <span className="font-display-lg text-2xl text-primary font-bold">สืบค้นข้อมูลพรรณไม้และสารสนเทศ</span>
          <button 
            type="button"
            aria-label="Close search" 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant flex items-center justify-center bg-surface shadow-sm cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        <div className="w-full max-w-3xl relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-3xl text-secondary/70 pointer-events-none">
            search
          </span>
          <input 
            autoFocus 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-surface border-0 border-b-2 border-secondary focus:border-primary focus:ring-0 text-xl font-body-lg text-primary placeholder-on-surface-variant/40 pl-14 pr-10 py-4 transition-colors rounded-t-xl shadow-md" 
            placeholder="พิมพ์ชื่อพรรณไม้, วงศ์, รหัสพรรณไม้, หรือเกร็ดความรู้..." 
            type="text"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary"
            >
              <span className="material-symbols-outlined text-xl">cancel</span>
            </button>
          )}
        </div>
      </header>

      {/* Search Results / Suggestions Content */}
      <main className="relative z-10 flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-12 grid grid-cols-1 md:grid-cols-12 gap-gutter overflow-y-auto">
        {/* Results Column */}
        <section className="col-span-1 md:col-span-8 flex flex-col gap-6">
          {query.trim() ? (
            <div className="bg-surface/90 p-6 rounded-2xl border border-outline-variant/30 shadow-sm space-y-4">
              <div className="flex justify-between items-center border-b border-surface-variant pb-3">
                <h3 className="font-label-md text-sm font-bold text-primary uppercase tracking-wider">
                  ผลการสืบค้น ({plants.length + facts.length} รายการ)
                </h3>
                {loading && (
                  <span className="text-xs text-secondary flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm animate-spin">sync</span>
                    กำลังค้นหา...
                  </span>
                )}
              </div>

              {plants.length > 0 ? (
                <div className="space-y-3">
                  {plants.map((plant) => (
                    <div
                      key={plant.id}
                      onClick={() => handlePlantClick(plant.id)}
                      className="p-3.5 rounded-xl hover:bg-surface-container transition-all cursor-pointer border border-outline-variant/20 flex items-center gap-4 group"
                    >
                      <img 
                        src={plant.imageUrl} 
                        alt={plant.nameTh}
                        className="w-14 h-14 rounded-lg object-cover shrink-0 group-hover:scale-105 transition-transform" 
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-semibold text-primary text-base group-hover:text-secondary transition-colors truncate">
                            {plant.nameTh}
                          </span>
                          <span className="text-[11px] font-mono text-secondary px-2 py-0.5 rounded bg-secondary-container/60">
                            {plant.plantCode}
                          </span>
                        </div>
                        <p className="text-xs text-on-surface-variant italic truncate">{plant.scientificName} • {plant.family}</p>
                        <p className="text-xs text-on-surface-variant/80 line-clamp-1 mt-0.5">{plant.description}</p>
                      </div>
                      <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                        arrow_forward
                      </span>
                    </div>
                  ))}
                </div>
              ) : !loading ? (
                <div className="py-8 text-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-4xl opacity-40 mb-2">search_off</span>
                  <p className="text-sm">ไม่พบพรรณไม้ที่ตรงกับคำค้นหา "{query}"</p>
                </div>
              ) : null}

              {/* Facts Match */}
              {facts.length > 0 && (
                <div className="pt-4 border-t border-outline-variant/20">
                  <h4 className="text-xs font-bold text-secondary uppercase mb-3">เกร็ดความรู้ที่เกี่ยวข้อง</h4>
                  <div className="space-y-2">
                    {facts.map((f) => (
                      <div key={f.id} className="p-3 bg-surface-container-low rounded-xl text-xs space-y-1">
                        <span className="font-bold text-primary block">{f.title}</span>
                        <p className="text-on-surface-variant">{f.fact}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Trending Searches */
            <div className="bg-surface/90 p-6 rounded-2xl border border-outline-variant/30 shadow-sm">
              <h3 className="font-label-md text-sm font-bold text-tertiary uppercase tracking-widest mb-4 border-b border-surface-variant pb-2">
                คำค้นหายอดนิยมในสวนพฤกษศาสตร์
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { name: 'Monstera Deliciosa (พลูฉีก)', id: 'monstera-deliciosa' },
                  { name: 'กล้วยไม้ช้างกระ', id: 'rhynchostylis-gigantea' },
                  { name: 'เฟินข้าหลวงหลังลาย', id: 'asplenium-nidus' },
                  { name: 'ว่านหางจระเข้', id: 'aloe-vera' },
                  { name: 'พญาสัตบรรณ (ตีนเป็ด)', id: 'alstonia-scholaris' },
                  { name: 'ขมิ้นชัน', id: 'curcuma-longa' },
                ].map((item, idx) => (
                  <li key={idx}>
                    <button 
                      type="button"
                      onClick={() => handlePlantClick(item.id)}
                      className="w-full text-left p-3 rounded-xl hover:bg-surface-container transition-colors flex items-center gap-3 text-sm text-on-surface cursor-pointer border border-outline-variant/10"
                    >
                      <span className="material-symbols-outlined text-secondary text-base">spa</span>
                      <span className="font-medium truncate">{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Quick Categories Column */}
        <section className="col-span-1 md:col-span-4 flex flex-col gap-6">
          <div className="bg-surface/90 p-6 rounded-2xl border border-outline-variant/30 shadow-sm">
            <h3 className="font-label-md text-sm font-bold text-tertiary uppercase tracking-widest mb-4 border-b border-surface-variant pb-2">
              หมวดหมู่พรรณไม้
            </h3>
            <div className="flex flex-wrap gap-2">
              {['พืชดอก', 'ไม้ใบประดับ', 'พืชสมุนไพร', 'พืชอวบน้ำ', 'ป่าเฟิน', 'ไม้ยืนต้น'].map((cat, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleCategoryClick(cat)}
                  className="px-3.5 py-1.5 rounded-full bg-surface-container-low hover:bg-secondary hover:text-white text-on-surface-variant text-xs font-semibold transition-all cursor-pointer border border-outline-variant/20"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
