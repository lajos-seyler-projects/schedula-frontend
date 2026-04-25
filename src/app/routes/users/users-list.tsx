import GenericListPage from '@/components/layouts/generic-list-page';
import Pagination from '@/components/ui/pagination';
import { useUsers } from '@/features/users/api/get-users';
import UsersFilterBar from '@/features/users/components/users-filter-bar';
import { useFilters } from '@/stores/filters-context';
import { FilterVariant } from '@/types/api';
import { Title, VariantManagement } from '@ui5/webcomponents-react';
import { useState } from 'react';

const TABLE_ID = 'users';

export default function UsersList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageSize, setCurrentPageSize] = useState(50);
  const [selectedFilterVariant, setSelectedFilterVariant] =
    useState<FilterVariant | null>(null);

  const { getAppliedTableFilters, loadFromVariant } = useFilters();
  const filters = getAppliedTableFilters(TABLE_ID);
  const query = useUsers({
    page: currentPage,
    pageSize: currentPageSize,
    filters,
  });

  return (
    <GenericListPage
      tableId="users"
      dynamicPageTitleProps={{
        heading: <Title>Systems</Title>,
      }}
      variantManagement={
        <VariantManagement closeOnItemSelect hideSaveAs hideManageVariants />
      }
      selectedFilterVariant={selectedFilterVariant}
      setSelectedFilterVariant={setSelectedFilterVariant}
      filterBar={
        <UsersFilterBar
          restoreFilters={() =>
            loadFromVariant(TABLE_ID, selectedFilterVariant?.filters || {})
          }
        />
      }
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
