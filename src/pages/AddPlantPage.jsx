import React, { useState } from 'react';
import { createPlant } from '../services/api';
import Navbar from '../components/common/Navbar';

export default function AddPlantPage({ onNavigate, onSelectPlant }) {
  const [formData, setFormData] = useState({
    plantNameTh: '',
    scientificName: '',
    commonName: '',
    family: '',
    plantCode: '',
    category: 'flowering',
    description: '',
    sunlight: 'indirect',
    water: 'moderate',
    location: 'โซนเรือนกระจก A (พืชศึกษา)',
    uses: '',
    facts: '',
    imageUrl: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      nameTh: formData.plantNameTh,
      scientificName: formData.scientificName || 'Botanical sp.',
      commonName: formData.commonName,
      family: formData.family || 'Plantae',
      plantCode: formData.plantCode || `7-41000-001/${String(Date.now()).slice(-2)}`,
      category: formData.category,
      categoryLabel: formData.category === 'flowering' ? 'พืชดอก' : formData.category === 'tropical' ? 'พืชใบประดับ & เขตร้อน' : formData.category === 'succulents' ? 'พืชอวบน้ำ' : formData.category === 'herbs' ? 'พืชสมุนไพร' : 'ป่าเฟิน & มอส',
      description: formData.description || 'พรรณไม้ที่ได้รับการบันทึกลงสู่ระบบฐานข้อมูลสวนพฤกษศาสตร์โรงเรียน UDVC',
      sunlight: formData.sunlight,
      water: formData.water,
      location: formData.location,
      zone: formData.location,
      uses: formData.uses,
      botanicalFacts: formData.facts ? [formData.facts] : ['ได้รับการบันทึกและขึ้นทะเบียนตามองค์ประกอบที่ 1 งานสวนพฤกษศาสตร์โรงเรียน'],
      imageUrl: formData.imageUrl || 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaJcrAikIfS1VMetS8YxJfAvgEBPm4nEyJHpvQ_5paM1Ff5IuUtghzRCQkNKR3Cd6OeLyflgvy6r-c3A-IX-LtMKFhDK90ANqKpjkU5vpChFOFrp6h1q9Eg1Dbc-87sZxYYdkOybKpiwXZ4ElntwMhbtVh3hQHKJAX_bE6XlRVjK_YLakGIbZhDan4mb6LxvtgXDOkx72o5WehClXGfNTsNKCRMU2-VGpGkvp9qL7J0ykHo-c6wlXKQw'
    };

    const res = await createPlant(payload);
    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      if (res.data?.id && onSelectPlant) {
        onSelectPlant(res.data.id);
      } else {
        handleNav('dashboard');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-on-background">
      {/* Main Content Canvas */}
      <main className="flex-grow pt-8 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full pb-section-gap">
        {/* Header */}
        <header className="mb-8">
          <span className="font-label-sm text-secondary uppercase tracking-widest block mb-1 font-semibold">
            ระบบบันทึกข้อมูลพฤกษศาสตร์
          </span>
          <h1 className="font-display-lg text-3xl md:text-4xl text-primary mb-2">
            เพิ่มข้อมูลพรรณไม้ (ก.7-003)
          </h1>
          <p className="font-body-lg text-sm text-on-surface-variant max-w-2xl">
            กรอกข้อมูลรายละเอียดของพรรณไม้ใหม่เพื่อเพิ่มเข้าสู่ระบบฐานข้อมูล Botanical Gardens และเอกสาร ก.7-003
          </p>
        </header>

        {isSuccess && (
          <div className="mb-8 p-6 bg-secondary-container text-on-secondary-container rounded-2xl flex items-center gap-4 shadow-sm animate-fade-in">
            <span className="material-symbols-outlined text-3xl">check_circle</span>
            <div>
              <h4 className="font-headline-sm text-base font-bold">บันทึกข้อมูลพรรณไม้สำเร็จ!</h4>
              <p className="text-xs">กำลังนำท่านไปยังหน้ารายละเอียดพรรณไม้...</p>
            </div>
          </div>
        )}

        {/* Form Layout */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left Column: Primary Information */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Basic Info Card */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-sm border border-outline-variant/30">
              <h2 className="font-headline-sm text-lg font-bold text-primary mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">eco</span>
                <span>ข้อมูลพื้นฐานพรรณไม้ (ก.7-003)</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                {/* Plant Name (Thai) */}
                <div>
                  <label className="block font-label-md text-xs font-semibold text-on-surface mb-1.5" htmlFor="plant_name_th">
                    ชื่อพรรณไม้ (ภาษาไทย) *
                  </label>
                  <input 
                    required 
                    type="text" 
                    id="plant_name_th"
                    value={formData.plantNameTh}
                    onChange={(e) => setFormData({ ...formData, plantNameTh: e.target.value })}
                    placeholder="เช่น กล้วยไม้ช้างกระ, มอนสเตอร่า"
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:border-secondary focus:ring-0 transition-colors"
                  />
                </div>

                {/* Scientific Name */}
                <div>
                  <label className="block font-label-md text-xs font-semibold text-on-surface mb-1.5" htmlFor="scientific_name">
                    ชื่อวิทยาศาสตร์ (Scientific Name) *
                  </label>
                  <input 
                    required 
                    type="text" 
                    id="scientific_name"
                    value={formData.scientificName}
                    onChange={(e) => setFormData({ ...formData, scientificName: e.target.value })}
                    placeholder="เช่น Rhynchostylis gigantea (Lindl.) Ridl."
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl px-4 py-2.5 text-sm text-on-surface italic focus:border-secondary focus:ring-0 transition-colors"
                  />
                </div>

                {/* Family (วงศ์) */}
                <div>
                  <label className="block font-label-md text-xs font-semibold text-on-surface mb-1.5" htmlFor="family">
                    วงศ์ (Family) *
                  </label>
                  <input 
                    required 
                    type="text" 
                    id="family"
                    value={formData.family}
                    onChange={(e) => setFormData({ ...formData, family: e.target.value })}
                    placeholder="เช่น Orchidaceae, Araceae, Zingiberaceae"
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:border-secondary focus:ring-0 transition-colors"
                  />
                </div>

                {/* Plant Code */}
                <div>
                  <label className="block font-label-md text-xs font-semibold text-on-surface mb-1.5" htmlFor="plant_code">
                    รหัสพรรณไม้ (ตามทะเบียน อพ.สธ.)
                  </label>
                  <input 
                    type="text" 
                    id="plant_code"
                    value={formData.plantCode}
                    onChange={(e) => setFormData({ ...formData, plantCode: e.target.value })}
                    placeholder="เช่น 7-41000-001/05"
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl px-4 py-2.5 text-sm font-mono text-on-surface focus:border-secondary focus:ring-0 transition-colors"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="mb-5">
                <label className="block font-label-md text-xs font-semibold text-on-surface mb-1.5" htmlFor="description">
                  คำอธิบายและลักษณะทางพฤกษศาสตร์
                </label>
                <textarea 
                  id="description"
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="อธิบายลักษณะวิสัย ใบ ดอก ผล และถิ่นกำเนิด..."
                  className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:border-secondary focus:ring-0 transition-colors"
                />
              </div>

              {/* Botanical Facts */}
              <div>
                <label className="block font-label-md text-xs font-semibold text-on-surface mb-1.5" htmlFor="facts">
                  เกร็ดความรู้ทางพฤกษศาสตร์ (Botanical Fact)
                </label>
                <textarea 
                  id="facts"
                  rows={2}
                  value={formData.facts}
                  onChange={(e) => setFormData({ ...formData, facts: e.target.value })}
                  placeholder="เช่น รูบนใบเกิดขึ้นเพื่อลดแรงปะทะลม หรือ ดอกส่งกลิ่นหอมเฉพาะช่วงเช้า..."
                  className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:border-secondary focus:ring-0 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Category & Environment */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Category & Location */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/30 space-y-4">
              <h3 className="font-headline-sm text-base font-bold text-primary">การจำแนก & สภาพแวดล้อม</h3>
              
              {/* Category Select */}
              <div>
                <label className="block font-label-md text-xs font-semibold text-on-surface mb-1.5" htmlFor="category">
                  หมวดหมู่พรรณไม้ *
                </label>
                <select 
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:border-secondary transition-colors"
                >
                  <option value="flowering">พืชดอก (Flowering)</option>
                  <option value="tropical">พืชใบประดับ & เขตร้อน (Tropical)</option>
                  <option value="succulents">พืชอวบน้ำ & แคคตัส (Succulents)</option>
                  <option value="herbs">พืชสมุนไพรท้องถิ่น (Herbs)</option>
                  <option value="ferns">ป่าเฟิน & มอส (Ferns & Moss)</option>
                </select>
              </div>

              {/* Location in Garden */}
              <div>
                <label className="block font-label-md text-xs font-semibold text-on-surface mb-1.5" htmlFor="location">
                  พิกัดในสวนพฤกษศาสตร์ UDVC
                </label>
                <input 
                  type="text" 
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="เช่น โซนเรือนกระจก A-04"
                  className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:border-secondary transition-colors"
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="block font-label-md text-xs font-semibold text-on-surface mb-1.5" htmlFor="imageUrl">
                  ลิงก์รูปภาพพรรณไม้
                </label>
                <input 
                  type="url" 
                  id="imageUrl"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  placeholder="https://example.com/plant.jpg"
                  className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl px-4 py-2.5 text-xs text-on-surface focus:border-secondary transition-colors"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-outline-variant/20">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-on-primary font-label-md text-sm py-3.5 rounded-full hover:bg-secondary transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <span className="material-symbols-outlined text-lg">save</span>
                  <span>{isSubmitting ? 'กำลังบันทึกข้อมูล...' : 'บันทึกพรรณไม้เข้าสู่ระบบ'}</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
