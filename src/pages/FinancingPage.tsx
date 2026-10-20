import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ShieldCheck, Lock, CheckCircle, Calculator, User, Building, Car, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { LoanCalculator } from '../components/LoanCalculator.tsx';
import { businessData } from '../data/business.ts';
import { FAQAccordion } from '../components/FAQAccordion.tsx';

export const FinancingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initPrice = searchParams.get('price') ? Number(searchParams.get('price')) : 55000;
  const initVehicle = searchParams.get('vehicle') || '';

  // Multi-step form state
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form Fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Los Angeles');
  const [state, setState] = useState('CA');
  const [zip, setZip] = useState('');

  // Employment
  const [employmentStatus, setEmploymentStatus] = useState('Employed Full-Time');
  const [employer, setEmployer] = useState('');
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [housingStatus, setHousingStatus] = useState('Rent');
  const [monthlyHousing, setMonthlyHousing] = useState('');

  // Vehicle & Finance Preferences
  const [vehicleTarget, setVehicleTarget] = useState(initVehicle);
  const [estimatedDown, setEstimatedDown] = useState('5000');
  const [creditTier, setCreditTier] = useState('Excellent (720+)');
  const [consentAccepted, setConsentAccepted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep((step + 1) as 1 | 2 | 3 | 4);
    } else {
      // Final submission
      setIsSubmitting(true);
      const appData = {
        applicant: { firstName, lastName, phone, email, city, state, zip },
        employment: { employmentStatus, employer, monthlyIncome, housingStatus, monthlyHousing },
        vehicleInterest: { vehicleTarget, estimatedDown, creditTier },
        consentAccepted,
        submittedAt: new Date().toISOString(),
      };

      console.log('[Financing Pre-Approval Application Stub]', appData);
      // TODO: Connect with RouteOne, DealerTrack, or secure CRM credit application webhook

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
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
    }
  };

  return (
    <div className="py-12 bg-[#0B0B0E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A21] border border-[#D4AF37]/40 text-[#F0D274] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Fast & Secure Pre-Approval</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            VIP Automotive <span className="text-gold-gradient">Financing & Leasing</span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            We partner with over 30 leading credit unions and prime lending institutions to deliver aggressive interest rates, transparent terms, and rapid digital approvals for all credit profiles.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "30+ Lending Partners", desc: "Prime national banks, California credit unions, and subprime specialty lenders." },
            { title: "No Dealer APR Markups", desc: "We pass through tier-1 buy rates directly to you with zero hidden spread." },
            { title: "Flexible Terms", desc: "Tailored 24 to 84-month amortizations with custom balloon and lease structures." },
            { title: "Zero Impact Soft Pull Option", desc: "Explore qualified monthly payments without affecting your credit score." },
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#131318] border border-[#2A2A33] text-left">
              <CheckCircle className="w-5 h-5 text-[#D4AF37] mb-2" />
              <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Interactive Loan & Lease Calculator */}
        <div className="max-w-5xl mx-auto">
          <LoanCalculator initialPrice={initPrice} />
        </div>

        {/* Multi-Step Pre-Approval Application Form */}
        <div className="max-w-3xl mx-auto bg-[#131318] border border-[#2A2A33] rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Step {step} of 3
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Online Pre-Approval Application
            </h2>
            <p className="text-xs text-zinc-400 mt-1">
              No Social Security Number collected in this preliminary step. Fast review by our Los Angeles finance desk.
            </p>

            {/* Stepper Indicator */}
            <div className="flex items-center justify-center gap-3 mt-6">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    step === s
                      ? 'btn-gold text-black shadow-md'
                      : step > s
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-500'
                      : 'bg-[#1A1A21] text-zinc-500 border border-[#2A2A33]'
                  }`}>
                    {step > s ? '✓' : s}
                  </div>
                  {s < 3 && <div className={`w-12 h-0.5 ${step > s ? 'bg-emerald-500' : 'bg-[#2A2A33]'}`} />}
                </div>
              ))}
            </div>
          </div>

          {isSuccess ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white">Application Received!</h3>
              <p className="text-sm text-zinc-300 max-w-md mx-auto">
                Thank you, <strong className="text-white">{firstName} {lastName}</strong>. Our finance desk is reviewing your tier qualifications and matching prime lender rate options.
              </p>
              <div className="p-4 bg-[#1A1A21] border border-[#2A2A33] rounded-xl text-xs text-zinc-300 text-left max-w-md mx-auto space-y-2">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Applicant:</span>
                  <span>{firstName} {lastName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Vehicle:</span>
                  <span className="text-[#D4AF37] font-semibold">{vehicleTarget || 'Inventory Choice'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Expected Decision:</span>
                  <span className="text-emerald-400 font-bold">Within 30 Minutes</span>
                </div>
              </div>
              <div className="pt-4 flex justify-center">
                <Link to="/new-cars" className="btn-gold px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black">
                  Browse Vehicles While You Wait
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleNextStep} className="space-y-6">
              
              {/* Step 1: Personal Info */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-white font-bold text-sm pb-2 border-b border-[#2A2A33]">
                    <User className="w-4 h-4 text-[#D4AF37]" />
                    <span>Personal Contact Information</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">First Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">Last Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Doe"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(818) 555-0123"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">City</label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">State</label>
                      <input
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">ZIP Code *</label>
                      <input
                        type="text"
                        required
                        placeholder="91604"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Employment & Income */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-white font-bold text-sm pb-2 border-b border-[#2A2A33]">
                    <Building className="w-4 h-4 text-[#D4AF37]" />
                    <span>Employment & Financial Profile</span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">Employment Status</label>
                    <select
                      value={employmentStatus}
                      onChange={(e) => setEmploymentStatus(e.target.value)}
                      className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="Employed Full-Time">Employed Full-Time</option>
                      <option value="Self-Employed / Business Owner">Self-Employed / Business Owner</option>
                      <option value="Contract / 1099">Contract / 1099</option>
                      <option value="Retired">Retired</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">Employer / Business Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Company or LLC"
                        value={employer}
                        onChange={(e) => setEmployer(e.target.value)}
                        className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">Approx. Gross Monthly Income ($)</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 8,500"
                        value={monthlyIncome}
                        onChange={(e) => setMonthlyIncome(e.target.value)}
                        className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">Residential Status</label>
                      <select
                        value={housingStatus}
                        onChange={(e) => setHousingStatus(e.target.value)}
                        className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="Rent">Rent</option>
                        <option value="Own (with Mortgage)">Own (with Mortgage)</option>
                        <option value="Own (Free & Clear)">Own (Free & Clear)</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">Monthly Rent / Mortgage ($)</label>
                      <input
                        type="text"
                        placeholder="e.g. 2,800"
                        value={monthlyHousing}
                        onChange={(e) => setMonthlyHousing(e.target.value)}
                        className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Vehicle of Interest & Consent */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-white font-bold text-sm pb-2 border-b border-[#2A2A33]">
                    <Car className="w-4 h-4 text-[#D4AF37]" />
                    <span>Target Vehicle & Credit Authorization</span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">Vehicle of Interest (or Price Range)</label>
                    <input
                      type="text"
                      placeholder="e.g. 2026 BMW X1 xDrive28i or Porsche 911"
                      value={vehicleTarget}
                      onChange={(e) => setVehicleTarget(e.target.value)}
                      className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">Estimated Down Payment ($)</label>
                      <input
                        type="text"
                        placeholder="e.g. 5,000"
                        value={estimatedDown}
                        onChange={(e) => setEstimatedDown(e.target.value)}
                        className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1">Self-Reported Credit Tier</label>
                      <select
                        value={creditTier}
                        onChange={(e) => setCreditTier(e.target.value)}
                        className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="Tier 1 Prime (720+)">Tier 1 Prime (720+)</option>
                        <option value="Good (680 - 719)">Good (680 - 719)</option>
                        <option value="Fair (620 - 679)">Fair (620 - 679)</option>
                        <option value="Building / First-Time Buyer">Building / First-Time Buyer</option>
                      </select>
                    </div>
                  </div>

                  {/* Privacy & Security Note */}
                  <div className="p-4 rounded-xl bg-[#1A1A21] border border-[#2A2A33] text-xs text-zinc-400 space-y-2">
                    <div className="flex items-center gap-2 text-white font-semibold">
                      <Lock className="w-4 h-4 text-emerald-400" />
                      <span>Bank-Grade 256-Bit SSL Encryption</span>
                    </div>
                    <p className="text-[11px] leading-relaxed">
                      LA Prestige Auto Group does NOT collect or store your Social Security Number on this website. Our finance officer will contact you via phone or encrypted RouteOne portal to finalize official lender submissions.
                    </p>
                  </div>

                  {/* Consent Checkbox */}
                  <label className="flex items-start gap-3 cursor-pointer pt-2">
                    <input
                      type="checkbox"
                      required
                      checked={consentAccepted}
                      onChange={(e) => setConsentAccepted(e.target.checked)}
                      className="mt-1 accent-[#D4AF37] w-4 h-4 rounded cursor-pointer"
                    />
                    <span className="text-xs text-zinc-300 leading-relaxed">
                      I authorize LA Prestige Auto Group to contact me regarding vehicle financing and lease options via phone, email, or SMS. I understand that formal credit decisions are rendered by licensed California financing institutions.
                    </span>
                  </label>
                </div>
              )}

              {/* Stepper Buttons */}
              <div className="pt-4 flex items-center justify-between border-t border-[#2A2A33]">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((step - 1) as 1 | 2 | 3 | 4)}
                    className="px-5 py-2.5 rounded-xl bg-[#1A1A21] border border-[#2A2A33] text-xs font-semibold text-zinc-300 hover:text-white"
                  >
                    Back
                  </button>
                ) : <div />}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-black flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Verifying Application...</span>
                  ) : step < 3 ? (
                    <>
                      <span>Continue to Step {step + 1}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4 text-black" />
                      <span>Submit Pre-Approval</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Financing FAQs */}
        <FAQAccordion category="financing" title="Financing & Lease Questions" />
      </div>
    </div>
  );
};
