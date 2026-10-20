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

## Classement en ligne et comptes (Firebase)

- Firestore stocke les scores du jour, les fantômes, les réactions, les records et la progression de chacun.
- Chaque appareil a un compte anonyme ; un joueur peut le protéger par un mot de passe (pseudo + mot de passe,
  sans e-mail) pour retrouver sa progression ailleurs. Les pseudos sont uniques (collection `names`).
- La config du projet est dans `index.html` (`FIREBASE_CONFIG`). Sans réseau, le jeu utilise le classement local.
- `main` et `dev` ont des classements séparés (`envs/prod` et `envs/dev`).
- Les règles de sécurité sont dans `firestore.rules` : à recopier dans la console Firebase après chaque modification.
- Dans la console : Authentication > Sign-in method > activer **Anonyme** et **Adresse e-mail/Mot de passe**.
- Mot de passe oublié : Authentication > Users, chercher l'utilisateur (`u…@bousier.game`) et changer son mot de passe.
- Tester en local avec l'émulateur : `npx firebase emulators:start --only auth,firestore --project demo-bousier`.

## Fichiers

- `index.html` : tout le jeu.
- `manifest.webmanifest`, `sw.js`, `icons/` : ce qui rend le jeu installable et jouable hors connexion.
- `vendor/firebase.js` : le SDK Firebase intégré au projet (voir `vendor/README.md`).
- `firestore.rules`, `firebase.json` : règles de sécurité du classement et config de l'émulateur.
