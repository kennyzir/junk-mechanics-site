import { getTranslations, setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n/locales";

// Required for static export: must enumerate all locales so each is prerendered.
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function I18nProtoPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "home" });

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <p className="mini-label">i18n prototype · locale={locale}</p>
      <h1 className="mt-3 text-3xl font-bold text-white">{t("h1")}</h1>
      <p className="mt-3 text-sm leading-6 text-white/65">{t("desc")}</p>
    </main>
  );
}
