import { getFilterDefinitionsQueryOptions } from '@/features/ui-preferences/api/get-filter-definitions';
import api from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';
import { UserFilterPreference, UserFilterPreferenceRequest } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface UpdateUserFilterPreferencesRequest {
  table_id: string;
  filter_preferences: UserFilterPreferenceRequest[];
}

export const updateUserFilterPreferences = ({
  data,
}: {
  data: UpdateUserFilterPreferencesRequest;
}): Promise<Array<UserFilterPreference>> => {
  return api.put('user-filter-preferences/', data);
};

type UseUpdateUserFilterPreferencesOptions = {
  table_id: string;
  mutationConfig?: MutationConfig<typeof updateUserFilterPreferences>;
};

export const useUpdateUserFilterPreferences = ({
  table_id,
  mutationConfig,
}: UseUpdateUserFilterPreferencesOptions) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (data, ...args) => {
      queryClient.refetchQueries({
        queryKey: getFilterDefinitionsQueryOptions(table_id).queryKey,
      });
      onSuccess?.(data, ...args);
    },
    ...restConfig,
    mutationFn: updateUserFilterPreferences,
  });
};
