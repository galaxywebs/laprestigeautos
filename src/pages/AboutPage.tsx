import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, Heart, Users, MapPin, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { businessData } from '../data/business.ts';
import { getTeam } from '../data/team.ts';
import { Counter } from '../components/TrustStrip.tsx';
import { RoundedStarIcon } from '../components/RoundedStarIcon.tsx';

export const AboutPage: React.FC = () => {
  const team = getTeam();
  const [inView, setInView] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    // Fallback timer so it always loads if already in view
    const timer = setTimeout(() => setInView(true), 400);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const values = [
    {
      title: "Radical Price Transparency",
      description: "We eliminate hidden dealership prep fees, forced alarm systems, and dealer markups. The price and terms we quote are the exact terms you sign.",
      icon: ShieldCheck,
    },
    {
      title: "Fierce Client Advocacy",
      description: "Unlike traditional car salesmen who work for the dealership quota, our brokers work exclusively for you to extract maximum volume manufacturer discounts.",
      icon: Award,
    },
    {
      title: "White-Glove Efficiency",
      description: "Your time is priceless. We conduct credit pre-approvals, document signatures, and vehicle deliveries without you ever losing an afternoon in a showroom.",
      icon: Users,
    },
    {
      title: "Lifelong Partnership",
      description: "From your initial lease to maturity equity audits, trade-in valuations, and family vehicle upgrades, we manage your entire automotive portfolio.",
      icon: Heart,
    },
  ];

  const showroomImages = [
    "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80", // REPLACE
    "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80", // REPLACE
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80", // REPLACE
    "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80", // REPLACE
  ];

  return (
    <div className="py-12 bg-[#0B0B0E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A21] border border-[#D4AF37]/40 text-[#F0D274] text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-[#D4AF37]" />
            <span>Founded in Los Angeles, California</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Redefining Luxury Automotive Acquisition in <span className="text-gold-gradient">Southern California</span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            LA Prestige Auto Group was established with a single mission: to liberate car buyers from traditional high-pressure dealership tactics and deliver a seamless concierge buying and leasing experience.
          </p>
        </div>

        {/* Stats Strip with Dynamic Animated Counter and Rounded Star */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-[#131318] border border-[#2A2A33] shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
          <div className="text-center group">
            <div className="text-3xl sm:text-4xl font-black text-white group-hover:text-[#F0D274] transition-colors">
              <Counter target={15} suffix="+" start={inView} />
            </div>
            <div className="text-xs text-[#D4AF37] font-semibold mt-1">Years in Los Angeles</div>
            <div className="text-[11px] text-zinc-400">Serving SoCal Drivers</div>
          </div>

          <div className="text-center group">
            <div className="text-3xl sm:text-4xl font-black text-white group-hover:text-[#F0D274] transition-colors">
              <Counter target={3500} suffix="+" start={inView} />
            </div>
            <div className="text-xs text-[#D4AF37] font-semibold mt-1">Vehicles Delivered</div>
            <div className="text-[11px] text-zinc-400">New, Used & Bespoke</div>
          </div>

          <div className="text-center group">
            <div className="text-3xl sm:text-4xl font-black text-white group-hover:text-[#F0D274] transition-colors flex items-center justify-center">
              <Counter target={4.9} decimals={1} start={inView} />
              <RoundedStarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] fill-[#D4AF37] inline-block ml-1.5 -mt-0.5 filter drop-shadow-[0_0_8px_rgba(212,175,55,0.7)]" />
            </div>
            <div className="text-xs text-[#D4AF37] font-semibold mt-1">Client Satisfaction</div>
            <div className="text-[11px] text-zinc-400">540+ Verified Reviews</div>
          </div>

          <div className="text-center group">
            <div className="text-3xl sm:text-4xl font-black text-white group-hover:text-[#F0D274] transition-colors">
              <Counter target={3450} prefix="$" suffix="+" start={inView} />
            </div>
            <div className="text-xs text-[#D4AF37] font-semibold mt-1">Average Client Savings</div>
            <div className="text-[11px] text-zinc-400">vs. Retail Dealer Quotes</div>
          </div>
        </div>

        {/* Brand Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Our Heritage & Vision
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              A Boutique Showroom Built Around the Client
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              For decades, acquiring a luxury vehicle meant spending four hours trapped in a back room, negotiating against hidden accessories and deceptive finance interest rate bumps.
            </p>
            <p className="text-sm text-zinc-300 leading-relaxed">
              We changed the script. By combining an independent dealer license with extensive nationwide fleet connections, LA Prestige Auto Group delivers the best of both worlds: hand-picked showroom inventory ready for instant delivery, plus private brokerage access to every manufacturer in North America.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-[#D4AF37]">
              <span>Licensed California Auto Broker #DL-948210</span>
              <span>·</span>
              <span>Studio City Showroom</span>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src={showroomImages[0]}
                alt="Showroom view"
                className="rounded-2xl border border-[#2A2A33] aspect-[4/5] object-cover"
              />
              <img
                src={showroomImages[1]}
                alt="Showroom view"
                className="rounded-2xl border border-[#2A2A33] aspect-square object-cover"
              />
            </div>
            <div className="space-y-4 pt-6">
              <img
                src={showroomImages[2]}
                alt="Showroom view"
                className="rounded-2xl border border-[#2A2A33] aspect-square object-cover"
              />
              <img
                src={showroomImages[3]}
                alt="Showroom view"
                className="rounded-2xl border border-[#2A2A33] aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Our Principles
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              The Four Pillars of Prestige
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-[#131318] border border-[#2A2A33]">
                  <Icon className="w-8 h-8 text-[#D4AF37] mb-4" />
                  <h4 className="text-base font-bold text-white mb-2">{val.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Cards (Placeholders) */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Meet The Specialists
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Leadership & Brokerage Team
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Veteran automotive consultants with over 45 combined years of luxury retail and wholesale experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.id}
                className="card-prestige overflow-hidden group flex flex-col justify-between"
              >
                <div className="aspect-[4/5] overflow-hidden bg-black/60 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A21] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-[#F0D274] transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-xs text-[#D4AF37] font-medium">{member.role}</p>
                    <p className="text-[11px] text-zinc-400 mt-2 line-clamp-3 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#2A2A33] mt-4 text-[11px] text-zinc-400 space-y-1">
                    <p className="truncate"><strong>Specialty:</strong> {member.specialty}</p>
                    <p className="text-[#D4AF37] font-semibold">{member.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA to Showroom */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#131318] border border-[#2A2A33] text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Visit Our Studio City Showroom
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
            Conveniently located at {businessData.address}. Enjoy espresso in our private lounge while exploring available allocations.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-gold px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black"
            >
              Get Directions & Showroom Hours
            </Link>
            <a
              href={`tel:${businessData.phoneRaw}`}
              className="btn-gold-outline px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white"
            >
              Call {businessData.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
