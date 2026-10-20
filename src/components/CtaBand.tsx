import React, { useState } from 'react';
import { Phone, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { businessData } from '../data/business.ts';
import { LeadModal } from './LeadModal.tsx';

export const CtaBand: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-20 bg-gradient-to-b from-[#131318] to-[#0B0B0E] border-t border-[#2A2A33] overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A21] border border-[#D4AF37]/40 text-[#F0D274] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Southern California VIP Automotive Service</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Ready to Drive <span className="text-gold-gradient">Something Great</span>?
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Whether you're stepping into a 2026 luxury lease, acquiring a certified pre-owned sports car, or sourcing a rare build nationwide—our Studio City team is ready.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="btn-gold px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-black flex items-center gap-2.5 shadow-xl hover:shadow-[#D4AF37]/40 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book VIP Test Drive</span>
            </button>

            <a
              href={`tel:${businessData.phoneRaw}`}
              className="btn-gold-outline px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white flex items-center gap-2.5 backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call {businessData.phone}</span>
            </a>
          </div>

          <p className="text-xs text-zinc-500 pt-2">
            Showroom open 7 days a week on Ventura Boulevard · No appointment required for walk-ins
          </p>
        </div>
      </section>

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type="test-drive"
        title="Book VIP Test Drive"
        subtitle="Select your vehicle of interest and preferred date at our Los Angeles showroom."
      />
    </>
  );
};
