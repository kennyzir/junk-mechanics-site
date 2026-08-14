// =====================================================
// Junk Mechanics — Verified Game Database (single source of truth)
//
// This is the doc's "Verified Game Database" layer: structured facts keyed by
// entity, each carrying source + confidence + verified_at. ONE fact update here
// cascades to the codes / vehicles / tier-list / calculator pages automatically,
// instead of hand-editing every page like the competitors do (their freshness lag).
//
// Claim-state vocabulary (per claim): Verified / Community-reported / Unknown.
// Never fabricate a price, drop rate, or code that has no named source.
// =====================================================

export type ClaimState = "Verified" | "Community-reported" | "Unknown";

export interface VerifiedEntity {
  id: string;              // stable slug
  name: string;
  claimState: ClaimState;
  verifiedAt: string;      // last time the claim was checked
  source: string;          // named source (creator video / update / etc.)
  sourceUrl?: string;
}

export interface Marque extends VerifiedEntity {
  type: string;           // "Supercar" / "Sport" / "Collector / build" / ...
  tier: "A" | "B" | "C";  // flip preference tier
  rarityTier: string;     // e.g. "Legend-flagged" / "High-demand / rare"
  bestFor: string[];
  description: string;
  flipProfile: string;
  repairRoute: string;    // how to prep it for resale (radiator/battery/paint/turbo)
  searchPhrases: string[];
}

export interface Gamepass extends VerifiedEntity {
  whatItDoes: string;
  worksTo: string;        // e.g. "all marques" / "capacity"
  costEstimate: string;   // labeled Community-reported when not official
}

export interface System extends VerifiedEntity {
  kind: string;           // economy / upgrade / paint / auction
  oneLine: string;
  linksTo: string[];      // related page slugs
}

// -----------------------------------------------------
// MARQUES — confirmed from August 2026 creator coverage.
// Prices / rarity odds stay Community-reported (no official DB exists).
// -----------------------------------------------------
export const marques: Marque[] = [
  {
    id: "civix-rk",
    name: "Civix RK",
    claimState: "Verified",
    verifiedAt: "2026-08-14",
    source: "Berlian kecil '4 NEW VEHICLES' update coverage (Aug 5)",
    type: "Class-leading sport marque",
    tier: "A",
    rarityTier: "High-demand / rare",
    bestFor: ["high-value flips", "rarity hunting"],
    description: "Presented as a sought-after marque in the August 2026 vehicle drop. High demand makes it a flip target.",
    flipProfile: "High-value marque. Auction price + repair cost are Community-reported; expect auction competition.",
    repairRoute: "Standard radiator + battery + paint prep. Verify a bid against the calculator first.",
    searchPhrases: ["junk mechanics civix rk", "civix rk value", "junk mechanics best car"],
  },
  {
    id: "mercer-m21",
    name: "Mercer M21",
    claimState: "Verified",
    verifiedAt: "2026-08-14",
    source: "Berlian kecil '4 NEW VEHICLES' update coverage (Aug 5)",
    type: "Mid-band sport",
    tier: "B",
    rarityTier: "Mid-band",
    bestFor: ["mid-tier flips", "route testing"],
    description: "Sits below the marquee cars on value but holds a healthy margin when parts are cheap.",
    flipProfile: "Mid-tier flip. Good for practising the loop without over-exposing your Cash.",
    repairRoute: "Clean radiator + battery. Cheap paint = better margin.",
    searchPhrases: ["junk mechanics mercer m21", "mercer m21 junk mechanics"],
  },
  {
    id: "m2cs",
    name: "M2CS",
    claimState: "Verified",
    verifiedAt: "2026-08-14",
    source: "\u201cI built a FAKE M2CS in Junk Mechanics..\u201d (Avinestas)",
    type: "Collector / build car",
    tier: "A",
    rarityTier: "Collector / build",
    bestFor: ["collector builds", "custom paints"],
    description: "Players build out M2CS-style collector cars, confirming strong demand for this marque.",
    flipProfile: "Collector build. Value lives in the completed, well-painted build, not the raw wreck.",
    repairRoute: "Paint is the value lever; nail the OEM-style color code before reselling.",
    searchPhrases: ["junk mechanics m2cs", "m2cs junk mechanics"],
  },
  {
    id: "570s",
    name: "570s",
    claimState: "Verified",
    verifiedAt: "2026-08-14",
    source: "\u201cI threw on a Twin Turbo kit on my 570s\u201d (Avinestas)",
    type: "Supercar / turbo target",
    tier: "A",
    rarityTier: "Supercar / high-margin",
    bestFor: ["turbo builds", "high-margin flips"],
    description: "A 570s supercar-family model is confirmed and is one of the cars creators twin-turbo.",
    flipProfile: "High-margin flip. Turbo-equipped 570s resells well but cost is higher and Community-reported.",
    repairRoute: "Radiator + battery + paint + turbo kit. Highest up-front cost of the confirmed marques.",
    searchPhrases: ["junk mechanics 570s", "570s twin turbo junk mechanics"],
  },
  {
    id: "bmw-g80",
    name: "BMW G80 (OEM)",
    claimState: "Verified",
    verifiedAt: "2026-08-14",
    source: "OEM BMW G80 color-code Shorts (active paint-matching interest)",
    type: "Collector / OEM paint",
    tier: "A",
    rarityTier: "Collector / OEM paint",
    bestFor: ["collector builds", "color-code content"],
    description: "Treated as a collector marque with steady resale demand, especially with correct OEM paint.",
    flipProfile: "Collector. Paint quality directly raises resale; correct OEM color code is a clear value lever.",
    repairRoute: "Focus paint. An OEM-correct G80 color code raises resale meaningfully.",
    searchPhrases: ["junk mechanics bmw g80", "g80 color code junk mechanics"],
  },
  {
    id: "leksoh",
    name: "Leksoh",
    claimState: "Community-reported",
    verifiedAt: "2026-08-14",
    source: "\u201c4 NEW VEHICLES\u201d coverage (named alongside Civix RK / Mercer M21)",
    type: "Marque (unverified role)",
    tier: "B",
    rarityTier: "Unknown / pending",
    bestFor: ["mid-tier flips", "collection filling"],
    description: "Presence confirmed but exact role, rarity, and value not yet established.",
    flipProfile: "Unknown. Treat numbers as pending; verify a bid against the calculator first.",
    repairRoute: "Unknown until marque stats are pinned to a named source.",
    searchPhrases: ["leksoh junk mechanics", "leksoh value"],
  },
  {
    id: "jesko",
    name: "Jesko (marque)",
    claimState: "Community-reported",
    verifiedAt: "2026-08-14",
    source: "Restoration content \u201cThis Koenigsegg Jesko Attack Was Almost Lost Forever\u201d",
    type: "Supercar / legend-tier candidate",
    tier: "A",
    rarityTier: "Legend-flagged",
    bestFor: ["high-value flips", "collector builds"],
    description: "A Jesko-style supercar marque is referenced in restoration content, pointing to a legend-tier car.",
    flipProfile: "If a true legend-tier car, a high-margin flip target. Numbers pending.",
    repairRoute: "Legend-tier rebuild; treat as a long, high-cost project until confirmed in-game.",
    searchPhrases: ["jesko junk mechanics", "rarest car junk mechanics"],
  },
  {
    id: "clk",
    name: "CLK",
    claimState: "Community-reported",
    verifiedAt: "2026-08-14",
    source: "Creator Shorts \u201cAnother Clk Edit In Junk Mechanics\u201d",
    type: "Sports marque",
    tier: "B",
    rarityTier: "Mid / unconfirmed",
    bestFor: ["custom builds", "mid-tier flips"],
    description: "A CLK-style sports marque appears in community build/editing content.",
    flipProfile: "Likely a mid-band cosmetic/build marque. Numbers pending.",
    repairRoute: "Cosmetic build focus until stats are confirmed.",
    searchPhrases: ["clk junk mechanics"],
  },
  {
    id: "m2",
    name: "M2",
    claimState: "Community-reported",
    verifiedAt: "2026-08-14",
    source: "Creator Shorts \u201cM2 Edit againnn...\u201d (alongside M2CS)",
    type: "BMW M-family / build marque",
    tier: "A",
    rarityTier: "Build / collector",
    bestFor: ["collector builds", "custom paints"],
    description: "The base M2 marque precedes the M2CS in the same BMW M-family.",
    flipProfile: "Lower-cost entry into the M2 line until values are pinned.",
    repairRoute: "Shared with M2CS build route; paint is the lever.",
    searchPhrases: ["m2 junk mechanics", "m2 build"],
  },
];

// -----------------------------------------------------
// GAMEPASSES — existence confirmed by creator test video;
// exact Robux cost + percentages are Community-reported, not developer-published.
// -----------------------------------------------------
export const gamepasses: Gamepass[] = [
  {
    id: "cash-boost",
    name: "Cash boost gamepass",
    claimState: "Community-reported",
    verifiedAt: "2026-08-14",
    source: "Creator gamepass test video",
    whatItDoes: "Raises Cash income per flip/order; speeds the poor-to-rich route.",
    worksTo: "all marques",
    costEstimate: "Community-reported (not developer-published)",
  },
  {
    id: "capacity",
    name: "Garage capacity / slots",
    claimState: "Community-reported",
    verifiedAt: "2026-08-14",
    source: "\u201cI bought EVERY garage\u201d progression video",
    whatItDoes: "More parking/sell slots so capacity stops throttling flips.",
    worksTo: "garage & shop upgrades",
    costEstimate: "Community-reported (not developer-published)",
  },
  {
    id: "repair-speed",
    name: "Repair-speed gamepass",
    claimState: "Community-reported",
    verifiedAt: "2026-08-14",
    source: "Creator gamepass overview",
    whatItDoes: "Speeds up radiator/battery/repaint; raises flips-per-hour.",
    worksTo: "overall loop speed",
    costEstimate: "Community-reported (not developer-published)",
  },
];

// -----------------------------------------------------
// SYSTEMS — gameplay mechanics confirmed from update coverage.
// These are F0/F1 freshness (change only on major update).
// -----------------------------------------------------
export const systems: System[] = [
  {
    id: "auction-house",
    name: "Auction house",
    claimState: "Verified",
    verifiedAt: "2026-08-14",
    source: "Aug 5 update + auction-guide coverage",
    kind: "economy",
    oneLine: "Bid on wrecks, check condition, set a bid cap, walk away from overpriced lots.",
    linksTo: ["/auction-guide", "/calculator", "/vehicles"],
  },
  {
    id: "repair-loop",
    name: "Repair & flip loop",
    claimState: "Verified",
    verifiedAt: "2026-08-14",
    source: "Avinestas repair/build videos",
    kind: "economy",
    oneLine: "Radiator + battery + paint, then resell at the dealership.",
    linksTo: ["/best-money-method", "/calculator", "/guides"],
  },
  {
    id: "turbo-upgrade",
    name: "Turbo / twin-turbo upgrade",
    claimState: "Verified",
    verifiedAt: "2026-08-14",
    source: "\u201cTwin Turbo kit on my 570s\u201d creator video",
    kind: "upgrade",
    oneLine: "Bolts onto supercars (570s) to raise resale value and top speed feel.",
    linksTo: ["/vehicles/570s", "/calculator"],
  },
  {
    id: "paint-system",
    name: "OEM color-code paint",
    claimState: "Community-reported",
    verifiedAt: "2026-08-14",
    source: "OEM BMW G80 color-code Shorts",
    kind: "paint",
    oneLine: "Matching an OEM color code (e.g. BMW G80) raises collector resale.",
    linksTo: ["/vehicles/bmw-g80", "/vehicles/m2cs"],
  },
];

// -----------------------------------------------------
// HELPER ACCESSORS — pages read these.
// -----------------------------------------------------
export function getMarque(id: string) {
  return marques.find((m) => m.id === id);
}
export function getGamepass(id: string) {
  return gamepasses.find((g) => g.id === id);
}
export function getSystem(id: string) {
  return systems.find((s) => s.id === id);
}
export const marqueSlugs = marques.map((m) => m.id);

// Claim-state label helper (match the site's vocabulary).
export function claimLabel(s: ClaimState): string {
  return s === "Verified" ? "Verified" : s === "Community-reported" ? "Reported" : "Pending";
}
