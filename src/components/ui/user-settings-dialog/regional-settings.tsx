import ErrorMessage from '@/components/ui/error-message';
import { useDateFormatChoices } from '@/features/users/api/get-date-format-choices';
import { useUserPreferences } from '@/features/users/api/get-user-preferences';
import { useUpdateUserPreferences } from '@/features/users/api/update-user-preferences';
import { regionalSettingsReducer } from '@/features/users/reducers/regional-settings-reducer';
import { makeEnumGuard } from '@/lib/utils';
import { DateFormatEnum, UserPreferencesRequest } from '@/types/api';
import {
  Button,
  Form,
  FormGroup,
  FormItem,
  Label,
  Option,
  Select,
  UserSettingsItem,
  UserSettingsView,
} from '@ui5/webcomponents-react';
import { useEffect, useReducer } from 'react';

const isValidDateFormat = makeEnumGuard(DateFormatEnum);

export default function RegionalSettings() {
  const {
    data: preferencesResponse,
    error: userPreferencesError,
    isPending: userPreferencesIsPending,
  } = useUserPreferences();
  const {
    data: dateFormatChoicesResponse,
    error: dateFormatChoicesError,
    isPending: dateFormatChoicesIsPending,
  } = useDateFormatChoices();

  const preferencesData = preferencesResponse?.data;

  const [state, dispatch] = useReducer(regionalSettingsReducer, null);

  const mutation = useUpdateUserPreferences();

  useEffect(() => {
    if (preferencesData) {
      dispatch({ type: 'preferencesFetched', payload: preferencesData });
    }
  }, [preferencesData]);

  function handleSave() {
    const requestData: Partial<UserPreferencesRequest> = {};

    if (state?.date_format && isValidDateFormat(state?.date_format)) {
      requestData['date_format'] = state.date_format;
    }

    mutation.mutate({
      data: requestData,
    });
  }

  if (userPreferencesError) {
    return (
      <UserSettingsItem
        headerText="Regional Settings"
        icon="globe"
        text="Regional Settings"
        tooltip="Regional Settings"
        tabs={
          <UserSettingsView>
            <ErrorMessage
              titleText="Failed to load your preferences"
              subtitleText="Something went wrong while trying to load your user preferences."
            />
          </UserSettingsView>
        }
      />
    );
  }

  return (
    <UserSettingsItem
      headerText="Regional Settings"
      icon="globe"
      text="Regional Settings"
      tooltip="Regional Settings"
      tabs={
        <UserSettingsView>
          <Form>
            <FormGroup>
              <FormItem labelContent={<Label>Date Format</Label>}>
                <Select
                  value={state?.date_format}
                  onChange={(event) =>
                    dispatch({
                      type: 'fieldChanged',
                      payload: {
                        field: 'date_format',
                        value: event.target.value,
                      },
                    })
                  }
                >
                  {dateFormatChoicesResponse?.data.map((choice) => (
                    <Option key={choice.value} value={choice.value}>
                      {choice.label}
                    </Option>
                  ))}
                </Select>
              </FormItem>
            </FormGroup>

            <FormGroup>
              <Button onClick={handleSave}>Save Settings</Button>
            </FormGroup>
          </Form>
        </UserSettingsView>
      }
    />
  );
}
