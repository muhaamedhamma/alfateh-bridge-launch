import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Truck,
  Factory,
  TrendingUp,
  ShieldCheck,
  Map as MapIcon,
  Package,
  Zap,
  Network,
  ShoppingCart,
  Quote,
  CheckCircle2,
  Building2,
  Store,
  ShoppingBag,
  Users,
} from "lucide-react";
import heroImg from "@/assets/hero-warehouse.jpg";
import retailImg from "@/assets/retail-store.jpg";
import partnershipImg from "@/assets/partnership.jpg";
import { Section } from "@/components/site/Section";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AL FATEH — Le moteur de la distribution agroalimentaire en Côte d'Ivoire" },
      {
        name: "description",
        content:
          "AL FATEH connecte marques, usines et distributeurs à travers un réseau performant, fiable et structuré, partout en Côte d'Ivoire.",
      },
      { property: "og:title", content: "AL FATEH — Hub de distribution agroalimentaire" },
      {
        property: "og:description",
        content: "Pont stratégique entre les usines et le marché ivoirien.",
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

const distributorBenefits = [
  { icon: Package, title: "Disponibilité continue", desc: "Stocks tampons et réassort permanent : zéro rupture sur vos références." },
  { icon: Factory, title: "Prix compétitifs", desc: "Accès direct aux tarifs usine grâce à nos partenariats industriels." },
  { icon: ShoppingCart, title: "Large gamme", desc: "Un catalogue agroalimentaire complet pour servir tous vos rayons." },
  { icon: Truck, title: "Logistique efficace", desc: "Livraisons régulières, fiables et adaptées au rythme de votre commerce." },
];

const brandBenefits = [
  { icon: Zap, title: "Déploiement rapide", desc: "Activez votre marque sur le marché ivoirien dès le premier mois." },
  { icon: ShieldCheck, title: "Expertise locale 40+ ans", desc: "Une équipe qui maîtrise les codes du retail ouest-africain." },
  { icon: Network, title: "Réseau actif", desc: "Une présence terrain dense, du grand supermarché au détaillant de quartier." },
  { icon: TrendingUp, title: "Accélération des ventes", desc: "Une force commerciale dédiée à la croissance de vos volumes." },
];

const clientTypes = [
  { icon: Building2, label: "Supermarchés" },
  { icon: Store, label: "Supérettes" },
  { icon: ShoppingBag, label: "Grossistes" },
  { icon: Users, label: "Détaillants" },
];

const testimonials = [
  {
    tag: "Marque distribuée",
    quote:
      "AL FATEH a transformé notre déploiement en Côte d'Ivoire. Leur réseau et leur rigueur opérationnelle sont exceptionnels.",
    author: "Directeur Export",
    company: "Groupe agroalimentaire international",
  },
  {
    tag: "Commerçant partenaire",
    quote:
      "Approvisionnement régulier, prix justes, disponibilité constante : un vrai partenaire de confiance pour notre supérette.",
    author: "Gérant",
    company: "Réseau de supérettes — Abidjan",
  },
  {
    tag: "Marque émergente",
    quote:
      "Grâce à AL FATEH, nous avons doublé notre présence retail en moins de 18 mois.",
    author: "CEO",
    company: "Marque agroalimentaire émergente",
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
                Côte d'Ivoire · Hub agroalimentaire
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold text-primary-foreground leading-[1.05] text-balance">
              Le moteur de la{" "}
              <span className="text-accent-glow">distribution agroalimentaire</span>{" "}
              en Côte d'Ivoire.
            </h1>

            <p className="mt-7 text-lg md:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed">
              AL FATEH connecte marques, usines et distributeurs à travers un réseau
              performant, fiable et structuré.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-7 py-4 text-base font-semibold text-accent-foreground hover:bg-accent-glow transition-smooth shadow-glow"
              >
                Travailler avec nous
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/reseau"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/5 px-7 py-4 text-base font-semibold text-primary-foreground backdrop-blur hover:bg-primary-foreground/10 transition-smooth"
              >
                Découvrir notre réseau
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

      {/* POSITIONNEMENT HYBRIDE */}
      <Section
        eyebrow="Notre positionnement"
        title="Le pont entre les marques industrielles et le marché ivoirien."
        description="AL FATEH accompagne à la fois les acteurs de la distribution, en leur garantissant un approvisionnement constant et compétitif, et les marques industrielles, en accélérant leur développement sur le marché ivoirien."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Bloc Distributeurs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-card border-2 border-accent/30 rounded-2xl p-8 md:p-10 shadow-card hover:shadow-elegant transition-smooth"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center">
                <ShoppingCart size={22} />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Pour les distributeurs
                </div>
                <h3 className="font-display text-xl font-extrabold text-primary">
                  Approvisionnement performant
                </h3>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                "Disponibilité continue des produits",
                "Prix compétitifs (prix usine)",
                "Large gamme agroalimentaire",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-foreground">
                  <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                  <span className="font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Bloc Marques */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-primary text-primary-foreground border-2 border-primary rounded-2xl p-8 md:p-10 shadow-card hover:shadow-elegant transition-smooth"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-primary-foreground/10 text-accent-glow flex items-center justify-center">
                <Factory size={22} />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-glow">
                  Pour les marques & usines
                </div>
                <h3 className="font-display text-xl font-extrabold">
                  Croissance accélérée
                </h3>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                "Accès immédiat au marché ivoirien",
                "Réseau national structuré",
                "Développement commercial dédié",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent-glow mt-0.5 shrink-0" />
                  <span className="font-medium text-primary-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
          >
            Découvrir notre offre intégrée <ArrowRight size={18} />
          </Link>
        </div>
      </Section>

      {/* VALEUR — APPROVISIONNEMENT (axée acheteurs) */}
      <Section
        className="bg-secondary/40"
        eyebrow="Approvisionnement"
        title="Un approvisionnement fiable, pensé pour la performance."
        description="Pour les supermarchés, supérettes, grossistes et détaillants : un partenaire qui sécurise vos rayons et fait tourner votre commerce."
      >
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
          <div className="grid gap-5 sm:grid-cols-2">
            {distributorBenefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-card border border-border/60 rounded-2xl p-6 shadow-card hover:-translate-y-1 transition-smooth"
              >
                <div className="h-11 w-11 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-4">
                  <b.icon size={20} />
                </div>
                <h3 className="font-display text-base font-bold text-primary">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
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

      {/* PARTENARIAT — CROISSANCE (axée marques) */}
      <Section
        eyebrow="Partenariat"
        title="Un partenaire stratégique pour votre croissance."
        description="Pour les usines, marques internationales et nouveaux entrants : un raccourci vers le marché ivoirien, sans compromis sur l'exécution."
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
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
          <div className="grid gap-5 sm:grid-cols-2 order-1 lg:order-2">
            {brandBenefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-primary text-primary-foreground rounded-2xl p-6 shadow-card hover:bg-primary-glow transition-smooth"
              >
                <div className="h-11 w-11 rounded-xl bg-primary-foreground/10 text-accent-glow flex items-center justify-center mb-4">
                  <b.icon size={20} />
                </div>
                <h3 className="font-display text-base font-bold">{b.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/75 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/partenaires"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
          >
            Explorer l'espace partenaires <ArrowRight size={18} />
          </Link>
        </div>
      </Section>

      {/* RÉSEAU TEASER */}
      <Section
        className="bg-secondary/40"
        eyebrow="Notre réseau"
        title="Une couverture nationale, tous segments retail."
        description="D'Abidjan aux régions, nous servons chaque jour tous les formats de commerce qui font vivre la consommation ivoirienne."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {clientTypes.map((c) => (
            <div
              key={c.label}
              className="bg-card border border-border/60 rounded-2xl p-6 text-center shadow-card hover:-translate-y-1 transition-smooth"
            >
              <div className="mx-auto h-12 w-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-4">
                <c.icon size={22} />
              </div>
              <div className="font-display font-bold text-primary">{c.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/reseau"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
          >
            Voir la couverture territoriale <ArrowRight size={18} />
          </Link>
        </div>
      </Section>

      {/* VISION */}
      <Section eyebrow="Vision" title="Devenir la référence en Afrique de l'Ouest.">
        <div className="bg-gradient-hero rounded-3xl p-10 md:p-16 text-primary-foreground shadow-elegant relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-primary-glow/40 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.5fr_1fr] items-center">
            <div>
              <p className="text-xl md:text-2xl leading-relaxed text-balance">
                Faire d'AL FATEH le distributeur agroalimentaire de référence en Côte
                d'Ivoire et, demain, un acteur clé dans toute l'Afrique de l'Ouest.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-5 border border-primary-foreground/15">
                <MapIcon size={22} className="text-accent-glow mb-2" />
                <div className="font-display font-bold">Référence CI</div>
                <div className="text-xs text-primary-foreground/70 mt-1">Aujourd'hui</div>
              </div>
              <div className="bg-accent/20 backdrop-blur rounded-xl p-5 border border-accent/30">
                <Network size={22} className="text-accent-glow mb-2" />
                <div className="font-display font-bold">Leader régional</div>
                <div className="text-xs text-primary-foreground/70 mt-1">Demain</div>
              </div>
            </div>
          </div>
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
              className="bg-card border border-border/60 rounded-2xl p-7 shadow-card flex flex-col"
            >
              <span className="self-start text-[10px] font-semibold uppercase tracking-[0.18em] text-accent bg-accent/10 px-2.5 py-1 rounded-full mb-4">
                {t.tag}
              </span>
              <Quote size={24} className="text-accent mb-3" />
              <blockquote className="text-foreground leading-relaxed flex-1">"{t.quote}"</blockquote>
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
