/**
 * Custom React hooks for the Botanical UDVC API & Fact Data Layer.
 *
 * Each hook returns: { data, loading, error, refetch }
 */

import { useState, useEffect, useCallback } from 'react';
import {
  getPlants,
  getPlantById,
  getCategories,
  getBotanicalFacts,
  getDailyFact,
  globalSearch,
  getDashboardStats,
  getRecentActivity,
  getActivities,
  getDocuments,
  getPersonnel,
  getNews,
  getNewsById,
} from './api';

// ─── Generic hook factory ────────────────────────────────────────────────────

function useApiCall(apiFn, deps = []) {
  const depsKey = JSON.stringify(deps);
  const [trigger, setTrigger] = useState(0);
  const currentKey = `${depsKey}_${trigger}`;

  const [prevKey, setPrevKey] = useState(currentKey);
  const [state, setState] = useState({ data: null, loading: true, error: null });

  if (prevKey !== currentKey) {
    setPrevKey(currentKey);
    setState((prev) => ({ ...prev, loading: true, error: null }));
  }

  const refetch = useCallback(() => {
    setTrigger((t) => t + 1);
  }, []);

  useEffect(() => {
    let cancelled = false;

    Promise.resolve()
      .then(() => apiFn())
      .then((result) => {
        if (!cancelled) {
          if (result?.error) {
            setState({ data: null, loading: false, error: result.error });
          } else {
            setState({ data: result?.data ?? null, loading: false, error: null });
          }
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setState({ data: null, loading: false, error: err.message || 'Error fetching data' });
        }
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentKey]);

  return { data: state.data, loading: state.loading, error: state.error, refetch };
}

// ─── Plants ───────────────────────────────────────────────────────────────────

/**
 * Hook to fetch a paginated/filtered list of plants.
 */
export function usePlants({ page = 1, limit = 12, search = '', category = '' } = {}) {
  return useApiCall(() => getPlants({ page, limit, search, category }), [
    page,
    limit,
    search,
    category,
  ]);
}

/**
 * Hook to fetch a single plant by ID or slug.
 */
export function usePlant(idOrSlug) {
  return useApiCall(() => getPlantById(idOrSlug), [idOrSlug]);
}

// ─── Categories ───────────────────────────────────────────────────────────────

/**
 * Hook to fetch all plant categories.
 */
export function useCategories() {
  return useApiCall(getCategories, []);
}

// ─── Botanical Facts ──────────────────────────────────────────────────────────

/**
 * Hook to fetch all botanical facts.
 */
export function useBotanicalFacts() {
  return useApiCall(getBotanicalFacts, []);
}

/**
 * Hook to fetch the daily botanical fact.
 */
export function useDailyFact() {
  return useApiCall(getDailyFact, []);
}

// ─── Search ───────────────────────────────────────────────────────────────────

/**
 * Hook for live / debounced global search.
 */
export function useSearch(query, { minChars = 1, limit = 10 } = {}) {
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const trimmed = query ? query.trim() : '';
  const isValid = trimmed.length >= minChars;

  useEffect(() => {
    if (!isValid) {
      return;
    }

    let cancelled = false;
    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const result = await globalSearch(trimmed, { limit });
        if (!cancelled) {
          if (result.error) {
            setError(result.error);
          } else {
            setSearchResult(result.data);
            setError(null);
          }
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }, 200);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [trimmed, isValid, limit]);

  return {
    data: isValid ? searchResult : null,
    loading: isValid ? loading : false,
    error: isValid ? error : null,
  };
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

/**
 * Hook to fetch dashboard statistics summary.
 */
export function useDashboardStats() {
  return useApiCall(getDashboardStats, []);
}

/**
 * Hook to fetch recent activity feed.
 */
export function useRecentActivity({ limit = 10 } = {}) {
  return useApiCall(() => getRecentActivity({ limit }), [limit]);
}

// ─── Activities / News ────────────────────────────────────────────────────────

export function useActivities({ page = 1, limit = 9 } = {}) {
  return useApiCall(() => getActivities({ page, limit }), [page, limit]);
}

// ─── Documents ────────────────────────────────────────────────────────────────

export function useDocuments({ category = '' } = {}) {
  return useApiCall(() => getDocuments({ category }), [category]);
}

// ─── Personnel ────────────────────────────────────────────────────────────────

export function usePersonnel() {
  return useApiCall(getPersonnel, []);
}

// ─── News & Video Media ───────────────────────────────────────────────────────

/**
 * Hook to fetch news list with filtering (media_type, aspect_ratio, category, search, featured).
 */
export function useNews(params = {}) {
  return useApiCall(() => getNews(params), [
    params.page,
    params.limit,
    params.search,
    params.category,
    params.media_type,
    params.aspect_ratio,
    params.featured,
  ]);
}

/**
 * Hook to fetch a single news item by ID or slug.
 */
export function useNewsItem(idOrSlug) {
  return useApiCall(() => getNewsById(idOrSlug), [idOrSlug]);
}
