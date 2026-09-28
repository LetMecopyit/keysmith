import React, { useState } from 'react';
import { useAffiliate } from '../context/AffiliateContext';
import { Calculator, Phone, Clock, DollarSign, ShieldCheck, Car, Home, Key, Lock, Wrench, ChevronRight, Check } from 'lucide-react';

export default function CostEstimator() {
  const { config, triggerCall } = useAffiliate();

  const [serviceType, setServiceType] = useState('auto_lockout');
  const [timeOfDay, setTimeOfDay] = useState('day');
  const [urgency, setUrgency] = useState('emergency');

  const estimatorData = {
    auto_lockout: {
      title: 'Car Door & Trunk Lockout',
      basePrice: '$45 - $85',
      callout: config.calloutFee,
      eta: '15 - 20 Mins',
      method: 'Non-Destructive Lishi & Air-Wedge',
      details: 'Covers domestic & import vehicles (Ford, Chevy, Toyota, Honda, BMW, Benz, Hyundai, Kia, etc.) without scratching paint.'
    },
    car_key_make: {
      title: 'Lost Car Key / Fob Replacement',
      basePrice: '$95 - $185',
      callout: config.calloutFee,
      eta: '20 - 30 Mins',
      method: 'On-site Laser Key Cut & OBD2 Coding',
      details: 'We cut fresh keys and program transponder chips / push-to-start smart fobs directly at your stranded location.'
    },
    house_lockout: {
      title: 'Residential House / Apt Lockout',
      basePrice: '$55 - $95',
      callout: config.calloutFee,
      eta: '15 - 25 Mins',
      method: 'Single Pin Pick & Bypass Tooling',
      details: 'Unlocks front doors, deadbolts, sliding glass doors, and smart electronic keypads cleanly.'
    },
    rekey_locks: {
      title: 'Rekey Existing Locks (New Keys)',
      basePrice: '$35 - $65 / cylinder',
      callout: config.calloutFee,
      eta: 'Scheduled or Today',
      method: 'Pin Tumbler Recoding',
      details: 'Perfect for new home buyers or tenant changes. Keep existing handles while rendering old lost keys useless.'
    },
    commercial_lock: {
      title: 'Commercial Office & Storefront',
      basePrice: '$75 - $145',
      callout: config.calloutFee,
      eta: '15 - 20 Mins',
      method: 'High-Security Mortise & Panic Bar Unlock',
      details: 'Commercial grade bypass for glass storefront doors, panic exit bars, electronic access locks, and file cabinets.'
    },
    broken_key: {
      title: 'Broken Key Extraction & Cut',
      basePrice: '$50 - $90',
      callout: config.calloutFee,
      eta: '15 - 20 Mins',
      method: 'Precision Key Puller + Onsite Duplication',
      details: 'Safely removes snapped keys stuck inside door locks or vehicle ignitions without replacing the cylinder.'
    }
  };

  const selected = estimatorData[serviceType];

  return (
    <section className="py-16 md:py-24 bg-slate-900/60 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20 mb-3">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>TRANSPARENT UPFRONT PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Instant Locksmith <span className="gold-gradient-text">Cost Estimator</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            No hidden surprise fees. Calculate an estimated range for your specific lockout or key replacement requirement before calling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Service selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                1. Select Locksmith Service Needed
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.keys(estimatorData).map((key) => {
                  const item = estimatorData[key];
                  const isSelected = serviceType === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setServiceType(key)}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-400 text-white shadow-lg shadow-amber-500/10 ring-1 ring-amber-400/40'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-extrabold text-sm text-white">{item.title}</span>
                        {isSelected && <Check className="w-4 h-4 text-amber-400" />}
                      </div>
                      <div className="text-xs font-bold text-amber-400">{item.basePrice}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time of day selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  2. Time of Service
                </label>
                <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
                  <button
                    type="button"
                    onClick={() => setTimeOfDay('day')}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      timeOfDay === 'day' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Standard Hours
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimeOfDay('night')}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      timeOfDay === 'night' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Late Night 24/7
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  3. Response Priority
                </label>
                <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
                  <button
                    type="button"
                    onClick={() => setUrgency('emergency')}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      urgency === 'emergency' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    ⚡ Immediate (15-20m)
                  </button>
                  <button
                    type="button"
                    onClick={() => setUrgency('scheduled')}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      urgency === 'scheduled' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    📅 Schedule Today
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-bold uppercase text-amber-400 tracking-wider">Estimated Breakdown</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-extrabold border border-emerald-500/30">
                  100% Non-Destructive
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black text-white">{selected.title}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{selected.details}</p>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Service Callout Fee:</span>
                  <span className="font-bold text-white">{selected.callout}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Labor & Bypass Range:</span>
                  <span className="font-bold text-amber-400">{selected.basePrice}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Guaranteed Method:</span>
                  <span className="font-semibold text-emerald-400">{selected.method}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-900">
                  <span className="flex items-center gap-1 font-bold text-slate-200">
                    <Clock className="w-3.5 h-3.5 text-amber-400" /> Mobile Arrival ETA:
                  </span>
                  <span className="font-black text-amber-400 text-sm">{selected.eta}</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={triggerCall}
                  className="shimmer-btn w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 py-3.5 rounded-xl font-black text-base shadow-xl shadow-amber-500/20 cursor-pointer active:scale-95 transition-all"
                >
                  <Phone className="w-5 h-5 fill-slate-950" />
                  <span>Call For Exact Quote: {config.phone}</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  *Final price confirmed by technician before work begins. No obligation to dispatch.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
