import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Car, BookOpen } from 'lucide-react';
import { HeroSlider } from '../components/HeroSlider.tsx';
import { SearchFilterBar } from '../components/SearchFilterBar.tsx';
import { TrustStrip } from '../components/TrustStrip.tsx';
import { VehicleCard } from '../components/VehicleCard.tsx';
import { BrandLogosGrid } from '../components/BrandLogosGrid.tsx';
import { LeaseSpecialsSection } from '../components/LeaseSpecialsSection.tsx';
import { LoanCalculator } from '../components/LoanCalculator.tsx';
import { HowItWorksSteps } from '../components/HowItWorksSteps.tsx';
import { BrokerageBanner } from '../components/BrokerageBanner.tsx';
import { SellTradeBanner } from '../components/SellTradeBanner.tsx';
import { WhyChooseUs } from '../components/WhyChooseUs.tsx';
import { ReviewsSlider } from '../components/ReviewsSlider.tsx';
import { FAQAccordion } from '../components/FAQAccordion.tsx';
import { CtaBand } from '../components/CtaBand.tsx';
import { getVehicles } from '../data/vehicles.ts';
import { getPosts } from '../data/blog.ts';

export const HomePage: React.FC = () => {
  const allVehicles = getVehicles();
  const [activeTab, setActiveTab] = useState<'All' | 'SUV' | 'Sedan' | 'Coupe' | 'Truck' | 'Electric'>('All');

  const filteredVehicles = activeTab === 'All'
    ? allVehicles.slice(0, 6)
    : allVehicles.filter((v) => v.bodyType.toLowerCase() === activeTab.toLowerCase()).slice(0, 6);

  const blogPosts = getPosts().slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* 1. Hero Slider */}
      <HeroSlider />

      {/* 2. Floating Search Bar */}
      <SearchFilterBar />

      {/* 3. Trust Strip */}
      <TrustStrip />

      {/* 4. Featured Inventory with Body Tabs */}
      <section className="py-20 bg-[#0B0B0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                <Car className="w-4 h-4 text-[#D4AF37]" />
                <span>Hand-Selected Collection</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
                Featured Showroom Inventory
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Pristine California vehicles inspected, detailed, and ready for immediate delivery.
              </p>
            </div>

            {/* Pill Tabs for Body Styles */}
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {(['All', 'SUV', 'Sedan', 'Coupe', 'Truck', 'Electric'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                    activeTab === tab
                      ? 'btn-gold text-black shadow-md'
                      : 'bg-[#1A1A21] text-zinc-400 hover:text-white border border-[#2A2A33]'
                  }`}
                >
                  {tab === 'All' ? 'All Styles' : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Vehicle Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>

          {/* View All Inventory Link */}
          <div className="mt-12 text-center">
            <Link
              to="/new-cars"
              className="btn-gold-outline px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 group"
            >
              <span>Explore All {allVehicles.length} In-Stock Vehicles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Shop By Brand Tiles */}
      <BrandLogosGrid />

      {/* 6. Lease Specials Slider / Grid (featuring BMW X1 & Toyota promos) */}
      <LeaseSpecialsSection />

      {/* 7. Auto Loan / Lease Payment Calculator */}
      <section className="py-20 bg-[#0B0B0E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <LoanCalculator />
        </div>
      </section>

      {/* 8. How It Works (4 Steps) */}
      <HowItWorksSteps />

      {/* 9. VIP Brokerage Banner */}
      <BrokerageBanner />

      {/* 10. Sell / Trade-in Quick Valuation Banner */}
      <SellTradeBanner />

      {/* 11. Why Choose Prestige Feature Cards */}
      <WhyChooseUs />

      {/* 12. Customer Reviews Slider */}
      <ReviewsSlider />

      {/* 13. Latest from the Blog (3 cards) */}
      <section className="py-20 bg-[#131318] border-t border-[#2A2A33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                <BookOpen className="w-4 h-4" />
                <span>The Prestige Journal</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
                Latest Automotive Insights
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Expert advice on California auto leasing, private brokerage, and luxury vehicle buying.
              </p>
            </div>

            <Link
              to="/blog"
              className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:text-[#F0D274] inline-flex items-center gap-1.5 self-start sm:self-auto"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="card-prestige overflow-hidden group flex flex-col justify-between"
              >
                <div className="aspect-[16/10] overflow-hidden bg-black/60 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#131318]/90 border border-[#2A2A33] px-2.5 py-1 rounded-md text-[10px] font-bold text-[#F0D274] uppercase tracking-wider backdrop-blur-sm">
                    {post.category}
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] text-zinc-400 mb-2 flex items-center justify-between">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#F0D274] transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-2 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#2A2A33] flex items-center justify-between text-xs text-[#D4AF37] font-semibold">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 14. FAQ Accordion with structured schema */}
      <FAQAccordion limit={5} />

      {/* 15. Final Call-To-Action Band */}
      <CtaBand />
    </div>
  );
};
