import type { Metadata } from "next";
import Link from "next/link";
import { vehicleSlugs, getVehicle } from "@/data/vehicles";
import { langAlternates, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { AdsterraArticleBottom, AdsterraArticleTop } from "@/components/ads";

export const metadata: Metadata = {
  title: "Coches de Junk Mechanics - Tier List y Base de Datos (Español)",
  description:
    "Todos los coches confirmados de Junk Mechanics: tipo, tier de rareza y valor de reventa, ordenados y con enlace a la guía de cada coche — en español.",
  alternates: langAlternates("es/vehicles"),
  openGraph: {
    title: "Coches de Junk Mechanics (Español)",
    description: "Base de datos de coches de Junk Mechanics con tier de rareza y valor de flipeo.",
    url: `${siteConfig.domain}/es/vehicles`,
    images: ["/opengraph-image"]
  }
};

const allVehicles = vehicleSlugs
  .map((slug) => getVehicle(slug))
  .filter((v): v is NonNullable<typeof v> => Boolean(v));

export default function EsVehiclesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/es" },
          { name: "Coches", href: "/es/vehicles" }
        ]}
      />
      <Breadcrumbs items={[{ label: "Inicio", href: "/es" }, { label: "Coches", href: "/es/vehicles" }]} />

      <PageIntro
        eyebrow={`Garaje · ${allVehicles.length} coches confirmados`}
        title="Coches de Junk Mechanics"
        description={metadata.description ?? ""}
      >
        <div className="flex flex-wrap gap-3">
          <Link className="button-secondary" href="/vehicles">Versión en inglés →</Link>
        </div>
      </PageIntro>
      <AdsterraArticleTop />

      <section className="mt-8">
        <SectionHeader
          eyebrow="Base de datos"
          title="Todos los coches confirmados"
          copy="Comparamos por tier de rareza y preferencia de flipeo. Los precios exactos y porcentajes de rareza no están publicados por el desarrollador: marcamos tier ordenados, no porcentajes inventados."
        />
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wide text-white/45">
                <th className="py-3 pr-4 font-semibold">Coche</th>
                <th className="py-3 px-4 font-semibold">Tipo</th>
                <th className="py-3 px-4 font-semibold">Rareza</th>
                <th className="py-3 px-4 font-semibold">Flipeo</th>
              </tr>
            </thead>
            <tbody>
              {allVehicles.map((v) => (
                <tr key={v.slug} className="border-b border-white/5 hover:bg-white/[0.02]">
                  <td className="py-3 pr-4">
                    <Link href={`/es/vehicles/${v.slug}`} className="font-semibold text-white hover:text-[color:var(--accent)]">
                      {v.name}
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-white/70">{v.type}</td>
                  <td className="py-3 px-4 text-white/70">{v.rarityTier}</td>
                  <td className="py-3 px-4"><span className="tier-badge">{v.tier}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Empezar"
          title="Primeros pasos en español"
          copy="El bucle básico de Junk Mechanics: canjea códigos, compra en subasta, repara y revende."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/es/codes" className="content-card">
            <span className="mini-label">1</span>
            <h3 className="mt-2 font-semibold text-white">Canjea códigos</h3>
            <p className="mt-1 text-sm text-white/60">Consigue tu primer efectivo con los códigos verificados.</p>
          </Link>
          <Link href="/es" className="content-card">
            <span className="mini-label">2</span>
            <h3 className="mt-2 font-semibold text-white">Compra en subasta</h3>
            <p className="mt-1 text-sm text-white/60">Puja por debajo de tu tope ajustado a la reparación.</p>
          </Link>
          <Link href="/es" className="content-card">
            <span className="mini-label">3</span>
            <h3 className="mt-2 font-semibold text-white">Reaparece y revende</h3>
            <p className="mt-1 text-sm text-white/60">Radiador + batería + pintura, y venta en el concesionario.</p>
          </Link>
        </div>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}
