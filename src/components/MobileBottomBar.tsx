import React, { useState } from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { businessData } from '../data/business.ts';
import { LeadModal } from './LeadModal.tsx';

export const MobileBottomBar: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B0B0E]/95 backdrop-blur-lg border-t border-[#2A2A33] px-3 py-2 flex items-center justify-around gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.6)]">
        <a
          href={`tel:${businessData.phoneRaw}`}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#1A1A21] border border-[#2A2A33] text-zinc-200 active:bg-zinc-800"
          aria-label="Call dealership"
        >
          <Phone className="w-4 h-4 text-[#D4AF37] mb-0.5" />
          <span className="text-[10px] font-semibold tracking-wider uppercase">Call</span>
        </a>

        <a
          href={`sms:${businessData.smsRaw}`}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-[#1A1A21] border border-[#2A2A33] text-zinc-200 active:bg-zinc-800"
          aria-label="Text dealership"
        >
          <MessageSquare className="w-4 h-4 text-[#D4AF37] mb-0.5" />
          <span className="text-[10px] font-semibold tracking-wider uppercase">Text</span>
        </a>

        <button
          onClick={() => setModalOpen(true)}
          className="flex-[1.4] flex items-center justify-center py-2.5 px-3 rounded-xl btn-gold text-black active:opacity-90 shadow-md font-bold text-[11px] uppercase tracking-wider gap-1.5"
          aria-label="Book a Test Drive"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Test Drive</span>
        </button>
      </div>

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type="test-drive"
        title="Schedule a VIP Test Drive"
        subtitle="Experience luxury performance at our Studio City showroom or at your residence."
      />
    </>
  );
};
