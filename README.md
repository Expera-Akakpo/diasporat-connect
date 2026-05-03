# DiasporaConnect - Phase 2

[![TypeScript](https://img.shields.io/badge/TypeScript-97.1%25-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

**DiasporaConnect** est une plateforme web moderne dédiée à la gestion de transferts d'argent et de services financiers pour la diaspora. Elle permet aux utilisateurs d'effectuer des envois, des retraits et de suivre l'historique de leurs transactions depuis une interface réactive et sécurisée.

> **Note** : Ce projet est en phase active de développement (`phase 2`). La dernière mise à jour (3 mai 2026) a corrigé un bug d'affichage sur les versions mobiles et desktop.

##  Fonctionnalités Clés

*   **Authentification Sécurisée** : Système de connexion protégé par `passport.js` et `express-session`.
*   **Tableau de Bord "Expéditeur"** : Interface dédiée à l'envoi de fonds.
*   **Portefeuille ("Wallet")** : Gestion du solde et des moyens de paiement.
*   **Retrait ("Retrait")** : Processus guidé pour le retrait d'argent par les bénéficiaires.
*   **Historique Complet** : Suivi détaillé de toutes les transactions passées et en cours.
*   **Taux de Change en Temps Réel** : API interne pour la gestion des taux (`/api/rates`).
*   **Design Responsive & Moderne** : Interface construite avec **Radix UI**, **Tailwind CSS** et animée avec **Framer Motion**.
*   **Validation Robuste** : Formulaires sécurisés et validés côté client et serveur grâce à `react-hook-form` et `zod`.

## 🛠️ Stack Technique

**Frontend & Backend**
*   [Next.js 16](https://nextjs.org/) (App Router) - Framework React full-stack
*   [React 18](https://react.dev/) - Librairie d'interface utilisateur
*   [TypeScript](https://www.typescriptlang.org/) - Typage statique

**UI & Design**
*   [Tailwind CSS v4](https://tailwindcss.com/) - Stylisation utilitaire
*   [Radix UI](https://www.radix-ui.com/) - Composants accessibles et personnalisables
*   [Lucide React](https://lucide.dev/) - Icônes modernes
*   [Framer Motion](https://www.framer.com/motion/) - Animations fluides
*   [Recharts](https://recharts.org/) - Visualisation de données

**Base de Données & ORM**
*   [Drizzle ORM](https://orm.drizzle.team/) - ORM TypeScript performant
*   [PostgreSQL](https://www.postgresql.org/) - Base de données relationnelle

**Authentification**
*   [Passport.js](https://www.passportjs.org/) - Middleware d'authentification
*   [express-session](https://www.npmjs.com/package/express-session) - Gestion des sessions

**Validation & Formulaires**
*   [react-hook-form](https://react-hook-form.com/) - Gestion performante des formulaires
*   [zod](https://zod.dev/) - Validation de schémas

##  Structure du Projet

```text
diasporat-connect/
├── .vscode/                 # Configuration de l'éditeur VS Code
├── public/                  # Ressources statiques
│   ├── figmaAssets/         # Éléments graphiques exportés de Figma
│   ├── favicon.png
│   └── *.svg                # Icônes diverses (globe, next, vercel...)
├── src/                     # Code source principal de l'application
│   ├── app/                 # Router Next.js (App Router)
│   │   ├── api/
│   │   │   └── rates/       # Endpoint API pour les taux de change
│   │   ├── expediteur/      # Page & logique "Expéditeur" (envoi d'argent)
│   │   ├── historique/      # Page & logique "Historique"
│   │   ├── login/           # Page d'authentification
│   │   ├── retrait/         # Page & logique "Retrait"
│   │   ├── wallet/          # Page & logique "Portefeuille"
│   │   ├── globals.css      # Styles globaux
│   │   ├── layout.tsx       # Layout racine de l'application
│   │   └── page.tsx         # Page d'accueil
│   ├── components/          # Composants réutilisables (UI, etc.)
│   ├── contexts/            # Contextes React (auth, thème...)
│   ├── hooks/               # Hooks React personnalisés
│   ├── lib/                 # Utilitaires et configuration de librairies
│   ├── shared/              # Logique métier partagée
│   └── types/               # Définitions de types TypeScript
├── .gitignore               # Fichiers ignorés par Git
├── eslint.config.mjs        # Configuration ESLint
├── i.tsx                    # Point d'entrée secondaire (en cours de développement)
├── next.config.mts          # Configuration de Next.js (Turbopack, origines)
├── package.json             # Dépendances et scripts du projet
├── postcss.config.js        # Configuration PostCSS
├── postcss.config.old       # Ancienne configuration PostCSS (sauvegarde)
├── tailwind.config.js       # Thème et configuration de Tailwind CSS
└── tsconfig.json            # Configuration TypeScript
```

##  Démarrage Rapide

### Prérequis

*   [Node.js](https://nodejs.org/) (version >= 18.x recommandée)
*   [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
*   Une base de données [PostgreSQL](https://www.postgresql.org/) opérationnelle.

### Installation

1.  **Cloner le dépôt**
    ```bash
    git clone https://github.com/somboro08/diasporat-connect.git
    cd diasporat-connect
    ```

2.  **Installer les dépendances**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Configurer les variables d'environnement**
    Créez un fichier `.env.local` à la racine du projet et configurez les variables requises. Voici un exemple minimal basé sur les dépendances du projet :
    ```dotenv
    # Connexion à la base de données PostgreSQL (utilisée par Drizzle ORM)
    DATABASE_URL=postgresql://user:password@localhost:5432/diasporadb

    # Clé de session pour express-session
    SESSION_SECRET=votre_secret_tres_long_et_aleatoire
    ```

4.  **Initialiser la base de données (optionnel)**
    Le projet utilise `drizzle-kit`. Si un schéma de base de données est déjà défini, vous pouvez synchroniser la structure :
    ```bash
    npm run db:push
    ```

5.  **Lancer le serveur de développement**
    ```bash
    npm run dev
    ```
    Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## Scripts Disponibles

| Script         | Description                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| `npm run dev`  | Lance le serveur de développement Next.js avec Turbopack et Hot Reload.     |
| `npm run build`| Compile l'application pour la production.                                   |
| `npm start`    | Démarre le serveur de production (après avoir exécuté `build`).             |
| `npm run lint` | Analyse le code avec ESLint pour détecter les erreurs et les problèmes de style. |
| `npm run check`| Vérifie la cohérence des types TypeScript dans tout le projet (`tsc`).      |
| `npm run db:push`| Synchronise le schéma de la base de données défini dans Drizzle ORM.     |

##  Configuration

*   **`next.config.mts`** : Configure Turbopack et les origines autorisées pour le développement (`172.25.0.1`, `10.24.174.36`).
*   **`tailwind.config.js`** : Étend le thème par défaut de Tailwind avec des couleurs personnalisées, notamment une palette `teal`.
*   **`tsconfig.json`** : Cible `ES2017`, active le mode `strict` et définit l'alias de chemin `@/*` pointant vers `./src/*`.

##  Contribution

Les contributions sont les bienvenues ! Étant donné que le projet est en phase active de développement, veuillez suivre ces étapes :

1.  **Forker** le dépôt.
2.  Créer une **branche** pour votre fonctionnalité (`git checkout -b feature/ma-nouvelle-fonctionnalite`).
3.  Faire un **commit** de vos modifications (`git commit -m 'Ajout de ma nouvelle fonctionnalité'`).
4.  **Pousser** la branche (`git push origin feature/ma-nouvelle-fonctionnalite`).
5.  Ouvrir une **Pull Request**.

Avant de soumettre, assurez-vous que votre code passe les vérifications :
```bash
npm run lint
npm run check
```

## Licence

Ce projet est actuellement un dépôt privé. Aucune licence n'est définie pour le moment.

---

**Créé par [somboro08](https://github.com/somboro08) | Dernière modification : 3 mai 2026**
