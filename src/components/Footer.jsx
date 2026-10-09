import React from 'react';
import { useAffiliate } from '../context/AffiliateContext';
import { Phone, ShieldCheck, Settings, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const { config, triggerCall, setIsCustomizerOpen } = useAffiliate();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-xs leading-relaxed pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-white font-extrabold text-lg">
              <span className="text-xl">🔑</span>
              <span>{config.brandName}</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              24/7 Nationwide USA Emergency Locksmith Referral & Dispatch Service. Connecting homeowners, drivers, and commercial businesses with licensed, background-checked local mobile locksmith technicians.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Non-Destructive Door Bypass Guarantee</span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Services Offered</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>• Car Lockout & Trunk Bypass</li>
              <li>• House & Apartment Unlocking</li>
              <li>• Transponder Key Fob Programming</li>
              <li>• Deadbolt & Knob Rekeying</li>
              <li>• Commercial Panic Bar Repair</li>
              <li>• Broken Key Blade Extraction</li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Direct Hotline</h4>
            <button
              onClick={triggerCall}
              className="w-full bg-slate-900 border border-amber-500/40 hover:border-amber-400 p-3 rounded-xl flex items-center justify-between text-left cursor-pointer transition-colors"
            >
              <div>
                <div className="text-[10px] text-amber-400 font-extrabold uppercase">Toll-Free Dispatch</div>
                <div className="text-lg font-black text-white">{config.phone}</div>
              </div>
              <Phone className="w-5 h-5 text-amber-400 fill-amber-400" />
            </button>

            <button
              onClick={() => setIsCustomizerOpen(true)}
              className="w-full py-2 px-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 font-semibold text-xs flex items-center justify-center gap-1.5 border border-slate-800 transition-colors"
            >
              <Settings className="w-3.5 h-3.5 text-amber-400" />
              <span>Configure Affiliate Phone & Campaign</span>
            </button>
          </div>

        </div>

        <div className="pt-6 border-t border-slate-900 text-[11px] text-slate-400 text-center space-y-3">
          <p className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/80 text-slate-400 text-[11px] leading-relaxed text-left sm:text-center max-w-4xl mx-auto">
            <span className="font-semibold text-slate-300">Disclaimer:</span> {config.brandName} is a free service to assist homeowners in connecting with local service providers. All contractors/providers are independent and {config.brandName} does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on {config.brandName}.
          </p>
          <p>
            © {new Date().getFullYear()} {config.brandName}. All rights reserved. 
            All locksmith services are performed by independent, licensed, bonded, and insured local third-party locksmith technicians across the USA.
          </p>
        </div>

      </div>
    </footer>
  );
}
