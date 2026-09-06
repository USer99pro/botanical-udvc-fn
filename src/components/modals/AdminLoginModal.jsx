import React, { useState } from 'react';

export default function AdminLoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!username.trim() || !password.trim()) {
      setError('กรุณากรอกชื่อผู้ใช้งานและรหัสผ่าน');
      return;
    }

    setIsLoading(true);

    // Verify admin credentials
    setTimeout(() => {
      setIsLoading(false);
      // Valid credentials: admin / admin123 or udvc / udvc2024
      if (
        (username.trim().toLowerCase() === 'admin' && password.trim() === 'admin123') ||
        (username.trim().toLowerCase() === 'udvc' && password.trim() === 'udvc2024')
      ) {
        const user = {
          username: username.trim(),
          name: 'ผู้ดูแลระบบงานสวนพฤกษศาสตร์',
          role: 'admin',
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
        setError('ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง (ทดสอบ: admin / admin123)');
      }
    }, 400);
  };

  const handleQuickDemoLogin = () => {
    const user = {
      username: 'admin',
      name: 'ผู้ดูแลระบบงานสวนพฤกษศาสตร์',
      role: 'admin',
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
          <h2 className="font-headline-sm text-2xl font-bold text-primary">
            เข้าสู่ระบบผู้ดูแลระบบ
          </h2>
          <p className="font-body-md text-xs text-on-surface-variant mt-1">
            งานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี
          </p>
          <p className="text-[11px] text-secondary font-medium mt-0.5">
            เฉพาะเจ้าหน้าที่ที่ได้รับมอบหมายเพื่อจัดการฐานข้อมูล ก.7-003
          </p>
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
                placeholder="admin"
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
            className="w-full mt-2 py-3 px-6 rounded-xl bg-primary text-on-primary font-semibold text-sm hover:bg-secondary transition-colors duration-200 cursor-pointer shadow-sm flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <span className="material-symbols-outlined animate-spin text-lg">progress_activity</span>
                <span>กำลังเข้าสู่ระบบ...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-lg">login</span>
                <span>เข้าสู่ระบบจัดการ</span>
              </>
            )}
          </button>
        </form>

        {/* Quick Demo Login Option */}
        <div className="mt-6 pt-4 border-t border-outline-variant/20 text-center">
          <p className="text-xs text-on-surface-variant mb-2.5">
            สำหรับทดสอบระบบ (Demo Admin Access):
          </p>
          <button
            type="button"
            onClick={handleQuickDemoLogin}
            className="w-full py-2 px-4 rounded-xl border border-secondary/40 bg-secondary-container/40 hover:bg-secondary-container text-on-secondary-container font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-base text-secondary">verified_user</span>
            <span>เข้าสู่ระบบทันที (โหมดทดสอบ: admin / admin123)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
