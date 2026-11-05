# Bousier : consignes pour Claude

Jeu quotidien en pixel art pour des collègues de labo, en un seul fichier HTML (`index.html`, ~6 000 lignes),
avec une page d'administration (`admin.html`). Le propriétaire du projet est Florent.
Lire aussi `README.md` (fonctionnement, Firebase) et `CHANGELOG.md` (historique des versions).

## 0. Les commandes de Florent

| Commande | Ce qu'elle déclenche |
|---|---|
| **« Parlons de Bousier »** | Début de conversation : lire les issues n° 8, 9 et 10 (surtout les derniers commentaires) et le haut de `CHANGELOG.md` ; résumer en 5 lignes maximum où en est le jeu, ce qui est en cours et ce qui attend une décision ; **rappeler ces 4 commandes** ; demander « De quoi on parle aujourd'hui ? » |
| **« Publication sur dev »** (ou « go dev ») | Publier le travail validé sur `dev` (voir §2). |
| **« Publication sur main »** (ou « go main ») | Publier sur `main`, la version des joueurs (voir §2). |
| **« Fin de discussion »** | Noter dans l'issue qui convient tout ce qui a été décidé, mis de côté ou reste à faire (n° 10 aventure, n° 8 sécurité, n° 9 le reste, ou une nouvelle issue pour un nouveau gros chantier) ; mettre à jour ce `CLAUDE.md` si une règle ou l'état du projet a changé ; **publier les changements de `CLAUDE.md` seul sur `dev` et `main`** (exception validée : ce fichier ne change rien au jeu) ; résumer en 3 lignes ce qui a été noté ; **rappeler à Florent de supprimer à la main la branche de la session, en donnant son nom exact** (je ne peux pas supprimer de branche distante). |

Au début de toute conversation sur Bousier, même sans « Parlons de Bousier », rappeler ces 4 commandes en une ligne.

## 1. Règles de travail (à respecter toujours)

**Langue et ton**
- Répondre **en français, simplement**, sans jargon. Phrases courtes, pas de blabla.

**Ne rien faire sans le go de Florent**
- On **discute d'abord**, on propose, on fait une **maquette** (capture d'écran) avant de coder.
- Quand Florent dit « pas d'action », « on en discute », « on en reparlera » : **aucune modification** (ni code, ni commit, ni push, ni publication).
- **Aucun push vers `main`** sans « publication sur main » (ou « go main »). Même chose pour `dev` : attendre « publication sur dev » (ou « go dev »). Seule exception : « fin de discussion » publie les changements du `CLAUDE.md` seul.
  Une question ou une approbation d'une idée n'est pas un go de publication.
- Un go donné pour un contenu ne vaut pas pour un autre : redemander si le contenu change.

**News (nouveautés affichées aux joueurs)**
- **Montrer le texte à Florent avant de publier.** Textes **courts**.
- Si c'est gros, **découper en plusieurs news**.
- **Ne pas spoiler** les nouveaux événements ni les nouvelles météos (« de nouveaux événements surprise »…).
- Les **easter eggs sortent sans news**. Les petits réglages d'affichage aussi, sauf demande.
- Ne jamais écrire dans une annonce que le changement répond à des plaintes de joueurs.

**Contenu du jeu**
- **Ne jamais modifier une dune déjà jouée** : toute évolution des dunes, météos, événements ou trésors doit être datée dans le futur.
- Le **mode survie (La Grande Fuite)** reste **invisible sur `main`** (`SURVIVAL_ON` = dev seulement).
- Les noms des joueurs viennent d'un classement en ligne partagé : ne rien afficher de privé.

**Sécurité**
- La **clé de compte de service Firebase** ne doit **jamais** être collée dans le chat ni dans un fichier : elle va uniquement dans le secret GitHub `FIREBASE_SERVICE_ACCOUNT`.
- `BACKUP_PASSWORD` est gardé par Florent. Ne jamais l'écrire.
- Les **règles Firestore** (`firestore.rules`) sont recopiées à la main par Florent dans la console Firebase : après toute modification, le lui dire clairement et lui donner le fichier complet.
- Les votes des sondages sont **anonymes pour les autres joueurs**, mais **visibles par l'organisateur** dans l'admin : ne pas contourner.

**Dans le dépôt**
- Ne jamais mettre dans le code, les commits, les PR ou les notes le nom ou l'identifiant du modèle utilisé.
- Ne pas créer de PR sans demande explicite.

## 2. Publication

- Branche de travail : celle indiquée par la session (par exemple `ccr-…`). Faire les commits dessus, avec les lignes d'attribution demandées par l'environnement.
- Chaque push sur `dev` ou `main` republie le site automatiquement (`.github/workflows/deploy.yml`, via `gh-pages` : ne pas toucher à cette branche).
- **« go dev »** : `git push -u origin <branche>` puis `git push origin HEAD:dev`.
- **« go main »** : en plus `git push origin HEAD:main` puis `git push origin HEAD:refs/heads/versions/v1.XX` (archive de la version).
- Avant chaque publication :
  1. vérifier la syntaxe des scripts : `node scripts/check-syntax.mjs` (vérifie `index.html` et `admin.html` ; la même vérification tourne automatiquement à chaque push via `.github/workflows/check.yml`, croix rouge si erreur, sans bloquer la publication) ;
  2. tester les écrans touchés dans un navigateur (Playwright, voir §4), **sur téléphone et sur PC** ;
  3. ajouter une entrée en tête de `CHANGELOG.md` (numéro de version, date, liste courte).
- Après un push, vérifier avec `git log --oneline -1 origin/main` (ou `origin/dev`). GitHub Pages peut mettre jusqu'à 10 minutes à servir la nouvelle version.
- Si plusieurs conversations travaillent en parallèle : avant de publier, récupérer la dernière version de `dev`/`main` (`git fetch`) et la fusionner dans sa branche ; ne jamais forcer un push. Ne coder qu'à un seul endroit à la fois (tout le jeu est dans `index.html`).
- Sauvegarde hebdomadaire : `.github/workflows/backup.yml` + `scripts/backup.mjs` (fichier chiffré).

## 3. Architecture

- `index.html` : tout le jeu (dessin sur canvas, écrans en HTML, règles, calendrier des événements).
  - Sprites : `ROWS` (pixels en texte) → `SPR`. Cosmétiques : `COSMETICS` (boules, chapeaux, tenues, traînées, décors, cadres, couleurs, titres).
  - Conditions de déblocage : `UNLOCKS` (`prog`, `text`, `how`, `got`, `secret`). Drapeaux d'objets : `season`, `from`, `gift` (caché tant qu'on ne l'a pas), `devOnly`, `prestige`, `week`.
  - Dune du jour : `dailyConfig(day)` ; météos `WEATHERS` + `NEW_WEATHERS` ; événements `EVENTS` (tirage dans `generateEvents`).
  - Écrans : méthodes `scr_*` de l'objet `App` ; `App.show(nom)` redessine l'écran.
  - Classements : `Leaderboard` (avec cache), envoi des scores dans `Online`.
  - News : tableau `CHANGELOG` (champ `v` = ordre des « non lues », on peut intercaler des numéros décimaux ; `date` = jour d'apparition).
- `admin.html` : tableau de bord de l'organisateur (stats, annonces et sondages, cadeaux, invitations, joueurs).
  Son **calendrier des dunes** recopie le tirage du jeu (météo, trésor, événements) : si on change ces tirages dans `index.html`, mettre à jour l'admin aussi.
- `firestore.rules` : règles de sécurité. `sw.js` : cache hors ligne. `vendor/` : Firebase (bundle reconstruit, `VENDOR_VERSION`).
- `ONLINE_ENV` vaut `dev` ou `prod` selon l'adresse : `main` et `dev` ont des **données séparées** (`envs/prod`, `envs/dev`).
- Firestore : `names`, `invites`, `quotas`, `members`, `config/access` à la racine ; le reste dans `envs/{env}/…` (`days/{jour}/scores`, `players`, `profiles`, `votes`…).
- La police du jeu **n'a pas de lettres accentuées ni de cédille** dans le canvas (écrire « CA GLISSE », pas « ÇA »). Dans le HTML, les accents sont normaux.
- Mode daltonien : variable `CVD`, classe `#app.cvd`. Toute information passant par la couleur doit avoir une alternative (forme, contour).

## 4. Tester

- Playwright est déjà installé : `require(process.env.PW)` avec `PW=$(npm root -g)/playwright`. Ne pas le réinstaller.
- Ouvrir `file:///…/index.html`, fixer la date avec `page.clock.setFixedTime(...)` pour simuler un autre jour (événements, météos, news datées).
- Mettre le jeu en état de test avec `page.evaluate` (créer un profil, remplacer `Online.day`, `Online.records`… par des données de test).
- Vérifier au minimum : un iPhone (`devices['iPhone 12']`), un PC (1280×800), et l'absence d'erreurs (`page.on('pageerror')`).
- L'émulateur Firebase (`npx firebase emulators:start --only auth,firestore --project demo-bousier`) plante au rechargement à chaud des règles : tuer le processus java et le relancer.
- Lire les vraies données du jeu officiel : lectures publiques de l'API REST Firestore (`envs/prod/…`), tant que la phase 1 des règles est active.
- Ranger les scripts et captures de test **hors du dépôt**.

## 5. Où en est le projet (au 4 novembre 2026)

- **Version 1.22 sur `main`** : nouvelles météos spéciales (lundi et vendredi), 6 nouveaux événements, **événements en roulement à partir du 9 novembre** (comme la météo), calendrier des événements dans l'admin.
- **Sur `dev` seulement (v1.23.2)** : le **mode aventure**, qui remplace La Grande Fuite. Tout son suivi est dans l'**issue GitHub n° 10**. Il reste invisible sur `main`.
- **Boutique de la semaine : en pause** (`WEEK_SHOP_FROM = '2099-01-01'` et news correspondante datée 2099). Pour la relancer : remettre un vrai lundi aux deux endroits.
- **Le 20 novembre** : 1 mois de Bousier (gâteau et cadeau, déjà programmés).
- **Idées en discussion, rien de développé** : défis quotidiens variés et nouveau classement en points (mis en pause, à mûrir) ; ligues ; améliorations de l'alarme incendie.
- Le **carnet d'idées** est l'**issue GitHub n° 9** : on y ajoute les idées en commentaire (avec la ligne « Generated by Claude Code » en bas). L'issue n° 8 suit la sécurité (App Check reporté, triche : détails) ; sa liste « à faire » est recopiée dans la partie « 🕵️ Triche » de l'issue n° 9.
- Sécurité : règles Firestore en **phase 1** (lecture ouverte). La phase 2 (lecture réservée aux membres) se fera quand le compteur de « cartes de membre » de l'admin sera presque plein. Point faible connu : la date du téléphone permet de voir la dune du lendemain.
- Accès sur **invitation** (liens, quotas par joueur, parrainage). Le sondage « ouvrir aux proches » a donné une majorité de « non » : on reste entre collègues pour le moment.

## 6. Façon de travailler (pour économiser du temps et des tokens)

- **Une conversation courte par chantier** (« accueil de dev », « volcan de l'aventure »…), fermée par « fin de discussion ». Tout ce qui doit survivre est écrit dans les issues et ce fichier, jamais seulement dans la conversation.
- Coder à **un seul endroit à la fois** ; discuter en parallèle est sans risque.
- Réponses **courtes** par défaut ; listes de 5 idées maximum, sauf demande.
- Maquettes : proposer d'emblée **2 ou 3 variantes** quand c'est un choix ; Florent regroupe ses retours.
- Ne pas répondre à côté pendant un travail en cours : finir, puis traiter le message suivant.

## 7. Habitudes qui plaisent à Florent

- Maquettes d'abord, avec les **vrais scores** quand c'est possible.
- Présenter les choix avec des **avantages / inconvénients** et **donner un avis clair** (« mon conseil : … »).
- Penser aux joueurs moins forts, aux petits écrans et à la lisibilité avant d'ajouter des choses.
- Ne pas ajouter de nouveautés pour en retirer d'autres : garder ce qui existe, adapter plutôt que remplacer.
- Pas de clin d'œil au fait qu'on travaille dans un labo (sauf demande de Florent).
- Les récompenses doivent rester **équitables** entre tous les joueurs, quel que soit leur nombre ou leur niveau.
