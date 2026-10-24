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
- Chaque joueur entre un pseudo et un mot de passe dès l'accueil (pas d'e-mail : le jeu fabrique une adresse
  technique `u…@bousier.game`). Les pseudos sont uniques (collection `names`) ; pour libérer un pseudo, supprimer `names/{pseudo}`.
- La config du projet est dans `index.html` (`FIREBASE_CONFIG`). Sans réseau, le jeu utilise le classement local.
- `main` et `dev` ont des classements séparés (`envs/prod` et `envs/dev`).
- Les règles de sécurité sont dans `firestore.rules` : à recopier dans la console Firebase après chaque modification.
- Dans la console : Authentication > Sign-in method > activer **Anonyme** et **Adresse e-mail/Mot de passe**.
- Mot de passe oublié : page admin, onglet « Mot de passe oublié » (supprimer le compte dans la console, libérer le pseudo, le joueur recrée son profil, restaurer sa progression).
- Tester en local avec l'émulateur : `npx firebase emulators:start --only auth,firestore --project demo-bousier`.

## Sécurité

- **App Check** (reCAPTCHA v3) : Firebase vérifie que les demandes viennent du jeu. Clé de site dans
  `APPCHECK_SITE_KEY` (`index.html` et `admin.html`) ; `null` = désactivé.
- **Clé Firebase** restreinte au site `zodiacfbo.github.io` dans Google Cloud (APIs et services > Identifiants).
- **Scores** plafonnés à 25 m par les règles Firestore.

## Sauvegarde

Chaque lundi, `.github/workflows/backup.yml` exporte toute la base Firestore (`scripts/backup.mjs`), la chiffre
avec le secret `BACKUP_PASSWORD` et la garde 90 jours dans l'onglet **Actions** (artefact du run).
Secrets GitHub nécessaires : `FIREBASE_SERVICE_ACCOUNT` (clé JSON d'un compte de service Firebase) et `BACKUP_PASSWORD`.
Déchiffrer : `openssl enc -d -aes-256-cbc -pbkdf2 -iter 200000 -in bousier-AAAA-MM-JJ.json.enc -out sauvegarde.json`.
Les comptes (pseudos + mots de passe) restent dans Firebase Authentication et ne sont pas dans la sauvegarde.

## Page admin

`admin.html` (non liée depuis le jeu) : activité, liste des joueurs, cadeaux (pièces, objets), suppression d'un
score du jour, annonce sur l'accueil, mot de passe oublié. Réservée au compte organisateur : son uid est dans
`isAdmin()` (`firestore.rules`) et `ADMIN_UIDS` (`admin.html`).

## Versions

- Chaque version publiée sur `main` est archivée dans une branche `versions/vX.Y`, à ne jamais modifier :
  https://github.com/Zodiacfbo/bousier/branches/all?query=versions
- `CHANGELOG.md` explique ce que chaque version apporte ; le panneau « Quoi de neuf ? » du jeu (`CHANGELOG`
  dans `index.html`) en est le résumé pour les joueurs, validé par l'organisateur avant publication.
- Nouvelle version : compléter `CHANGELOG.md`, publier sur `main`, puis
  `git push origin main:refs/heads/versions/vX.Y`.

## Licence

© 2026 zodiacfbo — tous droits réservés, voir `LICENSE` (les composants tiers gardent leur licence).

## Fichiers

- `index.html` : tout le jeu.
- `manifest.webmanifest`, `sw.js`, `icons/` : ce qui rend le jeu installable et jouable hors connexion.
- `vendor/firebase.js` : le SDK Firebase intégré au projet (voir `vendor/README.md`).
- `fonts/` : police VT323 (licence libre OFL) utilisée seulement pour les chiffres, plus lisibles.
- `firestore.rules`, `firebase.json` : règles de sécurité du classement et config de l'émulateur.
