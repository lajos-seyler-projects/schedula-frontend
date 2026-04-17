import { Choice } from '@/types/api';
import {
  Option,
  Select,
  SelectDomRef,
  Ui5CustomEvent,
} from '@ui5/webcomponents-react';
import { SelectChangeEventDetail } from '@ui5/webcomponents/dist/Select.js';

interface ChoiceSelectProps {
  value?: string;
  onChange:
    | ((event: Ui5CustomEvent<SelectDomRef, SelectChangeEventDetail>) => void)
    | undefined;
  choices: Choice[];
}

export default function ChoiceSelect({
  value,
  onChange,
  choices,
}: ChoiceSelectProps) {
  return (
    <Select value={value} onChange={onChange}>
      {choices.map((choice) => (
        <Option key={choice.value} value={choice.value}>
          {choice.label}
        </Option>
      ))}
    </Select>
  );
}
