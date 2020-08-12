import React, { useState, useEffect } from 'react';
import { AuthContext } from '../hooks/authContext';
import { fetchSignup, fetchLogin, fetchVerify } from '../services/authServices';

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  const authService = (serviceFn, ...args) => {
    setAuthError(null);
    return serviceFn(...args)
      .then(user => setCurrentUser(user))
      .catch(err => setAuthError(err));
  };

  const signup = (email, password, profileImage) => authService(fetchSignup, email, password, profileImage);
  const login = (email, password) => authService(fetchLogin, email, password);

  useEffect(() => {
    fetchVerify()
      .then(user => setCurrentUser(user))
      .finally(() => setAuthLoading(false));
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, authLoading, authError, signup, login }}>
      {children}
    </AuthContext.Provider>
  );
}

