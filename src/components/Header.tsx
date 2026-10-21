import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X, ChevronDown, ShieldCheck, Car, KeyRound, DollarSign, Award, MessageSquare, BookOpen } from 'lucide-react';
import { useSavedCars } from '../context/SavedCarsContext.tsx';
import { businessData } from '../data/business.ts';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { savedSlugs, setIsDrawerOpen } = useSavedCars();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menus on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setExpandedMobileMenu(null);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleMobileSubmenu = (menu: string) => {
    setExpandedMobileMenu((prev) => (prev === menu ? null : menu));
  };

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const isCurrent = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0B0B0E]/95 backdrop-blur-2xl border-b border-[#2A2A33]/90 transition-all shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-19">
          
          {/* Refined Brand Logo - Balanced & Perfectly Aligned */}
          <Link
            to="/"
            className="flex items-center group shrink-0 focus:outline-none"
            aria-label="LA Prestige Auto Group - Home"
          >
            <img
              src="/assets/aistudio/LA Prestige Auto Logo Optimized.png"
              alt="LA Prestige Auto Group"
              className="h-10 sm:h-12 lg:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_12px_rgba(212,175,55,0.28)]"
            />
          </Link>

          {/* Desktop Navigation: EXACTLY 5 High-Level Menu Options with Sleek Minimal Dropdowns */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
            
            {/* 1. Inventory Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('inventory')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-3 py-2 text-[13px] font-semibold tracking-wide rounded-xl transition-all ${
                  location.pathname.includes('/new-cars') || location.pathname.includes('/used-cars') || location.pathname.includes('/inventory')
                    ? 'text-[#F0D274] bg-[#1A1A21] shadow-inner'
                    : 'text-[#C5C9D1] hover:text-white hover:bg-[#131318]'
                }`}
              >
                <span>Inventory</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'inventory' ? 'rotate-180 text-[#D4AF37]' : 'text-zinc-500'}`} />
              </button>

              {activeDropdown === 'inventory' && (
                <div className="absolute top-full left-0 w-60 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-[#111116]/98 backdrop-blur-2xl border border-[#2A2A33] rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.85)] p-1.5 space-y-0.5">
                    <Link
                      to="/new-cars"
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-[#1A1A21] text-zinc-300 hover:text-white transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Car className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-semibold group-hover:text-[#F0D274]">Brand New Vehicles</span>
                      </div>
                    </Link>

                    <Link
                      to="/used-cars"
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-[#1A1A21] text-zinc-300 hover:text-white transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Award className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-semibold group-hover:text-[#F0D274]">Certified Pre-Owned</span>
                      </div>
                    </Link>

                    <Link
                      to="/lease-specials"
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-[#1A1A21] text-zinc-300 hover:text-white transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <KeyRound className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-semibold group-hover:text-[#F0D274]">Current Lease Specials</span>
                      </div>
                      <span className="text-[9px] bg-red-600 text-white font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wider">Hot</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-3 py-2 text-[13px] font-semibold tracking-wide rounded-xl transition-all ${
                  location.pathname === '/car-brokerage' || location.pathname === '/financing' || location.pathname === '/sell-your-car'
                    ? 'text-[#F0D274] bg-[#1A1A21] shadow-inner'
                    : 'text-[#C5C9D1] hover:text-white hover:bg-[#131318]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-[#D4AF37]' : 'text-zinc-500'}`} />
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-60 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-[#111116]/98 backdrop-blur-2xl border border-[#2A2A33] rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.85)] p-1.5 space-y-0.5">
                    <Link
                      to="/car-brokerage"
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-[#1A1A21] text-zinc-300 hover:text-white transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <KeyRound className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-semibold group-hover:text-[#F0D274]">VIP Car Brokerage</span>
                      </div>
                    </Link>

                    <Link
                      to="/financing"
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-[#1A1A21] text-zinc-300 hover:text-white transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-semibold group-hover:text-[#F0D274]">Financing & Pre-Approval</span>
                      </div>
                    </Link>

                    <Link
                      to="/sell-your-car"
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-[#1A1A21] text-zinc-300 hover:text-white transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <DollarSign className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-semibold group-hover:text-[#F0D274]">Sell / Trade-In Valuation</span>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Direct: Lease Specials */}
            <Link
              to="/lease-specials"
              className={`flex items-center gap-1.5 px-3 py-2 text-[13px] font-semibold tracking-wide rounded-xl transition-all ${
                isCurrent('/lease-specials')
                  ? 'text-[#F0D274] bg-[#1A1A21] shadow-inner'
                  : 'text-[#C5C9D1] hover:text-white hover:bg-[#131318]'
              }`}
            >
              <span>Lease Specials</span>
              <span className="text-[9px] font-black tracking-wider bg-gradient-to-r from-red-600 via-amber-600 to-yellow-500 text-white px-2 py-0.5 rounded-full uppercase shadow-[0_0_8px_rgba(239,68,68,0.5)]">
                Hot
              </span>
            </Link>

            {/* 4. About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-3 py-2 text-[13px] font-semibold tracking-wide rounded-xl transition-all ${
                  location.pathname === '/about' || location.pathname === '/reviews' || location.pathname.startsWith('/blog')
                    ? 'text-[#F0D274] bg-[#1A1A21] shadow-inner'
                    : 'text-[#C5C9D1] hover:text-white hover:bg-[#131318]'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180 text-[#D4AF37]' : 'text-zinc-500'}`} />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-60 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-[#111116]/98 backdrop-blur-2xl border border-[#2A2A33] rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.85)] p-1.5 space-y-0.5">
                    <Link
                      to="/about"
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-[#1A1A21] text-zinc-300 hover:text-white transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Award className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-semibold group-hover:text-[#F0D274]">Our Story & Heritage</span>
                      </div>
                    </Link>

                    <Link
                      to="/reviews"
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-[#1A1A21] text-zinc-300 hover:text-white transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <MessageSquare className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-semibold group-hover:text-[#F0D274]">Client Reviews</span>
                      </div>
                      <span className="text-[10px] font-bold text-[#F0D274] bg-[#1A1A21] px-1.5 py-0.5 rounded border border-[#D4AF37]/30">4.9★</span>
                    </Link>

                    <Link
                      to="/blog"
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-[#1A1A21] text-zinc-300 hover:text-white transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <BookOpen className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-semibold group-hover:text-[#F0D274]">Prestige Journal</span>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 5. Direct: Contact */}
            <Link
              to="/contact"
              className={`px-3 py-2 text-[13px] font-semibold tracking-wide rounded-xl transition-all ${
                isCurrent('/contact')
                  ? 'text-[#F0D274] bg-[#1A1A21] shadow-inner'
                  : 'text-[#C5C9D1] hover:text-white hover:bg-[#131318]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Area: Luxury Wishlist Heart & Metallic Gold CTA */}
          <div className="flex items-center space-x-2.5 sm:space-x-3.5">
            
            {/* Enhanced Ultra-Premium Wishlist (Heart) Button */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              aria-label={`Saved vehicles in garage (${savedSlugs.length})`}
              className="relative p-2.5 rounded-xl bg-gradient-to-b from-[#20202B] via-[#16161F] to-[#0E0E14] border border-[#D4AF37]/40 hover:border-[#D4AF37] text-zinc-300 hover:text-[#D4AF37] transition-all shadow-[0_4px_16px_rgba(0,0,0,0.5)] group hover:scale-105 active:scale-95 flex items-center justify-center hover:shadow-[0_0_16px_rgba(212,175,55,0.22)]"
              title="View your saved garage"
            >
              <Heart className={`w-4.5 h-4.5 transition-transform duration-300 group-hover:scale-110 ${savedSlugs.length > 0 ? 'fill-red-500 text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.7)]' : 'text-zinc-300 group-hover:text-[#D4AF37]'}`} />
              
              {savedSlugs.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-[#F0D274] via-[#D4AF37] to-[#B8902B] text-black text-[10px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(212,175,55,0.8)] border border-black/50 animate-pulse">
                  {savedSlugs.length}
                </span>
              )}
            </button>

            {/* Ultra-Premium Metallic Gold CTA Button */}
            <Link
              to="/financing"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-black uppercase tracking-wider rounded-xl text-black transition-all shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_28px_rgba(212,175,55,0.55)] hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden group border border-[#FFE58F]/40"
              style={{
                background: 'linear-gradient(135deg, #FFF1AC 0%, #F5CF5D 22%, #D4AF37 50%, #A57718 80%, #F0D274 100%)',
              }}
            >
              {/* Shimmer sweep effect on hover */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              
              <ShieldCheck className="w-4 h-4 mr-1.5 text-black shrink-0" />
              <span>Get Pre-Approved</span>
            </Link>

            {/* Mobile Hamburger Drawer Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#1A1A21] border border-[#2A2A33] text-zinc-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#131318] border-b border-[#2A2A33] px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#2A2A33]">
            <Link
              to="/financing"
              onClick={() => setMobileMenuOpen(false)}
              className="col-span-2 text-center py-3.5 text-xs font-black uppercase tracking-wider rounded-xl btn-gold text-black shadow-lg"
            >
              Get Pre-Approved (Fast & Secure)
            </Link>
            <a
              href={`tel:${businessData.phoneRaw}`}
              className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold rounded-lg bg-[#1A1A21] border border-[#2A2A33] text-zinc-200"
            >
              Call Dealer
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsDrawerOpen(true);
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold rounded-lg bg-[#1A1A21] border border-[#2A2A33] text-zinc-200"
            >
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
              Saved ({savedSlugs.length})
            </button>
          </div>

          {/* Collapsible Mobile Navigation Accordion */}
          <div className="space-y-1.5 pt-1">
            
            {/* 1. Inventory Accordion */}
            <div className="rounded-xl bg-[#171720] border border-[#2A2A33] overflow-hidden">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu('inventory')}
                className="w-full flex items-center justify-between px-3.5 py-3 text-xs font-bold text-zinc-200 hover:text-white"
              >
                <div className="flex items-center gap-2.5">
                  <Car className="w-4 h-4 text-[#D4AF37]" />
                  <span>Vehicles & Inventory</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                    expandedMobileMenu === 'inventory' ? 'rotate-180 text-[#D4AF37]' : ''
                  }`}
                />
              </button>

              {expandedMobileMenu === 'inventory' && (
                <div className="px-3 pb-3 pt-1 space-y-1 border-t border-[#2A2A33]/60 bg-[#111116] animate-in fade-in duration-150">
                  <Link
                    to="/new-cars"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-[#F0D274] hover:bg-[#1A1A21]"
                  >
                    <span>Brand New Vehicles</span>
                    <span className="text-[10px] text-zinc-500">2026 Models</span>
                  </Link>
                  <Link
                    to="/used-cars"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-[#F0D274] hover:bg-[#1A1A21]"
                  >
                    <span>Certified Pre-Owned</span>
                    <span className="text-[10px] text-zinc-500">Carfax 1-Owner</span>
                  </Link>
                  <Link
                    to="/lease-specials"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-[#F0D274] hover:bg-[#1A1A21]"
                  >
                    <span className="flex items-center gap-1.5">
                      <span>Current Lease Specials</span>
                      <span className="text-[9px] bg-red-600 text-white font-extrabold px-1.5 py-0.2 rounded-full uppercase">Hot</span>
                    </span>
                    <span className="text-[10px] text-zinc-500">From $329/mo</span>
                  </Link>
                </div>
              )}
            </div>

            {/* 2. Services Accordion */}
            <div className="rounded-xl bg-[#171720] border border-[#2A2A33] overflow-hidden">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu('services')}
                className="w-full flex items-center justify-between px-3.5 py-3 text-xs font-bold text-zinc-200 hover:text-white"
              >
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>Services & Brokerage</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                    expandedMobileMenu === 'services' ? 'rotate-180 text-[#D4AF37]' : ''
                  }`}
                />
              </button>

              {expandedMobileMenu === 'services' && (
                <div className="px-3 pb-3 pt-1 space-y-1 border-t border-[#2A2A33]/60 bg-[#111116] animate-in fade-in duration-150">
                  <Link
                    to="/car-brokerage"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-[#F0D274] hover:bg-[#1A1A21]"
                  >
                    <span>VIP Car Brokerage</span>
                    <span className="text-[10px] text-zinc-500">48h Sourcing</span>
                  </Link>
                  <Link
                    to="/financing"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-[#F0D274] hover:bg-[#1A1A21]"
                  >
                    <span>Financing & Pre-Approval</span>
                    <span className="text-[10px] text-zinc-500">Tier-1 Rates</span>
                  </Link>
                  <Link
                    to="/sell-your-car"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-[#F0D274] hover:bg-[#1A1A21]"
                  >
                    <span>Sell / Value Trade-In</span>
                    <span className="text-[10px] text-zinc-500">Instant Offer</span>
                  </Link>
                </div>
              )}
            </div>

            {/* 3. Direct: Lease Specials */}
            <Link
              to="/lease-specials"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-3 rounded-xl bg-[#171720] border border-[#2A2A33] text-xs font-bold text-zinc-200 hover:text-white"
            >
              <div className="flex items-center gap-2.5">
                <KeyRound className="w-4 h-4 text-[#D4AF37]" />
                <span>Lease Specials</span>
              </div>
              <span className="text-[9px] font-black uppercase tracking-wider bg-gradient-to-r from-red-600 to-amber-600 text-white px-2 py-0.5 rounded-full">
                Hot
              </span>
            </Link>

            {/* 4. About Us Accordion */}
            <div className="rounded-xl bg-[#171720] border border-[#2A2A33] overflow-hidden">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu('about')}
                className="w-full flex items-center justify-between px-3.5 py-3 text-xs font-bold text-zinc-200 hover:text-white"
              >
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span>About & Heritage</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                    expandedMobileMenu === 'about' ? 'rotate-180 text-[#D4AF37]' : ''
                  }`}
                />
              </button>

              {expandedMobileMenu === 'about' && (
                <div className="px-3 pb-3 pt-1 space-y-1 border-t border-[#2A2A33]/60 bg-[#111116] animate-in fade-in duration-150">
                  <Link
                    to="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-[#F0D274] hover:bg-[#1A1A21]"
                  >
                    <span>Our Story & Heritage</span>
                    <span className="text-[10px] text-zinc-500">15+ Years LA</span>
                  </Link>
                  <Link
                    to="/reviews"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-[#F0D274] hover:bg-[#1A1A21]"
                  >
                    <span>Client Reviews</span>
                    <span className="text-[10px] font-bold text-[#F0D274]">4.9★ Google</span>
                  </Link>
                  <Link
                    to="/blog"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-[#F0D274] hover:bg-[#1A1A21]"
                  >
                    <span>Prestige Journal</span>
                    <span className="text-[10px] text-zinc-500">Guides</span>
                  </Link>
                </div>
              )}
            </div>

            {/* 5. Direct: Contact & Showroom */}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-3 rounded-xl bg-gradient-to-r from-[#1E1A11] to-[#171720] border border-[#D4AF37]/50 text-xs font-bold text-[#F0D274] hover:text-white"
            >
              <span>Showroom Directions & Contact</span>
              <span className="text-[10px] uppercase font-bold text-[#D4AF37]">Open Today</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
