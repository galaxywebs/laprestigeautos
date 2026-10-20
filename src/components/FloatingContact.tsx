import React, { useState } from 'react';
import { MessageSquare, Phone, X, Send } from 'lucide-react';
import { businessData } from '../data/business.ts';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

export const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-16 md:bottom-6 right-4 sm:right-6 z-30">
      {/* Floating Popup Card */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-[#131318] border border-[#D4AF37]/40 rounded-2xl p-4 shadow-[0_10px_35px_rgba(0,0,0,0.8)] animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#2A2A33]">
            <div className="flex items-center space-x-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <p className="text-xs font-bold text-white">LA Prestige Concierge</p>
                <p className="text-[10px] text-zinc-400">Online & Ready to Assist</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white p-1 rounded-lg"
              aria-label="Close concierge popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-zinc-300 py-3 leading-relaxed">
            Need current lease quotes, private sourcing, or test drive booking? Connect instantly with our Los Angeles team.
          </p>

          <div className="space-y-2">
            <a
              href={businessData.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs transition-colors shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`sms:${businessData.smsRaw}`}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#1A1A21] hover:bg-zinc-800 border border-[#2A2A33] text-zinc-200 font-semibold text-xs transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Direct SMS: {businessData.sms}</span>
            </a>

            <a
              href={`tel:${businessData.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl btn-gold text-black font-semibold text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-black" />
              <span>Call Us Now</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white p-3 shadow-[0_6px_25px_rgba(37,211,102,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center border-2 border-white/20"
        aria-label="Open instant concierge chat"
      >
        <WhatsAppIcon className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};
