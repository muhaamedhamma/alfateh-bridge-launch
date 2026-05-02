import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AL FATEH" },
      {
        name: "description",
        content:
          "Discutons de votre expansion en Côte d'Ivoire. Contactez l'équipe AL FATEH pour un partenariat de distribution.",
      },
      { property: "og:title", content: "Contactez AL FATEH" },
      {
        property: "og:description",
        content: "Discutons de votre expansion en Côte d'Ivoire.",
      },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Nom trop court").max(100),
  company: z.string().trim().min(2, "Entreprise requise").max(150),
  email: z.string().trim().email("Email invalide").max(200),
  partnership: z.string().min(1, "Veuillez sélectionner un type"),
  message: z.string().trim().min(10, "Message trop court").max(2000),
});

function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    partnership: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    // Form data validated — would be sent to backend in production
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
            Discutons de votre expansion en Côte d'Ivoire.
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/85 max-w-2xl">
            Notre équipe vous répond sous 48h ouvrées.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
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
              <h4 className="font-display font-bold text-lg">Vous êtes une usine ?</h4>
              <p className="mt-2 text-sm text-primary-foreground/80 leading-relaxed">
                Nous étudions chaque proposition avec attention. NDA possible sur demande.
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
                  Merci de votre intérêt. L'équipe AL FATEH vous recontactera sous 48h ouvrées.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Nom"
                    name="name"
                    value={form.name}
                    onChange={update}
                    error={errors.name}
                  />
                  <Field
                    label="Entreprise"
                    name="company"
                    value={form.company}
                    onChange={update}
                    error={errors.company}
                  />
                </div>
                <Field
                  label="Email professionnel"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={update}
                  error={errors.email}
                />
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Type de partenariat
                  </label>
                  <select
                    value={form.partnership}
                    onChange={(e) => update("partnership", e.target.value)}
                    className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                  >
                    <option value="">Sélectionner…</option>
                    <option value="usine">Usine / Industriel</option>
                    <option value="marque-internationale">Marque internationale</option>
                    <option value="nouveau-entrant">Nouveau entrant marché ivoirien</option>
                    <option value="distribution-exclusive">Distribution exclusive</option>
                    <option value="autre">Autre</option>
                  </select>
                  {errors.partnership && (
                    <p className="mt-1.5 text-sm text-destructive">{errors.partnership}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    maxLength={2000}
                    onChange={(e) => update("message", e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth resize-none"
                    placeholder="Présentez-nous votre projet, vos produits, vos volumes…"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-sm text-destructive">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary-glow transition-smooth shadow-card"
                >
                  Envoyer ma demande
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
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
