import React from 'react';

export default function SectionHeader({
  title,
  subtitle,
  icon,
  badge,
  action,
  className = '',
}) {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 ${className}`}>
      <div className="space-y-1">
        {subtitle && (
          <span className="text-xs font-semibold text-secondary uppercase tracking-wider block">
            {subtitle}
          </span>
        )}
        <div className="flex items-center gap-2.5">
          {icon && (
            <span className="material-symbols-outlined text-2xl text-secondary">
              {icon}
            </span>
          )}
          <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
            {title}
          </h2>
          {badge && (
            <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-secondary/15 text-secondary">
              {badge}
            </span>
          )}
        </div>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
