import type { MetadataRoute } from "next";
import { checkedDate, siteConfig } from "@/data/site";
import { vehicleSlugs } from "@/data/vehicles";

export const dynamic = "force-static";

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "", changeFrequency: "daily", priority: 1 },
  { path: "/codes", changeFrequency: "daily", priority: 0.95 },
  { path: "/tier-list", changeFrequency: "weekly", priority: 0.9 },
  { path: "/vehicles", changeFrequency: "weekly", priority: 0.9 },
  { path: "/calculator", changeFrequency: "weekly", priority: 0.85 },
  { path: "/best-money-method", changeFrequency: "weekly", priority: 0.85 },
  { path: "/auction-guide", changeFrequency: "weekly", priority: 0.82 },
  { path: "/guides", changeFrequency: "weekly", priority: 0.8 },
  { path: "/gamepasses", changeFrequency: "weekly", priority: 0.8 },
  { path: "/shop-upgrades", changeFrequency: "weekly", priority: 0.8 },
  { path: "/wiki", changeFrequency: "weekly", priority: 0.8 },
  { path: "/discord", changeFrequency: "weekly", priority: 0.7 },
  { path: "/trello", changeFrequency: "weekly", priority: 0.7 },
  { path: "/sources", changeFrequency: "monthly", priority: 0.5 },
  { path: "/about", changeFrequency: "monthly", priority: 0.3 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.3 },
  { path: "/privacy", changeFrequency: "monthly", priority: 0.3 },
  { path: "/terms", changeFrequency: "monthly", priority: 0.3 },
  { path: "/disclosure", changeFrequency: "monthly", priority: 0.3 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const seen = new Set<string>();
  const lastModified = new Date(`${checkedDate}T00:00:00.000Z`);

  const allRoutes = [
    ...routes,
    // Per-vehicle entity pages (Spoke model)
    ...vehicleSlugs.map((slug) => ({
      path: `/vehicles/${slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.78
    })),
    // Per-vehicle intent variants (how-to-get / best / rarities)
    ...vehicleSlugs.flatMap((slug) =>
      (["how-to-get", "best", "rarities"] as const).map((intent) => ({
        path: `/vehicles/${slug}/${intent}`,
        changeFrequency: "weekly" as const,
        priority: 0.74
      }))
    )
  ];

  return allRoutes
    .map((route) => ({
      url: `${siteConfig.domain}${route.path === "" ? "" : route.path.endsWith("/") ? route.path : `${route.path}/`}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority
    }))
    .filter((entry) => {
      if (seen.has(entry.url)) return false;
      seen.add(entry.url);
      return true;
    });
}
