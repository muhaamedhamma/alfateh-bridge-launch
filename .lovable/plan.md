# Plan de transformation AL FATEH — site vitrine → plateforme commerciale

Réalisation en **4 phases**, dans l'ordre d'impact business. Chaque phase est livrable indépendamment.

---

## Phase 1 — Conversion commerciale (priorité absolue)

**Objectif** : ne plus perdre un seul prospect.

1. **Bouton WhatsApp flottant** (toutes pages, FR/EN)
   - Numéro : **+225 05 03 90 73 26**
   - Lien `wa.me/22505039073 26` avec message pré-rempli contextuel par page (ex : "Bonjour, je suis intéressé par devenir client AL FATEH").
   - Animation pulse discrète, masqué à l'impression.

2. **Formulaire de contact connecté** (page Contact existante + nouveau formulaire devis)
   - **Email** via Lovable Emails → `contact@alfateh.ci` + `direction@alfateh.ci` (templates React Email brandés, distincts acheteur/marque/devis).
   - **WhatsApp** : après soumission, bouton "Continuer sur WhatsApp" avec récap pré-rempli.
   - **Stockage Lovable Cloud** : table `leads` (type, nom, société, email, téléphone, message, produits, payload JSON, statut, created_at) + RLS admin-only.

3. **Page Demande de devis** (`/devis`)
   - Sélecteur multi-produits (alimenté par le catalogue, voir Phase 2).
   - Quantités, délai souhaité, zone de livraison.
   - Même triple destination : email + WhatsApp + Cloud.

4. **Mini back-office leads** (`/_authenticated/admin/leads`)
   - Liste, filtre par type, statut (nouveau/contacté/converti), export CSV.
   - Auth simple via Supabase + rôle `admin` (table `user_roles` + `has_role`).

---

## Phase 2 — Catalogue & preuves sociales

5. **Catalogue produits** (`/catalogue` + `/catalogue/$categorie`)
   - Schéma Cloud : `categories`, `brands`, `products` (nom, catégorie, marque, image, description, packaging, dispo).
   - Back-office `/_authenticated/admin/catalogue` (CRUD + upload images via Supabase Storage).
   - 8 catégories pré-créées : Boissons, Conserves, Produits laitiers, Huiles, Riz, Pâtes, Biscuiterie, Confiserie.
   - Filtre par catégorie + marque, recherche, design grille responsive.

6. **Logos partenaires & marques représentées** (homepage + page Partenaires)
   - Carrousel logos en niveaux de gris → couleur au hover.
   - Section "Ils nous font confiance" sur l'accueil.
   - Données depuis table `brands` (avec champ `is_featured` + `logo_url`).

7. **Chiffres clés animés** (homepage + À propos)
   - Compteurs animés : +500 détaillants, +50 grossistes, +15 villes, +1000 livraisons/mois, +40 ans.
   - Valeurs configurables dans une table `stats` (Cloud) → modifiables sans redéploiement.

8. **Carte interactive du réseau** (page Réseau)
   - Carte SVG de Côte d'Ivoire avec villes desservies cliquables.
   - Liste des zones par région (Abidjan, Bouaké, San-Pédro, Yamoussoukro, Korhogo, etc.).
   - Tooltip avec nombre de points de vente par ville.

9. **Téléchargements PDF** (footer + page Partenaires)
   - Présentation entreprise, brochure commerciale, fiche partenariat marque, catalogue PDF.
   - Stockage Supabase Storage (bucket public `documents`).
   - Tracking téléchargements dans `leads` (lead magnet → demande email).

---

## Phase 3 — SEO, contenu & analytics

10. **Blog SEO étendu** (`/blog` + `/blog/$slug`)
    - Structure articles avec table `posts` (Cloud) + back-office.
    - Création de 5 articles SEO ciblés : "Distribution alimentaire CI", "Importation alimentaire CI", "Grossiste alimentaire Abidjan", "Représentation de marques Afrique de l'Ouest", "Réseau distribution CI" (gardons l'article déstockage existant).
    - JSON-LD Article, OG image par article, sitemap automatique.

11. **Google Analytics 4 + Meta Pixel + Search Console**
    - GA4 via gtag (ID demandé à l'utilisateur).
    - Meta Pixel (ID demandé).
    - Search Console déjà connecté ✅ — soumission sitemap automatique après publish.
    - Événements custom : `lead_submitted`, `quote_requested`, `whatsapp_clicked`, `pdf_downloaded`.

---

## Phase 4 — Espace marques & investisseurs

12. **Page Espace Marques** (`/marques`)
    - "Pourquoi choisir AL FATEH comme représentant en Côte d'Ivoire"
    - 6 piliers : Réseau terrain, Logistique, Force commerciale, Merchandising, Reporting, Conformité réglementaire.
    - Témoignages marques (table `testimonials`).
    - CTA "Devenir partenaire" → formulaire dédié.

13. **Page Investisseurs** (`/investisseurs`)
    - Vision, taille du marché ivoirien agroalimentaire, stratégie, croissance, opportunités régionales (UEMOA).
    - Téléchargement deck investisseur (PDF protégé par formulaire email).

---

## Domaine personnalisé

14. **Migration vers alfateh.ci** (ou alfatehdistribution.com)
    - Guidage via le panneau Domaines de Lovable (achat ou connexion).
    - Mise à jour des URLs canoniques, sitemap, JSON-LD, OG.
    - Hors-périmètre code direct : action utilisateur requise au registrar.

---

## Détails techniques

**Stack** : TanStack Start (existant) + Lovable Cloud (Supabase) + Lovable Emails + Lovable AI (pas nécessaire ici).

**Nouvelles tables Cloud** :
- `leads`, `categories`, `brands`, `products`, `stats`, `posts`, `testimonials`, `user_roles`
- RLS strict : lectures publiques uniquement sur `categories/brands/products/posts/testimonials/stats` ; écritures admin via `has_role()`.
- GRANT explicites sur chaque table publique.

**Nouveaux server functions** :
- `submitLead`, `submitQuote`, `listLeads` (admin), `updateLeadStatus` (admin), CRUD catalogue (admin).

**Routes server** :
- `/api/public/sitemap.xml` (déjà existant — étendu avec articles + catégories).

**Auth** : ajout de `_authenticated/admin/*` pour le back-office. Première inscription admin via SQL seed manuel (créer user puis insérer rôle).

**Emails** : 3 templates React Email (`lead-buyer.tsx`, `lead-brand.tsx`, `quote-request.tsx`) + accusé de réception au prospect.

**Secrets nécessaires plus tard** : `VITE_GA4_ID`, `VITE_META_PIXEL_ID` (publishables, donc en `.env`).

---

## Livraison proposée

Je commence par la **Phase 1 complète** (WhatsApp + formulaires connectés + back-office leads). Une fois validée, j'enchaîne sur la Phase 2, etc. Tu peux à tout moment réordonner ou stopper entre deux phases.

**Action requise pour démarrer** : valider ce plan → j'active Lovable Cloud (prérequis emails + DB) puis je code la Phase 1.
