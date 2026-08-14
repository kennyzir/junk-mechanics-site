import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { vehicleSlugs, getVehicle } from "@/data/vehicles";
import { checkedDate, langAlternates, monthLabel, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";

export function generateStaticParams() {
  return vehicleSlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const v = getVehicle((await params).slug);
  if (!v) return {};
  return {
    title: `${v.name} en Junk Mechanics (${monthLabel}) - Valor, Rareza y Guía |
Flipeo | ${siteConfig.gameName}`,
    description: v.description,
    alternates: langAlternates(`es/vehicles/${v.slug}`),
    openGraph: {
      title: `${v.name} en ${siteConfig.gameName} (Español)`,
      description: v.description,
      url: `${siteConfig.domain}/es/vehicles/${v.slug}`,
      images: ["/opengraph-image"]
    }
  };
}

const allVehicles = vehicleSlugs
  .map((slug) => getVehicle(slug))
  .filter((v): v is NonNullable<typeof v> => Boolean(v));

export default async function EsVehiclePage({ params }: { params: Promise<{ slug: string }> }) {
  const v = getVehicle((await params).slug);
  if (!v) return notFound();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/es" },
          { name: "Coches", href: "/es/vehicles" },
          { name: v.name, href: `/es/vehicles/${v.slug}` }
        ]}
      />
      <FaqJsonLd
        items={[
          { q: `¿Qué es el ${v.name} en Junk Mechanics?`, a: v.description },
          { q: `¿Merece la pena el ${v.name}?`, a: v.flipProfile },
          { q: `¿Cómo sé el valor del ${v.name}?`, a: `${v.sourceNote} Usa la calculadora de flipeo antes de pujar.` }
        ]}
      />

      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Coches", href: "/es/vehicles" },
          { label: v.name, href: `/es/vehicles/${v.slug}` }
        ]}
      />

      <PageIntro
        eyebrow={`${v.type} · Revisado ${checkedDate}`}
        title={`${v.name} en Junk Mechanics`}
        description={v.description}
      >
        <div className="flex flex-wrap gap-3">
          <Link className="button-secondary" href={`/vehicles/${v.slug}`}>Guía completa en inglés →</Link>
        </div>
      </PageIntro>
      <AdsterraArticleTop />

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">Estado</span>
          <h2 className="mt-3 text-xl font-bold text-white">{v.confidence}</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">{v.sourceNote} Confirmado por: {v.confirmedBy}.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Rareza y tier</span>
          <div className="mt-3 flex items-center gap-3">
            <span className="tier-badge">{v.tier}</span>
            <span className="font-semibold text-white/80">{v.rarityTier}</span>
          </div>
          <p className="mt-2 text-sm leading-6 text-white/66">Ordenado frente a los demás coches confirmados por preferencia de flipeo.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Ideal para</span>
          <div className="mt-3 flex flex-wrap gap-2">
            {v.bestFor.map((label) => (
              <span key={label} className="mini-label">{label}</span>
            ))}
          </div>
        </article>
      </section>
      <AdsterraArticleMid />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Perfil de flipeo"
          title={`¿Merece la pena flipar el ${v.name}?`}
          copy="Cómo encaja este coche en el bucle subasta→reparación→concesionario, con lo confirmado y lo que podemos o no afirmar."
        />
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="content-card">
            <h2 className="text-xl font-bold text-white">Lo verificado</h2>
            <ul className="mt-3 grid gap-2 text-sm text-white/70">
              <li>· El {v.name} existe y es {v.type.toLocaleLowerCase()}</li>
              <li>· {v.confirmedBy}</li>
              <li>· Participa en el bucle subasta-reparación-concesionario</li>
            </ul>
          </div>
          <div className="content-card">
            <h2 className="text-xl font-bold text-white">Lo comunitario</h2>
            <p className="mt-3 text-sm leading-6 text-white/66">
              El precio de subasta, coste de reparación y reventa exactos son reportados por la comunidad. La
              demanda por rareza es real según la cobertura de creadores, pero su tamaño no está publicado por el desarrollador.
            </p>
          </div>
          <div className="content-card">
            <h2 className="text-xl font-bold text-white">Lógica de decisión</h2>
            <p className="mt-3 text-sm leading-6 text-white/66">{v.flipProfile}</p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Comparativa"
          title={`${v.name} frente al resto del garaje`}
          copy="Escanea todos los coches confirmados contra este — tipo, rareza y tier de flipeo. Haz clic en cualquier fila para abrir su página y seguir explorando."
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
              {allVehicles.map((c) => (
                <tr key={c.slug} className={`border-b border-white/5 ${c.slug === v.slug ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"}`}>
                  <td className="py-3 pr-4">
                    <Link
                      href={`/es/vehicles/${c.slug}`}
                      className={`font-semibold ${c.slug === v.slug ? "text-[color:var(--accent)]" : "text-white hover:text-[color:var(--accent)]"}`}
                    >
                      {c.name} {c.slug === v.slug && <span className="text-xs text-white/40">(este coche)</span>}
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-white/70">{c.type}</td>
                  <td className="py-3 px-4 text-white/70">{c.rarityTier}</td>
                  <td className="py-3 px-4"><span className="tier-badge">{c.tier}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-white/60">
          Precios exactos y probabilidades de rareza los reporta la comunidad, no el desarrollador — tiers
          ordenados, no porcentajes inventados.
        </p>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}
