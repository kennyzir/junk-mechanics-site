import type { Metadata } from "next";
import Link from "next/link";
import { activeCodes, checkedDate, expiredCodes, langAlternates, monthLabel, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";

const pageTitle = `${siteConfig.gameName} Códigos (${monthLabel})`;
const pageDescription =
  `Códigos activos de ${siteConfig.gameName}, recompensas, cómo canjearlos, códigos caducados y dónde se anuncian los nuevos lanzamientos — en español.`;

export const metadata: Metadata = {
  title: `${pageTitle} - Activos, Caducados y Cómo Canjear`,
  description: pageDescription,
  alternates: langAlternates("es/codes"),
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteConfig.domain}/es/codes`,
    images: ["/opengraph-image"]
  }
};

const redeemSteps = [
  {
    name: "Abre Junk Mechanics desde la página oficial de Roblox",
    text: "Lanza el juego desde roblox.com/games/70435795041539/Junk-Mechanics (evita copias falsas) y deja que cargue antes de buscar el panel de códigos."
  },
  {
    name: "Abre el panel de códigos dentro del juego",
    text: "Busca el botón de códigos, normalmente en el menú principal o la pestaña de ajustes."
  },
  {
    name: "Escribe o pega el código exactamente",
    text: "Los códigos distinguen mayúsculas de minúsculas. Pégalo tal cual (UPDATE4K, 5500THANKS, THIRDCODEOK, FOURTHCODINITUNGTUNG)."
  },
  {
    name: "Confirma para reclamar la recompensa",
    text: "Verás el efectivo u otro premio añadirse al instante. Si no aparece, revisa la letra de nuevo."
  }
];

const esFaqs = [
  {
    q: `¿Hay códigos activos de ${siteConfig.gameName} ahora mismo?`,
    a: `Sí. A fecha de ${checkedDate} hay cuatro códigos verificados: UPDATE4K (20K Cash), 5500THANKS (20K Cash), THIRDCODEOK (recompensas gratis) y FOURTHCODINITUNGTUNG (recompensas gratis). Vienen de una recopilación fechada del círculo de Level Nerds del 12 de agosto de 2026.`
  },
  {
    q: `¿Cómo canjeo códigos en ${siteConfig.gameName}?`,
    a: "Entra al juego desde la página oficial de Roblox, abre el panel de códigos en el menú, pega el código exacto (distingue mayúsculas) y confirma la recompensa."
  },
  {
    q: "¿Por qué un código no me funciona?",
    a: "Los códigos caducan de forma continua. Si uno ya expiró, prueba los otros verificados o revisa la página de códigos otra vez. Los sitios que venden \"códigos garantizados\" suelen no estar verificados."
  },
  {
    q: `¿Dónde salen antes los códigos de ${siteConfig.gameName}?`,
    a: "Suelen anunciarse en la página oficial de Roblox, en el grupo/comunidad del desarrollador y en el Discord oficial. Seguir esas tres fuentes te da la mejor oportunidad de pillarlos cuando salen."
  }
];

export default function EsCodesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", href: "/es" },
          { name: "Códigos", href: "/es/codes" }
        ]}
      />
      <FaqJsonLd items={esFaqs} />
      <HowToJsonLd name={`Cómo canjear códigos de ${siteConfig.gameName}`} description={pageDescription} steps={redeemSteps} />

      <Breadcrumbs items={[{ label: "Inicio", href: "/es" }, { label: "Códigos", href: "/es/codes" }]} />

      <PageIntro
        eyebrow={`Códigos · Revisado ${checkedDate}`}
        title={`Códigos activos de ${siteConfig.gameName}`}
        description={pageDescription}
      >
        <div className="flex flex-wrap gap-3">
          <Link className="button-secondary" href="/codes">Ver la versión en inglés →</Link>
        </div>
      </PageIntro>
      <AdsterraArticleTop />

      <section className="mt-8">
        <SectionHeader
          eyebrow="Respuesta rápida"
          title="¿Hay códigos funcionales ahora?"
          copy={`Sí — ${siteConfig.gameName} tiene códigos verificados. Cada código abajo lleva su recompensa y un estado Verificado con su fecha. Los códigos caducan rápido, así que revisa la fecha antes de usarlos.`}
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {activeCodes.map((c) => (
            <div key={c.code} className="content-card">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono font-bold text-[color:var(--accent)]">{c.code}</span>
                <span className="mini-label">{c.reward}</span>
              </div>
              <p className="mt-2 text-xs text-white/55">Estado: {c.status} · Añadido {c.addedDate}</p>
            </div>
          ))}
        </div>
        {expiredCodes.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold text-white/80">Caducados</h3>
            <ul className="mt-2 grid gap-1 text-sm text-white/55">
              {expiredCodes.map((c) => (
                <li key={c.code}>{c.code} — caducado</li>
              ))}
            </ul>
          </div>
        )}
      </section>
      <AdsterraArticleMid />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Cómo canjear"
          title="Cómo canjear códigos paso a paso"
          copy="Sigue estos pasos en orden."
        />
        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          {redeemSteps.map((s, i) => (
            <li key={s.name} className="content-card">
              <span className="mini-label">Paso {i + 1}</span>
              <h3 className="mt-2 font-semibold text-white">{s.name}</h3>
              <p className="mt-1 text-sm leading-6 text-white/60">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Por qué fallan"
          title="Prueba de forma fiable"
          copy={'La mayoría de los “códigos” que circulan por sitios dudosos no están verificados. Un código solo aparece aquí cuando una fuente actual confirma su recompensa.'}
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="content-card">
            <h3 className="font-semibold text-white">Solo fuentes fechadas</h3>
            <p className="mt-1 text-sm text-white/60">
              Estos códigos vienen de una recopilación fechada (12 de agosto 2026). Si uno expira, lo marcamos al revisar.
            </p>
          </div>
          <div className="content-card">
            <h3 className="font-semibold text-white">No confíes en &ldquo;garantizados&rdquo;</h3>
            <p className="mt-1 text-sm text-white/60">
              Sitios que venden códigos por dinero suelen vender información no verificada. Canjea siempre en el juego oficial.
            </p>
          </div>
          <div className="content-card">
            <h3 className="font-semibold text-white">Revisa la página otra vez</h3>
            <p className="mt-1 text-sm text-white/60">
              Los códigos caducan de forma continua. Si estás a punto de comprar un coche, revisa aquí si hay efectivo nuevo.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Siguiente paso"
          title="Usa el efectivo para flipar"
          copy="El efectivo de los códigos es la base para tu primera subasta y reparación."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/es/vehicles" className="content-card">
            <span className="mini-label">Garaje</span>
            <h3 className="mt-2 font-semibold text-white">Tier list de coches</h3>
            <p className="mt-1 text-sm text-white/60">Qué coches merecen tu inversión de reparación.</p>
          </Link>
          <Link href="/es/vehicles/570s" className="content-card">
            <span className="mini-label">Ejemplo</span>
            <h3 className="mt-2 font-semibold text-white">El 570s</h3>
            <p className="mt-1 text-sm text-white/60">Un supercoche con margen alto si lo reparas bien.</p>
          </Link>
          <Link href="/es" className="content-card">
            <span className="mini-label">Inicio</span>
            <h3 className="mt-2 font-semibold text-white">Junk Mechanics en español</h3>
            <p className="mt-1 text-sm text-white/60">Resumen en español de códigos, tier list y método.</p>
          </Link>
        </div>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}
