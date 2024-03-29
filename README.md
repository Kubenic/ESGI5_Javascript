# ESGI5_Javascript

### Objectif

Création d'un site avec une liste non exhaustive de films et série classé par genre. Au clic sur un film ou séries, une fiche détaillé s'affichera.

### Taches
* Routing
    * Récupération de l'url
    * Traitement de l'url
    * Mapping Route vers méthode
* API
    * Création de l'objet de traitement de call API<
    * Récupération des données
    * Stockage via LocalStorage
    * More in the next episode
* DOM
    * Templating ?
    * Générateur d'élément HTML ?
    * Custom tags ? 

### Règles

- 3 personnes par groupes maximum
- Groupement libre
- Soumission sur Github 1 lien/groupe: github.com/user/esgi-javascript/project
- Sujet libre soumis à validation
	- sujet proposé: Créer un mini-react
		- Gestion du routage
		- Validation des propriétés passées au composant
		- Algorithme => se rapproche de l'algo de l'exercice *HereWeGo!*
			- Chaque composant hérite d'un object `Component` ayant une méthode `display(newProps)`
			- display appelle la méthode `shouldUpdate()` du composant courant => compare newProps avec les oldProps
			- si shouldUpdate
				- appelle la fonction `render` du composant
				- si `render` invoque d'autres composants, le composant courant appelle la fonction `display(compProps)` des sous-composants
			- le résultat de `display` est ajouté au DOM sous le noeud parent

### Obligations

Norme Javascript: ES6/ES2015

Notions présentes:
- Prototypes d'objet natif (String, Object, Number, ...)
	- Object.prop_access
	- String.interpolate(animal)
		- remplace toutes les chaines entourées de "{{ }}" par la valeur de l'objet
		-  `machaine = "Type d'animal: {{ type.name }}"`
		- `animal = {type: {name: "chien"}}`
		- `machaine.interpolate(animal)  => "Type d'animal: chien"`
- Création d'objet et objet hérité dont certains avec attributs/méthodes privés
- Création de modules
- Gestion de l'historique (système de routage)
- Utilisation des Promises
- Utilisation du type_checker
	- version minimum: 2
	- exemples cas d'utilisation: Vérifier les données en entrée de constructeur 

Contenu index.html:

    <html>
	    <head>
		    ...
		    <script type="module" src="./main.js"/>
	    </head>
	    <body>
		    <div id="root"></div>
		</body>
	</html>

### Interdictions

- Utilisation de task-runners
- Utilisation de Framework (React, Angular, VueJS, ...)

### Evaluation

- Code Source + Soutenance
- Durée de la soutenance: 20min
	- Démo: 15min
	- Questions: 5min
- Audience: Devant la promotion ou huis-clos
- Bonus: 2 points max
	- Participation à la communauté OpenSource (0.5pt)
	- Utilisation de l'API FileReader (0.5pt)
	- ServiceWorker:
		- gestion online/offline (0.5pt)
		- WebPush (0.5pt)
		- ... (0.5pt)
	- Sensors API
		- Proximity (0.5pt)
		- Orientation (0.5pt)
		- ... (0.5pt)
