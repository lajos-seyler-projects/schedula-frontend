import ErrorMessage from '@/components/ui/error-message';
import { useMe } from '@/features/users/api/get-me';
import {
  BusyIndicator,
  FlexBox,
  Form,
  FormGroup,
  FormItem,
  Label,
  Text,
  UserSettingsItem,
  UserSettingsView,
} from '@ui5/webcomponents-react';

export default function UserAccountSettings() {
  const { data: meResponse, error, isPending } = useMe();
  const userInformation = meResponse?.data;
  const fullName = [userInformation?.first_name, userInformation?.last_name]
    .map((v) => v?.trim())
    .filter(Boolean)
    .join(' ');

  let content;

  if (error) {
    content = (
      <ErrorMessage
        titleText="Error loading user data"
        subtitleText="Something went wrong while trying to load your user information."
      />
    );
  } else if (isPending) {
    content = (
      <FlexBox alignItems="Center" justifyContent="Center">
        <BusyIndicator active delay={0} />
      </FlexBox>
    );
  } else {
    content = (
      <Form>
        <FormGroup>
          <FormItem labelContent={<Label>Username</Label>}>
            <Text>{userInformation?.username}</Text>
          </FormItem>

          <FormItem labelContent={<Label>Full Name</Label>}>
            <Text>{fullName}</Text>
          </FormItem>

          <FormItem labelContent={<Label>Email</Label>}>
            <Text>{userInformation?.email}</Text>
          </FormItem>
        </FormGroup>
      </Form>
    );
  }

  return (
    <UserSettingsItem
      headerText="User Account"
      icon="user-settings"
      text="User Account"
      tooltip="User Account"
      tabs={
        <>
          <UserSettingsView>{content}</UserSettingsView>
        </>
      }
    />
  );
}
