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
import { useT } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Distribution agroalimentaire en Côte d'Ivoire | AL FATEH" },
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
      { property: "og:url", content: "https://alfateh-bridge-launch.lovable.app/" },
      { name: "twitter:image", content: heroImg },
    ],
    links: [
      { rel: "canonical", href: "https://alfateh-bridge-launch.lovable.app/" },
      { rel: "preload", as: "image", href: heroImg, fetchPriority: "high" },
    ],
  }),
  component: Home,
});

const distributorIcons = [Package, Factory, ShoppingCart, Truck];
const brandIcons = [Zap, ShieldCheck, Network, TrendingUp];
const clientIcons = [Building2, Store, ShoppingBag, Users];

function Home() {
  const t = useT();
  const stats = t.home.stats;
  const distributorBenefits = t.home.distributorBenefits.map((b, i) => ({ ...b, icon: distributorIcons[i] }));
  const brandBenefits = t.home.brandBenefits.map((b, i) => ({ ...b, icon: brandIcons[i] }));
  const clientTypes = t.home.clientTypes.map((label, i) => ({ label, icon: clientIcons[i] }));

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="AL FATEH"
            width={1920}
            height={1080}
            fetchPriority="high"
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
                {t.home.badge}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold text-primary-foreground leading-[1.05] text-balance">
              {t.home.heroTitle1}
              <span className="text-accent-glow">{t.home.heroTitleAccent}</span>
              {t.home.heroTitle2}
            </h1>

            <p className="mt-7 text-lg md:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed">
              {t.home.heroSub}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-7 py-4 text-base font-semibold text-accent-foreground hover:bg-accent-glow transition-smooth shadow-glow"
              >
                {t.home.ctaWork}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/reseau"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/5 px-7 py-4 text-base font-semibold text-primary-foreground backdrop-blur hover:bg-primary-foreground/10 transition-smooth"
              >
                {t.home.ctaDiscover}
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <div className="container-pro">
            <div className="grid grid-cols-2 md:grid-cols-4 bg-background/95 backdrop-blur-xl rounded-t-2xl border-t border-x border-border/60 shadow-elegant">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`p-6 md:p-8 ${i !== stats.length - 1 ? "md:border-r border-border/60" : ""} ${i % 2 === 0 ? "border-r md:border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""}`}
                >
                  <div className="font-display text-3xl md:text-4xl font-extrabold text-primary">{s.value}</div>
                  <div className="mt-1 text-xs md:text-sm text-muted-foreground font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow={t.home.positioningEyebrow}
        title={t.home.positioningTitle}
        description={t.home.positioningDesc}
      >
        <div className="grid gap-6 lg:grid-cols-2">
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
                  {t.home.distributorsEyebrow}
                </div>
                <h3 className="font-display text-xl font-extrabold text-primary">
                  {t.home.distributorsTitle}
                </h3>
              </div>
            </div>
            <ul className="space-y-3">
              {t.home.distributorsList.map((b) => (
                <li key={b} className="flex items-start gap-3 text-foreground">
                  <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                  <span className="font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

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
                  {t.home.brandsEyebrow}
                </div>
                <h3 className="font-display text-xl font-extrabold">{t.home.brandsTitle}</h3>
              </div>
            </div>
            <ul className="space-y-3">
              {t.home.brandsList.map((b) => (
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
            {t.home.discoverOffer} <ArrowRight size={18} />
          </Link>
        </div>
      </Section>

      <Section
        className="bg-secondary/40"
        eyebrow={t.home.supplyEyebrow}
        title={t.home.supplyTitle}
        description={t.home.supplyDesc}
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
              alt=""
              width={1280}
              height={896}
              loading="lazy"
              className="rounded-2xl shadow-elegant w-full"
            />
          </motion.div>
        </div>
      </Section>

      <Section
        eyebrow={t.home.partnershipEyebrow}
        title={t.home.partnershipTitle}
        description={t.home.partnershipDesc}
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
              alt=""
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
            {t.home.explorePartners} <ArrowRight size={18} />
          </Link>
        </div>
      </Section>

      <Section
        className="bg-secondary/40"
        eyebrow={t.home.networkEyebrow}
        title={t.home.networkTitle}
        description={t.home.networkDesc}
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
            {t.home.seeCoverage} <ArrowRight size={18} />
          </Link>
        </div>
      </Section>

      <Section eyebrow={t.home.visionEyebrow} title={t.home.visionTitle}>
        <div className="bg-gradient-hero rounded-3xl p-10 md:p-16 text-primary-foreground shadow-elegant relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-primary-glow/40 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.5fr_1fr] items-center">
            <div>
              <p className="text-xl md:text-2xl leading-relaxed text-balance">{t.home.visionBody}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-5 border border-primary-foreground/15">
                <MapIcon size={22} className="text-accent-glow mb-2" />
                <div className="font-display font-bold">{t.home.visionToday}</div>
                <div className="text-xs text-primary-foreground/70 mt-1">{t.home.visionTodayLabel}</div>
              </div>
              <div className="bg-accent/20 backdrop-blur rounded-xl p-5 border border-accent/30">
                <Network size={22} className="text-accent-glow mb-2" />
                <div className="font-display font-bold">{t.home.visionTomorrow}</div>
                <div className="text-xs text-primary-foreground/70 mt-1">{t.home.visionTomorrowLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow={t.home.testimonialsEyebrow} title={t.home.testimonialsTitle}>
        <div className="grid gap-6 md:grid-cols-3">
          {t.home.testimonials.map((tm, i) => (
            <motion.figure
              key={tm.author + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border/60 rounded-2xl p-7 shadow-card flex flex-col"
            >
              <span className="self-start text-[10px] font-semibold uppercase tracking-[0.18em] text-accent bg-accent/10 px-2.5 py-1 rounded-full mb-4">
                {tm.tag}
              </span>
              <Quote size={24} className="text-accent mb-3" />
              <blockquote className="text-foreground leading-relaxed flex-1">"{tm.quote}"</blockquote>
              <figcaption className="mt-5 pt-5 border-t border-border/60">
                <div className="font-display font-bold text-primary">{tm.author}</div>
                <div className="text-sm text-muted-foreground">{tm.company}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Section>

      <Section className="!py-16 bg-secondary/40">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
          {t.home.partnersLabel}
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
