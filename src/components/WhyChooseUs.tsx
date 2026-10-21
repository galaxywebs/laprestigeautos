import React from 'react';
import { ShieldCheck, Zap, Layers, Compass, MapPin, Headphones } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: 'Transparent Pricing & Zero Markups',
      description: 'Every fee, tax, and discount is itemized in plain writing before you commit. No bogus accessory packs, forced add-ons, or surprise dealer markups.',
      icon: ShieldCheck,
    },
    {
      title: 'Fast 15-Minute Pre-Approvals',
      description: 'Our digital credit desk works directly with 30+ prime banks and credit unions across California to secure the lowest APR rates.',
      icon: Zap,
    },
    {
      title: 'Multi-Brand Selection & Fleet Access',
      description: 'Unlike a franchised dealership tied to one logo, we supply luxury and economy vehicles across BMW, Mercedes-Benz, Porsche, Toyota, Lexus, and more.',
      icon: Layers,
    },
    {
      title: 'Expert Automotive Brokers',
      description: 'Our licensed brokers have over 15 years of industry connections. We locate rare allocations, custom color builds, and fleet inventory nationwide.',
      icon: Compass,
    },
    {
      title: 'Local Los Angeles Showroom',
      description: 'Visit our Studio City showroom on Ventura Boulevard or take advantage of complimentary flatbed home delivery across Greater Los Angeles.',
      icon: MapPin,
    },
    {
      title: 'Dedicated Post-Sale Concierge',
      description: 'From lease-end turn-in equity audits to routine maintenance coordination and title transfers, we remain your personal automotive advocates.',
      icon: Headphones,
    },
  ];

  return (
    <section className="py-20 bg-[#0B0B0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>The Prestige Standard</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
            Why Southern California Drives With Us
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2">
            A boutique client-first alternative designed to replace the outdated dealership hassle with confidence, speed, and real savings.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#1A1A21] border border-[#2A2A33] hover:border-[#D4AF37]/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#131318] border border-[#2A2A33] group-hover:border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#F0D274] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
