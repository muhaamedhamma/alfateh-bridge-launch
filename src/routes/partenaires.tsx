import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import partnershipImg from "@/assets/partnership.jpg";
import { Rocket, DollarSign, Globe, Handshake, ArrowRight, CheckCircle2 } from "lucide-react";

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
    ],
  }),
  component: Partners,
});

const benefits = [
  {
    icon: Rocket,
    title: "Accès rapide au marché",
    desc: "Plus besoin d'années pour bâtir un réseau : exploitez le nôtre dès le premier mois.",
  },
  {
    icon: DollarSign,
    title: "Réduction des coûts",
    desc: "Mutualisation logistique, force commerciale partagée : votre coût de distribution chute.",
  },
  {
    icon: Globe,
    title: "Accélération de croissance",
    desc: "Une présence retail élargie, des volumes en hausse, une marque qui s'installe durablement.",
  },
  {
    icon: Handshake,
    title: "Partenariat sur-mesure",
    desc: "Distribution exclusive, co-branding, importation… nous construisons le modèle qui vous va.",
  },
];

const targets = [
  {
    title: "Usines",
    desc: "Vous fabriquez ? Nous distribuons. Concentrez-vous sur votre production, nous occupons le terrain.",
  },
  {
    title: "Marques internationales",
    desc: "Vous voulez entrer en Côte d'Ivoire ? Nous sommes votre porte d'entrée structurée et fiable.",
  },
  {
    title: "Nouveaux entrants",
    desc: "Vous lancez une marque ? Nous accélérons votre déploiement avec notre expertise terrain.",
  },
];

function Partners() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={partnershipImg} alt="" width={1280} height={896} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />
        </div>
        <div className="container-pro relative py-24">
          <div className="max-w-3xl text-primary-foreground">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-glow">
              Espace partenaires
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-extrabold leading-tight text-balance">
              Faites d'AL FATEH votre tremplin vers le marché ivoirien.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
              Pour les usines, les marques internationales et les nouveaux entrants :
              un partenariat avec AL FATEH, c'est gagner du temps, économiser des coûts
              et accélérer durablement votre croissance.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-7 py-4 text-base font-semibold text-accent-foreground hover:bg-accent-glow transition-smooth shadow-glow"
            >
              Proposer un partenariat
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* À qui s'adresse */}
      <Section
        eyebrow="À qui s'adresse ce partenariat"
        title="Trois profils, une même promesse de croissance."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {targets.map((t, i) => (
            <div
              key={t.title}
              className="relative bg-card border border-border/60 rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth"
            >
              <div className="absolute -top-4 left-8 bg-gradient-accent text-accent-foreground font-display font-extrabold text-sm rounded-full h-10 w-10 flex items-center justify-center shadow-glow">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-primary">{t.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Bénéfices */}
      <Section
        className="bg-secondary/40"
        eyebrow="Pourquoi collaborer avec nous"
        title="Quatre bénéfices concrets dès le premier mois."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex gap-5 bg-card border border-border/60 rounded-2xl p-7 shadow-card"
            >
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

      {/* Process */}
      <Section eyebrow="Notre approche" title="Un partenariat structuré, en 4 étapes.">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { t: "Échange initial", d: "Nous comprenons votre marque, vos objectifs, vos contraintes." },
            { t: "Audit du marché", d: "Étude ciblée du potentiel et des canaux les plus pertinents." },
            { t: "Plan de déploiement", d: "Stratégie commerciale, logistique et calendrier détaillés." },
            { t: "Exécution & pilotage", d: "Mise en route, reporting régulier, ajustements continus." },
          ].map((s, i) => (
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

      {/* Final CTA */}
      <Section className="!pt-0">
        <div className="bg-primary rounded-3xl p-10 md:p-16 shadow-elegant relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-accent/40 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.5fr_1fr] items-center">
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-extrabold text-primary-foreground text-balance leading-tight">
                Prêt à transformer votre stratégie ivoirienne ?
              </h3>
              <ul className="mt-6 space-y-2 text-primary-foreground/85">
                {["Réponse sous 48h", "NDA possible", "Étude de cas dédiée"].map((b) => (
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
                className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-4 text-base font-semibold text-accent-foreground hover:bg-accent-glow transition-smooth shadow-glow"
              >
                Proposer un partenariat
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
