
# Refonte AL FATEH — Hub stratégique unifié

L'ancienne version segmentait trop frontalement les deux audiences. La nouvelle direction : **un seul récit fluide** qui positionne AL FATEH comme le hub central, avec des **bénéfices clairement ciblés mais présentés en parallèle** (jamais en opposition).

## Principe directeur

- Un seul fil narratif : *"AL FATEH = pont entre usines et marché ivoirien"*.
- Les bénéfices acheteurs et marques apparaissent **côte à côte** dans la même section, jamais isolés sur des pages distinctes.
- **Prix compétitifs** = autorisé uniquement dans les blocs/sections "approvisionnement / distributeurs".
- **Croissance / accès marché** = uniquement dans les blocs "marques / partenaires".
- Aucun discours ne domine : équilibre visuel 50/50 dans les sections hybrides.

## 1. Page d'accueil (`src/routes/index.tsx`) — réécrite

Structure linéaire et fluide :

1. **Hero unifié**
   - Titre : *"Le moteur de la distribution agroalimentaire en Côte d'Ivoire"*
   - Sous-titre : *"AL FATEH connecte marques, usines et distributeurs à travers un réseau performant, fiable et structuré."*
   - **Deux CTA neutres** (pas de choix de camp) :
     - "Travailler avec nous" → `/contact`
     - "Découvrir notre réseau" → `/reseau`
   - Bandeau stats conservé (40+, 100%, 500+, 24/7).

2. **Section Positionnement hybride** (cœur de la nouvelle page)
   - Intro : *"AL FATEH accompagne à la fois les acteurs de la distribution et les marques industrielles."*
   - **Deux blocs côte à côte** (grid 2 colonnes, design symétrique) :
     - 🛒 **Pour les distributeurs** : Disponibilité continue · Prix compétitifs (prix usine) · Large gamme
     - 🏭 **Pour les marques** : Accès au marché · Réseau national · Développement commercial
   - Pas de CTA séparés — un seul lien "En savoir plus" sous les deux blocs.

3. **Section Valeur — Approvisionnement** (axée acheteurs, ton inclusif)
   - Titre : *"Un approvisionnement fiable, pensé pour la performance"*
   - 4 cartes : Produits toujours disponibles · Logistique efficace · Prix optimisés · Réseau solide
   - Visuel : photo retail/entrepôt.

4. **Section Partenariat — Croissance** (axée marques, ton inclusif)
   - Titre : *"Un partenaire stratégique pour votre croissance"*
   - 4 cartes : Déploiement rapide · Expertise locale 40+ ans · Réseau actif · Accélération des ventes
   - Visuel : photo partnership.

5. **À propos (teaser)** — histoire, expertise, vision pont.
6. **Réseau (teaser)** — couverture nationale + types de clients servis (mix supermarchés, supérettes, grossistes, détaillants).
7. **Chiffres clés** — bandeau dédié visuel fort.
8. **Vision** — référence CI → leader régional Afrique de l'Ouest.
9. **Témoignages** — mix d'un commerçant et d'une marque (étiquetés discrètement).
10. **Logos partenaires** placeholder.
11. **CTA banner final** unifié : *"Rejoignez le hub AL FATEH"* — un seul bouton vers `/contact`.

⚠️ Suppression : sections "Pourquoi AL FATEH" mélangées et "Spécial partenaires" actuelles qui cassent l'équilibre.

## 2. Pages secondaires — ajustements

- **`/services`** : rester neutre, organiser en 4 services (distribution en gros · logistique nationale · développement commercial de marques · gestion de réseau). Aucun changement majeur.
- **`/partenaires`** : conservé — page d'approfondissement marques. Vérifier qu'aucun mot "prix compétitif" ne traîne.
- **`/reseau`** : ajouter une mention claire des types de commerces desservis (acheteurs).
- **`/about`** : conservé.
- ❌ **Pas de page `/acheteurs` séparée** — le narratif unifié rend cela superflu. Les acheteurs trouvent leur réponse sur la home + `/services` + `/reseau`.

## 3. Contact intelligent (`src/routes/contact.tsx`)

- Ajouter `validateSearch` Zod avec `fallback` pour query param `?type=acheteur|marque`.
- En haut du formulaire, **2 grandes cartes radio** :
  - 🛒 "Je suis acheteur"
  - 🏭 "Je suis une marque / usine"
- Champs dynamiques selon le choix :
  - Acheteur : nom commerce, type (supermarché / supérette / grossiste / détaillant), zone, volume estimé.
  - Marque : entreprise, pays, type (usine locale / marque internationale / nouvel entrant), description produits.
- Pré-sélection si query param présent.
- Confirmation différenciée.

## 4. Header / Footer

- **Header** : menu inchangé (Accueil · À propos · Services · Partenaires · Réseau · Contact). CTA bouton : "Travailler avec nous" → `/contact`.
- **Footer** : ajouter deux mini-colonnes équilibrées "Distributeurs" / "Marques & usines" pointant chacune vers `/contact?type=...`.

## 5. Design system

- Conserver palette bleu foncé / vert / blanc, OKLCH, `shadow-elegant`, framer-motion.
- Différencier visuellement les **deux blocs hybrides** (positionnement) par un accent couleur subtil :
  - Bloc distributeurs → bordure / icônes accent vert.
  - Bloc marques → bordure / icônes accent bleu profond.
- Maintenir un design symétrique strict pour ne favoriser aucune cible.

## Détails techniques

- Routes TanStack : aucune nouvelle route, uniquement édition.
- Query params contact : `zodValidator` + `fallback` du paquet `@tanstack/zod-adapter` (à installer si absent ; sinon utiliser zod direct via `validateSearch: (s) => schema.parse(s)`).
- Scroll smooth via CSS standard.
- SEO : mettre à jour `head()` de `index.tsx` avec le nouveau titre/description orientés "moteur / hub".
- Pas d'autres dépendances.

## Fichiers impactés

- ✏️ `src/routes/index.tsx` — réécriture complète selon nouvelle structure.
- ✏️ `src/routes/contact.tsx` — formulaire intelligent + lecture query param.
- ✏️ `src/routes/reseau.tsx` — ajout types de clients desservis.
- ✏️ `src/routes/partenaires.tsx` — vérification discours (retrait du mot "prix" si présent).
- ✏️ `src/components/site/Footer.tsx` — colonnes Distributeurs / Marques.
- ✏️ `src/components/site/CtaBanner.tsx` — texte unifié "hub".

## Résultat attendu

À la lecture de la home, le visiteur ressent :
- *"AL FATEH contrôle la distribution agroalimentaire en CI."*
- Une marque pense : *"J'ai besoin d'eux pour entrer sur le marché."*
- Un commerçant pense : *"Je dois m'approvisionner chez eux."*
- Aucun ne se sent exclu — les deux audiences voient leurs bénéfices spécifiques dans le même récit.
