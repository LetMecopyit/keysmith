import React, { useState } from 'react';
import { useAffiliate } from '../context/AffiliateContext';
import { X, Phone, CheckCircle2, ShieldCheck, Clock, MapPin, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EmergencyCallbackModal() {
  const { config, isCallbackModalOpen, setIsCallbackModalOpen, selectedServiceForCallback, triggerCall } = useAffiliate();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [zip, setZip] = useState('');
  const [service, setService] = useState(selectedServiceForCallback || 'Emergency Lockout');
  const [submitted, setSubmitted] = useState(false);

  if (!isCallbackModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });
  };

  const handleClose = () => {
    setIsCallbackModalOpen(false);
    setSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden text-slate-100">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4 text-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2 font-black text-lg">
            <Phone className="w-5 h-5 text-slate-950 fill-slate-950" />
            <span>Instant Technician Dispatch Callback</span>
          </div>
          <button
            onClick={handleClose}
            className="p-1 rounded-lg bg-slate-950/20 hover:bg-slate-950/40 text-slate-950 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-300">
                ⚡ Mobile locksmith technician on duty. Enter your details below to receive a call within 60 seconds.
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Service Category Needed
                </label>
                <input
                  type="text"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white font-bold text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Miller"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white font-semibold text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Callback Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. (214) 555-0199"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white font-bold text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Current City or ZIP Code
                </label>
                <input
                  type="text"
                  required
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  placeholder="e.g. 75001 or Dallas, TX"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-white font-semibold text-sm focus:border-amber-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-base font-black shadow-xl shadow-amber-500/20 cursor-pointer active:scale-95 transition-all mt-2"
              >
                Request Priority Technician Callback
              </button>

              <div className="pt-3 border-t border-slate-800 text-center">
                <p className="text-xs text-slate-400 mb-2">Need immediate help right this second?</p>
                <button
                  type="button"
                  onClick={triggerCall}
                  className="font-black text-amber-400 text-base hover:text-amber-300 underline"
                >
                  Direct Hotline: {config.phone}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-black text-white">Callback Ticket Dispatched!</h3>
              
              <p className="text-slate-300 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                Thank you <strong>{name}</strong>! A local mobile locksmith near <strong>{zip}</strong> has received your dispatch request for <strong>{service}</strong>.
              </p>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-xs text-amber-300 space-y-1">
                <div className="font-bold flex items-center justify-center gap-1">
                  <Clock className="w-4 h-4 text-amber-400" /> Estimated Technician Contact: Under 60 Seconds
                </div>
                <div className="text-slate-400 text-[11px]">Guaranteed 100% Non-Destructive Opening</div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={triggerCall}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-sm font-black shadow-lg shadow-amber-500/20"
                >
                  Or Call Direct Now: {config.phone}
                </button>

                <button
                  type="button"
                  onClick={handleClose}
                  className="py-2 text-xs text-slate-400 hover:text-white"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
