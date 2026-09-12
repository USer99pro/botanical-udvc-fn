import React from 'react';

export default function AboutConservationPage({ onNavigate }) {
  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
  };

  return (
    <div className="min-h-screen bg-background text-on-background">
      <main className="pt-8">
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16">
          <div 
            className="relative h-[480px] md:h-[580px] rounded-2xl overflow-hidden shadow-md" 
            style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBMrQRvPvDJspC1V_rUvrzW-Ojw1YxfBuXYIYJ_xaIkML2T1eExpQk_pYLlGxyFZp72YRxWfOJnY2I1Ni1raLmjbGq341i32zCyQdoKH7Uqh30QcjY9AEJIIv4DEupW_NrguSuWjMLz3erX88VO6futjIZfsS4s_945qEGtKShyVqWhzP2toi27KIU0awaV7GeUwau5BqPPStxrTIoCFPw2hPMXEoCLBZKSW0jOebmFPf8YB-nbSpUv_A\')', backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col justify-end p-8 md:p-16 text-on-primary">
              <span className="font-label-sm text-secondary-fixed tracking-widest uppercase mb-2">งานสวนพฤกษศาสตร์โรงเรียน UDVC</span>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-4 text-white">
                ปลูกฝังภูมิปัญญา อนุรักษ์ธรรมชาติ
              </h1>
              <p className="font-body-lg text-body-lg max-w-2xl text-surface-container-low/90">
                ภารกิจของเราคือการปกป้องพรรณพืชและสร้างจิตสำนึกในการอนุรักษ์พันธุกรรมพืชผ่าน 5 องค์ประกอบ และ 3 สาระการเรียนรู้
              </p>
            </div>
          </div>
        </section>

        {/* Mission & History */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-20 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-6 space-y-6">
            <span className="font-label-sm text-secondary uppercase tracking-widest block">ประวัติและความเป็นมา</span>
            <h2 className="font-headline-md text-headline-md text-primary">ความเป็นมางานสวนพฤกษศาสตร์</h2>
            <div className="w-16 h-1 bg-secondary rounded-full"></div>
            <p className="text-on-surface-variant leading-relaxed font-body-md text-body-md">
              งานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี ดำเนินงานเพื่อสนองพระราชดำริ โครงการอนุรักษ์พันธุกรรมพืชอันเนื่องมาจากพระราชดำริ สมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี (อพ.สธ.)
            </p>
            <p className="text-on-surface-variant leading-relaxed font-body-md text-body-md">
              เป็นศูนย์กลางการเรียนรู้ด้านพฤกษศาสตร์ การเก็บรวบรวมตัวอย่างพรรณไม้ การจัดทำป้ายชื่อพรรณไม้สมบูรณ์ ทะเบียนพรรณไม้ (ก.7-003) และการบูรณาการเข้ากับการเรียนการสอนในทุกสาขาวิชาชีพ
            </p>
          </div>
          <div className="md:col-span-6 relative">
            <img 
              className="rounded-2xl object-cover w-full h-[400px] shadow-md" 
              alt="Botanist inspecting plants" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwghYY5sdDmKcimVnhTNz7FxYYpLg60v3CNCqSFzwHLHyzYrFM1cHP-WnKdl_kWemU3MSAeD6v2OHaBJ-W5pOZlDVb1BQmDljjGHFQqcbcl07z7fEFZ7MIbKMCfr7cBM8gGcKMVl4Urtcc1isldxoed72bXzssoN1AfMNKOf0LgfPJQQfdMeMCMdinTd0opHg1LoeSOfaCKLZeBYLBBxRLMaEhRJXr9UcRFuet1m-DnFGehnO_HSu_fg"
            />
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-2xl shadow-xl max-w-[260px] hidden md:block border border-outline-variant/30">
              <span className="material-symbols-outlined text-secondary text-3xl mb-2">energy_savings_leaf</span>
              <p className="font-label-md text-label-md text-primary font-bold">พรรณพืชกว่า 5,000 ชนิดในความดูแล</p>
            </div>
          </div>
        </section>

        {/* 5 Elements & 3 Learning Pillars */}
        <section className="bg-surface-container-low py-20 mb-20">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-14">
              <span className="font-label-sm text-secondary uppercase tracking-widest block mb-1">กรอบการดำเนินงาน อพ.สธ.</span>
              <h2 className="font-headline-md text-headline-md text-primary mb-3">5 องค์ประกอบ และ 3 สาระการเรียนรู้</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                ขับเคลื่อนการศึกษาและอนุรักษ์ธรรมชาติอย่างเป็นระบบและยั่งยืน
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm flex flex-col hover:-translate-y-1 transition-transform duration-300 border border-outline-variant/20">
                <div className="bg-secondary-container text-secondary w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined">yard</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">5 องค์ประกอบพฤกษศาสตร์</h3>
                <p className="text-on-surface-variant flex-grow font-body-md text-body-md">
                  1. การจัดทำป้ายชื่อพรรณไม้<br />
                  2. การรวบรวมพรรณไม้เข้าปลูก<br />
                  3. การศึกษาข้อมูลด้านต่างๆ<br />
                  4. การรายงานผลการเรียนรู้<br />
                  5. การนำไปใช้ประโยชน์ทางการศึกษา
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm flex flex-col hover:-translate-y-1 transition-transform duration-300 border border-outline-variant/20">
                <div className="bg-secondary-container text-secondary w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined">menu_book</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">3 สาระการเรียนรู้</h3>
                <p className="text-on-surface-variant flex-grow font-body-md text-body-md">
                  1. พืชศึกษา (ธรรมชาติแห่งชีวิต)<br />
                  2. สรรพสิ่งล้วนพันเกี่ยว (สรรพสิ่งในระบบนิเวศ)<br />
                  3. ประโยชน์แท้แก่มหาชน (การใช้ประโยชน์อย่างยั่งยืน)
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm flex flex-col hover:-translate-y-1 transition-transform duration-300 border border-outline-variant/20">
                <div className="bg-secondary-container text-secondary w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined">forest</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">ฐานทรัพยากรท้องถิ่น</h3>
                <p className="text-on-surface-variant flex-grow font-body-md text-body-md">
                  การสำรวจ เก็บรวบรวม และอนุรักษ์พันธุ์ไม้พื้นถิ่นของจังหวัดอุดรธานีและภาคตะวันออกเฉียงเหนือ เพื่อเป็นคลังภูมิปัญญาแก่คนรุ่นหลัง
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-20 text-center">
          <div className="bg-primary text-on-primary p-12 rounded-3xl shadow-xl space-y-6">
            <h2 className="font-headline-md text-headline-md text-white">ศึกษาทะเบียนพรรณไม้และข้อมูลพฤกษศาสตร์</h2>
            <p className="font-body-lg max-w-xl mx-auto text-surface-container-low/90">
              สวนพฤกษศาสตร์โรงเรียนเปิดให้เข้าถึงฐานข้อมูลพืชศึกษา ก.7-003 สำหรับนักเรียน นักศึกษา และผู้สนใจทุกท่าน
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => handleNav('explorer')}
                className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-md text-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-all cursor-pointer shadow-lg flex items-center gap-2"
              >
                <span>สำรวจทะเบียนพืชศึกษา</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-surface-container-lowest dark:bg-surface-container-highest border-t border-outline-variant/30 py-12">
        <div className="max-w-container-max mx-auto px-margin-desktop text-center">
          <p className="font-body-md text-body-md text-on-surface-variant">
            © 2024 งานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี (School Botanical Garden by Udonthani Vocatinoal College) — สงวนลิขสิทธิ์ทั้งหมด
          </p>
        </div>
      </footer>
    </div>
  );
}
