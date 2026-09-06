import React, { useState } from 'react';
import Breadcrumb from '../components/shared/Breadcrumb';
import PageHeader from '../components/shared/PageHeader';
import SearchFilter from '../components/shared/SearchFilter';
import ContentCard from '../components/shared/ContentCard';
import Footer from '../components/shared/Footer';

export default function GoodnessSharingPage({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeStory, setActiveStory] = useState(null);

  const categories = [
    { id: 'all', label: 'ทุกกิจกรรม' },
    { id: 'volunteer', label: 'จิตอาสาพัฒนาสวน' },
    { id: 'community', label: 'บริการวิชาการสู่ชุมชน' },
    { id: 'donation', label: 'การแบ่งปันและเพาะกล้าไม้' },
    { id: 'mentoring', label: 'การถ่ายทอดความรู้สู่เยาวชน' },
  ];

  const stories = [
    {
      id: 'good-01',
      title: 'โครงการเยาวชนอาชีวะจิตอาสา พัฒนาแปลงสมุนไพรและสวนหย่อมเฉลิมพระเกียรติ',
      subtitle: 'กิจกรรมจิตอาสาบำเพ็ญประโยชน์',
      category: 'volunteer',
      categoryLabel: 'จิตอาสาพัฒนาสวน',
      date: '28 กรกฎาคม 2567',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      description: 'นักศึกษาทุกแผนกวิชาร่วมใจกันปรับภูมิทัศน์ กำจัดวัชพืช พรวนดิน ใส่ปุ๋ยหมักชีวภาพ และปรับปรุงระบบสปริงเกอร์รดน้ำต้นไม้ในสวนพฤกษศาสตร์ เพื่อถวายเป็นพระราชกุศล',
      participants: 'นักศึกษาและอาจารย์กว่า 250 คน',
      location: 'แปลงพรรณไม้ A และ C วิทยาลัยอาชีวศึกษาอุดรธานี',
      impact: 'พื้นที่สีเขียวได้รับการฟื้นฟู 1,500 ตารางเมตร และเพิ่มปริมาณปุ๋ยหมักอินทรีย์ 500 กิโลกรัม',
      tags: ['จิตอาสา', 'ปรับภูมิทัศน์', 'เฉลิมพระเกียรติ'],
    },
    {
      id: 'good-02',
      title: 'มอบกล้าพันธุ์ไม้พื้นเมืองและสมุนไพรแก่โรงเรียนเครือข่ายและชุมชนหมากแข้ง',
      subtitle: 'การเพาะพันธุ์และส่งต่อพื้นที่สีเขียว',
      category: 'donation',
      categoryLabel: 'การแบ่งปันและเพาะกล้าไม้',
      date: '12 สิงหาคม 2567',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80',
      description: 'ชมรมพฤกษศาสตร์ UDVC ร่วมเพาะกล้าไม้มีค่า เช่น ยางนา ตะเคียนทอง ราชพฤกษ์ และฟ้าทะลายโจร รวมกว่า 1,000 ต้น ส่งมอบให้ 5 โรงเรียนและตัวแทนชุมชนนำไปปลูกเพิ่มพื้นที่สีเขียว',
      participants: 'นักศึกษาแผนกคหกรรมและตัวแทนชุมชน',
      location: 'เรือนเพาะชำสวนพฤกษศาสตร์ UDVC',
      impact: 'ส่งมอบกล้าไม้ 1,200 ต้น ให้แก่โรงเรียนประถมศึกษา 5 แห่งและชุมชน 3 แห่ง',
      tags: ['เพาะกล้าไม้', 'แบ่งปันชุมชน', 'เพิ่มพื้นที่สีเขียว'],
    },
    {
      id: 'good-03',
      title: 'พี่สอนน้อง: ถ่ายทอดการวาดภาพพฤกษศาสตร์และการบันทึก ก.7-003 สู่โรงเรียนประถม',
      subtitle: 'บริการวิชาการและการถ่ายทอดองค์ความรู้',
      category: 'mentoring',
      categoryLabel: 'การถ่ายทอดความรู้สู่เยาวชน',
      date: '18 กันยายน 2567',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80',
      description: 'นักศึกษาแผนกวิจิตรศิลป์และคอมพิวเตอร์กราฟิกจัดค่ายเชิงปฏิบัติการ “ต้นไม้ของฉัน” ให้แก่นักเรียนระดับประถมศึกษาในเขตเทศบาลนครอุดรธานี ฝึกการสังเกตใบไม้และวาดภาพสีน้ำ',
      participants: 'นักเรียนประถมศึกษา 60 คน และพี่เลี้ยงนักศึกษา 15 คน',
      location: 'ห้องปฏิบัติการศิลปะและลานสวนพฤกษศาสตร์ UDVC',
      impact: 'ปลูกฝังจิตสำนึกรักธรรมชาติและพัฒนาทักษะศิลปะสำหรับเยาวชน',
      tags: ['พี่สอนน้อง', 'ศิลปะพฤกษศาสตร์', 'ค่ายเยาวชน'],
    },
    {
      id: 'good-04',
      title: 'อบรมเชิงปฏิบัติการการทำสบู่สมุนไพรและน้ำยาล้างจานชีวภาพแก่กลุ่มแม่บ้านชุมชน',
      subtitle: 'บริการวิชาชีพเพื่อสร้างรายได้เสริม',
      category: 'community',
      categoryLabel: 'บริการวิชาการสู่ชุมชน',
      date: '05 ตุลาคม 2567',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
      description: 'แผนกวิชาคหกรรมศาสตร์ถ่ายทอดสูตรและเทคนิคการนำสารสกัดมะกรูด ขมิ้นชัน และว่านหางจระเข้มาผลิตของใช้ในครัวเรือน ลดรายจ่ายและสร้างช่องทางอาชีพเสริมแก่ชาวบ้าน',
      participants: 'ประชาชนและกลุ่มแม่บ้าน 45 คน',
      location: 'ศูนย์การเรียนรู้ชุมชนเทศบาลนครอุดรธานี',
      impact: 'สร้างกลุ่มวิสาหกิจชุมชนต้นแบบ 1 กลุ่ม ลดรายจ่ายในครัวเรือนได้กว่า 30%',
      tags: ['บริการวิชาการ', 'อาชีพเสริม', 'สมุนไพรในบ้าน'],
    },
    {
      id: 'good-05',
      title: 'กิจกรรมบิ๊กคลีนนิ่งเดย์ รักษ์สิ่งแวดล้อม คัดแยกขยะใบไม้ทำปุ๋ยหมักชีวมวล',
      subtitle: 'การจัดการขยะอินทรีย์และการรีไซเคิล',
      category: 'volunteer',
      categoryLabel: 'จิตอาสาพัฒนาสวน',
      date: '25 พฤศจิกายน 2567',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
      description: 'โครงการคัดแยกเศษกิ่งไม้ใบไม้ที่ร่วงหล่นในวิทยาลัย นำเข้าเครื่องย่อยชีวมวลเพื่อทำปุ๋ยหมักอินทรีย์ ไม่มีการเผาทำลาย ลดปัญหาฝุ่นละออง PM 2.5 อย่างยั่งยืน',
      participants: 'บุคลากร เจ้าหน้าที่ และนักศึกษาทุกสาขาวิชา',
      location: 'พื้นที่ทั่วบริเวณวิทยาลัยอาชีวศึกษาอุดรธานี',
      impact: 'ลดขยะอินทรีย์ได้ 2 ตัน/เดือน และผลิตปุ๋ยหมักใช้เองในวิทยาลัยได้ครบ 100%',
      tags: ['ลดขยะ', 'ปุ๋ยชีวมวล', 'ปลอดควันPM2.5'],
    },
  ];

  const filteredStories = stories.filter((s) => {
    const matchesCategory = selectedCategory === 'all' || s.category === selectedCategory;
    const matchesQuery =
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
        <Breadcrumb
          items={[{ label: 'แบ่งปันความดี' }]}
          onNavigate={onNavigate}
        />

        <PageHeader
          title="แบ่งปันความดี (Goodness Sharing & Community Impact)"
          subtitle="Volunteer Service, Environmental Stewardship & Knowledge Transfer"
          description="บันทึกเรื่องราวและกิจกรรมการทำความดี จิตอาสา การส่งต่อกล้าไม้ และการนำองค์ความรู้งานสวนพฤกษศาสตร์โรงเรียนไปสร้างคุณประโยชน์แก่ชุมชน สังคม และสิ่งแวดล้อมของชาววิทยาลัยอาชีวศึกษาอุดรธานี"
          icon="volunteer_activism"
          badge="จิตอาสา UDVC"
        />

        {/* Filter */}
        <SearchFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          placeholder="ค้นหากิจกรรมทำความดี จิตอาสา ชุมชน..."
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Goodness Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredStories.map((story) => (
            <ContentCard
              key={story.id}
              title={story.title}
              subtitle={story.date}
              description={story.description}
              image={story.image}
              badge={story.categoryLabel}
              tags={story.tags}
              onClick={() => setActiveStory(story)}
              footer={
                <div className="flex items-center justify-between text-xs">
                  <span className="text-on-surface-variant truncate max-w-[180px]">
                    {story.location}
                  </span>
                  <span className="text-secondary font-bold group-hover:underline flex items-center gap-1 shrink-0">
                    <span>อ่านรายละเอียด</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              }
            />
          ))}
        </div>

        {/* Detail Modal */}
        {activeStory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="relative max-w-2xl w-full bg-surface-container-lowest dark:bg-surface-dim rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/30 max-h-[90vh] flex flex-col">
              <div className="relative h-60 sm:h-72 bg-surface-container overflow-hidden">
                <img
                  src={activeStory.image}
                  alt={activeStory.title}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setActiveStory(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md text-primary hover:bg-surface flex items-center justify-center cursor-pointer shadow-md"
                >
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-on-secondary shadow-md">
                  {activeStory.categoryLabel}
                </span>
              </div>

              <div className="p-6 overflow-y-auto space-y-4">
                <div>
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                    วันที่จัดกิจกรรม: {activeStory.date}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-primary mt-1">
                    {activeStory.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {activeStory.description}
                </p>

                <div className="space-y-2 p-4 rounded-2xl bg-surface-container text-xs text-on-surface">
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary text-base shrink-0">groups</span>
                    <span><strong>ผู้เข้าร่วม:</strong> {activeStory.participants}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary text-base shrink-0">place</span>
                    <span><strong>สถานที่:</strong> {activeStory.location}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary text-base shrink-0">check_circle</span>
                    <span><strong>ผลลัพธ์และผลกระทบเชิงบวก:</strong> {activeStory.impact}</span>
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveStory(null)}
                    className="px-5 py-2 rounded-xl bg-secondary text-on-secondary text-xs font-semibold hover:bg-primary transition-colors cursor-pointer"
                  >
                    ปิดหน้าต่าง
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
