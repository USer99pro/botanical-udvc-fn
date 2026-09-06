const fs = require('fs');
const path = require('path');
const { htmlToJsx } = require('./convert.cjs');

const SRC_DIR = path.resolve(__dirname, '../src');
const PAGES_DIR = path.join(SRC_DIR, 'pages');
const MODALS_DIR = path.join(SRC_DIR, 'components/modals');
const COMMON_DIR = path.join(SRC_DIR, 'components/common');

[PAGES_DIR, MODALS_DIR, COMMON_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Helper to sanitize any remaining JSX quirks
function sanitizeJsx(code) {
  return code
    .replace(/onclick=/gi, 'onClick=')
    .replace(/onchange=/gi, 'onChange=')
    .replace(/onsubmit=/gi, 'onSubmit=')
    // Fix unclosed img/input if any
    .replace(/<img\s+([^>]*[^\/])>/gi, '<img $1 />')
    .replace(/<input\s+([^>]*[^\/])>/gi, '<input $1 />')
    .replace(/<hr\s*>/gi, '<hr />')
    .replace(/<br\s*>/gi, '<br />');
}

// 1. Convert HomePage
const homeHtml = fs.readFileSync('stitch_/stitch_/verdant_wisdom/code.html', 'utf8');
let homeBody = htmlToJsx(homeHtml);
homeBody = sanitizeJsx(homeBody);

const homeComponent = `import React from 'react';

export default function HomePage({ onNavigate, onOpenSearch, onOpenPlanVisit, onOpenMobileMenu }) {
  return (
    <div className="min-h-screen bg-background text-on-background">
      ${homeBody}
    </div>
  );
}
`;
fs.writeFileSync(path.join(PAGES_DIR, 'HomePage.jsx'), homeComponent, 'utf8');
console.log('Created HomePage.jsx');

// 2. Convert DashboardPage
const dashHtml = fs.readFileSync('stitch_/stitch_/dashboard/code.html', 'utf8');
let dashBody = htmlToJsx(dashHtml);
dashBody = sanitizeJsx(dashBody);

const dashComponent = `import React, { useState } from 'react';

export default function DashboardPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-background text-on-background">
      ${dashBody}
    </div>
  );
}
`;
fs.writeFileSync(path.join(PAGES_DIR, 'DashboardPage.jsx'), dashComponent, 'utf8');
console.log('Created DashboardPage.jsx');

// 3. Convert PlantDetailPage
const detailHtml = fs.readFileSync('stitch_/stitch_/monstera/code.html', 'utf8');
let detailBody = htmlToJsx(detailHtml);
detailBody = sanitizeJsx(detailBody);

const detailComponent = `import React, { useState } from 'react';

export default function PlantDetailPage({ onNavigate, onOpenSearch, onOpenPlanVisit }) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-background text-on-background">
      ${detailBody}
    </div>
  );
}
`;
fs.writeFileSync(path.join(PAGES_DIR, 'PlantDetailPage.jsx'), detailComponent, 'utf8');
console.log('Created PlantDetailPage.jsx');

// 4. Convert PlantCategoriesPage
const catHtml = fs.readFileSync('stitch_/stitch_/_1/code.html', 'utf8');
let catBody = htmlToJsx(catHtml);
catBody = sanitizeJsx(catBody);

const catComponent = `import React, { useState } from 'react';

export default function PlantCategoriesPage({ onNavigate, onOpenSearch }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen bg-background text-on-background">
      ${catBody}
    </div>
  );
}
`;
fs.writeFileSync(path.join(PAGES_DIR, 'PlantCategoriesPage.jsx'), catComponent, 'utf8');
console.log('Created PlantCategoriesPage.jsx');

// 5. Convert AddPlantPage
const addHtml = fs.readFileSync('stitch_/stitch_/_2/code.html', 'utf8');
let addBody = htmlToJsx(addHtml);
addBody = sanitizeJsx(addBody);

const addComponent = `import React, { useState } from 'react';

export default function AddPlantPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    commonName: '',
    scientificName: '',
    family: '',
    category: '',
    location: '',
    description: '',
    careInstructions: ''
  });

  return (
    <div className="min-h-screen bg-background text-on-background">
      ${addBody}
    </div>
  );
}
`;
fs.writeFileSync(path.join(PAGES_DIR, 'AddPlantPage.jsx'), addComponent, 'utf8');
console.log('Created AddPlantPage.jsx');

// 6. Convert PlantExplorerPage
const expHtml = fs.readFileSync('stitch_/stitch_/_3/code.html', 'utf8');
let expBody = htmlToJsx(expHtml);
expBody = sanitizeJsx(expBody);

const expComponent = `import React, { useState } from 'react';

export default function PlantExplorerPage({ onNavigate, onOpenSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="min-h-screen bg-background text-on-background">
      ${expBody}
    </div>
  );
}
`;
fs.writeFileSync(path.join(PAGES_DIR, 'PlantExplorerPage.jsx'), expComponent, 'utf8');
console.log('Created PlantExplorerPage.jsx');

// 7. Convert RegisterPage
const regHtml = fs.readFileSync('stitch_/stitch_/_4/code.html', 'utf8');
let regBody = htmlToJsx(regHtml);
regBody = sanitizeJsx(regBody);

const regComponent = `import React, { useState } from 'react';

export default function RegisterPage({ onNavigate }) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    membershipType: 'general'
  });

  return (
    <div className="min-h-screen bg-background text-on-background">
      ${regBody}
    </div>
  );
}
`;
fs.writeFileSync(path.join(PAGES_DIR, 'RegisterPage.jsx'), regComponent, 'utf8');
console.log('Created RegisterPage.jsx');

// 8. Convert AboutConservationPage
const aboutHtml = fs.readFileSync('stitch_/stitch_/_6/code.html', 'utf8');
let aboutBody = htmlToJsx(aboutHtml);
aboutBody = sanitizeJsx(aboutBody);

const aboutComponent = `import React from 'react';

export default function AboutConservationPage({ onNavigate, onOpenPlanVisit }) {
  return (
    <div className="min-h-screen bg-background text-on-background">
      ${aboutBody}
    </div>
  );
}
`;
fs.writeFileSync(path.join(PAGES_DIR, 'AboutConservationPage.jsx'), aboutComponent, 'utf8');
console.log('Created AboutConservationPage.jsx');

// 9. Convert SearchOverlayModal
const searchHtml = fs.readFileSync('stitch_/stitch_/search_overlay_verdant_wisdom/code.html', 'utf8');
let searchBody = htmlToJsx(searchHtml);
searchBody = sanitizeJsx(searchBody);

const searchComponent = `import React, { useState } from 'react';

export default function SearchOverlayModal({ isOpen, onClose, onNavigate }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-surface/95 backdrop-blur-md">
      ${searchBody}
    </div>
  );
}
`;
fs.writeFileSync(path.join(MODALS_DIR, 'SearchOverlayModal.jsx'), searchComponent, 'utf8');
console.log('Created SearchOverlayModal.jsx');

// 10. Convert PlanVisitModal
const planHtml = fs.readFileSync('stitch_/stitch_/plan_your_visit_modal_verdant_wisdom/code.html', 'utf8');
let planBody = htmlToJsx(planHtml);
planBody = sanitizeJsx(planBody);

const planComponent = `import React, { useState } from 'react';

export default function PlanVisitModal({ isOpen, onClose }) {
  const [visitDate, setVisitDate] = useState('');
  const [visitorCount, setVisitorCount] = useState(1);
  const [session, setSession] = useState('morning');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      ${planBody}
    </div>
  );
}
`;
fs.writeFileSync(path.join(MODALS_DIR, 'PlanVisitModal.jsx'), planComponent, 'utf8');
console.log('Created PlanVisitModal.jsx');

// 11. Convert MobileMenuModal
const mobileHtml = fs.readFileSync('stitch_/stitch_/mobile_menu_verdant_wisdom/code.html', 'utf8');
let mobileBody = htmlToJsx(mobileHtml);
mobileBody = sanitizeJsx(mobileBody);

const mobileComponent = `import React from 'react';

export default function MobileMenuModal({ isOpen, onClose, onNavigate }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex bg-surface/95 backdrop-blur-md">
      ${mobileBody}
    </div>
  );
}
`;
fs.writeFileSync(path.join(MODALS_DIR, 'MobileMenuModal.jsx'), mobileComponent, 'utf8');
console.log('Created MobileMenuModal.jsx');

console.log('All components successfully created!');
