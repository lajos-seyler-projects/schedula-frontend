import { DynamicPage, DynamicPageTitle, Title } from '@ui5/webcomponents-react';

export default function UsersList() {
  return (
    <DynamicPage
      titleArea={
        <DynamicPageTitle heading={<Title>Users</Title>}></DynamicPageTitle>
      }
    ></DynamicPage>
  );
}
