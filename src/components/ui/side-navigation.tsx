import { paths } from '@/config/paths';
import { SideNavigation, SideNavigationItem } from '@ui5/webcomponents-react';
import { useNavigate } from 'react-router';

interface SideNavProps {
  collapsed: boolean;
}

function SideNav({ collapsed }: SideNavProps) {
  const navigate = useNavigate();

  return (
    <SideNavigation
      collapsed={collapsed}
      slot="sideContent"
      fixedItems={
        <>
          <SideNavigationItem
            icon="person-placeholder"
            text="Users"
            onClick={() => navigate(paths.app.users.path)}
          />
        </>
      }
    >
      <SideNavigationItem
        icon="home"
        text="Home"
        onClick={() => navigate(paths.app.home.path)}
      />
    </SideNavigation>
  );
}

export default SideNav;
