import type { Metadata } from "next";
import Link from "next/link";
import {
  activeCodes,
  editorialSignals,
  faqs,
  guideClusters,
  heroMetrics,
  officialLinks,
  siteConfig,
  tierPreview,
  toolCards,
  videoGuides
} from "@/data/site";
import { FaqJsonLd, SoftwareApplicationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { SectionHeader, TrustNote } from "@/components/ui/content";
import { BrandHero } from "@/components/home/BrandHero";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Codes, Cars, Tier List & Money Method`,
  description: siteConfig.description,
  alternates: { canonical: siteConfig.domain },
  openGraph: {
    title: `${siteConfig.gameName} Codes, Cars, Tier List & Money Method`,
    description: siteConfig.description,
    url: siteConfig.domain,
    type: "website",
    images: [{ url: "/opengraph-image" }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Codes, Cars, Tier List & Money Method`,
    description: siteConfig.description,
    images: ["/opengraph-image"]
  }
};

export default function HomePage() {
  return (
    <main>
      <WebSiteJsonLd />
      <SoftwareApplicationJsonLd />
      <FaqJsonLd items={faqs.home} />

      <BrandHero />

      <section className="border-y border-white/10 bg-black/25">
        <div className="mx-auto grid max-w-7xl gap-px px-4 py-5 sm:grid-cols-2 lg:grid-cols-4">
          {heroMetrics.map((metric) => (
            <div key={metric.label} className="bg-white/[0.03] px-4 py-4">
              <div className="text-2xl font-bold text-[color:var(--accent)]">{metric.value}</div>
              <div className="mt-1 text-sm font-semibold text-white">{metric.label}</div>
              <div className="mt-1 text-sm text-white/60">{metric.note}</div>
            </div>
          ))}
        </div>
      </section>
      <AdsterraArticleTop />

      {/* ── FRESH: codes first — the highest-repeat intent ── */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Fresh · verified"
            title="Active Junk Mechanics codes"
            copy="Codes drive the most repeat search traffic and expire fast, so the homepage leads with the latest verified set. Each code lists a confirmed source and reward."
          />
          <Link className="button-secondary" href="/codes">
            View all codes
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {activeCodes.slice(0, 4).map((code) => (
            <article key={code.code} className="content-card">
              <div className="flex items-center justify-between gap-3">
                <span className="status-pill">{code.status}</span>
                <span className="text-xs text-white/50">{code.addedDate}</span>
              </div>
              <h3 className="mt-4 font-mono text-xl font-bold text-[color:var(--accent)]">{code.code}</h3>
              <p className="mt-2 text-sm text-white/65">{code.reward}</p>
            </article>
          ))}
        </div>
      </section>
      <AdsterraArticleMid />

      {/* ── LEARN: new player questions first ── */}
      <section className="bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Learn · new players"
              title="New to Junk Mechanics?"
              copy="Junk Mechanics is an auction-to-dealership economy: bid on wrecks, repair the radiator and battery, repaint, then resell at the dealership. Start here if you are deciding what to buy first."
            />
            <div className="mt-6 grid gap-3">
              {guideClusters.map((guide) => (
                <Link key={guide.href} href={guide.href} className="row-link">
                  <span>
                    <strong>{guide.title}</strong>
                    <small>{guide.description}</small>
                  </span>
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="Discover · cars"
              title="Which car should you chase?"
              copy="August 2026 confirmed six marque families — Civix RK, Mercer M21, Leksoh, the M2CS, the 570s, and the BMW G80 marque. Each entry says who confirmed it and whether the numbers are reported or verified."
            />
            <div className="mt-6 grid gap-3">
              {[
                { title: "Full vehicle database", href: "/vehicles", description: "All confirmed marques with rarity and flip-value labels." },
                { title: "Flip value calculator", href: "/calculator", description: "Auction bid + repair + resale = profit. Test any marque before you spend Cash." },
                { title: "Auction house guide", href: "/auction-guide", description: "Bid caps and condition checks for buying wrecks cheap." }
              ].map((c) => (
                <Link key={c.href} href={c.href} className="row-link">
                  <span>
                    <strong>{c.title}</strong>
                    <small>{c.description}</small>
                  </span>
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OPTIMIZE: tier list + tools ── */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeader
          eyebrow="Optimize"
          title="Tier list and tools to flip smarter"
          copy="Rank marques, compare value, and run the flip calculator before you commit a bid. These decisions protect your Cash."
        />
        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.1fr]">
          <div className="grid gap-4 md:grid-cols-3">
            {toolCards.map((tool) => (
              <Link key={tool.href} href={tool.href} className="content-card">
                <span className="mini-label">{tool.eyebrow}</span>
                <h3 className="mt-3 text-xl font-bold text-white">{tool.title}</h3>
                <p className="mt-2 text-sm text-white/65">{tool.description}</p>
              </Link>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {tierPreview.map((item) => (
              <Link key={item.name} href="/tier-list" className="content-card">
                <div className="flex items-center justify-between">
                  <span className="tier-badge">{item.tier}</span>
                  <span className="text-sm text-white/50">{item.role}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{item.name}</h3>
                <p className="mt-2 text-sm text-white/65">{item.reason}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <AdsterraArticleBottom />

      {/* ── SOURCES: trust / EEAT ── */}
      <section className="bg-black/25">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <SectionHeader
            eyebrow="Trust & sources"
            title="Official and community sources"
            copy="Every claim on this site carries a source and a claim-state label. Use these links and notes to see what is official, what is community-reported, and what still needs checking."
          />
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {officialLinks.map((link) => {
              const content = (
                <>
                  <span className="mini-label">{link.eyebrow}</span>
                  <h3 className="mt-3 text-lg font-bold text-white">{link.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{link.description}</p>
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
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {editorialSignals.map((signal) => (
              <TrustNote key={signal.title} title={signal.title} body={signal.body} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CREATOR RESEARCH: experience / E-E-A-T support ── */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeader
          eyebrow="Community research"
          title="Video and creator references"
          copy="Recent creator videos help players understand the game loop, updates, and strategy. Treat videos as supporting references, not official patch notes."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {videoGuides.map((video) => (
            <a key={video.href} href={video.href} className="content-card" target="_blank" rel="noreferrer">
              <span className="mini-label">{video.source ?? video.eyebrow}</span>
              <h3 className="mt-3 text-lg font-bold text-white">{video.title}</h3>
              <p className="mt-2 text-sm text-white/65">{video.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeader
          eyebrow="FAQ"
          title={`${siteConfig.gameName} quick answers`}
          copy="Quick answers for codes, sources, rankings, and the next page to check."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqs.home.map((faq) => (
            <article key={faq.q} className="content-card">
              <h3 className="text-lg font-bold text-white">{faq.q}</h3>
              <p className="mt-2 text-sm leading-6 text-white/68">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}