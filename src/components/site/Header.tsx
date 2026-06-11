import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/I18nProvider";

export function Header() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useI18n();

  const nav = [
    { to: "/", label: t.nav.home, exact: true },
    { to: "/about", label: t.nav.about },
    { to: "/services", label: t.nav.services },
    { to: "/partenaires", label: t.nav.partners },
    { to: "/reseau", label: t.nav.network },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  const toggle = () => setLang(lang === "fr" ? "en" : "fr");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-pro flex h-18 items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="AL FATEH" width={40} height={40} className="h-10 w-10" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-extrabold tracking-tight text-primary">
              AL FATEH
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
              Distribution
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-smooth rounded-md hover:bg-secondary"
              activeProps={{ className: "text-primary bg-secondary" }}
              activeOptions={{ exact: "exact" in item && item.exact === true }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label={t.nav.langSwitch}
            className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-background px-3 py-2 text-xs font-bold uppercase tracking-wider text-foreground/80 hover:text-primary hover:border-accent/60 transition-smooth"
          >
            <Globe size={14} />
            <span className={lang === "fr" ? "text-primary" : "text-muted-foreground"}>FR</span>
            <span className="text-muted-foreground">/</span>
            <span className={lang === "en" ? "text-primary" : "text-muted-foreground"}>EN</span>
          </button>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-card hover:bg-primary-glow transition-smooth"
          >
            {t.nav.ctaHeader}
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-border/60 bg-background transition-all duration-300",
          open ? "max-h-[560px]" : "max-h-0",
        )}
      >
        <nav className="container-pro flex flex-col py-4 gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="px-3 py-3 text-sm font-medium text-foreground/80 rounded-md hover:bg-secondary"
              activeProps={{ className: "text-primary bg-secondary" }}
              activeOptions={{ exact: "exact" in item && item.exact === true }}
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => {
              toggle();
              setOpen(false);
            }}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-border/60 bg-background px-5 py-3 text-sm font-semibold text-foreground"
          >
            <Globe size={16} />
            {lang === "fr" ? "Switch to English" : "Passer en français"}
          </button>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            {t.nav.ctaHeader}
          </Link>
        </nav>
      </div>
    </header>
  );
}
