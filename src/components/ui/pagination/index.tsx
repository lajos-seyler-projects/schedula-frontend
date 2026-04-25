import PageSelector from '@/components/ui/pagination/page-selector';
import PageSizeSelector from '@/components/ui/pagination/page-size-selector';
import { FlexBox } from '@ui5/webcomponents-react';

export interface PaginationProps {
  count: number;
  pageSize: number;
  pageSizeOptions?: number[];
  currentPage: number;
  onPageSizeChange?: (newPageSize: number) => void;
  onPageChange: (newPage: number) => void;
}

export default function Pagination({
  count,
  pageSize,
  pageSizeOptions,
  currentPage,
  onPageSizeChange,
  onPageChange,
}: PaginationProps) {
  if (count <= pageSize) {
    return null;
  }

  const totalPages = Math.ceil(count / pageSize);
  const validCurrentPage = Math.min(currentPage, totalPages);

  if (validCurrentPage !== currentPage) {
    onPageChange(validCurrentPage);
  }

  return (
    <FlexBox
      direction="Row"
      gap={8}
      justifyContent="SpaceBetween"
      alignItems="Center"
    >
      {onPageSizeChange && (
        <PageSizeSelector
          pageSize={pageSize}
          pageSizeOptions={pageSizeOptions}
          onPageSizeChange={onPageSizeChange}
        />
      )}

      <PageSelector
        count={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </FlexBox>
  );
}
