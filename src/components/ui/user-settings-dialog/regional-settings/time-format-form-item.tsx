import ChoiceSelect from '@/components/form/choice-select';
import { useRegionalSettingsContext } from '@/components/ui/user-settings-dialog/context';
import { useTimeFormatChoices } from '@/features/users/api/get-time-format-choices';
import {
  BusyIndicator,
  FormItem,
  Label,
  MessageStrip,
} from '@ui5/webcomponents-react';

export default function TimeFormatFormItem() {
  const { time_format, setTimeFormat } = useRegionalSettingsContext();

  const {
    data: timeFormatChoicesResponse,
    error,
    isPending,
  } = useTimeFormatChoices();

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
      <ChoiceSelect
        value={time_format}
        onChange={(event) => setTimeFormat(event.target.value)}
        choices={timeFormatChoicesResponse?.data || []}
      />
    );
  }

  return (
    <FormItem labelContent={<Label>Time Format</Label>}>{content}</FormItem>
  );
}
