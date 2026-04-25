export function cleanFilters<T extends Record<string, unknown>>(
  filters: T,
): Partial<T> {
  return Object.fromEntries(
    Object.entries(filters).filter(([, value]) => {
      if (value === '' || value === 'undefined' || value === null) return false;
      if (Array.isArray(value)) return value.filter((v) => v !== '').length > 0;
      return true;
    }),
  ) as Partial<T>;
}
