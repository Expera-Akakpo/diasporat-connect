# Expérience Utilisateur (UX) - DiasporaConnect

DiasporaConnect est une plateforme de transfert d'argent révolutionnaire basée sur la blockchain, conçue pour réduire les frais de transfert de la diaspora vers l'Afrique (Bénin, Sénégal, Côte d'Ivoire) de 10% à seulement **0,2%**.

---

## 1. Philosophie de Design
L'application adopte une esthétique **"Fintech Moderne / Dark Mode"** :
*   **Palette de couleurs** : Fond sombre (`#0d0d0d`), accents vert émeraude (`Tradewind`) pour la réussite et le gain, et or/ocre pour les alertes et les devises locales.
*   **Typographie** : Utilisation de la police `DM Sans` pour la lisibilité et `DM Mono` pour les données chiffrées (montants, taux), renforçant l'aspect technique et précis de la blockchain.
*   **Composants** : Cartes aux bords arrondis, effets de flou (Glassmorphism), et animations fluides.

---

## 2. Parcours Utilisateur : L'Expéditeur (Diaspora)

### A. Découverte (Landing Page)
L'utilisateur arrive sur une page qui met immédiatement en avant la proposition de valeur : **"Envoyez au Bénin. Sans intermédiaires. Frais à 0,2%."**
*   **Comparateur de frais** : Un tableau dynamique montre l'économie réalisée par rapport à Western Union ou MoneyGram. L'utilisateur voit instantanément qu'il peut économiser environ 17€ sur un envoi de 240€.
*   **Simplicité** : Le processus en 3 étapes est clairement expliqué (Montant -> Smart Contract -> Mobile Money).

### B. Envoi de fonds
Une fois connecté, l'expéditeur accède à son cockpit :
1.  **Saisie du montant** : Un champ large en Euros convertit instantanément en XOF au taux garanti de 655.
2.  **Sélection du destinataire** :
    *   **Rapide** : Choix parmi ses contacts fréquents avec avatars.
    *   **Flexible** : Possibilité d'ajouter manuellement un nouveau destinataire (Nom + Numéro Mobile Money) sans quitter la page.
3.  **Validation** : Un récapitulatif détaillé avant confirmation pour éviter toute erreur.

### C. Suivi & Historique
*   L'utilisateur peut consulter l'historique de ses envois avec des badges de statut clairs ("Terminé", "En cours").
*   Un indicateur d'**impact mensuel** affiche le total des économies réalisées en frais, valorisant l'utilisation de la plateforme.

---

## 3. Parcours Utilisateur : Le Destinataire (Local / Bénin)

### A. Réception (Wallet)
Le destinataire dispose d'une interface simplifiée centrée sur son solde :
*   **Vue globale** : Solde disponible en XOF.
*   **Transfers reçus** : Une liste chronologique des fonds arrivés, avec le drapeau du pays d'origine et le nom de l'expéditeur.

### B. Retrait (Off-ramp)
C'est l'étape critique : transformer la monnaie numérique en cash.
*   **Fluidité** : Bouton "Retirer" proéminent.
*   **Choix du fournisseur** : Sélection entre MTN MoMo, Moov Money ou Wave.
*   **Instantanéité** : Les fonds sont transférés du wallet blockchain vers le compte Mobile Money de l'utilisateur en un clic.

---

## 4. Adaptabilité (Responsive Experience)

L'application offre deux expériences distinctes selon l'appareil :

### Version Desktop (Dashboard)
*   Utilisation de grilles larges pour une vue d'ensemble complète.
*   Navigation par menu supérieur et sections détaillées.
*   Idéal pour la gestion de compte et les envois importants depuis chez soi.

### Version Mobile (App-like)
*   **Sidebar Navigation** : Utilise une barre de navigation basse (Bottom Nav) familière aux utilisateurs d'applications mobiles.
*   **Gestuelle** : Les interactions sont pensées pour le pouce, avec des boutons larges et des formulaires optimisés.
*   **Focus** : Chaque écran se concentre sur une seule action (Envoyer ou Consulter).

---

## 5. Sécurité et Confiance
Bien que la technologie soit complexe (Blockchain/Smart Contracts), l'UX la rend invisible et rassurante :
*   **Status Animés** : Utilisation de pulsations et de badges pour indiquer que le réseau travaille.
*   **Messages de succès** : Confirmation visuelle forte lors des envois et retraits.
*   **Accessibilité** : Textes en français clair, évitant le jargon technique "crypto" au profit de termes financiers usuels (Virement, Frais, Portefeuille).
