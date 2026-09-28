import React from 'react';
import { useAffiliate } from '../context/AffiliateContext';
import { ShieldCheck, Check, X, Wrench, Lock, Car, Sparkles, Key, AlertCircle, Phone } from 'lucide-react';

export default function NonDestructiveGuarantee() {
  const { config, triggerCall } = useAffiliate();

  return (
    <section className="py-16 md:py-24 bg-slate-950 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-extrabold border border-emerald-500/20 mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>ZERO DAMAGE GUARANTEE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            We Open Your Lock <span className="gold-gradient-text">Without Destruction</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Unskilled locksmiths drill out locks and charge you $200+ for replacement hardware. Our certified technicians use precision decoding & bypass tools so your existing locks and keys work perfectly afterwards!
          </p>
        </div>

        {/* 4 Core Non-Destructive Techniques Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              <Key className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Lishi Lock Decoding</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              We insert precision Lishi optical decoders into the cylinder to measure every pin height individually, unlocking doors without drilling or cylinder damage.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              <Car className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Air-Wedge Car Bypass</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Soft inflatable rubber wedges create a microscopic gap along weatherstripping, allowing non-marring long-reach tools to trigger door switches without scratching paint.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              <Lock className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Single Pin Picking (SPP)</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Master lock pickers manipulate individual tumbler pins in home deadbolts and padlocks to manipulate the shear line smoothly without hardware alteration.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-4">
              <Wrench className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">OBD2 Key Fob Re-Code</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              For modern smart key cars, we connect high-tech diagnostic programmers to craft brand-new transponder chips on-site without towing your vehicle.
            </p>
          </div>

        </div>

        {/* Side-by-Side Method Comparison Table */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 max-w-4xl mx-auto shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Why Choose Our Professional Locksmith Technicians?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Compare our certified non-destructive entry against untrained amateur drillers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Our Method */}
            <div className="bg-slate-900/90 rounded-2xl p-6 border border-emerald-500/40 relative shadow-lg">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold mb-4">
                <Check className="w-4 h-4 text-emerald-400" /> OUR NON-DESTRUCTIVE METHOD
              </div>
              <ul className="space-y-3.5 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>100% Lock Preserved:</strong> Your existing key continues to work after entry.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Zero Paint Scratching:</strong> Soft-touch protected tools for luxury & daily cars.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>No Surprises:</strong> Clear upfront flat rate estimate before technician starts work.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Fast Entry:</strong> Average unlock time is 3 to 7 minutes once on site.</span>
                </li>
              </ul>
            </div>

            {/* Amateur Driller */}
            <div className="bg-slate-900/60 rounded-2xl p-6 border border-rose-500/30 relative">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-bold mb-4">
                <X className="w-4 h-4 text-rose-400" /> AMATEUR DRILL & REPLACE
              </div>
              <ul className="space-y-3.5 text-xs text-slate-400">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>Destroys Lock Cylinder:</strong> Forces expensive replacement locks ($150-$300).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>Car Paint & Door Damage:</strong> Metal crowbars scratch clear coats and trim.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>Hidden Extra Fees:</strong> Low quote tricks with massive hardware add-ons.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>Wasted Time:</strong> Drilling metal takes 30-60 minutes leaving mess behind.</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-8 text-center">
            <button
              onClick={triggerCall}
              className="shimmer-btn inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-8 py-3.5 rounded-xl font-extrabold text-base shadow-xl shadow-amber-500/20 active:scale-95 transition-all cursor-pointer"
            >
              <Phone className="w-5 h-5 fill-slate-950" />
              <span>Call Locksmith Now: {config.phone}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
