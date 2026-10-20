import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { getVehicles } from '../data/vehicles.ts';

interface BrandItem {
  name: string;
  slug: string;
  badge: string;
  renderLogo: () => React.ReactNode;
}

export const BrandLogosGrid: React.FC = () => {
  const allVehicles = getVehicles();

  const brands: BrandItem[] = [
    {
      name: 'Porsche',
      slug: 'Porsche',
      badge: 'Stuttgart Sports',
      renderLogo: () => (
        <svg viewBox="0 0 100 100" className="w-10 h-10 fill-current" aria-label="Porsche Logo">
          {/* Outer Crest Shield */}
          <path
            d="M50 5 L82 18 C82 55, 66 82, 50 95 C34 82, 18 55, 18 18 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Inner Crest Border */}
          <path
            d="M50 11 L76 22 C76 52, 63 76, 50 88 C37 76, 24 52, 24 22 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          {/* Top Brand Banner */}
          <rect x="30" y="16" width="40" height="9" rx="2" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1" />
          <text x="50" y="23" textAnchor="middle" fontSize="6" fontWeight="bold" fill="currentColor" letterSpacing="1">PORSCHE</text>
          {/* Center Stuttgart Inset Shield with Prancing Horse */}
          <path d="M42 36 L58 36 L58 58 C58 66, 50 71, 50 71 C50 71, 42 66, 42 58 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          {/* Stylized Prancing Stallion */}
          <path d="M50 42 C49 40 48 39 46 41 C47 43 49 44 48 48 C47 51 45 52 46 55 C47 57 49 59 51 58 C52 56 51 53 52 50 C54 48 55 45 54 43 C52 43 51 44 50 42 Z" fill="currentColor" />
          {/* Crest Antlers Quarters */}
          <path d="M28 32 Q34 32 37 38 M28 40 Q34 40 37 43 M63 48 L73 48 M63 56 L73 56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: 'Mercedes-Benz',
      slug: 'Mercedes-Benz',
      badge: 'AMG & Executive',
      renderLogo: () => (
        <svg viewBox="0 0 100 100" className="w-10 h-10 fill-current" aria-label="Mercedes-Benz Logo">
          {/* Outer Ring */}
          <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="3.5" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
          {/* Iconic Three-Pointed Star */}
          <polygon
            points="50,10 54,46 50,50 46,46"
            fill="currentColor"
          />
          <polygon
            points="50,10 50,50 46,46"
            fill="currentColor"
            opacity="0.8"
          />
          <polygon
            points="84.6,70 48,53 50,50 53,48"
            fill="currentColor"
          />
          <polygon
            points="84.6,70 50,50 53,48"
            fill="currentColor"
            opacity="0.8"
          />
          <polygon
            points="15.4,70 47,48 50,50 52,53"
            fill="currentColor"
          />
          <polygon
            points="15.4,70 50,50 47,48"
            fill="currentColor"
            opacity="0.8"
          />
        </svg>
      ),
    },
    {
      name: 'BMW',
      slug: 'BMW',
      badge: 'M Power & Luxury',
      renderLogo: () => (
        <svg viewBox="0 0 100 100" className="w-10 h-10 fill-current" aria-label="BMW Logo">
          {/* Outer Black/Chrome Ring */}
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4" />
          <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="2.5" />
          {/* Ring Letters BMW */}
          <text x="50" y="20" textAnchor="middle" fontSize="11" fontWeight="900" fill="currentColor" letterSpacing="3">BMW</text>
          {/* Propeller Quadrants */}
          {/* Top-Right Quadrant */}
          <path d="M50 28 A22 22 0 0 1 72 50 L50 50 Z" fill="currentColor" />
          {/* Bottom-Left Quadrant */}
          <path d="M50 72 A22 22 0 0 1 28 50 L50 50 Z" fill="currentColor" />
          {/* Cross Divide */}
          <line x1="50" y1="28" x2="50" y2="72" stroke="#0B0B0E" strokeWidth="2" />
          <line x1="28" y1="50" x2="72" y2="50" stroke="#0B0B0E" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: 'Audi',
      slug: 'Audi',
      badge: 'Quattro Performance',
      renderLogo: () => (
        <svg viewBox="0 0 100 100" className="w-10 h-10 fill-current" aria-label="Audi Logo">
          {/* Four Interlocking Rings */}
          <circle cx="21" cy="50" r="17" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="40" cy="50" r="17" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="60" cy="50" r="17" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="79" cy="50" r="17" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
      ),
    },
    {
      name: 'Land Rover',
      slug: 'Land Rover',
      badge: 'Luxury All-Terrain',
      renderLogo: () => (
        <svg viewBox="0 0 100 100" className="w-10 h-10 fill-current" aria-label="Land Rover Logo">
          {/* Outer Green/Gold Oval */}
          <ellipse cx="50" cy="50" rx="46" ry="26" fill="none" stroke="currentColor" strokeWidth="3.5" />
          <ellipse cx="50" cy="50" rx="42" ry="22" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
          {/* Typographic Vectors */}
          <text x="50" y="46" textAnchor="middle" fontSize="9" fontWeight="900" fill="currentColor" letterSpacing="1.5">LAND</text>
          <text x="50" y="58" textAnchor="middle" fontSize="9" fontWeight="900" fill="currentColor" letterSpacing="1.5">ROVER</text>
          {/* Connecting Side Flares */}
          <polygon points="12,50 20,47 20,53" fill="currentColor" />
          <polygon points="88,50 80,47 80,53" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'Lexus',
      slug: 'Lexus',
      badge: 'F-Sport & Comfort',
      renderLogo: () => (
        <svg viewBox="0 0 100 100" className="w-10 h-10 fill-current" aria-label="Lexus Logo">
          {/* Tilted Ellipse Ring */}
          <ellipse cx="50" cy="50" rx="44" ry="34" fill="none" stroke="currentColor" strokeWidth="3.5" />
          {/* Stylized Aerodynamic L */}
          <path
            d="M34 26 L63 26 Q74 26 71 38 L42 66 L66 66 Q69 66 70 70 L34 70 Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: 'Tesla',
      slug: 'Tesla',
      badge: 'Electric Performance',
      renderLogo: () => (
        <svg viewBox="0 0 100 100" className="w-10 h-10 fill-current" aria-label="Tesla Logo">
          {/* Upper Curved Crossbar */}
          <path
            d="M20 22 C34 17, 66 17, 80 22 C75 25, 60 21, 50 21 C40 21, 25 25, 20 22 Z"
            fill="currentColor"
          />
          {/* Lower Sculpted T Anchor */}
          <path
            d="M26 27 C38 23, 62 23, 74 27 C71 33, 64 30, 56 31 L56 78 C53 82, 47 82, 44 78 L44 31 C36 30, 29 33, 26 27 Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: 'Toyota',
      slug: 'Toyota',
      badge: 'Hybrid & Reliability',
      renderLogo: () => (
        <svg viewBox="0 0 100 100" className="w-10 h-10 fill-current" aria-label="Toyota Logo">
          {/* Outer Ellipse */}
          <ellipse cx="50" cy="50" rx="45" ry="34" fill="none" stroke="currentColor" strokeWidth="3.5" />
          {/* Inner Horizontal Ellipse */}
          <ellipse cx="50" cy="38" rx="27" ry="12" fill="none" stroke="currentColor" strokeWidth="3" />
          {/* Inner Vertical Ellipse Forming T */}
          <ellipse cx="50" cy="50" rx="14" ry="26" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-[#0B0B0E] relative overflow-hidden">
      {/* Background radial gradient accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#D4AF37]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              <Sparkles className="w-4 h-4" />
              <span>Browse By Marque</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
              Shop By World-Class Brands
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
              Direct factory lease allocations and certified pre-owned selections from elite global manufacturers.
            </p>
          </div>

          <Link
            to="/new-cars"
            className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-[#F0D274] inline-flex items-center gap-2 self-start sm:self-auto group"
          >
            <span>View All Makes & Models</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Brand Vector Tiles Grid Following Website Color Scheme */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {brands.map((brand) => {
            const count = allVehicles.filter((v) => v.make.toLowerCase() === brand.name.toLowerCase()).length;
            return (
              <Link
                key={brand.name}
                to={`/new-cars?make=${encodeURIComponent(brand.name)}`}
                className="group p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#1A1A21] to-[#121217] border border-[#2A2A33] hover:border-[#D4AF37]/70 hover:bg-[#15151D] transition-all duration-300 flex flex-col items-center text-center shadow-[0_4px_16px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:-translate-y-1.5"
              >
                {/* Professional Vector Logo with Website Color Scheme */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0B0B0E] border border-[#2E2E3A] group-hover:border-[#D4AF37]/50 flex items-center justify-center text-[#C5C9D1] group-hover:text-[#F0D274] transition-all duration-300 mb-3 shadow-inner group-hover:shadow-[0_0_18px_rgba(212,175,55,0.35)] group-hover:scale-105">
                  <div className="transition-transform duration-300 group-hover:scale-110 filter group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]">
                    {brand.renderLogo()}
                  </div>
                </div>

                <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#F0D274] transition-colors truncate w-full">
                  {brand.name}
                </span>

                <span className="text-[11px] text-zinc-400 group-hover:text-zinc-300 transition-colors mt-0.5">
                  {count > 0 ? `${count} In Stock` : 'Allocations'}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
