// Base path configuration for GitHub Pages deployment
export const BASE_PATH = process.env.NODE_ENV === "production" ? "/portfolio" : "";

/**
 * Resolves an image path with the correct base path for deployment
 * @param path - The image path (e.g., "image.png" or "/image.png")
 * @returns The resolved path with base path prefix
 */
export function resolveImagePath(path: string): string {
  if (!path) return path;

  // Don't modify absolute URLs
  if (/^https?:\/\//.test(path)) return path;

  // Ensure path starts with /
  const normalized = path.startsWith("/") ? path : `/${path}`;

  // Add base path prefix
  return BASE_PATH ? `${BASE_PATH}${normalized}` : normalized;
}
