import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Truck,
  Factory,
  TrendingUp,
  ShieldCheck,
  Map,
  Award,
  Quote,
} from "lucide-react";
import heroImg from "@/assets/hero-warehouse.jpg";
import retailImg from "@/assets/retail-store.jpg";
import partnershipImg from "@/assets/partnership.jpg";
import { Section } from "@/components/site/Section";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AL FATEH — Distribution agroalimentaire en Côte d'Ivoire" },
      {
        name: "description",
        content:
          "Le partenaire stratégique des usines et marques agroalimentaires en Côte d'Ivoire. Réseau national, prix usine, +40 ans d'expertise.",
      },
      { property: "og:title", content: "AL FATEH — Distribution agroalimentaire en Côte d'Ivoire" },
      {
        property: "og:description",
        content: "Le pont stratégique entre les usines et le marché ivoirien.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "40+", label: "Années d'expérience cumulée" },
  { value: "100%", label: "Couverture nationale" },
  { value: "500+", label: "Points de vente desservis" },
  { value: "24/7", label: "Approvisionnement continu" },
];

const services = [
  {
    icon: Truck,
    title: "Distribution en gros",
    desc: "Un réseau logistique puissant pour livrer partout en Côte d'Ivoire.",
  },
  {
    icon: Factory,
    title: "Accès prix usine",
    desc: "Des partenariats industriels directs pour une compétitivité maximale.",
  },
  {
    icon: TrendingUp,
    title: "Développement de marques",
    desc: "Nous accélérons la pénétration de votre marque sur le marché ivoirien.",
  },
  {
    icon: ShieldCheck,
    title: "Approvisionnement fiable",
    desc: "Disponibilité constante, sans rupture, pour vos clients finaux.",
  },
];

const reasons = [
  { title: "Réseau national", desc: "Couverture intégrale du territoire ivoirien.", icon: Map },
  { title: "Fiabilité", desc: "Engagement contractuel et qualité d'exécution.", icon: ShieldCheck },
  { title: "Expertise marché", desc: "Connaissance fine du retail local.", icon: Award },
  { title: "Prix compétitifs", desc: "Accès direct aux tarifs usine.", icon: Factory },
];

const testimonials = [
  {
    quote:
      "AL FATEH a transformé notre déploiement en Côte d'Ivoire. Leur réseau et leur rigueur opérationnelle sont exceptionnels.",
    author: "Directeur Export",
    company: "Groupe agroalimentaire international",
  },
  {
    quote:
      "Un partenaire stratégique fiable, avec une vraie compréhension du marché ouest-africain.",
    author: "VP Commercial",
    company: "Marque de produits laitiers",
  },
  {
    quote:
      "Grâce à AL FATEH, nous avons doublé notre présence retail en moins de 18 mois.",
    author: "CEO",
    company: "Marque émergente",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Entrepôt de distribution AL FATEH"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/40" />
        </div>

        <div className="relative container-pro py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 mb-7 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent-glow animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-glow">
                Côte d'Ivoire · Distribution agroalimentaire
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold text-primary-foreground leading-[1.05] text-balance">
              Le partenaire stratégique de la distribution{" "}
              <span className="text-accent-glow">agroalimentaire</span> en Côte d'Ivoire.
            </h1>

            <p className="mt-7 text-lg md:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed">
              Un réseau national, des prix usine et plus de 40 ans d'expertise terrain
              au service des usines, marques internationales et investisseurs.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/partenaires"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-7 py-4 text-base font-semibold text-accent-foreground hover:bg-accent-glow transition-smooth shadow-glow"
              >
                Devenir partenaire
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/5 px-7 py-4 text-base font-semibold text-primary-foreground backdrop-blur hover:bg-primary-foreground/10 transition-smooth"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats overlay bar */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container-pro">
            <div className="grid grid-cols-2 md:grid-cols-4 bg-background/95 backdrop-blur-xl rounded-t-2xl border-t border-x border-border/60 shadow-elegant">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`p-6 md:p-8 ${i !== stats.length - 1 ? "md:border-r border-border/60" : ""} ${i % 2 === 0 ? "border-r md:border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""}`}
                >
                  <div className="font-display text-3xl md:text-4xl font-extrabold text-primary">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs md:text-sm text-muted-foreground font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <Section
        eyebrow="À propos d'AL FATEH"
        title="Le pont stratégique entre les usines et le marché ivoirien."
        description="Spécialisée dans la distribution en gros agroalimentaire, AL FATEH allie expertise terrain, réseau national et accès direct aux prix usine pour offrir aux marques une croissance structurée et durable."
      >
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-accent rounded-3xl opacity-20 blur-2xl" />
            <img
              src={partnershipImg}
              alt="L'équipe AL FATEH avec ses partenaires industriels"
              width={1280}
              height={896}
              loading="lazy"
              className="relative rounded-2xl shadow-elegant w-full"
            />
          </motion.div>
          <div className="space-y-6">
            {[
              {
                t: "40+ ans d'expérience cumulée",
                d: "Une équipe de vétérans de la distribution agroalimentaire ivoirienne.",
              },
              {
                t: "Réseau national structuré",
                d: "Une couverture intégrale, d'Abidjan aux régions les plus reculées.",
              },
              {
                t: "Expertise retail",
                d: "Supermarchés, supérettes, grossistes, détaillants — nous parlons leur langue.",
              },
            ].map((b) => (
              <div key={b.t} className="flex gap-4">
                <div className="shrink-0 mt-1 h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-primary">{b.t}</h3>
                  <p className="text-muted-foreground mt-1">{b.d}</p>
                </div>
              </div>
            ))}
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
            >
              Découvrir notre histoire <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section
        className="bg-secondary/40"
        eyebrow="Nos services"
        title="Une offre intégrée pour vos ambitions."
        description="De l'usine au point de vente final, nous orchestrons toute la chaîne de valeur."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-card rounded-2xl p-7 shadow-card border border-border/60 hover:-translate-y-1 hover:shadow-elegant transition-smooth"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-accent flex items-center justify-center mb-5 shadow-glow">
                <s.icon size={22} className="text-accent-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
          >
            Tous nos services <ArrowRight size={18} />
          </Link>
        </div>
      </Section>

      {/* WHY US */}
      <Section
        eyebrow="Pourquoi AL FATEH"
        title="Cinq raisons de nous confier votre marque."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-primary text-primary-foreground rounded-2xl p-7 hover:bg-primary-glow transition-smooth shadow-card"
            >
              <r.icon size={28} className="text-accent-glow mb-5" />
              <h3 className="font-display text-lg font-bold">{r.title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/70 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
          <div className="bg-gradient-accent text-accent-foreground rounded-2xl p-7 shadow-glow flex flex-col justify-between">
            <div>
              <h3 className="font-display text-lg font-bold">Disponibilité constante</h3>
              <p className="mt-2 text-sm text-accent-foreground/85 leading-relaxed">
                Stocks tampons et logistique réactive : zéro rupture pour vos clients.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-4 inline-flex items-center gap-2 font-semibold text-sm hover:gap-3 transition-all"
            >
              En savoir plus <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      {/* PARTNERS / RETAIL */}
      <Section className="bg-secondary/40">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Spécial partenaires
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary leading-tight text-balance">
              Usines, marques internationales, nouveaux entrants : votre raccourci vers le marché ivoirien.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Réduisez vos coûts de distribution, accélérez votre croissance et bénéficiez d'un accès
              immédiat à un réseau retail dense et qualifié.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Accès rapide au marché",
                "Réduction des coûts de distribution",
                "Accélération de croissance",
                "Présence retail démultipliée",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3 text-foreground">
                  <span className="h-6 w-6 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-xs font-bold">
                    ✓
                  </span>
                  <span className="font-medium">{b}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/partenaires"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 text-base font-semibold text-primary-foreground hover:bg-primary-glow transition-smooth shadow-card"
            >
              Proposer un partenariat
              <ArrowRight size={18} />
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={retailImg}
              alt="Rayon supermarché desservi par AL FATEH"
              width={1280}
              height={896}
              loading="lazy"
              className="rounded-2xl shadow-elegant w-full"
            />
          </motion.div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section eyebrow="Ils nous font confiance" title="La parole à nos partenaires.">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border/60 rounded-2xl p-7 shadow-card"
            >
              <Quote size={28} className="text-accent mb-4" />
              <blockquote className="text-foreground leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-5 pt-5 border-t border-border/60">
                <div className="font-display font-bold text-primary">{t.author}</div>
                <div className="text-sm text-muted-foreground">{t.company}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Section>

      {/* PARTNER LOGOS PLACEHOLDER */}
      <Section className="!py-16 bg-secondary/40">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Quelques-uns de nos partenaires
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-70">
          {["NESTLÉ", "UNILEVER", "DANONE", "BOLLORÉ", "CASTEL", "OLAM"].map((p) => (
            <div
              key={p}
              className="font-display text-center font-extrabold text-primary/60 tracking-tight text-lg"
            >
              {p}
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
