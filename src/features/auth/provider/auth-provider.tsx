import React, { createContext, useState, type ReactNode } from 'react';
import type User from '../types/user';
import { loginService } from '../services/auth.service';
import { AuthConstants } from '../constants';

export interface AuthContextValue {
  user: User | undefined;
  login: (email: string, password: string, redirectTo?: string) => void;
  logout: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | undefined>(() => {
    const userData = localStorage.getItem(AuthConstants.USER_STORAGE_KEY);
    return userData ? JSON.parse(userData) : undefined;
  });
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    () => !!localStorage.getItem(AuthConstants.TOKEN_STORAGE_KEY)
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = (email: string, password: string, redirectTo?: string) => {
    setIsLoading(true);
    loginService(email, password)
      .then((response) => {
        localStorage.setItem(
          AuthConstants.TOKEN_STORAGE_KEY,
          response.data.token
        );
        localStorage.setItem(
          AuthConstants.USER_STORAGE_KEY,
          JSON.stringify(response.data.user)
        );
        setUser(response.data.user);
        window.open(redirectTo || '/', '_self');
      })
      .catch((error) => {
        console.error('Login failed:', error);
        throw new Error('Login failed');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const logout = () => {
    localStorage.removeItem(AuthConstants.TOKEN_STORAGE_KEY);
    localStorage.removeItem(AuthConstants.USER_STORAGE_KEY);
    setUser(undefined);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext value={{ user, login, logout, isLoading, isAuthenticated }}>
      {children}
    </AuthContext>
  );
};
