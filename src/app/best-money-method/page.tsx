import type { Metadata } from "next";
import Link from "next/link";
import { checkedDate, monthLabel, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Best Money Method (${monthLabel}) - Make Cash Fast`,
  description: `The best ${siteConfig.gameName} money method: poor-to-rich route, auction discipline, repair loops, garage reinvestment, and gamepass impact, with community-reported numbers labeled honestly.`,
  alternates: { canonical: `${siteConfig.domain}/best-money-method` },
  openGraph: {
    title: `${siteConfig.gameName} Best Money Method (${monthLabel})`,
    description: `Poor-to-rich profit route, auction discipline, and garage reinvestment for ${siteConfig.gameName}.`,
    url: `${siteConfig.domain}/best-money-method`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Best Money Method (${monthLabel})`,
    description: `Poor-to-rich profit route, auction discipline, and garage reinvestment for ${siteConfig.gameName}.`,
    images: ["/opengraph-image"]
  }
};

const faqItems = [
  {
    q: "What is the best money method in Junk Mechanics?",
    a: "There is no single verified get-rich-fast guarantee. The strongest repeatable approach is conservative auction bidding, cheap standard repairs, and reinvestment into garage capacity and selling space so you can run more flips per session."
  },
  {
    q: "How do you go poor to rich in Junk Mechanics?",
    a: "Creator coverage lays out a poor-to-rich route: restore salvage-yard vehicles at low auction prices, do standard repairs (radiator, battery), resell at the dealership, and reinvest the margin into more capacity and expensive marques. Journey from cheap flips up to high-value marques like the 570s or collector builds."
  },
  {
    q: "Are gamepasses worth buying for money in Junk Mechanics?",
    a: "Creator coverage discusses the financial impact of the gamepasses (a creator ran a dedicated \"I tested EVERY Gamepass\" video), but the exact per-gamepass ROI is community-reported. Buy a gamepass that fixes a real bottleneck (capacity or speed) rather than on spec."
  },
  {
    q: "Should I trust get-rich-fast videos?",
    a: "Use them as route ideas, then verify the auction price, repair cost, and current update before copying. Values shift with updates, so numbers in a video can be stale by the time you try the method."
  }
];

export default function MoneyMethodPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Best Money Method", href: "/best-money-method" }]} />
      <FaqJsonLd items={faqItems} />
      <Breadcrumbs items={[{ label: "Best Money Method", href: "/best-money-method" }]} />

      <PageIntro
        eyebrow={`Checked ${checkedDate}`}
        title={`${siteConfig.gameName} Best Money Method`}
        description="How to make Cash fast in Junk Mechanics: the poor-to-rich flip route, conservative auction bidding, repair loops, and garage reinvestment — with only the numbers that are actually confirmed."
      />
      <AdsterraArticleTop />

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">The route</span>
          <h2 className="mt-3 text-xl font-bold text-white">Poor to rich, one flip at a time</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            Creator poor-to-rich coverage (Avinestas) lays out income from restoring salvage-yard vehicles, to
            cheap auction flips, to job opportunities and gamepass impact. The repeatable core is always the same:
            buy low, repair cheap, resell at the dealership.
          </p>
        </article>
        <article className="content-card">
          <span className="mini-label">What is confirmed</span>
          <h2 className="mt-3 text-xl font-bold text-white">The loop and the systems exist</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            The auction house, salvage restoration, repair steps (radiator, battery, paint), dealership resale,
            garages, and gamepasses are all confirmed by creator coverage. Exact per-route Cash-per-hour and
            per-gamepass ROI are not.
          </p>
        </article>
        <article className="content-card">
          <span className="mini-label">Claim state</span>
          <h2 className="mt-3 text-xl font-bold text-white">Numbers are community-reported</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            Exact flipped-car resale prices, repair costs, and gamepass financial impact are community-reported.
            This page never presents them as official because the developer does not publish those tables.
          </p>
        </article>
      </section>
      <AdsterraArticleMid />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Money method"
          title="A four-step profit route that scales"
          copy="These steps come from the confirmed game loop and poor-to-rich creator coverage. Each step only works if the numbers stay on your side a truck."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="content-card">
            <span className="mini-label">Step 1</span>
            <h2 className="mt-3 text-xl font-bold text-white">Bid conservatively at auction</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">
              The margin starts at the gavel. Set your max bid from the calculator, skip wrecks that fail the
              flip test, and never overpay a marque out of excitement.
            </p>
          </article>
          <article className="content-card">
            <span className="mini-label">Step 2</span>
            <h2 className="mt-3 text-xl font-bold text-white">Standard repairs are the volume game</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">
              Radiator and battery flips are cheap and repeatable. Paint and collector builds on marques like the
              BMW G80 are higher margin but higher variance. Start with the cheap, reliable flips.
            </p>
          </article>
          <article className="content-card">
            <span className="mini-label">Step 3</span>
            <h2 className="mt-3 text-xl font-bold text-white">Reinvest into capacity</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">
              Bigger garages and selling space let you run more flips per session, which beats chasing a single
              high-risk supercar. Capacity upgrades compound profit the most.
            </p>
          </article>
          <article className="content-card">
            <span className="mini-label">Step 4</span>
            <h2 className="mt-3 text-xl font-bold text-white">Scale with confirmed marques</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">
              As Cash grows, move up to high-value marques like the 570s or collector builds. Verify each marque&apos;s
              offset with the calculator before spending a big bid.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Tools & routes"
          title="Make the math yours"
          copy="A money method is only as good as your numbers. Test each route before you commit Cash."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/calculator" className="content-card">
            <span className="mini-label">Tool</span>
            <h3 className="mt-3 text-lg font-bold text-white">Flip value calculator</h3>
            <p className="mt-2 text-sm text-white/66">Verify the margin on any wreck before you bid.</p>
          </Link>
          <Link href="/auction-guide" className="content-card">
            <span className="mini-label">Bidding</span>
            <h3 className="mt-3 text-lg font-bold text-white">Auction guide</h3>
            <p className="mt-2 text-sm text-white/66">Bid caps and condition checks that protect the margin.</p>
          </Link>
          <Link href="/shop-upgrades" className="content-card">
            <span className="mini-label">Capacity</span>
            <h3 className="mt-3 text-lg font-bold text-white">Garage & upgrades</h3>
            <p className="mt-2 text-sm text-white/66">What to buy first so capacity stops throttling the route.</p>
          </Link>
        </div>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}