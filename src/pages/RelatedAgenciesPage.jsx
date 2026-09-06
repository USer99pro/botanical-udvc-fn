import React, { useState } from 'react';
import Breadcrumb from '../components/shared/Breadcrumb';
import PageHeader from '../components/shared/PageHeader';
import SearchFilter from '../components/shared/SearchFilter';
import AgencyCard from '../components/shared/AgencyCard';
import Footer from '../components/shared/Footer';

export default function RelatedAgenciesPage({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'ทุกหน่วยงาน' },
    { id: 'central', label: 'หน่วยงานต้นสังกัดและโครงการพระราชดำริ' },
    { id: 'botanical', label: 'หน่วยงานด้านพฤกษศาสตร์และทรัพยากร' },
    { id: 'academic', label: 'สถาบันการศึกษาและมหาวิทยาลัย' },
    { id: 'local', label: 'หน่วยงานท้องถิ่นและจังหวัดอุดรธานี' },
  ];

  const agencies = [
    {
      id: 'rspg-org',
      name: 'โครงการอนุรักษ์พันธุกรรมพืชอันเนื่องมาจากพระราชดำริ สมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี (อพ.สธ.)',
      category: 'central',
      categoryLabel: 'โครงการพระราชดำริ',
      description: 'หน่วยงานหลักผู้กำหนดนโยบาย ทิศทาง และมาตรฐานการดำเนินงานสวนพฤกษศาสตร์โรงเรียน และงานฐานทรัพยากรท้องถิ่นทั่วประเทศ สนองพระราชดำริเพื่อการอนุรักษ์พันธุกรรมพืชและวัฒนธรรมไทย',
      logo: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=200&q=80',
      website: 'http://www.rspg.or.th',
      phone: '02-282-1850',
      email: 'rspg.center@rspg.or.th',
    },
    {
      id: 'vec-org',
      name: 'สำนักงานคณะกรรมการการอาชีวศึกษา (สอศ.) กระทรวงศึกษาธิการ',
      category: 'central',
      categoryLabel: 'หน่วยงานต้นสังกัด',
      description: 'หน่วยงานต้นสังกัดระดับกระทรวง สนับสนุนนโยบายการขับเคลื่อนงานสวนพฤกษศาสตร์โรงเรียนในสถานศึกษาอาชีวศึกษาทั่วประเทศ และการบูรณาการหลักสูตรวิชาชีพ',
      logo: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=200&q=80',
      website: 'https://www.vec.go.th',
      phone: '02-281-5555',
      email: 'contact@vec.go.th',
    },
    {
      id: 'bgo-org',
      name: 'องค์การสวนพฤกษศาสตร์ (อพพ.) กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม',
      category: 'botanical',
      categoryLabel: 'หน่วยงานด้านพฤกษศาสตร์',
      description: 'สถาบันวิจัยพฤกษศาสตร์ระดับชาติ ผู้เชี่ยวชาญการจัดจำแนกชนิดพันธุ์พืช (Taxonomy) การทำตัวอย่างพรรณไม้แห้ง (Herbarium) และอนุรักษ์พืชหายากของไทย',
      logo: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=200&q=80',
      website: 'http://www.qsbg.org',
      phone: '053-841-000',
      email: 'info@qsbg.or.th',
    },
    {
      id: 'dnp-org',
      name: 'กรมอุทยานแห่งชาติ สัตว์ป่า และพันธุ์พืช',
      category: 'botanical',
      categoryLabel: 'หน่วยงานด้านพฤกษศาสตร์',
      description: 'สำนักวิจัยการอนุรักษ์ป่าไม้และพันธุ์พืช แหล่งข้อมูลสารานุกรมพืชในประเทศไทย หอพรรณไม้ (BKF) และองค์ความรู้นิเวศวิทยาป่าไม้',
      logo: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=200&q=80',
      website: 'https://www.dnp.go.th',
      phone: '02-561-0777',
      email: 'pr@dnp.mail.go.th',
    },
    {
      id: 'udru-org',
      name: 'มหาวิทยาลัยราชภัฏอุดรธานี (ศูนย์ประสานงาน อพ.สธ. ภาคตะวันออกเฉียงเหนือตอนบน)',
      category: 'academic',
      categoryLabel: 'สถาบันการศึกษาพี่เลี้ยง',
      description: 'สถาบันอุดมศึกษาพี่เลี้ยงในพื้นที่จังหวัดอุดรธานี ให้คำปรึกษาทางวิชาการ การตรวจประเมินสถานศึกษา การจัดอบรมเชิงปฏิบัติการ และการตรวจสอบชื่อวิทยาศาสตร์ของพรรณไม้',
      logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
      website: 'https://www.udru.ac.th',
      phone: '042-211-040',
      email: 'info@udru.ac.th',
    },
    {
      id: 'udon-muni-org',
      name: 'เทศบาลนครอุดรธานี',
      category: 'local',
      categoryLabel: 'หน่วยงานท้องถิ่น',
      description: 'องค์กรปกครองส่วนท้องถิ่น ร่วมมือในการอนุรักษ์พื้นที่สีเขียวในเขตเมือง แหล่งน้ำหนองประจักษ์ศิลปาคม และการจัดกิจกรรมสิ่งแวดล้อมชุมชนร่วมกับวิทยาลัย',
      logo: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=200&q=80',
      website: 'https://www.udoncity.go.th',
      phone: '042-325-176',
      email: 'contact@udoncity.go.th',
    },
  ];

  const filteredAgencies = agencies.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
        <Breadcrumb
          items={[{ label: 'หน่วยงานที่เกี่ยวข้อง' }]}
          onNavigate={onNavigate}
        />

        <PageHeader
          title="หน่วยงานที่เกี่ยวข้อง (Related Organizations & Network)"
          subtitle="Institutional Partnerships, Scientific Affiliates & RSPG Network"
          description="เครือข่ายความร่วมมือทางวิชาการ การอนุรักษ์ และการบริหารจัดการงานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี ร่วมกับหน่วยงานสนองพระราชดำริ องค์กรพฤกษศาสตร์ระดับชาติ และสถาบันการศึกษาพันธมิตร"
          icon="hub"
          badge="เครือข่ายความร่วมมือ"
        />

        {/* Filter */}
        <SearchFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          placeholder="ค้นหาชื่อหน่วยงาน สถาบัน หรือเว็บไซต์..."
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Agencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredAgencies.map((agency) => (
            <AgencyCard key={agency.id} agency={agency} />
          ))}
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
