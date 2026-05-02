import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { CtaBanner } from "@/components/site/CtaBanner";
import networkImg from "@/assets/network-trucks.jpg";
import { Store, ShoppingBag, Building2, Users } from "lucide-react";

export const Route = createFileRoute("/reseau")({
  head: () => ({
    meta: [
      { title: "Notre réseau — AL FATEH" },
      {
        name: "description",
        content:
          "Couverture nationale d'AL FATEH : supermarchés, supérettes, grossistes et détaillants partout en Côte d'Ivoire.",
      },
      { property: "og:title", content: "Notre réseau national — AL FATEH" },
      {
        property: "og:description",
        content: "Une distribution intégrale du nord au sud de la Côte d'Ivoire.",
      },
      { property: "og:image", content: networkImg },
    ],
  }),
  component: Network,
});

const regions = [
  { name: "Abidjan", level: 100 },
  { name: "Yamoussoukro", level: 92 },
  { name: "Bouaké", level: 90 },
  { name: "San Pedro", level: 85 },
  { name: "Korhogo", level: 80 },
  { name: "Daloa", level: 82 },
  { name: "Man", level: 75 },
  { name: "Gagnoa", level: 78 },
];

const clients = [
  { icon: Building2, title: "Supermarchés", desc: "Grandes surfaces et chaînes nationales." },
  { icon: Store, title: "Supérettes", desc: "Réseau de proximité urbain et péri-urbain." },
  { icon: ShoppingBag, title: "Grossistes", desc: "Partenaires de redistribution régionale." },
  { icon: Users, title: "Détaillants", desc: "Boutiques de quartier et marchés locaux." },
];

function Network() {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={networkImg} alt="" width={1600} height={1024} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>
        <div className="container-pro relative py-24 text-primary-foreground">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-glow">
              Notre réseau
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-extrabold leading-tight text-balance">
              Une couverture nationale, du nord au sud.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/85 max-w-2xl leading-relaxed">
              D'Abidjan à Korhogo, de Bouaké à San Pedro : nos camions sillonnent
              chaque jour les routes ivoiriennes pour servir un réseau de centaines
              de points de vente.
            </p>
          </div>
        </div>
      </section>

      <Section eyebrow="Couverture territoriale" title="Toutes les régions de Côte d'Ivoire.">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative aspect-square max-w-md mx-auto">
            {/* Stylized map */}
            <div className="absolute inset-0 rounded-full bg-gradient-hero opacity-10 blur-3xl" />
            <svg viewBox="0 0 400 400" className="relative w-full h-full">
              <defs>
                <radialGradient id="g" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="oklch(0.52 0.13 155)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="oklch(0.24 0.07 255)" stopOpacity="0.05" />
                </radialGradient>
              </defs>
              <path
                d="M120 60 Q200 40 290 80 L320 180 Q310 280 250 340 Q180 360 110 320 Q70 240 90 150 Z"
                fill="url(#g)"
                stroke="oklch(0.24 0.07 255)"
                strokeWidth="2"
                strokeOpacity="0.4"
              />
              {[
                { x: 200, y: 280, name: "Abidjan", big: true },
                { x: 200, y: 200, name: "Yamoussoukro" },
                { x: 220, y: 150, name: "Bouaké" },
                { x: 150, y: 320, name: "San Pedro" },
                { x: 220, y: 90, name: "Korhogo" },
                { x: 150, y: 220, name: "Daloa" },
                { x: 110, y: 180, name: "Man" },
              ].map((c) => (
                <g key={c.name}>
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={c.big ? 8 : 5}
                    fill="oklch(0.52 0.13 155)"
                    className="animate-pulse"
                  />
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={c.big ? 16 : 10}
                    fill="oklch(0.52 0.13 155)"
                    fillOpacity="0.2"
                  />
                  <text
                    x={c.x + 14}
                    y={c.y + 4}
                    fill="oklch(0.24 0.07 255)"
                    fontSize={c.big ? 13 : 11}
                    fontWeight={c.big ? 700 : 500}
                    fontFamily="Plus Jakarta Sans"
                  >
                    {c.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <div className="space-y-4">
            {regions.map((r) => (
              <div key={r.name}>
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="font-display text-primary font-bold">{r.name}</span>
                  <span className="text-muted-foreground">{r.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-accent rounded-full"
                    style={{ width: `${r.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        className="bg-secondary/40"
        eyebrow="Nos clients"
        title="Tous les segments du retail ivoirien."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((c) => (
            <div
              key={c.title}
              className="bg-card border border-border/60 rounded-2xl p-7 shadow-card hover:-translate-y-1 transition-smooth"
            >
              <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-5">
                <c.icon size={22} />
              </div>
              <h3 className="font-display text-lg font-bold text-primary">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
