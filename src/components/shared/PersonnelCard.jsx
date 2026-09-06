import React from 'react';

export default function PersonnelCard({
  person,
  className = '',
}) {
  const {
    name,
    position,
    role,
    department,
    image,
    email,
    phone,
    badge,
  } = person;

  return (
    <div className={`group flex flex-col items-center text-center p-6 rounded-2xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 hover:border-secondary/50 hover:shadow-lg transition-all duration-300 ${className}`}>
      <div className="relative mb-4">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-secondary/30 p-1 bg-surface-container">
          <img
            src={image || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
            }}
          />
        </div>
        {badge && (
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-secondary text-on-secondary whitespace-nowrap shadow-xs">
            {badge}
          </span>
        )}
      </div>

      <h3 className="text-base font-bold text-primary group-hover:text-secondary transition-colors mb-1">
        {name}
      </h3>

      <p className="text-xs sm:text-sm font-semibold text-secondary mb-1">
        {position}
      </p>

      {role && (
        <p className="text-xs text-on-surface-variant font-medium mb-1">
          {role}
        </p>
      )}

      {department && (
        <p className="text-xs text-on-surface-variant/80 mb-3">
          {department}
        </p>
      )}

      {(email || phone) && (
        <div className="pt-3 mt-auto border-t border-outline-variant/20 w-full flex flex-col gap-1 text-xs text-on-surface-variant">
          {email && (
            <div className="flex items-center justify-center gap-1.5 truncate">
              <span className="material-symbols-outlined text-sm text-secondary">mail</span>
              <span className="truncate">{email}</span>
            </div>
          )}
          {phone && (
            <div className="flex items-center justify-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-secondary">call</span>
              <span>{phone}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
