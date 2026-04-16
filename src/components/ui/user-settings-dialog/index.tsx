import AppearanceSettings from '@/components/ui/user-settings-dialog/appearance-settings';
import RegionalSettings from '@/components/ui/user-settings-dialog/regional-settings';
import UserAccountSettings from '@/components/ui/user-settings-dialog/user-account-settings';
import {
  UserSettingsDialog,
  UserSettingsDialogPropTypes,
} from '@ui5/webcomponents-react';

export default function SchedulaUserSettingsDialog({
  ...props
}: UserSettingsDialogPropTypes) {
  return (
    <UserSettingsDialog {...props}>
      <UserAccountSettings />
      <AppearanceSettings />
      <RegionalSettings />
    </UserSettingsDialog>
  );
}
