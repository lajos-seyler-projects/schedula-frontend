import UserPreferenceDatetime from '@/components/ui/user-preference-datetime';
import { CheckBox, ExpandableText } from '@ui5/webcomponents-react';
import moment from 'moment-timezone';

interface RenderedCellContentProps {
  columnKey: string;
  value: any;
}

export default function RenderedCellContent({
  value,
}: RenderedCellContentProps) {
  switch (typeof value) {
    case 'number':
      return value;
    case 'boolean':
      return (
        <CheckBox displayOnly checked={value} text={value ? 'Yes' : 'No'} />
      );
    default:
      if (
        value &&
        typeof value === 'string' &&
        moment(value, moment.ISO_8601, true).isValid()
      ) {
        return <UserPreferenceDatetime datetime={moment(value)} />;
      }
      return (
        <ExpandableText
          emptyIndicatorMode="On"
          maxCharacters={70}
          overflowMode="Popover"
          text={value}
        />
      );
  }
}
