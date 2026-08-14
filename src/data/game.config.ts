import type { GameConfig } from "@/types/site";

export const gameConfig: GameConfig = {
  name: "Junk Mechanics",
  slug: "junk-mechanics",
  domain: "https://junkmechanicshub.com",
  theme: {
    primaryColor: "#FACC15",
    accentColor: "#F97316",
    surfaceColor: "#0E0F12",
    style: "roblox-seo-hub"
  },
  currency: {
    name: "Cash",
    abbr: "$"
  },
  features: {
    hasCalculator: true,
    hasTierList: true,
    hasCodesPage: true,
    hasBrainrotIndex: false,
    hasHandbook: true
  },
  updateCadence: "Daily launch checks",
  dataSources: {
    officialGameUrl: "https://www.roblox.com/games/70435795041539/Junk-Mechanics",
    discord: "#",
    trello: "#"
  },
  ads: {
    publisher: "Adsterra",
    usesRuntimeConfig: true
  }
};