import React from 'react';
import { AffiliateProvider } from './context/AffiliateContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import NonDestructiveGuarantee from './components/NonDestructiveGuarantee';
import CostEstimator from './components/CostEstimator';
import CityCoverageRadar from './components/CityCoverageRadar';
import LiveFeedAndReviews from './components/LiveFeedAndReviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyCallFooter from './components/StickyCallFooter';
import PhoneCustomizerModal from './components/PhoneCustomizerModal';
import EmergencyCallbackModal from './components/EmergencyCallbackModal';

export default function App() {
  return (
    <AffiliateProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
        <Header />
        <main className="flex-grow">
          <Hero />
          <ServicesGrid />
          <NonDestructiveGuarantee />
          <CostEstimator />
          <CityCoverageRadar />
          <LiveFeedAndReviews />
          <FAQ />
        </main>
        <Footer />
        <StickyCallFooter />
        <PhoneCustomizerModal />
        <EmergencyCallbackModal />
      </div>
    </AffiliateProvider>
  );
}
