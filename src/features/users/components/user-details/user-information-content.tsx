import UserPreferenceDatetime from '@/components/ui/user-preference-datetime';
import { UserDetails } from '@/types/api';
import {
  CheckBox,
  Form,
  FormItem,
  Input,
  Label,
  Text,
} from '@ui5/webcomponents-react';
import moment from 'moment-timezone';

interface UserInformationContent {
  userDetails?: UserDetails | null;
  isEditing: boolean;
  handleChange: (field: keyof UserDetails, value: string | boolean) => void;
}

export default function UserInformationContent({
  userDetails,
  isEditing,
  handleChange,
}: UserInformationContent) {
  return (
    <Form>
      <FormItem labelContent={<Label showColon>Username</Label>}>
        {!isEditing && (
          <Text emptyIndicatorMode="On">{userDetails?.username}</Text>
        )}
        {isEditing && (
          <Input
            value={userDetails?.username}
            onInput={(e) => handleChange('username', e.target.value)}
          />
        )}
      </FormItem>

      <FormItem labelContent={<Label showColon>Email</Label>}>
        <Text emptyIndicatorMode="On">{userDetails?.email}</Text>
      </FormItem>

      <FormItem labelContent={<Label showColon>First Name</Label>}>
        {!isEditing && (
          <Text emptyIndicatorMode="On">{userDetails?.first_name}</Text>
        )}
        {isEditing && (
          <Input
            value={userDetails?.first_name}
            onInput={(e) => handleChange('first_name', e.target.value)}
          />
        )}
      </FormItem>

      <FormItem labelContent={<Label showColon>Last Name</Label>}>
        {!isEditing && (
          <Text emptyIndicatorMode="On">{userDetails?.last_name}</Text>
        )}
        {isEditing && (
          <Input
            value={userDetails?.last_name}
            onInput={(e) => handleChange('last_name', e.target.value)}
          />
        )}
      </FormItem>

      <FormItem labelContent={<Label showColon>Is Active</Label>}>
        {!isEditing && (
          <CheckBox checked={userDetails?.is_active} displayOnly />
        )}
        {isEditing && (
          <CheckBox
            checked={userDetails?.is_active}
            onChange={(e) => handleChange('is_active', e.target.checked)}
          />
        )}
      </FormItem>

      <FormItem labelContent={<Label showColon>Is Superuser</Label>}>
        {!isEditing && (
          <CheckBox checked={userDetails?.is_superuser} displayOnly />
        )}
        {isEditing && (
          <CheckBox
            checked={userDetails?.is_superuser}
            onChange={(e) => handleChange('is_superuser', e.target.checked)}
          />
        )}
      </FormItem>

      <FormItem labelContent={<Label showColon>Date Joined</Label>}>
        <Text emptyIndicatorMode="On">
          <UserPreferenceDatetime datetime={moment(userDetails?.date_joined)} />
        </Text>
      </FormItem>

      <FormItem labelContent={<Label showColon>Last Login</Label>}>
        <Text emptyIndicatorMode="On">
          <UserPreferenceDatetime datetime={moment(userDetails?.last_login)} />
        </Text>
      </FormItem>
    </Form>
  );
}
