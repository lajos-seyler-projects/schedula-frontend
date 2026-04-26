import { FlexBox, FlexBoxPropTypes } from '@ui5/webcomponents-react';

export default function FullHeightFlexBox({
  children,
  style,
  ...props
}: FlexBoxPropTypes) {
  return (
    <FlexBox style={{ height: '100%', ...style }} {...props}>
      {children}
    </FlexBox>
  );
}
