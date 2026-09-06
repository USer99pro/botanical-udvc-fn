import React, { useState } from 'react';

export default function AdminLoginModal({ isOpen, onClose, onLoginSuccess, onNavigate }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const u = username.trim().toLowerCase();
    const p = password.trim();

    if (!u || !p) {
      setError('กรุณากรอกชื่อผู้ใช้งานและรหัสผ่าน');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      // Admin account
      if ((u === 'admin' && p === 'admin123') || (u === 'udvc' && p === 'udvc2024')) {
        const user = {
          username: u,
          name: 'ผู้ดูแลระบบงานสวนพฤกษศาสตร์',
          role: 'admin',
          roleLabel: 'ผู้ดูแลระบบ (Admin)',
          loggedInAt: new Date().toISOString(),
        };
        try {
          localStorage.setItem('udvc_botanical_admin', JSON.stringify(user));
        } catch {
          // ignore
        }
        if (onLoginSuccess) onLoginSuccess(user);
        if (onClose) onClose();
      } 
      // Staff / Officer account
      else if ((u === 'staff' && p === 'staff123') || (u === 'officer' && p === 'officer123')) {
        const user = {
          username: u,
          name: 'เจ้าหน้าที่งานสวนพฤกษศาสตร์',
          role: 'staff',
          roleLabel: 'เจ้าหน้าที่ (Staff)',
          loggedInAt: new Date().toISOString(),
        };
        try {
          localStorage.setItem('udvc_botanical_admin', JSON.stringify(user));
        } catch {
          // ignore
        }
        if (onLoginSuccess) onLoginSuccess(user);
        if (onClose) onClose();
      } else {
        setError('ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง (ทดสอบ: admin / admin123 หรือ staff / staff123)');
      }
    }, 400);
  };

  const handleQuickLogin = (roleType) => {
    const user = roleType === 'admin' 
      ? {
          username: 'admin',
          name: 'ผู้ดูแลระบบงานสวนพฤกษศาสตร์',
          role: 'admin',
          roleLabel: 'ผู้ดูแลระบบ (Admin)',
          loggedInAt: new Date().toISOString(),
        }
      : {
          username: 'staff',
          name: 'เจ้าหน้าที่งานสวนพฤกษศาสตร์',
          role: 'staff',
          roleLabel: 'เจ้าหน้าที่ (Staff)',
          loggedInAt: new Date().toISOString(),
        };

    try {
      localStorage.setItem('udvc_botanical_admin', JSON.stringify(user));
    } catch {
      // ignore
    }
    if (onLoginSuccess) onLoginSuccess(user);
    if (onClose) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-surface-container-lowest dark:bg-surface-dim rounded-3xl p-6 md:p-8 shadow-2xl border border-outline-variant/30 text-on-surface"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 p-2 text-on-surface-variant hover:text-primary rounded-full hover:bg-surface-container transition-colors cursor-pointer"
          aria-label="ปิด"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Icon & Title */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined text-3xl">admin_panel_settings</span>
          </div>
          <h2 className="font-headline-sm text-xl sm:text-2xl font-bold text-primary">
            เข้าสู่ระบบสำหรับผู้ดูแลระบบและเจ้าหน้าที่
          </h2>
          <p className="font-body-md text-xs text-on-surface-variant mt-1">
            งานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี
          </p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-primary/10 text-primary">
              ผู้ดูแลระบบ (Admin)
            </span>
            <span className="text-outline-variant">•</span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-secondary/15 text-secondary">
              เจ้าหน้าที่ (Staff)
            </span>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-4 p-3 rounded-xl bg-error-container/60 border border-error/30 text-on-error-container text-xs flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-error">error</span>
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">
              ชื่อผู้ใช้งาน (Username)
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">
                person
              </span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin หรือ staff"
                className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-2.5 pl-10 pr-4 text-sm font-body-md focus:border-secondary focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary/30 outline-hidden transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">
              รหัสผ่าน (Password)
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">
                lock
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-2.5 pl-10 pr-4 text-sm font-body-md focus:border-secondary focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary/30 outline-hidden transition-all"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 py-3 px-6 rounded-full bg-primary text-on-primary font-semibold text-sm hover:bg-secondary transition-all cursor-pointer shadow-sm flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isLoading ? (
              <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span className="material-symbols-outlined text-lg">login</span>
                <span>เข้าสู่ระบบ (Login)</span>
              </>
            )}
          </button>
        </form>

        {/* Register Link */}
        <div className="mt-4 text-center text-xs text-on-surface-variant">
          ยังไม่มีบัญชีผู้ใช้งาน?{' '}
          <button
            type="button"
            onClick={() => {
              if (onClose) onClose();
              if (onNavigate) onNavigate('register');
            }}
            className="text-secondary hover:text-primary font-bold underline decoration-secondary/40 underline-offset-2 transition-colors cursor-pointer ml-1"
          >
            สมัครสมาชิกใหม่ที่นี่
          </button>
        </div>

        {/* Quick Demo Access for both Admin and Staff */}
        <div className="mt-5 pt-4 border-t border-outline-variant/20">
          <p className="text-[11px] text-center text-on-surface-variant font-medium mb-3">
            ทดลองเข้าสู่ระบบด่วน (Quick Demo Access):
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleQuickLogin('admin')}
              className="py-2 px-3 rounded-xl border border-primary/30 hover:bg-primary/10 text-primary font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm">shield_person</span>
              <span>ผู้ดูแลระบบ (Admin)</span>
            </button>
            <button
              type="button"
              onClick={() => handleQuickLogin('staff')}
              className="py-2 px-3 rounded-xl border border-secondary/30 hover:bg-secondary/10 text-secondary font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm">badge</span>
              <span>เจ้าหน้าที่ (Staff)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
