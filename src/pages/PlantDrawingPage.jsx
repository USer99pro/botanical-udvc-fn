import React, { useState } from 'react';
import Breadcrumb from '../components/shared/Breadcrumb';
import PageHeader from '../components/shared/PageHeader';
import SearchFilter from '../components/shared/SearchFilter';
import Footer from '../components/shared/Footer';

export default function PlantDrawingPage({ onNavigate, onSelectPlant }) {
  const [selectedTechnique, setSelectedTechnique] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const techniques = [
    { id: 'all', label: 'ทุกเทคนิค' },
    { id: 'watercolor', label: 'สีน้ำพฤกษศาสตร์ (Watercolor)' },
    { id: 'ink', label: 'ลายเส้นหมึกดำ (Pen & Ink)' },
    { id: 'pencil', label: 'ดินสอเกรไฟต์ (Graphite Pencil)' },
  ];

  const drawings = [
    {
      id: 'draw-01',
      title: 'ภาพวาดพฤกษศาสตร์ดอกและผลราชพฤกษ์',
      plantName: 'ราชพฤกษ์ (Cassia fistula L.)',
      artist: 'นางสาวกัญญารัตน์ ศรีสมบูรณ์',
      studentId: '66201040012',
      department: 'แผนกวิชาวิจิตรศิลป์ / การออกแบบ',
      academicYear: '2567',
      technique: 'watercolor',
      techniqueLabel: 'สีน้ำพฤกษศาสตร์',
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
      scale: '1:1 พร้อมกำลังขยายเกสร 5x',
      description: 'ภาพวาดแสดงโครงสร้างกลีบดอก เกสรเพศผู้ เกสรเพศเมีย และฝักแก่ของราชพฤกษ์ บันทึกตามเกณฑ์แบบ ก.7-003',
      plantId: 'cassia-fistula',
    },
    {
      id: 'draw-02',
      title: 'กายวิภาคใบและผลยางนา (Dipterocarpus alatus)',
      plantName: 'ยางนา (Dipterocarpus alatus Roxb.)',
      artist: 'นายพีรพัฒน์ บุญประคอง',
      studentId: '66201040045',
      department: 'แผนกวิชาวิจิตรศิลป์',
      academicYear: '2567',
      technique: 'ink',
      techniqueLabel: 'ลายเส้นหมึกดำ (Stippling & Hatching)',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
      scale: '1:2 แสดงปีกผล 2 ปีกชัดเจน',
      description: 'ภาพวาดลายเส้นเทคนิคจุดและแรเงาหมึกดำ แสดงลักษณะปีกผลยางนาและการเรียงเส้นใบแบบขนนก',
      plantId: 'dipterocarpus-alatus',
    },
    {
      id: 'draw-03',
      title: 'ช่อดอกพิกุลและสัณฐานวิทยากลีบดอก',
      plantName: 'พิกุล (Mimusops elengi L.)',
      artist: 'นางสาวศุภิสรา รัตนวงษ์',
      studentId: '66201040089',
      department: 'แผนกวิชาการออกแบบ',
      academicYear: '2566',
      technique: 'watercolor',
      techniqueLabel: 'สีน้ำพฤกษศาสตร์',
      image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=800&q=80',
      scale: '2:1 ขยายส่วนดอก',
      description: 'แสดงความละเอียดของกลีบดอกซ้อนสีครีมขาวและก้านดอกมีขนนุ่ม รายละเอียดเสมือนจริงเพื่อการจำแนกชนิด',
      plantId: 'mimusops-elengi',
    },
    {
      id: 'draw-04',
      title: 'ภาพวาดสัณฐานวิทยาลำต้นและใบโมกบ้าน',
      plantName: 'โมกบ้าน (Wrightia religiosa)',
      artist: 'นายณัฐดนัย พงษ์ศิริ',
      studentId: '66201040102',
      department: 'แผนกวิชาคอมพิวเตอร์กราฟิก',
      academicYear: '2567',
      technique: 'pencil',
      techniqueLabel: 'ดินสอเกรไฟต์',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
      scale: '1:1',
      description: 'ศึกษาข้อ ปล้อง การแตกกิ่งก้าน และการเรียงใบตรงข้ามสลับตั้งฉากของโมกบ้าน',
      plantId: 'wrightia-religiosa',
    },
    {
      id: 'draw-05',
      title: 'ภาพวาดช่อดอกและฝักทองกวาว',
      plantName: 'ทองกวาว (Butea monosperma)',
      artist: 'นางสาวพิมพ์มาดา จันทร์เพ็ญ',
      studentId: '66201040058',
      department: 'แผนกวิชาวิจิตรศิลป์',
      academicYear: '2566',
      technique: 'watercolor',
      techniqueLabel: 'สีน้ำพฤกษศาสตร์',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
      scale: '1:1',
      description: 'ถ่ายทอดสีสันเพลิงส้มอันโดดเด่นของดอกทองกวาว ดอกรูปดอกถั่วโค้งคล้ายนกแก้ว',
      plantId: 'butea-monosperma',
    },
    {
      id: 'draw-06',
      title: 'ภาคตัดขวางใบว่านหางจระเข้',
      plantName: 'ว่านหางจระเข้ (Aloe vera)',
      artist: 'นายธนกฤต วิเศษแก้ว',
      studentId: '66201040120',
      department: 'แผนกวิชาการออกแบบ',
      academicYear: '2567',
      technique: 'ink',
      techniqueLabel: 'ลายเส้นหมึกดำ',
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80',
      scale: '1:1',
      description: 'แสดงความหนาของแผ่นใบอวบน้ำ หนามขอบใบ และเนื้อวุ้นใสภายใน',
      plantId: 'aloe-vera',
    },
  ];

  const filteredDrawings = drawings.filter((d) => {
    const matchesTech = selectedTechnique === 'all' || d.technique === selectedTechnique;
    const matchesQuery =
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.plantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTech && matchesQuery;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
        <Breadcrumb
          items={[
            { label: 'ประเภทพรรณไม้' },
            { label: 'ภาพวาดพรรณไม้' },
          ]}
          onNavigate={onNavigate}
        />

        <PageHeader
          title="ภาพวาดพรรณไม้ (Botanical Art & Illustration)"
          subtitle="Student Botanical Scientific Illustrations & Art Gallery"
          description="หอศิลป์ภาพวาดพฤกษศาสตร์ทางวิทยาศาสตร์และศิลปวัฒนธรรม ผลงานสร้างสรรค์ของนักศึกษาและคณาจารย์วิทยาลัยอาชีวศึกษาอุดรธานี ตามมาตรฐานแบบบันทึก ก.7-003 ที่ผสานความถูกต้องทางชีววิทยากับความงดงามทางวิจิตรศิลป์"
          icon="palette"
          badge="ผลงานนักศึกษา UDVC"
        />

        {/* Filter */}
        <SearchFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          placeholder="ค้นหาภาพวาด ชื่อพืช ชื่อผู้วาด หรือแผนกวิชา..."
          categories={techniques}
          selectedCategory={selectedTechnique}
          onCategoryChange={setSelectedTechnique}
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredDrawings.map((draw) => (
            <div
              key={draw.id}
              onClick={() => setSelectedArtwork(draw)}
              className="group rounded-2xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-secondary transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative w-full h-56 overflow-hidden bg-surface-container">
                <img
                  src={draw.image}
                  alt={draw.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-surface/90 dark:bg-surface-dim/90 text-primary backdrop-blur-md border border-outline-variant/30">
                  {draw.techniqueLabel}
                </span>
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[11px] font-mono font-bold bg-secondary text-on-secondary shadow-2xs">
                  สเกล {draw.scale}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-serif italic text-secondary font-bold mb-1">
                    {draw.plantName}
                  </p>
                  <h3 className="text-base font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 mb-2">
                    {draw.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed mb-3">
                    {draw.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between text-xs text-on-surface-variant">
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="material-symbols-outlined text-sm text-secondary">brush</span>
                    <span className="truncate">{draw.artist}</span>
                  </div>
                  <span className="text-[11px] font-medium text-secondary shrink-0">
                    ปี {draw.academicYear}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for viewing artwork detail */}
        {selectedArtwork && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="relative max-w-2xl w-full bg-surface-container-lowest dark:bg-surface-dim rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/30 max-h-[90vh] flex flex-col">
              <div className="relative h-72 sm:h-80 bg-surface-container overflow-hidden">
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  className="w-full h-full object-contain bg-black/5"
                />
                <button
                  type="button"
                  onClick={() => setSelectedArtwork(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md text-primary hover:bg-surface flex items-center justify-center cursor-pointer shadow-md"
                >
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-4">
                <div>
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                    {selectedArtwork.techniqueLabel} • มาตราส่วน {selectedArtwork.scale}
                  </span>
                  <h3 className="text-xl font-bold text-primary mt-1">
                    {selectedArtwork.title}
                  </h3>
                  <p className="text-sm font-serif italic text-secondary font-bold">
                    {selectedArtwork.plantName}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {selectedArtwork.description}
                </p>

                <div className="p-4 rounded-xl bg-surface-container space-y-2 text-xs text-on-surface">
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">ผู้วาด:</span>
                    <span className="font-bold text-primary">{selectedArtwork.artist} (รหัส {selectedArtwork.studentId})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">แผนกวิชา:</span>
                    <span className="font-bold text-primary">{selectedArtwork.department}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">ปีการศึกษา:</span>
                    <span className="font-bold text-primary">{selectedArtwork.academicYear}</span>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedArtwork(null);
                      if (onSelectPlant) onSelectPlant(selectedArtwork.plantId);
                      else if (onNavigate) onNavigate('explorer');
                    }}
                    className="px-4 py-2 rounded-xl bg-secondary text-on-secondary text-xs font-semibold hover:bg-primary transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span>ดูข้อมูลพรรณไม้ต้นนี้</span>
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
