import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ShoppingCart,
  Factory,
} from "lucide-react";
import { Section } from "@/components/site/Section";
import { cn } from "@/lib/utils";

const searchSchema = z.object({
  type: z.enum(["acheteur", "marque"]).optional().catch(undefined),
});

export const Route = createFileRoute("/contact")({
  validateSearch: (search) => searchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Contact — AL FATEH" },
      {
        name: "description",
        content:
          "Acheteurs ou marques industrielles : contactez AL FATEH pour rejoindre le hub de distribution agroalimentaire ivoirien.",
      },
      { property: "og:title", content: "Contactez AL FATEH" },
      {
        property: "og:description",
        content: "Connectons votre activité au moteur de la distribution en Côte d'Ivoire.",
      },
    ],
  }),
  component: Contact,
});

type Audience = "acheteur" | "marque";

const baseSchema = {
  name: z.string().trim().min(2, "Nom trop court").max(100),
  email: z.string().trim().email("Email invalide").max(200),
  message: z.string().trim().min(10, "Message trop court").max(2000),
};

const buyerSchema = z.object({
  ...baseSchema,
  company: z.string().trim().min(2, "Nom du commerce requis").max(150),
  commerceType: z.string().min(1, "Type de commerce requis"),
  zone: z.string().trim().min(2, "Zone requise").max(100),
});

const brandSchema = z.object({
  ...baseSchema,
  company: z.string().trim().min(2, "Entreprise requise").max(150),
  country: z.string().trim().min(2, "Pays requis").max(100),
  brandType: z.string().min(1, "Type requis"),
});

function Contact() {
  const { type } = Route.useSearch();
  const [audience, setAudience] = useState<Audience>(type ?? "acheteur");
  const [form, setForm] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const switchAudience = (a: Audience) => {
    setAudience(a);
    setErrors({});
    setSent(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const schema = audience === "acheteur" ? buyerSchema : brandSchema;
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground py-20 md:py-24 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
        <div className="container-pro relative">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-glow">
            Contact
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-extrabold leading-tight text-balance max-w-3xl">
            Connectons votre activité au hub AL FATEH.
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/85 max-w-2xl">
            Que vous soyez commerçant ou marque industrielle, notre équipe vous répond
            sous 48h ouvrées.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl font-bold text-primary mb-4">
                Nos coordonnées
              </h3>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center text-primary shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Siège</div>
                    <div className="text-muted-foreground text-sm">Abidjan, Côte d'Ivoire</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center text-primary shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground text-sm">contact@alfateh.ci</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center text-primary shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Téléphone</div>
                    <div className="text-muted-foreground text-sm">+225 27 00 00 00 00</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-7 shadow-card">
              <h4 className="font-display font-bold text-lg">Réponse rapide</h4>
              <p className="mt-2 text-sm text-primary-foreground/80 leading-relaxed">
                Nous étudions chaque demande avec attention et revenons vers vous sous
                48h ouvrées. NDA possible sur demande pour les marques.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-border/60 rounded-2xl p-8 md:p-10 shadow-card">
            {sent ? (
              <div className="text-center py-12">
                <CheckCircle2 size={56} className="mx-auto text-accent mb-5" />
                <h3 className="font-display text-2xl font-extrabold text-primary">
                  Message envoyé.
                </h3>
                <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                  {audience === "acheteur"
                    ? "Merci pour votre intérêt. Notre équipe commerciale vous recontactera sous 48h pour structurer votre approvisionnement."
                    : "Merci pour votre proposition. Notre équipe partenariats étudie votre dossier et reviendra vers vous sous 48h ouvrées."}
                </p>
              </div>
            ) : (
              <>
                {/* Audience switcher */}
                <div className="grid gap-3 sm:grid-cols-2 mb-8">
                  <AudienceCard
                    active={audience === "acheteur"}
                    onClick={() => switchAudience("acheteur")}
                    icon={<ShoppingCart size={22} />}
                    title="Je suis acheteur"
                    desc="Supermarché, supérette, grossiste, détaillant"
                  />
                  <AudienceCard
                    active={audience === "marque"}
                    onClick={() => switchAudience("marque")}
                    icon={<Factory size={22} />}
                    title="Je suis une marque"
                    desc="Usine, marque internationale, nouvel entrant"
                  />
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Nom complet"
                      name="name"
                      value={form.name ?? ""}
                      onChange={update}
                      error={errors.name}
                    />
                    <Field
                      label={audience === "acheteur" ? "Nom du commerce" : "Entreprise"}
                      name="company"
                      value={form.company ?? ""}
                      onChange={update}
                      error={errors.company}
                    />
                  </div>
                  <Field
                    label="Email professionnel"
                    type="email"
                    name="email"
                    value={form.email ?? ""}
                    onChange={update}
                    error={errors.email}
                  />

                  {audience === "acheteur" ? (
                    <div className="grid gap-5 sm:grid-cols-2">
                      <SelectField
                        label="Type de commerce"
                        name="commerceType"
                        value={form.commerceType ?? ""}
                        onChange={update}
                        error={errors.commerceType}
                        options={[
                          { v: "supermarche", l: "Supermarché" },
                          { v: "superette", l: "Supérette" },
                          { v: "grossiste", l: "Grossiste" },
                          { v: "detaillant", l: "Détaillant" },
                        ]}
                      />
                      <Field
                        label="Zone / Ville"
                        name="zone"
                        value={form.zone ?? ""}
                        onChange={update}
                        error={errors.zone}
                      />
                    </div>
                  ) : (
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Pays"
                        name="country"
                        value={form.country ?? ""}
                        onChange={update}
                        error={errors.country}
                      />
                      <SelectField
                        label="Profil"
                        name="brandType"
                        value={form.brandType ?? ""}
                        onChange={update}
                        error={errors.brandType}
                        options={[
                          { v: "usine-locale", l: "Usine locale" },
                          { v: "marque-internationale", l: "Marque internationale" },
                          { v: "nouvel-entrant", l: "Nouvel entrant" },
                        ]}
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      {audience === "acheteur"
                        ? "Vos besoins (catégories, volumes…)"
                        : "Présentez votre marque (produits, volumes, objectifs…)"}
                    </label>
                    <textarea
                      rows={5}
                      value={form.message ?? ""}
                      maxLength={2000}
                      onChange={(e) => update("message", e.target.value)}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth resize-none"
                      placeholder={
                        audience === "acheteur"
                          ? "Ex: Approvisionnement régulier en produits secs, 2 livraisons / semaine sur Abidjan…"
                          : "Ex: Marque de boissons, présence souhaitée sur l'ensemble du territoire…"
                      }
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary-glow transition-smooth shadow-card"
                  >
                    {audience === "acheteur"
                      ? "Devenir client AL FATEH"
                      : "Proposer un partenariat"}
                    <Send size={18} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}

function AudienceCard({
  active,
  onClick,
  icon,
  title,
  desc,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "text-left rounded-xl border-2 p-5 transition-smooth",
        active
          ? "border-accent bg-accent/5 shadow-card"
          : "border-border/60 bg-background hover:border-accent/50",
      )}
    >
      <div
        className={cn(
          "h-11 w-11 rounded-lg flex items-center justify-center mb-3 transition-smooth",
          active ? "bg-accent text-accent-foreground" : "bg-secondary text-primary",
        )}
      >
        {icon}
      </div>
      <div className="font-display font-bold text-primary">{title}</div>
      <div className="text-xs text-muted-foreground mt-1">{desc}</div>
    </button>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (k: string, v: string) => void;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-foreground mb-2">{label}</label>
      <input
        type={type}
        value={value}
        maxLength={250}
        onChange={(e) => onChange(name, e.target.value)}
        className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
      />
      {error && <p className="mt-1.5 text-sm text-destructive">{error}</p>}
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  error,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (k: string, v: string) => void;
  error?: string;
  options: { v: string; l: string }[];
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-foreground mb-2">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
      >
        <option value="">Sélectionner…</option>
        {options.map((o) => (
          <option key={o.v} value={o.v}>
            {o.l}
          </option>
        ))}
      </select>
      {error && <p className="mt-1.5 text-sm text-destructive">{error}</p>}
    </div>
  );
}
