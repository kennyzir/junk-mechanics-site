import type { Metadata } from "next";
import Link from "next/link";
import {
  activeCodes,
  checkedDate,
  expiredCodes,
  faqs,
  monthLabel,
  siteConfig
} from "@/data/site";
import {
  BreadcrumbJsonLd,
  ClaimReviewJsonLd,
  FaqJsonLd,
  HowToJsonLd
} from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { formatSiteDate } from "@/lib/site-date";

const pageTitle = `${siteConfig.gameName} Codes (${monthLabel})`;
const pageDescription = `Current ${siteConfig.gameName} codes, rewards, how to redeem them, expired codes, and where new drops are announced.`;

export const metadata: Metadata = {
  title: `${pageTitle} - Working, Expired & How to Redeem`,
  description: pageDescription,
  alternates: { canonical: `${siteConfig.domain}/codes` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteConfig.domain}/codes`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/opengraph-image"]
  }
};

const watchedSources = [
  {
    label: "Official Roblox game page",
    href: "https://www.roblox.com/games/70435795041539/Junk-Mechanics",
    note: "Source of record for the game title, creator group, badges, and live availability."
  },
  {
    label: "Level Nerds codes roundup",
    href: "https://levelnerds.com/junk-mechanics-codes/",
    note: "August 12, 2026 roundup verified UPDATE4K, 5500THANKS, THIRDCODEOK, and FOURTHCODINITUNGTUNG."
  },
  {
    label: "Official Discord",
    href: "/sources",
    note: "Creator-announced code drops tend to surface here first; invite status is tracked on the sources page."
  },
  {
    label: "Source status page",
    href: "/sources",
    note: "Full list of the official, creator-owned, and community sources this site checks."
  }
];

const redeemSteps = [
  {
    name: "Open Junk Mechanics from the official Roblox page",
    text: "Launch the game from roblox.com/games/70435795041539 to avoid fake copies, and let it fully load before finding the code panel."
  },
  {
    name: "Find the Codes or Rewards button on the main menu",
    text: "Most Roblox code flows live in a Codes or Rewards button on the main menu, a Shop or Store panel, or a Settings screen. Tap the code icon to open the redeem box."
  },
  {
    name: "Type or paste the code exactly as listed, including capital letters",
    text: "Junk Mechanics codes are case-sensitive. Copy the code from this page rather than retyping it, and watch for stray spaces."
  },
  {
    name: "Tap confirm and check your Cash rewards",
    text: "On a successful redeem, free Cash or rewards land instantly. If the code says expired, it may be claimed already or the code was rolled over."
  },
  {
    name: "Check back after updates",
    text: "New codes drop alongside major updates like the August 5, 2026 vehicle and paint update. Recheck the active list after any new release."
  }
];

export default function CodesPage() {
  const totalActive = activeCodes.length;
  const totalExpired = expiredCodes.length;
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Codes", href: "/codes" }
        ]}
      />
      <FaqJsonLd items={faqs.codes} />
      <HowToJsonLd
        name={`How to redeem ${siteConfig.gameName} codes`}
        description="Step-by-step Junk Mechanics code redemption flow inside the Roblox game."
        steps={redeemSteps}
      />
      <ClaimReviewJsonLd
        claim="Junk Mechanics has active redeemable codes as of August 2026."
        itemReviewed={{ name: siteConfig.gameName, type: "VideoGame" }}
        author={{ name: siteConfig.gameName, url: siteConfig.domain }}
        datePublished={checkedDate}
        rating={{ ratingValue: 5, bestRating: 5, worstRating: 1, alternateName: "True - four active codes verified" }}
      />
      <Breadcrumbs items={[{ label: "Codes", href: "/codes" }]} />

      <PageIntro
        eyebrow={`Status checked ${formatSiteDate(checkedDate)} · ${totalActive} active · ${totalExpired} expired`}
        title={`${siteConfig.gameName} Codes`}
        description={`The latest ${siteConfig.gameName} codes, their rewards, how to redeem them, and where new drops are announced. Codes are verified from a dated source before they appear on this page.`}
      />
      <AdsterraArticleTop />

      {/* Quick rules + jump nav (Evomon-style top-of-page utility) */}
      <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_240px]">
        <div className="rounded-lg border border-white/10 bg-black/20 p-5">
          <h2 className="text-sm font-bold uppercase tracking-wide text-[color:var(--accent)]">Quick rules</h2>
          <ul className="mt-3 grid gap-2 text-sm text-white/70 md:grid-cols-2">
            <li>· Codes expire fast — redeem the current set now, not later.</li>
            <li>· Codes are case-sensitive; paste them exactly as listed.</li>
            <li>· Each code usually works once per account.</li>
            <li>· New codes drop with updates — the next batch arrives with the next patch or like-milestone.</li>
          </ul>
        </div>
        <nav className="rounded-lg border border-white/10 bg-black/20 p-5" aria-label="On this page">
          <h2 className="text-sm font-bold uppercase tracking-wide text-[color:var(--accent)]">On this page</h2>
          <ul className="mt-3 grid gap-2 text-sm text-white/70">
            <li><a href="#active-codes" className="hover:text-[color:var(--accent)]">Active codes</a></li>
            <li><a href="#how-to-redeem" className="hover:text-[color:var(--accent)]">How to redeem</a></li>
            <li><a href="#when-to-use" className="hover:text-[color:var(--accent)]">When to use rewards</a></li>
            <li><a href="#why-codes-fail" className="hover:text-[color:var(--accent)]">Why codes fail</a></li>
            <li><a href="#next-signals" className="hover:text-[color:var(--accent)]">Next code signals</a></li>
          </ul>
        </nav>
      </div>

      <section className="mt-10" id="active-codes" aria-labelledby="active-codes">
        <SectionHeader
          eyebrow="Active list"
          title="Working Junk Mechanics codes"
          copy="Codes verified from the August 12, 2026 Level Nerds roundup. Redeem these quickly before they expire."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {activeCodes.map((code) => (
            <article
              key={code.code}
              className="content-card"
              id={`code-${code.code.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-mono text-2xl font-extrabold text-[color:var(--accent)]">{code.code}</h2>
                <span className="status-pill">{code.status}</span>
              </div>
              <p className="mt-3 text-white/70">{code.reward}</p>
              <p className="mt-2 text-sm text-white/45">Verified: {code.addedDate}</p>
            </article>
          ))}
        </div>
        {expiredCodes.length > 0 ? (
          <div className="mt-8">
            <SectionHeader
              eyebrow="Expired"
              title="Junk Mechanics codes that no longer work"
              copy="Codes move here once they stop redeeming, so the record stays useful."
            />
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {expiredCodes.map((code) => (
                <article key={code.code} className="content-card opacity-80">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-mono text-xl font-bold text-white/80 line-through decoration-white/40">
                      {code.code}
                    </h3>
                    <span className="status-pill">{code.status}</span>
                  </div>
                  <p className="mt-2 text-sm text-white/55">{code.reward}</p>
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </section>
      <AdsterraArticleMid />

      <section className="mt-10 grid gap-4 lg:grid-cols-2" aria-labelledby="how-to-redeem">
        <article className="content-card" id="how-to-redeem">
          <SectionHeader
            eyebrow="Redeem flow"
            title="How to redeem Junk Mechanics codes"
            copy="Use these five steps in order. The exact in-game location of the code panel can change when the game updates."
          />
          <ol className="mt-5 grid gap-3 text-white/70">
            {redeemSteps.map((step, index) => (
              <li key={step.name}>
                <strong className="text-white">{index + 1}. {step.name}.</strong> {step.text}
              </li>
            ))}
          </ol>
        </article>
        <article className="content-card">
          <SectionHeader
            eyebrow="Where codes drop"
            title="Where to find new Junk Mechanics codes first"
            copy="New codes drop alongside updates, in the official Discord, and on dated trackers. Check these sources in order."
          />
          <div className="mt-4 grid gap-3">
            {watchedSources.map((source) => (
              <a
                key={source.label}
                href={source.href}
                target={source.href.startsWith("http") ? "_blank" : undefined}
                rel={source.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex flex-col gap-1 rounded-md border border-white/10 bg-black/20 p-3 transition hover:border-[color:var(--accent)]"
              >
                <span className="text-base font-bold text-white">{source.label}</span>
                <span className="text-sm leading-6 text-white/66">{source.note}</span>
              </a>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card" id="when-to-use">
          <SectionHeader
            eyebrow="Spend advice"
            title="When to use your code rewards"
            copy="Free Cash from codes is a bankroll, not the win condition. Reinvest it to start the money loop, and avoid burning it on overpriced wrecks."
          />
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/70">
            <li><strong className="text-white">Start the loop:</strong> use the first 20K Cash reward on your first cheap wreck and flip it through the repair loop so it becomes more Cash.</li>
            <li><strong className="text-white">Buy capacity before new cars:</strong> a garage slot or capacity gamepass removes the storage chokehold that stops profitable flips.</li>
            <li><strong className="text-white">Test with the calculator:</strong> check a marque in the flip calculator before committing a free-Cash stack, so a bad auction bid can&apos;t wipe the reward.</li>
            <li><strong className="text-white">Hold for a target marque:</strong> if you want a 570s or legend-tier car, save the reward instead of spending it on a filler wreck.</li>
          </ul>
        </article>
        <article className="content-card" id="why-codes-fail">
          <SectionHeader
            eyebrow="Troubleshooting"
            title="Why a Junk Mechanics code might not work"
            copy="A code showing as invalid usually has one of a few causes. Check these before assuming the code is dead."
          />
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/70">
            <li><strong className="text-white">Expired:</strong> codes roll over fast. A code that worked last week may be dead today — check the Active list only.</li>
            <li><strong className="text-white">Case or spacing:</strong> paste exactly as listed; one wrong letter or trailing space fails the check.</li>
            <li><strong className="text-white">Already claimed:</strong> most codes work once per account. If you redeemed it before, it will look invalid now.</li>
            <li><strong className="text-white">Typo on the panel path:</strong> the Codes button can sit in Main Menu, Shop, or Settings after an update. Re-open the correct panel.</li>
            <li><strong className="text-white">Server rollout:</strong> right after a new code drops, it can take minutes to be live for everyone. Wait and retry.</li>
          </ul>
        </article>
      </section>

      <section className="mt-10" id="next-signals">
        <SectionHeader
          eyebrow="What to watch"
          title="Signals a new code drop is coming"
          copy="Codes tend to arrive with updates or like-milestones. Here is what to watch so you catch the next redeem window first."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="content-card">
            <span className="mini-label">Update cadence</span>
            <h3 className="mt-3 text-lg font-bold text-white">Major patch = new batch</h3>
            <p className="mt-2 text-sm leading-6 text-white/66">The August 5, 2026 update (4 vehicles + paint + turbos) shipped new codes. Expect a code drop whenever a big content patch lands.</p>
          </div>
          <div className="content-card">
            <span className="mini-label">Community</span>
            <h3 className="mt-3 text-lg font-bold text-white">Official Discord announces first</h3>
            <p className="mt-2 text-sm leading-6 text-white/66">Creator-announced codes tend to surface in the official Discord before dated trackers. Seek the official invite from the Roblox page.</p>
          </div>
          <div className="content-card">
            <span className="mini-label">Like milestones</span>
            <h3 className="mt-3 text-lg font-bold text-white">Milestone rewards</h3>
            <p className="mt-2 text-sm leading-6 text-white/66">Roblox game pages reward like-count milestones with codes. Watch the game page for the next likes target to guess timing.</p>
          </div>
        </div>
      </section>

      <section className="mt-10" aria-labelledby="related-routes">
        <SectionHeader
          eyebrow="Related routes"
          title="Other Junk Mechanics pages that use the same source sweep"
          copy="Codes are one part of the flip-game loop. Use the tier list and calculator to turn free Cash into profit."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/tier-list" className="content-card transition hover:border-[color:var(--accent)]">
            <span className="mini-label">Rankings</span>
            <h2 className="mt-3 text-lg font-bold text-white">Vehicle tier list</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">
              Compare marque families by flip value, repair cost, and rarity.
            </p>
          </Link>
          <Link href="/calculator" className="content-card transition hover:border-[color:var(--accent)]">
            <span className="mini-label">Calculator</span>
            <h2 className="mt-3 text-lg font-bold text-white">Flip value calculator</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">
              Estimate repair cost and resale profit before you bid a free-Cash stack on a wreck.
            </p>
          </Link>
          <Link href="/sources" className="content-card transition hover:border-[color:var(--accent)]">
            <span className="mini-label">Sources</span>
            <h2 className="mt-3 text-lg font-bold text-white">Source status page</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">
              Full source list behind every code and gameplay claim on this site.
            </p>
          </Link>
        </div>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}