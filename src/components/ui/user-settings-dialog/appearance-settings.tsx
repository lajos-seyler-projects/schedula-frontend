import ErrorMessage from '@/components/ui/error-message';
import { useFioriThemeChoices } from '@/features/users/api/get-fiori-theme-choices';
import { useUserPreferences } from '@/features/users/api/get-user-preferences';
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

export default function AppearanceSettings() {
  const { data: themesReponse, error, isPending } = useFioriThemeChoices();
  const {
    data: preferencesResponse,
    error: userPreferencesError,
    isPending: userPreferencesIsPending,
  } = useUserPreferences();

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
