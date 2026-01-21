# 🏍️ THE RIDER - Site Vitrine Jordan Motocross

Un site web one-page vitrine ultra moderne pour Jordan, pilote motocross professionnel. Conçu pour inspirer, performer et attirer des sponsors.

![THE RIDER](https://img.shields.io/badge/THE_RIDER-Performance-0066FF?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge)

## 🎯 Objectif

Mettre en valeur les performances sportives de Jordan à travers un portfolio visuel puissant qui inspire la confiance, le défi et l'adrénaline.

## 🎨 Direction Artistique

- **Couleur dominante** : BLEU (#0066FF - en lien avec la moto)
- **Contrastes forts** : Bleu / Noir / Blanc
- **Univers** : Motocross, défi, performance, engagement, dépassement de soi
- **Ton** : Audacieux, inspirant, compétitif, professionnel

## 🏗️ Stack Technique

- **Vite 5** - Build tool ultra-rapide
- **React 18** - Library UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling moderne et utility-first
- **Framer Motion** - Animations fluides et dynamiques
- **React Icons** - Bibliothèque d'icônes
- **Responsive** - Mobile-first design
- **SEO Optimized** - Métadonnées et structure sémantique

## 🧱 Structure du Site

### 1. 🚀 Hero Section
- Impact visuel maximal avec image plein écran
- Titre "THE RIDER" avec effet gradient bleu
- Sous-titre : "Performance. Défi. Dépassement."
- 2 CTA : "Découvrir le Rider" + "Devenir Sponsor"
- Animation d'entrée dynamique
- Indicateur de scroll animé

### 2. 👤 Identité du Rider
- Photo du pilote avec effet de bordure bleue
- Storytelling engageant sur Jordan
- 3 valeurs clés : Mental 💪 / Discipline 🎯 / Ambition 🚀
- Animations au scroll

### 3. 📊 Performances & Stats
- 4 cartes animées avec statistiques :
  - 8+ années de pratique
  - 45+ compétitions
  - 120+ circuits parcourus
  - Top 10 classement national
- Objectif 2026 mis en avant
- Effets hover interactifs

### 4. 📸 Portfolio Action
- Galerie de 6 images dynamiques
- Catégories : Action, Saut, Racing, Technique, Machine, Compétition
- Effets hover avec overlays et bordures bleues
- Images optimisées depuis Unsplash

### 5. 🏍️ La Machine Bleue
- Mise en valeur de la moto de course
- 4 specs techniques :
  - Puissance : 450cc
  - Vitesse Max : 180 km/h
  - Poids : 108 kg
  - Transmission : 5 vitesses
- Features premium listées
- Effet glow animé

### 6. 🤝 Pourquoi Devenir Sponsor
- 4 arguments de partenariat :
  - Visibilité Maximale
  - Image de Performance
  - Partenariat Long Terme
  - ROI Mesurable
- CTA fort : "Contactez-nous Maintenant"
- Cards avec icônes rotatives au hover

### 7. 📧 Contact / Sponsoring
- Formulaire complet :
  - Nom
  - Entreprise
  - Email
  - Message
- Validation intégrée
- Design moderne avec effets glow
- Footer avec copyright

## 🚀 Installation & Lancement

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Étapes

1. **Cloner le projet**
```bash
git clone <repo-url>
cd the-rider-main
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:5173
```

Le serveur se lance en quelques millisecondes grâce à Vite ! ⚡

## 📦 Scripts Disponibles

```bash
npm run dev      # Lance le serveur de développement (port 5173)
npm run build    # Compile le projet pour la production
npm run preview  # Prévisualise le build de production
```

## 🎥 Fonctionnalités Principales

### ✨ Animations
- ✅ Scroll fluide entre sections (smooth scroll)
- ✅ Animations d'apparition au scroll (Framer Motion)
- ✅ Transitions rapides (effet vitesse)
- ✅ Effets hover dynamiques sur tous les éléments interactifs
- ✅ Animations de rotation et de scale
- ✅ Glow effects sur les CTA

### 📱 Responsive Design
- ✅ Mobile-first approach
- ✅ Breakpoints optimisés : Mobile < 768px, Tablet 768-1024px, Desktop > 1024px
- ✅ Menu adaptatif
- ✅ Images responsive

### ⚡ Performance
- ✅ Chargement ultra-rapide avec Vite
- ✅ Lazy loading des images
- ✅ Optimisation des animations
- ✅ Code splitting automatique
- ✅ Build optimisé pour production

### 🎯 UX/UI
- ✅ Navigation fixe avec effet au scroll
- ✅ Indicateurs visuels clairs
- ✅ Feedback sur toutes les interactions
- ✅ Contrastes élevés pour lisibilité
- ✅ Call-to-actions visibles et engageants

## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans `tailwind.config.ts` et dans `src/index.css` :

```css
/* Couleurs principales */
#0066FF - Bleu principal (rider-blue)
#003D99 - Bleu foncé (rider-darkBlue)
#4D94FF - Bleu clair (rider-lightBlue)

/* Gradients */
.gradient-blue - Gradient bleu principal
.gradient-text - Gradient pour les titres
.gradient-overlay - Overlay sur les images
```

### Images

Les images utilisent actuellement Unsplash. Pour utiliser vos propres images :

1. Placez vos images dans `public/images/`
2. Remplacez les URLs dans les composants situés dans `src/components/` :
   - `HeroSection.tsx` - Image hero
   - `IdentitySection.tsx` - Photo du rider
   - `PortfolioSection.tsx` - Galerie (6 images)
   - `BikeSection.tsx` - Photo de la moto

### Contenu

Modifiez le contenu directement dans les composants :

```
src/
├── components/
│   ├── Navigation.tsx          # Menu et navigation
│   ├── HeroSection.tsx         # Section hero
│   ├── IdentitySection.tsx     # Identité du rider
│   ├── PerformanceSection.tsx  # Stats et performances
│   ├── PortfolioSection.tsx    # Galerie d'images
│   ├── BikeSection.tsx         # La moto
│   ├── SponsorSection.tsx      # Arguments sponsors
│   └── ContactSection.tsx      # Formulaire de contact
├── App.tsx                     # Composant principal
└── index.css                   # Styles globaux
```

## 🌐 Déploiement

### Vercel (Recommandé) ⚡

1. Push le code sur GitHub
2. Connectez le repo à [Vercel](https://vercel.com)
3. Configuration automatique détectée
4. Déploiement automatique !

### Netlify

```bash
npm run build
# Déployez le dossier 'dist'
```

### Autres plateformes

```bash
npm run build
# Le build se trouve dans le dossier 'dist'
npm run preview  # Pour tester localement
```

## 🔧 Configuration

### Vite

Configuration dans `vite.config.ts` :
- Plugin React
- Alias de chemin (@)
- Optimisations

### Tailwind

Configuration dans `tailwind.config.ts` :
- Couleurs personnalisées
- Animations custom
- Extensions de thème

### TypeScript

Configuration dans `tsconfig.json` :
- Mode strict activé
- Chemins d'alias
- Optimisations du bundler

## 📊 Structure du Projet

```
the-rider-main/
├── public/              # Fichiers statiques
├── src/
│   ├── components/      # Composants React
│   ├── App.tsx         # Composant racine
│   ├── main.tsx        # Point d'entrée
│   └── index.css       # Styles globaux
├── index.html          # Template HTML
├── tailwind.config.ts  # Config Tailwind
├── vite.config.ts      # Config Vite
├── tsconfig.json       # Config TypeScript
└── package.json        # Dépendances
```

## 🐛 Troubleshooting

### Le serveur ne démarre pas
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Les images ne se chargent pas
- Vérifiez votre connexion internet (les images viennent de Unsplash)
- Remplacez par vos propres images locales

### Les animations sont saccadées
- Vérifiez que vous utilisez un navigateur moderne
- Désactivez les outils de développement
- Réduisez les animations dans `prefers-reduced-motion`

## 📄 License

© 2026 THE RIDER - Jordan. Tous droits réservés.

## 🤝 Contact

Pour toute question ou demande de sponsoring, utilisez le formulaire de contact sur le site.

---

<div align="center">

**Performance • Défi • Dépassement**

🏍️ **THE RIDER** 🏍️

*Créé avec ❤️ et ⚡ Vite*

</div>
