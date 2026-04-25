import { Button, FlexBox, Text } from '@ui5/webcomponents-react';

interface PageSelectorProps {
  count: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (newPage: number) => void;
}

export default function PageSelector({
  count,
  pageSize,
  currentPage,
  onPageChange,
}: PageSelectorProps) {
  if (count <= pageSize) return null;

  return (
    <FlexBox direction="Row" gap={8} alignItems="Center">
      <Button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </Button>

      {Array.from({ length: Math.ceil(count / pageSize) }, (_, i) => i + 1).map(
        (page) => {
          if (
            page === 1 ||
            page === Math.ceil(count / pageSize) ||
            Math.abs(page - currentPage) <= 1
          ) {
            return (
              <Button
                key={page}
                design={page === currentPage ? 'Emphasized' : 'Transparent'}
                onClick={() => onPageChange(page)}
              >
                {page}
              </Button>
            );
          } else if (page === currentPage - 2 || page === currentPage + 2) {
            return <Text key={page}>...</Text>;
          }
          return null;
        },
      )}

      <Button
        disabled={currentPage === Math.ceil(count / pageSize)}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>
    </FlexBox>
  );
}
