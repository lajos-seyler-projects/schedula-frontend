import { useDefaultColumnPreferences } from '@/features/ui-preferences/api/get-default-column-preferences';
import { useFilterVariants } from '@/features/ui-preferences/api/get-filter-variants';
import { useUserColumnPreferences } from '@/features/ui-preferences/api/get-user-column-preferences';
import RenderedCellContent from '@/features/ui-preferences/components/rendered-cell-content';
import { resolveExpression } from '@/features/ui-preferences/utils/resolve-expression';
import { useFilters } from '@/stores/filters-context';
import { FilterVariant } from '@/types/api';
import { getLongestFieldValues } from '@/utils/get-longest-field-values';
import { UseQueryResult } from '@tanstack/react-query';
import {
  DynamicPage,
  DynamicPageHeader,
  DynamicPageTitle,
  FilterBarPropTypes,
  FlexBox,
  ListDomRef,
  Table,
  TableCell,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
  Ui5CustomEvent,
  UI5WCSlotsNode,
  VariantItem,
  VariantItemPropTypes,
  VariantManagementPropTypes,
} from '@ui5/webcomponents-react';
import { ListSelectionChangeEventDetail } from '@ui5/webcomponents/dist/List.js';
import React, {
  cloneElement,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
} from 'react';

interface GenericListPageProps<T> extends PropsWithChildren {
  tableId: string;
  dynamicPageTitleProps: {
    heading: UI5WCSlotsNode;
  };
  variantManagement?: React.ReactElement<VariantManagementPropTypes>;
  selectedFilterVariant: FilterVariant | null;
  setSelectedFilterVariant: React.Dispatch<
    React.SetStateAction<FilterVariant | null>
  >;
  filterBar?: React.ReactElement<FilterBarPropTypes>;
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
  variantManagement,
  selectedFilterVariant,
  setSelectedFilterVariant,
  filterBar,
  query,
  pagination,
}: GenericListPageProps<T>) {
  const filterVariants = useFilterVariants({ tableId });
  const { getTableFilters, loadFromVariant, applyFilters } = useFilters();
  const hasAppliedInitialVariant = useRef(false);
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

  function handleVariantSelect(
    event: Ui5CustomEvent<
      ListDomRef,
      ListSelectionChangeEventDetail & { selectedVariant: VariantItemPropTypes }
    >,
  ) {
    const selectedVariantName = event.detail.selectedVariant.children;
    setSelectedFilterVariant(
      filterVariants.data?.find((v) => v.name === selectedVariantName) || null,
    );
  }

  const variantManagementWithProps = variantManagement
    ? cloneElement(variantManagement, {
        onSelect: handleVariantSelect,

        dirtyState: (() => {
          const variantFilters = selectedFilterVariant?.filters || {};
          const currentFilters = getTableFilters(tableId);

          return (
            JSON.stringify(variantFilters) !== JSON.stringify(currentFilters)
          );
        })(),

        children: filterVariants.data?.map((variant) => (
          <VariantItem
            key={variant.uuid}
            isDefault={variant.is_default}
            selected={variant.uuid === selectedFilterVariant?.uuid}
            global={variant.created_by === null}
            applyAutomatically={variant.execute_on_selection}
            author={
              variant.created_by ? 'Current User' : 'Schedula Administrators'
            }
            readOnly={variant.created_by === null}
            labelReadOnly={variant.created_by === null}
          >
            {variant.name}
          </VariantItem>
        )),
      })
    : null;

  useEffect(() => {
    return () => {
      hasAppliedInitialVariant.current = false;
    };
  }, [tableId]);

  useEffect(() => {
    if (!filterVariants.data?.length) return;

    setSelectedFilterVariant((prev) => {
      if (prev) return prev;
      return (
        filterVariants.data.find((v) => v.is_default) ?? filterVariants.data[0]
      );
    });
  }, [filterVariants.data, setSelectedFilterVariant]);

  useEffect(() => {
    if (!selectedFilterVariant?.name) return;

    loadFromVariant(tableId, selectedFilterVariant.filters);

    if (!hasAppliedInitialVariant.current) {
      applyFilters(tableId);
      hasAppliedInitialVariant.current = true;
    }
  }, [selectedFilterVariant, loadFromVariant, tableId, applyFilters]);

  return (
    <DynamicPage
      titleArea={<DynamicPageTitle {...dynamicPageTitleProps} />}
      headerArea={
        <DynamicPageHeader>
          {variantManagementWithProps}
          {filterBar}
        </DynamicPageHeader>
      }
    >
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
