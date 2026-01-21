# 📸 Guide pour Placer Vos Photos

## 🎯 Étapes Rapides

Vous avez envoyé **5 superbes photos de motocross**. Voici comment les intégrer au site :

### 1️⃣ Renommez vos 5 photos

Renommez vos photos selon ce mapping :

| **Votre Photo** | **Nouveau Nom** | **Utilisation** |
|-----------------|-----------------|-----------------|
| Photo 1 : Course avec 2 pilotes | `hero-bg.jpg` | Arrière-plan Hero (H1) |
| Photo 2 : Pilote projection de terre | `action1.jpg` | Portfolio - Circuit Cross |
| Photo 3 : Virage serré projection | `action2.jpg` | Portfolio - En Plein Vol |
| Photo 4 : Saut spectaculaire | `action3.jpg` | Portfolio - Vitesse Pure |
| Photo 5 : Pilote sur rocher/montagne | `jordan.jpg` | Section Identité |

### 2️⃣ Photos supplémentaires (optionnelles)

Si vous avez d'autres photos, vous pouvez aussi ajouter :
- `action4.jpg` → Portfolio - Projection
- `bike.jpg` → Section "La Machine Bleue"

*Si vous n'avez pas ces photos, le site réutilisera `action1.jpg` et `action2.jpg`*

### 3️⃣ Placez les photos

Copiez toutes vos photos renommées dans le dossier :
```
the-rider-main/images/
```

### 4️⃣ Structure finale

Votre dossier `images/` devrait ressembler à ça :
```
images/
├── INSTRUCTIONS.txt
├── hero-bg.jpg          ✅ (Photo 1)
├── jordan.jpg           ✅ (Photo 5)
├── action1.jpg          ✅ (Photo 2)
├── action2.jpg          ✅ (Photo 3)
├── action3.jpg          ✅ (Photo 4)
├── action4.jpg          ⭕ (optionnel)
└── bike.jpg             ⭕ (optionnel)
```

---

## 🚀 Commandes Terminal (optionnel)

Si vous voulez utiliser le terminal pour copier vos photos :

```bash
# Naviguez vers votre dossier de téléchargements (ou là où sont vos photos)
cd ~/Downloads

# Copiez et renommez chaque photo
cp photo1.jpg "/Users/admin/DEV AGENCY/DEV/the-rider-main/images/hero-bg.jpg"
cp photo2.jpg "/Users/admin/DEV AGENCY/DEV/the-rider-main/images/action1.jpg"
cp photo3.jpg "/Users/admin/DEV AGENCY/DEV/the-rider-main/images/action2.jpg"
cp photo4.jpg "/Users/admin/DEV AGENCY/DEV/the-rider-main/images/action3.jpg"
cp photo5.jpg "/Users/admin/DEV AGENCY/DEV/the-rider-main/images/jordan.jpg"
```

---

## ✅ Vérification

Une fois les photos placées, ouvrez `index.html` dans votre navigateur :

```bash
cd "/Users/admin/DEV AGENCY/DEV/the-rider-main"
python3 -m http.server 8000
```

Puis allez sur : http://localhost:8000

**Toutes vos photos devraient s'afficher ! 🎉**

---

## 🔄 Mettre à jour sur GitHub

Après avoir placé vos photos, poussez-les sur GitHub :

```bash
git add images/*.jpg
git commit -m "📸 Ajout des photos officielles de Jordan"
git push origin main
```

---

## 📊 Spécifications Techniques

### Formats recommandés
- **Format** : JPG (compression optimale) ou PNG (qualité maximale)
- **Qualité** : Haute résolution

### Dimensions recommandées
- `hero-bg.jpg` : Min 1920x1080px (ratio 16:9)
- `jordan.jpg` : Min 800x1000px (ratio portrait)
- `action1-4.jpg` : Min 1200x800px (ratio paysage)
- `bike.jpg` : Min 1200x800px (ratio paysage)

### Poids des fichiers
- Idéal : 200-500 KB par image (compression JPG qualité 80-85%)
- Maximum : 2 MB par image

---

## 🎨 Optimisation (optionnel)

Si vos photos sont trop lourdes, vous pouvez les optimiser :

### En ligne
- https://tinypng.com
- https://squoosh.app

### Via Terminal (ImageMagick)
```bash
# Installer ImageMagick
brew install imagemagick

# Optimiser une image
convert input.jpg -quality 85 -resize 1920x1080\> output.jpg
```

---

## ❓ Besoin d'Aide ?

Si vous avez des questions ou des problèmes, n'hésitez pas à demander !

**Le site va être magnifique avec vos vraies photos ! 🏍️💨**
