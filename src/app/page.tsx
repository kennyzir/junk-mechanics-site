import type { Metadata } from "next";
import Link from "next/link";
import { vehicleSlugs, getVehicle } from "@/data/vehicles";
import {
  activeCodes,
  editorialSignals,
  faqs,
  heroMetrics,
  langAlternates,
  officialLinks,
  siteConfig,
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
  alternates: langAlternates(""),
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

      {/* ── PLAYER JOURNEY ROUTER: 4 progression stages (VV-style next-query chains) ── */}
      {[
        {
          stage: "First session",
          eyebrow: "Stage 1 · start",
          question: "I just joined — what do I do first?",
          answer: "Redeem codes for starting Cash, learn the auction and the repair loop, and buy your first garage slot.",
          chain: [
            { title: "Get free Cash with codes", href: "/codes", desc: "4 verified codes — redeem to bankroll your first bid." },
            { title: "Beginner guide", href: "/guides", desc: "First-session bidding, repair, and the sell loop." },
            { title: "Auction guide", href: "/auction-guide", desc: "Set a bid cap and check the condition before committing." }
          ]
        },
        {
          stage: "Grow Cash",
          eyebrow: "Stage 2 · profit",
          question: "How do I make money reliably?",
          answer: "Flip cheap wrecks through the repair loop and reinvest profits into garage capacity and gamepasses.",
          chain: [
            { title: "Best money method", href: "/best-money-method", desc: "The poor-to-rich route and what to reinvest first." },
            { title: "Flip calculator", href: "/calculator", desc: "Bid + repair + resale = profit. Test before you spend." },
            { title: "Garage & upgrades", href: "/shop-upgrades", desc: "Buy capacity so it stops throttling your flips." },
            { title: "Gamepasses", href: "/gamepasses", desc: "Which boosts actually speed the money loop." }
          ]
        },
        {
          stage: "Hunt rarer",
          eyebrow: "Stage 3 · collect",
          question: "Which cars are worth chasing?",
          answer: "Supercars (570s) and legend-tier marques (Jesko) resell for the biggest margins but cost more upfront.",
          chain: [
            { title: "Vehicle tier list", href: "/tier-list", desc: "Which marques justify the flip effort." },
            { title: "Full vehicle database", href: "/vehicles", desc: "9 confirmed marques with rarity and source labels." },
            { title: "BMW M2CS build", href: "/vehicles/m2cs", desc: "Collector route where paint sets the resale." },
            { title: "570s turbo target", href: "/vehicles/570s", desc: "The twin-turbo supercar with the highest margin." }
          ]
        },
        {
          stage: "Endgame",
          eyebrow: "Stage 4 · optimize",
          question: "How do I max out the loop?",
          answer: "Rarity, turbo upgrades, and OEM paint raise resale per car — combine them on the highest-tier marques.",
          chain: [
            { title: "Vehicle tier list", href: "/tier-list", desc: "Rank every marque by flip value and profit risk." },
            { title: "Rarest marque", href: "/vehicles/jesko", desc: "Legend-tier candidate for the biggest resale swing." },
            { title: "Flip calculator", href: "/calculator", desc: "Run the highest-margin builds before committing Cash." }
          ]
        }
      ].map((sr) => (
        <section key={sr.stage} className={sr.stage === "Grow Cash" || sr.stage === "Endgame" ? "bg-white/[0.025]" : ""}>
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-2">
            <div>
              <span className="mini-label">{sr.eyebrow}</span>
              <h2 className="mt-3 text-2xl font-bold text-[color:var(--accent)]">{sr.stage}</h2>
              <p className="mt-1 text-base font-semibold text-white/80">{sr.question}</p>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/65">{sr.answer}</p>
            </div>
            <div className="grid gap-3">
              {sr.chain.map((c) => (
                <Link key={c.href} href={c.href} className="row-link">
                  <span>
                    <strong>{c.title}</strong>
                    <small>{c.desc}</small>
                  </span>
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── DAILY FLIP ROUTINE: actionable checklist (stealanegg dwell-time lever §8) ── */}
      <section className="border-y border-white/10 bg-black/25">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <span className="mini-label">Daily routine</span>
          <h2 className="mt-3 text-2xl font-bold text-white">Today&apos;s flip routine</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-white/65">
            A repeatable cash-building loop so you always have a next step — redeem, flip, reinvest, then
            chase the parts of the game that raise per-car profit.
          </p>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              {
                step: "1",
                title: "Redeem today's codes",
                body: "Bank first Cash with any verified codes (active list on /codes).",
                href: "/codes"
              },
              {
                step: "2",
                title: "Flip one or two wrecks",
                body: "Bid under your repair-adjusted cap, run the standard repair, resell.",
                href: "/calculator"
              },
              {
                step: "3",
                title: "Reinvest into capacity",
                body: "Add a garage slot or a money-boost gamepass so flips stop throttling.",
                href: "/shop-upgrades"
              },
              {
                step: "4",
                title: "Hunt a target marque",
                body: "Settle on a rarity you can win (570s / Jesko / M2CS) and build the flip plan.",
                href: "/vehicles"
              }
            ].map((item) => (
              <li key={item.step} className="content-card flex gap-4">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white/10 text-sm font-bold text-[color:var(--accent)]">
                  {item.step}
                </span>
                <div>
                  <Link href={item.href} className="font-semibold text-white underline-offset-4 hover:underline">
                    {item.title}
                  </Link>
                  <p className="mt-1 text-sm leading-6 text-white/60">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-xs text-white/40">
            Realistic expectations: profit per flip comes from your sample run, not a guaranteed price sheet.
            Consistent small flips beat reckless bets on legend-tier marques.
          </p>
        </div>
      </section>

      {/* ── GARAGE COMPARISON TABLE: scannable + funnels into /vehicles (stealanegg §3,§8) ── */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="mini-label">Garage DB</span>
            <h2 className="mt-3 text-2xl font-bold text-white">Every confirmed garage marque</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/65">
              Rank rarity and flip preference at a glance. Click a marque to open its full database page and
              the how-to-get / worth-it / how-rare guides.
            </p>
          </div>
          <Link href="/vehicles" className="button-secondary">Full vehicle database →</Link>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wide text-white/45">
                <th className="py-3 pr-4 font-semibold">Marque</th>
                <th className="py-3 px-4 font-semibold">Type</th>
                <th className="py-3 px-4 font-semibold">Rarity tier</th>
                <th className="py-3 px-4 font-semibold">Flip</th>
              </tr>
            </thead>
            <tbody>
              {vehicleSlugs.map((slug) => {
                const c = getVehicle(slug);
                if (!c) return null;
                return (
                  <tr key={c.slug} className="border-b border-white/5 hover:bg-white/[0.02]">
                    <td className="py-3 pr-4">
                      <Link
                        href={`/vehicles/${c.slug}`}
                        className="font-semibold text-white hover:text-[color:var(--accent)]"
                      >
                        {c.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-white/70">{c.type}</td>
                    <td className="py-3 px-4 text-white/70">{c.rarityTier}</td>
                    <td className="py-3 px-4"><span className="tier-badge">{c.tier}</span></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section className="border-y border-white/10 bg-black/25">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <SectionHeader
            eyebrow="Tools"
            title="Run the numbers before you bid"
            copy="Decision tools protect your Cash. Use the flip calculator to estimate repair cost and resale profit on any marque."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {toolCards.map((tool) => (
              <Link key={tool.href} href={tool.href} className="content-card">
                <span className="mini-label">{tool.eyebrow}</span>
                <h3 className="mt-3 text-xl font-bold text-white">{tool.title}</h3>
                <p className="mt-2 text-sm text-white/65">{tool.description}</p>
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