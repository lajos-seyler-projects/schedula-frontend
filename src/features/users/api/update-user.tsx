import { useMutation, useQueryClient } from '@tanstack/react-query';

import { getUserQueryOptions } from '@/features/users/api/get-user';
import api from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';
import { PatchedUserSlimRequest, UserDetails } from '@/types/api';

export const updateUser = ({
  uuid,
  data,
}: {
  uuid: string;
  data: PatchedUserSlimRequest;
}): Promise<UserDetails> => {
  return api.patch(`users/${uuid}/`, data);
};

type UseUpdateUserOptions = {
  uuid: string;
  mutationConfig?: MutationConfig<typeof updateUser>;
};

export const useUpdateUser = ({
  uuid,
  mutationConfig,
}: UseUpdateUserOptions) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (data, ...args) => {
      queryClient.refetchQueries({
        queryKey: getUserQueryOptions(uuid).queryKey,
      });
      onSuccess?.(data, ...args);
    },
    ...restConfig,
    mutationFn: updateUser,
  });
};
