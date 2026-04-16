import {
  UserSettingsAppearanceView,
  UserSettingsAppearanceViewGroup,
  UserSettingsAppearanceViewItem,
  UserSettingsItem,
} from '@ui5/webcomponents-react';

export default function AppearanceSettings() {
  return (
    <UserSettingsItem
      headerText="Appearance"
      icon="palette"
      text="Appearance"
      tooltip="Appearance"
    >
      <UserSettingsAppearanceView text="Themes">
        <UserSettingsAppearanceViewGroup headerText="SAP Horizon">
          <UserSettingsAppearanceViewItem
            itemKey="sap_horizon"
            text="SAP Morning Horizon"
          />
          <UserSettingsAppearanceViewItem
            itemKey="sap_horizon_dark"
            text="SAP Evening Horizon"
          />
          <UserSettingsAppearanceViewItem
            itemKey="sap_horizon_hcb"
            text="SAP Horizon High Contrast Black"
          />
          <UserSettingsAppearanceViewItem
            itemKey="sap_horizon_hcw"
            text="SAP Horizon High Contrast White"
          />
        </UserSettingsAppearanceViewGroup>
        <UserSettingsAppearanceViewGroup headerText="SAP Quartz">
          <UserSettingsAppearanceViewItem
            itemKey="sap_fiori_3"
            text="SAP Quartz Light"
          />
          <UserSettingsAppearanceViewItem
            itemKey="sap_fiori_3_dark"
            text="SAP Quartz Dark"
          />
          <UserSettingsAppearanceViewItem
            itemKey="sap_fiori_3_hcb"
            text="SAP Quartz High Contrast Black"
          />
          <UserSettingsAppearanceViewItem
            itemKey="sap_fiori_3_hcw"
            text="SAP Quartz High Contrast White"
          />
        </UserSettingsAppearanceViewGroup>
      </UserSettingsAppearanceView>
    </UserSettingsItem>
  );
}
