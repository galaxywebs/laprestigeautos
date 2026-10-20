import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DollarSign, Upload, ShieldCheck, CheckCircle2, ArrowRight, Award, Zap, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FAQAccordion } from '../components/FAQAccordion.tsx';

export const SellTradePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initIdentifier = searchParams.get('identifier') || '';
  const initMileage = searchParams.get('mileage') || '';

  const [vinOrPlate, setVinOrPlate] = useState(initIdentifier);
  const [year, setYear] = useState('2022');
  const [make, setMake] = useState('BMW');
  const [model, setModel] = useState('X3 xDrive30i');
  const [mileage, setMileage] = useState(initMileage || '28500');
  const [condition, setCondition] = useState<'Excellent' | 'Good' | 'Fair'>('Excellent');
  const [loanStatus, setLoanStatus] = useState('Financed (Has Loan/Lease)');
  const [ownerName, setOwnerName] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      vehicle: { vinOrPlate, year, make, model, mileage, condition, loanStatus },
      contact: { ownerName, ownerPhone, ownerEmail, notes },
      submittedAt: new Date().toISOString(),
    };

    console.log('[Vehicle Trade-In / Appraisal Submission Stub]', payload);
    // TODO: Connect with valuation API or CRM lead inbox

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 75,
          spread: 60,
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
            <DollarSign className="w-4 h-4 text-[#D4AF37]" />
            <span>Highest Market Buyout Guarantee</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Sell or Trade-In <span className="text-gold-gradient">Your Car</span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Get an instant cash offer or maximize your California trade-in tax savings toward a new vehicle. We beat big box retailer offers by $1,000 to $3,000 and handle all bank payoffs.
          </p>
        </div>

        {/* 3 Step Valuation Value Prop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#131318] border border-[#2A2A33] text-left">
            <div className="w-10 h-10 rounded-xl bg-[#1A1A21] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] font-bold text-sm mb-3">
              1
            </div>
            <h4 className="text-base font-bold text-white mb-1.5">Submit Vehicle Specs</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Tell us your vehicle's VIN or license plate, mileage, and condition. We cross-reference live Manheim MMR and dealer auction indexes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#131318] border border-[#2A2A33] text-left">
            <div className="w-10 h-10 rounded-xl bg-[#1A1A21] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] font-bold text-sm mb-3">
              2
            </div>
            <h4 className="text-base font-bold text-white mb-1.5">Receive Guaranteed Offer</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Get an official written buyout quote valid for 7 days or 500 miles. Zero obligations to purchase or lease another car from us.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#131318] border border-[#2A2A33] text-left">
            <div className="w-10 h-10 rounded-xl bg-[#1A1A21] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] font-bold text-sm mb-3">
              3
            </div>
            <h4 className="text-base font-bold text-white mb-1.5">Same-Day Payment & Title</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Drop off at our Studio City showroom or request home vehicle pickup. Receive instant bank wire or check while we clear DMV paperwork.
            </p>
          </div>
        </div>

        {/* Valuation Appraisal Form */}
        <div className="max-w-3xl mx-auto bg-[#131318] border border-[#2A2A33] rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white">Appraisal Request Submitted!</h3>
              <p className="text-sm text-zinc-300 max-w-md mx-auto">
                Thank you, <strong className="text-white">{ownerName}</strong>. Our chief appraiser is reviewing your <strong className="text-[#D4AF37]">{year} {make} {model}</strong> and will return a guaranteed offer within 30 minutes.
              </p>
              <div className="p-4 bg-[#1A1A21] border border-[#2A2A33] rounded-xl text-xs text-zinc-300 max-w-md mx-auto space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Vehicle:</span>
                  <span>{year} {make} {model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Mileage:</span>
                  <span>{Number(mileage).toLocaleString()} mi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Reported Condition:</span>
                  <span className="text-[#F0D274] font-semibold">{condition}</span>
                </div>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-gold px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black mt-4"
              >
                Appraise Another Vehicle
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="border-b border-[#2A2A33] pb-4">
                <h3 className="text-xl font-bold text-white">Vehicle Information</h3>
                <p className="text-xs text-zinc-400">Enter details accurately for an exact guaranteed offer.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">VIN or License Plate</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 17-char VIN or Plate"
                    value={vinOrPlate}
                    onChange={(e) => setVinOrPlate(e.target.value)}
                    className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs uppercase font-mono text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Current Mileage *</label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 32000"
                    value={mileage}
                    onChange={(e) => setMileage(e.target.value)}
                    className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Year</label>
                  <input
                    type="text"
                    required
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Make</label>
                  <input
                    type="text"
                    required
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                    className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Model & Trim</label>
                  <input
                    type="text"
                    required
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Overall Condition</label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value as any)}
                    className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Excellent">Excellent (Like-New, Clean Title, No Scratches)</option>
                    <option value="Good">Good (Normal Wear, Minor Dings, Clean Title)</option>
                    <option value="Fair">Fair (Noticeable Scuffs, Tires Need Replacement)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Loan / Title Status</label>
                  <select
                    value={loanStatus}
                    onChange={(e) => setLoanStatus(e.target.value)}
                    className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Financed (Has Loan/Lease)">Financed (We pay off lender directly)</option>
                    <option value="Owned Free & Clear (Have California Title)">Owned Free & Clear (Have California Title)</option>
                    <option value="Active Lease (Near Maturity)">Active Lease (Near Maturity)</option>
                  </select>
                </div>
              </div>

              {/* Photo Upload Placeholder UI */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Upload Photos (Exterior, Dashboard & Tires - Optional)
                </label>
                <div className="border-2 border-dashed border-[#2A2A33] hover:border-[#D4AF37]/50 rounded-2xl p-6 text-center cursor-pointer bg-[#1A1A21]/50 transition-colors">
                  <Upload className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                  <p className="text-xs text-zinc-300 font-medium">Click to select files or drag photos here</p>
                  <p className="text-[10px] text-zinc-500 mt-1">PNG, JPG up to 25MB total</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t border-[#2A2A33] pt-6 space-y-4">
                <h4 className="text-sm font-bold text-white">Your Contact Details</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(818) 555-0199"
                      value={ownerPhone}
                      onChange={(e) => setOwnerPhone(e.target.value)}
                      className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={ownerEmail}
                      onChange={(e) => setOwnerEmail(e.target.value)}
                      className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Special Modifications or Service Notes</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Recently replaced Pirelli tires, ceramic coating applied, minor curb rash on passenger wheel..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl p-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37] resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-gold py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black flex items-center justify-center gap-2 shadow-lg"
              >
                {isSubmitting ? 'Calculating Live MMR Appraisal...' : 'Submit for Guaranteed Cash Offer'}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero obligations. Guaranteed written offer delivered within 30 minutes.</span>
              </div>
            </form>
          )}
        </div>

        {/* Trade-In FAQ */}
        <FAQAccordion category="trade-in" title="Trade-In & Buyout FAQs" />
      </div>
    </div>
  );
};
