import UserSettingsDialog from '@/components/ui/user-settings-dialog';
import { useMe } from '@/features/users/api/get-me';
import { useLogout } from '@/features/users/api/logout';
import { ShellBarProfileClickEventDetail } from '@ui5/webcomponents-fiori/dist/ShellBar.js';
import {
  Avatar,
  Button,
  Icon,
  ShellBar,
  ShellBarDomRef,
  Ui5CustomEvent,
  UserMenu,
  UserMenuAccount,
  UserMenuDomRef,
  UserMenuItem,
} from '@ui5/webcomponents-react';
import { HTMLAttributes, useRef, useState } from 'react';

interface AppShellBarProps extends HTMLAttributes<HTMLElement> {
  onStartButtonClick: () => void;
}

export default function AppShellBar({
  slot,
  onStartButtonClick,
}: AppShellBarProps) {
  const userMenuRef = useRef<UserMenuDomRef | null>(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [userSettingsMenuOpen, setUserSettingsMenuOpen] = useState(false);

  const { data: meResponse } = useMe();
  const logoutMutation = useLogout();
  const userData = meResponse?.data;
  const userFullName = `${userData?.first_name || ''} ${userData?.last_name || ''}`;

  const handleProfileClick = (
    event: Ui5CustomEvent<ShellBarDomRef, ShellBarProfileClickEventDetail>,
  ) => {
    userMenuRef.current!.opener = event.detail.targetRef;
    setUserMenuOpen(true);
  };

  return (
    <>
      <ShellBar
        slot={slot}
        primaryTitle="Schedula"
        startButton={<Button icon="menu" onClick={onStartButtonClick} />}
        profile={
          <Avatar>
            <Icon
              name="person-placeholder"
              mode="Image"
              style={{ margin: '0.35rem' }}
            />
          </Avatar>
        }
        onProfileClick={handleProfileClick}
      />
      <UserMenu
        ref={userMenuRef}
        open={userMenuOpen}
        accounts={
          <UserMenuAccount
            titleText={userFullName}
            subtitleText={userData?.email}
          />
        }
        onSignOutClick={() => logoutMutation.mutate()}
        onClose={() => setUserMenuOpen(false)}
      >
        <UserMenuItem
          data-settings="true"
          icon="action-settings"
          text="Settings"
          onClick={() => setUserSettingsMenuOpen(true)}
        />
      </UserMenu>

      <UserSettingsDialog
        open={userSettingsMenuOpen}
        onBeforeClose={() => setUserSettingsMenuOpen(false)}
      />
    </>
  );
}
