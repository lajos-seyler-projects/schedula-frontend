import { queryOptions, useQuery } from '@tanstack/react-query';

import api from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { UserMe } from '@/types/api';

export const getMe = (): Promise<{ data: UserMe }> => {
  return api.get('/me');
};

export const getMeQueryOptions = () => {
  return queryOptions({
    queryKey: ['user-me'],
    queryFn: () => getMe(),
  });
};

type UseMeOptions = {
  queryConfig?: QueryConfig<typeof getMeQueryOptions>;
};

export const useMe = ({ queryConfig }: UseMeOptions = {}) => {
  return useQuery({
    ...getMeQueryOptions(),
    ...queryConfig,
  });
};
