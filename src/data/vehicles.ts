export type VehicleEntity = {
  slug: string;
  name: string;
  type: string;
  tier: "A" | "B" | "C";
  confidence: "Reported" | "Pending" | "Verified";
  rarityTier: string;
  confirmedBy: string;
  description: string;
  flipProfile: string;
  bestFor: string[];
  sourceNote: string;
  searchPhrases: string[];
};

// All marques confirmed from August 2026 creator video titles / update descriptions.
// Exact prices, rarity odds, and repair costs remain community-reported.
// Rarity tiers (Legendary / rare concept) confirmed from creator Shorts;
// per-car rarity odds are not developer-published.
export const vehicles: VehicleEntity[] = [
  {
    slug: "civix-rk",
    name: "Civix RK",
    type: "Class-leading sport marque",
    tier: "A",
    confidence: "Reported",
    rarityTier: "High-demand / rare",
    confirmedBy: "Named in the August 5, 2026 '4 NEW VEHICLES' update coverage (Berlian kecil)",
    description: "Presented as a sought-after marque in the August 2026 vehicle drop. High demand makes it a target for flips, but the exact rarity is not yet creator-official.",
    flipProfile: "High-value marque. Auction value and repair cost are community-derived; expect competition at the auction house if the marque is rare.",
    bestFor: ["high-value flips", "rarity hunting"],
    sourceNote: "Named in the August 2026 vehicle-update videos; exact stats need a creator source.",
    searchPhrases: ["civix rk junk mechanics", "civix rk value", "how to get civix rk"]
  },
  {
    slug: "mercer-m21",
    name: "Mercer M21",
    type: "Mid-band sport",
    tier: "B",
    confidence: "Reported",
    rarityTier: "Mid-band",
    confirmedBy: "Named in the August 5, 2026 '4 NEW VEHICLES' update coverage",
    description: "Sits below the marquee cars on value but can hold a healthy flip margin when parts are cheap. A solid way to test the auction-to-dealership loop.",
    flipProfile: "Mid-tier flip. Good for practising the loop without over-exposing your Cash, especially when repair parts are common.",
    bestFor: ["mid-tier flips", "route testing"],
    sourceNote: "Named in August 2026 update coverage; stats community-reported.",
    searchPhrases: ["mercer m21 junk mechanics", "mercer m21 value", "mercer m21 worth it"]
  },
  {
    slug: "m2cs",
    name: "M2CS",
    type: "Collector / build car",
    tier: "A",
    confidence: "Reported",
    rarityTier: "Collector / build",
    confirmedBy: "\u201cI built a FAKE M2CS in Junk Mechanics.. \ud83d\udc80\ud83d\udd25\u201d creator video (Avinestas channel)",
    description: "Players build out M2CS-style collector cars, suggesting strong demand for this marque. Build and repair cost are community-derived.",
    flipProfile: "Collector build. Value lives in the completed, well-painted build rather than the raw auction wreck.",
    bestFor: ["collector builds", "custom paints"],
    sourceNote: "Build-video presence confirms the marque; exact value community-derived.",
    searchPhrases: ["m2cs junk mechanics", "m2cs build", "fake m2cs junk mechanics"]
  },
  {
    slug: "570s",
    name: "570s",
    type: "Supercar / turbo target",
    tier: "A",
    confidence: "Reported",
    rarityTier: "Supercar / high-margin",
    confirmedBy: "\u201cI threw on a Twin Turbo kit on my 570s in Junk Mechanics.. \ud83d\udc40\ud83d\udd25\u201d creator video",
    description: "A 570s supercar-family model is confirmed, and it is one of the cars creators twin-turbo. Confirms the turbo upgrade system and a high-margin supercar marque.",
    flipProfile: "High-margin flip. A turbo-equipped 570s resells well, but the up-front auction+repair+upgrade cost is higher and more community-derived.",
    bestFor: ["turbo builds", "high-margin flips"],
    sourceNote: "Turbo-kit video presence; resale numbers community-derived.",
    searchPhrases: ["570s junk mechanics", "twin turbo junk mechanics", "570s value"]
  },
  {
    slug: "bmw-g80",
    name: "BMW G80 (OEM)",
    type: "Collector / OEM paint",
    tier: "A",
    confidence: "Reported",
    rarityTier: "Collector / OEM paint",
    confirmedBy: "OEM BMW G80 color-code Shorts show active interest in precise OEM paint matching",
    description: "Treated as a collector marque with steady resale demand, especially when the paint matches a correct OEM color code.",
    flipProfile: "Collector. Paint quality directly raises resale, so a correct OEM color code (referenced in Shorts) is a clear value lever.",
    bestFor: ["collector builds", "color-code content"],
    sourceNote: "OEM color-code demand confirmed; exact value still community.",
    searchPhrases: ["bmw g80 junk mechanics", "junk mechanics color codes", "g80 paint"]
  },
  {
    slug: "leksoh",
    name: "Leksoh",
    type: "Marque (unverified role)",
    tier: "B",
    confidence: "Pending",
    rarityTier: "Unknown / pending",
    confirmedBy: "Named in the August 2026 '4 NEW VEHICLES' coverage alongside Civix RK and Mercer M21",
    description: "Presence is confirmed but the exact role, rarity, and value are not yet established in public coverage.",
    flipProfile: "Unknown. Treat numbers as pending; verify a bid against the calculator before committing Cash.",
    bestFor: ["mid-tier flips", "collection filling"],
    sourceNote: "Named in update coverage; role and value not yet established.",
    searchPhrases: ["leksoh junk mechanics", "leksoh value"]
  },
  {
    slug: "jesko",
    name: "Jesko (marque)",
    type: "Supercar / legend-tier candidate",
    tier: "A",
    confidence: "Pending",
    rarityTier: "Legend-flagged",
    confirmedBy: "Koenigsegg-style Jesko marque appears in restoration content (\u201cThis Koenigsegg Jesko Attack Was Almost Lost Forever\u201d)",
    description: "A Jesko-style supercar marque is referenced in restoration-focused Junk Mechanics content, pointing to a legend/high-tier car. Exact in-game role and value are not yet established.",
    flipProfile: "If a true legend-tier car, this would be a high-margin flips target. Treat all numbers as pending until creator coverage confirms the marque in-game.",
    bestFor: ["high-value flips", "collector builds"],
    sourceNote: "Supercar marque referenced in creator content; in-game confirmation pending.",
    searchPhrases: ["jesko junk mechanics", "rarest car junk mechanics"]
  },
  {
    slug: "clk",
    name: "CLK",
    type: "Sports marque",
    tier: "B",
    confidence: "Pending",
    rarityTier: "Mid / unconfirmed",
    confirmedBy: "CLK edits appear in Junk Mechanics creator Shorts (\u201cAnother Clk Edit In Junk Mechanics\u201d)",
    description: "A CLK-style sports-car marque appears in community build/editing content. The marque exists as build material, but role and value are being verified.",
    flipProfile: "Likely a mid-band cosmetic/build marque. Numbers pending until a named video confirms in-game stats.",
    bestFor: ["custom builds", "mid-tier flips"],
    sourceNote: "CLK presence confirmed by creator Shorts; in-game stats pending.",
    searchPhrases: ["clk junk mechanics"]
  },
  {
    slug: "m2",
    name: "M2",
    type: "BMW M-family / build marque",
    tier: "A",
    confidence: "Pending",
    rarityTier: "Build / collector",
    confirmedBy: "M2 builds appear in creator Shorts (\u201cM2 Edit againnn...\u201d) alongside the M2CS",
    description: "The base M2 marque precedes the M2CS in the same BMW M-family, confirmed by creator M2 build content.",
    flipProfile: "Related to the M2CS collector route; treat as a lower-cost entry into the M2 line until values are pinned.",
    bestFor: ["collector builds", "custom paints"],
    sourceNote: "M2 marque confirmed by creator content; stats pending.",
    searchPhrases: ["m2 junk mechanics", "m2 build"]
  }
];

// Real, dated community flip evidence (creator-reported), NOT invented.
// A creator bought a $30K junk car and sold it for $41,700 — a concrete
// example of a positive-margin flip. Use as a reference datapoint, not a promise.
export const flipEvidence = [
  {
    example: "$30K junk car bought, sold for $41,700",
    margin: "$11,700 (+39%)",
    source: "Creator Short (\u201cI Bought a $30K Junk Car\u2026 Then Sold It for $41,700!\u201d)",
    asOf: "August 2026",
    note: "Community-reported single flip. Not a guarantee and highly dependent on buy price, repair cost, and marque rarity."
  }
];

// Rarity tier concept confirmed from creator content ("Legendary Cars" / "rarest car").
// Exact odds per car are not developer-published and are labeled Unknown.
export const rarityNotes = [
  "Legendary tier confirmed by creator Shorts (\u201c3 Legendary Cars Found in Junkyards\u201d)",
  "A \u201crarest car\u201d concept is repeatedly featured (\u201cI rebuilt the RAREST car\u201d)",
  "Exact per-marque rarity odds are not published; treat all rarity as community-reported"
];

export function getVehicle(slug: string) {
  return vehicles.find((v) => v.slug === slug);
}

export const vehicleSlugs = vehicles.map((v) => v.slug);
