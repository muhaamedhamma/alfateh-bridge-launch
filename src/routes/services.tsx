import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { CtaBanner } from "@/components/site/CtaBanner";
import {
  Truck,
  Factory,
  TrendingUp,
  Boxes,
  Map,
  HeadphonesIcon,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Nos services — AL FATEH" },
      {
        name: "description",
        content:
          "Distribution en gros, accès prix usine, développement de marques, logistique nationale : l'offre intégrée d'AL FATEH.",
      },
      { property: "og:title", content: "Nos services — AL FATEH" },
      {
        property: "og:description",
        content: "Une offre 360° pour les industriels et marques agroalimentaires.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Truck,
    title: "Distribution en gros",
    desc: "Notre cœur de métier : acheminer vos produits jusqu'au point de vente final, partout en Côte d'Ivoire.",
    features: ["Flotte logistique dédiée", "Couverture nationale", "Délais maîtrisés"],
  },
  {
    icon: Boxes,
    title: "Approvisionnement continu",
    desc: "Stocks tampons, planification fine et réactivité : vos clients ne connaissent jamais la rupture.",
    features: ["Gestion prédictive", "Stocks stratégiques", "Réassort 24/7"],
  },
  {
    icon: Factory,
    title: "Accès prix usine",
    desc: "Grâce à nos partenariats industriels directs, vous bénéficiez d'une compétitivité tarifaire imbattable.",
    features: ["Négociation directe", "Volumes massifs", "Marges optimisées"],
  },
  {
    icon: TrendingUp,
    title: "Développement de marques",
    desc: "Nous accompagnons les marques internationales dans leur lancement et leur croissance sur le marché ivoirien.",
    features: ["Étude de marché", "Plan de lancement", "Force de vente"],
  },
  {
    icon: Map,
    title: "Logistique nationale",
    desc: "D'Abidjan aux régions, notre maillage logistique garantit une livraison fiable et rapide.",
    features: ["Hubs régionaux", "Traçabilité totale", "Chaîne du froid"],
  },
  {
    icon: HeadphonesIcon,
    title: "Support partenaires",
    desc: "Une équipe dédiée pour piloter votre activité et fluidifier la relation au quotidien.",
    features: ["Account manager", "Reporting régulier", "Disponibilité 6j/7"],
  },
];

function Services() {
  return (
    <>
      <section className="relative bg-gradient-hero text-primary-foreground py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="container-pro relative">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-glow">
            Nos services
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-extrabold leading-tight text-balance max-w-3xl">
            Une offre intégrée, pensée pour vos ambitions de croissance.
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/85 max-w-2xl leading-relaxed">
            De la sortie d'usine au consommateur final, nous orchestrons toute la chaîne
            de valeur avec exigence et précision.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card border border-border/60 rounded-2xl p-8 shadow-card hover:-translate-y-1 hover:shadow-elegant transition-smooth"
            >
              <div className="h-14 w-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-6 shadow-glow">
                <s.icon size={26} className="text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-5 pt-5 border-t border-border/60 space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
