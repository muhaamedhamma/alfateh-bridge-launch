import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-pro py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-background rounded-md p-1">
                <img src={logo} alt="AL FATEH" width={36} height={36} className="h-9 w-9" />
              </div>
              <span className="font-display text-xl font-extrabold">AL FATEH</span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Le partenaire stratégique de la distribution agroalimentaire en Côte d'Ivoire.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-5 text-accent-glow">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">À propos</Link></li>
              <li><Link to="/services" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">Services</Link></li>
              <li><Link to="/partenaires" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">Partenaires</Link></li>
              <li><Link to="/reseau" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">Notre réseau</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-5 text-accent-glow">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-accent-glow shrink-0" />
                <span>Abidjan, Côte d'Ivoire</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent-glow shrink-0" />
                <span>contact@alfateh.ci</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent-glow shrink-0" />
                <span>+225 27 00 00 00 00</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-5 text-accent-glow">
              Devenez partenaire
            </h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Discutons de votre expansion en Côte d'Ivoire.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent-glow transition-smooth"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} AL FATEH. Tous droits réservés.</p>
          <p>Distribution agroalimentaire — Côte d'Ivoire</p>
        </div>
      </div>
    </footer>
  );
}
