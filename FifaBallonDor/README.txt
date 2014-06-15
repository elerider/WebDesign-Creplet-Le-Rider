								Ballon d'Or FIFA 2013

Voici un court descriptif de l'application web que nous avons crée dans le cadre du cours de WebDesign en 4ème année à l'EPF.
Cette application récupère et met en page une base de données libre (l'ensemble des votes pour le FIFA Ballon d'Or 2013) sur OpenDataSoft.

Guide d'utilisation de l'application:

Le Header et le footer seront les mêmes sur l'ensemble du site.

Le header comporte le nom du site a gauche, et 3 boutons sur la droite qui renvoient vers les 3 pages du site: 
-La page d'accueil
-La page "Votes" qui présente les votes sous forme de tableau
-La page "Graphique" qui les présente sous forme de graphiquess

Ce Header reste visible en permanance, et son opacité varie en fonction du scroll.
Son opacité diminue progressivement en fonction du scroll jusqu'à un minimum de 0.5
Lorsque l'on passe la souris sur le header, il retrouve une opacité de 1.
Ce script qui modifie la transparence du header a été implémenté sous forme de directive.
On retrouve en dessous une série de photos qui défile, avec une légende pour chacune d'entres elles.

Le footer est constitué d'une phrase centrée.

La page d'accueil: home.html
La landing page est la page d'accueil.
Sur celle ci, on trouve un image slider suivit d'une description de notre application.
L'image slider est construit en HTML5 et en CSS3, grâce à un tutoriel disponible sur :
http://www.creativejuiz.fr/blog/tutoriels/css3-creer-slideshow-automatique-controlable-transition

Aucune données dynamique nécessite l'utilisation du controler home.js

La page "Votes": vote.html
On y trouve un tableau qui repertorie chacun des 1623 votes de la base de donnée.
Nous avons choisi d'en afficher 30 par pages, dans un soucis d'esthétique.
Nous avons mis en place un outil de tri, possible selon chacune des collones (Joueur, pays, club, etc...).
Il suffit de cliquer sur le titre de la collone pour trier le tableau selon cette dernière.
Il est également possible de faire une recherche grâce à la barre de recherche. 
Les résultats de recherche sont filtrés dans le tableau.
En cliquant sur un élement du tableau, il sera automatiquement copié dans la barre de recherche.
Enfin, un outil de pagination est intégré et implémenté dans le controler vote.js


le controler vote.js:
Le tableau est généré grâce à un ng-repeat, et les données sont affichée grâce au controler.
Le controler effectue un http Get afin de récupérer les données. 
Toute la pagination est effectuée dans les fonctions du controller, elle permet de naviguer entre les pages du tableau
-Un bouton "début" qui affiche par défaut les 30 premiers votes de la liste
-Un bouton "fin" qui affiche la dernière page des votes. On récupère cette page en divisant le nombre de votes (voies.nhits =1623) par le nombre de votes par page 
(ici rows=30)
-Un bouton "Previous page": On vérifie que l'on se trouve pas sur la première page, et on décrémente la page courante de 1.
-Un bouton "Next Page": On vérifie que l'on se trouve pas sur la première page, et on incrémente la page courante de 1.
-5 boutons qui correspondent aux 5 pages "autour" de la page courante :
	- 1, 2, 3, 4, 5 par défaut si on se trouve sur la 1ère page
	-Si on se trouve sur la dernière page, on affiche les 5 dernières pages, on décrémentant la page courante de 1 à chaque bouton
	-Sinon, on affiche la page courante au milieu, et les deux pages précédentes et suivantes
Le tri et les effets des clics sur les données est également assuré par le controler.



La page "graph": graph.html
Sur la page "Graphiques", nous retrouvons au début un court descriptif des graphiques présentés. Après avoir appuyé sur le bouton correspondant, plusieurs 
graphiques s'affichent et présentent le résultat des votes sous différentes formes. 

le controler graph.js:
Il traite les donnée de façon à générer les variables affichées dans les graphiques. Les graphiques sont installés à partir du package Chart.js installé avec bower.



Bug et problèmes rencontrés:

- Le problème majeur que nous avons rencontré concerne le tri et la recherche dans la base de données. Nous affichons les votes 30 par 30, la recherche et le tri 
 se font uniquement sur ces 30 votes. En affichant l'ensemble de la liste sur une page, les opérations s'étendent à l'ensemble des données. Nous n'avons pas réussi 
à trier l'ensemble des données et à en afficher uniquement 30.

-Un autre problème rencontré concerne les graphiques: nous avons du mettre en place un bouton pour les afficher, car il faut attendre que les données se chargent. 
Si on les fait afficher par défaut, il y a une erreur. 

-Enfin, nous avons rencontré des difficultés pour passer des lignes, entre des images et du texte par exemple dans la page Accueil.
Les balises </br> ne fonctionnaient pas. Nous avons du les intégrer à l'intérieur d'une nouvelle balise <div>.


Perspectives de développement:

- Implémenter la recherche sur toute la base de données
- Faire des graphiques dynamiques en fonction des choix de l'utilisateur (uniquement votes des médias, capitaines, coachs, etc...)

