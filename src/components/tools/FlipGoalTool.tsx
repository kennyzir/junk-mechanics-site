"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/ui/content";

function money(value: number) {
  return `$${Math.max(0, Math.round(value)).toLocaleString("en-US")}`;
}

// Decision-support tool: how many flips does it take to reach a target Cash goal?
// Everything is user-input — no invented game numbers. This is the "poor-to-rich"
// plan-ahead tool the economy loop rewards.
export function FlipGoalTool() {
  const [startingCash, setStartingCash] = useState(1000);
  const [profitPerFlip, setProfitPerFlip] = useState(120);
  const [target, setTarget] = useState(5000);
  const [pacer, setPacer] = useState("None — one-off target");

  const result = useMemo(() => {
    const needed = Math.max(0, target - startingCash);
    const flips = profitPerFlip > 0 ? Math.ceil(needed / profitPerFlip) : Infinity;
    return { needed, flips };
  }, [profitPerFlip, startingCash, target]);

  const flipsLabel = Number.isFinite(result.flips)
    ? `${result.flips} flip${result.flips === 1 ? "" : "s"}`
    : "Set a positive profit to plan";

  return (
    <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="content-card">
        <SectionHeader eyebrow="Inputs" title="Plan a flip goal" />
        <div className="mt-6 grid gap-5">
          <label className="grid gap-2">
            <span className="text-sm font-bold text-white">Starting Cash</span>
            <input
              type="number"
              min="0"
              value={startingCash}
              onChange={(event) => setStartingCash(Number(event.target.value))}
              className="rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-bold text-white">Average profit per flip (Cash)</span>
            <input
              type="number"
              min="1"
              value={profitPerFlip}
              onChange={(event) => setProfitPerFlip(Number(event.target.value))}
              className="rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white"
            />
            <span className="text-xs text-white/50">Read the profit off the flip calculator after a sample run.</span>
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-bold text-white">Target Cash (goal)</span>
            <input
              type="number"
              min="0"
              value={target}
              onChange={(event) => setTarget(Number(event.target.value))}
              className="rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-bold text-white">What is the goal for?</span>
            <select
              value={pacer}
              onChange={(event) => setPacer(event.target.value)}
              className="rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white"
            >
              <option>None — one-off target</option>
              <option>First garage slot</option>
              <option>M2 / M2CS collector build</option>
              <option>570s supercar</option>
              <option>Legend-tier marque (Jesko)</option>
            </select>
          </label>
        </div>
      </div>

      <div className="content-card">
        <SectionHeader eyebrow="Output" title="Path to your target" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <span className="mini-label">Cash still needed</span>
            <p className="mt-2 text-3xl font-extrabold text-white">{money(result.needed)}</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <span className="mini-label">Flips to reach it</span>
            <p className="mt-2 text-3xl font-extrabold text-[color:var(--accent)]">{flipsLabel}</p>
          </div>
        </div>
        <div className="mt-6 rounded-lg border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 p-4">
          <h3 className="text-lg font-bold text-white">Reinvestment loop</h3>
          <p className="mt-2 text-sm leading-6 text-white/70">
            Reinvest profit into garage capacity and a faster repair route to lift profit-per-flip — each upgrade
            shrinks the flip count required for the next goal.
          </p>
        </div>
        <p className="mt-5 text-sm leading-6 text-white/60">
          Your average profit per flip comes from the flip calculator (a real sample). The goal tool just counts the
          flips — it does not assume any game-specific price that isn&apos;t yours.
        </p>
      </div>
    </div>
  );
}
