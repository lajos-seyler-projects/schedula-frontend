import { MainErrorFallback } from '@/components/errors/main';
import { useUserPreferences } from '@/features/users/api/get-user-preferences';
import { useAuth } from '@/hooks/useAuth';
import { FiltersProvider } from '@/providers/filters-provider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { setTheme } from '@ui5/webcomponents-base';
import { ThemeProvider } from '@ui5/webcomponents-react';
import '@ui5/webcomponents-react/dist/Assets.js';
import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const { data } = useUserPreferences();

  if (data?.data.fiori_theme) {
    setTheme(data?.data.fiori_theme);
  }
  useAuth();

  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <ThemeProvider>
        <FiltersProvider>
          {import.meta.env.DEV && <ReactQueryDevtools />}
          {children}
        </FiltersProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};
