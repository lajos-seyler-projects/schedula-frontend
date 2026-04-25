import { useDefaultColumnPreferences } from '@/features/ui-preferences/api/get-default-column-preferences';
import { useUserColumnPreferences } from '@/features/ui-preferences/api/get-user-column-preferences';
import RenderedCellContent from '@/features/ui-preferences/components/rendered-cell-content';
import { resolveExpression } from '@/features/ui-preferences/utils/resolve-expression';
import { getLongestFieldValues } from '@/utils/get-longest-field-values';
import { UseQueryResult } from '@tanstack/react-query';
import {
  DynamicPage,
  DynamicPageTitle,
  FlexBox,
  Table,
  TableCell,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
  UI5WCSlotsNode,
} from '@ui5/webcomponents-react';
import { PropsWithChildren, useMemo } from 'react';

interface GenericListPageProps<T> extends PropsWithChildren {
  tableId: string;
  dynamicPageTitleProps: {
    heading: UI5WCSlotsNode;
  };
  query?: UseQueryResult<{
    count: number;
    next?: string | null;
    previous?: string | null;
    results: Array<T>;
  }>;
  pagination: React.ReactElement;
}

export default function GenericListPage<T>({
  tableId,
  dynamicPageTitleProps,
  query,
  pagination,
}: GenericListPageProps<T>) {
  const { data: defaultColumnPreferences } = useDefaultColumnPreferences({
    tableId,
  });
  const { data: userColumnPreferences } = useUserColumnPreferences({ tableId });

  const columnPreferences = useMemo(() => {
    if (userColumnPreferences?.length) return userColumnPreferences;
    return defaultColumnPreferences ?? [];
  }, [defaultColumnPreferences, userColumnPreferences]);

  const visibleColumns = useMemo(
    () => columnPreferences.filter((col) => col.is_visible),
    [columnPreferences],
  );

  const tableData = useMemo(() => {
    if (!query?.data) return [];
    return query.data.results.map((item) => {
      const processedItem: Record<string, any> = {};
      const originalData = item as Record<string, any>;
      visibleColumns.forEach(
        (col) =>
          (processedItem[col.key] = resolveExpression(item, col.expression)),
      );
      processedItem['originalData'] = originalData;
      return processedItem;
    });
  }, [query, visibleColumns]);

  const longestFields = useMemo(() => {
    const longestFields = getLongestFieldValues(tableData);

    columnPreferences?.forEach((col) => {
      const key = col.key;
      const labelLength = col.label.length;
      if (longestFields[key] && labelLength > longestFields[key]?.length) {
        longestFields[key] = col.label;
      }
    });

    return longestFields;
  }, [tableData, columnPreferences]);

  return (
    <DynamicPage titleArea={<DynamicPageTitle {...dynamicPageTitleProps} />}>
      <FlexBox direction="Column">
        <Table
          loading={query?.isPending || query?.isFetching || query?.isLoading}
          loadingDelay={0}
          headerRow={
            <TableHeaderRow>
              {visibleColumns.map((col) => (
                <TableHeaderCell
                  key={col.key}
                  minWidth={
                    longestFields[col.key]
                      ? `${longestFields[col.key]?.length}ch`
                      : `${(col.label.length || 0) + 4}ch`
                  }
                >
                  {col.label}
                </TableHeaderCell>
              ))}
            </TableHeaderRow>
          }
        >
          {tableData.map((item, index) => {
            return (
              <TableRow key={index}>
                {visibleColumns.map((col) => (
                  <TableCell key={col.key}>
                    <RenderedCellContent
                      value={item[col.key]}
                      columnKey={col.key}
                    />
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </Table>

        {pagination}
      </FlexBox>
    </DynamicPage>
  );
}
