import { queryOptions, useQuery } from '@tanstack/react-query';

import api from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { Choice } from '@/types/api';

export const getFioriThemeChoices = (): Promise<{ data: Choice[] }> => {
  return api.get('/user-preferences/fiori-theme-choices');
};

export const getFioriThemeChoicesQueryOptions = () => {
  return queryOptions({
    queryKey: ['fiori-theme-choices'],
    queryFn: () => getFioriThemeChoices(),
  });
};

type UseFioriThemeChoicesOptions = {
  queryConfig?: QueryConfig<typeof getFioriThemeChoicesQueryOptions>;
};

export const useFioriThemeChoices = ({
  queryConfig,
}: UseFioriThemeChoicesOptions = {}) => {
  return useQuery({
    ...getFioriThemeChoicesQueryOptions(),
    ...queryConfig,
  });
};
