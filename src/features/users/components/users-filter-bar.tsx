import { useFilterDefinitions } from '@/features/ui-preferences/api/get-filter-definitions';
import { useUpdateUserFilterPreferences } from '@/features/ui-preferences/api/update-user-filter-preferences';
import { transformFilterDefinitions } from '@/features/ui-preferences/utils/transform-filter-defintions';
import { useFilters } from '@/stores/filters-context';
import { OnFiltersDialogSaveEvent } from '@/types/ui5';
import {
  FilterBar,
  FilterBarPropTypes,
  FilterGroupItem,
  Input,
  Option,
  Select,
} from '@ui5/webcomponents-react';

const TABLE_ID = 'users';

interface UsersFilterBarProps extends Omit<FilterBarPropTypes, 'children'> {
  restoreFilters: (tableId: string, filters: Record<string, any>) => void;
}

export default function UsersFilterBar({
  restoreFilters,
  ...props
}: UsersFilterBarProps) {
  const { getTableFilters, setFilter, clearFilters, applyFilters } =
    useFilters();
  const filters = getTableFilters(TABLE_ID);
  const filterDefinitionsQuery = useFilterDefinitions({ tableId: TABLE_ID });
  const updateUserFilterPreferencesMutation = useUpdateUserFilterPreferences({
    table_id: TABLE_ID,
  });
  const filterDefinitions = transformFilterDefinitions(
    filterDefinitionsQuery.data || [],
  );

  function handleFiltersDialogSave(event: OnFiltersDialogSaveEvent) {
    const filterPreferences = Object.keys(filterDefinitions).map((key) => ({
      name: key,
      is_visible: event.detail.selectedFilterKeys.includes(key),
      filter_definition: filterDefinitions[key]?.id,
    }));

    updateUserFilterPreferencesMutation.mutate({
      data: {
        table_id: TABLE_ID,
        filter_preferences: filterPreferences,
      },
    });
  }

  return (
    <FilterBar
      filterContainerWidth="13.125rem"
      {...props}
      hideToolbar
      showGoOnFB
      showClearOnFB
      showRestoreOnFB
      onGo={() => {
        applyFilters(TABLE_ID);
      }}
      onClear={() => clearFilters(TABLE_ID)}
      onReset={() => restoreFilters(TABLE_ID, filters)}
      onFiltersDialogSave={handleFiltersDialogSave}
      activeFiltersCount={
        Object.values(filterDefinitionsQuery?.data || {}).filter(
          (f) => f.is_visible,
        ).length
      }
    >
      <FilterGroupItem
        label={filterDefinitions['username']?.label || 'Username'}
        filterKey="username"
        active={!!filters[filterDefinitions['username']?.query_parameter]}
        required={filterDefinitions['username']?.required}
        hiddenInFilterBar={!filterDefinitions['username']?.is_visible}
      >
        <Input
          value={filters['username']}
          onInput={(e) =>
            setFilter(
              TABLE_ID,
              filterDefinitions['username'].query_parameter,
              e.target.value,
            )
          }
        />
      </FilterGroupItem>

      <FilterGroupItem
        label={filterDefinitions['email']?.label || 'Email'}
        filterKey="email"
        active={!!filters[filterDefinitions['email']?.query_parameter]}
        required={filterDefinitions['email']?.required}
        hiddenInFilterBar={!filterDefinitions['email']?.is_visible}
      >
        <Input
          value={filters['email']}
          onInput={(e) =>
            setFilter(
              TABLE_ID,
              filterDefinitions['email'].query_parameter,
              e.target.value,
            )
          }
        />
      </FilterGroupItem>

      <FilterGroupItem
        label={filterDefinitions['first_name']?.label || 'First Name'}
        filterKey="first_name"
        active={!!filters[filterDefinitions['first_name']?.query_parameter]}
        required={filterDefinitions['first_name']?.required}
        hiddenInFilterBar={!filterDefinitions['first_name']?.is_visible}
      >
        <Input
          value={filters['first_name']}
          onInput={(e) =>
            setFilter(
              TABLE_ID,
              filterDefinitions['first_name'].query_parameter,
              e.target.value,
            )
          }
        />
      </FilterGroupItem>

      <FilterGroupItem
        label={filterDefinitions['last_name']?.label || 'Last Name'}
        filterKey="last_name"
        active={!!filters[filterDefinitions['last_name']?.query_parameter]}
        required={filterDefinitions['last_name']?.required}
        hiddenInFilterBar={!filterDefinitions['last_name']?.is_visible}
      >
        <Input
          value={filters['last_name']}
          onInput={(e) =>
            setFilter(
              TABLE_ID,
              filterDefinitions['last_name'].query_parameter,
              e.target.value,
            )
          }
        />
      </FilterGroupItem>

      <FilterGroupItem
        label={filterDefinitions['is_active']?.label || 'Is Active'}
        filterKey="is_active"
        active={!!filters[filterDefinitions['is_active']?.query_parameter]}
        required={filterDefinitions['is_active']?.required}
        hiddenInFilterBar={!filterDefinitions['is_active']?.is_visible}
      >
        <Select
          value={
            !Object.hasOwn(filters, 'is_active') || filters['is_active'] === ''
              ? 'all'
              : filters['is_active'].toString()
          }
          onChange={(e) =>
            setFilter(
              TABLE_ID,
              filterDefinitions['is_active']?.query_parameter,
              e.target.value === 'all' ? '' : e.target.value,
            )
          }
        >
          <Option value="all">All</Option>
          <Option value="true">Yes</Option>
          <Option value="false">No</Option>
        </Select>
      </FilterGroupItem>

      <FilterGroupItem
        label={filterDefinitions['is_superuser']?.label || 'Is Superuser'}
        filterKey="is_superuser"
        active={!!filters[filterDefinitions['is_superuser']?.query_parameter]}
        required={filterDefinitions['is_superuser']?.required}
        hiddenInFilterBar={!filterDefinitions['is_superuser']?.is_visible}
      >
        <Select
          value={
            !Object.hasOwn(filters, 'is_superuser') ||
            filters['is_superuser'] === ''
              ? 'all'
              : filters['is_superuser'].toString()
          }
          onChange={(e) =>
            setFilter(
              TABLE_ID,
              filterDefinitions['is_superuser']?.query_parameter,
              e.target.value === 'all' ? '' : e.target.value,
            )
          }
        >
          <Option value="all">All</Option>
          <Option value="true">Yes</Option>
          <Option value="false">No</Option>
        </Select>
      </FilterGroupItem>
    </FilterBar>
  );
}
