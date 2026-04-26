import { queryOptions, useQuery } from '@tanstack/react-query';

import api from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { PaginatedGroupList } from '@/types/api';

export const getUserGroups = ({
  uuid,
  page = 1,
  pageSize = 50,
}: {
  uuid: string;
  page: number;
  pageSize: number;
}): Promise<{ data: PaginatedGroupList }> => {
  return api.get(`users/${uuid}/groups`, {
    params: {
      page,
      page_size: pageSize,
    },
  });
};

export const getUserGroupsQueryOptions = ({
  uuid,
  page,
  pageSize,
}: {
  uuid: string;
  page: number;
  pageSize: number;
}) => {
  return queryOptions({
    queryKey: ['user-groups', { uuid, page, pageSize }],
    queryFn: () => getUserGroups({ uuid, page, pageSize }),
    placeholderData: (prev) => prev,
  });
};

type UseUserGroupsOptions = {
  uuid: string;
  page: number;
  pageSize: number;
  queryConfig?: QueryConfig<typeof getUserGroupsQueryOptions>;
};

export const useUserGroups = ({
  uuid,
  page,
  pageSize,
  queryConfig,
}: UseUserGroupsOptions) => {
  return useQuery({
    ...getUserGroupsQueryOptions({ uuid, page, pageSize }),
    ...queryConfig,
  });
};
