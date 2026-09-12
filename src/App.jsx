import React, { useState, useEffect } from 'react';

// Components & Navigation
import Navbar from './components/common/Navbar';

// Existing Pages (Preserved 100%)
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import UserManagementPage from './pages/UserManagementPage';
import PlantDetailPage from './pages/PlantDetailPage';
import PlantCategoriesPage from './pages/PlantCategoriesPage';
import AddPlantPage from './pages/AddPlantPage';
import PlantExplorerPage from './pages/PlantExplorerPage';
import RegisterPage from './pages/RegisterPage';
import AboutConservationPage from './pages/AboutConservationPage';
import NewsPage from './pages/NewsPage';

// New Botanical Garden Specification Pages
import PlantStudyPage from './pages/PlantStudyPage';
import FiveElementsPage from './pages/FiveElementsPage';
import ThreeLearningAreasPage from './pages/ThreeLearningAreasPage';
import LocalResourcesPage from './pages/LocalResourcesPage';
import PlantSignboardPage from './pages/PlantSignboardPage';
import PlantDrawingPage from './pages/PlantDrawingPage';
import PlantRegistryPage from './pages/PlantRegistryPage';
import PlantDataPage from './pages/PlantDataPage';
import PlantPhotosPage from './pages/PlantPhotosPage';
import ProjectsPage from './pages/ProjectsPage';
import AchievementTablePage from './pages/AchievementTablePage';
import GoodnessSharingPage from './pages/GoodnessSharingPage';
import StudyAreaMapPage from './pages/StudyAreaMapPage';
import IntegrationGuidePage from './pages/IntegrationGuidePage';
import RelatedAgenciesPage from './pages/RelatedAgenciesPage';
import BotanicalHistoryPage from './pages/BotanicalHistoryPage';
import BotanicalRolesPage from './pages/BotanicalRolesPage';
import PersonnelStructurePage from './pages/PersonnelStructurePage';
import CollegeMapPage from './pages/CollegeMapPage';

// Modals
import SearchOverlayModal from './components/modals/SearchOverlayModal';
import MobileMenuModal from './components/modals/MobileMenuModal';
import AdminLoginModal from './components/modals/AdminLoginModal';

// Route to Page ID mapping for URL hash support
const HASH_TO_PAGE = {
  'plant-study': 'plantStudy',
  'five-elements': 'fiveElements',
  'three-learning-areas': 'threeLearningAreas',
  'local-resources': 'localResources',
  'plant-types': 'plantData',
  'plant-types/signboard': 'plantSignboard',
  'plant-types/drawing': 'plantDrawing',
  'plant-types/registry': 'plantRegistry',
  'plant-types/data': 'plantData',
  'plant-types/photos': 'plantPhotos',
  'projects': 'projects',
  'achievement-table': 'achievementTable',
  'goodness-sharing': 'goodnessSharing',
  'study-area-map': 'studyAreaMap',
  'integration-guide': 'integrationGuide',
  'related-agencies': 'relatedAgencies',
  'school-botanical': 'botanicalHistory',
  'school-botanical/history': 'botanicalHistory',
  'school-botanical/roles': 'botanicalRoles',
  'personnel-structure': 'personnelStructure',
  'college-map': 'collegeMap',
  'news': 'news',
  'explorer': 'explorer',
  'categories': 'categories',
  'about': 'about',
  'dashboard': 'dashboard',
  'user-management': 'userManagement',
  'addPlant': 'addPlant',
  'register': 'register',
  'plantDetail': 'plantDetail',
};

const PAGE_TO_HASH = Object.entries(HASH_TO_PAGE).reduce((acc, [hash, page]) => {
  if (!acc[page]) acc[page] = hash;
  return acc;
}, {});

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    // Check initial hash in URL
    const initialHash = window.location.hash.replace(/^#\/?/, '');
    if (initialHash && HASH_TO_PAGE[initialHash]) {
      return HASH_TO_PAGE[initialHash];
    }
    return 'home';
  });

  const [selectedPlantId, setSelectedPlantId] = useState('monstera-deliciosa');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (hash && HASH_TO_PAGE[hash]) {
        setCurrentPage(HASH_TO_PAGE[hash]);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Administrator authentication state
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('udvc_botanical_admin');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const isAdmin = String(currentUser?.role || '').toLowerCase() === 'admin';

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('udvc_botanical_admin');
    } catch {
      // ignore
    }
    setCurrentUser(null);
    if (currentPage === 'dashboard' || currentPage === 'addPlant' || currentPage === 'userManagement') {
      navigateTo('home');
    }
  };

  // Smooth scroll to top when page changes and update URL hash
  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const targetHash = PAGE_TO_HASH[page];
    if (targetHash && page !== 'home') {
      window.history.pushState(null, '', `#/${targetHash}`);
    } else if (page === 'home') {
      window.history.pushState(null, '', window.location.pathname);
    }
  };

  const handleSelectPlant = (plantId) => {
    if (plantId) {
      setSelectedPlantId(plantId);
    }
    navigateTo('plantDetail');
  };

  // Render Access Denied card for admin-only pages
  const renderAdminGuard = (pageName) => {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-surface-container-lowest dark:bg-surface-dim rounded-3xl p-8 shadow-xl border border-outline-variant/30 text-center animate-fade-in">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined text-4xl">lock</span>
          </div>
          <h2 className="font-headline-sm text-2xl font-bold text-primary mb-2">
            พื้นที่เฉพาะผู้ดูแลระบบ
          </h2>
          <p className="text-sm text-on-surface-variant mb-2">
            {pageName} ต้องเข้าสู่ระบบในฐานะเจ้าหน้าที่งานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี
          </p>
          <p className="text-xs text-secondary font-medium mb-6">
            (กรุณาเข้าสู่ระบบด้วยบัญชีผู้ดูแลระบบเพื่อเข้าถึงข้อมูล)
          </p>
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => setIsLoginOpen(true)}
              className="w-full py-3 px-6 rounded-full bg-primary text-on-primary font-semibold text-sm hover:bg-secondary transition-colors cursor-pointer shadow-sm flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">admin_panel_settings</span>
              <span>เข้าสู่ระบบผู้ดูแลระบบ (Admin Login)</span>
            </button>
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className="w-full py-2.5 px-6 rounded-full border border-outline-variant/40 hover:bg-surface-container text-on-surface-variant font-medium text-xs transition-colors cursor-pointer"
            >
              กลับสู่หน้าหลัก
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      // Existing Pages
      case 'home':
        return (
          <HomePage 
            onNavigate={navigateTo} 
            onSelectPlant={handleSelectPlant}
            onOpenSearch={() => setIsSearchOpen(true)} 
          />
        );
      case 'categories':
        return (
          <PlantCategoriesPage 
            onNavigate={navigateTo} 
            onSelectPlant={handleSelectPlant}
            onOpenSearch={() => setIsSearchOpen(true)} 
          />
        );
      case 'explorer':
        return (
          <PlantExplorerPage 
            onNavigate={navigateTo} 
            onSelectPlant={handleSelectPlant}
            onOpenSearch={() => setIsSearchOpen(true)} 
          />
        );
      case 'plantDetail':
        return (
          <PlantDetailPage 
            plantId={selectedPlantId}
            onSelectPlant={handleSelectPlant}
            onNavigate={navigateTo} 
            onOpenSearch={() => setIsSearchOpen(true)} 
          />
        );
      case 'addPlant':
        if (!isAdmin) {
          return renderAdminGuard('หน้าเพิ่มข้อมูลพรรณไม้ใหม่ (Add Plant)');
        }
        return (
          <AddPlantPage 
            onNavigate={navigateTo} 
            onSelectPlant={handleSelectPlant}
          />
        );
      case 'dashboard':
        if (!isAdmin) {
          return renderAdminGuard('แผงควบคุมระบบ (Dashboard)');
        }
        return (
          <DashboardPage 
            onNavigate={navigateTo} 
            onSelectPlant={handleSelectPlant}
          />
        );
      case 'userManagement':
        if (!isAdmin) {
          return renderAdminGuard('หน้าจัดการผู้ใช้งาน (User Management)');
        }
        return (
          <UserManagementPage
            onNavigate={navigateTo}
            currentUser={currentUser}
          />
        );
      case 'register':
        return (
          <RegisterPage 
            onNavigate={navigateTo}
            onOpenLogin={() => setIsLoginOpen(true)}
          />
        );
      case 'news':
        return (
          <NewsPage 
            onNavigate={navigateTo}
            isAdmin={isAdmin}
          />
        );
      case 'about':
        return (
          <AboutConservationPage 
            onNavigate={navigateTo} 
          />
        );

      // New Botanical Specification Pages
      case 'plantStudy':
        return (
          <PlantStudyPage
            onNavigate={navigateTo}
            onSelectPlant={handleSelectPlant}
          />
        );
      case 'fiveElements':
        return (
          <FiveElementsPage
            onNavigate={navigateTo}
          />
        );
      case 'threeLearningAreas':
        return (
          <ThreeLearningAreasPage
            onNavigate={navigateTo}
          />
        );
      case 'localResources':
        return (
          <LocalResourcesPage
            onNavigate={navigateTo}
          />
        );
      case 'plantSignboard':
        return (
          <PlantSignboardPage
            onNavigate={navigateTo}
            onSelectPlant={handleSelectPlant}
          />
        );
      case 'plantDrawing':
        return (
          <PlantDrawingPage
            onNavigate={navigateTo}
            onSelectPlant={handleSelectPlant}
          />
        );
      case 'plantRegistry':
        return (
          <PlantRegistryPage
            onNavigate={navigateTo}
            onSelectPlant={handleSelectPlant}
          />
        );
      case 'plantData':
        return (
          <PlantDataPage
            onNavigate={navigateTo}
            onSelectPlant={handleSelectPlant}
          />
        );
      case 'plantPhotos':
        return (
          <PlantPhotosPage
            onNavigate={navigateTo}
            onSelectPlant={handleSelectPlant}
          />
        );
      case 'projects':
        return (
          <ProjectsPage
            onNavigate={navigateTo}
          />
        );
      case 'achievementTable':
        return (
          <AchievementTablePage
            onNavigate={navigateTo}
          />
        );
      case 'goodnessSharing':
        return (
          <GoodnessSharingPage
            onNavigate={navigateTo}
          />
        );
      case 'studyAreaMap':
        return (
          <StudyAreaMapPage
            onNavigate={navigateTo}
            onSelectPlant={handleSelectPlant}
          />
        );
      case 'integrationGuide':
        return (
          <IntegrationGuidePage
            onNavigate={navigateTo}
          />
        );
      case 'relatedAgencies':
        return (
          <RelatedAgenciesPage
            onNavigate={navigateTo}
          />
        );
      case 'botanicalHistory':
        return (
          <BotanicalHistoryPage
            onNavigate={navigateTo}
          />
        );
      case 'botanicalRoles':
        return (
          <BotanicalRolesPage
            onNavigate={navigateTo}
          />
        );
      case 'personnelStructure':
        return (
          <PersonnelStructurePage
            onNavigate={navigateTo}
          />
        );
      case 'collegeMap':
        return (
          <CollegeMapPage
            onNavigate={navigateTo}
          />
        );

      default:
        return (
          <HomePage 
            onNavigate={navigateTo} 
            onSelectPlant={handleSelectPlant}
            onOpenSearch={() => setIsSearchOpen(true)} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col">
      {/* 
        Single Consolidated Navbar with Dropdown Menus 
        Title: งานสวนพฤกษศาสตร์โรงเรียน วิทยาลัยอาชีวศึกษาอุดรธานี
        English: School Botanical Garden by Udonthani Vocational College
      */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        onLogout={handleLogout}
        isAdmin={isAdmin}
        currentUser={currentUser}
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {renderCurrentPage()}
      </main>

      {/* Global Modals */}
      <SearchOverlayModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={navigateTo}
        onSelectPlant={handleSelectPlant}
      />

      <MobileMenuModal
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={navigateTo}
        isAdmin={isAdmin}
        currentUser={currentUser}
        onOpenLogin={() => setIsLoginOpen(true)}
        onLogout={handleLogout}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <AdminLoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        onNavigate={navigateTo}
      />
    </div>
  );
}
