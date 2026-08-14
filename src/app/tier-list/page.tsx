import type { Metadata } from "next";
import Link from "next/link";
import { checkedDate, faqs, monthLabel, siteConfig, tierPreview } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd, ItemListJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { formatSiteDate } from "@/lib/site-date";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Tier List (${monthLabel}) - Best Cars & Profit Routes`,
  description: `Best ${siteConfig.gameName} vehicles, auction profit routes, repair loops, upgrades, and risk checks ranked by evidence.`,
  alternates: { canonical: `${siteConfig.domain}/tier-list` },
  openGraph: {
    title: `${siteConfig.gameName} Tier List (${monthLabel})`,
    description: `Compare ${siteConfig.gameName} marques, routes, upgrades, and auction risk signals with source notes.`,
    url: `${siteConfig.domain}/tier-list`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Tier List (${monthLabel})`,
    description: `Compare ${siteConfig.gameName} marques, routes, upgrades, and auction risk signals with source notes.`,
    images: ["/opengraph-image"]
  }
};

export default function TierListPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Tier List", href: "/tier-list" }]} />
      <ItemListJsonLd />
      <FaqJsonLd items={faqs.tierList} />
      <Breadcrumbs items={[{ label: "Tier List", href: "/tier-list" }]} />

      <PageIntro
        eyebrow={`Checked ${formatSiteDate(checkedDate)}`}
        title={`${siteConfig.gameName} Tier List`}
        description="Use this tier list to compare car marques by flip value, repair cost, rarity, and overbid risk before you spend Cash on a wreck at the auction house."
      />
      <AdsterraArticleTop />

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">Checked date</span>
          <h2 className="mt-3 text-xl font-bold text-white">{siteConfig.lastUpdated}</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Rankings should be refreshed after updates, new vehicle drops, or repeated community reports.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Ranking criteria</span>
          <h2 className="mt-3 text-xl font-bold text-white">Flip value, repair cost, rarity, and risk</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Compare marques by resale demand, part cost, rarity-driven profit, and how safely they fit a repeatable flip loop.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Source notes</span>
          <h2 className="mt-3 text-xl font-bold text-white">Official, creator, and community checks</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Car names are confirmed by August 2026 creator coverage, but exact prices, rarity, and repair numbers are community-reported until a creator-owned source or live test confirms them.</p>
        </article>
      </section>
      <AdsterraArticleMid />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Rankings"
          title="Best current marque picks by flip value"
          copy="Compare marques, overbid warnings, route signals, and upgrade choices with clear notes about what is verified, reported, or still pending."
        />
        <div className="mt-6 grid gap-4">
          {tierPreview.map((item) => (
            <article key={item.name} className="content-card">
              <div className="flex flex-wrap items-center gap-4">
                <span className="tier-badge">{item.tier}</span>
                <div>
                  <h2 className="text-2xl font-extrabold text-white">{item.name}</h2>
                  <p className="mt-1 text-sm text-white/50">{item.role}</p>
                </div>
                {item.confidence ? <span className="status-pill">{item.confidence}</span> : null}
              </div>
              {item.bestFor?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.bestFor.map((label) => (
                    <span key={label} className="mini-label">{label}</span>
                  ))}
                </div>
              ) : null}
              <p className="mt-4 max-w-4xl text-white/68">{item.reason}</p>
              {item.teamNote ? <p className="mt-3 text-sm text-white/60">Profit note: {item.teamNote}</p> : null}
              {item.sourceNote ? <p className="mt-2 text-xs uppercase tracking-wide text-white/45">Claim check: {item.sourceNote}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <h3 className="text-lg font-bold text-white">Beginner bidding</h3>
          <p className="mt-2 text-sm leading-6 text-white/66">Start with cheap wrecks to learn repair cost and marque resale before chasing a high-value car at auction.</p>
        </article>
        <article className="content-card">
          <h3 className="text-lg font-bold text-white">Repeat profit</h3>
          <p className="mt-2 text-sm leading-6 text-white/66">Use garage capacity, selling space, and repair speed to run more flips per session.</p>
        </article>
        <article className="content-card">
          <h3 className="text-lg font-bold text-white">Rarity watch</h3>
          <p className="mt-2 text-sm leading-6 text-white/66">Civix RK and the BMW G80 marque carry rarity-driven demand, but rare is only profitable if the repair bill does not swallow the margin. Run the calculator first.</p>
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Route notes"
          title="Best value depends on the whole flip loop"
          copy="A high resale marque is only one part of profit. Auction bid, repair cost, paint, garage capacity, and dealership timing all change the best choice."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/auction-guide" className="content-card">
            <span className="mini-label">Guide</span>
            <h3 className="mt-3 text-lg font-bold text-white">Check the auction guide</h3>
            <p className="mt-2 text-sm text-white/66">Bidding, condition checks, and bid caps before the gavel drops.</p>
          </Link>
          <Link href="/vehicles" className="content-card">
            <span className="mini-label">Wiki</span>
            <h3 className="mt-3 text-lg font-bold text-white">Read marque details</h3>
            <p className="mt-2 text-sm text-white/66">Civix RK, Mercer M21, Leksoh, and G80 family notes.</p>
          </Link>
          <Link href="/sources" className="content-card">
            <span className="mini-label">Sources</span>
            <h3 className="mt-3 text-lg font-bold text-white">Check evidence</h3>
            <p className="mt-2 text-sm text-white/66">Use source notes when creator videos, wiki pages, or community reports disagree.</p>
          </Link>
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/codes" className="button-secondary">Get codes</Link>
        <Link href="/calculator" className="button-secondary">Use the flip calculator</Link>
        <Link href="/trello" className="button-secondary">Check source status</Link>
      </div>
      <AdsterraArticleBottom />
    </main>
  );
}