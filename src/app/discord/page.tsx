import type { Metadata } from "next";
import Link from "next/link";
import { checkedDate, monthLabel, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Discord (${monthLabel}) - Server & Code Announcements`,
  description: `How to find the official ${siteConfig.gameName} Discord, where code announcements surface first, and source-use boundaries for invites and community tips.`,
  alternates: { canonical: `${siteConfig.domain}/discord` },
  openGraph: {
    title: `${siteConfig.gameName} Discord (${monthLabel})`,
    description: `Find the ${siteConfig.gameName} Discord, code announcements, and invite-source boundaries.`,
    url: `${siteConfig.domain}/discord`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Discord (${monthLabel})`,
    description: `Find the ${siteConfig.gameName} Discord, code announcements, and invite-source boundaries.`,
    images: ["/opengraph-image"]
  }
};

const faqItems = [
  {
    q: "How do I join the Junk Mechanics Discord?",
    a: "Use the official Roblox game page or a creator-owned video description as your invite source of record. Invites in random comment threads or third-party sites are not proof they lead to the real server."
  },
  {
    q: "Where are Junk Mechanics codes announced first?",
    a: "Creator coverage points to the official Discord announcements channel as a first signal for new code drops, alongside dated trackers like the Level Nerds codes page. New codes tend to drop with major updates."
  },
  {
    q: "Should I trust a Discord invite from a random video?",
    a: "Not automatically. Confirm the invite resolves to the creator's server name and use the announcements channel before trusting codes shared there."
  },
  {
    q: "Why does this page not have a direct invite link?",
    a: "This site has not independently verified a live creator-owned invite. Presenting an unverified invite link as official would risk sending players to the wrong server. Use the Roblox game page for the current invite."
  }
];

export default function DiscordPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Discord", href: "/discord" }]} />
      <FaqJsonLd items={faqItems} />
      <Breadcrumbs items={[{ label: "Discord", href: "/discord" }]} />

      <PageIntro
        eyebrow={`Checked ${checkedDate}`}
        title={`${siteConfig.gameName} Discord`}
        description="How to find the official Junk Mechanics Discord server, where code announcements surface first, and how to keep invite-source boundaries straight."
      />
      <AdsterraArticleTop />

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">Why it matters</span>
          <h2 className="mt-3 text-xl font-bold text-white">Codes and updates surface here first</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            Creator coverage consistently points to the official Discord as one of the first places new Junk
            Mechanics codes and update announcements drop. Being in the server is the fastest way to catch a fresh
            code before it expires.
          </p>
        </article>
        <article className="content-card">
          <span className="mini-label">The safe path</span>
          <h2 className="mt-3 text-xl font-bold text-white">Invite from the official page</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            The most reliable invite comes from the official Roblox game page or a creator-owned video description.
            Confirm the server name resolves back to the creator before trusting it.
          </p>
        </article>
        <article className="content-card">
          <span className="mini-label">Claim state</span>
          <h2 className="mt-3 text-xl font-bold text-white">No invite link published here</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            This site has not independently verified a live creator-owned invite and will not post an unverified one.
            Use the Roblox game page as the source of record for the current server invite.
          </p>
        </article>
      </section>
      <AdsterraArticleMid />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Discord playbook"
          title="Use the server without falling for trolls"
          copy="Discord is a community convenience, not a verified source. These four habits keep you safe and informed."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="content-card">
            <span className="mini-label">1. Official first</span>
            <h2 className="mt-3 text-xl font-bold text-white">Prefer the game-page invite</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">
              Source your invite from the official Roblox game page or a creator-owned description, never from a
              comment thread label you cannot verify.
            </p>
          </article>
          <article className="content-card">
            <span className="mini-label">2. Announcements channel</span>
            <h2 className="mt-3 text-xl font-bold text-white">Watch the announcements channel</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">
              New codes and updates get announced there. Follow the announcements channel and check back around
              major updates.
            </p>
          </article>
          <article className="content-card">
            <span className="mini-label">3. Invite hug</span>
            <h2 className="mt-3 text-xl font-bold text-white">Beware expired and fake invites</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">
              Invites expire and are re-shared by trolls. If a link does not resolve to the creator&apos;s server, treat
              any code on it as suspect.
            </p>
          </article>
          <article className="content-card">
            <span className="mini-label">4. Verify codes</span>
            <h2 className="mt-3 text-xl font-bold text-white">Cross-check a code before trying it</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">
              A code shared in Discord should still match the dated tracker list. If a code only exists on an
              unverified invite, treat it as claimed or expired until confirmed.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Related"
          title="Beyond the Discord"
          copy="Codes and recent updates are also tracked here, so you never have to rely on a single community channel."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/codes" className="content-card">
            <span className="mini-label">Live list</span>
            <h3 className="mt-3 text-lg font-bold text-white">Codes</h3>
            <p className="mt-2 text-sm text-white/66">Verified active Junk Mechanics codes with rewards and redeem steps.</p>
          </Link>
          <Link href="/trello" className="content-card">
            <span className="mini-label">Status</span>
            <h3 className="mt-3 text-lg font-bold text-white">Trello, Discord & Wiki</h3>
            <p className="mt-2 text-sm text-white/66">Which community sources are official vs still unverified.</p>
          </Link>
          <Link href="/sources" className="content-card">
            <span className="mini-label">Evidence</span>
            <h3 className="mt-3 text-lg font-bold text-white">Source status</h3>
            <p className="mt-2 text-sm text-white/66">Where every claim on this site is checked.</p>
          </Link>
        </div>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}