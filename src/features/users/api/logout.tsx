import api from '@/lib/api-client';
import { useAuthStore } from '@/stores/auth-store';
import { useMutation } from '@tanstack/react-query';

export const logout = async () => {
  await api.post('/token/blacklist/');
};

export const useLogout = () => {
  const { logout: logoutFn } = useAuthStore();

  return useMutation({
    mutationFn: () => logout(),

    onSuccess: () => {
      logoutFn();
    },
  });
};
