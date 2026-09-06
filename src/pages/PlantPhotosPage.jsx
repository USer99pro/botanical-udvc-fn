import React, { useState } from 'react';
import Breadcrumb from '../components/shared/Breadcrumb';
import PageHeader from '../components/shared/PageHeader';
import SearchFilter from '../components/shared/SearchFilter';
import Footer from '../components/shared/Footer';

export default function PlantPhotosPage({ onNavigate, onSelectPlant }) {
  const [selectedOrgan, setSelectedOrgan] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePhoto, setActivePhoto] = useState(null);

  const organs = [
    { id: 'all', label: 'ทุกส่วนของพืช' },
    { id: 'flower', label: 'ดอก / ช่อดอก (Flower)' },
    { id: 'leaf', label: 'ใบ / กิ่งก้าน (Leaf)' },
    { id: 'fruit', label: 'ผลและเมล็ด (Fruit & Seed)' },
    { id: 'bark', label: 'ลำต้นและเปลือก (Trunk & Bark)' },
    { id: 'habit', label: 'วิสัยและทรงพุ่ม (Habit)' },
  ];

  const photos = [
    {
      id: 'pho-001',
      photoNumber: 'PHO-2567-001',
      plantCode: '7-41000-001-001',
      plantName: 'ราชพฤกษ์ (Cassia fistula L.)',
      title: 'ช่อดอกราชพฤกษ์บานสะพรั่งระยะสมบูรณ์',
      organ: 'flower',
      organLabel: 'ดอก / ช่อดอก',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
      photographer: 'นายอัครเดช รุ่งเรือง (นักศึกษาแผนกคอมพิวเตอร์)',
      date: '12 เม.ย. 2567',
      dimensions: '4000 x 3000 px',
      description: 'บันทึกภาพช่อดอกห้อยระย้าสีเหลืองสด พร้อมเกสรเพศผู้ 10 อัน มี 3 อันล่างยาวโค้งขึ้น',
      plantId: 'cassia-fistula',
    },
    {
      id: 'pho-002',
      photoNumber: 'PHO-2567-002',
      plantCode: '7-41000-001-002',
      plantName: 'ยางนา (Dipterocarpus alatus)',
      title: 'เรือนยอดและลำต้นเปลาตรงของยางนา',
      organ: 'habit',
      organLabel: 'วิสัยและทรงพุ่ม',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
      photographer: 'อาจารย์ธีระวัฒน์ จันทร์ดี',
      date: '05 พ.ค. 2567',
      dimensions: '4200 x 2800 px',
      description: 'ภาพมุมกว้างแสดงความสูงตระหง่านของต้นยางนาอายุกว่า 40 ปีในลานธรรมเฉลิมพระเกียรติ',
      plantId: 'dipterocarpus-alatus',
    },
    {
      id: 'pho-003',
      photoNumber: 'PHO-2567-003',
      plantCode: '7-41000-001-003',
      plantName: 'พิกุล (Mimusops elengi L.)',
      title: 'ดอกพิกุลบานส่งกลิ่นหอมยามเช้า',
      organ: 'flower',
      organLabel: 'ดอก / ช่อดอก',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
      photographer: 'นางสาวจิรภา สิทธิชัย (นักศึกษาแผนกวิจิตรศิลป์)',
      date: '20 พ.ค. 2567',
      dimensions: '3840 x 2160 px',
      description: 'โคลสอัพกลีบดอกซ้อนสีขาวนวล ก้านดอกมีขนนุ่มสีน้ำตาลอมแดง',
      plantId: 'mimusops-elengi',
    },
    {
      id: 'pho-004',
      photoNumber: 'PHO-2567-004',
      plantCode: '7-41000-001-004',
      plantName: 'โมกบ้าน (Wrightia religiosa)',
      title: 'ใบเดี่ยวสีเขียวเข้มและการแตกกิ่งก้าน',
      organ: 'leaf',
      organLabel: 'ใบ / กิ่งก้าน',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
      photographer: 'นายสุริยา มีแก้ว',
      date: '02 มิ.ย. 2567',
      dimensions: '3600 x 2400 px',
      description: 'ลักษณะแผ่นใบรูปรีบาง ปลายเรียวแหลม โคนสอบ ผิวใบเกลี้ยงทั้งสองด้าน',
      plantId: 'wrightia-religiosa',
    },
    {
      id: 'pho-005',
      photoNumber: 'PHO-2567-005',
      plantCode: '7-41000-001-005',
      plantName: 'ทองกวาว (Butea monosperma)',
      title: 'เปลือกลำต้นแก่และการหลั่งน้ำยางสีแดง',
      organ: 'bark',
      organLabel: 'ลำต้นและเปลือก',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      photographer: 'อาจารย์สมศักดิ์ สุวรรณ',
      date: '15 มิ.ย. 2567',
      dimensions: '4000 x 3000 px',
      description: 'เปลือกลำต้นสีเทาเข้มแตกร่องลึก เผยให้เห็นรอยน้ำยางแห้งสีแดงคล้ำ',
      plantId: 'butea-monosperma',
    },
    {
      id: 'pho-006',
      photoNumber: 'PHO-2567-006',
      plantCode: '7-41000-001-006',
      plantName: 'ว่านหางจระเข้ (Aloe vera)',
      title: 'หนามขอบใบและเนื้อวุ้นอวบน้ำ',
      organ: 'leaf',
      organLabel: 'ใบ / กิ่งก้าน',
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80',
      photographer: 'นางสาวพิมพ์พร อุดร',
      date: '28 มิ.ย. 2567',
      dimensions: '3800 x 2500 px',
      description: 'รายละเอียดหยดน้ำค้างเกาะหนามขอบใบว่านหางจระเข้ในแปลงสมุนไพร',
      plantId: 'aloe-vera',
    },
  ];

  const filteredPhotos = photos.filter((p) => {
    const matchesOrgan = selectedOrgan === 'all' || p.organ === selectedOrgan;
    const matchesQuery =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.plantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.photoNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.plantCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.photographer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesOrgan && matchesQuery;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
        <Breadcrumb
          items={[
            { label: 'ประเภทพรรณไม้' },
            { label: 'ทะเบียนภาพถ่ายพรรณไม้' },
          ]}
          onNavigate={onNavigate}
        />

        <PageHeader
          title="ทะเบียนภาพถ่ายพรรณไม้ (Botanical Photo Registry)"
          subtitle="Form Kor.7-003 Photographic Archive & Evidence Records"
          description="คลังภาพถ่ายทางพฤกษศาสตร์มาตรฐาน อพ.สธ. จำแนกตามอวัยวะพืช (ดอก ใบ ผล ลำต้น ทรงพุ่ม) พร้อมหมายเลขทะเบียนภาพถ่าย มาตราส่วน ผู้ถ่ายภาพ และพิกัดต้นไม้จริงในวิทยาลัยอาชีวศึกษาอุดรธานี"
          icon="photo_library"
          badge="คลังภาพ อพ.สธ."
        />

        {/* Filter */}
        <SearchFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          placeholder="ค้นหาเลขภาพถ่าย รหัสต้น ชื่อพืช หรือผู้ถ่ายภาพ..."
          categories={organs}
          selectedCategory={selectedOrgan}
          onCategoryChange={setSelectedOrgan}
        />

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group rounded-2xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-secondary transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative w-full h-56 overflow-hidden bg-surface-container">
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-surface/90 dark:bg-surface-dim/90 text-primary backdrop-blur-md border border-outline-variant/30">
                  {photo.organLabel}
                </span>
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-secondary text-on-secondary shadow-2xs">
                  {photo.photoNumber}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-serif italic text-secondary font-bold mb-1">
                    {photo.plantName}
                  </p>
                  <h3 className="text-base font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 mb-2">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed mb-3">
                    {photo.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between text-xs text-on-surface-variant">
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="material-symbols-outlined text-sm text-secondary">photo_camera</span>
                    <span className="truncate">{photo.photographer}</span>
                  </div>
                  <span className="text-[11px] shrink-0 font-mono">
                    {photo.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for viewing high-res photo */}
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
            <div className="relative max-w-3xl w-full bg-surface-container-lowest dark:bg-surface-dim rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/30 max-h-[90vh] flex flex-col">
              <div className="relative h-80 sm:h-96 bg-black/90 flex items-center justify-center overflow-hidden">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="w-full h-full object-contain"
                />
                <button
                  type="button"
                  onClick={() => setActivePhoto(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md text-primary hover:bg-surface flex items-center justify-center cursor-pointer shadow-md"
                >
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                    {activePhoto.organLabel} • ทะเบียน {activePhoto.photoNumber}
                  </span>
                  <span className="text-xs font-mono text-on-surface-variant">
                    รหัสพรรณไม้: {activePhoto.plantCode}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-primary">
                  {activePhoto.title}
                </h3>
                <p className="text-sm font-serif italic text-secondary font-bold">
                  {activePhoto.plantName}
                </p>

                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {activePhoto.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-surface-container text-xs text-on-surface">
                  <div>
                    <span className="text-on-surface-variant block">ผู้บันทึกภาพ:</span>
                    <span className="font-bold text-primary">{activePhoto.photographer}</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant block">วันที่ถ่ายภาพ:</span>
                    <span className="font-bold text-primary">{activePhoto.date}</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant block">ความละเอียด:</span>
                    <span className="font-bold text-primary">{activePhoto.dimensions}</span>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setActivePhoto(null);
                      if (onSelectPlant) onSelectPlant(activePhoto.plantId);
                      else if (onNavigate) onNavigate('explorer');
                    }}
                    className="px-4 py-2 rounded-xl bg-secondary text-on-secondary text-xs font-semibold hover:bg-primary transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span>เปิดแบบบันทึก ก.7-003</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
