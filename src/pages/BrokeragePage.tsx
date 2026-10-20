import React, { useState } from 'react';
import { Compass, ShieldCheck, CheckCircle2, Clock, DollarSign, Award, ArrowRight, Truck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { businessData } from '../data/business.ts';
import { FAQAccordion } from '../components/FAQAccordion.tsx';

export const BrokeragePage: React.FC = () => {
  // Sourcing Request Form State
  const [make, setMake] = useState('Porsche');
  const [model, setModel] = useState('911 Carrera GTS or Turbo');
  const [yearRange, setYearRange] = useState('2024 - 2026');
  const [budget, setBudget] = useState('$130,000 - $160,000');
  const [colors, setColors] = useState('Chalk, GT Silver, or Agate Grey');
  const [timeline, setTimeline] = useState('Within 2 Weeks');
  const [condition, setCondition] = useState('New or Like-New CPO');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [specialSpecs, setSpecialSpecs] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      requestType: 'Vehicle Sourcing & Brokerage',
      wishlist: { make, model, yearRange, budget, colors, timeline, condition, specialSpecs },
      client: { clientName, clientPhone, clientEmail },
      submittedAt: new Date().toISOString(),
    };

    console.log('[Brokerage Sourcing Request Stub]', payload);
    // TODO: Connect with luxury vehicle sourcing desk CRM

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#F0D274', '#FFFFFF', '#B8902B']
        });
      } catch {
        // ignore
      }
    }, 700);
  };

  return (
    <div className="py-12 bg-[#0B0B0E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A21] border border-[#D4AF37]/40 text-[#F0D274] text-xs font-bold uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#D4AF37]" />
            <span>VIP Automotive Acquisition</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Private Car Brokerage & <span className="text-gold-gradient">Vehicle Sourcing</span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Never waste hours haggling in retail dealerships again. We locate rare allocations, eliminate bogus markups, negotiate wholesale fleet discounts, and deliver straight to your residence.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#131318] border border-[#2A2A33] text-left">
            <DollarSign className="w-6 h-6 text-[#D4AF37] mb-3" />
            <h4 className="text-base font-bold text-white mb-1.5">Unrivaled Cost Savings</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Our clients save an average of <strong>{businessData.stats.averageBrokerageSavings}</strong> by cutting out dealer add-ons, excess doc fees, and retail markups.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#131318] border border-[#2A2A33] text-left">
            <Award className="w-6 h-6 text-[#D4AF37] mb-3" />
            <h4 className="text-base font-bold text-white mb-1.5">Rare Allocations</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Skip 6-to-12 month dealer waitlists. We source hard-to-find Porsche GT models, AMG G-Wagons, Land Rovers, and custom color specs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#131318] border border-[#2A2A33] text-left">
            <Clock className="w-6 h-6 text-[#D4AF37] mb-3" />
            <h4 className="text-base font-bold text-white mb-1.5">Zero Dealership Hassle</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              You never step foot inside a finance office. Contracts are executed securely online via DocuSign in less than 5 minutes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#131318] border border-[#2A2A33] text-left">
            <Truck className="w-6 h-6 text-[#D4AF37] mb-3" />
            <h4 className="text-base font-bold text-white mb-1.5">Enclosed Door Delivery</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Your vehicle arrives fully detailed, registered, and insured on an enclosed carrier straight to your driveway or studio lot.
            </p>
          </div>
        </div>

        {/* 4-Step Process Timeline */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#131318] border border-[#2A2A33]">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              The Concierge Timeline
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              From Wishlist to Your Driveway in 4 Steps
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              { num: '01', title: 'Consultation & Wishlist', desc: 'Specify your exact year, make, trim, color package, and financial parameters.' },
              { num: '02', title: 'Nationwide Search', desc: 'Within 24-48 hours, our brokers locate matched vehicles across regional and wholesale pipelines.' },
              { num: '03', title: 'Terms & Price Locking', desc: 'We negotiate the bottom-dollar purchase price or lowest lease money factor with full transparency.' },
              { num: '04', title: 'VIP Flatbed Handover', desc: 'Sign remotely, and take delivery of your new vehicle washed, detailed, and with a full tank of gas.' },
            ].map((st, i) => (
              <div key={i} className="space-y-3">
                <span className="text-3xl font-black text-[#D4AF37] block">
                  {st.num}
                </span>
                <h4 className="text-base font-bold text-white">{st.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* "Request a Car" Sourcing Form */}
        <div className="max-w-3xl mx-auto bg-[#131318] border border-[#2A2A33] rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Confidential Sourcing Request
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Tell Us What You're Looking For
            </h2>
            <p className="text-xs text-zinc-400 mt-1">
              Our brokers will contact you with matched allocations and price targets within 2 hours.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white">Sourcing Request Active!</h3>
              <p className="text-sm text-zinc-300 max-w-md mx-auto">
                Thank you, <strong className="text-white">{clientName}</strong>. Our senior broker has begun scanning nationwide dealer inventories for your <strong className="text-[#D4AF37]">{yearRange} {make} {model}</strong>.
              </p>
              <div className="p-4 bg-[#1A1A21] border border-[#2A2A33] rounded-xl text-xs text-zinc-300 text-left max-w-md mx-auto space-y-2">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Target Build:</span>
                  <span>{make} {model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Target Budget:</span>
                  <span className="text-[#F0D274] font-semibold">{budget}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Timeline:</span>
                  <span>{timeline}</span>
                </div>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-gold px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black mt-4"
              >
                Submit Another Sourcing Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Make *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Porsche, BMW, Mercedes"
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                    className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Model & Trim *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 911 Carrera GTS or M4 Comp"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Year Range</label>
                  <input
                    type="text"
                    placeholder="e.g. 2024-2026"
                    value={yearRange}
                    onChange={(e) => setYearRange(e.target.value)}
                    className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Target Budget Range</label>
                  <input
                    type="text"
                    placeholder="e.g. $80k - $100k"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Timeline</label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Ready to Buy This Week">Ready to Buy This Week</option>
                    <option value="Within 2-3 Weeks">Within 2-3 Weeks</option>
                    <option value="1-2 Months (Lease End Soon)">1-2 Months (Lease End Soon)</option>
                    <option value="Just Researching Availability">Just Researching Availability</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Preferred Exterior & Interior Colors</label>
                  <input
                    type="text"
                    placeholder="e.g. Black / Cognac or Chalk Grey"
                    value={colors}
                    onChange={(e) => setColors(e.target.value)}
                    className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Condition</label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Brand New Only">Brand New Only</option>
                    <option value="Certified Pre-Owned (Under 15k Mi)">Certified Pre-Owned (Under 15k Mi)</option>
                    <option value="Either New or CPO">Either New or CPO</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Must-Have Packages & Options</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Sport Chrono, Burmester Sound, Carbon Roof, Heads-Up Display..."
                  value={specialSpecs}
                  onChange={(e) => setSpecialSpecs(e.target.value)}
                  className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl p-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37] resize-none"
                />
              </div>

              {/* Client Contact Info */}
              <div className="border-t border-[#2A2A33] pt-6 space-y-4">
                <h4 className="text-sm font-bold text-white">Your Contact Information</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Alexander Stone"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(818) 555-0199"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="alexander@example.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full btn-gold py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black flex items-center justify-center gap-2 shadow-lg"
              >
                {submitting ? 'Locating Allocations...' : 'Initiate Sourcing Search'}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Free Initial Search · No fee charged unless we find your exact match</span>
              </div>
            </form>
          )}
        </div>

        {/* Brokerage FAQ */}
        <FAQAccordion category="brokerage" title="Auto Brokerage FAQs" />
      </div>
    </div>
  );
};
