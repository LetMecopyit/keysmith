import React, { useState } from 'react';
import { Phone, ShieldCheck, Clock, MapPin, CheckCircle, Lock, Car, Home, Building2, Key, Settings, Copy, Check } from 'lucide-react';

export default function App() {
  // Configurable state so the user can easily change the phone number right on the page or in code
  const [phone, setPhone] = useState('1-800-555-5625');
  const [showSettings, setShowSettings] = useState(false);
  const [copied, setCopied] = useState(false);

  const phoneClean = phone.replace(/\D/g, '');

  const copyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top Banner */}
      <div className="bg-amber-500 text-slate-950 px-4 py-2 text-center text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 shadow-md">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-slate-950 animate-pulse"></span>
        <span>24/7 USA Nationwide Emergency Locksmith • Fast 15-20 Min Arrival • Great Upfront Rates</span>
      </div>

      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-amber-500/20">
              🔑
            </div>
            <div>
              <div className="font-extrabold text-lg sm:text-xl text-white tracking-tight">USA Locksmith 24/7</div>
              <p className="text-[11px] text-slate-400 font-medium">Licensed Mobile Services Across America</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-amber-400 border border-slate-800 transition-colors"
              title="Change Phone Number"
            >
              <Settings className="w-5 h-5" />
            </button>

            <a
              href={`tel:${phoneClean}`}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 px-4 sm:px-6 py-2.5 rounded-xl font-black text-sm sm:text-base shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>Call {phone}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Phone Settings Drawer */}
      {showSettings && (
        <div className="bg-slate-900 border-b border-slate-800 p-4 animate-fadeIn">
          <div className="max-w-md mx-auto space-y-2">
            <label className="block text-xs font-bold text-amber-400">Set Your Affiliate Phone Number:</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 1-800-555-5625"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white font-bold text-sm focus:border-amber-400 focus:outline-none"
              />
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold"
              >
                Save
              </button>
            </div>
            <p className="text-[11px] text-slate-400">All call buttons on this page update instantly to this number.</p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>Non-Destructive Lock Opening • No Broken Locks</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
          Locked Out? Fast 24/7 USA Locksmith <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500">
            Great Rates • Arrives in 15-20 Mins
          </span>
        </h1>

        <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Need help opening your car door, house lock, or business right now? Our professional locksmiths open any lock safely without breaking it. Simple, fast, and affordable.
        </p>

        {/* Huge Direct Call Button */}
        <div className="pt-4">
          <a
            href={`tel:${phoneClean}`}
            className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-slate-950 px-8 sm:px-12 py-5 rounded-2xl font-black text-2xl sm:text-3xl shadow-2xl shadow-amber-500/30 active:scale-95 transition-all border border-amber-300/40"
          >
            <div className="flex items-center gap-3">
              <Phone className="w-8 h-8 fill-slate-950 animate-bounce" />
              <span>CALL NOW: {phone}</span>
            </div>
          </a>
          <p className="text-xs text-slate-400 mt-3 font-medium">
            ⚡ Click to dial direct • Available 24/7/365 across all USA cities
          </p>
        </div>

        {/* Simple Trust Bullets */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-left max-w-3xl mx-auto">
          <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl flex items-start gap-3">
            <Clock className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-extrabold text-white text-sm">15-20 Min Arrival</div>
              <div className="text-xs text-slate-400">Fast mobile technician response</div>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-extrabold text-white text-sm">No Damage Guarantee</div>
              <div className="text-xs text-slate-400">We open locks without breaking them</div>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-extrabold text-white text-sm">Great & Decent Rates</div>
              <div className="text-xs text-slate-400">Transparent upfront pricing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-12 bg-slate-900/60 border-t border-b border-slate-800 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-white">Services We Provide Across USA</h2>
            <p className="text-slate-400 text-sm">Call us for any daily lock requirement</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <Car className="w-8 h-8 text-amber-400" />
              <h3 className="font-extrabold text-white text-base">Car Lockout</h3>
              <p className="text-xs text-slate-400">Keys locked inside car or trunk? We open all car models cleanly without paint damage.</p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <Home className="w-8 h-8 text-amber-400" />
              <h3 className="font-extrabold text-white text-base">House Lockout</h3>
              <p className="text-xs text-slate-400">Locked out of your home or apartment? Fast deadbolt and front door unlocking.</p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <Key className="w-8 h-8 text-amber-400" />
              <h3 className="font-extrabold text-white text-base">Rekeying Locks</h3>
              <p className="text-xs text-slate-400">Change keys for new homes or offices without replacing existing lock hardware.</p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
              <Building2 className="w-8 h-8 text-amber-400" />
              <h3 className="font-extrabold text-white text-base">Commercial Doors</h3>
              <p className="text-xs text-slate-400">Office door unlocks, storefront locks, panic exit bars, and master key systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call CTA Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center space-y-6">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-4 shadow-2xl">
          <MapPin className="w-10 h-10 text-amber-400 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-black text-white">Ready For Locksmith Service?</h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Call our toll-free phone number to connect with a licensed technician ready near your location.
          </p>
          <a
            href={`tel:${phoneClean}`}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 px-8 py-4 rounded-xl font-black text-xl shadow-xl active:scale-95 transition-all"
          >
            <Phone className="w-6 h-6 fill-slate-950" />
            <span>CALL {phone} NOW</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-400 bg-slate-950 mt-auto">
        <div className="max-w-4xl mx-auto px-4 space-y-2">
          <p>© {new Date().getFullYear()} 24/7 Locksmith USA • Licensed Mobile Services Nationwide</p>
          <p>Toll-Free Hotline: {phone} • Fast Non-Destructive Door Opening</p>
        </div>
      </footer>

      {/* Sticky Bottom Call Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-slate-950/95 border-t border-amber-500/40 sm:hidden z-40">
        <a
          href={`tel:${phoneClean}`}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 py-3.5 px-4 rounded-xl font-black text-lg shadow-xl"
        >
          <Phone className="w-5 h-5 fill-slate-950" />
          <span>CALL LOCKSMITH: {phone}</span>
        </a>
      </div>

    </div>
  );
}
