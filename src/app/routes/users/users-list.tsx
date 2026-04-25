import GenericListPage from '@/components/layouts/generic-list-page';
import Pagination from '@/components/ui/pagination';
import { useUsers } from '@/features/users/api/get-users';
import { Title } from '@ui5/webcomponents-react';
import { useState } from 'react';

export default function UsersList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageSize, setCurrentPageSize] = useState(50);
  const query = useUsers({ page: currentPage, pageSize: currentPageSize });

  return (
    <GenericListPage
      tableId="users"
      dynamicPageTitleProps={{
        heading: <Title>Systems</Title>,
      }}
      query={query}
      pagination={
        <Pagination
          count={query.data?.count || 0}
          pageSize={currentPageSize}
          currentPage={currentPage}
          onPageChange={(newPage) => setCurrentPage(newPage)}
          onPageSizeChange={(newPageSize) => setCurrentPageSize(newPageSize)}
        />
      }
    ></GenericListPage>
  );
}
