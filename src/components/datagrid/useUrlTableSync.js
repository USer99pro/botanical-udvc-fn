/**
 * URL Synchronization for TanStack Table V9 using TanStack Store Atoms
 *
 * Slices the product owns and synchronizes to the URL:
 * - pagination: { pageIndex, pageSize }
 * - sorting: Array<{ id, desc }>
 * - globalFilter: string
 *
 * Transient slices (rowSelection, columnSizing, columnVisibility)
 * remain in internal table store and are NOT pushed to the URL.
 */
import { useEffect, useRef } from 'react';
import { createAtom } from '@tanstack/store';

/**
 * Parses query params from window.location.search
 */
function readUrlState(defaultPageSize = 10) {
  if (typeof window === 'undefined') {
    return {
      pagination: { pageIndex: 0, pageSize: defaultPageSize },
      sorting: [],
      globalFilter: '',
    };
  }

  const params = new URLSearchParams(window.location.search);
  const page = parseInt(params.get('page') || '1', 10);
  const pageSize = parseInt(params.get('size') || String(defaultPageSize), 10);
  const sortField = params.get('sort');
  const sortOrder = params.get('order');
  const search = params.get('q') || '';

  const sorting = sortField
    ? [{ id: sortField, desc: sortOrder === 'desc' }]
    : [];

  return {
    pagination: {
      pageIndex: Math.max(0, page - 1),
      pageSize: pageSize > 0 ? pageSize : defaultPageSize,
    },
    sorting,
    globalFilter: search,
  };
}

/**
 * Custom hook to create external atoms and bind them to the URL
 */
export function useUrlTableSync({ defaultPageSize = 10, enabled = true } = {}) {
  // Stably initialize atoms once from current URL
  const atomsRef = useRef(null);

  if (!atomsRef.current) {
    const initialState = readUrlState(defaultPageSize);
    atomsRef.current = {
      pagination: createAtom(initialState.pagination),
      sorting: createAtom(initialState.sorting),
      globalFilter: createAtom(initialState.globalFilter),
    };
  }

  const { pagination, sorting, globalFilter } = atomsRef.current;

  // Sync atom state to URL query parameters
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const updateUrl = () => {
      const currentParams = new URLSearchParams(window.location.search);
      const pag = pagination.get();
      const srt = sorting.get();
      const flt = globalFilter.get();

      // Page sync (1-based for humans in URL)
      if (pag.pageIndex > 0) {
        currentParams.set('page', String(pag.pageIndex + 1));
      } else {
        currentParams.delete('page');
      }

      if (pag.pageSize !== defaultPageSize) {
        currentParams.set('size', String(pag.pageSize));
      } else {
        currentParams.delete('size');
      }

      // Sort sync
      if (srt && srt.length > 0) {
        currentParams.set('sort', srt[0].id);
        if (srt[0].desc) {
          currentParams.set('order', 'desc');
        } else {
          currentParams.delete('order');
        }
      } else {
        currentParams.delete('sort');
        currentParams.delete('order');
      }

      // Filter search sync
      if (flt && flt.trim()) {
        currentParams.set('q', flt.trim());
      } else {
        currentParams.delete('q');
      }

      const newQuery = currentParams.toString();
      const newUrl = newQuery
        ? `${window.location.pathname}?${newQuery}${window.location.hash}`
        : `${window.location.pathname}${window.location.hash}`;

      // Update URL without triggering a reload
      const currentFullUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      if (newUrl !== currentFullUrl) {
        window.history.replaceState(null, '', newUrl);
      }
    };

    // Subscribe to each external atom for URL synchronization
    const unsubPagination = pagination.subscribe(updateUrl);
    const unsubSorting = sorting.subscribe(updateUrl);
    const unsubFilter = globalFilter.subscribe(updateUrl);

    // Also listen to browser history back/forward
    const handlePopState = () => {
      const urlState = readUrlState(defaultPageSize);
      pagination.set(urlState.pagination);
      sorting.set(urlState.sorting);
      globalFilter.set(urlState.globalFilter);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      unsubPagination.unsubscribe();
      unsubSorting.unsubscribe();
      unsubFilter.unsubscribe();
      window.removeEventListener('popstate', handlePopState);
    };
  }, [enabled, defaultPageSize, pagination, sorting, globalFilter]);

  return {
    atoms: atomsRef.current,
  };
}
