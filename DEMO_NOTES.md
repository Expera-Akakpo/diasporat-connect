# DÉMONSTRATION PROJET DiasporaConnect

## 🟢 1. Informations générales

**Nom du projet :** DiasporaConnect  
**Équipe :** groupe 17 
**Hackathon :** miabehackathon  
**Date :** dimenche 03/05/2026

## 🎯 2. Objectif du projet

Le projet vise à réduire les frais de transfert d'argent entre la diaspora et le Bénin en utilisant la blockchain pour limiter les intermédiaires et sécuriser les transactions.

## 👥 3. Acteurs simulés

Dans notre démonstration, nous avons utilisé les acteurs suivants :

- **Expéditeur (Diaspora)** : envoie de l'argent via l'application
- **Destinataire (Bénin)** : reçoit les fonds et peut les retirer

## 🔁 4. Scénario de démonstration

Voici le déroulement complet de la démonstration :

1. L'utilisateur accède à l'application
2. Il connecte son portefeuille via MetaMask
3. Il saisit un montant à envoyer
4. Il initie la transaction
5. MetaMask s'ouvre pour validation
6. L'utilisateur confirme la transaction
7. La transaction est envoyée sur la blockchain
8. Une confirmation est affichée
9. Le destinataire voit la réception (simulation ou affichage)

## ⚙️ 5. Architecture technique

Notre solution repose sur trois composants principaux :

### 🔹 Frontend
- **Technologie :** Next.js / React
- **Rôle :** interface utilisateur pour envoyer et recevoir

### 🔹 Blockchain
- **Réseau utilisé :** Sepolia Testnet
- **Smart contract :** permet de gérer les transferts

### 🔹 Wallet
- **Utilisation de MetaMask pour :**
  - connecter l'utilisateur
  - signer les transactions

## 🔐 6. Smart Contract

Le smart contract permet :
- de recevoir les fonds
- d'exécuter automatiquement les transferts
- de garantir la transparence

## 📱 7. Interfaces (captures)

👉 Ajouter ici des captures d'écran :

- écran d'accueil
- écran d'envoi
- écran de réception

## ⚠️ 8. Hypothèses et limitations

Pour cette version prototype :

- Le Mobile Money est simulé
- La conversion USD → FCFA est simulée
- L'utilisation de MetaMask est obligatoire

## 🚀 9. Vision finale du produit

Dans une version complète :

- les utilisateurs n'auront pas besoin de MetaMask
- un portefeuille sera généré automatiquement
- intégration réelle avec Mobile Money
- conversion automatique en FCFA

## 📊 10. Impact attendu

- réduction des frais de transfert
- accès simplifié pour les utilisateurs
- amélioration du pouvoir d'achat

## ✅ 11. Conclusion

Ce prototype démontre la faisabilité d'une solution basée sur la blockchain pour améliorer les transferts d'argent entre la diaspora et le Bénin.

---

## 📋 Notes techniques supplémentaires

### Technologies utilisées :
- **Frontend :** Next.js 16, React 18, TypeScript
- **Styling :** Tailwind CSS
- **Blockchain :** Ethereum (Sepolia testnet)
- **Smart Contract :** Solidity
- **Wallet :** MetaMask

### Fonctionnalités implémentées :
- Interface responsive (mobile/desktop)
- Connexion utilisateur avec comptes de démo
- Simulation de transferts blockchain
- Interface d'expéditeur et destinataire
- Historique des transactions

### Déploiement :
- Hébergement : Netlify
- Repository : GitHub
- URL de démo : [À définir après déploiement]