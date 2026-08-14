import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { vehicleSlugs, getVehicle } from "@/data/vehicles";
import { checkedDate, monthLabel, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";

export function generateStaticParams() {
  return vehicleSlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const v = getVehicle(slug);
  if (!v) return {};
  return {
    title: `${v.name} ${v.type} (${monthLabel}) - Value, Rarity & Flip Guide | ${siteConfig.gameName}`,
    description: v.description,
    alternates: { canonical: `${siteConfig.domain}/vehicles/${v.slug}` },
    openGraph: {
      title: `${v.name} in ${siteConfig.gameName}`,
      description: v.description,
      url: `${siteConfig.domain}/vehicles/${v.slug}`,
      images: ["/opengraph-image"]
    },
    twitter: {
      card: "summary_large_image",
      title: `${v.name} in ${siteConfig.gameName}`,
      description: v.description,
      images: ["/opengraph-image"]
    }
  };
}

export default async function VehiclePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const v = getVehicle(slug);
  if (!v) return notFound();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Vehicles", href: "/vehicles" },
          { name: v.name, href: `/vehicles/${v.slug}` }
        ]}
      />
      <FaqJsonLd
        items={[
          { q: `What is the ${v.name} in Junk Mechanics?`, a: v.description },
          { q: `Is the ${v.name} in Junk Mechanics worth it?`, a: `${v.flipProfile}` },
          { q: `How do I know the ${v.name} value?`, a: `The ${v.name} value is ${v.confidence.toLocaleLowerCase()} by this site. ${v.sourceNote} Use the flip calculator to test a bid before committing Cash.` }
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Vehicles", href: "/vehicles" },
          { label: v.name, href: `/vehicles/${v.slug}` }
        ]}
      />

      <PageIntro
        eyebrow={`${v.type} · Checked ${checkedDate}`}
        title={`${v.name} in Junk Mechanics`}
        description={v.description}
      >
        <div className="flex flex-wrap gap-3">
          <Link className="button-primary" href="/calculator">Check flip value</Link>
          <Link className="button-secondary" href="/vehicles">All vehicles</Link>
        </div>
      </PageIntro>
      <AdsterraArticleTop />

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">Claim status</span>
          <h2 className="mt-3 text-xl font-bold text-white">{v.confidence}</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">{v.sourceNote} Confirmed by: {v.confirmedBy}.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Tier</span>
          <div className="mt-3 flex items-center gap-3">
            <span className="tier-badge">{v.tier}</span>
            <span className="text-white/70">{v.type}</span>
          </div>
          <p className="mt-2 text-sm leading-6 text-white/66">Ranked against the other confirmed marques by flip preference.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Best for</span>
          <div className="mt-3 flex flex-wrap gap-2">
            {v.bestFor.map((label) => (
              <span key={label} className="mini-label">{label}</span>
            ))}
          </div>
        </article>
      </section>
      <AdsterraArticleMid />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Flip profile"
          title={`Is the ${v.name} worth flipping?`}
          copy="How this marque fits the auction-to-dealership loop, with the confirmed systems and the numbers we can and cannot state."
        />
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <article className="content-card">
            <span className="mini-label">Confirmed</span>
            <h2 className="mt-3 text-xl font-bold text-white">What is verified</h2>
            <ul className="mt-3 grid gap-2 text-sm text-white/70">
              <li>· The {v.name} exists and is {v.type.toLocaleLowerCase()}</li>
              <li>· {v.confirmedBy}</li>
              {slug === "570s" && <li>· Confirmed as a twin-turbo-capable supercar (turbo system)</li>}
              <li>· It participates in the auction-repair-dealership loop</li>
            </ul>
          </article>
          <article className="content-card">
            <span className="mini-label">Reported</span>
            <h2 className="mt-3 text-xl font-bold text-white">What is community-sourced</h2>
            <p className="mt-3 text-sm leading-6 text-white/66">
              Exact auction price, repair cost, and dealership resale are community-reported. Rarity-driven demand
              for this marque is real per creator coverage, but its size is not developer-published.
            </p>
          </article>
          <article className="content-card">
            <span className="mini-label">Flip logic</span>
            <h2 className="mt-3 text-xl font-bold text-white">How to decide before bidding</h2>
            <p className="mt-3 text-sm leading-6 text-white/66">{v.flipProfile}</p>
          </article>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Next steps"
          title="Turn this marque into profit"
          copy="Once you decide whether to chase the {v.name}, move to these routes to complete the flip."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/auction-guide" className="content-card">
            <span className="mini-label">Bidding</span>
            <h3 className="mt-3 text-lg font-bold text-white">Auction guide</h3>
            <p className="mt-2 text-sm text-white/66">Set a bid cap and check the condition before you commit.</p>
          </Link>
          <Link href="/calculator" className="content-card">
            <span className="mini-label">Tool</span>
            <h3 className="mt-3 text-lg font-bold text-white">Flip calculator</h3>
            <p className="mt-2 text-sm text-white/66">Auction bid + repair + resale = profit. Test the {v.name} before bidding.</p>
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
