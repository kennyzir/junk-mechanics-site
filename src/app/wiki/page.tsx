import type { Metadata } from "next";
import Link from "next/link";
import { monthLabel, officialLinks, siteConfig, wikiCards } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Wiki (${monthLabel}) - Vehicles, Gamepasses & Systems`,
  description: `${siteConfig.gameName} wiki hub for vehicles, car families, repair systems, gamepasses, garages, and source notes.`,
  alternates: { canonical: `${siteConfig.domain}/wiki` },
  openGraph: {
    title: `${siteConfig.gameName} Wiki (${monthLabel})`,
    description: `${siteConfig.gameName} wiki hub for vehicles, car families, repair systems, gamepasses, garages, and source notes.`,
    url: `${siteConfig.domain}/wiki`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Wiki (${monthLabel})`,
    description: `${siteConfig.gameName} wiki hub for vehicles, car families, repair systems, gamepasses, garages, and source notes.`,
    images: ["/opengraph-image"]
  }
};

export default function WikiPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }]} />
      <PageIntro
        eyebrow="Wiki hub"
        title={`${siteConfig.gameName} Wiki`}
        description="Use this hub to learn Junk Mechanics car families, the auction-to-dealership repair loop, garage and gamepass systems, then move into the dedicated vehicles, tier list, money method, and auction pages for exact answers."
      />
      <AdsterraArticleTop />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Game topics"
          title="Choose the system that affects your next flip"
          copy="Start with broad systems here, then use the focused routes for vehicles, tier list, auction guide, best money method, and gamepasses while the hub keeps the overall game-loop context."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {wikiCards.map((card) => (
            <Link key={card.title} href={card.href} className="content-card">
              <span className="mini-label">{card.eyebrow}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{card.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <AdsterraArticleMid />

      <section className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">Core loop</span>
          <h2 className="mt-3 text-xl font-bold text-white">Auction, repair, resell</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">You buy wrecks at the auction house, repair the radiator and battery, repaint where it helps, then sell at the dealership for profit. Reinvest Cash to buy rarer cars and expand your garage.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Marque families</span>
          <h2 className="mt-3 text-xl font-bold text-white">August 2026 added four vehicles</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Civix RK, Mercer M21, and Leksoh are among the new August 5, 2026 additions, alongside an ongoing BMW G80 marque with OEM color-code interest. Names are confirmed; exact values are community-reported.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Update system</span>
          <h2 className="mt-3 text-xl font-bold text-white">Paint, engine, and automation update</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">August 2026 brought engine-sound revamps, new paint materials like flake and matte, smoother free-cam, a server-join function, and auction-house automation. Update-sensitive claims are rechecked often.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Turbo system</span>
          <h2 className="mt-3 text-xl font-bold text-white">Turbos surfaced recently</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Recent creator coverage named turbos as a mechanic. Exact cost and resale impact are community-reported until a creator-owned source confirms numbers.</p>
        </article>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}