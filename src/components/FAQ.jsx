import React, { useState } from 'react';
import { useAffiliate } from '../context/AffiliateContext';
import { HelpCircle, ChevronDown, ChevronUp, Phone, ShieldCheck } from 'lucide-react';

export default function FAQ() {
  const { config, triggerCall } = useAffiliate();

  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Will opening my door or lock cause any damage?',
      a: 'No! Over 95% of locks (car doors, house deadbolts, commercial mortise locks) are opened using 100% non-destructive techniques like Lishi optical picking, soft air-wedges, and single-pin manipulation. Your existing lock and keys will continue to work perfectly after we open the door.'
    },
    {
      q: 'How fast will a locksmith arrive at my location?',
      a: 'Mobile locksmith vans are stationed on active duty across USA metro areas. Average arrival time is 15 to 20 minutes from the moment your call is dispatched.'
    },
    {
      q: 'How much does an emergency locksmith call cost?',
      a: 'We believe in 100% transparent flat-rate pricing. The mobile service callout fee is $29. Labor for standard car lockouts ranges between $45-$85, and house unlocks between $55-$95. The technician evaluates your lock type and gives an exact flat rate before starting work.'
    },
    {
      q: 'Can you unlock luxury cars or push-to-start vehicles without damaging electronics?',
      a: 'Yes! Our technicians are certified for all domestic and luxury import vehicles including BMW, Mercedes-Benz, Audi, Lexus, Tesla, Ford, Chevy, Toyota, Honda, and Hyundai. We use specialized non-marring tools and diagnostic key coding devices.'
    },
    {
      q: 'What payment methods do locksmith technicians accept?',
      a: 'All mobile units accept Cash, Credit Cards (Visa, MasterCard, American Express, Discover), Debit Cards, Apple Pay, and Google Pay. You will receive an official invoice/receipt suitable for roadside assistance or homeowner insurance reimbursement.'
    },
    {
      q: 'Are your locksmith technicians licensed, bonded, and background-checked?',
      a: 'Yes. Every locksmith technician in our USA affiliate network undergoes thorough background checks, is fully insured, bonded, and licensed according to state locksmith compliance requirements.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-900/60 relative border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20 mb-3">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Got Questions? <span className="gold-gradient-text">We Have Answers</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Everything you need to know about our 24/7 non-destructive emergency locksmith services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-extrabold text-sm sm:text-base text-white hover:text-amber-400 transition-colors cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-amber-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-900 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center p-6 bg-slate-900 rounded-2xl border border-slate-800">
          <h3 className="text-lg font-black text-white mb-1">Have an Urgent Lockout Emergency Right Now?</h3>
          <p className="text-xs text-slate-400 mb-4">Our dispatchers are standing by 24 hours a day, 7 days a week.</p>
          <button
            onClick={triggerCall}
            className="shimmer-btn inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-6 py-3 rounded-xl font-extrabold text-sm shadow-lg shadow-amber-500/20 cursor-pointer"
          >
            <Phone className="w-4 h-4 fill-slate-950" />
            <span>Call Hotline Now: {config.phone}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
