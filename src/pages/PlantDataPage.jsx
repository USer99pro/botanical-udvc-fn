import React, { useState } from 'react';
import Breadcrumb from '../components/shared/Breadcrumb';
import PageHeader from '../components/shared/PageHeader';
import SectionHeader from '../components/shared/SectionHeader';
import SearchFilter from '../components/shared/SearchFilter';
import ContentCard from '../components/shared/ContentCard';
import Footer from '../components/shared/Footer';

export default function PlantDataPage({ onNavigate, onSelectPlant }) {
  const [selectedHabit, setSelectedHabit] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const habits = [
    { id: 'all', label: 'ทุกลักษณะวิสัย' },
    { id: 'tree', label: 'ไม้ยืนต้น (Tree)' },
    { id: 'shrub', label: 'ไม้พุ่ม (Shrub)' },
    { id: 'herb', label: 'ไม้ล้มลุก/สมุนไพร (Herb)' },
    { id: 'climber', label: 'ไม้เลื้อย/เถาวัลย์ (Climber)' },
    { id: 'succulent', label: 'พืชอวบน้ำ/ไม้น้ำ (Succulent/Aquatic)' },
  ];

  const plantDatabase = [
    {
      id: 'cassia-fistula',
      title: 'ราชพฤกษ์',
      subtitle: 'Cassia fistula L. (FABACEAE)',
      habit: 'tree',
      habitLabel: 'ไม้ยืนต้น',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
      description: 'ไม้ยืนต้นขนาดกลาง สูง 10-20 เมตร ทรงพุ่มกลมรี ใบประกอบแบบขนนกปลายคู่ ดอกช่อกระจะห้อยระย้าสีเหลืองสด ผลเป็นฝักทรงกระบอกยาวสีน้ำตาลดำ เมล็ดแบนรูปไข่',
      morphology: 'ลำต้นตั้งตรง เปลือกสีเทาอมน้ำตาล ผิวเรียบหรือแตกเป็นสะเก็ด',
      uses: 'เนื้อไม้ก่อสร้าง เปลือกและฝักเป็นยาถ่ายระบาย ดอกบูชาพระ ไม้มงคลประจำชาติ',
      code: '7-41000-001-001',
      tags: ['ไม้ยืนต้น', 'ดอกช่อ', 'ฝักยาว'],
    },
    {
      id: 'dipterocarpus-alatus',
      title: 'ยางนา',
      subtitle: 'Dipterocarpus alatus Roxb. ex G.Don (DIPTEROCARPACEAE)',
      habit: 'tree',
      habitLabel: 'ไม้ยืนต้น',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
      description: 'ไม้ยืนต้นขนาดใหญ่มาก สูง 30-45 เมตร ลำต้นเปลาตรง เรือนยอดเป็นพุ่มกลมทึบ ใบเดี่ยวเรียงเวียน รูปไข่แกมรูปหอก ผลมีปีกรูปขอบขนาน 2 ปีก ยาว 8-14 ซม.',
      morphology: 'ลำต้นกลมตรง เปลือกหนาสีเทาแตกลึกตามยาว มีช่องระบายอากาศ',
      uses: 'น้ำมันยาง (Dammar) ใช้ยาเรือและคบเพลิง ไม้แปรรูปสร้างบ้านเรือน สรรพคุณสมานแผล',
      code: '7-41000-001-002',
      tags: ['ไม้ยืนต้นขนาดใหญ่', 'ผลมีปีก', 'น้ำมันยาง'],
    },
    {
      id: 'wrightia-religiosa',
      title: 'โมกบ้าน',
      subtitle: 'Wrightia religiosa (Teijsm. & Binn.) (APOCYNACEAE)',
      habit: 'shrub',
      habitLabel: 'ไม้พุ่ม',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
      description: 'ไม้พุ่มขนาดกลาง สูง 2-5 เมตร ลำต้นแตกกิ่งก้านสาขามาก เปลือกสีน้ำตาลเข้ม มีจุดขาว ใบเดี่ยวออกตรงข้าม ดอกสีขาวหอมชื่นใจ ออกเป็นช่อกระจุกตามซอกใบห้อยลง',
      morphology: 'มียางสีขาวเมื่อหักก้านหรือใบ ทรงพุ่มโปร่งละเอียด',
      uses: 'ไม้ประดับรั้ว ดอกนำมาอบน้ำหอม รากต้มรักษาพิษไข้ ใบรักษาโรคผิวหนัง',
      code: '7-41000-001-004',
      tags: ['ไม้พุ่ม', 'ดอกหอม', 'มียางขาว'],
    },
    {
      id: 'aloe-vera',
      title: 'ว่านหางจระเข้',
      subtitle: 'Aloe vera (L.) Burm.f. (ASPHODELACEAE)',
      habit: 'succulent',
      habitLabel: 'พืชอวบน้ำ',
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80',
      description: 'พืชล้มลุกอวบน้ำอายุหลายปี ลำต้นสั้น ใบอวบน้ำหนาเรียงเวียนรอบต้น ขอบใบมีหนามแหลม ภายในใบมีวุ้นใส ช่อดอกออกตรงกลางต้น ดอกสีส้มอมเหลืองทรงหลอด',
      morphology: 'ใบไม่มีก้าน หนาอุ้มน้ำ ภายในมีเนื้อวุ้น polysaccharide เมือกใส',
      uses: 'วุ้นใสรักษาแผลไฟไหม้ น้ำร้อนลวก สมานแผล บำรุงผิวหน้าและเส้นผม ยาระบาย',
      code: '7-41000-001-006',
      tags: ['พืชอวบน้ำ', 'สมุนไพร', 'วุ้นใส'],
    },
    {
      id: 'butea-monosperma',
      title: 'ทองกวาว (จาน)',
      subtitle: 'Butea monosperma (Lam.) Taub. (FABACEAE)',
      habit: 'tree',
      habitLabel: 'ไม้ยืนต้น',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
      description: 'ไม้ยืนต้นผลัดใบ สูง 8-15 เมตร กิ่งก้านคดงอ ใบประกอบแบบมีใบย่อย 3 ใบ ดอกรูปดอกถั่วสีส้มอมแดง ออกเป็นช่อแน่นตามกิ่งแก่ก่อนผลิใบใหม่ ผลเป็นฝักแบน',
      morphology: 'เปลือกสีเทาเข้มแตกร่อง มีน้ำยางสีแดงคล้ายเลือด',
      uses: 'ดอกให้สีย้อมผ้าสีส้มทองตามธรรมชาติ ยางไม้แก้ท้องร่วง ใบใช้ห่ออาหาร',
      code: '7-41000-001-005',
      tags: ['ไม้ยืนต้น', 'สีย้อมธรรมชาติ', 'ดอกส้มทอง'],
    },
    {
      id: 'mimusops-elengi',
      title: 'พิกุล',
      subtitle: 'Mimusops elengi L. (SAPOTACEAE)',
      habit: 'tree',
      habitLabel: 'ไม้ยืนต้น',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
      description: 'ไม้ยืนต้นขนาดกลางไม่ผลัดใบ สูง 10-15 เมตร ทรงพุ่มรูปเจดีย์แน่นทึบ ใบเดี่ยวรูปรี ปลายแหลม ดอกสีขาวนวล กลิ่นหอมแรงแม้แห้งแล้ว ผลสุกสีส้มแดงรับประทานได้',
      morphology: 'เปลือกต้นสีน้ำตาลอมเทาแตกเป็นร่องตื้น น้ำยางสีขาวขุ่นเล็กน้อย',
      uses: 'ดอกเข้ายาหอม ยาลม บำรุงหัวใจ เนื้อไม้สีแดงแข็งเหนียวใช้ทำเสาและเครื่องดนตรี',
      code: '7-41000-001-003',
      tags: ['ไม้ยืนต้น', 'ดอกหอมทน', 'ไม้มงคล'],
    },
  ];

  const filteredPlants = plantDatabase.filter((p) => {
    const matchesHabit = selectedHabit === 'all' || p.habit === selectedHabit;
    const matchesQuery =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.uses.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesHabit && matchesQuery;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
        <Breadcrumb
          items={[
            { label: 'ประเภทพรรณไม้' },
            { label: 'ข้อมูลพรรณไม้' },
          ]}
          onNavigate={onNavigate}
        />

        <PageHeader
          title="ข้อมูลพรรณไม้ (Botanical Characteristics Database)"
          subtitle="Taxonomic, Morphological, Ecological & Utilization Data"
          description="ฐานข้อมูลรายละเอียดพรรณไม้เชิงลึกตามมาตรฐานแบบ ก.7-003 รวบรวมข้อมูลสัณฐานวิทยา ลำต้น ใบ ดอก ผล เมล็ด การจำแนกตามลักษณะวิสัย และการใช้ประโยชน์ตามภูมิปัญญาท้องถิ่น"
          icon="search_insights"
          badge="ฐานข้อมูล ก.7-003"
        >
          <button
            type="button"
            onClick={() => onNavigate && onNavigate('explorer')}
            className="px-4 py-2 rounded-xl bg-primary text-on-primary font-semibold text-xs sm:text-sm hover:bg-secondary transition-colors cursor-pointer shadow-xs flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-base">table_view</span>
            <span>เปิดมุมมองตาราง (Data Grid)</span>
          </button>
        </PageHeader>

        {/* Filter */}
        <SearchFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          placeholder="ค้นหาชื่อพืช ชื่อวิทย์ ประโยชน์ หรือสัณฐานวิทยา..."
          categories={habits}
          selectedCategory={selectedHabit}
          onCategoryChange={setSelectedHabit}
        />

        {/* Plant Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPlants.map((plant) => (
            <ContentCard
              key={plant.id}
              title={plant.title}
              subtitle={plant.subtitle}
              description={plant.description}
              image={plant.image}
              badge={plant.habitLabel}
              tags={plant.tags}
              onClick={() => {
                if (onSelectPlant) onSelectPlant(plant.id);
                else if (onNavigate) onNavigate('explorer');
              }}
              footer={
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between text-on-surface-variant font-mono">
                    <span>รหัส: {plant.code}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-outline-variant/15 text-secondary font-semibold">
                    <span>ดูแบบบันทึก ก.7-003</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
