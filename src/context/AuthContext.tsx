import React, { createContext, useState, ReactNode, useContext } from 'react';
import { User, AuthContextType } from '../types';

// Default context value
const defaultAuthContext: AuthContextType = {
  user: null,
  login: () => false,
  logout: () => {},
  isAuthenticated: false,
};

// Create the context
export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Provider component
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Hardcoded credentials for demo purposes
  const validCredentials: User = {
    username: 'admin',
    password: 'password',
  };

  const login = (username: string, password: string): boolean => {
    if (username === validCredentials.username && password === validCredentials.password) {
      setUser({ username, password });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};