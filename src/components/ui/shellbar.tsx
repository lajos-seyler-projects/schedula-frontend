import { Button, ShellBar } from '@ui5/webcomponents-react';
import { HTMLAttributes } from 'react';

interface AppShellBarProps extends HTMLAttributes<HTMLElement> {
  onStartButtonClick: () => void;
}

export default function AppShellBar({
  slot,
  onStartButtonClick,
}: AppShellBarProps) {
  return (
    <ShellBar
      slot={slot}
      primaryTitle="Schedula"
      startButton={<Button icon="menu" onClick={onStartButtonClick} />}
    />
  );
}
