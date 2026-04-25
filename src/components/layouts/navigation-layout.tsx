import AppShellBar from '@/components/ui/shellbar';
import SideNav from '@/components/ui/side-navigation';
import { NavigationLayout } from '@ui5/webcomponents-react';
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
      sideContent={<SideNav collapsed={!isNavigationOpen} />}
    >
      {children}
    </NavigationLayout>
  );
}
