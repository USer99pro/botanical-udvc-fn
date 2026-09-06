import React from 'react';
import Breadcrumb from '../components/shared/Breadcrumb';
import PageHeader from '../components/shared/PageHeader';
import SectionHeader from '../components/shared/SectionHeader';
import Timeline from '../components/shared/Timeline';
import Footer from '../components/shared/Footer';

export default function BotanicalHistoryPage({ onNavigate }) {
  const historyTimeline = [
    {
      year: 'พ.ศ. 2548',
      title: 'จุดเริ่มต้นการสนองพระราชดำริและสมัครสมาชิก อพ.สธ.',
      description: 'วิทยาลัยอาชีวศึกษาอุดรธานีได้ขอพระราชทานพระราชานุญาตเข้าร่วมสนองพระราชดำริ โครงการอนุรักษ์พันธุกรรมพืชอันเนื่องมาจากพระราชดำริฯ (อพ.สธ.) อย่างเป็นทางการ โดยเริ่มจัดตั้งคณะกรรมการดำเนินงานชุดแรกและสำรวจพื้นที่สถานศึกษา 24 ไร่',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      highlight: true,
    },
    {
      year: 'พ.ศ. 2552',
      title: 'การจัดทำทะเบียนพรรณไม้เบื้องต้นและการฝึกอบรมบุคลากร',
      description: 'ส่งตัวแทนครูและบุคลากรเข้ารับการฝึกอบรมปฏิบัติการงานสวนพฤกษศาสตร์โรงเรียน ณ ศูนย์ อพ.สธ. คลองไผ่ จังหวัดนครราชสีมา และเริ่มจัดทำป้ายรหัสประจำต้น (ก.7-001) ครบถ้วนทุกต้นในวิทยาลัย',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80',
    },
    {
      year: 'พ.ศ. 2558',
      title: 'ได้รับพระราชทาน “ป้ายสนองพระราชดำริในงานสวนพฤกษศาสตร์โรงเรียน”',
      description: 'ด้วยความมุ่งมั่นในการดำเนินงานอย่างต่อเนื่องตาม 5 องค์ประกอบ วิทยาลัยอาชีวศึกษาอุดรธานีผ่านการประเมินและได้รับพระราชทานป้ายสนองพระราชดำริ นับเป็นเกียรติประวัติและความภาคภูมิใจสูงสุดของชาว UDVC',
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
      highlight: true,
    },
    {
      year: 'พ.ศ. 2563',
      title: 'การบูรณาการหลักสูตรวิชาชีพ 5 องค์ประกอบ และ 3 สาระการเรียนรู้',
      description: 'ยกระดับการเรียนรู้โดยให้ทุกแผนกวิชา ทั้งคหกรรม ศิลปกรรม คอมพิวเตอร์ และการตลาด นำสวนพฤกษศาสตร์ไปเป็นแหล่งเรียนรู้และพัฒนาสิ่งประดิษฐ์นวัตกรรมชุมชน',
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80',
    },
    {
      year: 'พ.ศ. 2566',
      title: 'รางวัลสถานศึกษาดีเด่นด้านการอนุรักษ์พันธุกรรมพืช ระดับอาชีวศึกษา',
      description: 'ได้รับรางวัลยกย่องเชิดชูเกียรติสถานศึกษาแกนนำการขับเคลื่อนงานสวนพฤกษศาสตร์โรงเรียน ประจำภาคตะวันออกเฉียงเหนือตอนบน พร้อมขยายผลสู่โรงเรียนเครือข่ายกว่า 15 แห่ง',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    },
    {
      year: 'พ.ศ. 2567 - ปัจจุบัน',
      title: 'พัฒนาระบบฐานข้อมูลดิจิทัล Smart Botanical Garden & AI Assistant',
      description: 'ก้าวสู่ยุคดิจิทัลด้วยการเปิดตัวเว็บไซต์และระบบสารสนเทศสวนพฤกษศาสตร์โรงเรียน เชื่อมต่อ QR Code ป้ายชื่อพรรณไม้สมบูรณ์ แบบบันทึก ก.7-003 ออนไลน์ และการให้บริการข้อมูลแก่สาธารณชน',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      highlight: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
        <Breadcrumb
          items={[
            { label: 'ประวัติงานสวนพฤกษศาสตร์ฯ' },
            { label: 'ประวัติความเป็นมา' },
          ]}
          onNavigate={onNavigate}
        />

        <PageHeader
          title="ประวัติงานสวนพฤกษศาสตร์โรงเรียน (Botanical History)"
          subtitle="Heritage, Milestones & Royal Initiative Commitment"
          description="ความเป็นมา พัฒนาการ และความภาคภูมิใจตลอดเกือบ 2 ทศวรรษ แห่งการดำเนินงานสนองพระราชดำริ โครงการอนุรักษ์พันธุกรรมพืชอันเนื่องมาจากพระราชดำริ สมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี (อพ.สธ.) ณ วิทยาลัยอาชีวศึกษาอุดรธานี"
          icon="history_edu"
          badge="เกียรติประวัติ UDVC"
        />

        {/* Narrative Introduction Card */}
        <div className="rounded-3xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 p-6 sm:p-8 md:p-10 shadow-xs mb-10">
          <SectionHeader
            title="วิสัยทัศน์และจุดมุ่งเน้นการดำเนินงาน"
            subtitle="Vision & Core Philosophy"
            icon="psychology"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            <div className="space-y-3">
              <p>
                งานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี เริ่มต้นขึ้นด้วยความสำนึกในพระมหากรุณาธิคุณอย่างหาที่สุดมิได้ ที่มุ่งหมายให้สถานศึกษาเป็นแหล่งรวบรวมพืชพรรณธรรมชาติ การปลูกจิตสำนึกให้แก่เยาวชน ให้รู้จักหวงแหน รัก และเข้าใจคุณค่าของทรัพยากรธรรมชาติในแผ่นดินไทย
              </p>
              <p>
                ด้วยจุดเด่นของสถานศึกษาอาชีวศึกษา เราไม่ได้จำกัดการเรียนรู้ไว้เพียงด้านพฤกษศาสตร์บริสุทธิ์ แต่ได้นำความรู้จากธรรมชาติมาต่อยอดสู่ทักษะวิชาชีพ ทั้งในสาขาวิจิตรศิลป์ คหกรรมศาสตร์ อาหารและโภชนาการ การแปรรูปผลิตภัณฑ์ ไปจนถึงเทคโนโลยีดิจิทัลและสารสนเทศ
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/10 border border-secondary/20 flex flex-col justify-between">
              <blockquote className="italic text-primary font-medium">
                “การดำเนินงานสวนพฤกษศาสตร์โรงเรียน มิใช่เพียงการสร้างสวนเพื่อความสวยงามภายนอก แต่คือการสร้างสวนแห่งปัญญาและคุณธรรมให้หยั่งรากลึกในจิตใจของผู้เรียนทุกคน”
              </blockquote>
              <div className="mt-4 pt-4 border-t border-secondary/20 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-2xl">verified</span>
                <div>
                  <h4 className="font-bold text-primary text-xs">วิทยาลัยอาชีวศึกษาอุดรธานี</h4>
                  <p className="text-[11px] text-secondary">สถานศึกษาสนองพระราชดำริ อพ.สธ.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Development Journey Timeline */}
        <div className="mb-12">
          <SectionHeader
            title="ลำดับเหตุการณ์และเส้นทางการพัฒนา (Milestones Timeline)"
            subtitle="Chronological Journey of RSPG UDVC"
            icon="timeline"
          />
          <Timeline items={historyTimeline} />
        </div>

        {/* Honor Badges / Awards Summary */}
        <div className="rounded-3xl bg-linear-to-br from-secondary/10 via-surface-container to-primary/10 border border-outline-variant/30 p-6 sm:p-8 mb-8">
          <SectionHeader
            title="เกียรติยศและรางวัลพระราชทาน"
            subtitle="Prestigious Royal & National Recognition"
            icon="emoji_events"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-5 rounded-2xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/20 space-y-2">
              <span className="material-symbols-outlined text-amber-600 text-3xl">military_tech</span>
              <h4 className="font-bold text-primary text-sm">ป้ายสนองพระราชดำริ</h4>
              <p className="text-on-surface-variant">ได้รับพระราชทานป้ายสนองพระราชดำริในงานสวนพฤกษศาสตร์โรงเรียน เกียรติบัตรขั้นที่ 1</p>
            </div>
            <div className="p-5 rounded-2xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/20 space-y-2">
              <span className="material-symbols-outlined text-secondary text-3xl">school</span>
              <h4 className="font-bold text-primary text-sm">สถานศึกษาแกนนำ อพ.สธ.</h4>
              <p className="text-on-surface-variant">ศูนย์การเรียนรู้ต้นแบบงานสวนพฤกษศาสตร์โรงเรียน สังกัดสำนักงานคณะกรรมการการอาชีวศึกษา</p>
            </div>
            <div className="p-5 rounded-2xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/20 space-y-2">
              <span className="material-symbols-outlined text-teal-600 text-3xl">groups</span>
              <h4 className="font-bold text-primary text-sm">เครือข่ายบริการชุมชน</h4>
              <p className="text-on-surface-variant">ร่วมกับมหาวิทยาลัยราชภัฏอุดรธานีและเทศบาลนครอุดรธานีในการขยายผลสู่ 15 โรงเรียนเครือข่าย</p>
            </div>
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
