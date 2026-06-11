import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Package,
  Truck,
  ShieldCheck,
  TrendingDown,
  Warehouse,
  BadgeCheck,
  CalendarClock,
  MapPin,
  Phone,
} from "lucide-react";
import { useT } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/blog/destockage-alimentaire-cote-divoire")({
  head: () => ({
    meta: [
      { title: "Guide déstockage alimentaire en Côte d'Ivoire — AL FATEH" },
      {
        name: "description",
        content:
          "Guide complet sur le déstockage alimentaire en Côte d'Ivoire : réglementation, opportunités, réseaux de distribution et solutions pour écouler les fins de série. AL FATEH, votre partenaire stratégique.",
      },
      { property: "og:title", content: "Guide déstockage alimentaire en Côte d'Ivoire — AL FATEH" },
      {
        property: "og:description",
        content:
          "Comment gérer les stocks alimentaires en fin de série en Côte d'Ivoire ? Découvrez les solutions de distribution, la réglementation et les opportunités B2B.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DestockageGuidePage,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const reasonIcons = [CalendarClock, TrendingDown, Warehouse, Package];
const advantageIcons = [MapPin, Truck, BadgeCheck, Phone];

// minimal **bold** renderer
function renderMd(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? <strong key={i}>{p.slice(2, -2)}</strong> : <span key={i}>{p}</span>,
  );
}

function DestockageGuidePage() {
  const t = useT().blog;
  const reasons = t.reasons.map((r, i) => ({ ...r, icon: reasonIcons[i] }));
  const advantages = t.advantages.map((a, i) => ({ ...a, icon: advantageIcons[i] }));

  return (
    <div className="flex flex-col">
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container-pro max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-glow hover:text-accent transition-smooth mb-8"
          >
            <ArrowLeft size={16} /> {t.back}
          </Link>
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {t.eyebrow}
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-extrabold text-balance leading-[1.1] mb-6">
              {t.title}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed text-balance max-w-3xl">
              {t.sub}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-pro max-w-4xl py-16 md:py-24">
        <article className="prose prose-lg max-w-none">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-muted-foreground leading-relaxed text-lg">{renderMd(t.intro)}</p>
          </motion.div>

          <motion.div {...fadeUp} className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-6">{t.h1}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{t.p1}</p>
            <p className="text-muted-foreground leading-relaxed">{t.p2}</p>
          </motion.div>

          <motion.div {...fadeUp} className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-6">{t.h2}</h2>
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {reasons.map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-secondary/40 p-6">
                  <item.icon className="text-accent mb-4" size={28} />
                  <h3 className="font-display text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-6">{t.h3}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{renderMd(t.p3a)}</p>
            <ul className="space-y-3 text-muted-foreground mb-6 list-none">
              {t.rules.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ShieldCheck className="text-accent mt-0.5 shrink-0" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">{t.p3b}</p>
          </motion.div>

          <motion.div {...fadeUp} className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-6">{t.h4}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{t.p4}</p>
            <div className="space-y-8">
              {t.solutions.map((item) => (
                <div key={item.title}>
                  <h3 className="font-display text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-6">{t.h5}</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{renderMd(t.p5)}</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {advantages.map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-secondary/40 p-6">
                  <item.icon className="text-accent mb-4" size={28} />
                  <h3 className="font-display text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-6">{t.h6}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{renderMd(t.p6a)}</p>
            <p className="text-muted-foreground leading-relaxed">{t.p6b}</p>
          </motion.div>

          <motion.div {...fadeUp} className="rounded-2xl bg-primary text-primary-foreground p-8 md:p-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">{t.ctaTitle}</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-8 max-w-xl">{t.ctaDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                search={{ type: "marque" }}
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-card hover:bg-accent/90 transition-smooth"
              >
                <BadgeCheck size={18} className="mr-2" />
                {t.ctaAudit}
              </Link>
              <Link
                to="/contact"
                search={{ type: "acheteur" }}
                className="inline-flex items-center justify-center rounded-md border border-primary-foreground/20 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-smooth"
              >
                <Package size={18} className="mr-2" />
                {t.ctaLots}
              </Link>
            </div>
          </motion.div>
        </article>
      </div>
    </div>
  );
}
