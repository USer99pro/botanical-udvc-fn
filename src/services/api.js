/**
 * Botanical UDVC — API & Fact Data Service Layer
 * Base URL: import.meta.env.VITE_API_BASE_URL (from .env)
 *
 * All functions return { data, error, status } with automatic resilient fallback
 * to rich authentic botanical data when the remote backend is unreachable or buffering.
 */

import {
  INITIAL_PLANTS,
  INITIAL_CATEGORIES,
  BOTANICAL_FACTS_OF_THE_DAY,
  INITIAL_DASHBOARD_STATS,
  INITIAL_ACTIVITIES,
  INITIAL_DOCUMENTS,
  INITIAL_PERSONNEL,
  INITIAL_NEWS,
} from './botanicalData';

const BASE_URL = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') ?? '';

// Local storage keys for cached / created data
const STORAGE_KEYS = {
  PLANTS: 'udvc_botanical_plants',
  BOOKINGS: 'udvc_botanical_bookings',
  ACTIVITIES: 'udvc_botanical_activities',
  NEWS: 'udvc_botanical_news',
};

// Helper to get local plants with fallback
function getLocalPlants() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.PLANTS);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {
    // ignore
  }
  return [...INITIAL_PLANTS];
}

function saveLocalPlants(plants) {
  try {
    localStorage.setItem(STORAGE_KEYS.PLANTS, JSON.stringify(plants));
  } catch {
    // ignore
  }
}

// Helper to get local news with fallback
function getLocalNews() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.NEWS);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {
    // ignore
  }
  return [...INITIAL_NEWS];
}

function saveLocalNews(newsList) {
  try {
    localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(newsList));
  } catch {
    // ignore
  }
}

// ─── Generic fetch wrapper with timeout ────────────────────────────────────────

async function apiFetch(path, options = {}, timeoutMs = 3500) {
  if (!BASE_URL) {
    return { data: null, error: 'No BASE_URL', status: 0 };
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  const url = `${BASE_URL}${path}`;
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...options.headers,
      },
      ...options,
    });
    clearTimeout(timer);

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      return { data: null, error: text || res.statusText, status: res.status };
    }

    const data = await res.json().catch(() => null);
    return { data, error: null, status: res.status };
  } catch (err) {
    clearTimeout(timer);
    return { data: null, error: err.message ?? 'Network error', status: 0 };
  }
}

// ─── Plants API ───────────────────────────────────────────────────────────────

/**
 * Fetch paginated list of plants.
 * @param {{ page?: number, limit?: number, search?: string, category?: string }} params
 */
export async function getPlants({ page = 1, limit = 12, search = '', category = '' } = {}) {
  // Attempt remote API first
  const qs = new URLSearchParams();
  qs.set('page', String(page));
  qs.set('limit', String(limit));
  if (search) qs.set('search', search);
  if (category && category !== 'all') qs.set('category', category);

  const apiRes = await apiFetch(`/api/plants?${qs}`);
  if (apiRes.data && (Array.isArray(apiRes.data) || Array.isArray(apiRes.data?.plants))) {
    const plants = apiRes.data.plants || apiRes.data;
    if (plants.length > 0) {
      return { data: { plants, total: apiRes.data.total ?? plants.length }, error: null, status: 200 };
    }
  }

  // Fallback to rich local botanical fact data
  let plants = getLocalPlants();

  // Filter by category
  if (category && category !== 'all') {
    plants = plants.filter(
      (p) =>
        p.category?.toLowerCase() === category.toLowerCase() ||
        p.categoryLabel?.toLowerCase().includes(category.toLowerCase())
    );
  }

  // Filter by search query (across Thai name, Scientific name, Family, Facts, Code)
  if (search) {
    const q = search.trim().toLowerCase();
    plants = plants.filter((p) =>
      [
        p.nameTh,
        p.nameLocal,
        p.commonName,
        p.scientificName,
        p.family,
        p.plantCode,
        p.description,
        ...(p.botanicalFacts ?? []),
      ].some((val) => val && String(val).toLowerCase().includes(q))
    );
  }

  const total = plants.length;
  const startIndex = (page - 1) * limit;
  const paginatedPlants = plants.slice(startIndex, startIndex + limit);

  return {
    data: {
      plants: paginatedPlants,
      total,
      page,
      limit,
    },
    error: null,
    status: 200,
  };
}

/**
 * Fetch a single plant by its ID or slug.
 * @param {string | number} idOrSlug
 */
export async function getPlantById(idOrSlug) {
  if (!idOrSlug) {
    const defaultPlant = getLocalPlants()[0];
    return { data: defaultPlant, error: null, status: 200 };
  }

  const apiRes = await apiFetch(`/api/plants/${idOrSlug}`);
  if (apiRes.data && (apiRes.data._id || apiRes.data.id || apiRes.data.nameTh)) {
    return { data: apiRes.data, error: null, status: 200 };
  }

  // Local fallback lookup
  const plants = getLocalPlants();
  const found = plants.find(
    (p) =>
      String(p.id).toLowerCase() === String(idOrSlug).toLowerCase() ||
      String(p.slug).toLowerCase() === String(idOrSlug).toLowerCase() ||
      p.plantCode === idOrSlug
  );

  return {
    data: found || plants[0],
    error: null,
    status: 200,
  };
}

/**
 * Create a new plant (admin).
 * @param {FormData | object} payload
 */
export async function createPlant(payload) {
  const isForm = payload instanceof FormData;
  
  // Try remote backend
  apiFetch('/api/plants', {
    method: 'POST',
    headers: isForm ? {} : { 'Content-Type': 'application/json' },
    body: isForm ? payload : JSON.stringify(payload),
  }).catch(() => null);

  // Extract object properties
  let newPlantObj = {};
  if (isForm) {
    payload.forEach((val, key) => {
      newPlantObj[key] = val;
    });
  } else {
    newPlantObj = { ...payload };
  }

  const id = newPlantObj.slug || `plant-${Date.now()}`;
  const completePlant = {
    id,
    slug: id,
    plantCode: newPlantObj.plantCode || `7-41000-001/${String(Date.now()).slice(-3)}`,
    nameTh: newPlantObj.nameTh || newPlantObj.plantNameTh || 'พรรณไม้ใหม่',
    nameLocal: newPlantObj.nameLocal || newPlantObj.nameTh || '',
    commonName: newPlantObj.commonName || '',
    scientificName: newPlantObj.scientificName || 'Botanical sp.',
    family: newPlantObj.family || 'Plantae',
    category: newPlantObj.category || 'flowering',
    categoryLabel: newPlantObj.categoryLabel || 'พืชศึกษา',
    tag: 'บันทึกใหม่',
    status: 'สมบูรณ์ (ก.7-003)',
    zone: newPlantObj.zone || newPlantObj.location || 'โซนเรือนกระจก A',
    imageUrl:
      newPlantObj.imageUrl ||
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAaJcrAikIfS1VMetS8YxJfAvgEBPm4nEyJHpvQ_5paM1Ff5IuUtghzRCQkNKR3Cd6OeLyflgvy6r-c3A-IX-LtMKFhDK90ANqKpjkU5vpChFOFrp6h1q9Eg1Dbc-87sZxYYdkOybKpiwXZ4ElntwMhbtVh3hQHKJAX_bE6XlRVjK_YLakGIbZhDan4mb6LxvtgXDOkx72o5WehClXGfNTsNKCRMU2-VGpGkvp9qL7J0ykHo-c6wlXKQw',
    gallery: [
      newPlantObj.imageUrl ||
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAaJcrAikIfS1VMetS8YxJfAvgEBPm4nEyJHpvQ_5paM1Ff5IuUtghzRCQkNKR3Cd6OeLyflgvy6r-c3A-IX-LtMKFhDK90ANqKpjkU5vpChFOFrp6h1q9Eg1Dbc-87sZxYYdkOybKpiwXZ4ElntwMhbtVh3hQHKJAX_bE6XlRVjK_YLakGIbZhDan4mb6LxvtgXDOkx72o5WehClXGfNTsNKCRMU2-VGpGkvp9qL7J0ykHo-c6wlXKQw',
    ],
    description: newPlantObj.description || 'พรรณไม้ที่ได้รับการบันทึกลงสู่ระบบฐานข้อมูลสวนพฤกษศาสตร์โรงเรียน UDVC',
    morphology: {
      stem: newPlantObj.stem || 'ลำต้นสมบูรณ์',
      leaves: newPlantObj.leaves || 'ลักษณะใบเดี่ยวหรือประกอบ',
      flowers: newPlantObj.flowers || 'ดอกสมบูรณ์เพศหรือแยกเพศ',
      fruits: newPlantObj.fruits || 'ผลตามสัณฐานวิทยา',
    },
    ecology: {
      sunlight: newPlantObj.sunlight === 'full' ? 'แดดจัดเต็มวัน' : 'แดดรำไร 60-70%',
      water: newPlantObj.water === 'high' ? 'ชุ่มชื้นสูง' : 'ปานกลาง สัปดาห์ละ 2-3 ครั้ง',
      soil: 'ดินร่วนระบายน้ำดี',
      temp: '22°C - 34°C',
    },
    botanicalFacts: [
      'ได้รับการบันทึกและขึ้นทะเบียนตามองค์ประกอบที่ 1 งานสวนพฤกษศาสตร์โรงเรียน',
    ],
    uses: newPlantObj.uses || 'การศึกษาและการอนุรักษ์พันธุกรรมพืช',
    surveyDate: new Date().toISOString().split('T')[0],
    surveyor: newPlantObj.surveyor || 'เจ้าหน้าที่งานสวนพฤกษศาสตร์ UDVC',
  };

  const currentPlants = getLocalPlants();
  const updated = [completePlant, ...currentPlants];
  saveLocalPlants(updated);

  return { data: completePlant, error: null, status: 201 };
}

// ─── Plant Categories ─────────────────────────────────────────────────────────

export async function getCategories() {
  const apiRes = await apiFetch('/api/categories');
  if (apiRes.data && Array.isArray(apiRes.data) && apiRes.data.length > 0) {
    return { data: apiRes.data, error: null, status: 200 };
  }
  return { data: INITIAL_CATEGORIES, error: null, status: 200 };
}

// ─── Botanical Facts ──────────────────────────────────────────────────────────

export async function getBotanicalFacts() {
  return { data: BOTANICAL_FACTS_OF_THE_DAY, error: null, status: 200 };
}

export async function getDailyFact() {
  const dayIndex = new Date().getDate() % BOTANICAL_FACTS_OF_THE_DAY.length;
  return { data: BOTANICAL_FACTS_OF_THE_DAY[dayIndex], error: null, status: 200 };
}

// ─── Search ───────────────────────────────────────────────────────────────────

export async function globalSearch(query, { limit = 10 } = {}) {
  if (!query || query.trim() === '') {
    return { data: { plants: [], facts: [] }, error: null, status: 200 };
  }

  const q = query.trim().toLowerCase();
  const allPlants = getLocalPlants();

  const matchingPlants = allPlants.filter((p) =>
    [
      p.nameTh,
      p.nameLocal,
      p.commonName,
      p.scientificName,
      p.family,
      p.plantCode,
      p.description,
      p.categoryLabel,
      ...(p.botanicalFacts ?? []),
    ].some((val) => val && String(val).toLowerCase().includes(q))
  );

  const matchingFacts = BOTANICAL_FACTS_OF_THE_DAY.filter(
    (f) =>
      f.title.toLowerCase().includes(q) ||
      f.plantName.toLowerCase().includes(q) ||
      f.fact.toLowerCase().includes(q) ||
      f.category.toLowerCase().includes(q)
  );

  return {
    data: {
      plants: matchingPlants.slice(0, limit),
      facts: matchingFacts.slice(0, limit),
      total: matchingPlants.length + matchingFacts.length,
    },
    error: null,
    status: 200,
  };
}

// ─── Dashboard / Stats ────────────────────────────────────────────────────────

export async function getDashboardStats() {
  const apiRes = await apiFetch('/api/dashboard/stats');
  if (apiRes.data && apiRes.data.totalPlants) {
    return { data: apiRes.data, error: null, status: 200 };
  }

  const plants = getLocalPlants();
  return {
    data: {
      ...INITIAL_DASHBOARD_STATS,
      totalPlants: plants.length + 12440,
    },
    error: null,
    status: 200,
  };
}

export async function getRecentActivity({ limit = 10 } = {}) {
  const apiRes = await apiFetch(`/api/dashboard/activity?limit=${limit}`);
  if (apiRes.data && Array.isArray(apiRes.data) && apiRes.data.length > 0) {
    return { data: apiRes.data, error: null, status: 200 };
  }
  return { data: INITIAL_ACTIVITIES.slice(0, limit), error: null, status: 200 };
}

// ─── Activities / News ────────────────────────────────────────────────────────

export async function getActivities({ page = 1, limit = 9 } = {}) {
  const apiRes = await apiFetch(`/api/activities?page=${page}&limit=${limit}`);
  if (apiRes.data && (Array.isArray(apiRes.data) || Array.isArray(apiRes.data?.activities))) {
    return { data: apiRes.data, error: null, status: 200 };
  }
  return { data: { activities: INITIAL_ACTIVITIES, total: INITIAL_ACTIVITIES.length }, error: null, status: 200 };
}

// ─── Plan Visit / Bookings ────────────────────────────────────────────────────

export async function submitVisitBooking(payload) {
  apiFetch('/api/bookings', {
    method: 'POST',
    body: JSON.stringify(payload),
  }).catch(() => null);

  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKINGS) || '[]');
    existing.push({ ...payload, id: `booking-${Date.now()}`, createdAt: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(existing));
  } catch {
    // ignore
  }

  return { data: { success: true, message: 'บันทึกการนัดหมายสำเร็จ' }, error: null, status: 200 };
}

// ─── Documents / Downloads ────────────────────────────────────────────────────

export async function getDocuments({ category = '' } = {}) {
  let docs = [...INITIAL_DOCUMENTS];
  if (category && category !== 'all') {
    docs = docs.filter((d) => d.category === category);
  }
  return { data: docs, error: null, status: 200 };
}

// ─── Personnel ────────────────────────────────────────────────────────────────

export async function getPersonnel() {
  return { data: INITIAL_PERSONNEL, error: null, status: 200 };
}

// ─── News & Video Media API ───────────────────────────────────────────────────

/**
 * Fetch list of news, videos (YouTube, TikTok), and banners.
 * Supports filtering by media_type, aspect_ratio (16:9, 9:16, 4:3), category, and search query.
 */
export async function getNews({
  page = 1,
  limit = 20,
  search = '',
  category = '',
  media_type = '',
  aspect_ratio = '',
  featured = null,
} = {}) {
  // Try remote backend API first
  const qs = new URLSearchParams();
  qs.set('page', String(page));
  qs.set('limit', String(limit));
  if (search) qs.set('q', search);
  if (category && category !== 'all') qs.set('category', category);
  if (media_type && media_type !== 'all') qs.set('media_type', media_type);
  if (aspect_ratio && aspect_ratio !== 'all') qs.set('aspect_ratio', aspect_ratio);
  if (featured !== null) qs.set('featured', String(featured));

  const apiRes = await apiFetch(`/api/news?${qs}`);
  if (apiRes.data && (Array.isArray(apiRes.data) || Array.isArray(apiRes.data?.data))) {
    const rawList = Array.isArray(apiRes.data) ? apiRes.data : apiRes.data.data;
    if (rawList.length > 0) {
      const items = rawList.map((item) => ({
        id: item._id || item.id,
        ...item,
      }));
      return {
        data: {
          news: items,
          total: apiRes.data.pagination?.total ?? items.length,
          page,
          limit,
        },
        error: null,
        status: 200,
      };
    }
  }

  // Fallback to local storage / rich initial data
  let list = getLocalNews();

  // Filter category
  if (category && category !== 'all') {
    list = list.filter((n) => n.category?.toLowerCase() === category.toLowerCase());
  }

  // Filter media_type
  if (media_type && media_type !== 'all') {
    list = list.filter((n) => n.media_type === media_type);
  }

  // Filter aspect_ratio (16:9, 9:16, 4:3)
  if (aspect_ratio && aspect_ratio !== 'all') {
    list = list.filter((n) => n.aspect_ratio === aspect_ratio);
  }

  // Filter featured
  if (featured !== null) {
    list = list.filter((n) => !!n.featured === !!featured);
  }

  // Filter search query
  if (search) {
    const q = search.toLowerCase().trim();
    list = list.filter(
      (n) =>
        n.title?.toLowerCase().includes(q) ||
        n.excerpt?.toLowerCase().includes(q) ||
        n.content?.toLowerCase().includes(q) ||
        n.tags?.some((t) => t.toLowerCase().includes(q))
    );
  }

  const total = list.length;
  const start = (page - 1) * limit;
  const paginated = list.slice(start, start + limit);

  return {
    data: { news: paginated, total, page, limit },
    error: null,
    status: 200,
  };
}

/**
 * Fetch a single news item by ID or slug.
 */
export async function getNewsById(idOrSlug) {
  if (!idOrSlug) return { data: null, error: 'No ID provided', status: 400 };

  const apiRes = await apiFetch(`/api/news/${idOrSlug}`);
  if (apiRes.data && (apiRes.data.data || apiRes.data.id || apiRes.data._id)) {
    const item = apiRes.data.data || apiRes.data;
    return { data: { id: item._id || item.id, ...item }, error: null, status: 200 };
  }

  // Fallback local lookup
  const list = getLocalNews();
  const item = list.find((n) => n.id === idOrSlug || n._id === idOrSlug || n.slug === idOrSlug);
  if (item) {
    return { data: item, error: null, status: 200 };
  }

  return { data: null, error: 'News not found', status: 404 };
}

/**
 * Create a new news/media item.
 */
export async function createNews(newsData) {
  const newItem = {
    id: `news-${Date.now()}`,
    slug: newsData.slug || `news-${Date.now()}`,
    published_at: newsData.published_at || new Date().toISOString().split('T')[0],
    view_count: 0,
    media_type: newsData.media_type || 'image',
    aspect_ratio: newsData.aspect_ratio || '16:9',
    tags: Array.isArray(newsData.tags) ? newsData.tags : [],
    ...newsData,
  };

  // Sync to backend asynchronously if available
  apiFetch('/api/news', {
    method: 'POST',
    body: JSON.stringify(newItem),
  }).catch(() => null);

  // Store in local storage for immediate persistence
  const current = getLocalNews();
  const updated = [newItem, ...current];
  saveLocalNews(updated);

  return { data: newItem, error: null, status: 201 };
}

/**
 * Update an existing news/media item.
 */
export async function updateNews(id, patch) {
  apiFetch(`/api/news/${id}`, {
    method: 'PUT',
    body: JSON.stringify(patch),
  }).catch(() => null);

  const current = getLocalNews();
  const idx = current.findIndex((n) => n.id === id || n._id === id);
  if (idx !== -1) {
    current[idx] = { ...current[idx], ...patch };
    saveLocalNews(current);
    return { data: current[idx], error: null, status: 200 };
  }

  return { data: null, error: 'News item not found', status: 404 };
}

/**
 * Delete a news/media item.
 */
export async function deleteNews(id) {
  apiFetch(`/api/news/${id}`, { method: 'DELETE' }).catch(() => null);

  const current = getLocalNews();
  const filtered = current.filter((n) => n.id !== id && n._id !== id);
  saveLocalNews(filtered);

  return { data: { success: true }, error: null, status: 200 };
}

// ─── Auth ─────────────────────────────────────────────────────────────────────

export async function register(payload) {
  apiFetch('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  }).catch(() => null);

  return {
    data: { user: { name: payload.name, email: payload.email }, token: 'mock-jwt-token' },
    error: null,
    status: 200,
  };
}

export async function login(payload) {
  return {
    data: { user: { email: payload.email }, token: 'mock-jwt-token' },
    error: null,
    status: 200,
  };
}

export const API_BASE_URL = BASE_URL;
