# Journal des versions de Bousier

Chaque version est archivée sur GitHub dans une branche `versions/vX.Y`
(https://github.com/Zodiacfbo/bousier/branches/all?query=versions) : on peut y consulter
et télécharger le jeu tel qu'il était (bouton « Code » > « Download ZIP »).
Le panneau « Quoi de neuf ? » du jeu en est la version courte, pour les joueurs.

---

## v1.10.17 — Deux météos spéciales par semaine (22 octobre 2026)
- À partir du 2 novembre : deux jours par semaine (un en début, un en fin de semaine) prennent une météo spéciale,
  à tour de rôle ; chacune revient toutes les deux semaines. Le roulement des 6 météos classiques saute ces jours-là
  (aucune classique n'est oubliée).

## v1.10.16 — Objets des météos spéciales à part (22 octobre 2026)
- Les 4 objets des météos spéciales ont leur propre section dans la Bousipédia (visible à partir du 2 novembre) et
  ne comptent pas pour la compléter ni pour la boule Saturne.
- News du 26 octobre : ligne du défi des citrouilles ; news du 2 novembre : nouveautés annoncées sans les détailler.

## v1.10.15 — Nouvelles météos (préparé le 22 octobre 2026)
- À partir du 2 novembre, chaque semaine, un jour du mardi au vendredi prend une nouvelle météo, à tour de rôle :
  ⛈️ Orage (noir, éclairs, foudre à esquiver), 🌫️ Brouillard (bancs de brume), 🌀 Sables mouvants (tourbillons
  qui ralentissent), 🌘 Éclipse (la nuit tombe pendant la course). La neige est réservée à l'événement de Noël.
- Un objet exclusif par météo (Éclair en bouteille, Lanterne perdue, Momie, Fragment de lune) et un cosmétique à
  gagner en rentrant dans le terrier ce jour-là (Ciré jaune, Lampe frontale, Tourbillon de sable, Lunettes d'éclipse).
- Badge ⛈️ Chasseur de tempêtes (avoir joué sous les 4) ; le badge Météorologue ne compte que les 6 météos classiques.
- Admin : calendrier et statistiques avec les nouvelles météos ; nouveaux objets offrables.

## v1.10.14 — Défi du labo d'Halloween (préparé le 22 octobre 2026)
- 🎃 Du 26 octobre au 1er novembre : avaler 666 citrouilles à tous ; si c'est réussi, +150 🟡 le 2 novembre pour
  chaque joueur ayant joué une dune de la semaine. Barre de progression sur l'accueil, contribution en fin de partie.
- En coulisses : 5 nouvelles météos en aperçu (orage, brouillard, neige, sables mouvants, éclipse), pas encore dans les dunes.

## v1.10.13 — Météo mieux répartie (22 octobre 2026)
- À partir du 2 novembre, la météo suit un roulement : chaque météo passe une fois tous les 6 jours, dans le désordre,
  jamais deux jours de suite (au plus ~10 jours sans une météo, contre 19 avant). La semaine Halloween ne change pas.

## v1.10.12 — Trésors du jour mieux répartis (22 octobre 2026)
- À partir du 23 octobre, le trésor du jour suit un roulement : chaque trésor passe une fois tous les 6 jours,
  dans un ordre tiré au sort, jamais deux jours de suite (avant : la Couronne 26 fois sur 90 jours, le Scarabée d'or 3 fois).
  Le 31 octobre reste le Crâne en sucre. Les dunes, objets, quêtes et météos ne changent pas.

## v1.10.11 — Records protégés (22 octobre 2026)
- Le record (onglet Records) ne peut plus redescendre, même envoyé par un appareil en retard.
- Réparation automatique : à l'ouverture, la meilleure boule de tous les temps reprend au moins le meilleur
  score du jour enregistré en ligne (une fois par joueur), pour ceux touchés par le bug de synchronisation.

## v1.10.10 — Podium illustré (22 octobre 2026)
- 🏆 Le podium de la semaine montre les 3 bousiers avec leur équipement (boule, chapeau, tenue, traînée),
  dans l'annonce du lundi sur l'accueil et en permanence dans Classement → Semaine.
- Le jeu publie l'équipement porté avec le record (à l'ouverture, en fin de partie et à chaque changement).

## v1.10.9 — iPhone avec encoche (22 octobre 2026)
- Sur les iPhone avec encoche ou Dynamic Island (appli installée), le score, le chrono, les alertes et les boutons
  du haut ne sont plus cachés sous la caméra ; marge aussi au-dessus de la barre d'accueil. Aucun changement ailleurs.

## v1.10.8 — Hors connexion (22 octobre 2026)
- 📴 Bandeau sur l'accueil et pastille sur tous les écrans quand il n'y a pas internet (ou que Firebase ne répond pas) ;
  message « De nouveau en ligne » au retour, avec synchronisation de la progression.

## v1.10.7 — Synchronisation complète entre appareils (22 octobre 2026)
- Pièces : chaque appareil tient son propre compte (gagné / dépensé) ; le solde est la somme de tous les
  appareils. Plus de pièces perdues (parties, cadeaux de l'admin, podium) ni d'achats non débités.
- Deux appareils ouverts en même temps : la progression est fusionnée à chaque envoi, au retour sur le jeu
  et juste avant chaque essai (impossible de jouer plus d'essais que permis).
- Coup de pouce inclus dans la fusion ; titres et récompenses de la semaine distribués seulement une fois
  la progression à jour (pas de double récompense).

## v1.10.6 — Correctif de synchronisation (22 octobre 2026)
- Un appareil avec une ancienne progression (ordi, autre téléphone) ne peut plus écraser la progression en ligne
  au démarrage : le jeu regarde d'abord la version en ligne.
- Les deux versions sont fusionnées : objets achetés, badges, Bousipédia, essais joués, meilleurs scores et
  quêtes réussies ne se perdent plus ; les pièces sont celles de la version la plus récente.

## v1.10.5 — Admin regroupé (22 octobre 2026)
- 8 onglets au lieu de 10 : « 📈 Tableau de bord » (chiffres du jour, activité jour par jour, décrochage,
  scores suspects, consommation Firebase) et « ⚖️ Dunes & équilibrage » (calendrier, météo, quêtes).

## v1.10.4 — Admin : suivi, fiche joueur, équilibrage (22 octobre 2026)
- 👀 Onglet Suivi : courbe d'activité jour par jour, joueurs qui décrochent (3 jours ou plus sans jouer),
  scores suspects (avec suppression), estimation de la consommation Firebase.
- ⚖️ Onglet Équilibrage : difficulté par météo (taille et score moyens, terriers) et taux de réussite de chaque quête.
- 👤 Fiche joueur : un clic sur un pseudo affiche son historique jour par jour, ses semaines, badges et objets.
- 🎁 Cadeau à tout le monde en un clic ; 📣 annonce programmée (date de début et de fin).
- Le jeu garde les quêtes proposées chaque jour (rattrapées pour les jours déjà joués).

## v1.10.3 — Statistiques détaillées dans l'admin (22 octobre 2026)
- Page admin, onglet Stats : total de tous les joueurs, records (avec le pseudo et la date),
  tableau par joueur enrichi (taille cumulée et moyenne, temps à rouler, terriers ratés et réussite,
  chocs, piqûres, bords, objet préféré, entraînement…) et activité jour par jour depuis le lancement.
- Le jeu garde désormais ces cumuls et records pour toujours (rattrapés d'après les parties déjà jouées) ;
  les parties d'entraînement sont comptées (sans récompense).

## v1.10.2 — Coup de pouce (préparé le 21 octobre 2026)
- 🚀 Chaque lundi (à partir du 26 octobre) : le dernier du classement de la semaine parmi les joueurs
  à 3 jours sur 3 (4 joueurs à 3/3 minimum) reçoit 50 🟡 et 4 essais par jour pendant la semaine suivante.
  Message visible par lui seul ; colonne « Coups de pouce » dans les Stats de l'admin.

## v1.10.1 — Décor d'Halloween (préparé le 21 octobre 2026)
Actif du 26 octobre au 1er novembre seulement :
- 🎃 Dune aux couleurs d'Halloween (sable orangé, bords violets, brume), citrouilles allumées sur les bords.
- Menus en orange et violet, titre « BOUSIER 🎃 » ; sur l'accueil : toiles d'araignée, chauves-souris,
  araignée qui descend au bout de son fil (le 31 : le Crâne en sucre, qui fait un clin d'œil).
- 🎉 Bousipédia : section « Objets de saison » à part ; le compteur et la complétion ne comptent que les objets classiques.

## v1.10 — Halloween et nouveaux événements (préparés le 21 octobre 2026)
Tout est en place dès maintenant mais ne s'active qu'aux dates prévues (les dunes d'avant ne changent pas) :
- 🎃 Semaine Halloween du 26 octobre au 1er novembre : citrouilles et chauves-souris dans la dune,
  nuits plus fréquentes, bandeau sur l'accueil, événement surprise « Fantômes » (une fois par dune).
  Boule citrouille pour qui joue une dune de la semaine. Samedi 31 : nuit obligatoire, trésor
  « Crâne en sucre », Chapeau de sorcière en rentrant dans le terrier. Ces objets restent en souvenir
  et ne comptent pas pour compléter la Bousipédia.
- ⚡ À partir du 2 novembre : 6 nouveaux événements surprise (coupure de courant, photocopieuse,
  pause café, alarme incendie, scorpion, aimant).
- 📰 Les news peuvent être préparées à l'avance : elles apparaissent à leur date (26 oct. et 2 nov.).
- Page admin : calendrier des dunes avec Halloween ; boule citrouille et chapeau de sorcière offrables.

## v1.9 — Champion de la semaine (21 octobre 2026)
- 👑 Champion de la semaine : badge avec le nombre de titres (×1, ×2…), podium récompensé
  200 / 100 / 50 🟡, annonce sur l'accueil de tous chaque lundi.
- 📜 Palmarès des champions (dates et podium) et podium de la semaine dernière dans l'onglet Semaine.
- 🟡 Fin de partie : détail des pièces gagnées, ligne par ligne.
- ⏰ Rappel le dimanche s'il manque des jours pour le classement de la semaine.
- 📖 Tuto en 6 fiches (dune du jour et 3 essais, personnalisation, boîte à idées) ; flèches
  « glisse ton doigt » pendant la toute première course.
- 🏜️ L'entraînement libre ne rapporte plus rien (il faisait avancer les objets secrets).
- Équipes masquées pour l'instant (onglet du classement et choix dans le profil).
- Page admin : onglet Stats par joueur (export tableur) et calendrier des dunes (météo et trésor à 30 jours).

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
