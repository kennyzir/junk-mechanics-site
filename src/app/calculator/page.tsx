import type { Metadata } from "next";
import { CalculatorTool } from "@/components/tools/CalculatorTool";
import { faqs, monthLabel, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd, SoftwareApplicationJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro } from "@/components/ui/content";
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
    </main>
  );
}
