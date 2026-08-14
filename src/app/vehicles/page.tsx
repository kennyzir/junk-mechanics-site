import type { Metadata } from "next";
import Link from "next/link";
import { checkedDate, monthLabel, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, ItemListJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Vehicles & Cars (${monthLabel}) - Civix RK, M2CS, 570s & G80`,
  description: `Full ${siteConfig.gameName} vehicle list with marque notes for Civix RK, Mercer M21, Leksoh, BMW G80, the 570s, and the M2CS, plus rarity labels and repair-cost guidance from August 2026 creator coverage.`,
  alternates: { canonical: `${siteConfig.domain}/vehicles` },
  openGraph: {
    title: `${siteConfig.gameName} Vehicles & Cars (${monthLabel})`,
    description: `Full ${siteConfig.gameName} vehicle list with marque notes and rarity labels.`,
    url: `${siteConfig.domain}/vehicles`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Vehicles & Cars (${monthLabel})`,
    description: `Full ${siteConfig.gameName} vehicle list with marque notes and rarity labels.`,
    images: ["/opengraph-image"]
  }
};

// Vehicle names/mechanics are confirmed from August 2026 creator video titles and
// descriptions. Exact prices, rarity odds, and repair costs remain community-reported
// until a creator-owned source or a live in-game test publishes tables.
const vehicles = [
  {
    name: "Civix RK",
    type: "Marque / class-leading sport",
    tier: "A",
    confidence: "Reported",
    confirmedBy: "Named in the August 5, 2026 '4 NEW VEHICLES' update coverage (Berlian kecil)",
    notes: "Presented as a sought-after marque in the August 2026 vehicle drop. Auction value and repair cost are community-derived; exact rarity is not creator-official.",
    bestFor: ["high-value flips", "rarity hunting"]
  },
  {
    name: "Mercer M21",
    type: "Mid-band sport",
    tier: "B",
    confidence: "Reported",
    confirmedBy: "Named in the same August 5, 2026 '4 NEW VEHICLES' update coverage",
    notes: "Sits below the marquee cars on value but can hold a healthy flip margin when parts are cheap. A solid way to test the auction-to-dealership loop.",
    bestFor: ["mid-tier flips", "route testing"]
  },
  {
    name: "M2CS",
    type: "Collector / build car",
    tier: "A",
    confidence: "Reported",
    confirmedBy: "\"I built a FAKE M2CS in Junk Mechanics.. 💀🔥\" creator video (Avinestas channel)",
    notes: "Players build out M2CS-style builds, suggesting strong demand for this marque. Repair/build cost is community-derived.",
    bestFor: ["collector builds", "custom paints"]
  },
  {
    name: "570s",
    type: "Supercar / turbo target",
    tier: "A",
    confidence: "Reported",
    confirmedBy: "\"I threw on a Twin Turbo kit on my 570s in Junk Mechanics.. 👀🔥\" creator video",
    notes: "A 570s supercar-family model is confirmed in the game, and it is one of the cars creators twin-turbo. Confirms the turbo upgrade system and supercar marque. Resale highly community-derived.",
    bestFor: ["turbo builds", "high-margin flips"]
  },
  {
    name: "BMW G80 (OEM)",
    type: "Collector / OEM paint",
    tier: "A",
    confidence: "Reported",
    confirmedBy: "OEM BMW G80 color-code Shorts show active interest in precise OEM paint matching",
    notes: "Treated as a collector marque with steady resale demand, especially when the paint matches a correct OEM color code. Paint quality directly raises resale.",
    bestFor: ["collector builds", "color-code content"]
  },
  {
    name: "Leksoh",
    type: "Marque (unverified role)",
    tier: "B",
    confidence: "Pending",
    confirmedBy: "Named in the August 2026 '4 NEW VEHICLES' coverage alongside Civix RK and Mercer M21",
    notes: "Presence is confirmed but the exact role, rarity, and value are not yet established in public coverage. Treat numbers as pending until a creator source expands on it.",
    bestFor: ["mid-tier flips", "collection filling"]
  }
];

const faqItems = [
  {
    q: "What cars can you get in Junk Mechanics?",
    a: "August 2026 creator coverage confirms marques including Civix RK, Mercer M21, Leksoh, a BMW G80 marque, an M2CS-style build car, and a 570s supercar-family model, with a very rare (reported \"rarest\") car as a target rebuild."
  },
  {
    q: "Which Junk Mechanics car is the best?",
    a: "There is no single officially verified best car. Creator coverage treats Civix RK, the M2CS, the 570s, and the BMW G80 as high-value or collector models, but exact resale and repair costs are community-reported. Use the flip calculator before committing a large bid."
  },
  {
    q: "Is there a rarest car in Junk Mechanics?",
    a: "Creator coverage references a reported \"rarest car\" rebuild (\u201cI rebuilt the RAREST car...\u201d). Rarity exists as a system, but exact rarity odds and the specific rarest model carry a community-reported label."
  },
  {
    q: "Do cars have turbos in Junk Mechanics?",
    a: "Yes. Creator coverage confirms turbo upgrades, including twin-turbo kits fitted to a 570s. Turbos change performance and resale, but exact cost and boost numbers are community-reported."
  },
  {
    q: "Where do the vehicle values on this page come from?",
    a: "Marque names and mechanics are confirmed from August 2026 creator YouTube titles and descriptions. Exact dealership resale, repair cost, and rarity odds are not published by the developer and remain community-reported."
  }
];

export default function VehiclesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Vehicles", href: "/vehicles" }]} />
      <ItemListJsonLd />
      <FaqJsonLd items={faqItems} />
      <Breadcrumbs items={[{ label: "Vehicles", href: "/vehicles" }]} />

      <PageIntro
        eyebrow={`Checked ${checkedDate}`}
        title={`${siteConfig.gameName} Vehicles & Cars`}
        description="Every Junk Mechanics car-family confirmed by August 2026 creator coverage, with marque notes, rarity labels, and repair-cost guidance. Names are creator-verified; values are labeled reported or pending."
      />
      <AdsterraArticleTop />

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">How this list is built</span>
          <h2 className="mt-3 text-xl font-bold text-white">Names confirmed, values labeled</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            Each marque below was confirmed from a real August 2026 creator video title or update description.
            Because the developer does not publish an official car database, exact prices, rarity odds, and
            repair costs are marked Reported or Pending instead of being invented.
          </p>
        </article>
        <article className="content-card">
          <span className="mini-label">Known marques</span>
          <h2 className="mt-3 text-xl font-bold text-white">{vehicles.length} confirmed families</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            Civix RK, Mercer M21, Leksoh, M2CS, the 570s, and the BMW G80 marque are all confirmed. Expect more
            as August 2026 updates and creator builds go live.
          </p>
        </article>
        <article className="content-card">
          <span className="mini-label">Verified systems</span>
          <h2 className="mt-3 text-xl font-bold text-white">Rarity, turbos, and color codes</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            Rarity ranking, turbo / twin-turbo upgrades, and OEM color-code paints are all confirmed as live
            mechanics. These change which cars flip well and how much a clean paint job adds.
          </p>
        </article>
      </section>
      <AdsterraArticleMid />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Vehicle database"
          title="Junk Mechanics car families, ranked by flip preference"
          copy="Each entry states who confirmed the marque, what role it plays, and whether the numbers are reported or still pending verification."
        />
        <div className="mt-6 grid gap-4" id="vehicle-list">
          {vehicles.map((v) => (
            <article key={v.name} id={`vehicle-${v.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="content-card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-extrabold text-white">{v.name} <span className="text-sm font-semibold text-white/50">· {v.type}</span></h2>
                  <p className="mt-1 text-sm text-white/50">Confirmed: {v.confirmedBy}</p>
                </div>
                <div className="flex gap-2">
                  <span className="tier-badge">{v.tier}</span>
                  <span className="status-pill">{v.confidence}</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {v.bestFor.map((label) => (
                  <span key={label} className="mini-label">{label}</span>
                ))}
              </div>
              <p className="mt-4 max-w-4xl text-white/68">{v.notes}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Flipping with vehicles"
          title="Turn a marque into profit"
          copy="A car's name only matters once you confirm the flip math. These routes tell you what to check before you spend Cash."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/calculator" className="content-card">
            <span className="mini-label">Tool</span>
            <h3 className="mt-3 text-lg font-bold text-white">Flip value calculator</h3>
            <p className="mt-2 text-sm text-white/66">Auction bid + repair + resale = profit. Test any marque before you bid.</p>
          </Link>
          <Link href="/auction-guide" className="content-card">
            <span className="mini-label">Guide</span>
            <h3 className="mt-3 text-lg font-bold text-white">Auction guide</h3>
            <p className="mt-2 text-sm text-white/66">Bid caps and condition checks for buying wrecks cheap.</p>
          </Link>
          <Link href="/best-money-method" className="content-card">
            <span className="mini-label">Profit</span>
            <h3 className="mt-3 text-lg font-bold text-white">Best money method</h3>
            <p className="mt-2 text-sm text-white/66">Which marques feed the best poor-to-rich flip route.</p>
          </Link>
        </div>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}