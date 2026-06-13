import { createFileRoute } from "@tanstack/react-router";
import { useId, useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle2, ShoppingCart, Factory, MessageCircle, Loader2 } from "lucide-react";
import { Section } from "@/components/site/Section";
import { cn } from "@/lib/utils";
import { useT } from "@/i18n/I18nProvider";
import type { Dict } from "@/i18n/dictionary";
import { submitLead } from "@/lib/leads.functions";
import { whatsappLink } from "@/lib/whatsapp";

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
      { property: "og:url", content: "https://alfateh-bridge-launch.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://alfateh-bridge-launch.lovable.app/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "AL FATEH",
          url: "https://alfateh-bridge-launch.lovable.app/contact",
          email: "contact@alfateh.ci",
          telephone: "+2252700000000",
          address: { "@type": "PostalAddress", addressLocality: "Abidjan", addressCountry: "CI" },
        }),
      },
    ],
  }),
  component: Contact,
});

type Audience = "acheteur" | "marque";

function makeSchemas(t: Dict) {
  const e = t.contact.errors;
  const base = {
    name: z.string().trim().min(2, e.nameShort).max(100),
    email: z.string().trim().email(e.emailInvalid).max(200),
    message: z.string().trim().min(10, e.messageShort).max(2000),
  };
  const buyerSchema = z.object({
    ...base,
    company: z.string().trim().min(2, e.shopRequired).max(150),
    commerceType: z.string().min(1, e.commerceRequired),
    zone: z.string().trim().min(2, e.zoneRequired).max(100),
  });
  const brandSchema = z.object({
    ...base,
    company: z.string().trim().min(2, e.companyRequired).max(150),
    country: z.string().trim().min(2, e.countryRequired).max(100),
    brandType: z.string().min(1, e.typeRequired),
  });
  return { buyerSchema, brandSchema };
}

function Contact() {
  const { type } = Route.useSearch();
  const t = useT();
  const [audience, setAudience] = useState<Audience>(type ?? "acheteur");
  const [form, setForm] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [waLink, setWaLink] = useState<string>("");

  const switchAudience = (a: Audience) => {
    setAudience(a);
    setErrors({});
    setSent(false);
    setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { buyerSchema, brandSchema } = makeSchemas(t);
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
    setSubmitError(null);
    setSubmitting(true);
    try {
      const payload =
        audience === "acheteur"
          ? {
              type: "buyer" as const,
              name: result.data.name,
              email: result.data.email,
              message: result.data.message,
              company: (result.data as { company: string }).company,
              commerceType: (result.data as { commerceType: string }).commerceType,
              zone: (result.data as { zone: string }).zone,
              source: "contact-page",
            }
          : {
              type: "brand" as const,
              name: result.data.name,
              email: result.data.email,
              message: result.data.message,
              company: (result.data as { company: string }).company,
              country: (result.data as { country: string }).country,
              brandType: (result.data as { brandType: string }).brandType,
              source: "contact-page",
            };
      await submitLead({ data: payload });
      const waMsg =
        audience === "acheteur"
          ? `Bonjour AL FATEH, je suis ${payload.name} (${payload.company}) et je souhaite devenir client. ${payload.message}`
          : `Bonjour AL FATEH, je représente ${payload.name} (${payload.company}) et je souhaite proposer un partenariat. ${payload.message}`;
      setWaLink(whatsappLink(waMsg));
      setSent(true);
    } catch (err) {
      console.error(err);
      setSubmitError(
        err instanceof Error ? err.message : "Erreur d'envoi. Réessayez.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const tc = t.contact;

  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground py-20 md:py-24 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
        <div className="container-pro relative">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-glow">
            {tc.eyebrow}
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-extrabold leading-tight text-balance max-w-3xl">
            {tc.title}
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/85 max-w-2xl">{tc.sub}</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-4">{tc.coordinates}</h2>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center text-primary shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{tc.head}</div>
                    <div className="text-muted-foreground text-sm">Abidjan, Côte d'Ivoire</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center text-primary shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{tc.email}</div>
                    <div className="text-muted-foreground text-sm">contact@alfateh.ci</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center text-primary shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{tc.phone}</div>
                    <div className="text-muted-foreground text-sm">+225 27 00 00 00 00</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-7 shadow-card">
              <h4 className="font-display font-bold text-lg">{tc.quickTitle}</h4>
              <p className="mt-2 text-sm text-primary-foreground/80 leading-relaxed">{tc.quickDesc}</p>
            </div>
          </div>

          <div className="bg-card border border-border/60 rounded-2xl p-8 md:p-10 shadow-card">
            {sent ? (
              <div className="text-center py-12">
                <CheckCircle2 size={56} className="mx-auto text-accent mb-5" />
                <h3 className="font-display text-2xl font-extrabold text-primary">{tc.sentTitle}</h3>
                <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                  {audience === "acheteur" ? tc.sentBuyer : tc.sentBrand}
                </p>
                <div className="mt-8 mx-auto max-w-md rounded-xl border border-border/60 bg-secondary/40 p-5">
                  <p className="font-display font-bold text-primary">{t.whatsapp.afterFormTitle}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t.whatsapp.afterFormDesc}</p>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1DA851] transition-smooth"
                  >
                    <MessageCircle size={18} /> {t.whatsapp.afterFormCta}
                  </a>
                </div>
              </div>
            ) : (
              <>
                <div className="grid gap-3 sm:grid-cols-2 mb-8">
                  <AudienceCard
                    active={audience === "acheteur"}
                    onClick={() => switchAudience("acheteur")}
                    icon={<ShoppingCart size={22} />}
                    title={tc.buyerCard.title}
                    desc={tc.buyerCard.desc}
                  />
                  <AudienceCard
                    active={audience === "marque"}
                    onClick={() => switchAudience("marque")}
                    icon={<Factory size={22} />}
                    title={tc.brandCard.title}
                    desc={tc.brandCard.desc}
                  />
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label={tc.fields.name} name="name" value={form.name ?? ""} onChange={update} error={errors.name} />
                    <Field
                      label={audience === "acheteur" ? tc.fields.shopName : tc.fields.company}
                      name="company"
                      value={form.company ?? ""}
                      onChange={update}
                      error={errors.company}
                    />
                  </div>
                  <Field
                    label={tc.fields.emailPro}
                    type="email"
                    name="email"
                    value={form.email ?? ""}
                    onChange={update}
                    error={errors.email}
                  />

                  {audience === "acheteur" ? (
                    <div className="grid gap-5 sm:grid-cols-2">
                      <SelectField
                        label={tc.fields.commerceType}
                        name="commerceType"
                        value={form.commerceType ?? ""}
                        onChange={update}
                        error={errors.commerceType}
                        options={tc.commerceOptions}
                        selectLabel={tc.fields.select}
                      />
                      <Field label={tc.fields.zone} name="zone" value={form.zone ?? ""} onChange={update} error={errors.zone} />
                    </div>
                  ) : (
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label={tc.fields.country}
                        name="country"
                        value={form.country ?? ""}
                        onChange={update}
                        error={errors.country}
                      />
                      <SelectField
                        label={tc.fields.profile}
                        name="brandType"
                        value={form.brandType ?? ""}
                        onChange={update}
                        error={errors.brandType}
                        options={tc.brandOptions}
                        selectLabel={tc.fields.select}
                      />
                    </div>
                  )}

                  <MessageField
                    label={audience === "acheteur" ? tc.fields.messageBuyer : tc.fields.messageBrand}
                    placeholder={audience === "acheteur" ? tc.fields.placeholderBuyer : tc.fields.placeholderBrand}
                    value={form.message ?? ""}
                    onChange={(v) => update("message", v)}
                    error={errors.message}
                  />

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary-glow transition-smooth shadow-card"
                  >
                    {audience === "acheteur" ? tc.submitBuyer : tc.submitBrand}
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
        active ? "border-accent bg-accent/5 shadow-card" : "border-border/60 bg-background hover:border-accent/50",
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
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-foreground mb-2">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        maxLength={250}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        onChange={(e) => onChange(name, e.target.value)}
        className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
      />
      {error && <p id={errorId} className="mt-1.5 text-sm text-destructive">{error}</p>}
    </div>
  );
}

function MessageField({
  label,
  placeholder,
  value,
  onChange,
  error,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-foreground mb-2">
        {label}
      </label>
      <textarea
        id={id}
        name="message"
        rows={5}
        value={value}
        maxLength={2000}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth resize-none"
        placeholder={placeholder}
      />
      {error && <p id={errorId} className="mt-1.5 text-sm text-destructive">{error}</p>}
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
  selectLabel,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (k: string, v: string) => void;
  error?: string;
  options: ReadonlyArray<{ v: string; l: string }>;
  selectLabel: string;
}) {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-foreground mb-2">
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        onChange={(e) => onChange(name, e.target.value)}
        className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
      >
        <option value="">{selectLabel}</option>
        {options.map((o) => (
          <option key={o.v} value={o.v}>
            {o.l}
          </option>
        ))}
      </select>
      {error && <p id={errorId} className="mt-1.5 text-sm text-destructive">{error}</p>}
    </div>
  );
}
