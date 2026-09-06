/**
 * Headless Data Grid hook wrapping TanStack Table V9
 *
 * Provides headless table composition with the stable gridFeatures,
 * external atoms for URL/server-owned state slices, and TanStack Store
 * reactivity.
 */
import { useMemo } from 'react';
import { useTable } from '@tanstack/react-table';
import { gridFeatures } from './features';

const EMPTY_DATA = [];
const EMPTY_COLUMNS = [];

export function useHeadlessDataGrid({
  data = EMPTY_DATA,
  columns = EMPTY_COLUMNS,
  atoms,
  initialState,
  getRowId = (row) => row.id || row.slug,
  enableRowSelection = true,
  enableColumnResizing = true,
  enableSorting = true,
  enableFiltering = true,
  columnResizeMode = 'onChange',
  selector,
} = {}) {
  // Memoize stable table options
  const tableOptions = useMemo(() => {
    const opts = {
      features: gridFeatures,
      data,
      columns,
      getRowId,
      enableRowSelection,
      enableColumnResizing,
      enableSorting,
      enableFiltering,
      columnResizeMode,
      initialState: {
        pagination: { pageIndex: 0, pageSize: 10 },
        columnVisibility: {},
        ...initialState,
      },
    };

    if (atoms) {
      opts.atoms = atoms;
    }

    return opts;
  }, [
    data,
    columns,
    atoms,
    getRowId,
    enableRowSelection,
    enableColumnResizing,
    enableSorting,
    enableFiltering,
    columnResizeMode,
    initialState,
  ]);

  // If a custom selector is provided, only re-render when selected slices change.
  // Otherwise, default useTable selector subscribes to registered slices.
  const table = useTable(tableOptions, selector);

  return table;
}
