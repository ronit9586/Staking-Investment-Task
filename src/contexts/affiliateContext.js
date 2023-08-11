import { createContext } from 'react';

export const AffiliateContext = createContext({
  affiliate: null,
  setAffiliate: () => {}
});
