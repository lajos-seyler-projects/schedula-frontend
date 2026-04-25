import api from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { UserColumnPreference } from '@/types/api';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getUserColumnPreferences = ({
  tableId,
}: {
  tableId: string;
}): Promise<UserColumnPreference[]> => {
  return api
    .get('user-column-preferences', {
      params: { table_id: tableId },
    })
    .then((response) => response.data);
};

export const getUserColumnPreferencesQueryOptions = (tableId: string) => {
  return queryOptions({
    queryKey: ['user-column-preferences', tableId],
    queryFn: () => getUserColumnPreferences({ tableId }),
  });
};

type UseUserColumnPreferencesOptions = {
  tableId: string;
  queryConfig?: QueryConfig<typeof getUserColumnPreferencesQueryOptions>;
};

export const useUserColumnPreferences = ({
  tableId,
  queryConfig,
}: UseUserColumnPreferencesOptions) => {
  return useQuery({
    ...getUserColumnPreferencesQueryOptions(tableId),
    ...queryConfig,
  });
};
