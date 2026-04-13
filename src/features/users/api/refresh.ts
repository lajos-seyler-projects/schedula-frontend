import api from '@/lib/api-client';

export const refresh = async () => {
  const res = await api.post('/token/refresh/');
  return res.data;
};
