import {
  IllustratedMessage,
  IllustratedMessagePropTypes,
} from '@ui5/webcomponents-react';

import '@ui5/webcomponents-fiori/dist/illustrations/ErrorScreen.js';

export default function ErrorMessage({
  ...props
}: Omit<IllustratedMessagePropTypes, 'name'>) {
  return <IllustratedMessage name="ErrorScreen" {...props} />;
}
