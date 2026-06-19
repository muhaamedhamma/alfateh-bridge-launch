import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { CtaBanner } from "@/components/site/CtaBanner";
import partnershipImg from "@/assets/partnership.jpg";
import retailImg from "@/assets/retail-store.jpg";
import { Target, Eye, Heart } from "lucide-react";
import { useT } from "@/i18n/I18nProvider";

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
      { property: "og:url", content: "https://alfateh-bridge-launch.lovable.app/about" },
      { name: "twitter:image", content: partnershipImg },
    ],
    links: [{ rel: "canonical", href: "https://alfateh-bridge-launch.lovable.app/about" }],
  }),
  component: About,
});

const valueIcons = [Target, Eye, Heart];

// ────────────────────────────────────────────────────────────────
// ÉQUIPE — à éditer manuellement.
// Pour ajouter un membre : copiez un objet ci-dessous et remplacez
// `name`, `role`, et `photo` (URL ou import d'image dans src/assets).
// Laissez `photo: ""` pour afficher les initiales.
// ────────────────────────────────────────────────────────────────
type TeamMember = { name: string; role: string; photo: string };
const team: TeamMember[] = [
  { name: "Mohamed", role: "Directeur Général", photo: "" },
  { name: "Prénom Nom", role: "Directeur Commercial", photo: "" },
  { name: "Prénom Nom", role: "Responsable Logistique", photo: "" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function About() {
  const t = useT();
  const values = t.about.values.map((v, i) => ({ ...v, icon: valueIcons[i] }));
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={partnershipImg}
            alt=""
            width={1280}
            height={896}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/40" />
        </div>
        <div className="container-pro relative py-24 md:py-32 text-primary-foreground">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-glow">
              {t.about.eyebrow}
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-extrabold leading-tight text-balance">
              {t.about.title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 leading-relaxed max-w-2xl">
              {t.about.sub}
            </p>
          </div>
        </div>
      </section>

      <Section eyebrow={t.about.historyEyebrow} title={t.about.historyTitle}>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <img
            src={retailImg}
            alt=""
            width={1280}
            height={896}
            loading="lazy"
            className="rounded-2xl shadow-elegant"
          />
          <div className="space-y-5 text-lg leading-relaxed text-foreground/90">
            <p>
              {t.about.historyP1Pre}
              <strong className="text-primary">{t.about.historyP1Strong}</strong>
              {t.about.historyP1Post}
            </p>
            <p>{t.about.historyP2}</p>
            <p>{t.about.historyP3}</p>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/40" eyebrow={t.about.valuesEyebrow} title={t.about.valuesTitle}>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="bg-card border border-border/60 rounded-2xl p-8 shadow-card">
              <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-5">
                <v.icon size={22} />
              </div>
              <h3 className="font-display text-xl font-bold text-primary">{v.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow={t.about.teamEyebrow} title={t.about.teamTitle} description={t.about.teamDesc}>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div
              key={m.name + m.role}
              className="bg-card border border-border/60 rounded-2xl p-8 shadow-card text-center hover:-translate-y-1 transition-smooth"
            >
              <div className="mx-auto h-32 w-32 rounded-full overflow-hidden bg-gradient-hero text-primary-foreground flex items-center justify-center shadow-elegant">
                {m.photo ? (
                  <img src={m.photo} alt={m.name} className="h-full w-full object-cover" />
                ) : (
                  <span className="font-display text-3xl font-extrabold">{initials(m.name)}</span>
                )}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-primary">{m.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/40" eyebrow={t.about.visionEyebrow} title={t.about.visionTitle}>
        <div className="bg-gradient-hero rounded-3xl p-10 md:p-16 text-primary-foreground shadow-elegant relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative max-w-3xl">
            <p className="text-xl md:text-2xl leading-relaxed text-balance">{t.about.visionBody}</p>
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
