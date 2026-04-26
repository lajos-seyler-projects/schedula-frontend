import { useFiltersReducer } from '@/features/ui-preferences/hooks/use-filters-reducer';
import { FiltersContext } from '@/stores/filters-context';
import { PropsWithChildren } from 'react';

export function FiltersProvider({ children }: PropsWithChildren) {
  const filters = useFiltersReducer();
  return <FiltersContext value={filters}>{children}</FiltersContext>;
}
