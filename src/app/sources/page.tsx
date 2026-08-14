import type { Metadata } from "next";
import Link from "next/link";
import { monthLabel, officialLinks, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Sources (${monthLabel})`,
  description: `Source and verification notes for ${siteConfig.gameName} codes, vehicles, tier-list updates, and gameplay claims.`,
  alternates: { canonical: `${siteConfig.domain}/sources` },
  openGraph: {
    title: `${siteConfig.gameName} Sources (${monthLabel})`,
    description: `Source and verification notes for ${siteConfig.gameName} codes, vehicles, tier-list updates, and gameplay claims.`,
    url: `${siteConfig.domain}/sources`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Sources (${monthLabel})`,
    description: `Source and verification notes for ${siteConfig.gameName} codes, vehicles, tier-list updates, and gameplay claims.`,
    images: ["/opengraph-image"]
  }
};

export default function SourcesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Sources", href: "/sources" }]} />
      <Breadcrumbs items={[{ label: "Sources", href: "/sources" }]} />
      <PageIntro
        eyebrow="Verification"
        title={`${siteConfig.gameName} Sources`}
        description="Use this page to see where code, vehicle, tier-list, update, Discord, wiki, and guide claims are checked. Official Roblox pages should win when sources disagree."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Primary references"
          title="Where claims should be checked"
          copy="Start with official Roblox and creator-owned links, then use dated community references only when official details are unavailable."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {officialLinks.map((link) => {
            const content = (
              <>
                <span className="mini-label">{link.eyebrow}</span>
                <h2 className="mt-3 text-xl font-bold text-white">{link.title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/65">{link.description}</p>
              </>
            );

            return link.href.startsWith("/") ? (
              <Link key={link.href} href={link.href} className="content-card">
                {content}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className="content-card" target="_blank" rel="noreferrer">
                {content}
              </a>
            );
          })}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Current claims"
          title="What the August 2026 source packet supports"
          copy="This run verified four active codes, confirmed the August 5, 2026 vehicle update, and kept exact marque values and gamepass ROI community-reported until a creator-owned source or a live test publishes numbers."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="content-card">
            <span className="mini-label">Codes</span>
            <h2 className="mt-3 text-xl font-bold text-white">Four codes verified</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">
              UPDATE4K and 5500THANKS give 20K Cash, while THIRDCODEOK and FOURTHCODINITUNGTUNG give free
              rewards. All four come from the Level Nerds roundup updated August 12, 2026.
            </p>
          </article>
          <article className="content-card">
            <span className="mini-label">Community status</span>
            <h2 className="mt-3 text-xl font-bold text-white">Discord invite not independently verified</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Creator guides point to the official Discord for code drops, but this site has not independently
              confirmed a live creator invite. The official Roblox game page is the source of record for the
              current invite link.
            </p>
          </article>
          <article className="content-card">
            <span className="mini-label">Vehicle update</span>
            <h2 className="mt-3 text-xl font-bold text-white">August 5, 2026 added four vehicles</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Civix RK, Mercer M21, and Leksoh are among the new August 5, 2026 additions, alongside ongoing BMW
              G80 marque interest. Names are confirmed; exact values remain community-reported.
            </p>
          </article>
          <article className="content-card">
            <span className="mini-label">Turbo system</span>
            <h2 className="mt-3 text-xl font-bold text-white">Turbos surfaced recently</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Recent creator coverage named turbos as a mechanic. Exact cost and resale impact need a
              creator-owned source before this site treats them as settled.
            </p>
          </article>
          <article className="content-card">
            <span className="mini-label">Claim boundary</span>
            <h2 className="mt-3 text-xl font-bold text-white">Marque values are reported, not official</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Civix RK and G80 rarity and resale carry a community-reported label because the official page does
              not publish exact odds or dealership prices. Recheck in-game before trusting a value table.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}