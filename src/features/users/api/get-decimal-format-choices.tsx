import { queryOptions, useQuery } from '@tanstack/react-query';

import api from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { Choice } from '@/types/api';

export const getDecimalFormatChoices = (): Promise<{ data: Choice[] }> => {
  return api.get('/user-preferences/decimal-format-choices');
};

export const getDecimalFormatChoicesQueryOptions = () => {
  return queryOptions({
    queryKey: ['decimal-format-choices'],
    queryFn: () => getDecimalFormatChoices(),
  });
};

type UseDecimalFormatChoicesOptions = {
  queryConfig?: QueryConfig<typeof getDecimalFormatChoicesQueryOptions>;
};

export const useDecimalFormatChoices = ({
  queryConfig,
}: UseDecimalFormatChoicesOptions = {}) => {
  return useQuery({
    ...getDecimalFormatChoicesQueryOptions(),
    ...queryConfig,
  });
};
