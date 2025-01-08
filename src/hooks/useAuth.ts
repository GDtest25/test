import { useState, useEffect } from 'react';
import { authService } from '../services/authService';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const auth = authService.isAuthenticated();
      setIsAuthenticated(auth);
      setLoading(false);
    };

    checkAuth();
  }, []);

  return { isAuthenticated, loading };
}