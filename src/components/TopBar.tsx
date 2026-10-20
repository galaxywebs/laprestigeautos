import React from 'react';
import { Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { businessData } from '../data/business.ts';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#0B0B0E] border-b border-[#2A2A33]/70 text-xs text-[#A7A9B4] hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
        {/* Left: Contact Info */}
        <div className="flex items-center space-x-6">
          <a
            href={`tel:${businessData.phoneRaw}`}
            className="flex items-center space-x-1.5 hover:text-[#D4AF37] transition-colors group"
            title="Call LA Prestige Auto Group"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
            <span className="font-medium text-[#F5F5F7]">{businessData.phone}</span>
          </a>

          <a
            href={`sms:${businessData.smsRaw}`}
            className="flex items-center space-x-1.5 hover:text-[#D4AF37] transition-colors group"
            title="Text our sales team"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Text: <strong className="text-[#F5F5F7] font-medium">{businessData.sms}</strong></span>
          </a>

          <div className="flex items-center space-x-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{businessData.address}</span>
          </div>
        </div>

        {/* Right: Hours & Socials */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1.5 text-zinc-400">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{businessData.hours.summary}</span>
          </div>

          <div className="flex items-center space-x-3 pl-3 border-l border-[#2A2A33]">
            <a
              href={businessData.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LA Prestige Auto Group on Facebook"
              className="text-zinc-400 hover:text-[#D4AF37] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href={businessData.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LA Prestige Auto Group on Instagram"
              className="text-zinc-400 hover:text-[#D4AF37] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href={businessData.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="text-zinc-400 hover:text-[#25D366] transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
