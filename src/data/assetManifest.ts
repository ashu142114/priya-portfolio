/**
 * Real-asset manifest for /public/ overrides.
 * When Priya drops real PNG/SVG files into /public/projects/<slug>/, /public/logos/<slug>/,
 * /public/brand/<slug>/, or /public/graphics/<slug>/, list their public paths here (or run
 * a build script) so components render the real file instead of the code-generated visual.
 * By default empty so zero broken <img> tags are ever rendered.
 */
export const EXISTING_PUBLIC_ASSETS = new Set<string>([]);

export function hasRealAsset(path?: string): path is string {
  if (!path) return false;
  return EXISTING_PUBLIC_ASSETS.has(path);
}
