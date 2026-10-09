import React, { useState } from 'react';
import { useAffiliate, DEFAULT_CONFIG } from '../context/AffiliateContext';
import { X, Check, Copy, Phone, Settings, Sparkles, RefreshCw, Link as LinkIcon, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PhoneCustomizerModal() {
  const { config, updateConfig, isCustomizerOpen, setIsCustomizerOpen } = useAffiliate();

  const [formData, setFormData] = useState({
    phone: config.phone,
    brandName: config.brandName,
    targetCity: config.targetCity,
    etaMins: config.etaMins,
    calloutFee: config.calloutFee,
    affiliateId: config.affiliateId || 'aff_usa_locksmith_01'
  });

  const [copiedLink, setCopiedLink] = useState(false);

  if (!isCustomizerOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateConfig(formData);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    setIsCustomizerOpen(false);
  };

  const handleReset = () => {
    setFormData(DEFAULT_CONFIG);
    updateConfig(DEFAULT_CONFIG);
  };

  const generatedUrl = `${window.location.origin}${window.location.pathname}?phone=${encodeURIComponent(formData.phone)}&brand=${encodeURIComponent(formData.brandName)}&city=${encodeURIComponent(formData.targetCity)}&aff=${encodeURIComponent(formData.affiliateId)}`;

  const copyCampaignUrl = () => {
    navigator.clipboard.writeText(generatedUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4 text-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2 font-black text-lg">
            <Settings className="w-5 h-5 text-slate-950" />
            <span>Affiliate Call Campaign Manager</span>
          </div>
          <button
            onClick={() => setIsCustomizerOpen(false)}
            className="p-1 rounded-lg bg-slate-950/20 hover:bg-slate-950/40 text-slate-950 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-sm">
          <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-start gap-3 text-amber-300 text-xs">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p>
              <strong>Customize Target Call Number & Local Branding:</strong> All call buttons, header banners, footers, and quote tools on this page will immediately route calls to the phone number specified below.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Target Locksmith Phone Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-amber-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. (866)-228-7172"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-white font-bold focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-1">This is the number users call when clicking "Call Now".</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Affiliate Brand Name
              </label>
              <input
                type="text"
                value={formData.brandName}
                onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                placeholder="e.g. ProLock USA 24/7"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white font-bold focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Target Region / City
              </label>
              <input
                type="text"
                value={formData.targetCity}
                onChange={(e) => setFormData({ ...formData, targetCity: e.target.value })}
                placeholder="e.g. Dallas & Fort Worth, TX"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white font-bold text-xs focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Est. Technician ETA
              </label>
              <input
                type="text"
                value={formData.etaMins}
                onChange={(e) => setFormData({ ...formData, etaMins: e.target.value })}
                placeholder="e.g. Fastest Arrival"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white font-bold text-xs focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Service Call Fee
              </label>
              <input
                type="text"
                value={formData.calloutFee}
                onChange={(e) => setFormData({ ...formData, calloutFee: e.target.value })}
                placeholder="e.g. $29"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white font-bold text-xs focus:border-amber-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Affiliate Tracking ID
            </label>
            <input
              type="text"
              value={formData.affiliateId}
              onChange={(e) => setFormData({ ...formData, affiliateId: e.target.value })}
              placeholder="e.g. campaign_google_ppc_01"
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white font-bold text-xs focus:border-amber-500 focus:outline-none"
            />
          </div>

          {/* Campaign Link Generator */}
          <div className="pt-2 border-t border-slate-800">
            <label className="block text-xs font-bold text-amber-400 mb-1 flex items-center gap-1">
              <LinkIcon className="w-3.5 h-3.5" /> Direct URL With Parameters (PPC/Ad Campaigns)
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                readOnly
                value={generatedUrl}
                className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-3 py-1.5 text-slate-400 font-mono text-[11px]"
              />
              <button
                type="button"
                onClick={copyCampaignUrl}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-bold flex items-center gap-1 shrink-0"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedLink ? 'Copied!' : 'Copy Link'}</span>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 flex items-center justify-between border-t border-slate-800">
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Restore Defaults
            </button>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setIsCustomizerOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-extrabold flex items-center gap-1.5 shadow-lg shadow-amber-500/20"
              >
                <Check className="w-4 h-4" /> Save & Apply
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
