import api from '@/lib/api-client';

export const activateEmail = async (uuid: string, token: string) => {
  return await api.get(`/users/${uuid}/activate/${token}/`);
};
