import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import partnershipImg from "@/assets/partnership.jpg";
import { Rocket, DollarSign, Globe, Handshake, ArrowRight, CheckCircle2 } from "lucide-react";
import { useT } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/partenaires")({
  head: () => ({
    meta: [
      { title: "Partenaires — AL FATEH" },
      {
        name: "description",
        content:
          "Usines, marques internationales, nouveaux entrants : devenez partenaire d'AL FATEH pour réussir votre expansion en Côte d'Ivoire.",
      },
      { property: "og:title", content: "Devenir partenaire d'AL FATEH" },
      {
        property: "og:description",
        content: "Le raccourci stratégique vers le marché ivoirien.",
      },
      { property: "og:image", content: partnershipImg },
      { property: "og:url", content: "https://alfateh-bridge-launch.lovable.app/partenaires" },
      { name: "twitter:image", content: partnershipImg },
    ],
    links: [{ rel: "canonical", href: "https://alfateh-bridge-launch.lovable.app/partenaires" }],
  }),
  component: Partners,
});

const benefitIcons = [Rocket, DollarSign, Globe, Handshake];

function Partners() {
  const t = useT();
  const benefits = t.partners.benefits.map((b, i) => ({ ...b, icon: benefitIcons[i] }));
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={partnershipImg} alt="" width={1280} height={896} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />
        </div>
        <div className="container-pro relative py-24">
          <div className="max-w-3xl text-primary-foreground">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-glow">
              {t.partners.eyebrow}
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-extrabold leading-tight text-balance">
              {t.partners.title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
              {t.partners.sub}
            </p>
            <Link
              to="/contact"
              search={{ type: "marque" }}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-7 py-4 text-base font-semibold text-accent-foreground hover:bg-accent-glow transition-smooth shadow-glow"
            >
              {t.partners.cta}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Section eyebrow={t.partners.targetsEyebrow} title={t.partners.targetsTitle}>
        <div className="grid gap-6 md:grid-cols-3">
          {t.partners.targets.map((tg, i) => (
            <div
              key={tg.title}
              className="relative bg-card border border-border/60 rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth"
            >
              <div className="absolute -top-4 left-8 bg-gradient-accent text-accent-foreground font-display font-extrabold text-sm rounded-full h-10 w-10 flex items-center justify-center shadow-glow">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-primary">{tg.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{tg.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/40" eyebrow={t.partners.benefitsEyebrow} title={t.partners.benefitsTitle}>
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((b) => (
            <div key={b.title} className="flex gap-5 bg-card border border-border/60 rounded-2xl p-7 shadow-card">
              <div className="shrink-0 h-14 w-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                <b.icon size={24} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-primary">{b.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow={t.partners.processEyebrow} title={t.partners.processTitle}>
        <div className="grid gap-6 md:grid-cols-4">
          {t.partners.process.map((s, i) => (
            <div key={s.t} className="relative">
              <div className="text-7xl font-display font-extrabold text-accent/15 leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-2 font-display text-lg font-bold text-primary">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="bg-primary rounded-3xl p-10 md:p-16 shadow-elegant relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-accent/40 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.5fr_1fr] items-center">
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-extrabold text-primary-foreground text-balance leading-tight">
                {t.partners.finalTitle}
              </h3>
              <ul className="mt-6 space-y-2 text-primary-foreground/85">
                {t.partners.finalList.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-accent-glow" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:justify-self-end">
              <Link
                to="/contact"
                search={{ type: "marque" }}
                className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-4 text-base font-semibold text-accent-foreground hover:bg-accent-glow transition-smooth shadow-glow"
              >
                {t.partners.cta}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
