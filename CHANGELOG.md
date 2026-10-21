# Journal des versions de Bousier

Chaque version est archivée sur GitHub dans une branche `versions/vX.Y`
(https://github.com/Zodiacfbo/bousier/branches/all?query=versions) : on peut y consulter
et télécharger le jeu tel qu'il était (bouton « Code » > « Download ZIP »).
Le panneau « Quoi de neuf ? » du jeu en est la version courte, pour les joueurs.

---

## v1.8.2 — Corrections (21 octobre 2026)
- Noms et icônes sans doublons : badge « Premier terrier », chapeau « Couronne de géant »,
  badge 🥇 Roi Bousier (👑 reste au champion de la semaine), badge 🌟 Journée parfaite.
- Badge Roi Bousier attribué le lendemain, d'après le classement final de la veille.
- Quête de vitesse : il faut rentrer dans le terrier dans le temps imparti.
- « (hors ligne) » affiché à côté du rang quand le classement en ligne n'est pas joignable.
- Phrase d'explication sous l'onglet Records.
- Suppression du bouton « Partager mon résultat ».
- Page admin : le nombre de parties jouées est calculé correctement.

## v1.8.1 — Classement de la semaine plus lisible (21 octobre 2026)
- La colonne des jours affiche « 2/3 », « 3/3 »… (scores qui comptent sur 3), en vert une fois les 3 atteints.

## v1.8 — Bouton Nouveautés (21 octobre 2026)
- 📰 Bouton Nouveautés en haut de l'accueil, avec une pastille indiquant les mises à jour non lues
  (remplace le grand panneau « Quoi de neuf ? »).
- Pastille sur 💡 quand l'organisateur change l'état d'une idée envoyée.

## v1.7 — Classement de la semaine (21 octobre 2026)
- 🏆 La semaine compte la somme des 3 meilleurs jours de chacun (au lieu de tous les jours joués).
  S'applique aussi à la couronne du champion et au classement Équipes.

## v1.6.1 — Mises à jour immédiates (21 octobre 2026)
- Le jeu vérifie à chaque ouverture s'il existe une version plus récente : les nouveautés arrivent
  dès la première réouverture, sans attendre (hors connexion, rien ne change).

## v1.6 — Nouveaux titres du jour (21 octobre 2026)
- 🎯 Dans le mille (rentré le plus au centre du terrier), 🙈 Raté de peu (terrier raté de moins loin),
  🕳️ Le terrier, c'est pour les autres (le plus de terriers ratés, 2 minimum).
- Calculés sur les 3 essais du jour de chacun ; 7 titres au total.

## v1.5 — Contour rouge (21 octobre 2026)
- 🔴 Les objets encore trop gros pour la boule sont entourés de rouge quand ils arrivent devant elle ;
  le contour disparaît dès qu'on peut les manger. Phrase correspondante dans le tutoriel.
- En coulisses : mode « La Grande Fuite » (survie) présent mais désactivé sur la version officielle,
  en test sur la version dev.

## v1.4 — Déconnexion et version de test privée (21 octobre 2026)
- 🚪 Bouton « Se déconnecter » dans le profil (la progression est envoyée en ligne avant ;
  impossible sans internet pour ne rien perdre).
- 🔒 Version de test (dev) réservée à l'organisateur : accueil verrouillé et données de dev
  inaccessibles aux autres comptes (règles Firebase).
- Page admin : distinction entre les comptes (communs aux deux versions) et les joueurs de
  la version affichée.

## v1.3 — Sécurité (21 octobre 2026)
- Licence « tous droits réservés » (zodiacfbo) sur GitHub, dans le code et en bas des écrans
  d'accueil, de création de profil, de connexion et du tutoriel.
- Scores plafonnés à 25 m par les règles Firebase (contre les faux scores).
- Clé Firebase restreinte au site du jeu.
- App Check (vérification que les demandes viennent bien du jeu) prêt, à activer.
- Sauvegarde automatique et chiffrée de toutes les données chaque lundi, à activer.

## v1.2 — Boîte à idées (21 octobre 2026)
- 💡 Boîte à idées : idée, bug ou autre ; chacun suit l'état de ses messages (reçu, retenu, fait…).
- 📰 Panneau « Quoi de neuf ? » affiché une fois après chaque mise à jour, et historique depuis ❓.
- Page admin : onglet Suggestions pour lire et classer les messages.
- Correctif : « Mes messages » pouvait s'afficher hors ligne juste après une mise à jour.

## v1.1 — Page admin et performances (21 octobre 2026)
- 🔢 Chiffres plus lisibles : police VT323 dans les menus, mini police retouchée en course.
- ⚡ Beaucoup moins de lectures Firebase (environ 3 fois moins) pour rester dans l'offre gratuite ;
  classement du jour rafraîchi toutes les 30 secondes.
- 🛠️ Page admin de l'organisateur : activité, joueurs, cadeaux, annonce sur l'accueil,
  suppression d'un score, procédure « mot de passe oublié ».

## v1.0 — Lancement officiel (20 octobre 2026)
- Accueil avec « Créer mon profil » (mot de passe + confirmation) et « Me connecter ».
- 🎨 Personnalisation : boules Saturne, Atome, Uranium ; nouveaux chapeaux (charlotte de labo,
  parapluie, casque de Kevin…) ; tenues (blouse de labo, combinaison, cape, smoking) ;
  traînées (arc-en-ciel, flammes, bulles…).
- Objets à mériter : Bousipédia, terriers, météo, série, titres du jour, 1re place,
  champion de la semaine, objets mystère et 🤫 secrets.
- Boutique à 5 onglets avec aperçu animé des objets essayés.

## v0.4 — Version de test des collègues (20 octobre 2026)
- Comptes : pseudo unique + mot de passe, progression retrouvée sur n'importe quel téléphone.
- Fantômes ciblés (le premier, le rival, ton record), chrono, quête de vitesse.
- Événements surprise (commandes inversées, chameaux, Kevin, tornade…), commentateur sportif.
- Équipes, couronne du champion de la semaine, réactions, titres comiques du jour,
  « pendant ton absence ».
- Tutoriel au premier lancement, alertes lisibles, un seul message à la fois.

## v0.3 — Classement en ligne (20 octobre 2026)
- Classement du jour, de la semaine et records partagés entre tous les joueurs (Firebase).
- Partage du résultat avec le lien du jeu et le rang du jour.

## v0.2 — Mise en ligne (20 octobre 2026)
- Jeu publié sur GitHub Pages et installable comme une appli (PWA), jouable hors connexion.
- Version officielle et version de test séparées.

## v0.1 — Version d'origine (20 octobre 2026)
- Le jeu tel qu'il a été créé sur PC : une dune par jour, 3 essais, boule à faire grossir,
  terrier, météo, trésor, quêtes, badges, Bousipédia et boutique.
