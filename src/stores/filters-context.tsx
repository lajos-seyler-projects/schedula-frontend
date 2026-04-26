import { useFiltersReducer } from '@/features/ui-preferences/hooks/use-filters-reducer';
import { createContext } from 'react';

export const FiltersContext = createContext<ReturnType<
  typeof useFiltersReducer
> | null>(null);
