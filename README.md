# Bousier

Petit jeu vidéo en pixel art, en un seul fichier HTML, installable sur téléphone (PWA).

## Jouer

- **Version officielle** (branche `main`) : https://zodiacfbo.github.io/bousier/
- **Version de test** (branche `dev`) : https://zodiacfbo.github.io/bousier/dev/

Pour l'installer comme une appli :
- **Android** (Chrome) : menu ⋮ → « Installer l'application ».
- **iPhone** (Safari) : bouton Partager → « Sur l'écran d'accueil ».

## Fonctionnement

- On travaille sur `dev`, on teste sur la version de test, puis on passe `dev` dans `main`.
- Chaque push sur `main` ou `dev` republie le site automatiquement (`.github/workflows/deploy.yml`), via la branche `gh-pages` qu'il ne faut pas modifier à la main.
- La version de test a sa propre sauvegarde, séparée de la version officielle.

## Fichiers

- `index.html` : tout le jeu.
- `manifest.webmanifest`, `sw.js`, `icons/` : ce qui rend le jeu installable et jouable hors connexion.
