# Exercice pratique pour développeur junior React / Node.js

Cet exercice pratique a pour but d'évaluer les compétences d'un développeur junior en React et Node.js. L'exercice est divisé en deux parties : la partie frontend et la partie backend.

## Partie frontend

-   Utiliser React pour créer une application web simple avec les fonctionnalités suivantes :
    -   Permettre à l'utilisateur d'ajouter un nouveau produit et d'envoyer les informations à l'api (nom, description, prix et image).
    -   Afficher une liste de produits provenant de l'API.
    -   Chaque produit doit être affiché avec son nom, sa description, son prix et une image. (cf. composant ProductCard)
    -   Les utilisateurs doivent pouvoir cliquer sur un produit pour voir les détails du produit sur une nouvelle page.
    -   Sur la page détails l'utilisateur doit pouvoir modifier et supprimer un produit
    -   Les utilisateurs doivent pouvoir naviguer entre la liste des produits et les détails d'un produit.
    -   (Utiliser React Router pour gérer la navigation dans l'application.)

## Partie backend

-   Utiliser Node.js et Express.js pour créer une API RESTful.
-   Utiliser MongoDB pour stocker les données des produits.
-   Utiliser les modules `mongoose` pour interagir avec la base de données MongoDB.
-   Implémenter les routes suivantes :
    -   GET `/api/products` : Récupérer tous les produits de la base de données.
    -   GET `/api/products/:id` : Récupérer un produit spécifique en utilisant son ID.
    -   POST `/api/products` : Ajouter un nouveau produit à la base de données.
    -   PUT `/api/products/:id` : Mettre à jour un produit spécifique en utilisant son ID.
    -   DELETE `/api/products/:id` : Supprimer un produit spécifique en utilisant son ID.
-   Chaque produit doit avoir les propriétés suivantes (cf. fichier ./backend/models/Product.js) :
    -   `id` : un identifiant unique généré automatiquement par la base de données.
    -   `name` : le nom du produit.
    -   `description` : une description du produit.
    -   `price` : le prix du produit.
    -   `image` : l'URL de l'image du produit.
-   Les réponses de l'API doivent être au format JSON.
-   Gérer les erreurs avec des réponses HTTP appropriées (par exemple 404 si un produit n'est pas trouvé, 400 si une validation échoue, etc.).

## Bonus

-   Ajouter des fonctionnalités supplémentaires à l'application (par exemple: la recherche de produits, modal de validation de suppression, ajout d'un produit dans un panier, etc).
-   Les routes POST et PUT valide les données d'entrée de l'utilisateur en utilisant les middlewares.

## Comment démarrer

-   Cloner le dépôt.
-   Dans le dossier `backend`, exécuter la commande `npm install` pour installer les dépendances.
-   Dans le dossier `backend`, exécuter la commande `npm run dev`  pour lancer le serveur.
-   Dans le dossier `frontend`, exécuter la commande `npm install` pour installer les dépendances.
-   Dans le dossier `frontend`, exécuter la commande `npm run start` pour lancer l'application