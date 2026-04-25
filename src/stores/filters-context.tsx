import { useFiltersReducer } from '@/features/ui-preferences/hooks/use-filters-reducer';
import { createContext, PropsWithChildren, useContext } from 'react';

const FiltersContext = createContext<ReturnType<
  typeof useFiltersReducer
> | null>(null);

export function FiltersProvider({ children }: PropsWithChildren) {
  const filters = useFiltersReducer();

  return <FiltersContext value={filters}>{children}</FiltersContext>;
}

export function useFilters() {
  const ctx = useContext(FiltersContext);
  if (!ctx) throw new Error('useFilters must be used within a FiltersProvider');
  return ctx;
}
