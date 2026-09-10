import React, { useState } from 'react';
import { login } from '../../services/api';

export default function AdminLoginModal({ isOpen, onClose, onLoginSuccess, onNavigate }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const u = username.trim();
    const p = password.trim();

    if (!u || !p) {
      setError('กรุณากรอกชื่อผู้ใช้งานและรหัสผ่าน');
      return;
    }

    setIsLoading(true);
    const result = await login({
      email: u.includes('@') ? u : undefined,
      username: u,
      password: p,
    });
    setIsLoading(false);

    if (result.error || !result.data?.user) {
      setError(result.error || 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง');
      return;
    }

    const user = {
      ...result.data.user,
      username: result.data.user.email || u,
      role: String(result.data.user.role || 'Viewer').toLowerCase(),
      roleLabel: result.data.user.role || 'สมาชิก',
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
      role="presentation"
    >
      <div
        className="relative w-full max-w-md bg-surface-container-lowest dark:bg-surface-dim rounded-3xl p-6 md:p-8 shadow-2xl border border-outline-variant/30 text-on-surface"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="admin-login-title"
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

        <div className="mb-6 text-center">
          <h2 id="admin-login-title" className="font-headline-sm text-xl sm:text-2xl font-bold text-primary">
            เข้าสู่ระบบ
          </h2>
          <p className="font-body-md text-xs text-on-surface-variant mt-1">
            สำหรับผู้ดูแลระบบและเจ้าหน้าที่งานสวนพฤกษศาสตร์โรงเรียน
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div
            className="mb-4 flex items-center gap-2 rounded-xl border border-error/30 bg-error-container/60 p-3 text-xs text-on-error-container"
            role="alert"
          >
            <span className="material-symbols-outlined text-[18px] text-error">error</span>
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="admin-login-username" className="block text-xs font-semibold text-on-surface-variant mb-1.5">
              ชื่อผู้ใช้งาน (Username)
            </label>
            <div className="relative">
              <span className="material-symbols-outlined pointer-events-none absolute inset-y-0 left-3.5 flex items-center text-lg leading-none text-on-surface-variant">
                person
              </span>
              <input
                id="admin-login-username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="อีเมล หรือชื่อผู้ใช้"
                autoComplete="username"
                aria-invalid={Boolean(error)}
                className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-2.5 pl-10 pr-4 text-sm font-body-md focus:border-secondary focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary/30 outline-hidden transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="admin-login-password" className="block text-xs font-semibold text-on-surface-variant mb-1.5">
              รหัสผ่าน (Password)
            </label>
            <div className="relative">
              <span className="material-symbols-outlined pointer-events-none absolute inset-y-0 left-3.5 flex items-center text-lg leading-none text-on-surface-variant">
                lock
              </span>
              <input
                id="admin-login-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
                className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-2.5 pl-10 pr-4 text-sm font-body-md focus:border-secondary focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary/30 outline-hidden transition-all material-symbols-outlined text-lg"
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
      </div>
    </div>
  );
}
