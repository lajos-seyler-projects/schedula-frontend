import { queryOptions, useQuery } from '@tanstack/react-query';

import api from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { UserDetails } from '@/types/api';

export const getUser = ({
  uuid,
}: {
  uuid: string;
}): Promise<{ data: UserDetails }> => {
  return api.get(`users/${uuid}`);
};

export const getUserQueryOptions = (uuid: string) => {
  return queryOptions({
    queryKey: ['user', uuid],
    queryFn: () => getUser({ uuid }),
  });
};

type UseUserOptions = {
  uuid: string;
  queryConfig?: QueryConfig<typeof getUserQueryOptions>;
};

export const useUser = ({ uuid, queryConfig }: UseUserOptions) => {
  return useQuery({
    ...getUserQueryOptions(uuid),
    ...queryConfig,
  });
};
