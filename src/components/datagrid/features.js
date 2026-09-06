/**
 * TanStack Table V9 Stable Features Configuration
 * 
 * Defines the immutable tableFeatures object with only the feature plugins,
 * create*RowModel slots, and function registries needed by the product.
 * Registered at module scope to avoid re-instantiation across renders.
 */
import {
  tableFeatures,
  rowSortingFeature,
  createSortedRowModel,
  rowPaginationFeature,
  createPaginatedRowModel,
  rowSelectionFeature,
  columnFilteringFeature,
  createFilteredRowModel,
  globalFilteringFeature,
  columnVisibilityFeature,
  columnSizingFeature,
  filterFns,
  sortFns,
} from '@tanstack/react-table';

/**
 * Custom function registries for botanical data search and sorting
 */
const customFilterFns = {
  ...filterFns,
  /**
   * Case-insensitive fuzzy search for Thai & English text
   */
  fuzzySearch: (row, columnId, filterValue) => {
    if (!filterValue) return true;
    const value = row.getValue(columnId);
    if (value == null) return false;
    const targetStr = String(value).toLowerCase().trim();
    const searchStr = String(filterValue).toLowerCase().trim();
    return targetStr.includes(searchStr);
  },
  /**
   * Exact category / zone match filter
   */
  categoryMatch: (row, columnId, filterValue) => {
    if (!filterValue || filterValue === 'all') return true;
    const value = row.getValue(columnId);
    return String(value).toLowerCase() === String(filterValue).toLowerCase();
  },
};

const customSortFns = {
  ...sortFns,
  /**
   * Thai Collator-aware alphanumeric sorting
   */
  thaiAlphanumeric: (rowA, rowB, columnId) => {
    const valA = String(rowA.getValue(columnId) ?? '');
    const valB = String(rowB.getValue(columnId) ?? '');
    return valA.localeCompare(valB, 'th', { numeric: true, sensitivity: 'base' });
  },
};

/**
 * Stable, tree-shaken tableFeatures specification for TanStack Table V9
 */
export const gridFeatures = tableFeatures({
  // Sorting Feature & Row Model Slot
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),

  // Filtering Feature & Row Model Slot
  columnFilteringFeature,
  filteredRowModel: createFilteredRowModel(),
  globalFilteringFeature,

  // Pagination Feature & Row Model Slot
  rowPaginationFeature,
  paginatedRowModel: createPaginatedRowModel(),

  // Selection Feature
  rowSelectionFeature,

  // Column Visibility & Sizing Features
  columnVisibilityFeature,
  columnSizingFeature,

  // Custom Registries
  filterFns: customFilterFns,
  sortFns: customSortFns,
});
