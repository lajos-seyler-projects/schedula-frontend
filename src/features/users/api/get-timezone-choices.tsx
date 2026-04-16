import { queryOptions, useQuery } from '@tanstack/react-query';

import api from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';

export const getTimezoneChoices = (): Promise<{ data: TimezoneMap }> => {
  return api.get('/user-preferences/timezone-choices');
};

export const getTimezoneChoicesQueryOptions = () => {
  return queryOptions({
    queryKey: ['timezone-choices'],
    queryFn: () => getTimezoneChoices(),
  });
};

type UseTimezoneChoicesOptions = {
  queryConfig?: QueryConfig<typeof getTimezoneChoicesQueryOptions>;
};

export const useTimezoneChoices = ({
  queryConfig,
}: UseTimezoneChoicesOptions = {}) => {
  return useQuery({
    ...getTimezoneChoicesQueryOptions(),
    ...queryConfig,
  });
};
