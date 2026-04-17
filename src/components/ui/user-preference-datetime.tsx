import { useUserPreferences } from '@/features/users/api/get-user-preferences';
import moment from 'moment-timezone';

interface UserPreferenceDatetimeProps {
  datetime?: moment.Moment;
}

export default function UserPreferenceDatetime({
  datetime = moment(),
}: UserPreferenceDatetimeProps) {
  const { data: userPreferencesResponse } = useUserPreferences();
  const preferences = userPreferencesResponse?.data;

  if (!preferences) return datetime.toISOString();

  const momentDate = datetime.tz(preferences.time_zone);
  const timeFormat =
    preferences.time_format_display === '12-hour' ? 'hh:mm:ss A' : 'HH:mm:ss';
  const timezoneText =
    preferences.show_timezone && preferences.time_zone
      ? ` (${preferences.time_zone})`
      : '';

  return `${momentDate.format(`${preferences.date_format_display} ${timeFormat}`)}${timezoneText}`;
}
