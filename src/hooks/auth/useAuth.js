import React, { useContext, useCallback, useState } from 'react';
import {
  login as loginService,
  register as registerSevice,
  logout as logoutService
} from '../../services/auth/AuthService';
import AuthContext from '../../contexts/auth-context/AuthContext';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const {
    user,
    setUser,
    jwt,
    setJwt,
    userRole,
    setUserRole,
    isAutenticated,
    setIsAutenticated
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState({
    loading: false,
    error: false,
    errorMessage: ''
  });

  const [registerState, setRegisterState] = useState({
    loading: false,
    error: false,
    errorMessage: ''
  });

  const login = useCallback(
    ({ identifier, password, remember }) => {
      console.log('useAuth',identifier, password, remember)
      setLoginState({ loading: true, error: false, errorMessage: '' });
      loginService({ identifier, password, remember })
        .then((res) => {
          setLoginState({ loading: false, error: false, errorMessage: '' });
          setUser(res.user);
          setJwt(res.jwt);
          setUserRole(res.userRole);
          setIsAutenticated(Boolean(res.jwt));
          navigate('/content');
        })
        .catch((err) => {
          setLoginState({
            loading: false,
            error: true,
            errorMessage: err.message
          });
        });
    },
    [setUser, setJwt, setUserRole]
  );

  const register = useCallback(
    ({ username, email, password }) => {
      setRegisterState({
        loading: true,
        error: false,
        errorMessage: ''
      });

      registerSevice({ username, email, password })
        .then((res) => {
          setRegisterState({
            loading: false,
            error: false,
            errorMessage: ''
          });
          setUser(res.user);
          setJwt(res.jwt);
          setUserRole(res.userRole);
          setIsAutenticated(Boolean(res.jwt));
          navigate('/dashboard');
        })
        .catch((err) => {
          setRegisterState({
            loading: false,
            error: true,
            errorMessage: err.message
          });
        });
    },
    [setJwt, setUser, setUserRole]
  );

  const logout = useCallback(async () => {
    await logoutService();
    setUser(null);
    setJwt(null);
    setUserRole(null);
    setIsAutenticated(false);
    navigate('/');
  });

  return {
    isAutenticated,
    login,
    register,
    logout,
    user,
    userRole,
    loginState
  };
};

export default useAuth;