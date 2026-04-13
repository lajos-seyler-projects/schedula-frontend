import AppShellBar from '@/components/ui/shellbar';
import {
  NavigationLayout,
  SideNavigation,
  SideNavigationItem,
} from '@ui5/webcomponents-react';
import { PropsWithChildren, useState } from 'react';

export default function AppLayout({ children }: PropsWithChildren) {
  const [isNavigationOpen, setIsNavigationOpen] = useState(true);

  return (
    <NavigationLayout
      header={
        <AppShellBar
          slot="header"
          onStartButtonClick={() => setIsNavigationOpen((current) => !current)}
        />
      }
      mode="Auto"
      sideContent={
        <SideNavigation collapsed={!isNavigationOpen} slot="sideContent">
          <SideNavigationItem icon="home" text="Home" />
        </SideNavigation>
      }
    >
      {children}
    </NavigationLayout>
  );
}
