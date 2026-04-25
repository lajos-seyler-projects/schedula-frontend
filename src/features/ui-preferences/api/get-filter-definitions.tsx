import api from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { FilterDefinition } from '@/types/api';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getFilterDefinitions = ({
  tableId,
}: {
  tableId: string;
}): Promise<FilterDefinition[]> => {
  return api
    .get('filter-definitions', {
      params: { table_id: tableId },
    })
    .then((response) => response.data);
};

export const getFilterDefinitionsQueryOptions = (tableId: string) => {
  return queryOptions({
    queryKey: ['filter-definitions', tableId],
    queryFn: () => getFilterDefinitions({ tableId }),
  });
};

type UseFilterDefinitionsOptions = {
  tableId: string;
  queryConfig?: QueryConfig<typeof getFilterDefinitionsQueryOptions>;
};

export const useFilterDefinitions = ({
  tableId,
  queryConfig,
}: UseFilterDefinitionsOptions) => {
  return useQuery({
    ...getFilterDefinitionsQueryOptions(tableId),
    ...queryConfig,
  });
};
