import React from 'react';

export default function PageHeader({
  title,
  subtitle,
  description,
  badge,
  icon = 'spa',
  children,
  className = '',
}) {
  return (
    <div className={`relative overflow-hidden rounded-3xl bg-linear-to-br from-primary/10 via-surface-container/60 to-secondary/10 dark:from-primary/20 dark:via-surface-container-high/40 dark:to-secondary/20 p-6 sm:p-8 md:p-10 border border-outline-variant/30 shadow-xs mb-8 ${className}`}>
      {/* Decorative botanical leaf pattern / blur */}
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-secondary/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-primary/10 blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-3xl sm:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              {icon}
            </span>
          </div>

          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tight">
                {title}
              </h1>
              {badge && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-secondary/15 text-secondary border border-secondary/20">
                  {badge}
                </span>
              )}
            </div>

            {subtitle && (
              <p className="text-xs sm:text-sm font-semibold text-secondary tracking-wide uppercase">
                {subtitle}
              </p>
            )}

            {description && (
              <p className="text-sm sm:text-base text-on-surface-variant max-w-3xl leading-relaxed pt-1">
                {description}
              </p>
            )}
          </div>
        </div>

        {children && (
          <div className="shrink-0 flex items-center gap-3">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
