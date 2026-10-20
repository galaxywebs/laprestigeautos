import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Crown, Zap, Compass, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const HeroSlider: React.FC = () => {
  const slides = [
    {
      id: 1,
      badge: "Southern California's Premier Luxury Destination",
      badgeIcon: Crown,
      badgeClass: "border-[#D4AF37]/70 bg-gradient-to-r from-black/80 via-[#1A1A21]/90 to-black/80 text-[#F0D274] shadow-[0_0_20px_rgba(212,175,55,0.35)]",
      badgeTextClass: "bg-gradient-to-r from-[#F0D274] via-[#FFF1AC] to-[#D4AF37] bg-clip-text text-transparent font-extrabold",
      iconClass: "text-[#D4AF37] filter drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]",
      title: "Drive Your Prestige.",
      subtitle: "Experience white-glove automotive acquisition. Hand-selected luxury vehicles, certified pre-owned sports cars, and private brokerage in Los Angeles.",
      primaryCta: { label: "Explore Inventory", href: "/new-cars" },
      secondaryCta: { label: "Book Test Drive", href: "/contact" },
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2400&q=90", // High-fidelity luxury sports coupe
      stat: "5,200+ Delivered",
    },
    {
      id: 2,
      badge: "Exclusive 2026 Fleet Leases • $0 Down Allocations",
      badgeIcon: Zap,
      badgeClass: "border-amber-500/70 bg-gradient-to-r from-red-950/80 via-amber-950/70 to-black/85 text-[#FBBF24] shadow-[0_0_20px_rgba(245,158,11,0.4)]",
      badgeTextClass: "bg-gradient-to-r from-[#FDE68A] via-[#FBBF24] to-[#F59E0B] bg-clip-text text-transparent font-extrabold",
      iconClass: "text-[#F59E0B] filter drop-shadow-[0_0_8px_rgba(245,158,11,0.9)]",
      title: "Luxury Leases From Low Monthly Payments.",
      subtitle: "Tier-1 executive leases on 2026 BMW, Mercedes-Benz, Lexus & Toyota Hybrid. Zero dealer markups, transparent lease math, and white-glove home delivery.",
      primaryCta: { label: "View Lease Specials", href: "/lease-specials" },
      secondaryCta: { label: "Calculate Payment", href: "/financing" },
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=2400&q=90", // High-fidelity 2026 BMW M executive coupe
      stat: "Starting $329/mo",
    },
    {
      id: 3,
      badge: "Nationwide VIP Car Brokerage • 48-Hour Sourcing",
      badgeIcon: Compass,
      badgeClass: "border-sky-400/70 bg-gradient-to-r from-sky-950/80 via-slate-900/80 to-black/85 text-[#38BDF8] shadow-[0_0_20px_rgba(56,189,248,0.4)]",
      badgeTextClass: "bg-gradient-to-r from-[#BAE6FD] via-[#38BDF8] to-[#0284C7] bg-clip-text text-transparent font-extrabold",
      iconClass: "text-[#38BDF8] filter drop-shadow-[0_0_8px_rgba(56,189,248,0.9)]",
      title: "Can't Find It? We'll Source It For You.",
      subtitle: "Skip dealership waiting lists and unadvertised markups. Our veteran brokers tap private nationwide wholesale networks to secure your exact build in 48 hours.",
      primaryCta: { label: "Request Vehicle Sourcing", href: "/car-brokerage" },
      secondaryCta: { label: "Sell / Trade Your Car", href: "/sell-your-car" },
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=2400&q=90", // Bespoke rare exotic vehicle
      stat: "$3,450 Avg Savings",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[580px] sm:h-[640px] lg:h-[730px] overflow-hidden bg-[#0B0B0E]">
      {/* Slides Backgrounds */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        const BadgeIcon = slide.badgeIcon;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Ken Burns subtle zoom */}
            <img
              src={slide.image}
              alt={slide.title}
              className={`absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-10000 ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
            />

            {/* Cinematic Gradient Overlays for optimal readability and depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0E] via-[#0B0B0E]/85 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-transparent to-black/70" />

            {/* Slide Content */}
            <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
              <div className="max-w-2xl pt-10 sm:pt-0 space-y-4 sm:space-y-6">
                
                {/* Enhanced Highlighted Badge with Relevant Premium Icon and Custom Scheme */}
                <div className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full border backdrop-blur-xl ${slide.badgeClass}`}>
                  <BadgeIcon className={`w-4 h-4 shrink-0 ${slide.iconClass}`} />
                  <span className={`text-[11px] sm:text-xs uppercase tracking-wider ${slide.badgeTextClass}`}>
                    {slide.badge}
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed max-w-xl font-normal drop-shadow">
                  {slide.subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                  <Link
                    to={slide.primaryCta.href}
                    className="btn-gold px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest text-black flex items-center gap-2 shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_35px_rgba(212,175,55,0.65)] hover:-translate-y-0.5 transition-all"
                  >
                    <span>{slide.primaryCta.label}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to={slide.secondaryCta.href}
                    className="btn-gold-outline px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest text-white backdrop-blur-md hover:bg-white/5 transition-all"
                  >
                    <span>{slide.secondaryCta.label}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Slide Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-[#D4AF37]/30 hover:border-[#D4AF37] backdrop-blur-md transition-all hover:scale-105 items-center justify-center shadow-xl"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-[#D4AF37]/30 hover:border-[#D4AF37] backdrop-blur-md transition-all hover:scale-105 items-center justify-center shadow-xl"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 ${
              i === currentSlide
                ? 'w-9 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_10px_rgba(212,175,55,0.7)]'
                : 'w-2.5 h-2 bg-white/30 hover:bg-white/60 rounded-full'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
