import { useMutation } from '@tanstack/react-query';

import api from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';
import { UserRegistration, UserRegistrationRequest } from '@/types/api';
import { AxiosError } from 'axios';

export const register = ({
  username,
  email,
  password,
  first_name,
  last_name,
}: UserRegistrationRequest): Promise<UserRegistration> => {
  return api.post(`/register/`, {
    username,
    email,
    password,
    first_name,
    last_name,
  });
};

type UseRegisterOptions = {
  mutationConfig?: MutationConfig<typeof register>;
};

export const useRegister = ({ mutationConfig }: UseRegisterOptions = {}) => {
  return useMutation<UserRegistration, AxiosError, UserRegistrationRequest>({
    ...mutationConfig,
    mutationFn: register,
  });
};
