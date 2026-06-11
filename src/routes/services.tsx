import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Truck, Factory, TrendingUp, Boxes, Map, HeadphonesIcon } from "lucide-react";
import { useT } from "@/i18n/I18nProvider";

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

const serviceIcons = [Truck, Boxes, Factory, TrendingUp, Map, HeadphonesIcon];

function Services() {
  const t = useT();
  const services = t.services.items.map((s, i) => ({ ...s, icon: serviceIcons[i] }));
  return (
    <>
      <section className="relative bg-gradient-hero text-primary-foreground py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="container-pro relative">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-glow">
            {t.services.eyebrow}
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-extrabold leading-tight text-balance max-w-3xl">
            {t.services.title}
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/85 max-w-2xl leading-relaxed">
            {t.services.sub}
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
