import React, { useState } from 'react';
import { AffiliateContext } from './affiliateContext';

export const AffiliateProvider = ({ children }) => {
  const [affiliate, setAffiliate] = useState(null);

  return (
    <AffiliateContext.Provider value={{ affiliate, setAffiliate }}>
      {children}
    </AffiliateContext.Provider>
  );
};
