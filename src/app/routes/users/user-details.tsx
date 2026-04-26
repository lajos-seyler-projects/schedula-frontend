import Pagination from '@/components/ui/pagination';
import { useUser } from '@/features/users/api/get-user';
import { useUserGroups } from '@/features/users/api/get-user-groups';
import {
  CheckBox,
  Form,
  FormItem,
  Label,
  ObjectPage,
  ObjectPageSection,
  ObjectPageTitle,
  Table,
  TableCell,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
  Text,
  Title,
} from '@ui5/webcomponents-react';
import { useState } from 'react';
import { useParams } from 'react-router';

export default function UserDetailsRoute() {
  const params = useParams();
  const uuid = params.uuid as string;
  const [groupsPage, setGroupsPage] = useState(1);
  const [groupsPageSize, setGroupsPageSize] = useState(10);

  const { data: userResponse } = useUser({ uuid });
  const { data: userGroupsResponse } = useUserGroups({
    uuid,
    page: groupsPage,
    pageSize: groupsPageSize,
  });

  const userDetails = userResponse?.data;
  const fullName =
    `${userDetails?.first_name} ${userDetails?.last_name}`.trim();

  return (
    <ObjectPage
      selectedSectionId="user-information"
      titleArea={
        <ObjectPageTitle
          header={<Title level="H2">{fullName || userDetails?.username}</Title>}
          snappedHeader={
            <Title level="H2">{fullName || userDetails?.username}</Title>
          }
        />
      }
    >
      <ObjectPageSection id="user-information" titleText="User Information">
        <Form>
          <FormItem labelContent={<Label showColon>Username</Label>}>
            <Text emptyIndicatorMode="On">{userDetails?.username}</Text>
          </FormItem>
          <FormItem labelContent={<Label showColon>Email</Label>}>
            <Text emptyIndicatorMode="On">{userDetails?.email}</Text>
          </FormItem>
          <FormItem labelContent={<Label showColon>First Name</Label>}>
            <Text emptyIndicatorMode="On">{userDetails?.first_name}</Text>
          </FormItem>
          <FormItem labelContent={<Label showColon>Last Name</Label>}>
            <Text emptyIndicatorMode="On">{userDetails?.last_name}</Text>
          </FormItem>
          <FormItem labelContent={<Label showColon>Is Active</Label>}>
            <CheckBox checked={userDetails?.is_active} displayOnly />
          </FormItem>
          <FormItem labelContent={<Label showColon>Is Superuser</Label>}>
            <CheckBox checked={userDetails?.is_superuser} displayOnly />
          </FormItem>
        </Form>
      </ObjectPageSection>

      <ObjectPageSection id="groups" titleText="Groups">
        <Table
          headerRow={
            <TableHeaderRow sticky>
              <TableHeaderCell>
                <span>Name</span>
              </TableHeaderCell>
              <TableHeaderCell>
                <span>User Count</span>
              </TableHeaderCell>
              <TableHeaderCell>
                <span>Permission Count</span>
              </TableHeaderCell>
            </TableHeaderRow>
          }
        >
          {userGroupsResponse?.data.results.map((group) => (
            <TableRow key={group.id}>
              <TableCell>{group.name}</TableCell>
              <TableCell>{group.user_count}</TableCell>
              <TableCell>{group.permission_count}</TableCell>
            </TableRow>
          ))}
        </Table>
        <Pagination
          count={userGroupsResponse?.data.count || 0}
          pageSize={groupsPageSize}
          currentPage={groupsPage}
          onPageChange={(newPage) => setGroupsPage(newPage)}
          onPageSizeChange={(newPageSize) => setGroupsPageSize(newPageSize)}
          pageSizeOptions={[10, 25, 50]}
        />
      </ObjectPageSection>
    </ObjectPage>
  );
}
