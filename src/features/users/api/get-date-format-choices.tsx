import { queryOptions, useQuery } from '@tanstack/react-query';

import api from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { Choice } from '@/types/api';

export const getDateFormatChoices = (): Promise<{ data: Choice[] }> => {
  return api.get('/user-preferences/date-format-choices');
};

export const getDateFormatChoicesQueryOptions = () => {
  return queryOptions({
    queryKey: ['date-format-choices'],
    queryFn: () => getDateFormatChoices(),
  });
};

type UseDateFormatChoicesOptions = {
  queryConfig?: QueryConfig<typeof getDateFormatChoicesQueryOptions>;
};

export const useDateFormatChoices = ({
  queryConfig,
}: UseDateFormatChoicesOptions = {}) => {
  return useQuery({
    ...getDateFormatChoicesQueryOptions(),
    ...queryConfig,
  });
};
