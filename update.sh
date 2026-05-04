#!/bin/bash
# Met à jour la landing page depuis un export Claude Design
# Usage: ./update.sh [chemin/vers/export.zip]
# Sans argument : prend le dernier ZIP "Meetnoo*Figma*Complet*.zip" dans ~/Downloads

set -e

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$REPO_DIR"

# 1. Trouve le ZIP
if [ -n "$1" ]; then
    ZIP_PATH="$1"
else
    ZIP_PATH=$(ls -t ~/Downloads/Meetnoo*Figma*Complet*.zip 2>/dev/null | head -1)
    if [ -z "$ZIP_PATH" ]; then
        echo "❌ Aucun ZIP trouvé dans ~/Downloads/. Précise le chemin : ./update.sh /chemin/export.zip"
        exit 1
    fi
fi

echo "📦 Source : $ZIP_PATH"

# 2. Décompresse par-dessus
unzip -o "$ZIP_PATH" -x "*.zip" > /dev/null
echo "✅ Fichiers extraits"

# 3. Copie Landing Page.html → index.html
if [ -f "Landing Page.html" ]; then
    cp "Landing Page.html" index.html
    echo "✅ index.html mis à jour"
fi

# 4. Git diff résumé
CHANGED=$(git status --porcelain | wc -l | tr -d ' ')
if [ "$CHANGED" = "0" ]; then
    echo "ℹ️  Aucun changement détecté."
    exit 0
fi
echo "📝 $CHANGED fichier(s) modifié(s)"

# 5. Commit + push
COMMIT_MSG="${2:-Update from Claude Design — $(date +%Y-%m-%d)}"
git add .
git commit -m "$COMMIT_MSG"
git push origin main

echo ""
echo "🚀 Push effectué — Vercel redéploie automatiquement"
echo "   Suivi : https://vercel.com/contact-8389s-projects/meetnoo-landing"
echo "   URL    : https://meetnoo-landing-n86v9aajr-contact-8389s-projects.vercel.app"
