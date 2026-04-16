import ErrorMessage from '@/components/ui/error-message';
import { useRegionalSettingsContext } from '@/components/ui/user-settings-dialog/context';
import DateFormatFormItem from '@/components/ui/user-settings-dialog/regional-settings/date-format-form-item';
import DecimalFormatFormItem from '@/components/ui/user-settings-dialog/regional-settings/decimal-format-form-item';
import TimeFormatFormItem from '@/components/ui/user-settings-dialog/regional-settings/time-format-form-item';
import TimezoneFormItem from '@/components/ui/user-settings-dialog/regional-settings/timezone-form-item.tsx';
import { useUserPreferences } from '@/features/users/api/get-user-preferences';
import { useUpdateUserPreferences } from '@/features/users/api/update-user-preferences';
import { makeEnumGuard } from '@/lib/utils';
import {
  DateFormatEnum,
  DecimalFormatEnum,
  TimeFormatEnum,
  UserPreferencesRequest,
} from '@/types/api';
import {
  BusyIndicator,
  Button,
  Form,
  FormGroup,
  UserSettingsItem,
  UserSettingsView,
} from '@ui5/webcomponents-react';
import { useEffect } from 'react';

const isValidDateFormat = makeEnumGuard(DateFormatEnum);
const isValidDecimalFormat = makeEnumGuard(DecimalFormatEnum);
const isValidTimeFormat = makeEnumGuard(TimeFormatEnum);

export default function RegionalSettings() {
  const {
    data: preferencesResponse,
    error: userPreferencesError,
    isPending: userPreferencesIsPending,
  } = useUserPreferences();

  const preferencesData = preferencesResponse?.data;

  const { date_format, decimal_format, time_format, time_zone, dispatch } =
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

    if (time_format && isValidTimeFormat(time_format)) {
      requestData['time_format'] = time_format;
    }

    if (time_zone) {
      requestData['time_zone'] = time_zone;
    }

    mutation.mutate({
      data: requestData,
    });
  }

  let content;

  if (userPreferencesError) {
    content = (
      <ErrorMessage
        titleText="Failed to load your preferences"
        subtitleText="Something went wrong while trying to load your user preferences."
      />
    );
  } else if (userPreferencesIsPending) {
    content = <BusyIndicator active delay={0} />;
  } else {
    content = (
      <Form>
        <FormGroup>
          <DecimalFormatFormItem />
          <DateFormatFormItem />
          <TimeFormatFormItem />
          <TimezoneFormItem />
        </FormGroup>

        <FormGroup>
          <Button onClick={handleSave}>Save Settings</Button>
        </FormGroup>
      </Form>
    );
  }

  return (
    <UserSettingsItem
      headerText="Regional Settings"
      icon="globe"
      text="Regional Settings"
      tooltip="Regional Settings"
      tabs={<UserSettingsView>{content}</UserSettingsView>}
    />
  );
}
