import React, { createContext, useContext, useState, useEffect } from 'react';

const AffiliateContext = createContext();

export const DEFAULT_CONFIG = {
  phone: '1-800-555-5625',
  phoneRaw: '18005555625',
  brandName: 'Lockmaster USA 24/7',
  targetCity: 'USA Nationwide / Local',
  etaMins: '15-20',
  calloutFee: '$29',
  affiliateId: 'aff_usa_locksmith_01',
  guaranteeText: '100% Non-Destructive Door & Ignition Opening Guarantee'
};

export function AffiliateProvider({ children }) {
  const [config, setConfig] = useState(() => {
    // Read from URL query params if present (e.g. ?phone=18005550199&brand=ProLock)
    const params = new URLSearchParams(window.location.search);
    const urlPhone = params.get('phone') || params.get('tel');
    const urlBrand = params.get('brand') || params.get('name');
    const urlCity = params.get('city') || params.get('location');

    const saved = localStorage.getItem('keysmith_affiliate_config');
    const initial = saved ? JSON.parse(saved) : DEFAULT_CONFIG;

    if (urlPhone) {
      initial.phone = urlPhone;
      initial.phoneRaw = urlPhone.replace(/\D/g, '');
    }
    if (urlBrand) initial.brandName = urlBrand;
    if (urlCity) initial.targetCity = urlCity;

    return initial;
  });

  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
  const [selectedServiceForCallback, setSelectedServiceForCallback] = useState(null);

  useEffect(() => {
    localStorage.setItem('keysmith_affiliate_config', JSON.stringify(config));
  }, [config]);

  const updateConfig = (newConfig) => {
    const raw = newConfig.phone.replace(/\D/g, '');
    setConfig({
      ...newConfig,
      phoneRaw: raw || newConfig.phone
    });
  };

  const triggerCall = () => {
    window.location.href = `tel:${config.phoneRaw || config.phone}`;
  };

  const openCallbackModal = (serviceName = null) => {
    setSelectedServiceForCallback(serviceName);
    setIsCallbackModalOpen(true);
  };

  return (
    <AffiliateContext.Provider
      value={{
        config,
        updateConfig,
        isCustomizerOpen,
        setIsCustomizerOpen,
        isCallbackModalOpen,
        setIsCallbackModalOpen,
        selectedServiceForCallback,
        openCallbackModal,
        triggerCall
      }}
    >
      {children}
    </AffiliateContext.Provider>
  );
}

export function useAffiliate() {
  return useContext(AffiliateContext);
}
