# 🏍️ THE RIDER - Site Vitrine Jordan Motocross

Un site web one-page vitrine **HTML pur** ultra moderne pour Jordan, pilote motocross professionnel. Conçu pour inspirer, performer et attirer des sponsors.

![THE RIDER](https://img.shields.io/badge/THE_RIDER-Performance-0066FF?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🎯 Objectif

Mettre en valeur les performances sportives de Jordan à travers un portfolio visuel puissant qui inspire la confiance, le défi et l'adrénaline.

## 🏗️ Stack Technique

- **HTML5** - Structure sémantique pure
- **CSS3** - Styling moderne avec animations
- **JavaScript Vanille** - Interactions et animations fluides
- **0 dépendances** - Site 100% autonome
- **Responsive** - Mobile-first design
- **SEO Optimized** - Métadonnées et structure

## 🎨 Direction Artistique

- **Couleur dominante** : BLEU (#0066FF - en lien avec la moto)
- **Contrastes forts** : Bleu / Noir / Blanc
- **Univers** : Motocross, défi, performance, engagement, dépassement de soi
- **Ton** : Audacieux, inspirant, compétitif, professionnel

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
- Compteurs animés
- Objectif 2026 mis en avant

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
- Effet glow animé pulsant

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
- Validation HTML5 intégrée
- Design moderne avec effets glow
- Footer avec copyright

## 🚀 Installation & Lancement

### Méthode 1 : Ouvrir directement

Simplement ouvrir le fichier `index.html` dans votre navigateur !

```bash
# Ouvrir dans le navigateur par défaut
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### Méthode 2 : Serveur local (recommandé)

Pour éviter les problèmes CORS avec les images externes :

**Avec Python :**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Avec Node.js :**
```bash
# Installer http-server globalement
npm install -g http-server

# Lancer le serveur
http-server -p 8000
```

**Avec PHP :**
```bash
php -S localhost:8000
```

Puis ouvrez : `http://localhost:8000`

### Méthode 3 : Extension VSCode

Utilisez l'extension **Live Server** dans VSCode :
1. Installez "Live Server" depuis les extensions
2. Clic droit sur `index.html`
3. Sélectionnez "Open with Live Server"

## 📦 Structure du Projet

```
the-rider-main/
├── index.html          # Structure HTML complète
├── style.css           # Tous les styles CSS
├── script.js           # JavaScript pour animations
└── README.md           # Documentation
```

**C'est tout ! Seulement 3 fichiers.** ⚡

## 🎥 Fonctionnalités

### ✨ Animations
- ✅ Scroll fluide entre sections (smooth scroll)
- ✅ Animations d'apparition au scroll (Intersection Observer)
- ✅ Compteurs animés sur les stats
- ✅ Effets hover dynamiques partout
- ✅ Parallax léger sur le hero
- ✅ Glow effects pulsants
- ✅ Rotations des icônes au hover

### 📱 Responsive Design
- ✅ Mobile-first approach
- ✅ Breakpoints : Mobile < 768px, Tablet 768-1024px, Desktop > 1024px
- ✅ Menu adaptatif
- ✅ Images responsive
- ✅ Grilles CSS adaptatives

### ⚡ Performance
- ✅ Chargement ultra-rapide (pas de build)
- ✅ Lazy loading des images
- ✅ Debouncing des événements scroll
- ✅ Intersection Observer pour animations
- ✅ CSS optimisé avec variables
- ✅ JavaScript vanille (pas de framework lourd)

### 🎯 UX/UI
- ✅ Navigation fixe avec effet au scroll
- ✅ Indicateurs visuels clairs
- ✅ Feedback sur toutes les interactions
- ✅ Contrastes élevés pour lisibilité
- ✅ Call-to-actions visibles et engageants
- ✅ Formulaire avec validation HTML5

## 🎨 Personnalisation

### Couleurs

Modifier les variables CSS dans `style.css` :

```css
:root {
    --color-primary: #0066FF;         /* Bleu principal */
    --color-primary-dark: #003D99;    /* Bleu foncé */
    --color-primary-light: #4D94FF;   /* Bleu clair */
    /* ... */
}
```

### Images

Remplacez les URLs Unsplash dans `index.html` :

```html
<!-- Exemple : Hero Section -->
<div class="hero-bg" style="background-image: url('VOTRE_IMAGE.jpg')"></div>

<!-- Portfolio -->
<img src="VOTRE_IMAGE.jpg" alt="Description">
```

**Conseil** : Placez vos images dans un dossier `images/` et utilisez des chemins relatifs.

### Textes

Tous les textes sont directement dans `index.html`. Modifiez-les selon vos besoins :
- Titres
- Descriptions
- Stats (années, compétitions...)
- Specs de la moto
- Arguments sponsors

### Animations

Ajustez les animations dans `style.css` :

```css
/* Durées d'animation */
--transition-fast: 0.2s ease;
--transition-normal: 0.3s ease;
--transition-slow: 0.6s ease;
```

## 🌐 Déploiement

### Netlify (Recommandé) ⚡

1. **Via Drag & Drop :**
   - Allez sur [netlify.com/drop](https://app.netlify.com/drop)
   - Glissez-déposez vos 3 fichiers
   - C'est en ligne ! 🎉

2. **Via Git :**
   ```bash
   # Connectez votre repo GitHub
   # Netlify détecte automatiquement le site statique
   ```

### GitHub Pages

```bash
# Push sur GitHub
git add .
git commit -m "Site HTML pur THE RIDER"
git push origin main

# Dans les paramètres du repo :
# Settings > Pages > Source : main branch
```

### Vercel

```bash
# Installation CLI
npm i -g vercel

# Déploiement
vercel --prod
```

### Hébergement classique

Uploadez simplement les 3 fichiers sur votre serveur FTP :
- `index.html`
- `style.css`
- `script.js`

## 🔧 Fonctionnalités JavaScript

### Navigation
- Scroll smooth automatique
- Navbar qui change au scroll
- Menu mobile (à implémenter si besoin)
- Active section highlighting

### Animations
- Intersection Observer pour animations au scroll
- Compteurs animés sur les stats
- Parallax sur le hero
- Hover effects dynamiques

### Formulaire
- Validation HTML5
- Message de confirmation
- Reset après envoi
- Console.log des données (à remplacer par votre backend)

## 🐛 Troubleshooting

### Les images ne se chargent pas
- Vérifiez votre connexion internet (images Unsplash)
- Utilisez un serveur local au lieu d'ouvrir le fichier directement
- Remplacez par vos propres images locales

### Les animations ne fonctionnent pas
- Vérifiez que JavaScript est activé
- Utilisez un navigateur moderne (Chrome, Firefox, Safari, Edge)
- Ouvrez la console (F12) pour voir les erreurs

### Le formulaire ne fonctionne pas
- Le formulaire est configuré en mode demo (alert + console.log)
- Pour l'utiliser en production, ajoutez un backend ou service :
  - Formspree
  - EmailJS
  - Netlify Forms
  - Custom backend

## 📊 Compatibilité Navigateurs

✅ Chrome 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Edge 90+  
✅ Opera 76+

## 🚀 Optimisations Possibles

### Images
- Compresser les images avec TinyPNG
- Convertir en WebP pour meilleur poids
- Ajouter des images locales au lieu d'Unsplash

### Performance
- Minifier CSS et JS pour production
- Ajouter un Service Worker pour PWA
- Implémenter le lazy loading natif

### SEO
- Ajouter un sitemap.xml
- Ajouter robots.txt
- Optimiser les balises meta
- Ajouter Schema.org markup

## 📄 License

© 2026 THE RIDER - Jordan. Tous droits réservés.

## 🤝 Contact

Pour toute question ou demande de sponsoring, utilisez le formulaire de contact sur le site.

---

<div align="center">

**Performance • Défi • Dépassement**

🏍️ **THE RIDER** 🏍️

*Créé avec ❤️ en HTML/CSS/JS pur*

**Aucune dépendance • Aucun build • Juste 3 fichiers**

</div>

---

## 🎓 Ce que vous apprendrez en étudiant ce code

- ✅ Structure HTML5 sémantique
- ✅ CSS Grid et Flexbox modernes
- ✅ Variables CSS (Custom Properties)
- ✅ Animations CSS et JavaScript
- ✅ Intersection Observer API
- ✅ Smooth scrolling
- ✅ Responsive design
- ✅ Performance web
- ✅ JavaScript vanille moderne

**Code propre, commenté et éducatif !** 📚
