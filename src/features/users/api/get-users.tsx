import { queryOptions, useQuery } from '@tanstack/react-query';

import api from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { PaginatedUserSlimList } from '@/types/api';

export const getUsers = ({
  page = 1,
  pageSize = 50,
}): Promise<PaginatedUserSlimList> => {
  return api
    .get(`/users`, {
      params: {
        page,
        page_size: pageSize,
      },
    })
    .then((response) => response.data);
};

export const getUsersQueryOptions = ({
  page,
  pageSize,
}: { page?: number; pageSize?: number } = {}) => {
  return queryOptions({
    queryKey: ['users', { page, pageSize }],
    queryFn: () => getUsers({ page, pageSize }),
    placeholderData: (prev) => prev,
  });
};

type UseUsersOptions = {
  page?: number;
  pageSize?: number;
  queryConfig?: QueryConfig<typeof getUsersQueryOptions>;
};

export const useUsers = ({
  queryConfig,
  page,
  pageSize,
}: UseUsersOptions = {}) => {
  return useQuery({
    ...getUsersQueryOptions({ page, pageSize }),
    ...queryConfig,
  });
};
