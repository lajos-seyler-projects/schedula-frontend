export interface RegionalSettingsState {
  date_format?: string;
  decimal_format?: string;
  time_format?: string;
  time_zone?: string;
  show_timezone?: boolean;
}

type FieldChangedAction = {
  [K in keyof RegionalSettingsState]: {
    type: 'fieldChanged';
    payload: { field: K; value: RegionalSettingsState[K] };
  };
}[keyof RegionalSettingsState];

export type RegionalSettingsAction =
  | {
      type: 'preferencesFetched';
      payload: {
        date_format: string;
        decimal_format: string;
        time_format: string;
        time_zone: string;
        show_timezone: boolean;
      };
    }
  | FieldChangedAction;

export function regionalSettingsReducer(
  state: RegionalSettingsState | null,
  action: RegionalSettingsAction,
) {
  if (!action) return state;

  switch (action.type) {
    case 'preferencesFetched':
      return {
        ...action.payload,
      };
    case 'fieldChanged':
      const { field, value } = action.payload;
      return { ...state, [field]: value };
    default:
      return state;
  }
}

export type RegionalSettingsReducer = React.Reducer<
  RegionalSettingsState | null,
  RegionalSettingsAction
>;
