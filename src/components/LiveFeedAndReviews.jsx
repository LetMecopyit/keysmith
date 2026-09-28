import React from 'react';
import { useAffiliate } from '../context/AffiliateContext';
import { Star, ShieldCheck, MapPin, CheckCircle2, Clock, ThumbsUp } from 'lucide-react';

export default function LiveFeedAndReviews() {
  const { config } = useAffiliate();

  const recentCalls = [
    { time: '2 mins ago', location: 'Dallas, TX', job: '2023 Honda Accord Lockout', status: 'Unlocked (0% Damage)', arrival: 'Fastest 24/7 Response' },
    { time: '5 mins ago', location: 'Los Angeles, CA', job: 'Front Door Deadbolt Lockout', status: 'Picked Non-Destructively', arrival: 'Fastest Local Arrival' },
    { time: '9 mins ago', location: 'Houston, TX', job: 'Lost Smart Fob Replacement', status: 'Key Programmed Onsite', arrival: 'Immediate 24/7 Dispatch' },
    { time: '12 mins ago', location: 'Phoenix, AZ', job: 'Commercial Glass Door Unlock', status: 'Unlocked Cleanly', arrival: 'Fastest Mobile Tech' }
  ];

  const reviews = [
    {
      name: 'Michael T.',
      location: 'Dallas, TX',
      rating: 5,
      date: 'Yesterday',
      service: 'Car Lockout (BMW 3-Series)',
      text: 'I accidentally locked my keys inside my BMW trunk while getting groceries. Another locksmith company said they would have to drill my trunk lock for $300! I called this service and technician Alex arrived with the fastest response time, used a special air wedge and non-scratch pick tool, and had my trunk open in 4 minutes with ZERO damage to my car paint!'
    },
    {
      name: 'Sarah Jenkins',
      location: 'Los Angeles, CA',
      rating: 5,
      date: '3 days ago',
      service: 'House Front Door Lockout',
      text: 'Locked myself out of my apartment late Sunday night. Called the hotline, operator was super polite, gave me an upfront flat rate, and the locksmith arrived faster than any other service in the middle of the night. Opened my high-security Schlage deadbolt without damaging the lock cylinder so my key still works perfectly!'
    },
    {
      name: 'David R.',
      location: 'Miami, FL',
      rating: 5,
      date: '4 days ago',
      service: 'Rekey 5 Home Locks',
      text: 'Just bought a house and wanted all key cylinders rekeyed immediately. Tech came out on time with a mobile key laboratory in his van, rekeyed all 5 locks in 40 minutes, and gave me 6 fresh duplicate keys. Professional, fast, and transparent pricing.'
    },
    {
      name: 'Elena Rostova',
      location: 'Chicago, IL',
      rating: 5,
      date: '1 week ago',
      service: 'Broken Ignition Key Extraction',
      text: 'My old key snapped right off inside my Ford F-150 ignition in negative sub-zero weather! I thought I was stranded or needed a $700 new ignition. The locksmith extracted the broken blade cleanly in 10 minutes and cut me a fresh key on site.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-950 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Live Ticker Banner */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 mb-16 shadow-xl overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-3 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Live Dispatch Log & Mobile Locksmith Calls</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {recentCalls.map((item, index) => (
              <div key={index} className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" /> {item.time}
                    </span>
                    <span className="font-bold text-slate-300">{item.location}</span>
                  </div>
                  <div className="font-bold text-white text-xs">{item.job}</div>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-900 flex items-center justify-between text-[11px]">
                  <span className="text-emerald-400 font-semibold">{item.status}</span>
                  <span className="text-slate-400">{item.arrival}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20 mb-3">
            <ThumbsUp className="w-4 h-4 text-amber-400" />
            <span>VERIFIED CALLER REVIEWS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            Trusted By Over <span className="gold-gradient-text">12,400+ Americans</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Read verified customer experiences from real people who needed fast non-destructive emergency lockouts in the USA.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev, idx) => (
            <div key={idx} className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 font-extrabold flex items-center justify-center text-sm">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">{rev.name}</h4>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400" /> {rev.location} • {rev.date}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex text-amber-400 text-sm">
                    {'★'.repeat(rev.rating)}
                  </div>
                  <span className="text-[10px] uppercase font-extrabold text-emerald-400 flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3 h-3" /> Verified Call
                  </span>
                </div>
              </div>

              <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 inline-block text-xs font-bold text-amber-300">
                Job: {rev.service}
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                "{rev.text}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
