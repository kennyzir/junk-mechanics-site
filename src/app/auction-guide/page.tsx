import type { Metadata } from "next";
import Link from "next/link";
import { checkedDate, monthLabel, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Auction Guide (${monthLabel}) - Bidding, Condition Checks & Bid Caps`,
  description: `How the ${siteConfig.gameName} auction house works: bidding, car-condition checks, bid caps, auction-house automation, and when to walk away from an overpriced wreck.`,
  alternates: { canonical: `${siteConfig.domain}/auction-guide` },
  openGraph: {
    title: `${siteConfig.gameName} Auction Guide (${monthLabel})`,
    description: `Bidding, condition checks, and auction-house automation for ${siteConfig.gameName}.`,
    url: `${siteConfig.domain}/auction-guide`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Auction Guide (${monthLabel})`,
    description: `Bidding, condition checks, and auction-house automation for ${siteConfig.gameName}.`,
    images: ["/opengraph-image"]
  }
};

const faqItems = [
  {
    q: "How do auctions work in Junk Mechanics?",
    a: "You bid Cash on wrecks at the auction house, then repai and resell them at the dealership for profit. The safer the bid next to the repair bill and expected resale, the better the flip. Auction-house automation options added in August 2026 let you run more auctions per session."
  },
  {
    q: "What is a " + "safe bid" + " in Junk Mechanics?",
    a: "A bid is safe when the estimated resale minus repair cost still leaves positive profit. Set a bid ceiling before the gavel drops and never chase a flashy marque past the point where the flip stops making sense."
  },
  {
    q: "Should I buy every auction car?",
    a: "No. Some wrecks cost more to repair than they will sell for. Skip anything that fails the flip-margin test you run in the calculator."
  },
  {
    q: "Does the auction house have automation?",
    a: "Yes. The August 5, 2026 update added auction-house automation options, letting you run more auctions per session. More flips only scale profit if each individual flip margin stays positive."
  }
];

export default function AuctionGuidePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Auction Guide", href: "/auction-guide" }]} />
      <FaqJsonLd items={faqItems} />
      <Breadcrumbs items={[{ label: "Auction Guide", href: "/auction-guide" }]} />

      <PageIntro
        eyebrow={`Checked ${checkedDate}`}
        title={`${siteConfig.gameName} Auction Guide`}
        description="Learn how the Junk Mechanics auction house works: bidding, condition checks, bid caps, and auction-house automation, so you stop overbidding on wrecks that eat the profit."
      />
      <AdsterraArticleTop />

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">The core loop</span>
          <h2 className="mt-3 text-xl font-bold text-white">Buy the wreck, beat the repair bill</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            The auction house is where a Junk Mechanics flip starts. You bid Cash on a wreck, then repair and
            repaint it, then drive it to the dealership and resell for profit. Your auction bid is the first
            number that decides whether the whole flip makes money.
          </p>
        </article>
        <article className="content-card">
          <span className="mini-label">August 2026</span>
          <h2 className="mt-3 text-xl font-bold text-white">Auction-house automation is in</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            The August 5, 2026 update added auction-house automation options. This lets players run more auctions
            per session, which only helps if each per-car margin stays positive.
          </p>
        </article>
        <article className="content-card">
          <span className="mini-label">Claim state</span>
          <h2 className="mt-3 text-xl font-bold text-white">Exact odds are community-reported</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            Auction starting prices and RNG rarity odds are community-reported. The auction house and its
            automation are confirmed by creator coverage; exact drop rates and price ranges are not developer-published.
          </p>
        </article>
      </section>
      <AdsterraArticleMid />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Bidding rules of thumb"
          title="How to avoid paying too much for a wreck"
          copy="Profit in Junk Mechanics is decided at the auction. These four checks keep you on the right side of the margin."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="content-card">
            <span className="mini-label">1. Bid ceiling first</span>
            <h2 className="mt-3 text-xl font-bold text-white">Set the cap before the gavel drops</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">
              Estimate resale, subtract the repair cost, and that is your max bid. Bidding emotionally on a
              flashy marque is how Cash leaks out of a flip session.
            </p>
          </article>
          <article className="content-card">
            <span className="mini-label">2. Condition check</span>
            <h2 className="mt-3 text-xl font-bold text-white">Inspect bodywork before bidding</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">
              A cheap auction price is not a good deal if the radiator, battery, and bodywork are trashed and the
              repair bill swallows the margin. Check parts before you commit Cash.
            </p>
          </article>
          <article className="content-card">
            <span className="mini-label">3. Rarity is not profit</span>
            <h2 className="mt-3 text-xl font-bold text-white">Rare cars can still lose money</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">
              A rare marque can be a loss if the parts are uncommon and the dealership price does not move. Test
              the marque against expected resale before you overpay.
            </p>
          </article>
          <article className="content-card">
            <span className="mini-label">4. Walk away</span>
            <h2 className="mt-3 text-xl font-bold text-white">Learn when to skip a lot</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">
              Not every auction car belongs in the garage. If the estimated flip margin is flat or negative, save
              your Cash for the next batch.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Next steps"
          title="Turn a good bid into a profitable flip"
          copy="Auction discipline only pays off when it feeds the full repair-to-dealership loop."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/calculator" className="content-card">
            <span className="mini-label">Tool</span>
            <h3 className="mt-3 text-lg font-bold text-white">Flip value calculator</h3>
            <p className="mt-2 text-sm text-white/66">Auction bid + repair + resale = profit, before you spend a single Cash.</p>
          </Link>
          <Link href="/best-money-method" className="content-card">
            <span className="mini-label">Profit</span>
            <h3 className="mt-3 text-lg font-bold text-white">Best money method</h3>
            <p className="mt-2 text-sm text-white/66">How auction discipline fits the full poor-to-rich route.</p>
          </Link>
          <Link href="/vehicles" className="content-card">
            <span className="mini-label">Cars</span>
            <h3 className="mt-3 text-lg font-bold text-white">Vehicle database</h3>
            <p className="mt-2 text-sm text-white/66">Which marques are worth chasing and which are reported traps.</p>
          </Link>
        </div>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}