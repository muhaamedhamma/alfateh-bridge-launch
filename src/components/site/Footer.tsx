import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ShoppingCart, Factory } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
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
              Le moteur de la distribution agroalimentaire en Côte d'Ivoire — pont entre
              les marques industrielles et un réseau retail national.
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
              <li><Link to="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-5 text-accent-glow">
              Distributeurs
            </h4>
            <p className="text-sm text-primary-foreground/70 mb-4 leading-relaxed">
              Approvisionnez votre commerce.
            </p>
            <Link
              to="/contact"
              search={{ type: "acheteur" }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-glow hover:text-accent transition-smooth"
            >
              <ShoppingCart size={16} /> Devenir client
            </Link>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-5 text-accent-glow">
              Marques & usines
            </h4>
            <p className="text-sm text-primary-foreground/70 mb-4 leading-relaxed">
              Confiez-nous votre distribution.
            </p>
            <Link
              to="/contact"
              search={{ type: "marque" }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-glow hover:text-accent transition-smooth"
            >
              <Factory size={16} /> Devenir partenaire
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-primary-foreground/10 grid gap-4 md:grid-cols-3 text-xs text-primary-foreground/60">
          <p className="flex items-center gap-2"><MapPin size={14} className="text-accent-glow" /> Abidjan, Côte d'Ivoire</p>
          <p className="flex items-center gap-2"><Mail size={14} className="text-accent-glow" /> contact@alfateh.ci</p>
          <p className="flex items-center gap-2"><Phone size={14} className="text-accent-glow" /> +225 27 00 00 00 00</p>
        </div>
        <div className="mt-6 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} AL FATEH. Tous droits réservés.</p>
          <p>Distribution agroalimentaire — Côte d'Ivoire</p>
        </div>
      </div>
    </footer>
  );
}
