import React, { useState } from 'react';
import { useAffiliate } from '../context/AffiliateContext';
import { Phone, ShieldCheck, Clock, MapPin, KeyRound, Car, Home, Building2, Key, Lock, Sparkles, CheckCircle2, ChevronRight, AlertTriangle } from 'lucide-react';

export default function Hero() {
  const { config, triggerCall, openCallbackModal } = useAffiliate();

  const [selectedService, setSelectedService] = useState('car');
  const [zipInput, setZipInput] = useState('');
  const [searchSubmitted, setSearchSubmitted] = useState(false);

  const services = [
    { id: 'car', label: 'Car Lockout', icon: Car, desc: 'All makes, smart keys & trunk bypass' },
    { id: 'house', label: 'House Lockout', icon: Home, desc: 'Deadbolts, front doors & smart locks' },
    { id: 'rekey', label: 'Rekey Service', icon: Key, desc: 'Change keys without replacing locks' },
    { id: 'commercial', label: 'Commercial', icon: Building2, desc: 'Storefronts, panic bars & master key' },
    { id: 'safe', label: 'Safe Bypass', icon: Lock, desc: 'Combination reset & biometric safes' }
  ];

  const handleHeroFormSubmit = (e) => {
    e.preventDefault();
    setSearchSubmitted(true);
    openCallbackModal(services.find(s => s.id === selectedService)?.label);
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-slate-800">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Value Proposition & Call CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Guarantee Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold shadow-lg shadow-amber-500/5">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping"></span>
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>{config.guaranteeText}</span>
            </div>

            {/* Main Catchy Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Locked Out? <br className="hidden sm:inline" />
              <span className="gold-gradient-text">24/7 Fast USA Locksmith</span>
              <br />
              <span className="text-slate-200 text-2xl sm:text-4xl font-extrabold">
                We Open Any Lock Without Damage.
              </span>
            </h1>

            {/* Subheadline description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Don't let inexperienced drillers destroy your locks or car paint. Our certified local locksmiths use high-precision Lishi picking and air-bypass tools to safely open your house, car, or business door in minutes.
            </p>

            {/* Key Selling Features Bullet Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-bold text-slate-200">24/7 Fastest Arrival</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-slate-200">Zero Paint / Door Scratch</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 p-2.5 rounded-xl col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs font-bold text-slate-200">Upfront Flat Rates</span>
              </div>
            </div>

            {/* Primary Call Action Box */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={triggerCall}
                className="shimmer-btn w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-slate-950 px-8 py-4 rounded-2xl font-black text-xl shadow-2xl shadow-amber-500/30 active:scale-95 transition-all cursor-pointer border border-amber-200/50"
              >
                <div className="w-10 h-10 rounded-full bg-slate-950/20 flex items-center justify-center animate-bounce">
                  <Phone className="w-6 h-6 text-slate-950 fill-slate-950" />
                </div>
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wider font-extrabold text-slate-900">
                    CALL NOW FOR IMMEDIATE TECH
                  </div>
                  <div className="text-2xl font-black tracking-tight leading-none text-slate-950">
                    {config.phone}
                  </div>
                </div>
              </button>

              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400 text-sm font-bold">
                  ★ ★ ★ ★ ★ <span className="text-slate-300 text-xs">(4.9/5 from 12,400+ Calls)</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  ⚡ Mobile locksmith unit dispatched near you in {config.targetCity}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Dispatch Request Box */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-700/80 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <h3 className="text-lg font-black text-white flex items-center gap-2">
                    <KeyRound className="w-5 h-5 text-amber-400" />
                    Instant Dispatch Request
                  </h3>
                  <p className="text-xs text-slate-400">Select lock issue to get upfront technician arrival ETA</p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-400 text-[11px] font-extrabold border border-amber-500/30">
                  Flat Fee: {config.calloutFee} Callout
                </span>
              </div>

              <form onSubmit={handleHeroFormSubmit} className="space-y-4">
                {/* Lock Category Selector */}
                <div>
                  <label className="block text-xs font-extrabold uppercase text-slate-300 mb-2">
                    1. Select What You Need Unlocked
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {services.map((item) => {
                      const IconComp = item.icon;
                      const isSelected = selectedService === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSelectedService(item.id)}
                          className={`p-3 rounded-xl border text-left transition-all flex items-start gap-2.5 cursor-pointer ${
                            isSelected
                              ? 'bg-amber-500/20 border-amber-400 text-white ring-1 ring-amber-400/50 shadow-md shadow-amber-500/10'
                              : 'bg-slate-900/90 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                          }`}
                        >
                          <IconComp className={`w-5 h-5 shrink-0 mt-0.5 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`} />
                          <div>
                            <div className="text-xs font-bold text-white">{item.label}</div>
                            <div className="text-[10px] text-slate-400 leading-tight line-clamp-1">{item.desc}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Location / Zip input */}
                <div>
                  <label className="block text-xs font-extrabold uppercase text-slate-300 mb-1.5">
                    2. Your Current City or ZIP Code
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-amber-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      value={zipInput}
                      onChange={(e) => setZipInput(e.target.value)}
                      placeholder="e.g. 90210 or Dallas, TX"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-4 py-3 text-sm text-white font-bold placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                    />
                  </div>
                </div>

                {/* Action Submit */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 py-3.5 rounded-xl font-extrabold text-sm sm:text-base shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
                >
                  <span>Request Instant Tech Callback</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div className="pt-2 text-center border-t border-slate-800/80">
                  <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5">
                    <span>Or call directly for immediate emergency bypass:</span>
                  </p>
                  <button
                    type="button"
                    onClick={triggerCall}
                    className="mt-1 font-black text-amber-400 hover:text-amber-300 text-lg tracking-tight underline underline-offset-4 decoration-amber-500/50"
                  >
                    📞 {config.phone}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
