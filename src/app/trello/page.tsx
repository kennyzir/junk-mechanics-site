import type { Metadata } from "next";
import Link from "next/link";
import { gameConfig } from "@/data/game.config";
import { monthLabel, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Trello, Discord & Wiki Status (${monthLabel})`,
  description: `Official-link status for ${siteConfig.gameName} Trello, Discord, wiki, Roblox updates, codes, and community sources.`,
  alternates: { canonical: `${siteConfig.domain}/trello` },
  openGraph: {
    title: `${siteConfig.gameName} Trello, Discord & Wiki Status (${monthLabel})`,
    description: `Track which ${siteConfig.gameName} community sources are official and which still need a creator-owned confirmation.`,
    url: `${siteConfig.domain}/trello`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Trello, Discord & Wiki Status (${monthLabel})`,
    description: `Track which ${siteConfig.gameName} community sources are official and which still need a creator-owned confirmation.`,
    images: ["/opengraph-image"]
  }
};

const statusRows = [
  {
    label: "Official Roblox page",
    href: gameConfig.dataSources.officialGameUrl,
    status: "Primary source",
    note: "Use this for the game title, creator, Roblox availability, badges, and public update text."
  },
  {
    label: "Discord",
    href: "/discord",
    status: "Not independently verified on this site",
    note: "Creator guides point players to an official Discord for code drops, but this site has not independently confirmed a live creator invite. Use the official Roblox game page as the source of record for the current invite link."
  },
  {
    label: "Trello",
    href: gameConfig.dataSources.trello ?? "#",
    status: gameConfig.dataSources.trello && gameConfig.dataSources.trello !== "#" ? "Candidate source" : "No official board verified",
    note: "Many Roblox players search for a Trello board even when a game does not publish one. This site has not found or verified a creator-owned Junk Mechanics Trello board, so Trello stays unverified."
  },
  {
    label: "Wiki",
    href: "/sources",
    status: "No dedicated community wiki on this site",
    note: "This site tracks its own source notes. Creator-owned or community wiki data for Junk Mechanics is community-reported and not treated as official."
  }
];

export default function TrelloStatusPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Trello, Discord & Wiki", href: "/trello" }]} />
      <Breadcrumbs items={[{ label: "Trello, Discord & Wiki", href: "/trello" }]} />
      <PageIntro
        eyebrow="Community status"
        title={`${siteConfig.gameName} Trello, Discord & Wiki Status`}
        description={`Use this page to check which ${siteConfig.gameName} community sources this site has verified, which are official, and where to confirm codes, updates, and tier-list changes. A dedicated creator-owned Discord or Trello is not yet independently verified here.`}
      />
      <AdsterraArticleTop />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Official links"
          title="Source status"
          copy="Use Roblox as the official baseline. Discord invites and any Trello board are treated as monitored community context until a creator-owned source confirms them."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {statusRows.map((item) => {
            const isInternal = item.href.startsWith("/");
            const hasLink = item.href !== "#";
            const content = (
              <>
                <span className="mini-label">{item.status}</span>
                <h2 className="mt-3 text-xl font-bold text-white">{item.label}</h2>
                <p className="mt-2 text-sm leading-6 text-white/65">{item.note}</p>
              </>
            );

            if (!hasLink) {
              return (
                <article key={item.label} className="content-card">
                  {content}
                </article>
              );
            }

            return isInternal ? (
              <Link key={item.label} href={item.href} className="content-card">
                {content}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className="content-card" target="_blank" rel="noreferrer">
                {content}
              </a>
            );
          })}
        </div>
      </section>
      <AdsterraArticleMid />

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Link href="/discord" className="content-card">
          <span className="mini-label">Discord</span>
          <h2 className="mt-3 text-xl font-bold text-white">Discord server status</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Check public invite reachability, source-use boundaries, and why Discord is monitored separately from Trello.</p>
        </Link>
        <Link href="/codes" className="content-card">
          <span className="mini-label">Freshness</span>
          <h2 className="mt-3 text-xl font-bold text-white">Codes verification</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Check active and expired rewards against official update surfaces before publishing code claims.</p>
        </Link>
        <Link href="/tier-list" className="content-card">
          <span className="mini-label">Meta</span>
          <h2 className="mt-3 text-xl font-bold text-white">Tier-list sources</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use Discord, YouTube, update notes, and wiki data as signals, then label ranking claim state clearly.</p>
        </Link>
        <Link href="/sources" className="content-card">
          <span className="mini-label">Editorial</span>
          <h2 className="mt-3 text-xl font-bold text-white">Source checklist</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Keep official, community, video, Reddit, and guide-site evidence separated so updates stay auditable.</p>
        </Link>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}