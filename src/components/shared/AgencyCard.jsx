import React from 'react';

export default function AgencyCard({
  agency,
  className = '',
}) {
  const {
    name,
    description,
    logo,
    website,
    phone,
    email,
    category,
  } = agency;

  return (
    <div className={`group flex flex-col p-6 rounded-2xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 hover:border-secondary/50 hover:shadow-lg transition-all duration-300 ${className}`}>
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 rounded-2xl bg-surface-container p-2 flex items-center justify-center shrink-0 border border-outline-variant/20 group-hover:scale-105 transition-transform">
          {logo ? (
            <img
              src={logo}
              alt={name}
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=200&q=80';
              }}
            />
          ) : (
            <span className="material-symbols-outlined text-3xl text-secondary">hub</span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          {category && (
            <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold bg-secondary/15 text-secondary mb-1">
              {category}
            </span>
          )}
          <h3 className="text-base font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
            {name}
          </h3>
        </div>
      </div>

      {description && (
        <p className="text-xs sm:text-sm text-on-surface-variant line-clamp-3 leading-relaxed mb-4">
          {description}
        </p>
      )}

      <div className="pt-3 mt-auto border-t border-outline-variant/20 space-y-2 text-xs text-on-surface-variant">
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary hover:underline truncate"
          >
            <span className="material-symbols-outlined text-sm">language</span>
            <span className="truncate">{website.replace(/^https?:\/\//, '')}</span>
            <span className="material-symbols-outlined text-xs">open_in_new</span>
          </a>
        )}
        {phone && (
          <div className="flex items-center gap-2 truncate">
            <span className="material-symbols-outlined text-sm text-secondary">call</span>
            <span>{phone}</span>
          </div>
        )}
        {email && (
          <div className="flex items-center gap-2 truncate">
            <span className="material-symbols-outlined text-sm text-secondary">mail</span>
            <span className="truncate">{email}</span>
          </div>
        )}
      </div>
    </div>
  );
}
