import {
  RegionalSettingsAction,
  regionalSettingsReducer,
  RegionalSettingsState,
} from '@/components/ui/user-settings-dialog/reducer';
import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  PropsWithChildren,
} from 'react';

interface RegionalSettingsContextValue extends RegionalSettingsState {
  dispatch: React.ActionDispatch<[action: RegionalSettingsAction]>;
  setDateFormat: (dateFormat: string) => void;
  setDecimalFormat: (decimalFormat: string) => void;
  setTimeFormat: (timeFormat: string) => void;
  setTimezone: (timezone: string) => void;
  setShowTimezone: (showTimezone: boolean) => void;
}

const RegionalSettingsContext =
  createContext<RegionalSettingsContextValue | null>(null);

export function RegionalSettingsProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(regionalSettingsReducer, null);

  const setDateFormat = useCallback(
    (dateFormat: string) =>
      dispatch({
        type: 'fieldChanged',
        payload: { field: 'date_format', value: dateFormat },
      }),
    [],
  );
  const setDecimalFormat = useCallback(
    (decimalFormat: string) =>
      dispatch({
        type: 'fieldChanged',
        payload: { field: 'decimal_format', value: decimalFormat },
      }),
    [],
  );
  const setTimeFormat = useCallback((timeFormat: string) => {
    dispatch({
      type: 'fieldChanged',
      payload: { field: 'time_format', value: timeFormat },
    });
  }, []);
  const setTimezone = useCallback((timezone: string) => {
    dispatch({
      type: 'fieldChanged',
      payload: { field: 'time_zone', value: timezone },
    });
  }, []);
  const setShowTimezone = useCallback((showTimezone: boolean) => {
    dispatch({
      type: 'fieldChanged',
      payload: { field: 'show_timezone', value: showTimezone },
    });
  }, []);

  const value = {
    ...state,
    dispatch,
    setDateFormat,
    setDecimalFormat,
    setTimeFormat,
    setTimezone,
    setShowTimezone,
  };

  return (
    <RegionalSettingsContext.Provider value={value}>
      {children}
    </RegionalSettingsContext.Provider>
  );
}

export function useRegionalSettingsContext() {
  const ctx = useContext(RegionalSettingsContext);
  if (!ctx) {
    throw new Error(
      'useRegionalSettingsContext must be used inside <RegionalSettingsProvider>',
    );
  }
  return ctx;
}
