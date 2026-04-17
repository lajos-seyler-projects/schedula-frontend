import {
  RegionalSettingsAction,
  RegionalSettingsState,
} from '@/components/ui/user-settings-dialog/reducer';
import { createContext, useContext } from 'react';

interface RegionalSettingsContextValue extends RegionalSettingsState {
  dispatch: React.ActionDispatch<[action: RegionalSettingsAction]>;
  setDateFormat: (dateFormat: string) => void;
  setDecimalFormat: (decimalFormat: string) => void;
  setTimeFormat: (timeFormat: string) => void;
  setTimezone: (timezone: string) => void;
  setShowTimezone: (showTimezone: boolean) => void;
}

export const RegionalSettingsContext =
  createContext<RegionalSettingsContextValue | null>(null);

export function useRegionalSettingsContext() {
  const ctx = useContext(RegionalSettingsContext);
  if (!ctx) {
    throw new Error(
      'useRegionalSettingsContext must be used inside <RegionalSettingsProvider>',
    );
  }
  return ctx;
}
