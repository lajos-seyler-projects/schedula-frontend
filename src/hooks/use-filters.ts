import { FiltersContext } from '@/stores/filters-context';
import { useContext } from 'react';

export function useFilters() {
  const ctx = useContext(FiltersContext);
  if (!ctx) throw new Error('useFilters must be used within a FiltersProvider');
  return ctx;
}
