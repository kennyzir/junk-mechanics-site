import type { Metadata } from "next";
import Link from "next/link";
import { checkedDate, monthLabel, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Garage & Upgrades (${monthLabel}) - What to Buy First`,
  description: `Which ${siteConfig.gameName} garage and shop upgrades to buy first: storage, selling space, tool speed, and car slots, from creator garage-progression coverage.`,
  alternates: { canonical: `${siteConfig.domain}/shop-upgrades` },
  openGraph: {
    title: `${siteConfig.gameName} Garage & Upgrades (${monthLabel})`,
    description: `Which ${siteConfig.gameName} garage and shop upgrades to buy first.`,
    url: `${siteConfig.domain}/shop-upgrades`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Garage & Upgrades (${monthLabel})`,
    description: `Which ${siteConfig.gameName} garage and shop upgrades to buy first.`,
    images: ["/opengraph-image"]
  }
};

const faqItems = [
  {
    q: "What upgrades exist in Junk Mechanics?",
    a: "Creator coverage confirms garages and shop/upgrade paths you buy with in-game Cash, plus a garage progression so large that a creator dedicates a full 'I bought EVERY garage' run to it. Capacity, selling space, and repair speed are the core levers."
  },
  {
    q: "What should I upgrade first in Junk Mechanics?",
    a: "The upgrade that fixes your current bottleneck. If you keep capping storage, buy capacity. If you cannot move stock fast enough, buy selling space. If repairs feel slow, buy tool speed. Do not buy a garage just because it is big."
  },
  {
    q: "Is buying every garage worth it?",
    a: "Creator coverage shows the full garage path exists, but the cost grows and not every garage pays for itself at the same point in the route. Only buy the next garage when the current one is genuinely limiting you."
  },
  {
    q: "Are gamepasses and garage upgrades the same thing?",
    a: "No. Gamepasses are Robux purchases; garage and shop upgrades are in-game Cash progression decisions. They fix some of the same bottlenecks but cost different currencies."
  }
];

export default function ShopUpgradesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Garage & Upgrades", href: "/shop-upgrades" }]} />
      <FaqJsonLd items={faqItems} />
      <Breadcrumbs items={[{ label: "Garage & Upgrades", href: "/shop-upgrades" }]} />

      <PageIntro
        eyebrow={`Checked ${checkedDate}`}
        title={`${siteConfig.gameName} Garage & Upgrades`}
        description="Which garage and shop upgrades to buy first in Junk Mechanics, so storage, selling space, and repair speed stop throttling your flip loop."
      />
      <AdsterraArticleTop />

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">What exists</span>
          <h2 className="mt-3 text-xl font-bold text-white">Garage progression is confirmed</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            A creator ran a full "I bought EVERY garage" progression, confirming garages are a core Cash sink and
            capacity lever. Buying the right garage at the right time is a real decision, not a decoration.
          </p>
        </article>
        <article className="content-card">
          <span className="mini-label">The levers</span>
          <h2 className="mt-3 text-xl font-bold text-white">Storage, selling space, tool speed</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            Capacity lets you hold more flips, selling space moves stock faster, and tool speed shortens repair
            time. These three replace the volume of the auction-to-dealership loop.
          </p>
        </article>
        <article className="content-card">
          <span className="mini-label">Claim state</span>
          <h2 className="mt-3 text-xl font-bold text-white">Costs are community-reported</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            Exact garage prices and upgrade costs are community-reported; creator progression videos confirm the
            purchases but not current in-game numbers, which shift with updates.
          </p>
        </article>
      </section>
      <AdsterraArticleMid />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Upgrade order"
          title="Buy the fix for your actual bottleneck"
          copy="There is no universal 'best' garage. There is only the upgrade that removes the limit currently throttling your flips."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="content-card">
            <span className="mini-label">Storage first</span>
            <h2 className="mt-3 text-xl font-bold text-white">Capacity caps profit per session</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">
              If you are leaving flips on the table because you hit the storage limit, a capacity upgrade increases
              profit per session immediately — the highest-leverage first buy for most routes.
            </p>
          </article>
          <article className="content-card">
            <span className="mini-label">Selling space</span>
            <h2 className="mt-3 text-xl font-bold text-white">Move stock to free the loop</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">
              Selling-space limits throttle how fast you turn cars into Cash. More room extends the flip loop before
              you have to stop and sell.
            </p>
          </article>
          <article className="content-card">
            <span className="mini-label">Tool speed</span>
            <h2 className="mt-3 text-xl font-bold text-white">Faster repairs compound</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">
              Fast repairs mean more flips per session. Tool upgrades are worth more the more you grind the
              auction-to-dealership loop.
            </p>
          </article>
          <article className="content-card">
            <span className="mini-label">Buy order</span>
            <h2 className="mt-3 text-xl font-bold text-white">Avoid buying ahead of need</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">
              Creator progression buys garages in order, but each one only "pays for itself" once the previous
              limit is actually constraining you. Buying ahead ties up Cash you could be flipping with.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Related decisions"
          title="Upgrades, gamepasses, and the profit route"
          copy="Capacity comes from both Cash upgrades and Robux gamepasses. Pick the cheaper fix for the same bottleneck."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/gamepasses" className="content-card">
            <span className="mini-label">Robux</span>
            <h3 className="mt-3 text-lg font-bold text-white">Gamepasses</h3>
            <p className="mt-2 text-sm text-white/66">Robux capacity and boost buys that overlap these upgrades.</p>
          </Link>
          <Link href="/best-money-method" className="content-card">
            <span className="mini-label">Profit</span>
            <h3 className="mt-3 text-lg font-bold text-white">Best money method</h3>
            <p className="mt-2 text-sm text-white/66">How capacity caps the whole poor-to-rich route.</p>
          </Link>
          <Link href="/calculator" className="content-card">
            <span className="mini-label">Tool</span>
            <h3 className="mt-3 text-lg font-bold text-white">Flip calculator</h3>
            <p className="mt-2 text-sm text-white/66">Test an upgrade purchase against real flip margins.</p>
          </Link>
        </div>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}