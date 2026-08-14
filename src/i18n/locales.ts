// Supported locales for the static site. 'en' is served at root (no prefix);
// 'es' under /es. Add pt/id here + a messages/*.json file to expand.
export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// Map a locale to its URL path prefix ('' for default en, '/es' for es).
export function localePath(locale: Locale, path: string) {
  if (locale === defaultLocale) return path === "" ? "/" : path;
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `/${locale}/${clean}` : `/${locale}`;
}
