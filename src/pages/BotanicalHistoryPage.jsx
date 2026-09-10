import React from 'react';
import Breadcrumb from '../components/shared/Breadcrumb';
import PageHeader from '../components/shared/PageHeader';
import SectionHeader from '../components/shared/SectionHeader';
import Timeline from '../components/shared/Timeline';
import Footer from '../components/shared/Footer';
import historyMainImage from '../../img-about/unnamed (1).jpg';
import historyAwardStepOneImage from '../../img-about/unnamed.png';
import historyAwardStepTwoImage from '../../img-about/unnamed.jpg';
import historyRoyalPlaqueImage from '../../img-about/unnamed (2).jpg';

export default function BotanicalHistoryPage({ onNavigate }) {
  const historyTimeline = [
    {
      year: 'พ.ศ. 2544 - 2545',
      title: 'สมัครและได้รับการพิจารณาเป็นสมาชิกงานสวนพฤกษศาสตร์โรงเรียน',
      description: 'วิทยาลัยอาชีวศึกษาอุดรธานีสมัครเป็นสมาชิกโครงการอนุรักษ์พันธุกรรมพืชอันเนื่องมาจากพระราชดำริฯ ในกิจกรรมที่ 7 การสร้างจิตสำนึก ในปีพุทธศักราช 2544 และได้รับการพิจารณาเป็นสมาชิกงานสวนพฤกษศาสตร์โรงเรียนในปีพุทธศักราช 2545 หมายเลขสมาชิก 7-41000-003',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      highlight: true,
    },
    {
      year: 'พ.ศ. 2548',
      title: 'รับพระราชทานป้ายสนองพระราชดำริในงานสวนพฤกษศาสตร์โรงเรียน',
      description: 'วิทยาลัยอาชีวศึกษาอุดรธานีรับพระราชทานป้ายสนองพระราชดำริในงานสวนพฤกษศาสตร์โรงเรียน จากสมเด็จพระกนิษฐาธิราชเจ้า กรมสมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี โดยนางสุภัทรา สัจจา ผู้อำนวยการ และนางเบญจา เมฆกมล รองผู้อำนวยการฝ่ายวิชาการในขณะนั้น',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80',
      highlight: true,
    },
    {
      year: 'พ.ศ. 2552',
      title: 'รับพระราชทานเกียรติบัตร ขั้นที่ 1',
      description: 'ได้รับพระราชทานเกียรติบัตร ขั้นที่ 1 เกียรติบัตรแห่งความมุ่งมั่น อนุรักษ์สรรพสิ่ง สรรพชีวิต ด้วยจิตสำนึกของครูและเยาวชน โดยนางกุลฐนัญจ์ ดีเอื้อ ผู้อำนวยการ และนางจินดารัตน์ กรีชัยศรี รองผู้อำนวยการฝ่ายวิชาการในขณะนั้น',
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
      highlight: true,
    },
    {
      year: 'พ.ศ. 2555',
      title: 'รับพระราชทานเกียรติบัตร ขั้นที่ 2',
      description: 'ได้รับพระราชทานเกียรติบัตร ขั้นที่ 2 เกียรติบัตรแห่งการเข้าสู่สถานภาพสถานศึกษาอบรมสั่งสอนเบ็ดเสร็จ โดยนางกุลฐนัญจ์ ดีเอื้อ ผู้อำนวยการ และนางพรนภัส กรีชัยศรี รองผู้อำนวยการฝ่ายวิชาการในขณะนั้น',
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80',
    },
    {
      year: 'พ.ศ. 2560',
      title: 'เยี่ยมชมอาคารสวนพฤกษศาสตร์โรงเรียนหลังใหม่',
      description: 'เมื่อวันที่ 1 พฤษภาคม 2560 ดร.บุญส่ง จำปาโพธิ์ รองเลขาธิการคณะกรรมการการอาชีวศึกษา ได้ร่วมแสดงความยินดีและเยี่ยมชมอาคารสวนพฤกษศาสตร์โรงเรียนหลังใหม่',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
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
          description="ความเป็นมา พัฒนาการ และความภาคภูมิใจจากการดำเนินงานสนองพระราชดำริ โครงการอนุรักษ์พันธุกรรมพืชอันเนื่องมาจากพระราชดำริฯ (อพ.สธ.) ณ วิทยาลัยอาชีวศึกษาอุดรธานี ตั้งแต่ปีพุทธศักราช 2544"
          icon="history_edu"
          badge="เกียรติประวัติ UDVC"
        />

        <figure className="relative mb-10 overflow-hidden rounded-3xl border border-outline-variant/30 bg-surface-container-lowest shadow-md">
          <img
            src={historyMainImage}
            alt="ภาพสถานที่จัดแสดงพระบรมฉายาลักษณ์และเกียรติบัตรของงานสวนพฤกษศาสตร์โรงเรียน"
            className="block h-auto w-full object-contain"
          />
          <figcaption className="border-t border-outline-variant/20 bg-surface-container-low px-6 py-4 text-sm font-medium text-primary sm:px-8">
            ความภาคภูมิใจและเกียรติประวัติของงานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี
          </figcaption>
        </figure>

        <section className="mb-10">
          <SectionHeader
            title="ภาพเกียรติประวัติและเอกสารสำคัญ"
            subtitle="Historical Recognition"
            icon="workspace_premium"
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {[
              {
                src: historyRoyalPlaqueImage,
                alt: 'ป้ายสนองพระราชดำริในงานสวนพฤกษศาสตร์โรงเรียน',
                caption: 'ป้ายสนองพระราชดำริในงานสวนพฤกษศาสตร์โรงเรียน พ.ศ. 2548',
              },
              {
                src: historyAwardStepOneImage,
                alt: 'เกียรติบัตรงานสวนพฤกษศาสตร์โรงเรียน ขั้นที่ 1',
                caption: 'เกียรติบัตรงานสวนพฤกษศาสตร์โรงเรียน ขั้นที่ 1 พ.ศ. 2552',
              },
              {
                src: historyAwardStepTwoImage,
                alt: 'เกียรติบัตรงานสวนพฤกษศาสตร์โรงเรียน ขั้นที่ 2',
                caption: 'เกียรติบัตรงานสวนพฤกษศาสตร์โรงเรียน ขั้นที่ 2 พ.ศ. 2555',
              },
            ].map((image) => (
              <figure
                key={image.src}
                className="overflow-hidden rounded-3xl border border-outline-variant/30 bg-surface-container-lowest shadow-sm"
              >
                <div className="flex min-h-64 items-center justify-center bg-surface-container-low p-3">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="block h-auto max-h-[28rem] w-full object-contain"
                  />
                </div>
                <figcaption className="border-t border-outline-variant/20 px-4 py-3 text-xs font-medium leading-relaxed text-primary">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

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
              <p className="text-on-surface-variant">ได้รับพระราชทานป้ายสนองพระราชดำริในงานสวนพฤกษศาสตร์โรงเรียน เมื่อปีพุทธศักราช 2548</p>
            </div>
            <div className="p-5 rounded-2xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/20 space-y-2">
              <span className="material-symbols-outlined text-secondary text-3xl">school</span>
              <h4 className="font-bold text-primary text-sm">เกียรติบัตร ขั้นที่ 1</h4>
              <p className="text-on-surface-variant">เกียรติบัตรแห่งความมุ่งมั่น อนุรักษ์สรรพสิ่ง สรรพชีวิต ด้วยจิตสำนึกของครูและเยาวชน พ.ศ. 2552</p>
            </div>
            <div className="p-5 rounded-2xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/20 space-y-2">
              <span className="material-symbols-outlined text-teal-600 text-3xl">groups</span>
              <h4 className="font-bold text-primary text-sm">เกียรติบัตร ขั้นที่ 2</h4>
              <p className="text-on-surface-variant">เกียรติบัตรแห่งการเข้าสู่สถานภาพสถานศึกษาอบรมสั่งสอนเบ็ดเสร็จ พ.ศ. 2555</p>
            </div>
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
