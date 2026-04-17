import { useMutation, useQueryClient } from '@tanstack/react-query';

import { MutationConfig } from '@/lib/react-query';
import { PatchedUserPreferencesRequest, UserPreferences } from '@/types/api';
import { getUserPreferencesQueryOptions } from '@/features/users/api/get-user-preferences';
import api from '@/lib/api-client';

export const updateUserPreferences = ({
  data,
}: {
  data: PatchedUserPreferencesRequest;
}): Promise<UserPreferences> => {
  return api.patch('/me/preferences/', data);
};

type UseUpdateUserPreferencesOptions = {
  mutationConfig?: MutationConfig<typeof updateUserPreferences>;
};

export const useUpdateUserPreferences = ({
  mutationConfig,
}: UseUpdateUserPreferencesOptions = {}) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (data, ...args) => {
      queryClient.refetchQueries({
        queryKey: getUserPreferencesQueryOptions().queryKey,
      });
      onSuccess?.(data, ...args);
    },
    ...restConfig,
    mutationFn: updateUserPreferences,
  });
};
