import type { Metadata } from "next";
import type { FaqItem } from "@/types/site";
import { monthLabel, siteConfig } from "@/data/site";

export type TopicSection = {
  eyebrow: string;
  title: string;
  body: string;
};

export type TopicCluster = {
  slug: string;
  route: string;
  parentRoute: string;
  parentLabel: string;
  eyebrow: string;
  navTitle: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  demandSignal: string;
  currentAnswer: string;
  verificationBoundary: string;
  sections: TopicSection[];
  faqs: FaqItem[];
  relatedRoutes: Array<{
    href: string;
    label: string;
    description: string;
  }>;
};

export const topicClusters: TopicCluster[] = [
  {
    slug: "vehicles",
    route: "/vehicles",
    parentRoute: "/wiki",
    parentLabel: "Wiki",
    eyebrow: "Car families",
    navTitle: "Vehicles",
    title: `${siteConfig.gameName} Vehicles`,
    metaTitle: `${siteConfig.gameName} Vehicles (${monthLabel}) - Civix RK, Mercer M21 & G80`,
    metaDescription: `${siteConfig.gameName} vehicle guide with Civix RK, Mercer M21, Leksoh, BMW G80 marque notes, rarity labels, and source-backed flipping advice.`,
    intro: "Use this page when you are trying to compare Junk Mechanics car families, their flip value, rarity, and repair cost without treating community videos as official patch data.",
    demandSignal: "August 2026 creator coverage names Civix RK, Mercer M21, Leksoh, and OEM BMW G80 as marque families; exact stats are community-derived so this route labels them clearly.",
    currentAnswer: "Treat vehicles by marque family first: the August 2026 additions (Civix RK, Mercer M21) are community-reported strong flips, while the BMW G80 is collector-driven. Confirm any high bid against the flip calculator.",
    verificationBoundary: "Vehicle names are confirmed, but exact prices, rarity odds, and repair-cost tables are community-reported unless a creator-owned source or live test publishes them.",
    sections: [
      {
        eyebrow: "Marque families",
        title: "Group cars by name before valuing them",
        body: "Civix RK, Mercer M21, Leksoh, and the BMW G80 marque are the currently discussed families. Compare them by auction frequency, repair cost, and resale demand rather than a single price."
      },
      {
        eyebrow: "Rarity",
        title: "Rare is not always profitable",
        body: "A rare car can still be a loss if the parts are uncommon and the dealership price does not move. Use the flip calculator to test rarity against expected resale."
      },
      {
        eyebrow: "Source check",
        title: "Names are confirmed, values are reported",
        body: "Creator titles confirm which cars exist. The value claims carry a community-reported label until a live or creator-owned source confirms numbers."
      }
    ],
    faqs: [
      {
        q: "What cars are in Junk Mechanics?",
        a: "August 2026 coverage names Civix RK, Mercer M21, Leksoh, and the BMW G80 marque among the current families, with five-plus car families total across updates."
      },
      {
        q: "Is Civix RK the rarest car?",
        a: "Civix RK is reported as a sought-after marque, but the exact rarity is community-reported and should not be treated as official."
      },
      {
        q: "Where do vehicle values come from?",
        a: "Creator videos and community coverage. Exact dealership resale and repair costs are labeled reported until stronger proof."
      }
    ],
    relatedRoutes: [
      { href: "/tier-list", label: "Vehicle tier list", description: "Marque families ranked by flip value and risk." },
      { href: "/calculator", label: "Flip calculator", description: "Estimate profit before bidding." },
      { href: "/sources", label: "Sources", description: "Where car claims are checked." }
    ]
  },
  {
    slug: "auction-guide",
    route: "/auction-guide",
    parentRoute: "/guides",
    parentLabel: "Guides",
    eyebrow: "Bidding",
    navTitle: "Auction Guide",
    title: `${siteConfig.gameName} Auction Guide`,
    metaTitle: `${siteConfig.gameName} Auction Guide (${monthLabel}) - Bidding & Car Checks`,
    metaDescription: `${siteConfig.gameName} auction guide with bidding, car-condition checks, bid caps, and profit-loop notes for the Junk Mechanics auction house.`,
    intro: "Use this page when you are deciding whether to bid on a Junk Mechanics wreck, comparing car condition, and planning the repair-to-dealership loop.",
    demandSignal: "The auction house is a core Junk Mechanics loop, and creator coverage now includes automated auction-house bidding, making a clear bidding guide necessary.",
    currentAnswer: "Set a bid ceiling before the auction: estimate resale, subtract repair cost, and never bid past the point where the flip stops being profitable.",
    verificationBoundary: "Auction starting prices and RNG odds are community-reported. Creator coverage confirms the auction house exists and supports automation, but exact drop rates are not creator-official.",
    sections: [
      {
        eyebrow: "Bid discipline",
        title: "Decide the ceiling before the gavel drops",
        body: "Use the flip calculator to set your max bid after repair cost and expected resale. Bidding emotionally on a flashy marque is how Cash leaks away."
      },
      {
        eyebrow: "Condition check",
        title: "Inspect bodywork before bidding",
        body: "A cheap auction price is not a good deal if the radiator, battery, and body are all trashed and the repair bill swallows the margin."
      },
      {
        eyebrow: "Automation",
        title: "Auction-house automation changes the loop",
        body: "August 2026 added auction-house automation options. Streaming more flips can scale profit, but only if the per-flip margin stays positive."
      }
    ],
    faqs: [
      {
        q: "How do auctions in Junk Mechanics work?",
        a: "You bid on wrecks at the auction house, then repair and resell them at the dealership for profit. Creator coverage confirms the loop and recent automation options."
      },
      {
        q: "What is a safe bid?",
        a: "A bid is safe when the estimated resale minus repair cost still leaves a positive profit. Use the flip calculator to test before you commit."
      },
      {
        q: "Should I buy every auction car?",
        a: "No. Some wrecks cost more to repair than they will sell for. Skip anything that fails the flip-margin test."
      }
    ],
    relatedRoutes: [
      { href: "/calculator", label: "Flip calculator", description: "Estimate profit before you bid." },
      { href: "/best-money-method", label: "Best money method", description: "Auction discipline inside the full profit route." },
      { href: "/sources", label: "Sources", description: "Auction claim verification trail." }
    ]
  },
  {
    slug: "best-money-method",
    route: "/best-money-method",
    parentRoute: "/guides",
    parentLabel: "Guides",
    eyebrow: "Profit route",
    navTitle: "Best Money Method",
    title: `${siteConfig.gameName} Best Money Method`,
    metaTitle: `${siteConfig.gameName} Best Money Method (${monthLabel}) - Make Cash Fast`,
    metaDescription: `${siteConfig.gameName} best money method guide with auction discipline, repair routes, garage upgrades, and source-labeled profit advice.`,
    intro: "Use this page when you want to go poor-to-rich, make Cash fast, or pick between auction flipping, salvage restoration, and job-based income.",
    demandSignal: "Creator coverage repeatedly targets money methods, get-rich-fast routes, and poor-to-rich progressions, so the profit route now has a dedicated page.",
    currentAnswer: "The safest repeatable method is auction discipline: bid below estimated resale, keep repairs cheap, use the calculator, and reinvest in garage capacity.",
    verificationBoundary: "Exact per-route Cash per hour and gamepass ROI are community-reported. Gamepasses exist and are covered, but the exact financial impact is not creator-official.",
    sections: [
      {
        eyebrow: "Bid discipline",
        title: "Profit starts before the auction",
        body: "A cheap wreck with a known resale beats a flashy marque that eats the margin in repairs. Cap your bid, do the math, then commit."
      },
      {
        eyebrow: "Repair route",
        title: "Standard repairs are the volume game",
        body: "Radiator and battery flips are cheap and repeatable. Paint and collector builds are higher margin but more variance."
      },
      {
        eyebrow: "Reinvestment",
        title: "Plough profit into capacity",
        body: "Bigger garages and selling space let you run more flips per session, which beats chasing a single high-risk car."
      }
    ],
    faqs: [
      {
        q: "What is the best money method in Junk Mechanics?",
        a: "There is no verified single guaranteed method. The strongest repeatable approach is conservative bidding, cheap repairs, and capacity reinvestment."
      },
      {
        q: "Are gamepasses worth it for money?",
        a: "Creator coverage discusses the financial impact of several gamepasses, but the exact ROI is community-reported and should be tested before buying."
      },
      {
        q: "Should I copy get-rich-fast videos?",
        a: "Use them as route ideas, then compare your auction bid, repair cost, and update date before copying the method."
      }
    ],
    relatedRoutes: [
      { href: "/auction-guide", label: "Auction guide", description: "Bidding and condition checks." },
      { href: "/calculator", label: "Flip calculator", description: "Test a route before spending." },
      { href: "/shop-upgrades", label: "Garage & upgrades", description: "Capacity bottlenecks that cap the route." }
    ]
  },
  {
    slug: "gamepasses",
    route: "/gamepasses",
    parentRoute: "/wiki",
    parentLabel: "Wiki",
    eyebrow: "Robux purchases",
    navTitle: "Gamepasses",
    title: `${siteConfig.gameName} Gamepasses`,
    metaTitle: `${siteConfig.gameName} Gamepasses (${monthLabel}) - Worth It? Value Notes`,
    metaDescription: `${siteConfig.gameName} gamepass guide with cash boosts, garage slots, and upgrade-value tradeoffs, plus source-labeled buying advice.`,
    intro: "Use this page when you are deciding which Junk Mechanics gamepass to buy, comparing cash boosts and capacity, and weighing Robux against in-game grinding.",
    demandSignal: "Creator money-method coverage explicitly discusses the financial impact of gamepasses, so the buying decision needs its own route.",
    currentAnswer: "Buy the gamepass that fixes your current bottleneck: a capacity boost if you keep hitting storage limits, a cash boost if you want to skip early grinding. Recheck prices in-game.",
    verificationBoundary: "Exact Robux prices and the precise boost multiplier of each gamepass are community-reported or must be confirmed in-game; the official page is the source of record.",
    sections: [
      {
        eyebrow: "Types",
        title: "Cash boosts vs capacity",
        body: "Creator coverage groups gamepasses into income-boosting and capacity/carry types. Match the purchase to the bottleneck you actually have."
      },
      {
        eyebrow: "ROI",
        title: "Buy speed, not convenience",
        body: "A gamepass only pays off if it meaningfully shortens your route. If grinding a few flips is almost as fast, skip the Robux spend."
      },
      {
        eyebrow: "Verify",
        title: "Prices change",
        body: "Robux prices and boost values shift with updates. Confirm the current in-game price before buying."
      }
    ],
    faqs: [
      {
        q: "Are Junk Mechanics gamepasses worth it?",
        a: "Creator coverage confirms gamepasses exist and affect money making, but exact ROI is community-reported. Buy one that fixes a real bottleneck."
      },
      {
        q: "What gamepass should I buy first?",
        a: "The one that removes your main limit: capacity if you cap storage, a boost if you want to skip early grind. Recheck in-game prices."
      },
      {
        q: "Do gamepasses carry over?",
        a: "Treat any claim about persistence or stacking as community-reported until the official page or an in-game check confirms."
      }
    ],
    relatedRoutes: [
      { href: "/best-money-method", label: "Money method", description: "How gamepasses fit the profit route." },
      { href: "/shop-upgrades", label: "Garage & upgrades", description: "Non-Robux progression choices." },
      { href: "/sources", label: "Sources", description: "Gamepass claim verification." }
    ]
  },
  {
    slug: "shop-upgrades",
    route: "/shop-upgrades",
    parentRoute: "/guides",
    parentLabel: "Guides",
    eyebrow: "Progression",
    navTitle: "Garage & Upgrades",
    title: `${siteConfig.gameName} Garage & Upgrades`,
    metaTitle: `${siteConfig.gameName} Garage & Upgrades (${monthLabel}) - Buying Guide`,
    metaDescription: `${siteConfig.gameName} garage and upgrade guide with inventory, selling space, tool unlocks, and purchase-bottleneck notes.`,
    intro: "Use this page when you are deciding which garage or upgrade to buy first, hitting storage or selling-space limits, or planning the progression order.",
    demandSignal: "Creator coverage follows 'I bought every garage' progressions, confirming the purchase path is a core decision players research.",
    currentAnswer: "Buy the upgrade that fixes your current bottleneck: storage if you cap inventory, selling space if you cannot move stock, or tools if repairs are slow.",
    verificationBoundary: "Exact garage prices and upgrade costs are community-reported; creator progression videos confirm the purchases but not current in-game numbers.",
    sections: [
      {
        eyebrow: "Storage",
        title: "Carry capacity is the first cap",
        body: "If you are leaving flips on the table because you hit the storage limit, a capacity upgrade increases profit per session immediately."
      },
      {
        eyebrow: "Selling",
        title: "Move stock to free the loop",
        body: "Selling-space limits throttle how fast you can turn cars. More selling room extends the flip loop before you have to stop."
      },
      {
        eyebrow: "Tools",
        title: "Repair speed compounds",
        body: "Faster repairs mean more flips per session. Tool upgrades are worth more the more you grind the auction-to-dealership loop."
      }
    ],
    faqs: [
      {
        q: "What garage upgrade should I buy first?",
        a: "The one that fixes your bottleneck: storage, selling space, or tool speed. Creator progressions buy capacity first."
      },
      {
        q: "Is buying every garage worth it?",
        a: "Creator coverage shows the full garage path, but the cost grows. Only buy the next garage when the current one is genuinely limiting you."
      },
      {
        q: "Do upgrades affect money method?",
        a: "Yes. A profit route is only as fast as your capacity, selling, and repair setup."
      }
    ],
    relatedRoutes: [
      { href: "/gamepasses", label: "Gamepasses", description: "Robux purchases vs progression upgrades." },
      { href: "/best-money-method", label: "Money method", description: "How capacity caps the profit route." },
      { href: "/calculator", label: "Flip calculator", description: "Test a purchase against flip margins." }
    ]
  },
  {
    slug: "discord",
    route: "/discord",
    parentRoute: "/sources",
    parentLabel: "Sources",
    eyebrow: "Community",
    navTitle: "Discord",
    title: `${siteConfig.gameName} Discord`,
    metaTitle: `${siteConfig.gameName} Discord (${monthLabel}) - Server Status`,
    metaDescription: `${siteConfig.gameName} Discord invite status and where the dev team shares codes and updates, plus invite-hug cautions and source boundaries.`,
    intro: "Use this page to find the Junk Mechanics Discord, understand where code announcements surface first, and keep source boundaries clear.",
    demandSignal: "Creator guides point players to the official Discord for insider code drops and update announcements, so the route answers that lookup directly.",
    currentAnswer: "Seek the official invite from the Roblox game page or a creator you trust in videos, then check for the announcement channel. Treat invite links in comments as unverified.",
    verificationBoundary: "A live invite must be confirmed against the official game page; a public invite link on an unrelated site is not proof it is the creator's server.",
    sections: [
      {
        eyebrow: "Official first",
        title: "Prefer the game page invite",
        body: "The most reliable Discord invite comes from the official Roblox game page or a creator-owned source, not from a comment thread."
      },
      {
        eyebrow: "Announcements",
        title: "Codes drop in announcements",
        body: "Creator coverage points to the Discord announcements channel as a first signal for new Junk Mechanics codes, so join before the next update cycle."
      },
      {
        eyebrow: "Caution",
        title: "Invite hug and trolls",
        body: "Discord invites expire and are frequently re-shared by trolls. Confirm the server name and channel against the official game page before trusting codes there."
      }
    ],
    faqs: [
      {
        q: "How do I join the Junk Mechanics Discord?",
        a: "Get the invite from the official Roblox game page or a creator-owned video, then confirm the server name and use the announcements channel."
      },
      {
        q: "Where are new codes announced first?",
        a: "Creator coverage points to the official Discord announcements and dated trackers like Level Nerds."
      },
      {
        q: "Is the invite in a random video real?",
        a: "Not automatically. Confirm the invite resolves to the official server before trusting it."
      }
    ],
    relatedRoutes: [
      { href: "/sources", label: "Sources", description: "Full source list." },
      { href: "/codes", label: "Codes", description: "Verified code list." },
      { href: "/trello", label: "Trello status", description: "Board and source status." }
    ]
  }
];

export const topicClusterRoutes = topicClusters.map((cluster) => cluster.route);

export function getTopicCluster(slug: string) {
  const cluster = topicClusters.find((item) => item.slug === slug);
  if (!cluster) {
    throw new Error(`Unknown topic cluster: ${slug}`);
  }
  return cluster;
}

export function buildTopicClusterMetadata(slug: string): Metadata {
  const cluster = getTopicCluster(slug);
  return {
    title: cluster.metaTitle,
    description: cluster.metaDescription,
    alternates: { canonical: `${siteConfig.domain}${cluster.route}` },
    openGraph: {
      title: cluster.metaTitle,
      description: cluster.metaDescription,
      url: `${siteConfig.domain}${cluster.route}`,
      images: ["/opengraph-image"]
    },
    twitter: {
      card: "summary_large_image",
      title: cluster.metaTitle,
      description: cluster.metaDescription,
      images: ["/opengraph-image"]
    }
  };
}