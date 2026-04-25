import api from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { FilterVariant } from '@/types/api';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getFilterVariants = ({
  tableId,
}: {
  tableId: string;
}): Promise<FilterVariant[]> => {
  return api
    .get('filter-variants', {
      params: { table_id: tableId },
    })
    .then((response) => response.data);
};

export const getFilterVariantsQueryOptions = (tableId: string) => {
  return queryOptions({
    queryKey: ['filter-variants', tableId],
    queryFn: () => getFilterVariants({ tableId }),
  });
};

type UseFilterVariantsOptions = {
  tableId: string;
  queryConfig?: QueryConfig<typeof getFilterVariantsQueryOptions>;
};

export const useFilterVariants = ({
  tableId,
  queryConfig,
}: UseFilterVariantsOptions) => {
  return useQuery({
    ...getFilterVariantsQueryOptions(tableId),
    ...queryConfig,
  });
};
