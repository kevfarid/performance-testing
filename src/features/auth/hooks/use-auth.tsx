import { use } from 'react';
import { AuthContext, type AuthContextValue } from '../provider/auth-provider';

export const useAuth = (): AuthContextValue => {
  const context = use(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
