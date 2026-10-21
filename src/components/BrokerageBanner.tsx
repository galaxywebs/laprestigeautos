import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const BrokerageBanner: React.FC = () => {
  return (
    <section className="py-16 bg-[#0B0B0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/40 bg-gradient-to-r from-[#1A1A21] via-[#131318] to-[#1A1A21] p-8 sm:p-12 shadow-2xl">
          
          {/* Subtle Decorative Background */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-[#D4AF37]/40 text-[#F0D274] text-xs font-bold uppercase tracking-wider mb-4">
              <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Private Automotive Concierge</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Looking for a Specific Car? <br />
              <span className="text-gold-gradient">Tell Us What You Want, We'll Find It.</span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 mt-3 leading-relaxed">
              Skip dealer markups and months of waiting. Whether it's a bespoke Porsche 911 build, an elusive AMG allocation, or a hard-to-find color combination, our licensed brokers locate and negotiate it on your behalf.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Nationwide dealer & auction access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Average client savings of $3,450</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>All dealer paperwork handled</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Enclosed home or office delivery</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/car-brokerage"
                className="btn-gold px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black inline-flex items-center gap-2 shadow-lg hover:shadow-[#D4AF37]/30"
              >
                <span>Request Custom Sourcing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-xs text-zinc-400">
                100% Free consultation · No obligation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
