// Service Worker - Handle video files and prevent 206 caching errors
const CACHE_NAME = 'absnit-cache-v1';
const EXCLUDE_PATTERNS = [
  /\.mp4$/i,
  /\.webm$/i,
  /\.mov$/i,
  /\.avi$/i,
  /\.mkv$/i,
  /\/videos\//i,
];

// Check if URL should be excluded from caching
function shouldExcludeFromCache(url) {
  return EXCLUDE_PATTERNS.some(pattern => pattern.test(url));
}

// Install event
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
  return self.clients.claim();
});

// Fetch event - handle requests and prevent 206 caching errors
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Always skip caching for video files
  if (shouldExcludeFromCache(url.pathname)) {
    event.respondWith(fetch(request));
    return;
  }

  // Skip caching for non-GET requests
  if (request.method !== 'GET') {
    event.respondWith(fetch(request));
    return;
  }

  // Handle other requests
  event.respondWith(
    fetch(request)
      .then((response) => {
        // CRITICAL: Never cache 206 (Partial Content) responses
        // This is the main fix for the error
        if (response.status === 206) {
          return response;
        }

        // Only cache successful, complete responses
        if (!response.ok || response.status !== 200) {
          return response;
        }

        // Check if response is complete (not partial)
        const contentRange = response.headers.get('content-range');
        if (contentRange) {
          // This is a partial response, don't cache
          return response;
        }

        // Clone the response for caching
        const responseToCache = response.clone();

        // Cache the response (only if it's a complete 200 response)
        caches.open(CACHE_NAME).then((cache) => {
          // Double check before caching
          if (responseToCache.status === 200 && !responseToCache.headers.get('content-range')) {
            cache.put(request, responseToCache).catch((err) => {
              // Silently fail if caching fails (e.g., for large files)
              console.log('Cache put failed (non-critical):', err);
            });
          }
        });

        return response;
      })
      .catch(() => {
        // If fetch fails, try to get from cache
        return caches.match(request).then((cachedResponse) => {
          return cachedResponse || new Response('Offline', {
            status: 503,
            statusText: 'Service Unavailable',
          });
        });
      })
  );
});
