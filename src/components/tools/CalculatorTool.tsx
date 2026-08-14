"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/ui/content";

const repairBundles = [
  { label: "Light repair (radiator only)", value: 1.02, note: "Cheapest pass; sale value barely changes if bodywork is bad." },
  { label: "Standard repair (radiator + battery)", value: 1.05, note: "The everyday flip: a couple of cheap fixes, decent value bump." },
  { label: "Full restore (radiator + battery + paint)", value: 1.12, note: "Paint lift raises resale the most but adds the biggest cost." },
  { label: "Custom paint / collectible", value: 1.18, note: "For marque cars like the BMW G80 where paint matters most." }
] as const;

function money(value: number) {
  return `$${Math.max(0, Math.round(value)).toLocaleString("en-US")}`;
}

export function CalculatorTool() {
  const [auctionBid, setAuctionBid] = useState(100);
  const [repairCost, setRepairCost] = useState(50);
  const [resale, setResale] = useState(220);
  const [bundleName, setBundleName] = useState<string>("Standard repair (radiator + battery)");
  const [condition, setCondition] = useState(70);

  const result = useMemo(() => {
    const bundle =
      repairBundles.find((item) => item.label === bundleName) ?? repairBundles[1];
    const conditionFactor = Math.max(0.5, Math.min(1, condition)) / 100 / 0.7;
    const gross = resale * bundle.value * conditionFactor;
    const totalSpend = auctionBid + repairCost;
    const profit = gross - totalSpend;
    const roi = totalSpend > 0 ? (profit / totalSpend) * 100 : 0;
    return { bundle, gross, totalSpend, profit, roi };
  }, [auctionBid, condition, repairCost, resale, bundleName]);

  return (
    <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="content-card">
        <SectionHeader eyebrow="Inputs" title="Estimate a junk-yard flip" />
        <div className="mt-6 grid gap-5">
          <label className="grid gap-2">
            <span className="text-sm font-bold text-white">Auction bid price (Cash)</span>
            <input
              type="number"
              min="0"
              value={auctionBid}
              onChange={(event) => setAuctionBid(Number(event.target.value))}
              className="rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-white">Total repair cost (Cash)</span>
            <input
              type="number"
              min="0"
              value={repairCost}
              onChange={(event) => setRepairCost(Number(event.target.value))}
              className="rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-white">Dealership resale estimate (Cash)</span>
            <input
              type="number"
              min="0"
              value={resale}
              onChange={(event) => setResale(Number(event.target.value))}
              className="rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-white">Repair scope</span>
            <select
              value={bundleName}
              onChange={(event) => setBundleName(event.target.value)}
              className="rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white"
            >
              {repairBundles.map((bundle) => (
                <option key={bundle.label} value={bundle.label}>
                  {bundle.label}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-white">Starting condition: {condition}%</span>
            <input
              type="range"
              min="50"
              max="100"
              value={condition}
              onChange={(event) => setCondition(Number(event.target.value))}
            />
          </label>
        </div>
      </div>

      <div className="content-card">
        <SectionHeader eyebrow="Output" title="Estimated profit and ROI" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <span className="mini-label">Estimated resale value</span>
            <p className="mt-2 text-3xl font-extrabold text-white">{money(result.gross)}</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <span className="mini-label">Total spend (bid + repair)</span>
            <p className="mt-2 text-3xl font-extrabold text-white">{money(result.totalSpend)}</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <span className="mini-label">Profit</span>
            <p className={result.profit >= 0 ? "mt-2 text-3xl font-extrabold text-emerald-300" : "mt-2 text-3xl font-extrabold text-red-300"}>
              {result.profit >= 0 ? "+" : "-"}{money(Math.abs(result.profit))}
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <span className="mini-label">ROI</span>
            <p className="mt-2 text-3xl font-extrabold text-white">{Math.round(result.roi)}%</p>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 p-4">
          <h3 className="text-lg font-bold text-white">{result.bundle.label}</h3>
          <p className="mt-2 text-sm leading-6 text-white/70">{result.bundle.note}</p>
        </div>

        <p className="mt-5 text-sm leading-6 text-white/60">
          This flipping calculator uses player-entered auction bid, repair scope, and resale assumptions. Exact
          per-car dealership prices, paint multipliers, and auction RNG are community-reported and are not a
          guaranteed sell-price channel.
        </p>
      </div>
    </div>
  );
}