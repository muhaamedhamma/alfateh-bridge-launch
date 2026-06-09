import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Section } from "@/components/site/Section";
import {
  ArrowLeft,
  Package,
  Truck,
  ShieldCheck,
  TrendingDown,
  Warehouse,
  BadgeCheck,
  CalendarClock,
  MapPin,
  Phone,
} from "lucide-react";

export const Route = createFileRoute("/blog/destockage-alimentaire-cote-divoire")({
  head: () => ({
    meta: [
      { title: "Guide déstockage alimentaire en Côte d'Ivoire — AL FATEH" },
      {
        name: "description",
        content:
          "Guide complet sur le déstockage alimentaire en Côte d'Ivoire : réglementation, opportunités, réseaux de distribution et solutions pour écouler les fins de série. AL FATEH, votre partenaire stratégique.",
      },
      {
        property: "og:title",
        content: "Guide déstockage alimentaire en Côte d'Ivoire — AL FATEH",
      },
      {
        property: "og:description",
        content:
          "Comment gérer les stocks alimentaires en fin de série en Côte d'Ivoire ? Découvrez les solutions de distribution, la réglementation et les opportunités B2B.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DestockageGuidePage,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function DestockageGuidePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container-pro max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-glow hover:text-accent transition-smooth mb-8"
          >
            <ArrowLeft size={16} /> Retour à l'accueil
          </Link>
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Guide pratique
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-extrabold text-balance leading-[1.1] mb-6">
              Déstockage alimentaire en Côte d'Ivoire
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed text-balance max-w-3xl">
              Comment les marques et les distributeurs gèrent les fins de série, les surstocks et les produits en fin de vie ? Guide complet sur les solutions de déstockage alimentaire et la valorisation des stocks en Afrique de l'Ouest.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <div className="container-pro max-w-4xl py-16 md:py-24">
        <article className="prose prose-lg max-w-none">
          {/* Intro */}
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Le <strong>déstockage alimentaire</strong> constitue un enjeu stratégique majeur pour les industriels et distributeurs en Côte d'Ivoire. Entre produits en fin de série, changements d'emballage, surproductions saisonnières et stocks périssables, la gestion des excédents demande expertise logistique et réseau de distribution étendu. Ce guide décrypte les mécanismes du déstockage en Côte d'Ivoire et montre comment un partenaire de distribution comme AL FATEH transforme un problème de stock en opportunité commerciale.
            </p>
          </motion.div>

          {/* Section 1 */}
          <motion.div {...fadeUp} className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-6">
              Qu'est-ce que le déstockage alimentaire ?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Le déstockage alimentaire désigne l'ensemble des opérations visant à écouler rapidement des stocks de produits agroalimentaires avant leur péremption ou leur dévalorisation. Contrairement au liquidation classique, le déstockage alimentaire obéit à des contraintes strictes : traçabilité, respect des DLC (dates limites de consommation), conformité aux normes sanitaires ivoiriennes et préservation de l'image de marque.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              En Côte d'Ivoire, où la chaîne du froid reste inégale selon les régions et où le commerce informel domine une part significative du retail, le déstockage exige un réseau hybride couvrant aussi bien les supermarchés modernes que les supérettes de quartier et les marchés de gros.
            </p>
          </motion.div>

          {/* Grid — Why déstockage happens */}
          <motion.div {...fadeUp} className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-6">
              Pourquoi le déstockage alimentaire est-il nécessaire ?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {[
                {
                  icon: CalendarClock,
                  title: "Fins de série et DLC courtes",
                  desc: "Produits proches de la péremption nécessitant une écoulement accéléré via des circuits court-circuités.",
                },
                {
                  icon: TrendingDown,
                  title: "Changement de gamme ou de packaging",
                  desc: "Relancement d'une marque ou mise à jour visuelle rendant les anciens lots obsolètes.",
                },
                {
                  icon: Warehouse,
                  title: "Surproductions saisonnières",
                  desc: "Productions agricoles ou industrielles excédentaires après les périodes de forte demande.",
                },
                {
                  icon: Package,
                  title: "Importations en excédent",
                  desc: "Commandes trop importantes ou décalages dans les délais d'importation créant des surstocks.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-secondary/40 p-6"
                >
                  <item.icon className="text-accent mb-4" size={28} />
                  <h3 className="font-display text-lg font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section 2 — Regulatory */}
          <motion.div {...fadeUp} className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-6">
              Réglementation et normes sanitaires en Côte d'Ivoire
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Le déstockage alimentaire en Côte d'Ivoire est encadré par plusieurs textes réglementaires. La <strong>Direction des Contrôles et de la Répression des Fraudes (DCCRF)</strong> veille au respect des normes. Les produits doivent impérativement :
            </p>
            <ul className="space-y-3 text-muted-foreground mb-6 list-none">
              {[
                "Respecter la date limite de consommation (DLC) ou la date de durabilité minimale (DDM)",
                "Disposer d'un étiquetage conforme en français avec mentions allergènes",
                "Prouver la traçabilité via les documents d'accompagnement (factures, bons de livraison)",
                "Respecter les conditions de transport et de stockage (température, hygiène)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ShieldCheck className="text-accent mt-0.5 shrink-0" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Les produits périmés ou non conformes doivent être écartés du circuit commercial et orientés vers des filières de destruction certifiées. AL FATEH applique une politique stricte de zéro produit périmé en distribution.
            </p>
          </motion.div>

          {/* Section 3 — Solutions */}
          <motion.div {...fadeUp} className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-6">
              Les solutions de déstockage alimentaire en Côte d'Ivoire
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Face à ces contraintes, plusieurs leviers permettent d'écouler les stocks en fin de série tout en préservant la marge et l'image de marque :
            </p>
            <div className="space-y-8">
              {[
                {
                  title: "1. Distribution via le réseau grossiste-détaillant",
                  body: "Le canal traditionnel — marchés de gros, supérettes, épiceries — absorbe des volumes importants à des prix attractifs. Ce circuit privilégie la liquidité rapide. AL FATEH connecte les marques à plus de 500 points de vente actifs à travers Abidjan et les régions intérieures.",
                },
                {
                  title: "2. Lots promotionnels pour la grande distribution",
                  body: "Les supermarchés et hypermarchés (Carrefour, Super U, leader Price, Cdistock) acceptent des lots promotionnels à condition de respecter leur cahier des charges. Cette voie exige un partenaire capable de gérer la facturation, la livraison groupée et le suivi des retours.",
                },
                {
                  title: "3. Export vers les marchés frontaliers",
                  body: "Le Burkina Faso, le Mali, le Ghana et le Togo représentent des débouchés naturels pour les produits en fin de série. AL FATEH facilite les opérations transfrontalières grâce à son expertise douanière et logistique.",
                },
                {
                  title: "4. Redistribution vers la restauration collective",
                  body: "Les hôtels, restaurants, entreprises (Horeca) et cantines scolaires achètent des volumes de denrées à des tarifs négociés, à condition d'une livraison fiable et de qualité constante.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-display text-xl font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section 4 — AL FATEH advantage */}
          <motion.div {...fadeUp} className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-6">
              Pourquoi choisir AL FATEH pour votre déstockage alimentaire ?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              AL FATEH ne se contente pas d'écouler des stocks : l'entreprise structure une <strong>stratégie de sortie de gamme</strong> adaptée à chaque marque, chaque produit et chaque délai. Voici ce qui différencie notre approche :
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: MapPin,
                  title: "Couverture nationale",
                  desc: "Réseau de distribution actif à Abidjan, Bouaké, Yamoussoukro et San-Pédro avec capacité d'extension vers les zones rurales.",
                },
                {
                  icon: Truck,
                  title: "Logistique intégrée",
                  desc: "Flotte de véhicules frigorifiques et entrepôts certifiés assurant la chaîne du froid jusqu'au dernier kilomètre.",
                },
                {
                  icon: BadgeCheck,
                  title: "Conformité garantie",
                  desc: "Respect strict des normes sanitaires ivoiriennes, traçabilité complète et documentation réglementaire fournie.",
                },
                {
                  icon: Phone,
                  title: "Accompagnement dédié",
                  desc: "Chaque partenaire dispose d'un interlocuteur commercial unique pour piloter l'opération de déstockage de A à Z.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-secondary/40 p-6"
                >
                  <item.icon className="text-accent mb-4" size={28} />
                  <h3 className="font-display text-lg font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section 5 — Conclusion */}
          <motion.div {...fadeUp} className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-6">
              Conclusion
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Le déstockage alimentaire en Côte d'Ivoire n'est pas une simple opération de liquidation : c'est une <strong>opportunité de renforcer son réseau de distribution</strong>, de tester de nouveaux circuits commerciaux et de valoriser des produits qui méritent encore d'être consommés. Avec une population jeune, une urbanisation rapide et une classe moyenne en expansion, la demande pour les produits agroalimentaires de qualité — même en fin de série — reste forte.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              AL FATEH place son expertise logistique, son réseau national et son respect des normes au service des marques qui souhaitent transformer leurs surplus en revenus, et des distributeurs qui cherchent des produits compétitifs à forte rotation.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div {...fadeUp} className="rounded-2xl bg-primary text-primary-foreground p-8 md:p-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Vous avez des stocks à écouler ?
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-8 max-w-xl">
              Discutons de votre situation. AL FATEH évalue gratuitement vos volumes, délais et contraintes réglementaires pour vous proposer un plan de déstockage sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                search={{ type: "marque" }}
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-card hover:bg-accent/90 transition-smooth"
              >
                <BadgeCheck size={18} className="mr-2" />
                Demander un audit de stock
              </Link>
              <Link
                to="/contact"
                search={{ type: "acheteur" }}
                className="inline-flex items-center justify-center rounded-md border border-primary-foreground/20 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-smooth"
              >
                <Package size={18} className="mr-2" />
                Voir les lots disponibles
              </Link>
            </div>
          </motion.div>
        </article>
      </div>
    </div>
  );
}
