// userProvider.js
import React, { useState } from 'react';
import { UserContext } from './userContext';

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [jwtToken, setJwtToken] = useState(null);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, jwtToken, setJwtToken }}>
      {children}
    </UserContext.Provider>
  );
};
