import { RegionalSettingsContext } from '@/components/ui/user-settings-dialog/context';
import { regionalSettingsReducer } from '@/components/ui/user-settings-dialog/reducer';
import { PropsWithChildren, useCallback, useReducer } from 'react';

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
