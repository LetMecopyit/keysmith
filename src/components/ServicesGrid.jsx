import React from 'react';
import { useAffiliate } from '../context/AffiliateContext';
import { Car, Home, Building2, Key, Lock, Wrench, ShieldCheck, Phone, CheckCircle2, ChevronRight } from 'lucide-react';

export default function ServicesGrid() {
  const { config, triggerCall, openCallbackModal } = useAffiliate();

  const services = [
    {
      icon: Car,
      title: 'Automotive Lockout & Smart Key Fobs',
      desc: 'Locked your keys in your car or trunk? Lost your transponder key? We unlock vehicles with 0% paint damage and cut/program new car key fobs on the spot.',
      bullets: ['Car Door & Trunk Unlock', 'Push-to-Start Key Fob Coding', 'Laser Cut Keys On Site', 'All Makes & Models (Sedan, Truck, SUV)'],
      color: 'amber'
    },
    {
      icon: Home,
      title: 'Residential House & Apartment Unlocking',
      desc: 'Fast non-destructive entry for locked front doors, deadbolts, sliding patio doors, garage entryways, and smart lock keypads.',
      bullets: ['100% Non-Destructive Door Picking', 'Deadbolt & Handle Lockout', 'Smart Deadbolt Installation', 'Landlord & Tenant Service'],
      color: 'amber'
    },
    {
      icon: Key,
      title: 'Lock Rekeying & Cylinder Replacement',
      desc: 'Moved into a new home or lost a key? Rekeying changes the internal pins of your lock so old keys stop working while keeping your existing door handles.',
      bullets: ['Same-Day Rekeying', 'Master Keying Systems', 'High-Security Cylinder Upgrade', 'Cost-Effective Security'],
      color: 'emerald'
    },
    {
      icon: Building2,
      title: 'Commercial Office & Storefront Security',
      desc: 'Emergency unlock and security upgrades for retail storefronts, office doors, panic crash bars, electronic keypads, and file cabinets.',
      bullets: ['Storefront Glass Door Lockout', 'Panic Bar / Push Bar Repair', 'Electronic Keypad & Access Control', 'Commercial Master Keys'],
      color: 'amber'
    },
    {
      icon: Lock,
      title: 'Safe & Lockbox Non-Destructive Bypass',
      desc: 'Forgot your gun safe combination or digital keypad PIN? We bypass home safes, commercial fire safes, and key drop boxes safely.',
      bullets: ['Gun Safe & Home Safe Bypass', 'Combination Reset & Change', 'Digital Lockbox Override', 'Dial Alignment & Calibration'],
      color: 'emerald'
    },
    {
      icon: Wrench,
      title: 'Ignition Repair & Broken Key Extraction',
      desc: 'Did your key break in the lock or ignition? We extract broken key blades and repair jammed ignition lock cylinders on location.',
      bullets: ['Broken Key Blade Extraction', 'Stuck Ignition Cylinder Repair', 'Door Lock Barrel Repair', 'Fresh Replacement Key Cut'],
      color: 'amber'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-900/40 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20 mb-3">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>DAILY USE CASE LOCKSMITH SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            Comprehensive <span className="gold-gradient-text">Locksmith Services</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Whether you are locked out of your car on the highway, need your house locks rekeyed, or require office security service, our technicians are equipped for every lock type.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-amber-500/40 transition-all hover:-translate-y-1 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold mb-6 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6 text-amber-400" />
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {item.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => openCallbackModal(item.title)}
                    className="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <span>Request Callback</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={triggerCall}
                    className="px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 text-xs font-extrabold flex items-center gap-1.5 transition-all cursor-pointer border border-amber-500/30"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
