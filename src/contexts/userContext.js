import { createContext } from 'react';

export const UserContext = createContext({
  userInfo: null,
  jwtToken: null,
  setUserInfo: () => {},
  setJwtToken: () => {}
});
