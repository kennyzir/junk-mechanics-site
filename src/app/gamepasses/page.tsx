import type { Metadata } from "next";
import Link from "next/link";
import { checkedDate, monthLabel, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Gamepasses (${monthLabel}) - Worth It? What They Do`,
  description: `Which ${siteConfig.gameName} gamepasses are worth buying: cash boosts, capacity, and upgrade tradeoffs, with community-reported ROI and honest "verified vs reported" labels.`,
  alternates: { canonical: `${siteConfig.domain}/gamepasses` },
  openGraph: {
    title: `${siteConfig.gameName} Gamepasses (${monthLabel})`,
    description: `Which ${siteConfig.gameName} gamepasses are worth buying, with value tradeoffs and source labels.`,
    url: `${siteConfig.domain}/gamepasses`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Gamepasses (${monthLabel})`,
    description: `Which ${siteConfig.gameName} gamepasses are worth buying, with value tradeoffs and source labels.`,
    images: ["/opengraph-image"]
  }
};

const faqItems = [
  {
    q: "What gamepasses are in Junk Mechanics?",
    a: "Creator coverage confirms the game has gamepasses — a creator ran a dedicated 'I tested EVERY Gamepass' video. Coverage groups them into income-boosting and capacity/carry types, matching how the game's Cash economy works."
  },
  {
    q: "Are Junk Mechanics gamepasses worth buying?",
    a: "Creator coverage discusses the financial impact of the gamepasses, but the exact per-gamepass ROI is community-reported. Buy one that fixes a real bottleneck (capacity or speed), not on spec."
  },
  {
    q: "What is the best gamepass to buy first?",
    a: "The one that removes your main limit: a capacity boost if you keep hitting storage limits, a cash/speed boost if you want to skip early grinding. Recheck the in-game price before buying."
  },
  {
    q: "Do gamepass prices change?",
    a: "Yes. Robux prices and boost values shift with updates. Always confirm the current in-game price and effect before spending real money."
  }
];

export default function GamepassesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Gamepasses", href: "/gamepasses" }]} />
      <FaqJsonLd items={faqItems} />
      <Breadcrumbs items={[{ label: "Gamepasses", href: "/gamepasses" }]} />

      <PageIntro
        eyebrow={`Checked ${checkedDate}`}
        title={`${siteConfig.gameName} Gamepasses`}
        description="Which Junk Mechanics gamepasses are worth buying, how they fit the Cash economy, and where the value numbers are community-reported rather than confirmed."
      />
      <AdsterraArticleTop />

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">What exists</span>
          <h2 className="mt-3 text-xl font-bold text-white">Gamepasses are real and tested</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            A creator ran a dedicated &quot;I tested EVERY Gamepass on Junk Mechanics&quot; video, confirming the game
            ships gamepasses that affect the money-making loop. Their financial impact is part of every
            serious poor-to-rich route.
          </p>
        </article>
        <article className="content-card">
          <span className="mini-label">The divide</span>
          <h2 className="mt-3 text-xl font-bold text-white">Boost vs capacity</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            Coverage groups gamepasses into income-boosting and capacity/carry types. Match the purchase to the
            bottleneck you actually have, not the one you think is glamorous.
          </p>
        </article>
        <article className="content-card">
          <span className="mini-label">Claim state</span>
          <h2 className="mt-3 text-xl font-bold text-white">ROI is community-reported</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            Exact Robux prices and boost multipliers are not developer-published, so they are community-reported.
            This page labels them honestly instead of inventing an ROI table.
          </p>
        </article>
      </section>
      <AdsterraArticleMid />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Buying guide"
          title="How to choose a gamepass without wasting Robux"
          copy="Buy speed and capacity, not convenience. These checks keep a Robux purchase aligned with your actual route."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="content-card">
            <span className="mini-label">1. Find the bottleneck</span>
            <h2 className="mt-3 text-xl font-bold text-white">Buy the fix, not the glamour</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">
              If you keep capping storage, a capacity gamepass pays off immediately. If repairs feel slow, a speed
              or tool gamepass compounds across every flip. Chasing a flashy boost you do not need is wasted Robux.
            </p>
          </article>
          <article className="content-card">
            <span className="mini-label">2. Compare to grinding</span>
            <h2 className="mt-3 text-xl font-bold text-white">Only buy if it beats grinding</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">
              A gamepass only pays off if it meaningfully shortens your route. If a few extra flips are almost as
              fast, skip the spend and grind instead.
            </p>
          </article>
          <article className="content-card">
            <span className="mini-label">3. Recheck prices</span>
            <h2 className="mt-3 text-xl font-bold text-white">Prices change with updates</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">
              Robux prices and boost values shift when the game updates. Confirm the current in-game price and
              effect before you buy. Treat any older ROI claim as stale.
            </p>
          </article>
          <article className="content-card">
            <span className="mini-label">4. Rebound on the route</span>
            <h2 className="mt-3 text-xl font-bold text-white">A gamepass should speed the loop</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">
              The best gamepass shortens the auction-to-dealership turnover. More capacity or faster repairs means
              more flips per session, which beats a one-time cash bump in most routes.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Related decisions"
          title="Where gamepasses fit the bigger picture"
          copy="Gamepasses are Robux purchases; garage upgrades and progression are in-game Cash decisions. Here's how they relate."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/shop-upgrades" className="content-card">
            <span className="mini-label">In-game</span>
            <h3 className="mt-3 text-lg font-bold text-white">Garage & upgrades</h3>
            <p className="mt-2 text-sm text-white/66">Non-Robux progression choices that fix the same bottlenecks.</p>
          </Link>
          <Link href="/best-money-method" className="content-card">
            <span className="mini-label">Profit</span>
            <h3 className="mt-3 text-lg font-bold text-white">Best money method</h3>
            <p className="mt-2 text-sm text-white/66">How a gamepass boost fits a full poor-to-rich route.</p>
          </Link>
          <Link href="/sources" className="content-card">
            <span className="mini-label">Evidence</span>
            <h3 className="mt-3 text-lg font-bold text-white">Source status</h3>
            <p className="mt-2 text-sm text-white/66">Which gamepass claims are verified vs community-reported.</p>
          </Link>
        </div>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}