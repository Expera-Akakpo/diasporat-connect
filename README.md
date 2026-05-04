# DiasporaConnect

## Description

`DiasporaConnect` est une application web de transfert d'argent dédiée aux diasporas africaines. Elle propose un parcours utilisateur complet pour l'envoi et la réception de fonds, avec une simulation de validation blockchain, un portefeuille destinataire et une interface réactive adaptée aux mobiles.

L'objectif du projet est de présenter une solution propre, fonctionnelle et prête pour une démonstration de hackathon, avec un parcours utilisateur end-to-end : expéditeur → blockchain simulée → destinataire → retrait.

## Technologies utilisées

- **Next.js 16** (React, SSR/SSG)
- **TypeScript**
- **Tailwind CSS 4**
- **shadcn/ui** pour les composants UI
- **React Query** pour la gestion de l'état serveur
- **Zod** pour la validation des schémas
- **Radix UI** pour les primitives d'interface

## Fonctionnalités principales

- Parcours complet d'envoi d'argent depuis l'espace expéditeur
- Simulation de confirmation blockchain avant le statut de réussite
- Tableau de bord destinataire avec solde, actions rapides et historique
- Page de retrait avec options Mobile Money, virement bancaire ou espèces
- Interface responsive optimisée pour mobile et desktop
- Mode visuel sombre / design noir cohérent
- Persistance de l'état des transactions via le contexte global

## Structure des pages

- `/` : page d'accueil
- `/expediteur` : page d'envoi d'argent
- `/expediteur/historique` : historique des envois
- `/wallet` : tableau de bord destinataire
- `/retrait` : page de retrait des fonds
- `/historique` : historique des transactions destinataire
- `/login` : page de connexion

## Installation

1. Cloner le dépôt :
   ```bash
   git clone <url-du-repo>
   cd diasporat-connect
   ```

2. Installer les dépendances :
   ```bash
   npm install
   ```

3. Configurer la base de données si nécessaire.
   - Le projet utilise `drizzle-orm` et `pg`.
   - Ajustez les variables d'environnement pour PostgreSQL.

4. Lancer l'application en développement :
   ```bash
   npm run dev
   ```

## Commandes utiles

- `npm run dev` : démarre le serveur Next.js en mode développement
- `npm run build` : compile l'application pour la production
- `npm run start` : démarre l'application en mode production
- `npm run lint` : exécute ESLint
- `npm run check` : lance le typage TypeScript
- `npm run db:push` : pousse le schéma Drizzle vers la base de données

## Notes spécifiques

- La simulation de blockchain est intégrée dans le parcours d'envoi, avec une étape intermédiaire de validation avant confirmation.
- Le design reste sombre et professionnel, conforme aux attentes initiales du projet.
- Les composants UI sont construits avec des styles Tailwind personnalisés pour assurer une expérience fluide sur mobile et desktop.

## Objectif hackathon

Cette version est conçue pour être présentée dans le cadre d'une phase 2 de hackathon. Elle met en avant un produit finalisé, un parcours utilisateur complet et une interface propre, responsive et moderne.

---
