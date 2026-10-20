import React, { useState } from 'react';
import { X, CheckCircle, Calendar, ShieldCheck, Car, Phone, Mail, User } from 'lucide-react';
import confetti from 'canvas-confetti';
import { businessData } from '../data/business.ts';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'test-drive' | 'check-availability' | 'claim-deal' | 'quick-quote';
  title?: string;
  subtitle?: string;
  vehicleName?: string;
  stockOrVin?: string;
  dealTerms?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  type,
  title,
  subtitle,
  vehicleName,
  stockOrVin,
  dealTerms,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const leadPayload = {
      type,
      fullName,
      phone,
      email,
      preferredDate,
      notes,
      vehicleName,
      stockOrVin,
      dealTerms,
      submittedAt: new Date().toISOString(),
    };

    console.log('[Lead Submission Stub] Sent to CRM/Sales Queue:', leadPayload);
    // TODO: Connect with CRM webhook (e.g. DealerSocket, HubSpot, Zapier)

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#F0D274', '#FFFFFF', '#B8902B']
        });
      } catch {
        // Confetti fallback
      }
    }, 600);
  };

  const getHeading = () => {
    if (title) return title;
    switch (type) {
      case 'test-drive':
        return 'Schedule VIP Test Drive';
      case 'check-availability':
        return 'Check Availability';
      case 'claim-deal':
        return 'Claim Exclusive Lease Deal';
      case 'quick-quote':
        return 'Request Detailed Pricing Quote';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div
        className="relative bg-[#131318] border border-[#2A2A33] rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] text-white animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-white p-2 rounded-lg bg-[#1A1A21] border border-[#2A2A33] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-white">Request Confirmed!</h3>
            <p className="text-sm text-zinc-300 max-w-md mx-auto">
              Thank you, <strong className="text-white">{fullName}</strong>. An LA Prestige luxury vehicle specialist has received your request for{' '}
              <strong className="text-[#D4AF37]">{vehicleName || 'your requested vehicle'}</strong>.
            </p>
            <div className="p-4 bg-[#1A1A21] border border-[#2A2A33] rounded-xl text-xs text-zinc-300 text-left space-y-2">
              <div className="flex justify-between">
                <span className="text-zinc-500">Priority Response:</span>
                <span className="text-[#D4AF37] font-semibold">Under 15 Minutes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Contact Number:</span>
                <span>{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Immediate Direct Line:</span>
                <a href={`tel:${businessData.phoneRaw}`} className="text-white hover:underline font-semibold">
                  {businessData.phone}
                </a>
              </div>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="w-full btn-gold py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-black mt-4"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37]">
                LA Prestige Concierge
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">{getHeading()}</h3>
              <p className="text-xs text-zinc-400 mt-1">
                {subtitle || 'Lock in your preferred appointment or pricing quote with zero obligation.'}
              </p>

              {vehicleName && (
                <div className="mt-3.5 p-3 rounded-xl bg-[#1A1A21] border border-[#D4AF37]/30 flex items-center gap-3">
                  <Car className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <div className="text-xs">
                    <p className="font-bold text-white">{vehicleName}</p>
                    {dealTerms && <p className="text-[#F0D274] font-medium">{dealTerms}</p>}
                    {stockOrVin && <p className="text-zinc-500 text-[11px]">Ref / VIN: {stockOrVin}</p>}
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Christian Bale"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="(818) 555-0123"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="client@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>
              </div>

              {type === 'test-drive' && (
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Preferred Date & Time
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. This Saturday at 2:00 PM"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Questions or Trade-In Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us if you have a trade-in, preferred down payment, or timing..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl p-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-gold py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-black flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Transmitting Request...</span>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4 text-black" />
                      <span>{type === 'claim-deal' ? 'Claim Deal Now' : 'Submit Priority Request'}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Your privacy is protected. No spam. California dealer licensed.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
