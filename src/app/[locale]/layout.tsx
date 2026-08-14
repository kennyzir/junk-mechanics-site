import { setRequestLocale } from "next-intl/server";

// next-intl requires setRequestLocale in the [locale] layout for static export
// so each prerendered locale renders with the correct messages (no middleware).
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <>{children}</>;
}
