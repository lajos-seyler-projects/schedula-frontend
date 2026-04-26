import Pagination from '@/components/ui/pagination';
import { PERMISSIONS } from '@/config/permissions';
import { useUser } from '@/features/users/api/get-user';
import { useUserGroups } from '@/features/users/api/get-user-groups';
import { useUpdateUser } from '@/features/users/api/update-user';
import UserInformationContent from '@/features/users/components/user-details/user-information-content';
import { Authorization } from '@/lib/authorization';
import { UserDetails } from '@/types/api';
import {
  Button,
  ObjectPage,
  ObjectPageSection,
  ObjectPageSubSection,
  ObjectPageTitle,
  Table,
  TableCell,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
  Title,
} from '@ui5/webcomponents-react';
import { useState } from 'react';
import { useParams } from 'react-router';

export default function UserDetailsRoute() {
  const params = useParams();
  const uuid = params.uuid as string;
  const [groupsPage, setGroupsPage] = useState(1);
  const [groupsPageSize, setGroupsPageSize] = useState(10);
  const [isUserDetailsEditing, setIsUserDetailsEditing] = useState(false);

  const { data: userResponse } = useUser({ uuid });
  const userDetails = userResponse?.data;
  const [userDraft, setUserDraft] = useState<UserDetails | null>(null);
  const displayed = isUserDetailsEditing ? userDraft : userDetails;

  const updateUserMutation = useUpdateUser({ uuid });

  const { data: userGroupsResponse } = useUserGroups({
    uuid,
    page: groupsPage,
    pageSize: groupsPageSize,
  });

  const fullName =
    `${userDetails?.first_name} ${userDetails?.last_name}`.trim();

  function handleUserDetailsChange(
    field: keyof UserDetails,
    value: string | boolean,
  ) {
    setUserDraft((prev) => {
      if (prev === null) return null;
      return { ...prev, [field]: value };
    });
  }

  function handleUserDetailsEdit() {
    setUserDraft(userDetails || null);
    setIsUserDetailsEditing(true);
  }

  function handleUserDetailsSave() {
    updateUserMutation.mutate(
      {
        uuid,
        data: {
          username: userDraft?.username,
          first_name: userDraft?.first_name,
          last_name: userDraft?.last_name,
          is_active: userDraft?.is_active,
          is_superuser: userDraft?.is_superuser,
        },
      },
      {
        onSuccess: () => {
          setIsUserDetailsEditing(false);
        },
      },
    );
  }

  const handleCancel = () => {
    setIsUserDetailsEditing(false);
    setUserDraft(null);
  };

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
        <ObjectPageSubSection
          id="user-information-subsection"
          titleText="User Information"
          actions={
            <>
              {!isUserDetailsEditing && (
                <Authorization requiredPermissions={[PERMISSIONS.UPDATE_USER]}>
                  <Button design="Emphasized" onClick={handleUserDetailsEdit}>
                    Edit
                  </Button>
                </Authorization>
              )}
              {isUserDetailsEditing && (
                <>
                  <Button design="Emphasized" onClick={handleUserDetailsSave}>
                    Save
                  </Button>
                  <Button onClick={handleCancel}>Cancel</Button>
                </>
              )}
            </>
          }
        >
          <UserInformationContent
            userDetails={displayed}
            isEditing={isUserDetailsEditing}
            handleChange={handleUserDetailsChange}
          />
        </ObjectPageSubSection>
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
