import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, CheckCircle2, ShieldCheck, Navigation } from 'lucide-react';
import confetti from 'canvas-confetti';
import { businessData } from '../data/business.ts';

export const ContactPage: React.FC = () => {
  const [department, setDepartment] = useState<'Sales' | 'Leasing' | 'Brokerage' | 'Trade-In'>('Sales');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      department,
      name,
      phone,
      email,
      message,
      submittedAt: new Date().toISOString(),
    };

    console.log('[Contact Message Submission Stub]', payload);
    // TODO: Connect with customer support inbox or CRM routing

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#F0D274', '#FFFFFF', '#B8902B']
        });
      } catch {
        // ignore
      }
    }, 600);
  };

  return (
    <div className="py-12 bg-[#0B0B0E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A21] border border-[#D4AF37]/40 text-[#F0D274] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>Studio City Showroom & Headquarters</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact <span className="text-gold-gradient">LA Prestige</span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Connect with our sales specialists, luxury lease advisors, or private vehicle brokers. We respond to all digital inquiries within 15 minutes.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#131318] border border-[#2A2A33]">
            <Phone className="w-6 h-6 text-[#D4AF37] mb-3" />
            <h3 className="text-base font-bold text-white mb-1">Direct Phone & SMS</h3>
            <p className="text-xs text-zinc-400 mb-3">Speak live with an advisor or text our desk.</p>
            <div className="space-y-1 text-sm font-semibold">
              <a href={`tel:${businessData.phoneRaw}`} className="block text-white hover:text-[#D4AF37]">
                Call: {businessData.phone}
              </a>
              <a href={`sms:${businessData.smsRaw}`} className="block text-[#F0D274] hover:underline">
                Text: {businessData.sms}
              </a>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#131318] border border-[#2A2A33]">
            <MapPin className="w-6 h-6 text-[#D4AF37] mb-3" />
            <h3 className="text-base font-bold text-white mb-1">Studio City Showroom</h3>
            <p className="text-xs text-zinc-400 mb-3">{businessData.neighborhood}</p>
            <p className="text-xs text-zinc-200 font-medium leading-relaxed">
              {businessData.address}
            </p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(businessData.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:underline font-bold mt-2"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-[#131318] border border-[#2A2A33]">
            <Clock className="w-6 h-6 text-[#D4AF37] mb-3" />
            <h3 className="text-base font-bold text-white mb-1">Showroom Hours</h3>
            <div className="space-y-1 text-xs text-zinc-300">
              <p>{businessData.hours.weekdays}</p>
              <p>{businessData.hours.saturday}</p>
              <p>{businessData.hours.sunday}</p>
            </div>
            <p className="text-[11px] text-[#D4AF37] font-semibold mt-2">
              Walk-ins Welcome · Private appointments available
            </p>
          </div>
        </div>

        {/* Main Grid: Form + Interactive Map Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Form (Col 1-7) */}
          <div className="lg:col-span-7 bg-[#131318] border border-[#2A2A33] rounded-3xl p-6 sm:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-1">Send a Direct Inquiry</h3>
            <p className="text-xs text-zinc-400 mb-6">
              Select the appropriate department to route directly to the on-duty manager.
            </p>

            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-white">Message Transmitted!</h4>
                <p className="text-sm text-zinc-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{name}</strong>. Your inquiry has been routed to our <strong className="text-[#D4AF37]">{department}</strong> team.
                </p>
                <div className="p-4 bg-[#1A1A21] border border-[#2A2A33] rounded-xl text-xs text-zinc-300 max-w-sm mx-auto space-y-1.5 text-left">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Department:</span>
                    <span>{department} Desk</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Target Response:</span>
                    <span className="text-emerald-400 font-semibold">Under 15 Minutes</span>
                  </div>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-gold px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Department Selector */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Department
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {(['Sales', 'Leasing', 'Brokerage', 'Trade-In'] as const).map((dept) => (
                      <button
                        key={dept}
                        type="button"
                        onClick={() => setDepartment(dept)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                          department === dept
                            ? 'btn-gold text-black shadow-md'
                            : 'bg-[#1A1A21] text-zinc-400 hover:text-white border border-[#2A2A33]'
                        }`}
                      >
                        {dept}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Marcus Sterling"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(818) 555-0199"
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
                      placeholder="marcus@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Message or Specific Vehicle Inquiry *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we assist you with your new vehicle, lease quote, or trade-in?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#1A1A21] border border-[#2A2A33] rounded-xl p-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-gold py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>{submitting ? 'Transmitting Message...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Map Location & Showroom Mockup (Col 8-12) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#131318] border border-[#2A2A33] rounded-3xl overflow-hidden shadow-2xl">
              {/* Map Canvas Mockup */}
              <div className="relative aspect-[4/3] bg-zinc-900 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
                  alt="Studio City Los Angeles Map"
                  className="w-full h-full object-cover filter brightness-75 contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131318] via-transparent to-black/30" />

                {/* Location Marker Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="p-3 rounded-full bg-[#D4AF37] text-black shadow-2xl animate-bounce">
                    <MapPin className="w-6 h-6 fill-black" />
                  </div>
                  <div className="mt-2 bg-[#0B0B0E]/90 border border-[#D4AF37] px-3 py-1 rounded-xl text-xs font-bold text-white shadow-xl backdrop-blur-md">
                    LA Prestige Showroom
                  </div>
                </div>
              </div>

              {/* Showroom Details */}
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="text-base font-bold text-white">Showroom & Lounge</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">{businessData.address}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#1A1A21] border border-[#2A2A33] text-xs text-zinc-300 space-y-1.5">
                  <p><strong>Parking:</strong> Complimentary on-site valet & client parking available.</p>
                  <p><strong>Major Landmarks:</strong> Minutes from Universal City, Beverly Hills, and the 101 Freeway.</p>
                </div>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(businessData.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-gold-outline py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-[#D4AF37]" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
