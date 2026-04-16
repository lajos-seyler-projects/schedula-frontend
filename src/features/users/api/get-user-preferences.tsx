import { useQuery, queryOptions } from '@tanstack/react-query';

import { QueryConfig } from '@/lib/react-query';
import { UserPreferences } from '@/types/api';
import api from '@/lib/api-client';

export const getUserPreferences = (): Promise<{ data: UserPreferences }> => {
  return api.get('/me/preferences');
};

export const getUserPreferencesQueryOptions = () => {
  return queryOptions({
    queryKey: ['user-preferences'],
    queryFn: () => getUserPreferences(),
  });
};

type UseUserPreferencesOptions = {
  queryConfig?: QueryConfig<typeof getUserPreferencesQueryOptions>;
};

export const useUserPreferences = ({
  queryConfig,
}: UseUserPreferencesOptions = {}) => {
  return useQuery({
    ...getUserPreferencesQueryOptions(),
    ...queryConfig,
  });
};
