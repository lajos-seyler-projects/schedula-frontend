import { FlexBox, Option, Select, Text } from '@ui5/webcomponents-react';

interface PageSizeSelectorProps {
  pageSize: number;
  onPageSizeChange: (newPageSize: number) => void;
  pageSizeOptions?: number[];
}

export default function PageSizeSelector({
  pageSize,
  pageSizeOptions = [10, 25, 50, 100],
  onPageSizeChange,
}: PageSizeSelectorProps) {
  return (
    <FlexBox direction="Row" gap={8} alignItems="Center">
      <Select
        value={pageSize.toString()}
        onChange={(e) => onPageSizeChange(Number(e.target.value))}
        style={{ width: '10ch' }}
      >
        {pageSizeOptions.map((size) => (
          <Option key={size}>{size}</Option>
        ))}
      </Select>
      <Text>entries per page</Text>
    </FlexBox>
  );
}
