import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { businessData } from '../data/business.ts';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    console.log('[Newsletter Subscription Stub] Subscribed:', newsletterEmail);
    setNewsletterSubmitted(true);
  };

  const popularMakes = [
    { name: 'Porsche', href: '/used-cars?make=Porsche' },
    { name: 'BMW', href: '/new-cars?make=BMW' },
    { name: 'Mercedes-Benz', href: '/used-cars?make=Mercedes-Benz' },
    { name: 'Toyota', href: '/new-cars?make=Toyota' },
    { name: 'Lexus', href: '/used-cars?make=Lexus' },
    { name: 'Land Rover', href: '/new-cars?make=Land Rover' },
    { name: 'Tesla', href: '/used-cars?make=Tesla' },
    { name: 'Audi', href: '/used-cars?make=Audi' },
  ];

  const quickLinks = [
    { label: 'New Inventory', href: '/new-cars' },
    { label: 'Certified Used Cars', href: '/used-cars' },
    { label: 'Current Lease Specials', href: '/lease-specials' },
    { label: 'Online Financing Application', href: '/financing' },
    { label: 'Sell / Value Your Trade', href: '/sell-your-car' },
    { label: 'VIP Car Brokerage Service', href: '/car-brokerage' },
    { label: 'Client Testimonials', href: '/reviews' },
    { label: 'Automotive Insights Blog', href: '/blog' },
    { label: 'About LA Prestige', href: '/about' },
    { label: 'Contact & Showroom Directions', href: '/contact' },
  ];

  return (
    <footer className="bg-[#0B0B0E] border-t border-[#2A2A33] text-zinc-400 text-sm">
      
      {/* Top Banner: Immediate Action Band */}
      <div className="bg-gradient-to-r from-[#131318] via-[#1A1A21] to-[#131318] border-b border-[#2A2A33] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                Concierge Automotive Service
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Ready to Experience <span className="text-gold-gradient">LA Prestige</span>?
              </h3>
              <p className="text-zinc-400 text-sm mt-1 max-w-xl">
                Speak with our luxury leasing advisors or request a bespoke vehicle allocation today.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${businessData.phoneRaw}`}
                className="btn-gold px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-black" />
                Call {businessData.phone}
              </a>
              <Link
                to="/car-brokerage"
                className="btn-gold-outline px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2"
              >
                Request Sourcing
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand Info with Refined Transparent Logo */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block group focus:outline-none" aria-label="LA Prestige Auto Group">
              <img
                src="/assets/aistudio/LA Prestige Auto Logo Optimized.png"
                alt="LA Prestige Auto Group"
                className="h-13 sm:h-15 md:h-16 w-auto object-contain filter drop-shadow-[0_3px_14px_rgba(212,175,55,0.25)] transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              LA Prestige Auto Group is Los Angeles's premier destination for new car leases, hand-picked certified pre-owned luxury vehicles, and bespoke nationwide auto brokerage.
            </p>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{businessData.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${businessData.phoneRaw}`} className="text-zinc-200 hover:text-[#D4AF37] font-medium">
                  {businessData.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${businessData.email}`} className="text-zinc-200 hover:text-[#D4AF37]">
                  {businessData.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p>{businessData.hours.weekdays}</p>
                  <p>{businessData.hours.saturday}</p>
                  <p>{businessData.hours.sunday}</p>
                </div>
              </div>
            </div>

            {/* Social Links with Verified WhatsApp Logo */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={businessData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#1A1A21] border border-[#2A2A33] flex items-center justify-center text-zinc-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={businessData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#1A1A21] border border-[#2A2A33] flex items-center justify-center text-zinc-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={businessData.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#1A1A21] border border-[#2A2A33] flex items-center justify-center text-zinc-300 hover:text-[#25D366] hover:border-[#25D366]/60 transition-all"
                aria-label="Official WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-l-2 border-[#D4AF37] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.slice(0, 7).map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="hover:text-[#D4AF37] transition-colors inline-block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Popular Makes */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-l-2 border-[#D4AF37] pl-2.5">
              Popular Makes
            </h4>
            <ul className="space-y-2 text-xs">
              {popularMakes.map((make) => (
                <li key={make.name}>
                  <Link
                    to={make.href}
                    className="hover:text-[#D4AF37] transition-colors inline-block py-0.5"
                  >
                    {make.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: VIP Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-[#D4AF37] pl-2.5">
              VIP Inventory Alerts
            </h4>
            <p className="text-xs text-zinc-400">
              Receive exclusive incoming lease specials, rare exotic drops, and private unlisted allocations directly in your inbox.
            </p>

            {newsletterSubmitted ? (
              <div className="p-3 bg-emerald-950/40 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>You're on the VIP list. Watch for incoming inventory alerts!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-[#D4AF37] hover:bg-[#E6C255] text-black font-semibold rounded-lg text-xs flex items-center justify-center transition-colors"
                    aria-label="Subscribe to VIP newsletter"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[11px] text-zinc-500">
                  We respect your privacy. No spam, unsubscribe anytime.
                </p>
              </form>
            )}

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1A1A21] border border-[#2A2A33] text-[11px] text-zinc-300">
                <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{businessData.licenseNote}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Compliance */}
        <div className="mt-12 pt-8 border-t border-[#2A2A33] text-[11px] leading-relaxed text-zinc-500 space-y-3">
          <p>
            <strong className="text-zinc-400">Legal Notice & Pricing Disclosure:</strong> {businessData.pricingDisclaimer}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-xs text-zinc-400">
            <div>
              © {new Date().getFullYear()} {businessData.name}. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/privacy-policy" className="hover:text-[#D4AF37] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-[#D4AF37] transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="hover:text-[#D4AF37] transition-colors">
                Sitemap & Hours
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
