import React, { useState } from 'react';
import Cookies from 'js-cookie';
const AuthContext = React.createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const cookie = Cookies.get('session');
    return cookie ? JSON.parse(cookie).user : null;
  });
  const [jwt, setJwt] = useState(() => {
    const cookie = Cookies.get('session');
    return cookie ? JSON.parse(cookie).jwt : null;
  });
  const [userRole, setUserRole] = useState(() => {
    const cookie = Cookies.get('session');
    return cookie ? JSON.parse(cookie).userRole : null;
  });

  const [isAutenticated, setIsAutenticated] = useState(() => Boolean(jwt));

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        jwt,
        setJwt,
        userRole,
        setUserRole,
        isAutenticated,
        setIsAutenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;