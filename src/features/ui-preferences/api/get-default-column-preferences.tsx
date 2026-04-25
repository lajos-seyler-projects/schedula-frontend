import api from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { DefaultColumnPreference } from '@/types/api';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getDefaultColumnPreferences = ({
  tableId,
}: {
  tableId: string;
}): Promise<DefaultColumnPreference[]> => {
  return api
    .get('default-column-preferences', {
      params: { table_id: tableId },
    })
    .then((response) => response.data);
};

export const getDefaultColumnPreferencesQueryOptions = (tableId: string) => {
  return queryOptions({
    queryKey: ['default-column-preferences', tableId],
    queryFn: () => getDefaultColumnPreferences({ tableId }),
  });
};

type UseDefaultColumnPreferencesOptions = {
  tableId: string;
  queryConfig?: QueryConfig<typeof getDefaultColumnPreferencesQueryOptions>;
};

export const useDefaultColumnPreferences = ({
  tableId,
  queryConfig,
}: UseDefaultColumnPreferencesOptions) => {
  return useQuery({
    ...getDefaultColumnPreferencesQueryOptions(tableId),
    ...queryConfig,
  });
};
