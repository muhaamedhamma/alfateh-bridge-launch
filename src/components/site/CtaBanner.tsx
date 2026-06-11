import { Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { ArrowRight } from "lucide-react";
import { useT } from "@/i18n/I18nProvider";

export function CtaBanner({
  title,
  description,
  button,
  to = "/contact" as const,
}: {
  title?: string;
  description?: string;
  button?: string;
  to?: "/contact";
} = {}) {
  const t = useT();
  return (
    <Section className="!pt-0">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-16 shadow-elegant">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-primary-glow/40 blur-3xl" />
        <div className="relative grid gap-8 md:grid-cols-[1.5fr_1fr] items-center">
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-extrabold text-primary-foreground text-balance leading-tight">
              {title ?? t.cta.title}
            </h3>
            <p className="mt-4 text-primary-foreground/80 text-lg max-w-xl">
              {description ?? t.cta.desc}
            </p>
          </div>
          <div className="md:justify-self-end">
            <Link
              to={to}
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-7 py-4 text-base font-semibold text-accent-foreground hover:bg-accent-glow transition-smooth shadow-glow"
            >
              {button ?? t.cta.button}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
