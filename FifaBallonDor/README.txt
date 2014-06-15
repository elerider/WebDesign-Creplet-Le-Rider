								Ballon d'Or FIFA 2013

Voici un court descriptif de l'application web que nous avons cr�e dans le cadre du cours de WebDesign en 4�me ann�e � l'EPF.
Cette application r�cup�re et met en page une base de donn�es libre (l'ensemble des votes pour le FIFA Ballon d'Or 2013) sur OpenDataSoft.

Guide d'utilisation de l'application:

Le Header et le footer seront les m�mes sur l'ensemble du site.

Le header comporte le nom du site a gauche, et 3 boutons sur la droite qui renvoient vers les 3 pages du site: 
-La page d'accueil
-La page "Votes" qui pr�sente les votes sous forme de tableau
-La page "Graphique" qui les pr�sente sous forme de graphiquess

Ce Header reste visible en permanance, et son opacit� varie en fonction du scroll.
Son opacit� diminue progressivement en fonction du scroll jusqu'� un minimum de 0.5
Lorsque l'on passe la souris sur le header, il retrouve une opacit� de 1.
Ce script qui modifie la transparence du header a �t� impl�ment� sous forme de directive.
On retrouve en dessous une s�rie de photos qui d�file, avec une l�gende pour chacune d'entres elles.

Le footer est constitu� d'une phrase centr�e.

La page d'accueil: home.html
La landing page est la page d'accueil.
Sur celle ci, on trouve un image slider suivit d'une description de notre application.
L'image slider est construit en HTML5 et en CSS3, gr�ce � un tutoriel disponible sur :
http://www.creativejuiz.fr/blog/tutoriels/css3-creer-slideshow-automatique-controlable-transition

Aucune donn�es dynamique n�cessite l'utilisation du controler home.js

La page "Votes": vote.html
On y trouve un tableau qui repertorie chacun des 1623 votes de la base de donn�e.
Nous avons choisi d'en afficher 30 par pages, dans un soucis d'esth�tique.
Nous avons mis en place un outil de tri, possible selon chacune des collones (Joueur, pays, club, etc...).
Il suffit de cliquer sur le titre de la collone pour trier le tableau selon cette derni�re.
Il est �galement possible de faire une recherche gr�ce � la barre de recherche. 
Les r�sultats de recherche sont filtr�s dans le tableau.
En cliquant sur un �lement du tableau, il sera automatiquement copi� dans la barre de recherche.
Enfin, un outil de pagination est int�gr� et impl�ment� dans le controler vote.js


le controler vote.js:
Le tableau est g�n�r� gr�ce � un ng-repeat, et les donn�es sont affich�e gr�ce au controler.
Le controler effectue un http Get afin de r�cup�rer les donn�es. 
Toute la pagination est effectu�e dans les fonctions du controller, elle permet de naviguer entre les pages du tableau
-Un bouton "d�but" qui affiche par d�faut les 30 premiers votes de la liste
-Un bouton "fin" qui affiche la derni�re page des votes. On r�cup�re cette page en divisant le nombre de votes (voies.nhits =1623) par le nombre de votes par page 
(ici rows=30)
-Un bouton "Previous page": On v�rifie que l'on se trouve pas sur la premi�re page, et on d�cr�mente la page courante de 1.
-Un bouton "Next Page": On v�rifie que l'on se trouve pas sur la premi�re page, et on incr�mente la page courante de 1.
-5 boutons qui correspondent aux 5 pages "autour" de la page courante :
	- 1, 2, 3, 4, 5 par d�faut si on se trouve sur la 1�re page
	-Si on se trouve sur la derni�re page, on affiche les 5 derni�res pages, on d�cr�mentant la page courante de 1 � chaque bouton
	-Sinon, on affiche la page courante au milieu, et les deux pages pr�c�dentes et suivantes
Le tri et les effets des clics sur les donn�es est �galement assur� par le controler.



La page "graph": graph.html
Sur la page "Graphiques", nous retrouvons au d�but un court descriptif des graphiques pr�sent�s. Apr�s avoir appuy� sur le bouton correspondant, plusieurs 
graphiques s'affichent et pr�sentent le r�sultat des votes sous diff�rentes formes. 

le controler graph.js:
Il traite les donn�e de fa�on � g�n�rer les variables affich�es dans les graphiques. Les graphiques sont install�s � partir du package Chart.js install� avec bower.



Bug et probl�mes rencontr�s:

- Le probl�me majeur que nous avons rencontr� concerne le tri et la recherche dans la base de donn�es. Nous affichons les votes 30 par 30, la recherche et le tri 
 se font uniquement sur ces 30 votes. En affichant l'ensemble de la liste sur une page, les op�rations s'�tendent � l'ensemble des donn�es. Nous n'avons pas r�ussi 
� trier l'ensemble des donn�es et � en afficher uniquement 30.

-Un autre probl�me rencontr� concerne les graphiques: nous avons du mettre en place un bouton pour les afficher, car il faut attendre que les donn�es se chargent. 
Si on les fait afficher par d�faut, il y a une erreur. 

-Enfin, nous avons rencontr� des difficult�s pour passer des lignes, entre des images et du texte par exemple dans la page Accueil.
Les balises </br> ne fonctionnaient pas. Nous avons du les int�grer � l'int�rieur d'une nouvelle balise <div>.


Perspectives de d�veloppement:

- Impl�menter la recherche sur toute la base de donn�es
- Faire des graphiques dynamiques en fonction des choix de l'utilisateur (uniquement votes des m�dias, capitaines, coachs, etc...)

