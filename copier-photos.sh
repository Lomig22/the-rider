#!/bin/bash

# 📸 Script pour copier automatiquement vos 5 photos dans le bon dossier
# Usage: ./copier-photos.sh /chemin/vers/votre/dossier/photos

echo "🏍️  THE RIDER - Script de copie des photos"
echo "=========================================="
echo ""

# Vérifier si un dossier source est fourni
if [ -z "$1" ]; then
    echo "❌ Erreur : Vous devez spécifier le dossier contenant vos photos"
    echo ""
    echo "Usage:"
    echo "  ./copier-photos.sh /chemin/vers/vos/photos"
    echo ""
    echo "Exemple:"
    echo "  ./copier-photos.sh ~/Downloads"
    exit 1
fi

SOURCE_DIR="$1"
TARGET_DIR="./images"

echo "📁 Dossier source: $SOURCE_DIR"
echo "📁 Dossier cible: $TARGET_DIR"
echo ""

# Créer le dossier images s'il n'existe pas
mkdir -p "$TARGET_DIR"

# Liste des fichiers à copier
echo "🔍 Recherche des photos dans $SOURCE_DIR..."
echo ""

# Afficher les fichiers image disponibles
echo "📸 Photos disponibles:"
ls -1 "$SOURCE_DIR"/*.{jpg,jpeg,JPG,JPEG,png,PNG} 2>/dev/null | cat -n

echo ""
echo "Copiez maintenant vos photos en utilisant leur numéro:"
echo ""
echo "1️⃣  Photo du HERO (course avec 2 pilotes)"
read -p "   Entrez le numéro de la photo: " num1
FILE1=$(ls -1 "$SOURCE_DIR"/*.{jpg,jpeg,JPG,JPEG,png,PNG} 2>/dev/null | sed -n "${num1}p")
if [ -n "$FILE1" ]; then
    cp "$FILE1" "$TARGET_DIR/hero-bg.jpg"
    echo "   ✅ Copié vers hero-bg.jpg"
fi

echo ""
echo "2️⃣  Photo de JORDAN (pilote sur rocher/montagne)"
read -p "   Entrez le numéro de la photo: " num2
FILE2=$(ls -1 "$SOURCE_DIR"/*.{jpg,jpeg,JPG,JPEG,png,PNG} 2>/dev/null | sed -n "${num2}p")
if [ -n "$FILE2" ]; then
    cp "$FILE2" "$TARGET_DIR/jordan.jpg"
    echo "   ✅ Copié vers jordan.jpg"
fi

echo ""
echo "3️⃣  Photo ACTION 1 (projection de terre)"
read -p "   Entrez le numéro de la photo: " num3
FILE3=$(ls -1 "$SOURCE_DIR"/*.{jpg,jpeg,JPG,JPEG,png,PNG} 2>/dev/null | sed -n "${num3}p")
if [ -n "$FILE3" ]; then
    cp "$FILE3" "$TARGET_DIR/action1.jpg"
    echo "   ✅ Copié vers action1.jpg"
fi

echo ""
echo "4️⃣  Photo ACTION 2 (virage serré)"
read -p "   Entrez le numéro de la photo: " num4
FILE4=$(ls -1 "$SOURCE_DIR"/*.{jpg,jpeg,JPG,JPEG,png,PNG} 2>/dev/null | sed -n "${num4}p")
if [ -n "$FILE4" ]; then
    cp "$FILE4" "$TARGET_DIR/action2.jpg"
    echo "   ✅ Copié vers action2.jpg"
fi

echo ""
echo "5️⃣  Photo ACTION 3 (saut spectaculaire)"
read -p "   Entrez le numéro de la photo: " num5
FILE5=$(ls -1 "$SOURCE_DIR"/*.{jpg,jpeg,JPG,JPEG,png,PNG} 2>/dev/null | sed -n "${num5}p")
if [ -n "$FILE5" ]; then
    cp "$FILE5" "$TARGET_DIR/action3.jpg"
    echo "   ✅ Copié vers action3.jpg"
fi

echo ""
echo "6️⃣  Photo ACTION 4 (optionnel)"
read -p "   Entrez le numéro de la photo (ou Entrée pour passer): " num6
if [ -n "$num6" ]; then
    FILE6=$(ls -1 "$SOURCE_DIR"/*.{jpg,jpeg,JPG,JPEG,png,PNG} 2>/dev/null | sed -n "${num6}p")
    if [ -n "$FILE6" ]; then
        cp "$FILE6" "$TARGET_DIR/action4.jpg"
        echo "   ✅ Copié vers action4.jpg"
    fi
else
    # Dupliquer action1 si pas de action4
    cp "$TARGET_DIR/action1.jpg" "$TARGET_DIR/action4.jpg" 2>/dev/null
    echo "   ℹ️  action4.jpg = copie de action1.jpg"
fi

echo ""
echo "7️⃣  Photo BIKE (optionnel)"
read -p "   Entrez le numéro de la photo (ou Entrée pour passer): " num7
if [ -n "$num7" ]; then
    FILE7=$(ls -1 "$SOURCE_DIR"/*.{jpg,jpeg,JPG,JPEG,png,PNG} 2>/dev/null | sed -n "${num7}p")
    if [ -n "$FILE7" ]; then
        cp "$FILE7" "$TARGET_DIR/bike.jpg"
        echo "   ✅ Copié vers bike.jpg"
    fi
else
    # Dupliquer action2 si pas de bike
    cp "$TARGET_DIR/action2.jpg" "$TARGET_DIR/bike.jpg" 2>/dev/null
    echo "   ℹ️  bike.jpg = copie de action2.jpg"
fi

echo ""
echo "=========================================="
echo "✅ Copie terminée !"
echo ""
echo "📊 Résumé des fichiers:"
ls -lh "$TARGET_DIR"/*.jpg 2>/dev/null

echo ""
echo "🚀 Prochaines étapes:"
echo "   1. Ouvrez index.html dans votre navigateur"
echo "   2. Vérifiez que toutes les images s'affichent"
echo "   3. Pushez sur GitHub avec: git add images/ && git commit -m '📸 Photos' && git push"
echo ""
