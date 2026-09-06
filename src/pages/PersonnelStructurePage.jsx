import React, { useState } from 'react';
import Breadcrumb from '../components/shared/Breadcrumb';
import PageHeader from '../components/shared/PageHeader';
import SectionHeader from '../components/shared/SectionHeader';
import PersonnelCard from '../components/shared/PersonnelCard';
import Footer from '../components/shared/Footer';

export default function PersonnelStructurePage({ onNavigate }) {
  const [selectedGroup, setSelectedGroup] = useState('all');

  const groups = [
    { id: 'all', label: 'บุคลากรทั้งหมด' },
    { id: 'executive', label: 'คณะผู้บริหาร' },
    { id: 'head', label: 'หัวหน้างานและรองหัวหน้างาน' },
    { id: 'academic', label: 'ฝ่ายวิชาการและทะเบียน ก.7-003' },
    { id: 'garden', label: 'ฝ่ายเรือนเพาะชำและอนุรักษ์' },
    { id: 'media', label: 'ฝ่ายสารสนเทศและสื่อดิจิทัล' },
  ];

  const personnelList = [
    {
      id: 'p-01',
      name: 'ดร.สมชาย เจริญสุขภิญโญ',
      position: 'ผู้อำนวยการวิทยาลัยอาชีวศึกษาอุดรธานี',
      role: 'ประธานคณะกรรมการอำนวยการงานสวนพฤกษศาสตร์โรงเรียน',
      department: 'คณะผู้บริหารวิทยาลัย',
      group: 'executive',
      badge: 'ประธานกรรมการ',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      email: 'director@udvc.ac.th',
      phone: '042-221-538 ต่อ 101',
    },
    {
      id: 'p-02',
      name: 'นางวรัญญา ภัทรเดชาชัย',
      position: 'รองผู้อำนวยการฝ่ายวิชาการ',
      role: 'รองประธานกรรมการฝ่ายวิชาการและแผนการจัดการเรียนรู้',
      department: 'ฝ่ายวิชาการ',
      group: 'executive',
      badge: 'รองประธานกรรมการ',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      email: 'academic@udvc.ac.th',
      phone: '042-221-538 ต่อ 102',
    },
    {
      id: 'p-03',
      name: 'นายสมศักดิ์ สุวรรณรัตน์',
      position: 'ครูชำนาญการพิเศษ สาขาวิชาวิทยาศาสตร์',
      role: 'หัวหน้างานสวนพฤกษศาสตร์โรงเรียน UDVC',
      department: 'งานสวนพฤกษศาสตร์โรงเรียน',
      group: 'head',
      badge: 'หัวหน้างาน',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      email: 'somsak.s@udvc.ac.th',
      phone: '042-221-538 ต่อ 205',
    },
    {
      id: 'p-04',
      name: 'นางสาวจริยา บุญชูผล',
      position: 'ครูชำนาญการ สาขาวิชาคหกรรมศาสตร์',
      role: 'รองหัวหน้างาน / ผู้รับผิดชอบฝ่ายวิชาการและแบบบันทึก ก.7-003',
      department: 'แผนกวิชาคหกรรมศาสตร์',
      group: 'academic',
      badge: 'ฝ่ายทะเบียน ก.7-003',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
      email: 'jariya.b@udvc.ac.th',
      phone: '042-221-538 ต่อ 206',
    },
    {
      id: 'p-05',
      name: 'นายพงษ์ศักดิ์ ธรรมรัตน์ศิลป์',
      position: 'ครู สาขาวิชาวิจิตรศิลป์',
      role: 'กรรมการฝ่ายภาพวาดพฤกษศาสตร์และตัวอย่างพรรณไม้แห้ง',
      department: 'แผนกวิชาวิจิตรศิลป์',
      group: 'academic',
      badge: 'ฝ่ายศิลปะพฤกษศาสตร์',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      email: 'pongsak.t@udvc.ac.th',
      phone: '042-221-538 ต่อ 302',
    },
    {
      id: 'p-06',
      name: 'นายณัฐวุฒิ การุณยพงศ์',
      position: 'ครู สาขาวิชาพืชศาสตร์และเกษตรกรรม',
      role: 'กรรมการผู้รับผิดชอบเรือนเพาะชำและการขยายพันธุ์ (องค์ประกอบที่ 2)',
      department: 'ฝ่ายอาคารสถานที่และแปลงปลูก',
      group: 'garden',
      badge: 'ฝ่ายเรือนเพาะชำ',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      email: 'nattawut.k@udvc.ac.th',
      phone: '042-221-538 ต่อ 315',
    },
    {
      id: 'p-07',
      name: 'นายอัครเดช รุ่งเรืองกิจ',
      position: 'ครู สาขาวิชาเทคโนโลยีสารสนเทศ',
      role: 'กรรมการผู้รับผิดชอบระบบสารสนเทศดิจิทัล ป้าย QR Code และเว็บไซต์',
      department: 'แผนกวิชาเทคโนโลยีสารสนเทศ',
      group: 'media',
      badge: 'ฝ่ายเทคโนโลยีดิจิทัล',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
      email: 'akkaradej.r@udvc.ac.th',
      phone: '042-221-538 ต่อ 408',
    },
    {
      id: 'p-08',
      name: 'นางกรรณิการ์ สวัสดิ์ผลดี',
      position: 'ครู สาขาวิชาการตลาด',
      role: 'กรรมการฝ่ายนิทรรศการ เครือข่ายชุมชน และการแปรรูปผลิตภัณฑ์',
      department: 'แผนกวิชาการตลาด',
      group: 'media',
      badge: 'ฝ่ายเผยแพร่และชุมชน',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      email: 'kannika.s@udvc.ac.th',
      phone: '042-221-538 ต่อ 501',
    },
  ];

  const filteredPersonnel = personnelList.filter(
    (p) => selectedGroup === 'all' || p.group === selectedGroup
  );

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
        <Breadcrumb
          items={[{ label: 'โครงสร้างบุคลากร' }]}
          onNavigate={onNavigate}
        />

        <PageHeader
          title="โครงสร้างบุคลากรงานสวนพฤกษศาสตร์โรงเรียน"
          subtitle="Personnel Structure & Committee of School Botanical Garden UDVC"
          description="ทำเนียบคณะผู้บริหาร คณาจารย์ เจ้าหน้าที่ และคณะกรรมการดำเนินงานสวนพฤกษศาสตร์โรงเรียน โครงการอนุรักษ์พันธุกรรมพืชฯ (อพ.สธ.) วิทยาลัยอาชีวศึกษาอุดรธานี ผู้ขับเคลื่อนภารกิจการอนุรักษ์และการเรียนรู้"
          icon="groups"
          badge="คณะกรรมการดำเนินงาน"
        />

        {/* Group Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {groups.map((grp) => {
            const isSelected = selectedGroup === grp.id;
            return (
              <button
                key={grp.id}
                type="button"
                onClick={() => setSelectedGroup(grp.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-secondary text-on-secondary shadow-xs'
                    : 'bg-surface-container hover:bg-surface-container-high text-on-surface-variant'
                }`}
              >
                {grp.label}
              </button>
            );
          })}
        </div>

        {/* Organization Hierarchy Chart / Diagram Preview */}
        <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-surface-container-lowest dark:bg-surface-dim border border-outline-variant/30">
          <SectionHeader
            title="ผังสายการบังคับบัญชาและการประสานงาน (Organization Chart)"
            subtitle="Executive & Operational Hierarchy"
            icon="account_tree"
          />
          <div className="flex flex-col items-center gap-4 text-center max-w-2xl mx-auto py-4">
            <div className="p-4 rounded-2xl bg-secondary/15 border border-secondary/30 w-full max-w-sm">
              <span className="text-[10px] font-bold text-secondary uppercase">ระดับนโยบาย</span>
              <h4 className="font-bold text-primary text-sm mt-0.5">ผู้อำนวยการวิทยาลัยอาชีวศึกษาอุดรธานี</h4>
              <p className="text-xs text-on-surface-variant">ประธานคณะกรรมการอำนวยการ</p>
            </div>

            <div className="w-0.5 h-6 bg-secondary/40" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="p-3.5 rounded-xl bg-surface-container border border-outline-variant/20">
                <span className="text-[10px] font-bold text-secondary">ฝ่ายวิชาการและบูรณาการ</span>
                <h5 className="font-bold text-primary text-xs mt-0.5">รองผู้อำนวยการฝ่ายวิชาการ</h5>
              </div>
              <div className="p-3.5 rounded-xl bg-surface-container border border-outline-variant/20">
                <span className="text-[10px] font-bold text-secondary">ฝ่ายบริหารและปฏิบัติการ</span>
                <h5 className="font-bold text-primary text-xs mt-0.5">หัวหน้างานสวนพฤกษศาสตร์โรงเรียน</h5>
              </div>
            </div>

            <div className="w-0.5 h-6 bg-secondary/40" />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full text-[11px]">
              <div className="p-2.5 rounded-lg bg-surface-container border border-outline-variant/15">
                <span className="font-bold text-primary block">ฝ่ายทะเบียน ก.7-003</span>
                <span className="text-on-surface-variant">งานสำรวจ & เอกสาร</span>
              </div>
              <div className="p-2.5 rounded-lg bg-surface-container border border-outline-variant/15">
                <span className="font-bold text-primary block">ฝ่ายเรือนเพาะชำ</span>
                <span className="text-on-surface-variant">การขยายพันธุ์ & ปลูก</span>
              </div>
              <div className="p-2.5 rounded-lg bg-surface-container border border-outline-variant/15">
                <span className="font-bold text-primary block">ฝ่ายศิลปะ & ตัวอย่าง</span>
                <span className="text-on-surface-variant">ภาพวาด & พืชแห้ง</span>
              </div>
              <div className="p-2.5 rounded-lg bg-surface-container border border-outline-variant/15">
                <span className="font-bold text-primary block">ฝ่ายดิจิทัล & สื่อ</span>
                <span className="text-on-surface-variant">ระบบ QR Code & Web</span>
              </div>
            </div>
          </div>
        </div>

        {/* Personnel Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredPersonnel.map((person) => (
            <PersonnelCard key={person.id} person={person} />
          ))}
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
