import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ChevronRight,
  Heart,
  Share2,
  Phone,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Fuel,
  Gauge,
  Cpu,
  ArrowRight,
  Calculator,
  Car,
  Maximize2,
  X
} from 'lucide-react';
import { getVehicleBySlug, getRelatedVehicles } from '../data/vehicles.ts';
import { useSavedCars } from '../context/SavedCarsContext.tsx';
import { businessData } from '../data/business.ts';
import { LeadModal } from '../components/LeadModal.tsx';
import { VehicleCard } from '../components/VehicleCard.tsx';
import { LoanCalculator } from '../components/LoanCalculator.tsx';

export const VehicleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const vehicle = getVehicleBySlug(slug || '');
  const { isSaved, toggleSave } = useSavedCars();

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [modalType, setModalType] = useState<'test-drive' | 'check-availability' | 'quick-quote' | null>(null);
  const [copiedShare, setCopiedShare] = useState(false);

  if (!vehicle) {
    return (
      <div className="py-24 text-center bg-[#0B0B0E] min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-white mb-2">Vehicle Not Found</h2>
        <p className="text-zinc-400 text-sm mb-6">
          The vehicle you are seeking may have been sold or reserved.
        </p>
        <Link to="/new-cars" className="btn-gold px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-black">
          Browse Available Inventory
        </Link>
      </div>
    );
  }

  const saved = isSaved(vehicle.slug);
  const related = getRelatedVehicles(vehicle.slug, vehicle.make, vehicle.bodyType);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${vehicle.year} ${vehicle.make} ${vehicle.model} - LA Prestige Auto Group`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  return (
    <div className="py-8 bg-[#0B0B0E] min-h-screen">
      
      {/* Vehicle JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Car",
          "name": `${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.trim}`,
          "image": vehicle.images,
          "vehicleIdentificationNumber": vehicle.vin,
          "productionDate": String(vehicle.year),
          "modelDate": String(vehicle.year),
          "vehicleTransmission": vehicle.transmission,
          "fuelType": vehicle.fuelType,
          "driveWheelConfiguration": vehicle.drivetrain,
          "mileageFromOdometer": {
            "@type": "QuantitativeValue",
            "value": vehicle.mileage,
            "unitCode": "SMI"
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": vehicle.price,
            "itemCondition": vehicle.type === "New" ? "https://schema.org/NewCondition" : "https://schema.org/UsedCondition",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "AutoDealer",
              "name": "LA Prestige Auto Group"
            }
          }
        })}
      </script>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-xs text-zinc-400 mb-6">
          <Link to="/" className="hover:text-white">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <Link to={vehicle.type === 'New' ? '/new-cars' : '/used-cars'} className="hover:text-white">
            {vehicle.type} Cars
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <span className="text-[#D4AF37] font-semibold truncate">
            {vehicle.year} {vehicle.make} {vehicle.model}
          </span>
        </div>

        {/* Vehicle Header Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-6 border-b border-[#2A2A33] gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className={`px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider ${
                vehicle.type === 'New' ? 'bg-[#D4AF37] text-black' : 'bg-zinc-800 text-zinc-200'
              }`}>
                {vehicle.type}
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                Stock: {vehicle.stockNumber}
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                VIN: {vehicle.vin}
              </span>
              {vehicle.carfaxOneOwner && (
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  <CheckCircle2 className="w-3 h-3" />
                  Carfax 1-Owner
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </h1>
            <p className="text-sm text-zinc-400 mt-1">{vehicle.trim}</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleSave(vehicle.slug)}
              className="p-3 rounded-xl bg-[#1A1A21] border border-[#2A2A33] text-zinc-300 hover:text-white hover:border-[#D4AF37]/40 flex items-center gap-2 text-xs font-semibold transition-colors"
            >
              <Heart className={`w-4 h-4 ${saved ? 'fill-red-500 text-red-500' : ''}`} />
              <span>{saved ? 'Saved' : 'Save Car'}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-3 rounded-xl bg-[#1A1A21] border border-[#2A2A33] text-zinc-300 hover:text-white hover:border-[#D4AF37]/40 flex items-center gap-2 text-xs font-semibold transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>{copiedShare ? 'Link Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Main Content Layout: Gallery + Sticky Booking Side Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column (Col 1-8): Gallery, Specs, Features, Description */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Gallery */}
            <div className="space-y-3">
              <div className="relative aspect-[16/10] bg-black/60 rounded-2xl overflow-hidden border border-[#2A2A33] group">
                <img
                  src={vehicle.images[activeImageIdx]}
                  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                  className="w-full h-full object-cover object-center cursor-pointer"
                  onClick={() => setLightboxOpen(true)}
                />

                <button
                  onClick={() => setLightboxOpen(true)}
                  className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-black/70 hover:bg-black text-white backdrop-blur-md border border-white/20 transition-all flex items-center gap-1.5 text-xs font-semibold"
                  aria-label="Expand image gallery"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>Full Screen ({vehicle.images.length})</span>
                </button>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {vehicle.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all ${
                      activeImageIdx === idx ? 'border-[#D4AF37] scale-[1.02]' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Specs Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#131318] border border-[#2A2A33]">
              <div>
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Mileage</span>
                <span className="text-base font-bold text-white">{vehicle.mileage.toLocaleString()} mi</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Engine / Power</span>
                <span className="text-base font-bold text-white">{vehicle.horsepower} HP</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Transmission</span>
                <span className="text-base font-bold text-white">{vehicle.transmission}</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Drivetrain</span>
                <span className="text-base font-bold text-white">{vehicle.drivetrain}</span>
              </div>
            </div>

            {/* Vehicle Overview / Description */}
            <div className="bg-[#131318] border border-[#2A2A33] rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-bold text-white border-l-2 border-[#D4AF37] pl-3">
                Vehicle Overview
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {vehicle.description}
              </p>
              <div className="pt-2 text-xs text-zinc-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Warranty: <strong className="text-white">{vehicle.warranty}</strong></span>
              </div>
            </div>

            {/* Key Features List */}
            <div className="bg-[#131318] border border-[#2A2A33] rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white border-l-2 border-[#D4AF37] pl-3 mb-5">
                Key Premium Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
                {vehicle.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-2 rounded-lg bg-[#1A1A21] border border-[#2A2A33]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Technical Specifications Table */}
            <div className="bg-[#131318] border border-[#2A2A33] rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white border-l-2 border-[#D4AF37] pl-3 mb-5">
                Technical Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-xs">
                <div className="flex justify-between py-2 border-b border-[#2A2A33]">
                  <span className="text-zinc-400">Exterior Color:</span>
                  <span className="text-white font-medium">{vehicle.exteriorColor}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#2A2A33]">
                  <span className="text-zinc-400">Interior Color:</span>
                  <span className="text-white font-medium">{vehicle.interiorColor}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#2A2A33]">
                  <span className="text-zinc-400">Engine Type:</span>
                  <span className="text-white font-medium">{vehicle.engine}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#2A2A33]">
                  <span className="text-zinc-400">EPA Fuel Economy:</span>
                  <span className="text-white font-medium">{vehicle.mpgCityHwy}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#2A2A33]">
                  <span className="text-zinc-400">Body Style:</span>
                  <span className="text-white font-medium">{vehicle.bodyType}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#2A2A33]">
                  <span className="text-zinc-400">Vehicle Status:</span>
                  <span className="text-emerald-400 font-semibold">{vehicle.status}</span>
                </div>
                {vehicle.highlights.map((hl, i) => (
                  <div key={i} className="flex justify-between py-2 border-b border-[#2A2A33]">
                    <span className="text-zinc-400">{hl.label}:</span>
                    <span className="text-white font-medium">{hl.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Payment Estimator for this specific car */}
            <div>
              <LoanCalculator initialPrice={vehicle.price} compact={true} />
            </div>
          </div>

          {/* Right Column (Col 9-12): Sticky Pricing & Lead Action Panel */}
          <div className="lg:col-span-4">
            <div className="bg-[#131318] border border-[#D4AF37]/50 rounded-2xl p-6 sm:p-7 space-y-6 sticky top-24 shadow-2xl">
              
              {/* Pricing Box */}
              <div>
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest block">
                  VIP Direct Price
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    ${vehicle.price.toLocaleString()}
                  </span>
                  {vehicle.originalMsrp && (
                    <span className="text-sm text-zinc-500 line-through">
                      MSRP ${vehicle.originalMsrp.toLocaleString()}
                    </span>
                  )}
                </div>

                <div className="mt-2 p-3 rounded-xl bg-[#1A1A21] border border-[#2A2A33] flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Estimated Financing:</span>
                  <span className="text-[#F0D274] font-bold text-sm">~${vehicle.monthlyEstimate}/mo</span>
                </div>
              </div>

              {/* Direct CTAs */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => setModalType('check-availability')}
                  className="w-full btn-gold py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black flex items-center justify-center gap-2 shadow-lg"
                >
                  <Car className="w-4 h-4 text-black" />
                  <span>Check Availability</span>
                </button>

                <button
                  onClick={() => setModalType('test-drive')}
                  className="w-full btn-gold-outline py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>Schedule VIP Test Drive</span>
                </button>

                <Link
                  to={`/financing?price=${vehicle.price}&vehicle=${encodeURIComponent(`${vehicle.year} ${vehicle.make} ${vehicle.model}`)}`}
                  className="w-full py-3 rounded-xl bg-[#1A1A21] hover:bg-zinc-800 border border-[#2A2A33] text-xs font-bold uppercase tracking-wider text-zinc-200 flex items-center justify-center gap-2 transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Get Pre-Approved</span>
                </Link>
              </div>

              {/* Instant Call / Text Actions */}
              <div className="pt-4 border-t border-[#2A2A33] space-y-2.5">
                <div className="text-xs text-zinc-400 mb-1">
                  Speak directly with an automotive advisor:
                </div>
                
                <a
                  href={`tel:${businessData.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#1A1A21] border border-[#2A2A33] text-zinc-200 text-xs font-semibold hover:text-[#D4AF37] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Call {businessData.phone}</span>
                </a>

                <a
                  href={`sms:${businessData.smsRaw}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#1A1A21] border border-[#2A2A33] text-zinc-200 text-xs font-semibold hover:text-[#D4AF37] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Text: {businessData.sms}</span>
                </a>
              </div>

              {/* Showroom & Delivery Perks */}
              <div className="p-4 rounded-xl bg-[#0B0B0E] border border-[#2A2A33] text-xs text-zinc-400 space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Complimentary LA Flatbed Delivery</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Available for pickup at Studio City showroom or white-glove delivery across Beverly Hills, Calabasas, and Orange County.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Vehicles Carousel / Grid */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#2A2A33]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                  Similar Matches
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Vehicles You Might Also Consider
                </h3>
              </div>
              <Link to="/new-cars" className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:underline flex items-center gap-1">
                View All <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((v) => (
                <VehicleCard key={v.id} vehicle={v} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white"
            aria-label="Close image lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={vehicle.images[activeImageIdx]}
            alt=""
            className="max-h-[80vh] max-w-[90vw] object-contain rounded-xl"
          />
          <div className="flex gap-2 mt-4 overflow-x-auto max-w-full p-2">
            {vehicle.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImageIdx(i)}
                className={`w-16 h-12 rounded-lg overflow-hidden border-2 shrink-0 ${
                  activeImageIdx === i ? 'border-[#D4AF37]' : 'border-transparent opacity-50'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Lead Modal */}
      {modalType && (
        <LeadModal
          isOpen={true}
          onClose={() => setModalType(null)}
          type={modalType}
          vehicleName={`${vehicle.year} ${vehicle.make} ${vehicle.model} (${vehicle.trim})`}
          stockOrVin={vehicle.stockNumber}
        />
      )}
    </div>
  );
};
