import ErrorMessage from '@/components/ui/error-message';
import { useRegionalSettingsContext } from '@/components/ui/user-settings-dialog/context';
import DateFormatFormItem from '@/components/ui/user-settings-dialog/regional-settings/date-format-form-item';
import DecimalFormatFormItem from '@/components/ui/user-settings-dialog/regional-settings/decimal-format-form-item';
import { useUserPreferences } from '@/features/users/api/get-user-preferences';
import { useUpdateUserPreferences } from '@/features/users/api/update-user-preferences';
import { makeEnumGuard } from '@/lib/utils';
import {
  DateFormatEnum,
  DecimalFormatEnum,
  UserPreferencesRequest,
} from '@/types/api';
import {
  Button,
  Form,
  FormGroup,
  UserSettingsItem,
  UserSettingsView,
} from '@ui5/webcomponents-react';
import { useEffect } from 'react';

const isValidDateFormat = makeEnumGuard(DateFormatEnum);
const isValidDecimalFormat = makeEnumGuard(DecimalFormatEnum);

export default function RegionalSettings() {
  const {
    data: preferencesResponse,
    error: userPreferencesError,
    isPending: userPreferencesIsPending,
  } = useUserPreferences();

  const preferencesData = preferencesResponse?.data;

  const { date_format, decimal_format, dispatch } =
    useRegionalSettingsContext();

  const mutation = useUpdateUserPreferences();

  useEffect(() => {
    if (preferencesData) {
      dispatch({ type: 'preferencesFetched', payload: preferencesData });
    }
  }, [preferencesData]);

  function handleSave() {
    const requestData: Partial<UserPreferencesRequest> = {};

    if (date_format && isValidDateFormat(date_format)) {
      requestData['date_format'] = date_format;
    }

    if (decimal_format && isValidDecimalFormat(decimal_format)) {
      requestData['decimal_format'] = decimal_format;
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
              <DateFormatFormItem />
              <DecimalFormatFormItem />
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
