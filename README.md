Aperçu du projet
Le Nation Sound Festival est une expérience immersive où musique, culture et festivités se rencontrent. Ce projet propose une interface interactive permettant aux utilisateurs de découvrir la programmation, les lieux, et d'accéder à toutes les informations nécessaires pour profiter pleinement de l'événement.

Objectif
Le projet vise à :

Offrir une navigation fluide pour explorer les différentes sections du festival.
Mettre en avant la programmation musicale, la billetterie, et les informations pratiques.
Fournir une carte interactive et des options d'hébergement pour les festivaliers.
Technologies utilisées
HTML5 : Structure et contenu du site web.
CSS3 : Mise en page et design (avec Bootstrap pour le responsive design).
JavaScript : Comportement interactif du site, notamment pour la carte interactive et les animations.
Leaflet.js : Bibliothèque JavaScript pour la carte interactive.
Bootstrap : Framework CSS pour un design responsive.
Structure du projet
Le projet est structuré comme suit :

/assets
    /img - Contient les images du site (logos, photos de groupes, etc.)
    /videos - Contient les vidéos promotionnelles
/css
    /bootstrap - Contient les fichiers CSS Bootstrap
    /navbar, /carousel, /video, /countdown, etc. - Fichiers CSS pour chaque section
/js
    /bootstrap - Fichiers JavaScript pour le Bootstrap
    /row, /map, /countdown, etc. - Fichiers JavaScript pour les fonctionnalités spécifiques
/index.html - Page principale du site
/json/data.json - Données JSON regroupant les informations du festival

Fonctionnalités principales
1. Programmation
Visualisez les artistes et les événements par jour, avec les scènes et horaires correspondants.
2. Billetterie
Accédez à différentes options de tickets, avec la possibilité d'acheter des pass journaliers ou pour l'ensemble du festival.
3. Carte interactive
Explorez les différents lieux du festival (scènes, restaurants, toilettes, etc.) via une carte interactive intégrée à l'aide de la bibliothèque Leaflet.js.
4. Informations pratiques
Transport, horaires, sécurité, restauration et hébergement. Toutes les informations utiles pour planifier votre visite.
5. Gestion des cookies
Un système complet de gestion des cookies est implémenté avec des options d'acceptation ou de refus.
Installation
1. Cloner le projet
git clone https://github.com/votre-repo/nation-sound-festival.git
2. Naviguer dans le dossier du projet
cd nation-sound-festival
3. Ouvrir le fichier index.html dans votre navigateur
Double-cliquez sur le fichier index.html ou ouvrez-le avec votre navigateur préféré pour voir le site en action.

Utilisation
Naviguez dans les différentes sections du site pour explorer la programmation, acheter des billets, consulter la carte et planifier votre visite au festival.
