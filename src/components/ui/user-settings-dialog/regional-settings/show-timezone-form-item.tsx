import { useRegionalSettingsContext } from '@/components/ui/user-settings-dialog/context';
import { FormItem, Label, Switch } from '@ui5/webcomponents-react';

export default function ShowTimezoneFormItem() {
  const { show_timezone, setShowTimezone } = useRegionalSettingsContext();

  return (
    <FormItem labelContent={<Label>Show Timezone</Label>}>
      <Switch
        textOff="No"
        textOn="Yes"
        checked={show_timezone}
        onChange={(event) => setShowTimezone(event.target.checked)}
      />
    </FormItem>
  );
}
