import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { CtaBanner } from "@/components/site/CtaBanner";
import partnershipImg from "@/assets/partnership.jpg";
import { Target, Eye, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos — AL FATEH" },
      {
        name: "description",
        content:
          "Découvrez AL FATEH : 40+ ans d'expérience cumulée, expertise marché ivoirien et réseau national de distribution agroalimentaire.",
      },
      { property: "og:title", content: "À propos d'AL FATEH" },
      {
        property: "og:description",
        content: "Expertise, réseau et engagement au service de votre croissance.",
      },
      { property: "og:image", content: partnershipImg },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      {/* Hero compact */}
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary-glow blur-3xl" />
        </div>
        <div className="container-pro relative py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-glow">
              À propos
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-extrabold leading-tight text-balance">
              Quarante ans d'expertise au service du marché ivoirien.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 leading-relaxed max-w-2xl">
              AL FATEH est née d'une conviction : la Côte d'Ivoire mérite un distributeur
              agroalimentaire à la hauteur de son potentiel. Structuré, rigoureux, et
              profondément ancré dans le terrain.
            </p>
          </div>
        </div>
      </section>

      <Section eyebrow="Notre histoire" title="Un acteur né du terrain.">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <img
            src={partnershipImg}
            alt="Équipe AL FATEH"
            width={1280}
            height={896}
            loading="lazy"
            className="rounded-2xl shadow-elegant"
          />
          <div className="space-y-5 text-lg leading-relaxed text-foreground/90">
            <p>
              Forte d'une équipe dirigeante cumulant <strong className="text-primary">plus de 40 ans
              d'expérience</strong> dans la distribution agroalimentaire en Afrique de l'Ouest,
              AL FATEH s'impose aujourd'hui comme un partenaire incontournable des usines et
              des marques internationales.
            </p>
            <p>
              Notre force : une compréhension fine des codes du retail ivoirien,
              une logistique éprouvée et des relations historiques avec les principaux
              acteurs du marché — supermarchés, supérettes, grossistes et détaillants.
            </p>
            <p>
              Chaque jour, nous bâtissons des ponts solides entre les industriels et
              le consommateur final.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/40" eyebrow="Nos valeurs" title="Ce qui nous anime.">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Excellence opérationnelle",
              desc: "Une exécution rigoureuse à chaque étape, du quai d'usine au rayon final.",
            },
            {
              icon: Eye,
              title: "Vision long terme",
              desc: "Nous bâtissons des partenariats durables, pas des transactions ponctuelles.",
            },
            {
              icon: Heart,
              title: "Engagement local",
              desc: "Profondément ivoiriens, nous contribuons à structurer notre marché.",
            },
          ].map((v) => (
            <div
              key={v.title}
              className="bg-card border border-border/60 rounded-2xl p-8 shadow-card"
            >
              <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-5">
                <v.icon size={22} />
              </div>
              <h3 className="font-display text-xl font-bold text-primary">{v.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Vision & ambition" title="Devenir la référence en Afrique de l'Ouest.">
        <div className="bg-gradient-hero rounded-3xl p-10 md:p-16 text-primary-foreground shadow-elegant relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative max-w-3xl">
            <p className="text-xl md:text-2xl leading-relaxed text-balance">
              Notre ambition est claire : faire d'AL FATEH le distributeur agroalimentaire
              de référence en Côte d'Ivoire et, demain, dans toute l'Afrique de l'Ouest.
              En construisant chaque partenariat avec rigueur, en investissant dans
              notre réseau, et en plaçant la fiabilité au cœur de chaque décision.
            </p>
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
