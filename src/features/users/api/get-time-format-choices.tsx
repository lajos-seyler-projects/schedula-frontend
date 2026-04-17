import { queryOptions, useQuery } from '@tanstack/react-query';

import api from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { Choice } from '@/types/api';

export const getTimeFormatChoices = (): Promise<{ data: Choice[] }> => {
  return api.get('/user-preferences/time-format-choices');
};

export const getTimeFormatChoicesQueryOptions = () => {
  return queryOptions({
    queryKey: ['time-format-choices'],
    queryFn: () => getTimeFormatChoices(),
  });
};

type UseTimeFormatChoicesOptions = {
  queryConfig?: QueryConfig<typeof getTimeFormatChoicesQueryOptions>;
};

export const useTimeFormatChoices = ({
  queryConfig,
}: UseTimeFormatChoicesOptions = {}) => {
  return useQuery({
    ...getTimeFormatChoicesQueryOptions(),
    ...queryConfig,
  });
};
