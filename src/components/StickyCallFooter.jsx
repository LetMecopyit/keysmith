import React from 'react';
import { useAffiliate } from '../context/AffiliateContext';
import { Phone, ShieldCheck, Clock } from 'lucide-react';

export default function StickyCallFooter() {
  const { config, triggerCall } = useAffiliate();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-slate-950/95 backdrop-blur-xl border-t border-amber-500/30 md:hidden shadow-2xl">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <button
          onClick={triggerCall}
          className="shimmer-btn w-full flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 py-3.5 px-4 rounded-2xl font-black text-lg shadow-xl shadow-amber-500/30 active:scale-95 transition-all border border-amber-200/50 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-slate-950/20 flex items-center justify-center animate-bounce">
            <Phone className="w-5 h-5 fill-slate-950" />
          </div>
          <div className="text-left leading-tight">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-900">
              24/7 EMERGENCY HOTLINE
            </div>
            <div className="text-xl font-black tracking-tight text-slate-950">
              {config.phone}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
