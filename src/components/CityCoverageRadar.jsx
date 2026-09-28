import React, { useState } from 'react';
import { useAffiliate } from '../context/AffiliateContext';
import { MapPin, Navigation, Radio, Phone, CheckCircle2, Search, ShieldCheck } from 'lucide-react';

export default function CityCoverageRadar() {
  const { config, triggerCall } = useAffiliate();

  const [activeCity, setActiveCity] = useState('Dallas, TX');
  const [searchQuery, setSearchQuery] = useState('');

  const popularCities = [
    { name: 'Dallas / Fort Worth, TX', techCount: 14, eta: '12-18 min' },
    { name: 'Houston, TX', techCount: 18, eta: '15-20 min' },
    { name: 'Austin, TX', techCount: 9, eta: '14-22 min' },
    { name: 'Los Angeles, CA', techCount: 22, eta: '15-25 min' },
    { name: 'San Diego, CA', techCount: 11, eta: '12-18 min' },
    { name: 'Phoenix, AZ', techCount: 15, eta: '15-20 min' },
    { name: 'Chicago, IL', techCount: 19, eta: '12-20 min' },
    { name: 'Miami, FL', techCount: 12, eta: '10-18 min' },
    { name: 'Atlanta, GA', techCount: 16, eta: '15-22 min' },
    { name: 'New York City, NY', techCount: 25, eta: '15-25 min' },
    { name: 'Philadelphia, PA', techCount: 10, eta: '14-20 min' },
    { name: 'Denver, CO', techCount: 8, eta: '15-20 min' },
    { name: 'Seattle, WA', techCount: 11, eta: '12-18 min' }
  ];

  const filteredCities = searchQuery.trim()
    ? popularCities.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : popularCities;

  return (
    <section className="py-16 md:py-24 bg-slate-950 relative border-b border-slate-800 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 mb-3">
            <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>NATIONWIDE USA COVERAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Local Mobile Locksmiths <span className="emerald-gradient-text">On Duty Near You</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Our dispatch algorithm connects your call directly to the nearest licensed mobile van on duty in your area.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your US City or State..."
              className="w-full bg-slate-900 border border-slate-700 rounded-2xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 shadow-xl"
            />
          </div>
        </div>

        {/* City Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto mb-12">
          {filteredCities.map((city) => (
            <button
              key={city.name}
              onClick={() => setActiveCity(city.name)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeCity === city.name
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{city.name}</span>
            </button>
          ))}
        </div>

        {/* Live Active Radar Simulation Card */}
        <div className="glass-panel max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Visual Radar graphic */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-slate-950 rounded-2xl border border-slate-800 relative overflow-hidden">
              <div className="w-40 h-40 rounded-full border border-emerald-500/30 relative flex items-center justify-center">
                {/* Radar sweep */}
                <div className="absolute inset-0 rounded-full border border-emerald-500/10"></div>
                <div className="w-28 h-28 rounded-full border border-emerald-500/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-emerald-500/60 flex items-center justify-center bg-emerald-500/10">
                    <Radio className="w-8 h-8 text-emerald-400 animate-pulse" />
                  </div>
                </div>
                
                {/* Dots representing active locksmith vans */}
                <span className="absolute top-6 left-8 w-3 h-3 bg-amber-400 rounded-full animate-ping"></span>
                <span className="absolute bottom-8 right-10 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></span>
                <span className="absolute top-12 right-6 w-2 h-2 bg-emerald-400 rounded-full"></span>
              </div>
              <div className="mt-4 text-center">
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 justify-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  DISPATCH SIGNAL: STABLE
                </span>
                <p className="text-[11px] text-slate-500 mt-0.5">Automated Mobile Van Triangulation</p>
              </div>
            </div>

            {/* City Details & Call Action */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Selected Coverage Area</span>
                <h3 className="text-2xl font-black text-white">{activeCity}</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Mobile locksmith vans are currently equipped with non-destructive bypass tools, Lishi decoders, and laser key cutters in this zone.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Techs On Duty</div>
                  <div className="text-lg font-black text-emerald-400">
                    {popularCities.find(c => c.name === activeCity)?.techCount || 12} Active Vans
                  </div>
                </div>
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Estimated Arrival</div>
                  <div className="text-lg font-black text-amber-400">
                    {popularCities.find(c => c.name === activeCity)?.eta || '15-20 min'}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={triggerCall}
                  className="shimmer-btn w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 py-3.5 rounded-xl font-extrabold text-base shadow-xl shadow-amber-500/20 cursor-pointer active:scale-95 transition-all"
                >
                  <Phone className="w-5 h-5 fill-slate-950" />
                  <span>Dispatch Locksmith in {activeCity.split(',')[0]}</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
