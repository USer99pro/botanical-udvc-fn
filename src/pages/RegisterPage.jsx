import React, { useState } from 'react';

export default function RegisterPage({ onNavigate }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      handleNav('home');
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-background text-on-background">
      <main className="min-h-screen flex flex-col md:flex-row">
        {/* Left Pane: Immersive Imagery */}
        <section className="hidden md:flex md:w-1/2 relative bg-surface-container-low overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuC9xc-LVjPHfJQSa1A2n8e8KSOjaFnHtJeTRn-7XCOKv7egmdWuzDgNr61OjwVjb0LX_FSR4vKNb0bJBCWwgcUAkm8PJWr9sgYsKjxAp_v8dWogPU65dpekH99RTPEgoWx3ZuqjuUuiXGOj7PvDOml81sKJerL0gIF5xb_-IAXf-psV7IR5WFOOmQ_iSIaaz2OY0AsHG_MT_ye9EB3eVe0icCLhF647mVjv5ioBfUo7NoAFcju3IlVHKQ\')' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
          <div className="relative z-10 mt-auto mb-16 ml-16 max-w-md p-8 bg-surface/30 backdrop-blur-md rounded-2xl border border-surface/50 shadow-lg">
            <span className="material-symbols-outlined text-surface mb-4 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_florist</span>
            <h2 className="font-headline-sm text-surface mb-2 text-white">เข้าถึงธรรมชาติอย่างลึกซึ้ง</h2>
            <p className="font-body-md text-surface/90 text-white/90">
              ร่วมเป็นส่วนหนึ่งของชุมชนงานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี
            </p>
          </div>
        </section>

        {/* Right Pane: Registration Form Canvas */}
        <section className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 min-h-screen bg-surface relative z-10">
          <div className="w-full max-w-md">
            {/* Header Brand */}
            <div className="flex items-center justify-between mb-8 text-primary">
              <button 
                type="button"
                onClick={() => handleNav('home')}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <span className="material-symbols-outlined text-3xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                <span className="font-headline-sm tracking-tight">Verdant Wisdom</span>
              </button>
              <button
                type="button"
                onClick={() => handleNav('home')}
                className="text-on-surface-variant hover:text-primary text-sm flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">arrow_back</span>
                <span>หน้าหลัก</span>
              </button>
            </div>

            {/* Form Header */}
            <div className="mb-8">
              <h1 className="font-display-lg-mobile md:font-display-lg text-primary mb-2">สมัครสมาชิก</h1>
              <p className="font-body-lg text-on-surface-variant">สร้างบัญชีเพื่อเริ่มต้นการเรียนรู้และเข้าถึงข้อมูลพรรณไม้</p>
            </div>

            {isSuccess ? (
              <div className="p-6 bg-secondary-container text-on-secondary-container rounded-2xl space-y-2 text-center animate-fade-in shadow-sm">
                <span className="material-symbols-outlined text-4xl">how_to_reg</span>
                <h3 className="font-headline-sm text-lg font-bold">ลงทะเบียนสมาชิกสำเร็จ!</h3>
                <p className="text-sm">ยินดีต้อนรับสู่ระบบงานสวนพฤกษศาสตร์ กำลังนำท่านเข้าสู่หน้าหลัก...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Input: Name */}
                <div>
                  <label className="font-label-sm text-on-surface block mb-2" htmlFor="name">ชื่อ-นามสกุล</label>
                  <input 
                    id="name" 
                    required 
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="เช่น สมชาย พฤกษศาสตร์"
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3 px-4 text-body-md text-on-surface focus:ring-0 focus:border-secondary transition-colors"
                  />
                </div>

                {/* Input: Email */}
                <div>
                  <label className="font-label-sm text-on-surface block mb-2" htmlFor="email">อีเมล</label>
                  <input 
                    id="email" 
                    required 
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3 px-4 text-body-md text-on-surface focus:ring-0 focus:border-secondary transition-colors"
                  />
                </div>

                {/* Input: Password */}
                <div>
                  <label className="font-label-sm text-on-surface block mb-2" htmlFor="password">รหัสผ่าน</label>
                  <input 
                    id="password" 
                    required 
                    type="password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    placeholder="••••••••"
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl py-3 px-4 text-body-md text-on-surface focus:ring-0 focus:border-secondary transition-colors"
                  />
                </div>

                {/* Action Area */}
                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full bg-primary text-on-primary font-label-md py-4 px-6 rounded-full hover:bg-secondary transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <span>ลงทะเบียนสมาชิก</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </form>
            )}

            {/* Footer Switcher */}
            <div className="mt-8 text-center border-t border-outline-variant/30 pt-6">
              <p className="font-body-md text-on-surface-variant">
                มีบัญชีผู้ใช้แล้ว?{' '}
                <button 
                  type="button" 
                  onClick={() => handleNav('dashboard')}
                  className="font-label-md text-secondary hover:text-primary underline decoration-secondary/30 underline-offset-4 transition-colors cursor-pointer"
                >
                  เข้าสู่ระบบเจ้าหน้าที่
                </button>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
