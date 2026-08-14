// Derive the vehicle page views from the Verified Game Database (src/data/game-db.ts).
// Do NOT add per-vehicle facts here — edit game-db.ts (single source of truth) and
// the hub / entity pages / tier list / calculator all pick the change up automatically.

import { marques, claimLabel } from "@/data/game-db";

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

// Map claim-state to the site's display vocabulary.
const conf = (s: string): "Reported" | "Pending" | "Verified" =>
  s === "Verified" ? "Verified" : s === "Community-reported" ? "Reported" : "Pending";

export const vehicles: VehicleEntity[] = marques.map((m): VehicleEntity => ({
  slug: m.id,
  name: m.name,
  type: m.type,
  tier: m.tier,
  confidence: conf(claimLabel(m.claimState)),
  rarityTier: m.rarityTier,
  confirmedBy: m.source,
  description: m.description,
  flipProfile: m.flipProfile,
  bestFor: m.bestFor,
  sourceNote: m.repairRoute,
  searchPhrases: m.searchPhrases,
}));

// Rarity tier concept confirmed from creator content. Exact per-car odds are Unknown.
export const rarityNotes = [
  "Legendary tier confirmed by creator Shorts (\u201c3 Legendary Cars Found in Junkyards\u201d)",
  "A \u201crarest car\u201d concept is repeatedly featured (\u201cI rebuilt the RAREST car\u201d)",
  "Exact per-marque rarity odds are not published; treat all rarity as community-reported",
];

// Real, dated community flip evidence (creator-reported), NOT invented.
export const flipEvidence = [
  {
    example: "$30K junk car bought, sold for $41,700",
    margin: "$11,700 (+39%)",
    source: "Creator Short (\u201cI Bought a $30K Junk Car\u2026 Then Sold It for $41,700!\u201d)",
    asOf: "August 2026",
    note: "Community-reported single flip. Not a guarantee and highly dependent on buy price, repair cost, and marque rarity."
  }
];

// Cascade stamp: bump this when the DB was last changed so freshness labels stay honest.
export const dbLastUpdated = "2026-08-14";

export function getVehicle(slug: string) {
  return vehicles.find((v) => v.slug === slug);
}

export const vehicleSlugs = vehicles.map((v) => v.slug);
