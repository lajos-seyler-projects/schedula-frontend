import { FilterDefinition } from '@/types/api';

export function transformFilterDefinitions(filters: Array<FilterDefinition>) {
  const filterDefinitions: Record<string, Omit<FilterDefinition, 'name'>> = {};

  filters.forEach(({ name, ...rest }) => {
    filterDefinitions[name] = rest;
  });

  return filterDefinitions;
}
