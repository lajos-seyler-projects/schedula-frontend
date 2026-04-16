import { useRegionalSettingsContext } from '@/components/ui/user-settings-dialog/context';
import { useTimezoneChoices } from '@/features/users/api/get-timezone-choices';
import {
  BusyIndicator,
  ComboBox,
  ComboBoxItem,
  ComboBoxItemGroup,
  FormItem,
  Label,
  MessageStrip,
} from '@ui5/webcomponents-react';

export default function TimezoneFormItem() {
  const { time_zone, setTimezone } = useRegionalSettingsContext();

  const { data: timezoneChoices, error, isPending } = useTimezoneChoices();

  let regions = Object.keys(timezoneChoices?.data || {});

  let content;

  if (error) {
    content = (
      <MessageStrip design="Negative">
        Failed to load date format choices.
      </MessageStrip>
    );
  } else if (isPending) {
    content = <BusyIndicator active delay={0} />;
  } else {
    content = (
      <ComboBox
        value={time_zone}
        onChange={(event) => setTimezone(event.target.value)}
      >
        {regions.map((region) => {
          const timezones = timezoneChoices.data[region];
          return (
            <ComboBoxItemGroup key={region} headerText={region}>
              {timezones
                .sort((a, b) => {
                  const getOffset = (offset: string) =>
                    parseInt(offset.replace('UTC', ''), 10);
                  return getOffset(a.offset) - getOffset(b.offset);
                })
                .map((timezone) => (
                  <ComboBoxItem
                    key={timezone.value}
                    text={timezone.value}
                    additionalText={timezone.offset}
                  />
                ))}
            </ComboBoxItemGroup>
          );
        })}
      </ComboBox>
    );
  }

  return <FormItem labelContent={<Label>Timezone</Label>}>{content}</FormItem>;
}
