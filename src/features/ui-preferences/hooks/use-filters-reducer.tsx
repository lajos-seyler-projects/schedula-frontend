import { useCallback, useReducer } from 'react';

type FiltersState = {
  draft: Record<string, Record<string, any>>;
  applied: Record<string, Record<string, any>>;
};

type FiltersAction =
  | {
      type: 'set_filter';
      payload: { tableId: string; name: string; value: any };
    }
  | { type: 'cleared_filters'; payload: { tableId: string } }
  | {
      type: 'loaded_from_variant';
      payload: { tableId: string; filters?: Record<string, any> | null };
    }
  | { type: 'applied_filters'; payload: { tableId: string } };

function filtersReducer(
  state: FiltersState,
  action: FiltersAction,
): FiltersState {
  const { type, payload } = action;
  switch (type) {
    case 'set_filter': {
      const prevFilters = { ...(state.draft[payload.tableId] || {}) };

      if (Array.isArray(payload.value) && payload.value.length === 0) {
        delete prevFilters[payload.name];
      } else {
        prevFilters[payload.name] = payload.value;
      }

      return {
        ...state,
        draft: {
          ...(state.draft || {}),
          [payload.tableId]: prevFilters,
        },
      };
    }

    case 'cleared_filters':
      return {
        ...state,
        draft: {
          ...(state.draft || {}),
          [payload.tableId]: {},
        },
      };

    case 'loaded_from_variant':
      return {
        ...state,
        draft: {
          ...(state.draft || {}),
          [payload.tableId]: { ...(payload.filters || {}) },
        },
      };

    case 'applied_filters': {
      return {
        ...state,
        applied: {
          ...(state.applied || {}),
          [payload.tableId]: state.draft[payload.tableId] || {},
        },
      };
    }
  }
}

export function useFiltersReducer(
  initialFilters: FiltersState = {
    draft: {},
    applied: {},
  },
) {
  const [state, dispatch] = useReducer(filtersReducer, initialFilters);

  const getTableFilters = useCallback(
    (tableId: string) => state.draft[tableId] || {},
    [state],
  );

  const getAppliedTableFilters = useCallback(
    (tableId: string) => state.applied[tableId] || {},
    [state],
  );

  const setFilter = useCallback(
    (tableId: string, name: string, value: any) =>
      dispatch({ type: 'set_filter', payload: { tableId, name, value } }),
    [],
  );

  const applyFilters = useCallback(
    (tableId: string) =>
      dispatch({ type: 'applied_filters', payload: { tableId } }),
    [],
  );

  const loadFromVariant = useCallback(
    (tableId: string, filters?: Record<string, any> | null) =>
      dispatch({ type: 'loaded_from_variant', payload: { tableId, filters } }),
    [],
  );

  const clearFilters = useCallback(
    (tableId: string) =>
      dispatch({ type: 'cleared_filters', payload: { tableId } }),
    [],
  );

  return {
    getTableFilters,
    getAppliedTableFilters,
    setFilter,
    applyFilters,
    loadFromVariant,
    clearFilters,
    dispatch,
  };
}
