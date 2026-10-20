import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X, ChevronDown, ShieldCheck, Car, KeyRound, DollarSign, Award, MessageSquare, BookOpen, Calculator, Sparkles } from 'lucide-react';
import { useSavedCars } from '../context/SavedCarsContext.tsx';
import { businessData } from '../data/business.ts';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { savedSlugs, setIsDrawerOpen } = useSavedCars();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menus on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

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
    <header className="sticky top-0 z-40 bg-[#0B0B0E]/95 backdrop-blur-2xl border-b border-[#2A2A33]/90 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          
          {/* Transparent Logo without plate and with NO additional company text */}
          <Link
            to="/"
            className="flex items-center group py-1 shrink-0"
            aria-label="LA Prestige Auto Group - Home"
          >
            <img
              src="/assets/aistudio/LA_Prestige_Auto_Logo_PNG_8e4ce65f.png"
              alt="LA Prestige Auto Group"
              className="h-14 sm:h-17 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_12px_rgba(212,175,55,0.25)]"
            />
          </Link>

          {/* Desktop Navigation: EXACTLY 5 High-Level Menu Options with Luxury Dropdowns */}
          <nav className="hidden lg:flex items-center space-x-1.5 xl:space-x-2">
            
            {/* 1. Inventory Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('inventory')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-semibold tracking-wide rounded-xl transition-all ${
                  location.pathname.includes('/new-cars') || location.pathname.includes('/used-cars') || location.pathname.includes('/inventory')
                    ? 'text-[#F0D274] bg-[#1A1A21] shadow-inner'
                    : 'text-[#C5C9D1] hover:text-white hover:bg-[#131318]'
                }`}
              >
                <span>Inventory</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'inventory' ? 'rotate-180 text-[#D4AF37]' : 'text-zinc-500'}`} />
              </button>

              {activeDropdown === 'inventory' && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-[#131318]/98 backdrop-blur-2xl border border-[#2E2E3A] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] p-2 space-y-1">
                    <Link
                      to="/new-cars"
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#1A1A21] hover:border hover:border-[#D4AF37]/30 text-zinc-300 hover:text-white transition-all group"
                    >
                      <div className="p-2.5 rounded-lg bg-[#1A1A21] border border-[#2A2A33] group-hover:border-[#D4AF37]/50 text-[#D4AF37] group-hover:shadow-[0_0_12px_rgba(212,175,55,0.3)] transition-all">
                        <Car className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#F0D274]">Brand New Vehicles</div>
                        <div className="text-[11px] text-zinc-400">Current model-year allocations</div>
                      </div>
                    </Link>

                    <Link
                      to="/used-cars"
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#1A1A21] hover:border hover:border-[#D4AF37]/30 text-zinc-300 hover:text-white transition-all group"
                    >
                      <div className="p-2.5 rounded-lg bg-[#1A1A21] border border-[#2A2A33] group-hover:border-[#D4AF37]/50 text-[#D4AF37] group-hover:shadow-[0_0_12px_rgba(212,175,55,0.3)] transition-all">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#F0D274]">Certified Pre-Owned</div>
                        <div className="text-[11px] text-zinc-400">Carfax 1-owner inspected luxury</div>
                      </div>
                    </Link>

                    <Link
                      to="/lease-specials"
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#1A1A21] hover:border hover:border-[#D4AF37]/30 text-zinc-300 hover:text-white transition-all group"
                    >
                      <div className="p-2.5 rounded-lg bg-[#1A1A21] border border-[#2A2A33] group-hover:border-[#D4AF37]/50 text-[#D4AF37] group-hover:shadow-[0_0_12px_rgba(212,175,55,0.3)] transition-all">
                        <KeyRound className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#F0D274] flex items-center gap-1.5">
                          <span>Current Lease Specials</span>
                          <span className="text-[9px] bg-red-600 text-white font-extrabold px-1.5 py-0.2 rounded-full uppercase">Hot</span>
                        </div>
                        <div className="text-[11px] text-zinc-400">Tier-1 low monthly executive terms</div>
                      </div>
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
                className={`flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-semibold tracking-wide rounded-xl transition-all ${
                  location.pathname === '/car-brokerage' || location.pathname === '/financing' || location.pathname === '/sell-your-car'
                    ? 'text-[#F0D274] bg-[#1A1A21] shadow-inner'
                    : 'text-[#C5C9D1] hover:text-white hover:bg-[#131318]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-[#D4AF37]' : 'text-zinc-500'}`} />
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-[#131318]/98 backdrop-blur-2xl border border-[#2E2E3A] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] p-2 space-y-1">
                    <Link
                      to="/car-brokerage"
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#1A1A21] hover:border hover:border-[#D4AF37]/30 text-zinc-300 hover:text-white transition-all group"
                    >
                      <div className="p-2.5 rounded-lg bg-[#1A1A21] border border-[#2A2A33] group-hover:border-[#D4AF37]/50 text-[#D4AF37] group-hover:shadow-[0_0_12px_rgba(212,175,55,0.3)] transition-all">
                        <KeyRound className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#F0D274]">VIP Car Brokerage</div>
                        <div className="text-[11px] text-zinc-400">Custom build & rare sourcing</div>
                      </div>
                    </Link>

                    <Link
                      to="/financing"
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#1A1A21] hover:border hover:border-[#D4AF37]/30 text-zinc-300 hover:text-white transition-all group"
                    >
                      <div className="p-2.5 rounded-lg bg-[#1A1A21] border border-[#2A2A33] group-hover:border-[#D4AF37]/50 text-[#D4AF37] group-hover:shadow-[0_0_12px_rgba(212,175,55,0.3)] transition-all">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#F0D274]">Financing & Pre-Approval</div>
                        <div className="text-[11px] text-zinc-400">Competitive rates & credit solutions</div>
                      </div>
                    </Link>

                    <Link
                      to="/sell-your-car"
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#1A1A21] hover:border hover:border-[#D4AF37]/30 text-zinc-300 hover:text-white transition-all group"
                    >
                      <div className="p-2.5 rounded-lg bg-[#1A1A21] border border-[#2A2A33] group-hover:border-[#D4AF37]/50 text-[#D4AF37] group-hover:shadow-[0_0_12px_rgba(212,175,55,0.3)] transition-all">
                        <DollarSign className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#F0D274]">Sell / Value Trade-In</div>
                        <div className="text-[11px] text-zinc-400">Guaranteed top market valuation</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Direct: Lease Specials */}
            <Link
              to="/lease-specials"
              className={`flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-semibold tracking-wide rounded-xl transition-all ${
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
                className={`flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-semibold tracking-wide rounded-xl transition-all ${
                  location.pathname === '/about' || location.pathname === '/reviews' || location.pathname.startsWith('/blog')
                    ? 'text-[#F0D274] bg-[#1A1A21] shadow-inner'
                    : 'text-[#C5C9D1] hover:text-white hover:bg-[#131318]'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180 text-[#D4AF37]' : 'text-zinc-500'}`} />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-[#131318]/98 backdrop-blur-2xl border border-[#2E2E3A] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] p-2 space-y-1">
                    <Link
                      to="/about"
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#1A1A21] hover:border hover:border-[#D4AF37]/30 text-zinc-300 hover:text-white transition-all group"
                    >
                      <div className="p-2.5 rounded-lg bg-[#1A1A21] border border-[#2A2A33] group-hover:border-[#D4AF37]/50 text-[#D4AF37] group-hover:shadow-[0_0_12px_rgba(212,175,55,0.3)] transition-all">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#F0D274]">Our Story & Heritage</div>
                        <div className="text-[11px] text-zinc-400">15+ years in Los Angeles</div>
                      </div>
                    </Link>

                    <Link
                      to="/reviews"
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#1A1A21] hover:border hover:border-[#D4AF37]/30 text-zinc-300 hover:text-white transition-all group"
                    >
                      <div className="p-2.5 rounded-lg bg-[#1A1A21] border border-[#2A2A33] group-hover:border-[#D4AF37]/50 text-[#D4AF37] group-hover:shadow-[0_0_12px_rgba(212,175,55,0.3)] transition-all">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#F0D274]">Client Reviews</div>
                        <div className="text-[11px] text-zinc-400">4.9★ Google verified testimonials</div>
                      </div>
                    </Link>

                    <Link
                      to="/blog"
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#1A1A21] hover:border hover:border-[#D4AF37]/30 text-zinc-300 hover:text-white transition-all group"
                    >
                      <div className="p-2.5 rounded-lg bg-[#1A1A21] border border-[#2A2A33] group-hover:border-[#D4AF37]/50 text-[#D4AF37] group-hover:shadow-[0_0_12px_rgba(212,175,55,0.3)] transition-all">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#F0D274]">Prestige Journal</div>
                        <div className="text-[11px] text-zinc-400">Guides, rebates & insights</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 5. Direct: Contact */}
            <Link
              to="/contact"
              className={`px-3.5 py-2 text-[13px] font-semibold tracking-wide rounded-xl transition-all ${
                isCurrent('/contact')
                  ? 'text-[#F0D274] bg-[#1A1A21] shadow-inner'
                  : 'text-[#C5C9D1] hover:text-white hover:bg-[#131318]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Area: Luxury Wishlist Heart & Metallic Gold CTA */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            
            {/* Enhanced Ultra-Premium Wishlist (Heart) Button */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              aria-label={`Saved vehicles in garage (${savedSlugs.length})`}
              className="relative p-3 rounded-xl bg-gradient-to-b from-[#20202B] via-[#16161F] to-[#0E0E14] border border-[#D4AF37]/40 hover:border-[#D4AF37] text-zinc-300 hover:text-[#D4AF37] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.6)] group hover:scale-105 active:scale-95 flex items-center justify-center hover:shadow-[0_0_18px_rgba(212,175,55,0.25)]"
              title="View your saved garage"
            >
              <Heart className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${savedSlugs.length > 0 ? 'fill-red-500 text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.7)]' : 'text-zinc-300 group-hover:text-[#D4AF37]'}`} />
              
              {savedSlugs.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-[#F0D274] via-[#D4AF37] to-[#B8902B] text-black text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-[0_0_12px_rgba(212,175,55,0.8)] border border-black/50 animate-pulse">
                  {savedSlugs.length}
                </span>
              )}
            </button>

            {/* Ultra-Premium Metallic Gold CTA Button */}
            <Link
              to="/financing"
              className="hidden sm:inline-flex items-center justify-center px-6 py-3.5 text-xs font-black uppercase tracking-widest rounded-xl text-black transition-all shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_35px_rgba(212,175,55,0.65)] hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden group border border-[#FFE58F]/40"
              style={{
                background: 'linear-gradient(135deg, #FFF1AC 0%, #F5CF5D 22%, #D4AF37 50%, #A57718 80%, #F0D274 100%)',
              }}
            >
              {/* Shimmer sweep effect on hover */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              
              <ShieldCheck className="w-4 h-4 mr-2 text-black shrink-0" />
              <span>Get Pre-Approved</span>
            </Link>

            {/* Mobile Hamburger Drawer Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-[#1A1A21] border border-[#2A2A33] text-zinc-300 hover:text-white"
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

          {/* Grouped Mobile Links */}
          <div className="space-y-4 pt-1">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] px-2 mb-1.5">
                Vehicles & Inventory
              </p>
              <div className="grid grid-cols-1 gap-1">
                <Link
                  to="/new-cars"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-[#1A1A21]"
                >
                  Brand New Vehicles
                </Link>
                <Link
                  to="/used-cars"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-[#1A1A21]"
                >
                  Certified Pre-Owned
                </Link>
                <Link
                  to="/lease-specials"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-[#1A1A21]"
                >
                  <span>Current Lease Specials</span>
                  <span className="text-[9px] bg-red-600 text-white font-bold px-1.5 py-0.5 rounded-full uppercase">Hot</span>
                </Link>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] px-2 mb-1.5">
                Services & Brokerage
              </p>
              <div className="grid grid-cols-1 gap-1">
                <Link
                  to="/car-brokerage"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-[#1A1A21]"
                >
                  VIP Car Brokerage (Nationwide Sourcing)
                </Link>
                <Link
                  to="/financing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-[#1A1A21]"
                >
                  Financing & Credit Pre-Approval
                </Link>
                <Link
                  to="/sell-your-car"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-[#1A1A21]"
                >
                  Sell / Value Your Trade-In
                </Link>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] px-2 mb-1.5">
                Company & Contact
              </p>
              <div className="grid grid-cols-1 gap-1">
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-[#1A1A21]"
                >
                  About LA Prestige & Heritage
                </Link>
                <Link
                  to="/reviews"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-[#1A1A21]"
                >
                  Client Reviews & Testimonials
                </Link>
                <Link
                  to="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-[#1A1A21]"
                >
                  Prestige Journal (News & Guides)
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-xs font-semibold text-[#F0D274] hover:bg-[#1A1A21]"
                >
                  Showroom Directions & Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
