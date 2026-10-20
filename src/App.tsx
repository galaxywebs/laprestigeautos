import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SavedCarsProvider } from './context/SavedCarsContext.tsx';
import { TopBar } from './components/TopBar.tsx';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { MobileBottomBar } from './components/MobileBottomBar.tsx';
import { FloatingContact } from './components/FloatingContact.tsx';
import { SavedCarsDrawer } from './components/SavedCarsDrawer.tsx';

// Pages
import { HomePage } from './pages/HomePage.tsx';
import { NewCarsPage } from './pages/NewCarsPage.tsx';
import { UsedCarsPage } from './pages/UsedCarsPage.tsx';
import { VehicleDetailPage } from './pages/VehicleDetailPage.tsx';
import { LeaseSpecialsPage } from './pages/LeaseSpecialsPage.tsx';
import { FinancingPage } from './pages/FinancingPage.tsx';
import { SellTradePage } from './pages/SellTradePage.tsx';
import { BrokeragePage } from './pages/BrokeragePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ReviewsPage } from './pages/ReviewsPage.tsx';
import { BlogPage } from './pages/BlogPage.tsx';
import { BlogPostPage } from './pages/BlogPostPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { LegalPage } from './pages/LegalPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';

// Scroll to top helper on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <SavedCarsProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-[#0B0B0E] text-[#F5F5F7]">
          {/* Global Header Bar */}
          <TopBar />
          <Header />

          {/* Primary View Router */}
          <main className="flex-1 pb-16 md:pb-0">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/new-cars" element={<NewCarsPage />} />
              <Route path="/used-cars" element={<UsedCarsPage />} />
              <Route path="/inventory/:slug" element={<VehicleDetailPage />} />
              <Route path="/lease-specials" element={<LeaseSpecialsPage />} />
              <Route path="/financing" element={<FinancingPage />} />
              <Route path="/sell-your-car" element={<SellTradePage />} />
              <Route path="/car-brokerage" element={<BrokeragePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<LegalPage type="privacy" />} />
              <Route path="/terms" element={<LegalPage type="terms" />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Mobile Bottom Quick Action Bar */}
          <MobileBottomBar />

          {/* Floating WhatsApp / Concierge Chat */}
          <FloatingContact />

          {/* Slide-Over Saved Vehicles Drawer */}
          <SavedCarsDrawer />
        </div>
      </Router>
    </SavedCarsProvider>
  );
}
