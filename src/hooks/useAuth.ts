import { refresh } from '@/features/users/api/refresh';
import { useAuthStore } from '@/stores/auth-store';
import { useEffect } from 'react';

export const useAuth = () => {
  const setAccessToken = useAuthStore((s) => s.setAccessToken);
  const setLoading = useAuthStore((s) => s.setLoading);

  useEffect(() => {
    const initAuth = async () => {
      setLoading(true);
      try {
        const data = await refresh();
        setAccessToken(data.access);
      } catch {
        setAccessToken(null);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, [setAccessToken, setLoading]);
};
