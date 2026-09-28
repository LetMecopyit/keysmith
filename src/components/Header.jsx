import React from 'react';
import { useAffiliate } from '../context/AffiliateContext';
import { Phone, Key, ShieldCheck, Clock, Settings, Sparkles, MapPin } from 'lucide-react';

export default function Header() {
  const { config, triggerCall, setIsCustomizerOpen } = useAffiliate();

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/90 border-b border-slate-800 shadow-2xl">
      {/* Emergency Alert Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-slate-950 px-4 py-1.5 text-xs sm:text-sm font-bold flex items-center justify-between shadow-inner">
        <div className="flex items-center space-x-2 mx-auto sm:mx-0 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-950"></span>
          </span>
          <span>⚡ 24/7 DISPATCH ACTIVE • USA Technicians Ready</span>
          <span className="hidden md:inline text-slate-900">• Avg Arrival: {config.etaMins} Mins</span>
          <span className="hidden lg:inline text-slate-950 font-extrabold">• 100% Non-Destructive Door Opening</span>
        </div>

        <div className="hidden sm:flex items-center space-x-4 text-xs font-semibold">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {config.targetCity}
          </span>
          <button
            onClick={() => setIsCustomizerOpen(true)}
            className="flex items-center gap-1 px-2.5 py-0.5 rounded bg-slate-950/15 hover:bg-slate-950/30 transition-all text-slate-950 cursor-pointer"
            title="Configure Affiliate Phone Number & Branding"
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Affiliate Setup</span>
          </button>
        </div>
      </div>

      {/* Main Navigation & Call Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20 font-black text-xl transform hover:scale-105 transition-transform">
            🔑
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg sm:text-xl text-white tracking-tight">
                {config.brandName}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <ShieldCheck className="w-3 h-3 text-amber-400" /> USA Verified
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium hidden sm:block">
              Licensed Local Locksmith Emergency Service • Non-Destructive Bypass
            </p>
          </div>
        </div>

        {/* Call Action & Admin Tools */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsCustomizerOpen(true)}
            className="sm:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
            title="Settings"
          >
            <Settings className="w-5 h-5" />
          </button>

          {/* Quick Call Button Header */}
          <button
            onClick={triggerCall}
            className="shimmer-btn flex items-center gap-2.5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-slate-950 px-4 sm:px-6 py-2.5 rounded-xl font-extrabold text-sm sm:text-base shadow-lg shadow-amber-500/25 active:scale-95 transition-all cursor-pointer border border-amber-300/40"
          >
            <div className="w-8 h-8 rounded-full bg-slate-950/15 flex items-center justify-center animate-bounce">
              <Phone className="w-4 h-4 text-slate-950 fill-slate-950" />
            </div>
            <div className="text-left leading-tight">
              <div className="text-[10px] uppercase tracking-wider font-bold text-slate-900 opacity-90">
                24/7 Hotline
              </div>
              <div className="font-black text-slate-950 text-base sm:text-lg tracking-tight">
                {config.phone}
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
