import ErrorMessage from '@/components/ui/error-message';
import { useFioriThemeChoices } from '@/features/users/api/get-fiori-theme-choices';
import { useUserPreferences } from '@/features/users/api/get-user-preferences';
import { useUpdateUserPreferences } from '@/features/users/api/update-user-preferences';
import { makeEnumGuard } from '@/lib/utils';
import { FioriThemeEnum } from '@/types/api';
import {
  BusyIndicator,
  FlexBox,
  UserSettingsAppearanceView,
  UserSettingsAppearanceViewItem,
  UserSettingsItem,
} from '@ui5/webcomponents-react';
import styled from 'styled-components';

const StyledFlexBox = styled(FlexBox)`
  min-height: 200px;
`;

const isFioriTheme = makeEnumGuard(FioriThemeEnum);

export default function AppearanceSettings() {
  const { data: themesReponse, error, isPending } = useFioriThemeChoices();
  const {
    data: preferencesResponse,
    error: userPreferencesError,
    isPending: userPreferencesIsPending,
  } = useUserPreferences();

  const mutation = useUpdateUserPreferences();

  function handleOnAppearanceClick(fioriTheme: string) {
    if (!isFioriTheme(fioriTheme)) return;
    mutation.mutate({ data: { fiori_theme: fioriTheme } });
  }

  let content;

  if (error || userPreferencesError) {
    content = (
      <ErrorMessage
        titleText="Error loading themes"
        subtitleText="Something went wrong while trying to load theme options."
      />
    );
  } else if (isPending || userPreferencesIsPending) {
    content = (
      <StyledFlexBox alignItems="Center" justifyContent="Center">
        <BusyIndicator active delay={0} />
      </StyledFlexBox>
    );
  } else {
    content = (
      <>
        {themesReponse?.data.map((choice) => (
          <UserSettingsAppearanceViewItem
            itemKey={choice.value}
            text={choice.label}
            selected={choice.value === preferencesResponse?.data.fiori_theme}
            onClick={() => handleOnAppearanceClick(choice.value)}
          />
        ))}
      </>
    );
  }

  return (
    <UserSettingsItem
      headerText="Appearance"
      icon="palette"
      text="Appearance"
      tooltip="Appearance"
    >
      <UserSettingsAppearanceView text="Themes">
        {content}
      </UserSettingsAppearanceView>
    </UserSettingsItem>
  );
}
