import api from '@/lib/api-client';
import { useAuthStore } from '@/stores/auth-store';
import { useMutation } from '@tanstack/react-query';

export const login = async (email: string, password: string) => {
  const res = await api.post('/token/', { email, password });
  return res.data;
};

export const useLogin = () => {
  const setAccessToken = useAuthStore((s) => s.setAccessToken);

  return useMutation({
    mutationFn: ({ email, password }: any) => login(email, password),

    onSuccess: (data) => {
      setAccessToken(data.access);
    },
  });
};
