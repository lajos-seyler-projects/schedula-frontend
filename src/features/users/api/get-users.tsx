import { queryOptions, useQuery } from '@tanstack/react-query';

import api from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { PaginatedUserSlimList } from '@/types/api';
import { cleanFilters } from '@/utils/clean-filters';

type UsersFilters = {
  username__icontains?: string;
  email__icontains?: string;
  first_name__icontains?: string;
  last_name__icontains?: string;
  is_superuser?: boolean;
};

export const getUsers = ({
  page = 1,
  pageSize = 50,
  filters = {},
}: {
  page: number;
  pageSize: number;
  filters: UsersFilters;
}): Promise<PaginatedUserSlimList> => {
  return api
    .get(`/users`, {
      params: {
        page,
        page_size: pageSize,
        ...cleanFilters(filters),
      },
    })
    .then((response) => response.data);
};

export const getUsersQueryOptions = (
  {
    page,
    pageSize,
    filters = {},
  }: { page: number; pageSize: number; filters: UsersFilters } = {
    page: 1,
    pageSize: 50,
    filters: {},
  },
) => {
  return queryOptions({
    queryKey: ['users', { page, pageSize, filters }],
    queryFn: () => getUsers({ page, pageSize, filters }),
    placeholderData: (prev) => prev,
  });
};

type UseUsersOptions = {
  page: number;
  pageSize: number;
  filters: UsersFilters;
  queryConfig?: QueryConfig<typeof getUsersQueryOptions>;
};

export const useUsers = (
  { queryConfig, page, pageSize, filters }: UseUsersOptions = {
    page: 1,
    pageSize: 50,
    filters: {},
  },
) => {
  return useQuery({
    ...getUsersQueryOptions({ page, pageSize, filters }),
    ...queryConfig,
  });
};
