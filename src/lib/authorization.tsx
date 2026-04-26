import { useMe } from '@/features/users/api/get-me';
import { useCallback } from 'react';

export const useAuthorization = () => {
  const userResponse = useMe();

  const user = userResponse.data;

  const checkAccess = useCallback(
    ({
      requiredPermissions,
      match = 'all',
    }: {
      requiredPermissions: string[];
      match?: 'all' | 'any';
    }) => {
      if (user?.data.is_superuser || requiredPermissions.length === 0)
        return true;

      switch (match) {
        case 'all':
          return requiredPermissions.every((perm) =>
            user?.data.permissions.includes(perm),
          );
        case 'any':
          return requiredPermissions.some((perm) =>
            user?.data.permissions.includes(perm),
          );
      }
    },
    [user?.data],
  );

  return { checkAccess, permissions: user?.data.permissions };
};

type AuthorizationProps = {
  requiredPermissions: string[];
  forbiddenFallback?: React.ReactNode;
  match?: 'all' | 'any';
  children: React.ReactNode;
};

export const Authorization = ({
  requiredPermissions,
  forbiddenFallback = null,
  match,
  children,
}: AuthorizationProps) => {
  const { checkAccess } = useAuthorization();

  let canAccess = false;

  if (requiredPermissions) {
    canAccess = checkAccess({ requiredPermissions, match });
  }

  return <>{canAccess ? children : forbiddenFallback}</>;
};
