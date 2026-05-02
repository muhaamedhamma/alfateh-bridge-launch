import { Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { ArrowRight } from "lucide-react";

export function CtaBanner({
  title = "Prêt à conquérir le marché ivoirien ?",
  description = "Discutons de votre expansion en Côte d'Ivoire avec un partenaire de confiance.",
  button = "Devenir partenaire",
  to = "/contact" as const,
}) {
  return (
    <Section className="!pt-0">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-16 shadow-elegant">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-primary-glow/40 blur-3xl" />
        <div className="relative grid gap-8 md:grid-cols-[1.5fr_1fr] items-center">
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-extrabold text-primary-foreground text-balance leading-tight">
              {title}
            </h3>
            <p className="mt-4 text-primary-foreground/80 text-lg max-w-xl">
              {description}
            </p>
          </div>
          <div className="md:justify-self-end">
            <Link
              to={to}
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-7 py-4 text-base font-semibold text-accent-foreground hover:bg-accent-glow transition-smooth shadow-glow"
            >
              {button}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
