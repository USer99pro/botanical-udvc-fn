import React from 'react';
import Breadcrumb from '../components/shared/Breadcrumb';
import PageHeader from '../components/shared/PageHeader';
import SectionHeader from '../components/shared/SectionHeader';
import Footer from '../components/shared/Footer';

export default function ThreeLearningAreasPage({ onNavigate }) {
  const strands = [
    {
      number: 'สาระที่ 1',
      title: 'ธรรมชาติแห่งชีวิต',
      subtitle: 'Nature of Life — The Wonder of Living Entities',
      icon: 'spa',
      theme: 'emerald',
      tagline: 'เรียนรู้เพื่อเข้าใจธรรมชาติ สัมผัสความมหัศจรรย์ของพืชพรรณและสิ่งมีชีวิต',
      description: 'มุ่งเน้นให้ผู้เรียนได้สัมผัส สังเกต และศึกษาพรรณไม้อย่างลึกซึ้ง เข้าใจวงจรชีวิต โครงสร้าง หน้าที่ การปรับตัว และความงดงามทางสุนทรียภาพของธรรมชาติ เพื่อสร้างจิตสำนึกแห่งความอ่อนโยนและความเคารพในคุณค่าของทุกสรรพชีวิต',
      keyConcepts: [
        'วงจรชีวิตและการเจริญเติบโตของพืช (Life Cycles)',
        'โครงสร้างหน้าที่ของเซลล์ เนื้อเยื่อ และอวัยวะพืช (Plant Anatomy)',
        'การปรับตัวทางสรีรวิทยาต่อสภาพแวดล้อมแห้งแล้งหรือชุ่มน้ำ',
        'ความหลากหลายทางชีวภาพของพืชในภาคตะวันออกเฉียงเหนือ',
        'สุนทรียภาพและการถ่ายทอดความประทับใจผ่านงานศิลปะและภาพวาด',
      ],
      vocationalApplication: 'เชื่อมโยงกับวิชาชีววิทยา ศิลปกรรม งานออกแบบลายผ้า และการจัดสวนภูมิทัศน์',
      quote: '“พืชทุกต้นมีภาษาและเรื่องเล่าของตนเอง การตั้งใจฟังคือจุดเริ่มต้นของการเรียนรู้”',
    },
    {
      number: 'สาระที่ 2',
      title: 'สรรพสิ่งล้วนพันเกี่ยว',
      subtitle: 'All Things are Interconnected — Ecological Web of Life',
      icon: 'hub',
      theme: 'teal',
      tagline: 'เข้าใจความเชื่อมโยง สายใยแห่งระบบนิเวศ และการอยู่ร่วมกันอย่างสมดุล',
      description: 'ศึกษาความสัมพันธ์อันสลับซับซ้อนระหว่างพืชกับสิ่งแวดล้อม ดิน น้ำ ลม แสงแดด แมลง จุลินทรีย์ ตลอดจนมนุษย์และชุมชน ให้ตระหนักว่าการเปลี่ยนแปลงในสิ่งหนึ่งย่อมส่งผลกระทบสะเทือนถึงสรรพสิ่งรอบตัว',
      keyConcepts: [
        'ห่วงโซ่อาหารและสายใยอาหารในระบบนิเวศสวนพฤกษศาสตร์',
        'ภาวะพึ่งพากันระหว่างพืชกับแมลงผสมเกสรและนก',
        'วัฏจักรธาตุอาหาร น้ำ คาร์บอน และบทบาทของพืชในการลดโลกร้อน',
        'ผลกระทบของกิจกรรมมนุษย์ต่อสมดุลธรรมชาติและการอนุรักษ์ฟื้นฟู',
        'การจัดการทรัพยากรธรรมชาติและสิ่งแวดล้อมในสถานศึกษาอย่างยั่งยืน',
      ],
      vocationalApplication: 'เชื่อมโยงกับวิชาวิทยาศาสตร์สิ่งแวดล้อม เกษตรกรรมยั่งยืน และการจัดการพลังงาน',
      quote: '“เด็ดดอกไม้สะเทือนถึงดวงดาว — ธรรมชาติคือร่างแหใยทองที่เชื่อมโยงทุกชีวิต”',
    },
    {
      number: 'สาระที่ 3',
      title: 'ประโยชน์แท้แก่มหาชน',
      subtitle: 'Ultimate Benefit to Humankind — Sustainable Utilization',
      icon: 'volunteer_activism',
      theme: 'amber',
      tagline: 'น้อมนำองค์ความรู้สู่การสร้างคุณประโยชน์ต่อสังคม ชุมชน และมนุษยชาติ',
      description: 'มุ่งการประยุกต์ใช้ความรู้จากพืชและฐานทรัพยากรท้องถิ่น เพื่อพัฒนาคุณภาพชีวิต สุขภาพ ศิลปวัฒนธรรม นวัตกรรม และเศรษฐกิจชุมชนอย่างมีคุณธรรม ตามรอยพระยุคลบาทเพื่อประโยชน์สุขของปวงชน',
      keyConcepts: [
        'พืชสมุนไพรและภูมิปัญญาการแพทย์แผนไทย/พื้นบ้านอีสาน',
        'การแปรรูปผลผลิต การสร้างมูลค่าเพิ่ม และนวัตกรรมผลิตภัณฑ์ชีวภาพ (BCG)',
        'พืชให้สีย้อมธรรมชาติในงานหัตถกรรมสิ่งทอพื้นเมืองอุดรธานี',
        'การออกแบบเชิงนิเวศและการใช้ประโยชน์จากเนื้อไม้/เส้นใยอย่างคุ้มค่า',
        'การแบ่งปันความรู้ จิตอาสา และการถ่ายทอดสู่เยาวชนและชุมชน',
      ],
      vocationalApplication: 'เชื่อมโยงกับวิชาคหกรรม อาหารและโภชนาการ การตลาด การท่องเที่ยว และการบริหารธุรกิจ',
      quote: '“ประโยชน์สูงสุดของความรู้ มิใช่อยู่ที่การสะสมไว้ แต่อยู่ที่การนำไปสร้างความสุขให้ผู้อื่น”',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
        <Breadcrumb
          items={[{ label: '3 สาระการเรียนรู้' }]}
          onNavigate={onNavigate}
        />

        <PageHeader
          title="3 สาระการเรียนรู้ งานสวนพฤกษศาสตร์โรงเรียน"
          subtitle="The 3 Core Learning Strands of RSPG Botanical Education"
          description="ปรัชญาและเสาหลักแห่งการเรียนรู้ตามแนวพระราชดำริ อพ.สธ. เพื่อปลูกฝังปัญญา คุณธรรม และจิตสำนึกแห่งการอนุรักษ์ทรัพยากรธรรมชาติและวัฒนธรรมท้องถิ่นในเยาวชนอาชีวศึกษา"
          icon="psychology"
          badge="ปรัชญาการเรียนรู้ อพ.สธ."
        />

        {/* 3 Main Strand Cards */}
        <div className="space-y-8 mb-12">
          {strands.map((strand, index) => (
            <div
              key={index}
              className="rounded-3xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30 p-6 sm:p-8 md:p-10 shadow-xs hover:border-secondary/50 hover:shadow-lg transition-all relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-outline-variant/20 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center shrink-0 shadow-xs">
                    <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {strand.icon}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-1">
                      {strand.number}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                      {strand.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-secondary font-medium">
                      {strand.subtitle}
                    </p>
                  </div>
                </div>

                <div className="bg-surface-container px-4 py-3 rounded-2xl max-w-sm">
                  <p className="text-xs italic text-on-surface-variant leading-relaxed">
                    {strand.quote}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-5">
                  <div>
                    <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                      ความหมายและเป้าประสงค์
                    </h4>
                    <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                      {strand.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-3">
                      หัวข้อและสาระสำคัญในการเรียนรู้ (Key Concepts)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {strand.keyConcepts.map((concept, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-container text-xs text-on-surface">
                          <span className="material-symbols-outlined text-secondary text-base mt-0.5 shrink-0">check_circle</span>
                          <span>{concept}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-surface-container space-y-2">
                    <h4 className="text-xs font-bold text-primary flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-base">school</span>
                      <span>การบูรณาการกับสายวิชาชีพ UDVC</span>
                    </h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {strand.vocationalApplication}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-secondary/30 bg-secondary/5 space-y-2">
                    <h4 className="text-xs font-bold text-primary flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-base">lightbulb</span>
                      <span>เชื่อมโยงสู่ผลงานนวัตกรรม</span>
                    </h4>
                    <p className="text-xs text-on-surface-variant">
                      นำสาระนี้ไปประยุกต์เป็นโครงงาน สิ่งประดิษฐ์ หรือนวัตกรรมนักศึกษา
                    </p>
                    <button
                      type="button"
                      onClick={() => onNavigate && onNavigate('projects')}
                      className="text-xs font-bold text-secondary hover:underline flex items-center gap-1 pt-1"
                    >
                      <span>ดูผลงานที่เกี่ยวข้อง</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Call to action */}
        <div className="p-8 rounded-3xl bg-linear-to-r from-secondary/15 via-surface-container-high/40 to-primary/15 border border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-primary">
              ต้องการนำ 3 สาระการเรียนรู้ไปจัดทำแผนการสอนบูรณาการ?
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant">
              ดาวน์โหลดคู่มือแผนบูรณาการและตัวอย่างแผนการจัดการเรียนรู้ของวิทยาลัยอาชีวศึกษาอุดรธานี
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate && onNavigate('integrationGuide')}
            className="px-6 py-3 rounded-xl bg-primary text-on-primary font-bold text-xs sm:text-sm hover:bg-secondary transition-colors cursor-pointer shrink-0 shadow-sm flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">download</span>
            <span>ดาวน์โหลดคู่มือแผนบูรณาการ</span>
          </button>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
