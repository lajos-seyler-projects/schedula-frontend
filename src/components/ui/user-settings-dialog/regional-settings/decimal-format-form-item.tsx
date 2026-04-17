import ChoiceSelect from '@/components/form/choice-select';
import { useRegionalSettingsContext } from '@/components/ui/user-settings-dialog/context';
import { useDecimalFormatChoices } from '@/features/users/api/get-decimal-format-choices';
import {
  BusyIndicator,
  FormItem,
  Label,
  MessageStrip,
} from '@ui5/webcomponents-react';

export default function DecimalFormatFormItem() {
  const { decimal_format, setDecimalFormat } = useRegionalSettingsContext();

  const {
    data: decimalFormatChoicesResponse,
    error,
    isPending,
  } = useDecimalFormatChoices();

  let content;

  if (error) {
    content = (
      <MessageStrip design="Negative">
        Failed to load decimal format choices.
      </MessageStrip>
    );
  } else if (isPending) {
    content = <BusyIndicator active delay={0} />;
  } else {
    content = (
      <ChoiceSelect
        value={decimal_format}
        onChange={(event) => setDecimalFormat(event.target.value)}
        choices={decimalFormatChoicesResponse?.data || []}
      />
    );
  }

  return (
    <FormItem labelContent={<Label>Decimal Format</Label>}>{content}</FormItem>
  );
}
