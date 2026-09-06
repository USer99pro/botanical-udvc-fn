import React, { useState, useEffect } from 'react';

// Components & Navigation
import Navbar from './components/common/Navbar';

// Pages
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import PlantDetailPage from './pages/PlantDetailPage';
import PlantCategoriesPage from './pages/PlantCategoriesPage';
import AddPlantPage from './pages/AddPlantPage';
import PlantExplorerPage from './pages/PlantExplorerPage';
import RegisterPage from './pages/RegisterPage';
import AboutConservationPage from './pages/AboutConservationPage';
import NewsPage from './pages/NewsPage';

// Modals
import SearchOverlayModal from './components/modals/SearchOverlayModal';
import MobileMenuModal from './components/modals/MobileMenuModal';
import AdminLoginModal from './components/modals/AdminLoginModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPlantId, setSelectedPlantId] = useState('monstera-deliciosa');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Administrator authentication state
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('udvc_botanical_admin');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const isAdmin = !!currentUser;

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
    if (currentPage === 'dashboard' || currentPage === 'addPlant') {
      navigateTo('home');
    }
  };

  // Smooth scroll to top when page changes
  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        // Protected Admin-only page
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
        // Protected Admin-only page
        if (!isAdmin) {
          return renderAdminGuard('แผงควบคุมระบบ (Dashboard)');
        }
        return (
          <DashboardPage 
            onNavigate={navigateTo} 
            onSelectPlant={handleSelectPlant}
          />
        );
      case 'register':
        return (
          <RegisterPage 
            onNavigate={navigateTo} 
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
        English: School Botanical Garden by Udonthani Vocatinoal College
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
      />
    </div>
  );
}
