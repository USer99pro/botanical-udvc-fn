import React, { useState } from 'react';
import Breadcrumb from '../components/shared/Breadcrumb';
import PageHeader from '../components/shared/PageHeader';
import SectionHeader from '../components/shared/SectionHeader';
import SearchFilter from '../components/shared/SearchFilter';
import ContentCard from '../components/shared/ContentCard';
import Footer from '../components/shared/Footer';

export default function LocalResourcesPage({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'ทั้งหมด' },
    { id: 'biological', label: 'ทรัพยากรชีวภาพ' },
    { id: 'physical', label: 'ทรัพยากรกายภาพ' },
    { id: 'cultural', label: 'ทรัพยากรวัฒนธรรมและภูมิปัญญา' },
  ];

  const resources = [
    {
      id: 'indigo-dye',
      title: 'ต้นครามและภูมิปัญญาการย้อมครามธรรมชาติ',
      category: 'cultural',
      categoryLabel: 'ทรัพยากรวัฒนธรรมและภูมิปัญญา',
      subtitle: 'Indigofera tinctoria L.',
      description: 'ภูมิปัญญาการก่อหม้อครามและย้อมเส้นใยฝ้ายด้วยครามธรรมชาติ เอกลักษณ์หัตถกรรมสิ่งทอพื้นถิ่นอีสานที่นำมาบูรณาการในสาขาวิชาการออกแบบและแฟชั่น',
      image: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?auto=format&fit=crop&w=800&q=80',
      tags: ['สีย้อมธรรมชาติ', 'หัตถกรรมพื้นบ้าน', 'ภูมิปัญญาอีสาน'],
      location: 'อำเภอเมือง / หนองหาน จ.อุดรธานี',
    },
    {
      id: 'local-rice-varieties',
      title: 'ข้าวเหนียวพื้นเมืองอีสานและข้าวสายพันธุ์ท้องถิ่น',
      category: 'biological',
      categoryLabel: 'ทรัพยากรชีวภาพ',
      subtitle: 'Oryza sativa L. (Glutinous Rice)',
      description: 'การอนุรักษ์พันธุกรรมข้าวเหนียวเขี้ยวงู ข้าวก่ำ และข้าวหอมมะลิพื้นบ้าน แหล่งอาหารสำคัญและฐานวัฒนธรรมการกินของชาวอุดรธานี บูรณาการกับสาขาอาหารและโภชนาการ',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
      tags: ['พืชอาหาร', 'พันธุกรรมพื้นบ้าน', 'ความมั่นคงทางอาหาร'],
      location: 'พื้นที่เกษตรกรรม จ.อุดรธานี',
    },
    {
      id: 'nong-prajak-basin',
      title: 'ระบบนิเวศแหล่งน้ำหนองประจักษ์ศิลปาคม',
      category: 'physical',
      categoryLabel: 'ทรัพยากรกายภาพ',
      subtitle: 'Urban Wetland & Aquatic Ecosystem',
      description: 'บึงน้ำขนาดใหญ่ใจกลางเมืองอุดรธานี แหล่งศึกษาความหลากหลายทางชีวภาพของพืชน้ำ (บัวหลวง บัวสาย ผักตบ จอก แหน) และคุณภาพน้ำในเขตเมือง',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      tags: ['พื้นที่ชุ่มน้ำ', 'พืชน้ำ', 'นิเวศวิทยาเมือง'],
      location: 'สวนสาธารณะหนองประจักษ์ อ.เมือง จ.อุดรธานี',
    },
    {
      id: 'mak-kheng-tree',
      title: 'ต้นมะแข้ง (หมากแข้ง) พืชสัญลักษณ์ประวัติศาสตร์',
      category: 'biological',
      categoryLabel: 'ทรัพยากรชีวภาพ',
      subtitle: 'Solanum torvum Sw. / Historic Heritage',
      description: 'พืชที่มีความผูกพันกับชื่อ “บ้านหมากแข้ง” จุดกำเนิดประวัติศาสตร์เมืองอุดรธานี พืชผักพื้นบ้านที่มีคุณค่าทางอาหารและสรรพคุณทางสมุนไพรสูง',
      image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80',
      tags: ['พืชผักพื้นบ้าน', 'ประวัติศาสตร์ท้องถิ่น', 'สมุนไพร'],
      location: 'ตำบลหมากแข้ง อ.เมือง จ.อุดรธานี',
    },
    {
      id: 'phu-phan-herbs',
      title: 'สมุนไพรป่าเทือกเขาภูพานและภูมิปัญญาหมอพื้นบ้าน',
      category: 'cultural',
      categoryLabel: 'ทรัพยากรวัฒนธรรมและภูมิปัญญา',
      subtitle: 'Ethnobotanical Wisdom & Herbal Medicine',
      description: 'การรวบรวมองค์ความรู้ตำรับยาสมุนไพร เช่น กำลังเสือโคร่ง รางจืด พญายอ ขมิ้นชัน และการแปรรูปเป็นลูกประคบ ผลิตภัณฑ์เพื่อสุขภาพและสปา',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      tags: ['ยาสมุนไพร', 'แพทย์แผนไทย', 'ผลิตภัณฑ์สุขภาพ'],
      location: 'แนวเทือกเขาภูพาน จ.อุดรธานี',
    },
    {
      id: 'laterite-soil',
      title: 'ดินลูกรังและธรณีสัณฐานที่ราบสูงโคราช-อุดรธานี',
      category: 'physical',
      categoryLabel: 'ทรัพยากรกายภาพ',
      subtitle: 'Laterite Soil & Geomorphology',
      description: 'ลักษณะดินลูกรังและชั้นเกลือหินโบราณใต้ดินของแอ่งสกลนคร-อุดรธานี ส่งผลต่อชนิดพันธุ์พืชทนแล้งและการปรับตัวของระบบรากพรรณไม้ท้องถิ่น',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      tags: ['ธรณีวิทยา', 'ปฐพีวิทยา', 'สภาพแวดล้อมกายภาพ'],
      location: 'พื้นที่จังหวัดอุดรธานี',
    },
  ];

  const filteredResources = resources.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
        <Breadcrumb
          items={[{ label: 'ฐานทรัพยากรท้องถิ่น' }]}
          onNavigate={onNavigate}
        />

        <PageHeader
          title="ฐานทรัพยากรท้องถิ่น (Local Resources Base)"
          subtitle="RSPG Local Resources Database — Udon Thani Province"
          description="การสำรวจ รวบรวม และอนุรักษ์ฐานทรัพยากร 3 มิติในพื้นที่จังหวัดอุดรธานี: ทรัพยากรชีวภาพ ทรัพยากรกายภาพ และทรัพยากรวัฒนธรรมภูมิปัญญา เพื่อการเรียนรู้และการใช้ประโยชน์อย่างยั่งยืน"
          icon="landscape"
          badge="ฐานข้อมูล อพ.สธ."
        />

        {/* Search & Category Filter */}
        <SearchFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          placeholder="ค้นหาฐานทรัพยากรท้องถิ่น สมุนไพร ภูมิปัญญา..."
          categories={categories}
          selectedCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredResources.map((res) => (
            <ContentCard
              key={res.id}
              title={res.title}
              subtitle={res.subtitle}
              description={res.description}
              image={res.image}
              badge={res.categoryLabel}
              tags={res.tags}
              footer={
                <div className="flex items-center justify-between text-xs text-on-surface-variant">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-secondary text-sm">place</span>
                    <span className="truncate">{res.location}</span>
                  </span>
                  <span className="text-secondary font-semibold group-hover:underline">
                    ดูรายละเอียด
                  </span>
                </div>
              }
            />
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-16 bg-surface-container-lowest dark:bg-surface-dim rounded-2xl border border-outline-variant/30 mb-12">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant/40 mb-2">search_off</span>
            <h3 className="font-bold text-primary text-base">ไม่พบข้อมูลฐานทรัพยากรที่ค้นหา</h3>
            <p className="text-xs text-on-surface-variant mt-1">ลองเปลี่ยนคำค้นหาหรือเลือกหมวดหมู่ใหม่อีกครั้ง</p>
          </div>
        )}
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
