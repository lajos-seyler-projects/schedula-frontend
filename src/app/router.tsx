import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import AppRoot, {
  ErrorBoundary as AppRootErrorBoundary,
} from '@/app/routes/app/root';
import { ProtectedRoute } from '@/app/routes/protected-route';
import { paths } from '@/config/paths';

const convert = (queryClient: QueryClient) => (m: any) => {
  const { clientLoader, clientAction, default: Component, ...rest } = m;
  return {
    ...rest,
    loader: clientLoader?.(queryClient),
    action: clientAction?.(queryClient),
    Component,
  };
};

export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: paths.login.path,
      lazy: () => import('./routes/login').then(convert(queryClient)),
    },
    {
      path: paths.register.path,
      lazy: () => import('./routes/register').then(convert(queryClient)),
    },
    {
      path: paths.registrationSuccessful.path,
      lazy: () =>
        import('./routes/registration-successful').then(convert(queryClient)),
    },
    {
      path: paths.activeUser.path,
      lazy: () => import('./routes/users/activate').then(convert(queryClient)),
    },
    {
      path: paths.app.root.path,
      element: (
        <ProtectedRoute>
          <AppRoot />
        </ProtectedRoute>
      ),
      ErrorBoundary: AppRootErrorBoundary,
      children: [
        {
          path: paths.app.home.path,
          lazy: () => import('./routes/app/home').then(convert(queryClient)),
        },
      ],
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};
