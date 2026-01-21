# 📸 Vos Photos de Motocross

## 🎯 Placement Rapide

Vous avez **5 photos de motocross** à placer ici. Voici les noms exacts à utiliser :

### ✅ Photos Obligatoires (5)

```
images/
├── hero-bg.jpg    → Photo 1 : Course avec 2 pilotes (fond du Hero)
├── jordan.jpg     → Photo 5 : Pilote sur rocher/montagne (Section Identité)
├── action1.jpg    → Photo 2 : Projection de terre en virage
├── action2.jpg    → Photo 3 : Virage serré avec projection
└── action3.jpg    → Photo 4 : Saut spectaculaire en compétition
```

### ⭕ Photos Optionnelles (2)

```
├── action4.jpg    → Autre photo d'action (Portfolio)
└── bike.jpg       → Photo de la moto (Section Bike)
```

*Si vous ne les avez pas, le site réutilisera automatiquement action1.jpg et action2.jpg*

---

## 🚀 Méthode 1 : Copie Automatique (Recommandé)

Utilisez le script automatique depuis la racine du projet :

```bash
# Retournez à la racine du projet
cd "/Users/admin/DEV AGENCY/DEV/the-rider-main"

# Lancez le script (remplacez par le chemin de vos photos)
./copier-photos.sh ~/Downloads
```

Le script vous guidera photo par photo ! 🎉

---

## 📝 Méthode 2 : Copie Manuelle

### Option A : Via le Finder (macOS)

1. Ouvrez le Finder
2. Allez dans le dossier où sont vos 5 photos
3. Renommez-les selon les noms ci-dessus
4. Copiez-les dans : `/Users/admin/DEV AGENCY/DEV/the-rider-main/images/`

### Option B : Via le Terminal

```bash
# Naviguez vers le dossier contenant vos photos
cd ~/Downloads  # ou autre dossier

# Copiez chaque photo avec le bon nom
cp votre-photo-1.jpg "/Users/admin/DEV AGENCY/DEV/the-rider-main/images/hero-bg.jpg"
cp votre-photo-2.jpg "/Users/admin/DEV AGENCY/DEV/the-rider-main/images/action1.jpg"
cp votre-photo-3.jpg "/Users/admin/DEV AGENCY/DEV/the-rider-main/images/action2.jpg"
cp votre-photo-4.jpg "/Users/admin/DEV AGENCY/DEV/the-rider-main/images/action3.jpg"
cp votre-photo-5.jpg "/Users/admin/DEV AGENCY/DEV/the-rider-main/images/jordan.jpg"
```

---

## ✅ Vérification

Une fois vos photos copiées, vérifiez :

```bash
# Listez les fichiers
ls -lh "/Users/admin/DEV AGENCY/DEV/the-rider-main/images/"

# Vous devriez voir :
# hero-bg.jpg
# jordan.jpg
# action1.jpg
# action2.jpg
# action3.jpg
# (+ action4.jpg et bike.jpg si ajoutés)
```

---

## 🌐 Testez le Site

Ouvrez le site dans votre navigateur :

```bash
cd "/Users/admin/DEV AGENCY/DEV/the-rider-main"
python3 -m http.server 8000
```

Puis allez sur : **http://localhost:8000**

---

## 📤 Poussez sur GitHub

Une fois satisfait :

```bash
cd "/Users/admin/DEV AGENCY/DEV/the-rider-main"
git add images/*.jpg
git commit -m "📸 Ajout des photos officielles de Jordan"
git push origin main
```

---

## 📊 Spécifications des Photos

| Photo | Taille Min | Ratio | Format |
|-------|-----------|-------|---------|
| `hero-bg.jpg` | 1920x1080 | 16:9 | JPG/PNG |
| `jordan.jpg` | 800x1000 | Portrait | JPG/PNG |
| `action*.jpg` | 1200x800 | Paysage | JPG/PNG |
| `bike.jpg` | 1200x800 | Paysage | JPG/PNG |

---

## 💡 Conseils

1. **Compression** : Gardez vos photos sous 500 KB pour un chargement rapide
2. **Qualité** : JPG qualité 80-85% est parfait
3. **Optimisation** : Utilisez https://tinypng.com si nécessaire

---

**🏍️ Le site va être incroyable avec vos vraies photos !**
