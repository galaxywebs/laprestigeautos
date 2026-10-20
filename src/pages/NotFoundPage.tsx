import React from 'react';
import { Link } from 'react-router-dom';
import { Car, ArrowRight, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 bg-[#0B0B0E] min-h-[75vh] flex items-center justify-center text-center px-4">
      <div className="max-w-md space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-[#131318] border border-[#D4AF37]/50 flex items-center justify-center mx-auto text-[#D4AF37] shadow-xl">
          <Car className="w-10 h-10" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
          404 Error · Wrong Turn
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          This Road Ends Here
        </h1>

        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
          The page or vehicle inventory listing you are looking for has been relocated or is no longer in stock.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="btn-gold px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-black flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/new-cars"
            className="btn-gold-outline px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white flex items-center gap-2"
          >
            <span>View All Cars</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
