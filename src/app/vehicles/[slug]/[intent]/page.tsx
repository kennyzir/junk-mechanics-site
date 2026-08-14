import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVehicle, vehicleSlugs } from "@/data/vehicles";
import { checkedDate, langAlternates, monthLabel, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";

const INTENTS = ["how-to-get", "best", "rarities"] as const;
type Intent = (typeof INTENTS)[number];

// Per-intent semantic config. Content is derived from the marque's real
// game-db facts below, so we do NOT fabricate numbers.
const intentCopy: Record<
  Intent,
  { label: string; titleQ: (name: string) => string; meta: (name: string) => string }
> = {
  "how-to-get": {
    label: "How to get",
    titleQ: (name) => `How to get the ${name}`,
    meta: (name) =>
      `How to get the ${name} in ${siteConfig.gameName}: the auction win route, the repair path, and every required step to a resale.`,
  },
  best: {
    label: "Best",
    titleQ: (name) => `Is the ${name} worth it?`,
    meta: (name) =>
      `Is the ${name} in ${siteConfig.gameName} worth chasing? Rarity, flip value, repair cost, and resale signal — with honest claim labels.`,
  },
  rarities: {
    label: "Rarities",
    titleQ: (name) => `How rare is the ${name}?`,
    meta: (name) =>
      `How rare is the ${name} in ${siteConfig.gameName}? Rarity tier, flip ranking, and which exact odds are unknown vs community-reported.`,
  },
};

export function generateStaticParams() {
  return vehicleSlugs.flatMap((slug) => INTENTS.map((intent) => ({ slug, intent })));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; intent: string }>;
}): Promise<Metadata> {
  const { slug, intent } = await params;
  if (!(INTENTS as readonly string[]).includes(intent)) return {};
  const v = getVehicle(slug);
  if (!v) return {};
  const c = intentCopy[intent as Intent];
  return {
    title: `${c.label} ${v.name} in ${siteConfig.gameName} (${monthLabel}) | ${v.type}`,
    description: c.meta(v.name),
    alternates: langAlternates(`vehicles/${v.slug}/${intent}`),
    openGraph: {
      title: `${c.titleQ(v.name)} - ${siteConfig.gameName}`,
      description: c.meta(v.name),
      url: `${siteConfig.domain}/vehicles/${v.slug}/${intent}`,
      images: ["/opengraph-image"],
    },
  };
}

export default async function VehicleIntentPage({
  params,
}: {
  params: Promise<{ slug: string; intent: string }>;
}) {
  const { slug, intent } = await params;
  const v = getVehicle(slug);
  if (!v || !(INTENTS as readonly string[]).includes(intent)) return notFound();
  const c = intentCopy[intent as Intent];

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Vehicles", href: "/vehicles" },
          { name: v.name, href: `/vehicles/${v.slug}` },
          { name: c.label, href: `/vehicles/${v.slug}/${intent}` },
        ]}
      />
      <FaqJsonLd
        items={[
          {
            q: intent === "how-to-get" ? `How do I get the ${v.name} in ${siteConfig.gameName}?` : intent === "best" ? `Is the ${v.name} worth it in ${siteConfig.gameName}?` : `How rare is the ${v.name} in ${siteConfig.gameName}?`,
            a:
              intent === "how-to-get"
                ? `Wreck-drop it or win it at the auction house, then repair it through the standard loop. ${v.flipProfile}`
                : intent === "best"
                  ? `${v.flipProfile} ${v.rarityTier}. This site labels the marque ${v.confidence.toLocaleLowerCase()}.`
                  : `${v.rarityTier} — ranked ${v.tier} tier for flip preference. Exact rarity odds are not dev-published; this page labels rarity ${v.confidence.toLocaleLowerCase()} (${v.confirmedBy}).`,
          },
          {
            q: intent === "how-to-get" ? `What does the ${v.name} need to resell?` : intent === "best" ? `What is the ${v.name} tier?` : `Which exact ${v.name} odds are verified?`,
            a:
              intent === "how-to-get"
                ? `${v.sourceNote} Radiator, battery, and paint are the standard prep; a correct OEM color or a turbo (on ${
                    v.slug === "570s" ? "the 570s" : v.name
                  }) can add value where stated.`
                : intent === "best"
                  ? `The ${v.name} ranks at ${v.tier} tier — ${v.rarityTier}. Best for: ${v.bestFor.join(", ")}.`
                  : `Presence, type, and rarity-tier label are confirmed. Exact drop-rate percentages and price odds are not developer-published and are NOT presented as fact on this page.`,
          },
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Vehicles", href: "/vehicles" },
          { label: v.name, href: `/vehicles/${v.slug}` },
          { label: c.label, href: `/vehicles/${v.slug}/${intent}` },
        ]}
      />

      <PageIntro
        eyebrow={`${c.label} · ${v.type} · Checked ${checkedDate}`}
        title={`${c.titleQ(v.name)}`}
        description={c.meta(v.name)}
      >
        <div className="flex flex-wrap gap-3">
          <Link className="button-primary" href="/calculator">Run flip calculator</Link>
          <Link className="button-secondary" href={`/vehicles/${v.slug}`}>{v.name} overview</Link>
        </div>
      </PageIntro>
      <AdsterraArticleTop />

      {intent === "how-to-get" ? (
        <section className="mt-8 grid gap-4 lg:grid-cols-3">
          <article className="content-card lg:col-span-2">
            <span className="mini-label">Auction route</span>
            <h2 className="mt-3 text-xl font-bold text-white">Win the {v.name} at the auction house</h2>
            <ol className="mt-4 grid gap-3 text-sm leading-6 text-white/70">
              <li><strong className="text-white">1. Set your bid cap first.</strong> Use the flip calculator with a repair-cost assumption so you never bid more than the resale minus repairs.</li>
              <li><strong className="text-white">2. Check the condition.</strong> A wreck with a dead battery and leaky radiator costs more to flip; factor that into the cap. See the auction guide.</li>
              <li><strong className="text-white">3. Win and tow it to your garage.</strong> If you lack a slot, the capacity bottleneck will force a cheaper sell — buy a garage slot first when storage is tight.</li>
              <li><strong className="text-white">4. Repair the standard loop.</strong>{v.sourceNote}</li>
            </ol>
          </article>
          <article className="content-card">
            <span className="mini-label">Repair path</span>
            <h2 className="mt-3 text-xl font-bold text-white">Prep the {v.name} for resale</h2>
            <ul className="mt-4 grid gap-2 text-sm text-white/70">
              <li>· Radiator repair (part of every flip)</li>
              <li>· Battery charge / replacement</li>
              <li>· Paint — an OEM-correct color raises resale where stated</li>
              {slug === "570s" && <li>· Twin-turbo kit (confirms a high-margin supercar upgrade)</li>}
              <li>· Dealership resale closes the loop</li>
            </ul>
          </article>
        </section>
      ) : intent === "best" ? (
        <section className="mt-8 grid gap-4 lg:grid-cols-3">
          <article className="content-card">
            <span className="mini-label">Tier</span>
            <div className="mt-3 flex items-center gap-3">
              <span className="tier-badge">{v.tier}</span>
              <span className="font-semibold text-white/80">{v.rarityTier}</span>
            </div>
            <p className="mt-2 text-sm leading-6 text-white/66">The {v.name} ranks {v.tier} tier by flip preference.</p>
          </article>
          <article className="content-card lg:col-span-2">
            <span className="mini-label">Is it worth it?</span>
            <h2 className="mt-3 text-xl font-bold text-white">The {v.name} flip verdict</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">{v.flipProfile}</p>
            <p className="mt-3 text-sm leading-6 text-white/66">
              <strong className="text-white">Best for:</strong> {v.bestFor.join(", ")}. Worth chasing if you can win it under your
              repair-adjusted bid cap — treat the exact price as {v.confidence.toLocaleLowerCase()}.
            </p>
          </article>
        </section>
      ) : (
        <section className="mt-8 grid gap-4 lg:grid-cols-3">
          <article className="content-card">
            <span className="mini-label">Rarity tier</span>
            <div className="mt-3 flex items-center gap-3">
              <span className="tier-badge">{v.tier}</span>
              <span className="font-semibold text-white/80">{v.rarityTier}</span>
            </div>
            <p className="mt-2 text-sm leading-6 text-white/66">This site labels the {v.name} as {v.confidence.toLocaleLowerCase()}, confirmed by {v.confirmedBy}.</p>
          </article>
          <article className="content-card lg:col-span-2">
            <span className="mini-label">What is honest to say</span>
            <h2 className="mt-3 text-xl font-bold text-white">{v.name} rarity — ranked, not invented odds</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              The {v.name} is {v.rarityTier.toLocaleLowerCase()} ({v.type.toLocaleLowerCase()}) and is confirmed by {v.confirmedBy}.
              Its exact drop-rate and spawn percentages are <strong className="text-white">not developer-published</strong>, so this page
              does not present fabricated odds. What we can rank is the marque&apos;s rarity tier and flip preference — that comes from
              creator coverage, not invented math.
            </p>
          </article>
        </section>
      )}
      <AdsterraArticleMid />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Confirm the numbers"
          title={`Run the ${v.name} through the loop`}
          copy="Decision tools protect your Cash. Estimate the repair cost and resale before you commit a large bid."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/calculator" className="content-card">
            <span className="mini-label">Tool</span>
            <h3 className="mt-3 text-lg font-bold text-white">Flip calculator</h3>
            <p className="mt-2 text-sm text-white/66">Auction bid + repair + resale = profit. Test the {v.name} first.</p>
          </Link>
          <Link href="/vehicles" className="content-card">
            <span className="mini-label">Database</span>
            <h3 className="mt-3 text-lg font-bold text-white">All vehicles</h3>
            <p className="mt-2 text-sm text-white/66">Compare the {v.name} against every confirmed marque.</p>
          </Link>
          <Link href="/best-money-method" className="content-card">
            <span className="mini-label">Profit</span>
            <h3 className="mt-3 text-lg font-bold text-white">Best money method</h3>
            <p className="mt-2 text-sm text-white/66">Which marques feed the poor-to-rich roller coast.</p>
          </Link>
        </div>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}
