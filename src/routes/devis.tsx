import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Send, CheckCircle2, MessageCircle, Loader2, FileText } from "lucide-react";
import { Section } from "@/components/site/Section";
import { useT } from "@/i18n/I18nProvider";
import { submitLead } from "@/lib/leads.functions";
import { whatsappLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/devis")({
  head: () => ({
    meta: [
      { title: "Demande de devis — AL FATEH" },
      {
        name: "description",
        content:
          "Recevez un devis personnalisé pour votre approvisionnement agroalimentaire en Côte d'Ivoire sous 48h.",
      },
      { property: "og:title", content: "Demande de devis — AL FATEH" },
      {
        property: "og:description",
        content: "Devis sur-mesure sous 48h pour vos besoins en distribution agroalimentaire.",
      },
      { property: "og:url", content: "https://alfateh-bridge-launch.lovable.app/devis" },
    ],
    links: [{ rel: "canonical", href: "https://alfateh-bridge-launch.lovable.app/devis" }],
  }),
  component: DevisPage,
});

function DevisPage() {
  const t = useT();
  const tq = t.quote;
  const [form, setForm] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [waLink, setWaLink] = useState("");

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const schema = z.object({
    name: z.string().trim().min(2, tq.errors.nameShort).max(120),
    email: z.string().trim().email(tq.errors.emailInvalid).max(200),
    phone: z.string().trim().max(40).optional(),
    company: z.string().trim().max(200).optional(),
    zone: z.string().trim().max(120).optional(),
    products: z.string().trim().min(5, tq.errors.productsShort).max(4000),
    message: z.string().trim().max(2000).optional(),
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitError(null);
    setSubmitting(true);
    try {
      await submitLead({
        data: {
          type: "quote",
          name: parsed.data.name,
          email: parsed.data.email,
          phone: parsed.data.phone || null,
          company: parsed.data.company || null,
          zone: parsed.data.zone || null,
          products: parsed.data.products,
          message: parsed.data.message?.trim() || parsed.data.products,
          source: "quote-page",
        },
      });
      const msg = `Bonjour AL FATEH, demande de devis de ${parsed.data.name}${parsed.data.company ? ` (${parsed.data.company})` : ""}. Produits : ${parsed.data.products}`;
      setWaLink(whatsappLink(msg));
      setSent(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Erreur d'envoi.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground py-20 md:py-24 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
        <div className="container-pro relative">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-glow inline-flex items-center gap-2">
            <FileText size={14} /> {tq.eyebrow}
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-extrabold leading-tight text-balance max-w-3xl">
            {tq.title}
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/85 max-w-2xl">{tq.sub}</p>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto bg-card border border-border/60 rounded-2xl p-8 md:p-10 shadow-card">
          {sent ? (
            <div className="text-center py-10">
              <CheckCircle2 size={56} className="mx-auto text-accent mb-5" />
              <h2 className="font-display text-2xl font-extrabold text-primary">{tq.sentTitle}</h2>
              <p className="mt-3 text-muted-foreground max-w-md mx-auto">{tq.sentDesc}</p>
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
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <FieldQ label={tq.nameLabel} name="name" value={form.name ?? ""} onChange={update} error={errors.name} required />
                <FieldQ label={tq.companyLabel} name="company" value={form.company ?? ""} onChange={update} error={errors.company} />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <FieldQ label={tq.emailLabel} name="email" type="email" value={form.email ?? ""} onChange={update} error={errors.email} required />
                <FieldQ label={tq.phoneLabel} name="phone" value={form.phone ?? ""} onChange={update} error={errors.phone} />
              </div>
              <FieldQ label={tq.zoneLabel} name="zone" value={form.zone ?? ""} onChange={update} error={errors.zone} />
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">{tq.productsLabel} *</label>
                <textarea
                  rows={6}
                  required
                  maxLength={4000}
                  value={form.products ?? ""}
                  onChange={(e) => update("products", e.target.value)}
                  placeholder={tq.productsPlaceholder}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
                {errors.products && <p className="mt-1.5 text-sm text-destructive">{errors.products}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">{tq.messageLabel}</label>
                <textarea
                  rows={3}
                  maxLength={2000}
                  value={form.message ?? ""}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder={tq.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              {submitError && <p className="text-sm text-destructive">{submitError}</p>}
              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary-glow transition-smooth shadow-card disabled:opacity-60"
              >
                {tq.submit}
                {submitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              </button>
            </form>
          )}
        </div>
      </Section>
    </>
  );
}

function FieldQ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (k: string, v: string) => void;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-foreground mb-2">
        {label} {required && "*"}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        value={value}
        maxLength={250}
        onChange={(e) => onChange(name, e.target.value)}
        className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
      {error && <p className="mt-1.5 text-sm text-destructive">{error}</p>}
    </div>
  );
}
