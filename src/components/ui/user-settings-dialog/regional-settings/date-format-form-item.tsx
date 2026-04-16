import ChoiceSelect from '@/components/form/choice-select';
import { useRegionalSettingsContext } from '@/components/ui/user-settings-dialog/context';
import { useDateFormatChoices } from '@/features/users/api/get-date-format-choices';
import {
  BusyIndicator,
  FormItem,
  Label,
  MessageStrip,
} from '@ui5/webcomponents-react';

export default function DateFormatFormItem() {
  const { date_format, setDateFormat } = useRegionalSettingsContext();

  const {
    data: dateFormatChoicesResponse,
    error,
    isPending,
  } = useDateFormatChoices();

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
        value={date_format}
        onChange={(event) => setDateFormat(event.target.value)}
        choices={dateFormatChoicesResponse?.data || []}
      />
    );
  }

  return (
    <FormItem labelContent={<Label>Date Format</Label>}>{content}</FormItem>
  );
}
