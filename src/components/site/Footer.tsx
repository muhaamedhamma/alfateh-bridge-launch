import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ShoppingCart, Factory, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { useT } from "@/i18n/I18nProvider";
import { WHATSAPP_DISPLAY, CALL_DISPLAY, whatsappLink, telLink } from "@/lib/whatsapp";

export function Footer() {
  const t = useT();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-pro py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-background rounded-md p-1">
                <img src={logo} alt="AL FATEH" width={36} height={36} className="h-9 w-9" />
              </div>
              <span className="font-display text-xl font-extrabold">AL FATEH</span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-5 text-accent-glow">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">{t.nav.about}</Link></li>
              <li><Link to="/services" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">{t.nav.services}</Link></li>
              <li><Link to="/partenaires" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">{t.nav.partners}</Link></li>
              <li><Link to="/reseau" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">{t.nav.network}</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-5 text-accent-glow">
              {t.footer.distributorsTitle}
            </h4>
            <p className="text-sm text-primary-foreground/70 mb-4 leading-relaxed">
              {t.footer.distributorsDesc}
            </p>
            <Link
              to="/contact"
              search={{ type: "acheteur" }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-glow hover:text-accent transition-smooth"
            >
              <ShoppingCart size={16} /> {t.footer.becomeClient}
            </Link>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-5 text-accent-glow">
              {t.footer.brandsTitle}
            </h4>
            <p className="text-sm text-primary-foreground/70 mb-4 leading-relaxed">
              {t.footer.brandsDesc}
            </p>
            <Link
              to="/contact"
              search={{ type: "marque" }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-glow hover:text-accent transition-smooth"
            >
              <Factory size={16} /> {t.footer.becomePartner}
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-primary-foreground/10 grid gap-4 md:grid-cols-2 lg:grid-cols-4 text-xs text-primary-foreground/60">
          <p className="flex items-center gap-2"><MapPin size={14} className="text-accent-glow" /> {t.footer.location}</p>
          <p className="flex items-center gap-2"><Mail size={14} className="text-accent-glow" /> <a href="mailto:contact@alfateh.ci" className="hover:text-primary-foreground">contact@alfateh.ci</a></p>
          <p className="flex items-center gap-2"><Phone size={14} className="text-accent-glow" /> <a href={telLink()} className="hover:text-primary-foreground">{CALL_DISPLAY}</a></p>
          <p className="flex items-center gap-2"><MessageCircle size={14} className="text-accent-glow" /> <a href={whatsappLink("Bonjour AL FATEH")} target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground">{WHATSAPP_DISPLAY}</a></p>
        </div>
        <div className="mt-6 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} AL FATEH. {t.footer.rights}</p>
          <p>{t.footer.industry}</p>
        </div>
      </div>
    </footer>
  );
}
