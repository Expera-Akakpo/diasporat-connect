# DiasporaConnect - Phase 2

[![TypeScript](https://img.shields.io/badge/TypeScript-97.1%25-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

## 🚀 Présentation

**DiasporaConnect** est une plateforme web moderne dédiée aux transferts d'argent entre la diaspora et le Bénin.  
Elle vise à réduire les frais de transfert en utilisant la **blockchain** pour limiter les intermédiaires et sécuriser les transactions.

---

## 🎯 Objectif

- Réduire les frais de transfert internationaux  
- Accélérer les transactions  
- Améliorer l’accessibilité via une interface simple  
- Démontrer l’utilisation de la blockchain dans les transferts financiers  

---

## ⚙️ Fonctionnalités Clés

- 🔐 Authentification sécurisée (Passport.js, express-session)  
- 💸 Envoi d’argent (interface expéditeur)  
- 💼 Portefeuille utilisateur (wallet interne)  
- 📲 Retrait simulé (type Mobile Money)  
- 📊 Historique des transactions  
- 💱 Taux de change simulé (API interne)  
- 🎨 Interface moderne et responsive  

---

## 🔗 Intégration Blockchain (Phase 2)

### 🔹 Smart Contract
- Développé en **Solidity**
- Déployé sur le réseau **Sepolia (testnet)**
- Permet l’envoi sécurisé de fonds entre utilisateurs

### 🔹 MetaMask
- Utilisé comme portefeuille blockchain
- Permet :
  - la connexion utilisateur
  - la signature des transactions
  - la validation sécurisée

### 🔹 Fonctionnement

1. L’utilisateur connecte son wallet via MetaMask  
2. Il initie un transfert depuis l’application  
3. MetaMask demande confirmation  
4. La transaction est envoyée à la blockchain  
5. Le smart contract exécute automatiquement le transfert  

>  Les fonds ne sont pas stockés dans MetaMask mais sur la blockchain

---

## 🧠 Architecture Technique

### 🔹 Frontend & Backend
- Next.js 16 (App Router)
- React 18
- TypeScript

### 🔹 UI & Design
- Tailwind CSS
- Radix UI
- Framer Motion
- Lucide React

### 🔹 Base de données
- PostgreSQL
- Drizzle ORM

### 🔹 Validation
- react-hook-form
- zod

---

## 📂 Structure du Projet

```text
src/
├── app/
│   ├── expediteur/
│   ├── wallet/
│   ├── retrait/
│   ├── historique/
│   ├── api/
├── components/
├── hooks/
├── lib/


liens pour le test 👉 https://69f77fd4b2ca116fb3280da3--diaporaconnect.netlify.app/