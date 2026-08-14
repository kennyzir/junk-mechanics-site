import type { Metadata } from "next";
import Link from "next/link";
import { guideClusters, monthLabel, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Guides (${monthLabel}) - Auctions, Repairs & Money`,
  description: `Junk Mechanics guides for auction bidding, repair and flip routes, the best money method, garages, upgrades, and turbo decisions.`,
  alternates: { canonical: `${siteConfig.domain}/guides` },
  openGraph: {
    title: `${siteConfig.gameName} Guides (${monthLabel})`,
    description: `Junk Mechanics guides for auction bidding, repair and flip routes, the best money method, garages, upgrades, and turbo decisions.`,
    url: `${siteConfig.domain}/guides`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Guides (${monthLabel})`,
    description: `Junk Mechanics guides for auction bidding, repair and flip routes, the best money method, garages, upgrades, and turbo decisions.`,
    images: ["/opengraph-image"]
  }
};

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }]} />
      <PageIntro
        eyebrow="Guide hub"
        title={`${siteConfig.gameName} Guides`}
        description="Use this hub for auction bidding, the repair-to-dealership flip loop, the best money method, garage and upgrade choices, and gamepass decisions, then move into the dedicated tier list, calculator, vehicles, and source pages."
      />
      <AdsterraArticleTop />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Recommended guides"
          title="Start with the loop that makes or loses Cash"
          copy="Pick the guide that matches your current problem, then check codes, the tier list, and the flip calculator before committing a large bid."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {guideClusters.map((guide) => (
            <Link key={guide.title} href={guide.href} className="content-card">
              <span className="mini-label">{guide.eyebrow}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{guide.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <AdsterraArticleMid />

      <section className="mt-10 grid gap-4 lg:grid-cols-4">
        <article className="content-card">
          <span className="mini-label">First session</span>
          <h2 className="mt-3 text-xl font-bold text-white">Bid small until you know vehicle value</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use cheap wreck flips to learn repair costs, marque resale, and selling timing before chasing a high-value car at auction.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Repair loop</span>
          <h2 className="mt-3 text-xl font-bold text-white">Standard repairs are the volume game</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Radiator and battery flips are cheap and repeatable. Paint and collector builds on marques like the BMW G80 are higher margin but higher variance.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Profit loop</span>
          <h2 className="mt-3 text-xl font-bold text-white">Check the flip value before overbidding</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">A rare marque can still be a loss if parts are expensive and the dealership price does not move. Run the calculator before committing Cash.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Turbo watch</span>
          <h2 className="mt-3 text-xl font-bold text-white">Turbos are new and community-reported</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Recent creator coverage surfaced turbos as an update feature, but exact cost and resale impact should be treated as reported until a creator-owned source confirms numbers.</p>
        </article>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}