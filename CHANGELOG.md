# Journal des versions de Bousier

Chaque version est archivée sur GitHub dans une branche `versions/vX.Y`
(https://github.com/Zodiacfbo/bousier/branches/all?query=versions) : on peut y consulter
et télécharger le jeu tel qu'il était (bouton « Code » > « Download ZIP »).
Le panneau « Quoi de neuf ? » du jeu en est la version courte, pour les joueurs.

---

## v1.18.0 — Mode daltonien (26 octobre 2026)
- Profil 👤 : option « 👁️ Mode daltonien » (pensée pour la deutéranopie), mémorisée sur l'appareil. Objets trop gros :
  contour bleu vif et petit ✖ au-dessus (au lieu du rouge) ; objets qui piquent : contour jaune et noir ; messages
  « réussi / erreur » en bleu et orangé. Rien ne change pour les autres joueurs.

## v1.17.11 — Accueil plus rapide (26 octobre 2026)
- L'accueil lance toutes ses lectures en ligne en même temps (classement, idées, annonces, défi, podium) au lieu de les
  attendre l'une après l'autre ; les lectures identiques en cours sont partagées. Chargement ~2× plus rapide.

## v1.17.10 — Admin : +1 invitation à tout le monde (26 octobre 2026)
- Onglet 🎟️ Invitations : bouton « ➕ +1 à tout le monde » (une invitation de plus à chaque joueur autorisé, non bloqué).

## v1.17.9 — Parrainage : 150 🟡 chacun (26 octobre 2026)
- Récompense du parrainage (invité qui a joué 3 jours) : 150 🟡 pour le parrain et 150 🟡 pour l'invité, au lieu de 50.
  Le parrainage reste invisible tant qu'aucune invitation n'est donnée.

## v1.17.8 — Trésor du jour : bonus expliqué (26 octobre 2026)
- Accueil et tuto : « +10 % à chaque essai où tu l'attrapes » (le bonus compte pour l'essai où le trésor est avalé).

## v1.17.7 — Titre Recruteur caché (25 octobre 2026)
- Le titre « Recruteur 🎟️ » n'apparaît plus dans 🎨 Style tant qu'on ne l'a pas gagné (parrainage pas encore lancé).

## v1.17.6 — Titre Ex-champion à la fin du règne (25 octobre 2026)
- Le titre « 👑 Ex-champion » n'est plus donné dès la victoire, mais le lundi qui suit la semaine de règne (pendant le
  règne, la couronne et le reflet suffisent).
- Titre « Légende de la dune » : 2500 🟡 au lieu de 500.

## v1.17.5 — Roi des citrouilles : suspense jusqu'au bout (25 octobre 2026)
- Sous le défi communautaire, plus de nom du meneur : chacun voit seulement son propre total (« Toi : X 🎃 ») ; le
  gagnant du titre reste secret jusqu'au 2 novembre.

## v1.17.4 — Cadre souvenir du défi d'Halloween (25 octobre 2026)
- Défi communautaire réussi : en plus des 150 🟡, chaque participant reçoit le cadre « 🎃 Halloween 2026 » (épaisseur
  normale, animation lanterne orange ↔ violet, fond violet), introuvable ensuite.
- Le titre de participation « Citrouille d'or 🎃 » devient « Citrouille 🎃 ».

## v1.17.3 — Halloween : Roi des citrouilles, paliers, Le gourmand (25 octobre 2026)
- Titre unique « 🎃 Roi des citrouilles 2026 » pour celui (ou ceux, à égalité) qui avale le plus de citrouilles de la
  semaine Halloween ; donné le 2 novembre avec un message. Le roi du moment est affiché sous le défi communautaire.
- Défi communautaire : message d'encouragement à 25 %, 50 % et 75 %.
- Titre du jour (semaine Halloween) : « 🍬 Le gourmand », le plus de bonbons avalés sur la journée.

## v1.17.2 — Coup de pouce pour les 2 derniers (à partir de la semaine du 26 octobre)
- Coup de pouce (4 essais par jour la semaine suivante) pour les 2 derniers des joueurs ayant joué au moins 3 jours
  (4 joueurs au moins), au lieu du seul dernier. Jamais deux semaines de suite : on remonte alors d'une place, sans
  dépasser la moitié basse du classement. Plus de bonus de 50 🟡.

## v1.17.1 — Sondage caché si déjà voté ailleurs (25 octobre 2026)
- Un sondage déjà voté sur un autre appareil (même compte) ne s'affiche plus : le jeu vérifie en ligne avant de le montrer.

## v1.17.0 — Parrainage et sondages (25 octobre 2026)
- Parrainage : les joueurs autorisés (quotas réglés par l'organisateur) voient « 🎟️ Inviter quelqu'un » dans leur profil
  et un écran « Mes invitations » (créer un lien, copier/partager, annuler = invitation rendue, suivi des invités).
  L'invité voit « 🪲 <parrain> t'invite… ». Quand l'invité a joué 3 jours : 50 🟡 pour chacun, et le titre
  « Recruteur 🎟️ » pour le parrain.
- Admin (🎟️ Invitations) : droit d'inviter (donner N invitations aux joueurs de la 1re semaine, + / − / autoriser /
  retirer), pause des invitations des joueurs, arbre « qui a invité qui » avec l'état de chaque lien et de chaque invité,
  blocage d'un joueur (caché du classement, plus de score ni d'invitation ; option : ses invités aussi), déblocage.
- Sondages : une annonce peut proposer 2 à 6 choix ; chaque joueur vote une fois depuis l'accueil, résultats (avec les
  pseudos) dans l'admin.
- Profil : plus de bouton « Autre joueur ou autre compte » (la liste reste seulement si l'appareil a déjà plusieurs profils).
- Nouveau joueur ou nouvel appareil : l'historique des nouveautés est considéré comme lu (plus de pile de notifications).
- Règles Firestore : quotas, invitations des joueurs, cartes de membre bloquables, config/access, votes.

## v1.16.2 — Bougie d'Halloween à la place de l'Os (25 octobre 2026)
- Correctif : l'Os d'Halloween portait le même identifiant que l'Os habituel (il s'affichait dans « Objets de saison » avec
  les os déjà avalés, et avait remplacé le dessin de l'Os habituel). L'Os habituel retrouve son dessin ; l'objet
  d'Halloween devient une 🕯️ Bougie (fin de dune, lumineuse). Toujours ~20 citrouilles par dune.

## v1.16.1 — News de l'accès sur invitation (24 octobre 2026)
- News : « Bousier passe sur invitation… » (numéro 8.5, entre les news du 21 et du 26 octobre).

## v1.16.0 — Accès sur invitation (24 octobre 2026)
- Sans profil sur l'appareil, le jeu n'affiche plus que « 🎟️ Bousier se joue sur invitation » (ni dune, ni classement) ;
  « me connecter » reste possible pour les joueurs existants.
- Lien d'invitation à usage unique (`?invite=CODE`) : « 🪲 Florent t'invite à jouer à Bousier ! », puis création du
  profil. Lien déjà servi ou annulé : message clair.
- Admin : onglet 🎟️ Invitations (créer un lien avec une étiquette, copier/partager, annuler, suivi « utilisé par »,
  compteur des cartes de membre).
- Règles Firestore : un pseudo ne se réserve qu'avec une invitation valable, consommée au même moment ; liste des
  pseudos et des invitations réservée à l'organisateur ; cartes de membre (`members`) créées à l'inscription ou au
  premier lancement des anciens joueurs. Étape 2 prévue : lecture du classement réservée aux membres (`readOk`).
- « Premier du labo » devient « Premier joueur » (secrets).
- Rattrapage (une fois par joueur) des badges effacés par l'ancien bug de synchronisation (avant la v1.10.7, 22 oct.) :
  relit la meilleure partie de chaque jour au classement en ligne (taille, terrier, trésor, sans choc, nuit, tempête,
  météos) et redonne les badges manquants, avec un message dans « Tes récompenses ».
- SDK Firebase reconstruit avec `writeBatch` (VENDOR_VERSION 7).

## v1.15.5 — « Comment je l'ai eu » (24 octobre 2026)
- 🎨 Style : toucher un objet déjà obtenu l'équipe et rappelle, sur une ligne, comment on l'a eu (✅ condition, 🤫 pour
  un secret, badge associé, mystère révélé). Rien pour un objet simplement acheté.
- Explications ajoutées (visibles seulement une fois l'objet obtenu) pour Lunettes, Auréole, Expérience ratée, Notes de
  musique, Code binaire, Casque de Kevin et Smoking.

## v1.15.4 — Boule citrouille sans lignes (programmé pour le 26 octobre 2026)
- La Boule citrouille n'a plus de côtes orange (elles faisaient des traits cassés en roulant) : orange lisse, tige verte
  et visage lumineux.

## v1.15.3 — Boule citrouille redessinée (programmé pour le 26 octobre 2026)
- La Boule citrouille ne ressemble plus à un ballon de basket : côtes orange plus douces, contour moins noir, petite
  tige verte sur le côté (sur l'axe de roulement) et visage lumineux de citrouille d'Halloween qui passe à chaque tour.

## v1.15.2 — Citrouille du titre sans ombre (24 octobre 2026)
- Semaine Halloween : la citrouille à côté du titre BOUSIER ne reçoit plus l'ombre du titre (une tache brune qui
  semblait superposée, surtout visible sur ordinateur).

## v1.15.1 — Semaine Halloween plus fournie (programmé pour le 26 octobre 2026)
- 3 nouveaux objets pendant la semaine Halloween : Bonbon (petit, début de dune), Araignée (monte et descend au bout de
  son fil), Os (fin de dune). Autant de citrouilles qu'avant par dune (environ 20, vérifié sur 300 dunes) pour le défi
  communautaire.
- Nouvelle traînée « Chauves-souris » : avaler 20 chauves-souris pendant la semaine Halloween.
- Événement Fantômes : 7 s au lieu de 4, deux vagues de fantômes et deux « BOUH ! ».

## v1.15.0 — Cadres et couleurs de pseudo (programmé pour le 26 octobre 2026)
- Onglet Classement de 🎨 Style : 13 nouveaux cadres (Menthe, Océan, Sakura, Améthyste, Brique, Onyx, Néon, Coucher de
  soleil, Scarabée ; prestige Arc-en-ciel et Diamant ; à gagner Champion et Fidèle) et 15 nouvelles couleurs de pseudo
  (Orange, Rose, Jaune citron, Sable, Gris acier, Or, Braise, Océan, Coucher de soleil, Scarabée, Néon ; prestige
  Diamant et Galaxie ; à gagner Champion et Fantôme).
- Champion (cadre et couleur) : gardé à vie dès qu'on a été champion de la semaine ; le champion en titre a en plus un
  reflet qui traverse sa ligne.
- Fidèle : série de 30 jours. Fantôme : dépasser 10 fois le fantôme du meilleur (une fois par partie du jour).
- « Défi du labo » renommé « Défi communautaire » ; sa ligne retirée de la news Halloween.
- News de la boutique coupée en deux (onglet Classement, objets de prestige).

## v1.14.3 — Surprise des nouvelles météos préservée (24 octobre 2026)
- Les 4 récompenses des nouvelles météos (Ciré jaune, Lampe frontale, Lunettes d'éclipse, Tourbillon de sable) et le
  badge « Chasseur de tempêtes » restent cachés jusqu'au 2 novembre.

## v1.14.2 — Encadré des récompenses simplifié (24 octobre 2026)
- L'encadré « 🎁 Tes récompenses » n'affiche plus la phrase « Tout s'équipe dans 🎨 Style ».

## v1.14.1 — Classement du jour en grandes cases (23 octobre 2026)
- Les essais du jour s'affichent en 3 grandes cases sur toute la largeur, avec seulement le score (meilleur entouré et
  en doré, barré = sans terrier, « · » = pas encore joué).

## v1.14.0 — Plusieurs annonces (23 octobre 2026)
- Admin : onglet Annonce transformé en liste d'annonces, chacune avec ses dates (en ligne / prévue / terminée,
  suppression). On peut préparer plusieurs annonces à l'avance.
- Jeu : toutes les annonces en cours s'affichent, chacune avec son OK (mémorisé par annonce). Compatible avec l'ancien
  format (une seule annonce).

## v1.13.9 — Réactions désactivées (23 octobre 2026)
- Les réactions 👏 😂 💩 🔥 du classement du jour sont désactivées pour l'instant (interrupteur REACTIONS_ON ; les
  réactions déjà envoyées sont gardées et réapparaîtront si on les réactive).

## v1.13.8 — Un seul fantôme (23 octobre 2026)
- Pendant la dune du jour, un seul fantôme : celui du 1er du jour (ou ton propre record si c'est toi le 1er).
  Plus de fantôme « rival » ni de ton record en plus.

## v1.13.7 — Classement du jour au format de la semaine (23 octobre 2026)
- Les cases des essais du jour reprennent le format du mini-calendrier de la semaine (numérotées 1, 2, 3) ; la colonne
  d'icônes disparaît (terrier lisible dans les cases, ✨ trésor devant le score).

## v1.13.6 — Renvoi des essais du jour (23 octobre 2026)
- À l'ouverture du jeu, si les essais du jour ont été joués avant la v1.13.5, le score est renvoyé une fois avec le
  détail des essais : les cases du classement du jour apparaissent sans rejouer.

## v1.13.5 — Détail des essais du jour, nouveaux titres du jour (23 octobre 2026)
- Classement du jour : sous chaque joueur, une case par essai (meilleur entouré en doré, barré = sans terrier, « · » =
  pas encore joué). Le score de chaque essai est désormais envoyé (le détail apparaît pour les parties jouées après
  cette mise à jour).
- À partir du lundi 26 : 4 nouveaux titres du jour (⚡ Le sprinteur, 📈 La remontada, 🧘 Le zen, 🍀 Le miraculé) ;
  3 fois titré : traînée Éclairs, titre « Jamais abattu », Bandeau de méditation, Boule trèfle.

## v1.13.4 — Titre à côté du pseudo (23 octobre 2026)
- Dans les classements (et l'aperçu de Style), le titre s'affiche juste après le pseudo au lieu d'en dessous.

## v1.13.3 — Mini-calendrier plus lisible (23 octobre 2026)
- Classement de la semaine : le mini-calendrier passe sur toute la largeur, sous la ligne du joueur (cases et chiffres
  plus grands, lisibles même sur les petits téléphones). Cadres et titres entourent toujours le joueur entier.

## v1.13.2 — Détail de la semaine (23 octobre 2026)
- Classement de la semaine : sous chaque pseudo, un mini-calendrier (L à D) avec le score de chaque jour joué au
  centimètre ; les 3 jours comptés sont entourés en doré, un score barré = sans terrier, le jour actuel est souligné.

## v1.13.1 — Prime du premier découvreur (23 octobre 2026)
- Le premier joueur du labo à trouver un secret (easter eggs et cigarette) gagne 100 🟡 (« 🥇 Premier du labo à trouver
  ce secret »). Une seule fois par secret ; une cigarette offerte compte comme secret trouvé mais pas comme découverte.
- Nouvelle règle Firestore `envs/{env}/firsts` (le premier document créé ne peut plus être modifié) : à coller dans la
  console. Tant qu'elle n'y est pas, les tentatives sont gardées et réessayées.

## v1.13.0 — Easter eggs (23 octobre 2026)
- À partir du 26 octobre, sans news : plots en entraînement (25 → Plot de chantier), 50 entraînements (Sifflet du coach
  + titre), chat noir du vendredi 13 (Fer à cheval), chatouilles au bousier de l'accueil (100 → Plume), lune de l'accueil
  les jours de nuit (13 touches → Boule Lune), titres secrets (Lève-tôt, Oiseau de nuit, Le maniaque, Le timide,
  Jamais sans mon terrier, Régime sans verdure), cadre Pile poil, mots secrets de la boîte à idées.
- 20 novembre : 1 mois de Bousier (gâteau sur la dune, +50 🟡 et titre pour ceux qui ont joué le premier mois, news).
- Chaque récompense obtenue est expliquée (écran de fin et encadré « Tes récompenses »). Secrets : 19.

## v1.12.0 — Easter egg des mégots (23 octobre 2026)
- À partir du 26 octobre, un mégot très discret apparaît sur la dune du jour, une fois par période de 5 jours (jour au
  hasard), près d'un bord. Avalé : « UN MEGOT ?! ». Un seul compté par jour ; 4 mégots débloquent la Cigarette 🚬
  (secret, compteur des secrets 0/6). Hors Bousipédia, quêtes et entraînement ; aucune dune déjà jouée ne change.
- Admin : nombre de mégots trouvés dans la fiche joueur. La cigarette peut toujours être offerte.

## v1.11.9 — Cigarette, cadeau spécial (23 octobre 2026)
- Nouveau chapeau caché « Cigarette 🚬 » (avec volutes de fumée) : invisible dans la boutique, il ne s'obtient que
  comme cadeau de l'organisateur depuis l'admin.

## v1.11.8 — Cadeau de bienvenue (23 octobre 2026)
- À partir du 26 octobre, chaque joueur qui n'a pas joué avant (nouveau, ou inscrit sans avoir joué) reçoit une fois
  100 🟡 dans l'encadré « 🎁 Tes récompenses » : « 👋 Bienvenue dans la dune ! Voici un petit présent pour bien
  commencer : +100 🟡 ». Pas pour les pionniers (ils ont leur cadeau), ni en se reconnectant ou sur un nouvel appareil.

## v1.11.7 — Encadré « Tes récompenses » (23 octobre 2026)
- Ce qui se gagne hors d'une partie (titres, cadres et objets débloqués à l'ouverture, cadeau des pionniers, badge Roi
  Bousier, cadeaux de l'organisateur) s'affiche dans un encadré « 🎁 Tes récompenses » sur l'accueil, qui reste jusqu'à
  « OK » (au lieu d'un message de 2 secondes). Le petit message devient « 🎁 Nouvelles récompenses ! ».
- Dev : les raccourcis du voyage dans le temps qui tombent le même jour sont regroupés et triés par date.

## v1.11.6 — Météos spéciales le lundi et le vendredi (23 octobre 2026)
- À partir du 2 novembre, les deux météos spéciales de la semaine tombent toujours le lundi et le vendredi
  (lun. 2 : orage, ven. 6 : brouillard, lun. 9 : sables mouvants, ven. 13 : éclipse, puis on recommence).
  Jeu et calendrier de l'admin à jour ; aucune dune déjà jouée ne change.

## v1.11.5 — Sables mouvants plus piégeux (23 octobre 2026)
- Tourbillons plus nombreux (environ ×1,5) et plus grands, qui grandissent avec la boule ; autour, une zone d'aspiration
  (grains qui tournent vers le centre) attire la boule : il faut contre-braquer. Enlisement un peu plus fort.
- Équilibrage testé : un joueur qui ne les évite pas reste enlisé ~2,5 fois plus longtemps qu'avant ; en les évitant,
  on passe sans encombre, et le terrier reste toujours atteignable. Première journée concernée : le 11 novembre.

## v1.11.4 — Onglet Classement plus lisible (23 octobre 2026)
- Grandes cases (2 par ligne) ; les cadres et titres à gagner sont rangés dans leur catégorie, repérés par un fond doré
  et « 🏅 À gagner » avec la progression.

## v1.11.3 — Voyage dans le temps sur dev (23 octobre 2026)
- Sur le site de test (dev) uniquement : réglage « 🕰️ Voyage dans le temps » dans le profil pour simuler une date
  (raccourcis : 26 oct., 31 oct., 2 nov., 9 nov. et le premier jour de chaque météo spéciale) et tester le contenu à
  venir. Inactif sur le site officiel ; sauvegarde et données en ligne de dev séparées de celles du site officiel.

## v1.11.2 — Nouveau calendrier et cadeau des pionniers (23 octobre 2026)
- Prestige et onglet Classement avancés au lundi 26 octobre ; boutique de la semaine avancée au lundi 9 novembre.
- Pionniers (au moins une dune du jour entre le 20 et le 25 octobre) : titre « 🌱 Pionnier de la dune », cadre
  « Pionnier » et 150 🟡, donnés automatiquement une seule fois à partir du 26 octobre, avec une news visible
  seulement par eux.
- News réordonnées : 26 oct. (Halloween, Style, pionniers), 2 nov. (événements et météos), 9 nov. (boutique de la semaine).

## v1.11.1 — Titres du jour jamais perdus (23 octobre 2026)
- Les titres du jour (le plus lent, roi des chocs, l'aspirateur, l'ami des cactus) et la 1re place sont comptés pour
  chaque journée terminée depuis la dernière visite (7 jours au plus), et plus seulement pour la veille : sauter un jour
  ne fait plus perdre un titre. Chaque journée n'est comptée qu'une fois (reprise au bon jour après une coupure réseau).

## v1.11.0 — Boutique : prestige, classement personnalisé, boutique de la semaine (préparé le 22 octobre 2026)
- À partir du 2 novembre, dans 🎨 Style :
  - 4 objets de prestige 💎 (contour bleu glacé) : Boule diamant 2 500, Haut-de-forme en or 3 000, Cape dorée 2 000,
    Traînée comète 1 500 🟡.
  - Nouvel onglet **Classement** : cadre de la ligne (bois 300, argent 600, or 1 000, flammes 1 500), couleur du pseudo
    (250, arc-en-ciel 1 500), titre sous le pseudo (200 à 500). À gagner sans pouvoir l'acheter : cadre du podium,
    « 👑 Ex-champion », « Encyclopédiste », « Fidèle au poste », « Chasseur de trésors », « Ami de Kevin »,
    « Citrouille d'or 🎃 » (débloqués automatiquement pour ceux qui remplissent déjà les conditions).
  - Cadre, couleur et titre s'affichent dans les classements du jour, de la semaine, des records et sur le podium.
- À partir du lundi 30 novembre : **boutique de la semaine** (2 objets à 200 🟡 + 1 rare à 300 🟡, changés chaque lundi),
  12 objets exclusifs ; chacun revient toutes les 4 semaines, jamais deux semaines de suite.
- Admin : tous les nouveaux objets, cadres, couleurs et titres peuvent être offerts.
- News prévues le 2 novembre (deux news séparées : nouveautés de la dune, puis prestige + classement) et le 30 novembre
  (boutique de la semaine).

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
