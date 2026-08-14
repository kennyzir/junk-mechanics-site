import type { Metadata } from "next";
import { CalculatorTool } from "@/components/tools/CalculatorTool";
import { FlipGoalTool } from "@/components/tools/FlipGoalTool";
import { faqs, monthLabel, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd, SoftwareApplicationJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { AdsterraToolAd, AdsterraToolBottom } from "@/components/ads";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Flip Value Calculator (${monthLabel})`,
  description: `Estimate ${siteConfig.gameName} car-flip profit with auction bid, repair cost, and dealership resale assumptions.`,
  alternates: { canonical: `${siteConfig.domain}/calculator` }
};

export default function CalculatorPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Calculator", href: "/calculator" }]} />
      <SoftwareApplicationJsonLd />
      <FaqJsonLd items={faqs.calculator} />
      <Breadcrumbs items={[{ label: "Calculator", href: "/calculator" }]} />
      <PageIntro
        eyebrow="Primary tool"
        title={`${siteConfig.gameName} Flip Value Calculator`}
        description="Estimate whether a junk-yard car is worth the auction bid after repair cost, paint, and dealership resale assumptions. Use it to avoid overbidding on rare but uneconomical cars."
      />
      <AdsterraToolAd />
      <section className="mt-10">
        <CalculatorTool />
      </section>
      <AdsterraToolBottom />

      {/* Second tool: plan a flip goal (economy-loop decision support) */}
      <section className="mt-12">
        <div className="relative p-[1px]">
          <div className="rounded-lg py-8">
            <SectionHeader
              eyebrow="Second tool"
              title="How many flips to your target?"
              copy="Set your starting Cash, average profit per flip, and a target (garage slot, M2CS, 570s, or a legend-tier marque) to plan the poor-to-rich route. All inputs are yours — no invented prices."
            />
          </div>
        </div>
        <FlipGoalTool />
      </section>
    </main>
  );
}
