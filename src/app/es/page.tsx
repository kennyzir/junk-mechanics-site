import type { Metadata } from "next";
import Link from "next/link";
import { activeCodes, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Junk Mechanics Códigos, Coches, Tier List y Guías (Español)",
  description:
    "Códigos activos de Junk Mechanics, tier list de coches, método para ganar dinero y guías de subasta/venta en español — una wiki de fans, no oficial.",
  alternates: {
    languages: {
      "en-US": `${siteConfig.domain}`,
      es: `${siteConfig.domain}/es`,
      "x-default": `${siteConfig.domain}`
    }
  }
};

export default function EsHome() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="border-b border-white/10 pb-8">
        <span className="mini-label">Guía en español</span>
        <h1 className="mt-3 text-3xl font-bold text-white">Junk Mechanics en español</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">
          Junk Mechanics es un juego de Roblox donde compras coches siniestrados en subasta, los reparas
          (radiador, batería, pintura) y los revendes para ganar efectivo. Esta wiki de fans no oficial reúne
          códigos verificados, la tier list de coches y el método de ganancia para hispanohablantes.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link className="button-primary" href="/codes">Códigos activos</Link>
          <Link className="button-secondary" href="/tier-list">Tier list de coches</Link>
          <Link className="button-secondary" href="/best-money-method">Método para ganar dinero</Link>
          <Link className="button-secondary" href="/calculator">Calculadora de ganancia</Link>
        </div>
      </div>

      <section className="mt-8">
        <span className="mini-label">Códigos</span>
        <h2 className="mt-2 text-xl font-bold text-white">Códigos verificados</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">
          Estos códigos vienen de una recopilación fechada (12 de agosto 2026). Un código solo aparece aquí
          después de que una fuente actual confirme su recompensa.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {activeCodes.map((c) => (
            <div key={c.code} className="content-card">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-[color:var(--accent)]">{c.code}</span>
                <span className="mini-label">{c.reward}</span>
              </div>
              <p className="mt-2 text-xs text-white/50">Verificado · {c.status}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm">
          <Link href="/codes" className="text-[color:var(--accent)] underline underline-offset-4">Ver todos los códigos →</Link>
        </p>
      </section>

      <section className="mt-10">
        <span className="mini-label">Guías</span>
        <h2 className="mt-2 text-xl font-bold text-white">Cómo empezar</h2>
        <ol className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            { t: "1. Canjea los códigos", d: "Consigue tu primer efectivo con los códigos verificados.", h: "/codes" },
            { t: "2. Compra en subasta", d: "Puja por debajo de tu tope ajustado a la reparación.", h: "/auction-guide" },
            { t: "3. Reaparece y repara", d: "Radiador + batería + pintura, y revende en el concesionario.", h: "/guides" },
            { t: "4. Reinvierte", d: "Añade capacidad al garaje y mejoras para que las ventas no se estanquen.", h: "/shop-upgrades" }
          ].map((s) => (
            <li key={s.t} className="content-card">
              <Link href={s.h} className="font-semibold text-white hover:text-[color:var(--accent)]">{s.t}</Link>
              <p className="mt-1 text-sm leading-6 text-white/60">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10 border-t border-white/10 pt-6">
        <p className="max-w-2xl text-xs text-white/40">
          Junk Mechanics es una marca del desarrollador en Roblox. Este sitio es una wiki de fans no oficial.
          Los precios y porcentajes exactos de rareza no están publicados por el desarrollador; marcamos
        lo verificado frente a lo comunitario, sin inventar cifras.
        </p>
      </section>
    </main>
  );
}
