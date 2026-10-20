import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight, Info, ShieldCheck, DollarSign } from 'lucide-react';
import { calculateAutoLoan, calculateAutoLease } from '../utils/calculator.ts';

interface LoanCalculatorProps {
  initialPrice?: number;
  compact?: boolean;
}

export const LoanCalculator: React.FC<LoanCalculatorProps> = ({
  initialPrice = 55000,
  compact = false,
}) => {
  const [calcMode, setCalcMode] = useState<'loan' | 'lease'>('loan');
  const [vehiclePrice, setVehiclePrice] = useState<number>(initialPrice);
  const [downPayment, setDownPayment] = useState<number>(5000);
  const [tradeInValue, setTradeInValue] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(5.9);
  const [termMonths, setTermMonths] = useState<number>(60);
  const [leaseTerm, setLeaseTerm] = useState<number>(36);

  // Live Loan Calculation
  const loanResult = calculateAutoLoan({
    vehiclePrice,
    downPayment,
    tradeInValue,
    interestRateApr: interestRate,
    termMonths,
    salesTaxRate: 9.5, // Standard LA County rate
  });

  // Live Lease Calculation
  const leaseResult = calculateAutoLease({
    vehicleMSRP: vehiclePrice,
    negotiatedPrice: vehiclePrice * 0.96, // typical fleet negotiated discount
    downPayment,
    tradeInValue,
    leaseTermMonths: leaseTerm,
    residualPercentage: 58,
    moneyFactor: 0.0022,
    salesTaxRate: 9.5,
  });

  const activeMonthly = calcMode === 'loan' ? loanResult.monthlyPayment : leaseResult.monthlyPayment;

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-[#2A2A33] shadow-2xl ${
      compact ? 'bg-[#1A1A21] p-5 sm:p-6' : 'bg-[#131318] p-6 sm:p-10'
    }`}>
      {/* Background Graphic or Photo Accent */}
      {!compact && (
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img
            src="/assets/aistudio/7b8892fd-1f0c-41f9-84ee-52af72b36e51_dcc01f22.jpg"
            alt=""
            className="w-full h-full object-cover filter blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#131318] via-[#131318]/90 to-[#131318]" />
        </div>
      )}

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#2A2A33] gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-4 h-4" />
              <span>Financial Estimator</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
              Auto Loan & Lease Payment Calculator
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              Instant monthly estimates with real California sales tax and amortization modeling.
            </p>
          </div>

          {/* Loan / Lease Mode Switcher */}
          <div className="inline-flex p-1 rounded-xl bg-[#1A1A21] border border-[#2A2A33] self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setCalcMode('loan')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                calcMode === 'loan' ? 'btn-gold text-black shadow-sm' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Finance (Loan)
            </button>
            <button
              type="button"
              onClick={() => setCalcMode('lease')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                calcMode === 'lease' ? 'btn-gold text-black shadow-sm' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Lease (36 Mo)
            </button>
          </div>
        </div>

        {/* Inputs & Live Output Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          
          {/* Controls (Col 1-7) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Vehicle Price */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-zinc-300 mb-1.5">
                <span>Vehicle Price (MSRP)</span>
                <span className="text-[#F0D274] font-bold text-sm">${vehiclePrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="20000"
                max="200000"
                step="1000"
                value={vehiclePrice}
                onChange={(e) => setVehiclePrice(Number(e.target.value))}
                className="w-full accent-[#D4AF37] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 mt-1">
                <span>$20,000</span>
                <span>$100,000</span>
                <span>$200,000+</span>
              </div>
            </div>

            {/* Down Payment & Trade-In Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Down Payment ($)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 text-zinc-400 text-xs">$</span>
                  <input
                    type="number"
                    min="0"
                    step="500"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl pl-8 pr-3 py-2 text-xs font-semibold text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Estimated Trade-In Equity ($)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 text-zinc-400 text-xs">$</span>
                  <input
                    type="number"
                    min="0"
                    step="500"
                    value={tradeInValue}
                    onChange={(e) => setTradeInValue(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl pl-8 pr-3 py-2 text-xs font-semibold text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>
            </div>

            {/* Term and Rate Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {calcMode === 'loan' ? (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Loan Term (Months)
                    </label>
                    <select
                      value={termMonths}
                      onChange={(e) => setTermMonths(Number(e.target.value))}
                      className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="36">36 Months (3 Years)</option>
                      <option value="48">48 Months (4 Years)</option>
                      <option value="60">60 Months (5 Years - Standard)</option>
                      <option value="72">72 Months (6 Years)</option>
                      <option value="84">84 Months (7 Years)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Estimated APR (%)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      max="25"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Lease Duration
                    </label>
                    <select
                      value={leaseTerm}
                      onChange={(e) => setLeaseTerm(Number(e.target.value))}
                      className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="24">24 Months</option>
                      <option value="36">36 Months (Most Popular)</option>
                      <option value="39">39 Months</option>
                      <option value="48">48 Months</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Credit Tier
                    </label>
                    <div className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3 py-2 text-xs font-semibold text-[#D4AF37] flex items-center justify-between">
                      <span>Tier 1 Prime (720+)</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Results Display Panel (Col 8-12) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#0B0B0E] border border-[#D4AF37]/40 shadow-inner">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                Estimated Monthly Payment
              </span>
              
              <div className="flex items-baseline gap-1 mt-1 mb-4">
                <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  ${Math.round(activeMonthly).toLocaleString()}
                </span>
                <span className="text-xs text-zinc-400 font-medium">/ month</span>
              </div>

              <div className="space-y-2 py-3 border-y border-[#2A2A33] text-xs">
                {calcMode === 'loan' ? (
                  <>
                    <div className="flex justify-between text-zinc-400">
                      <span>Total Amount Financed:</span>
                      <span className="text-white font-medium">${loanResult.totalFinanced.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Estimated LA Sales Tax (9.5%):</span>
                      <span className="text-white font-medium">${loanResult.salesTaxAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Total Interest over {termMonths} mos:</span>
                      <span className="text-zinc-300 font-medium">${loanResult.totalInterest.toLocaleString()}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between text-zinc-400">
                      <span>Total Due at Signing:</span>
                      <span className="text-[#F0D274] font-bold">${leaseResult.totalDueAtSigning.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Lease End Purchase Option:</span>
                      <span className="text-white font-medium">${leaseResult.residualValue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Monthly Tax Included:</span>
                      <span className="text-zinc-300 font-medium">${leaseResult.monthlyTax.toFixed(2)}/mo</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="pt-5 space-y-3">
              <Link
                to={`/financing?price=${vehiclePrice}&down=${downPayment}&type=${calcMode}`}
                className="w-full btn-gold py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Apply for Financing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <p className="text-[10px] text-zinc-500 leading-tight text-center">
                *Estimates for illustration only. On approved Tier 1 credit. California taxes, DMV registration, and dealer fees ($85) apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
