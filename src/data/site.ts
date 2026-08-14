import type { EditorialSignal, FaqItem, GameCode, HeroMetric, LinkCard, SiteConfig, TierPreviewItem } from "@/types/site";
import { gameConfig } from "@/data/game.config";

export const checkedDate = "2026-08-14";
export const monthLabel = "August 2026";

// hreflang map shared by ALL pages. EN canonical + /es pilot. `path` = the
// page's own slug (e.g. "codes", "vehicles/570s/how-to-get"). Each page pulls
// this into its `alternates` so hreflang emits alongside canonical.
// NOTES: per-page `alternates.canonical` OVERRIDES root-layout
// `alternates.languages` (they don't merge), so the languages map MUST be
// declared on the page, not just the root layout.
// PHANTOM-HREFLANG GUARD (pilot finding 2026-08-15): do NOT emit hreflang to a
// locale URL that doesn't exist. `/es` pages live under /es/<path> mirroring
// the EN tree; a `/es/...` page must exist before we point es-hreflang at it.
// This map is now expanded because /es/codes, /es/vehicles, /es/vehicles/[slug]
// exist (2026-08-15 build). Keep it in sync: only add a path once its /es page
// is built. x-default/self-referencing must resolve to a real page.
export function langAlternates(pathname: string) {
  const base = siteConfig.domain;
  const clean = pathname.replace(/^\/+|\/+$/g, "");
  const self = clean ? `${base}/${clean}` : base;
  // If this page is itself already a locale page (path starts with /es), its es
  // alternate is self-referencing — do NOT prepend /es again (would double it).
  const isEsPage = /^es(?:\/|$)/.test(clean);
  const esTarget = isEsPage ? self : `${base}/es${clean ? `/${clean}` : ""}`;
  return {
    canonical: self,
    languages: {
      "en-US": self,
      es: esTarget,
      "x-default": self
    }
  };
}

export const siteConfig: SiteConfig = {
  name: gameConfig.name,
  domain: gameConfig.domain,
  gameName: gameConfig.name,
  description: "Junk Mechanics codes, vehicle tier list, money method, garage and repair guide, auction house notes, gamepasses, and source-backed Roblox car-flip guidance.",
  valueProposition: "Check the latest Junk Mechanics codes, compare vehicle value and flip profit, learn the best money method, and verify community sources before you spend Cash on a scrapped car.",
  shortDisclosure: `${gameConfig.name} is an unofficial fan-made resource. Roblox, the Junk Mechanics dev team, and creator-owned channels remain the source of record.`,
  lastUpdated: checkedDate,
  freshnessLabel: "codes, vehicle tier list, money methods, and source status refreshed on August 14, 2026",
  keywords: [
    "Junk Mechanics",
    "Junk Mechanics codes",
    "Junk Mechanics Roblox",
    "Junk Mechanics codes Roblox",
    "Junk Mechanics tier list",
    "Junk Mechanics vehicle tier list",
    "Junk Mechanics money method",
    "Junk Mechanics how to make money fast",
    "Junk Mechanics auction house",
    "Junk Mechanics garage",
    "Junk Mechanics repair guide",
    "Junk Mechanics turbo",
    "Junk Mechanics gamepass",
    "Junk Mechanics Civix RK",
    "Junk Mechanics Mercer M21",
    "Junk Mechanics car flip",
    "Junk Mechanics best car",
    "Junk Mechanics how to redeem codes",
    "Junk Mechanics new codes 2026",
    "Junk Mechanics cars",
    "Junk Mechanics vehicles",
    "Junk Mechanics color codes",
    "Junk Mechanics fix it up"
  ],
  navGroups: [
    { label: "Home", href: "/", items: [] },
    {
      label: "Codes",
      href: "/codes",
      items: [
        { label: "Codes", href: "/codes", description: "Latest working Junk Mechanics codes and how to redeem them." },
        { label: "Sources", href: "/sources", description: "Where code and update claims were checked." }
      ]
    },
    {
      label: "Beginner",
      href: "/guides",
      items: [
        { label: "Beginner Guide", href: "/guides", description: "First-session bidding, the repair loop, and the auction-to-dealership flip route." },
        { label: "How to Make Money", href: "/best-money-method", description: "The poor-to-rich route and what to reinvest in first." },
        { label: "Auction Guide", href: "/auction-guide", description: "Bid caps, condition checks, and when to walk away from a wreck." },
        { label: "Garage & Upgrades", href: "/shop-upgrades", description: "What to buy first so capacity stops throttling your flips." }
      ]
    },
    {
      label: "Cars",
      href: "/vehicles",
      items: [
        { label: "Vehicle List", href: "/vehicles", description: "Civix RK, Mercer M21, Leksoh, the M2CS, the 570s, and the BMW G80 marque." },
        { label: "Tier List", href: "/tier-list", description: "Which marques are worth the flip effort and which are traps." },
        { label: "Gamepasses", href: "/gamepasses", description: "Cash boosts, capacity, and repair-speed buys." },
        { label: "Flip Calculator", href: "/calculator", description: "Estimate repair cost and resale profit before you bid." }
      ]
    },
    {
      label: "Community",
      href: "/sources",
      items: [
        { label: "Sources", href: "/sources", description: "Official, community, and pending source-status checks." },
        { label: "Discord", href: "/discord", description: "How to find the official server and where codes get announced." },
        { label: "Trello & Wiki", href: "/trello", description: "Which community sources are official vs still unverified." },
        { label: "Updates", href: "/wiki", description: "August 2026 vehicle, turbo, and paint systems." }
      ]
    },
    {
      label: "About",
      href: "/disclosure",
      items: [
        { label: "Disclosure", href: "/disclosure", description: "Fan-made status and claim-state policy." },
        { label: "Contact", href: "/contact", description: "Corrections and editorial contact path." },
        { label: "Privacy", href: "/privacy", description: "Privacy and ad disclosure." }
      ]
    }
  ]
};

export const heroActions = [
  { href: "/codes", label: "Check codes" },
  { href: "/calculator", label: "Estimate flip value" },
  { href: "/tier-list", label: "Vehicle tier list" },
  { href: "/best-money-method", label: "Money method" }
] as const;

// Hero metrics are based on publicly confirmed August 2026 checks.
export const heroMetrics: HeroMetric[] = [
  { label: "Active codes", value: "4", note: "Verified from the August 12, 2026 Level Nerds roundup" },
  { label: "Roblox visits", value: "Active", note: "Cumulative visits rising; game is in active launch phase" },
  { label: "Update cadence", value: "Weekly+", note: "Aug 5 added 4 vehicles + turbos; 5+ more cars since" },
  { label: "Car families", value: "9", note: "Civix, Mercer, Leksoh, 570s, M2/M2CS, G80, CLK, Jesko and more" }
];

// All four codes are verified from Level Nerds, updated August 12, 2026.
export const activeCodes: GameCode[] = [
  {
    code: "UPDATE4K",
    reward: "20K Cash",
    status: "Verified",
    addedDate: "2026-08-12"
  },
  {
    code: "5500THANKS",
    reward: "20K Cash",
    status: "Verified",
    addedDate: "2026-08-12"
  },
  {
    code: "THIRDCODEOK",
    reward: "Free rewards",
    status: "Verified",
    addedDate: "2026-08-12"
  },
  {
    code: "FOURTHCODINITUNGTUNG",
    reward: "Free rewards",
    status: "Verified",
    addedDate: "2026-08-12"
  }
];

export const expiredCodes: GameCode[] = [];

// Vehicles: names are confirmed from August 2026 creator coverage. Exact prices,
// rarity tables, and loot odds are community-reported unless marked Verified.
export const tierPreview: TierPreviewItem[] = [
  {
    name: "Civix RK",
    tier: "A",
    role: "Sought-after marque",
    reason: "The Civix RK appears in the August 5, 2026 '4 NEW VEHICLES' update coverage. Auction value and repair cost are community-derived; rarity is not yet creator-official.",
    confidence: "Reported",
    bestFor: ["high-value flips", "rarity hunting"],
    sourceNote: "Named in August 2026 vehicle update videos; exact stats need a creator source.",
    teamNote: "If the auction price stays low and parts are common, the RK is a strong flip. Confirm your bid against the flip-value calculator first."
  },
  {
    name: "Mercer M21",
    tier: "B",
    role: "Mid-band flip",
    reason: "Mercer M21 is another August 2026 addition. The value sits below the marquee cars but can still drive a healthy profit when parts are cheap.",
    confidence: "Reported",
    bestFor: ["mid-tier flips", "route testing"],
    sourceNote: "Named in August 2026 update coverage; stats community-reported.",
    teamNote: "Good for practising the auction-to-dealership loop without over-exposing Cash."
  },
  {
    name: "BMW G80 (OEM)",
    tier: "A",
    role: "High visual/collector value",
    reason: "OEM BMW G80 color-code videos show active interest in precise OEM paint matching. The G80 is treated as a collector marque with steady resale demand.",
    confidence: "Reported",
    bestFor: ["collector builds", "color-code content"],
    sourceNote: "OEM color-code Shorts confirm demand; exact value still community.",
    teamNote: "Paint quality raises resale. Use the OEM color codes referenced in creator shorts for a cleaner sale."
  }
];

// Tool cards link to the routes this site actually ships.
export const toolCards: LinkCard[] = [
  {
    title: "Flip Value Calculator",
    href: "/calculator",
    eyebrow: "Primary tool",
    description: "Estimate repair cost, resale value, and auction bid ceiling for a junked car before you spend Cash."
  },
  {
    title: "Codes Status",
    href: "/codes",
    eyebrow: "Codes",
    description: "Latest verified Junk Mechanics codes with rewards and redeem steps."
  },
  {
    title: "Vehicle Tier List",
    href: "/tier-list",
    eyebrow: "Rankings",
    description: "Compares car families by flip value, repair cost, and rarity-driven profit."
  },
  {
    title: "Best Money Method",
    href: "/best-money-method",
    eyebrow: "Profit",
    description: "Auction discipline, repair routes, garage upgrades, and flip loops."
  }
];

export const officialLinks: LinkCard[] = [
  {
    title: "Official Roblox game page",
    href: gameConfig.dataSources.officialGameUrl,
    eyebrow: "Official",
    description: "Source of record for the game title, creator group, badges, visits, and live availability."
  },
  {
    title: "Level Nerds codes roundup",
    href: "https://levelnerds.com/junk-mechanics-codes/",
    eyebrow: "Codes",
    description: "August 12, 2026 roundup verified UPDATE4K, 5500THANKS, THIRDCODEOK, and FOURTHCODINITUNGTUNG."
  },
  {
    title: "Official Discord",
    href: "/sources",
    eyebrow: "Community",
    description: "Seek the official invite from the Roblox game page or a creator-owned source; this site tracks invite status on the sources page."
  },
  {
    title: "Source status page",
    href: "/sources",
    eyebrow: "Status",
    description: "Tracks the Trello board, Discord invite status, and the remaining creator-owned link gaps."
  }
];

export const editorialSignals: EditorialSignal[] = [
  {
    title: "Codes are verified, not invented",
    body: "The four active Junk Mechanics codes come from a dated Level Nerds roundup (August 12, 2026). A code only appears here after a current source confirms the reward."
  },
  {
    title: "Vehicle stats are community-reported",
    body: "Civix RK, Mercer M21, and BMW G80 marques are confirmed by August 2026 creator coverage, but exact prices, rarity odds, and repair costs remain community-derived until a creator-owned source or a live test publishes tables."
  },
  {
    title: "Claim-state labels",
    body: "User-facing decisions separate verified facts, reported community signals, disputed claims, and missing source gaps."
  },
  {
    title: "Active update cadence",
    body: "August 5, 2026 shipped four new vehicles, engine-sound revamps, paint materials, camera control, and auction-house automation. This is a game in active launch, so update-sensitive claims get rechecked often."
  }
];

export const videoGuides: LinkCard[] = [
  {
    title: "Poor to Rich money method",
    href: "https://www.youtube.com/watch?v=48aS55Tev1w",
    eyebrow: "Video",
    description: "Avinestas explores income strategies from salvage-yard restoration to job opportunities and gamepass impact."
  },
  {
    title: "I bought EVERY garage",
    href: "https://www.youtube.com/watch?v=shztrCGPDN4",
    eyebrow: "Video",
    description: "Garage progression and upgrade-cost coverage from a recent creator run."
  },
  {
    title: "BEST CAR build",
    href: "https://www.youtube.com/watch?v=LTj8bj0udqA",
    eyebrow: "Video",
    description: "Repair-route deep dive: cleaning radiators, charging batteries, repainting, then selling at the dealership."
  },
  {
    title: "All working codes",
    href: "https://www.youtube.com/watch?v=FE-IE5f4mCg",
    eyebrow: "Video",
    description: "Current working Junk Mechanics codes roundup from ItsChalls (August 2026)."
  }
];

export const guideClusters: LinkCard[] = [
  {
    title: "Best money method",
    href: "/best-money-method",
    eyebrow: "Guide",
    description: "Auction discipline, bid limits, repair-route value, and upgrade tradeoffs for maximizing Cash."
  },
  {
    title: "Auction guide",
    href: "/auction-guide",
    eyebrow: "Guide",
    description: "Bidding, car-condition checks, bid caps, and when to walk away from an overpriced wreck."
  },
  {
    title: "Garage & upgrades",
    href: "/shop-upgrades",
    eyebrow: "Guide",
    description: "Inventory, selling space, tool unlocks, and garage-purchase bottlenecks."
  },
  {
    title: "Repair & flip loop",
    href: "/guides",
    eyebrow: "Guide",
    description: "Radiator, battery, paint, and dealership-sell steps in a repeatable flip loop."
  }
];

export const wikiCards: LinkCard[] = [
  {
    title: "Vehicles",
    href: "/vehicles",
    eyebrow: "Car database",
    description: "Civix RK, Mercer M21, Leksoh, the M2CS, the 570s, and the BMW G80 marque — confirmed car families with rarity and flip-value labels, so you know which wrecks are worth chasing."
  },
  {
    title: "Gamepasses",
    href: "/gamepasses",
    eyebrow: "Robux buys",
    description: "Cash boosts, capacity, and repair-speed gamepasses, with a buying order that fixes your real bottleneck instead of wasting Robux on a flashy boost you do not need."
  },
  {
    title: "Guides",
    href: "/guides",
    eyebrow: "Walkthroughs",
    description: "Beginner bidding, the repair loop, auction bids, and the poor-to-rich money method — practical flip routes tested against the confirmed game economy."
  }
];

export const faqs: Record<"home" | "codes" | "tierList" | "calculator", FaqItem[]> = {
  home: [
    {
      q: "What is Junk Mechanics?",
      a: "Junk Mechanics is a Roblox car-flip simulation where you buy wrecks at auction, repair and repaint them, and resell at a dealership for profit."
    },
    {
      q: "Is this the official Junk Mechanics website?",
      a: "No. This is an unofficial fan guide. Use the official Roblox game page and creator-owned channels for support, purchases, moderation, and account issues."
    },
    {
      q: "Does Junk Mechanics have codes?",
      a: "Yes. Four codes are verified as of August 12, 2026: UPDATE4K, 5500THANKS, THIRDCODEOK, and FOURTHCODINITUNGTUNG. See the codes page for rewards and redeem steps."
    },
    {
      q: "What is the main tool on this site?",
      a: "The flip value calculator estimates whether a junked car is worth the auction bid after repair cost, paint, and dealership resale assumptions."
    }
  ],
  codes: [
    {
      q: "What are the working Junk Mechanics codes right now?",
      a: "As of August 12, 2026, four codes are verified: UPDATE4K (20K Cash), 5500THANKS (20K Cash), THIRDCODEOK (free rewards), and FOURTHCODINITUNGTUNG (free rewards). They expire on a rolling basis, so recheck the page."
    },
    {
      q: "How do I redeem Junk Mechanics codes?",
      a: "Launch the game from the official Roblox page, find the Codes or Rewards button on the main menu, type the code exactly (case-sensitive), and confirm. Rewards land instantly."
    },
    {
      q: "Where are new Junk Mechanics codes announced?",
      a: "The official Roblox game page, the creator Discord, and dated code trackers like Level Nerds. New codes are shared along with major updates like the August 5, 2026 vehicle drop."
    },
    {
      q: "Why is a code not working?",
      a: "Codes expire on a rolling basis and are case-sensitive. Double-check spacing and capital letters, and confirm the code is still in the active list. A code can also be claimed already or the code dropped in a different server region."
    }
  ],
  tierList: [
    {
      q: "What does the Junk Mechanics tier list rank?",
      a: "It ranks car families by flip value, repair cost, rarity-driven resale, and how safely they fit into a money-making auction loop."
    },
    {
      q: "Is Civix RK the best car?",
      a: "Civix RK is reported as a sought-after marque from the August 2026 update, but its exact stats are community-reported. Use the flip calculator to confirm a high bid is worth it before committing Cash."
    },
    {
      q: "Should I invest in a turbo?",
      a: "Turbos surfaced in recent creator coverage. Treat their value as community-reported until a creator-owned source confirms the exact cost and resale impact."
    }
  ],
  calculator: [
    {
      q: "Is the flip calculator exact?",
      a: "It is an estimate based on auction price, repair cost, paint, and dealership resale assumptions. Use it to avoid overbidding, not as a guaranteed sell-price."
    },
    {
      q: "Which inputs matter most?",
      a: "Auction bid and repair cost matter most, then paint/condition and the dealership resale price you assume."
    },
    {
      q: "Where do car values come from?",
      a: "The launch version uses creator- and community-reported marque values and labels exact odds or rare-car behavior as unverified."
    }
  ]
};