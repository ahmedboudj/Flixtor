# création d'une page streaming 

# votre page web est divisée en 3 parties 
1) la balise header
2) la balise main
3) la balise footer

# première partie de votre page web (header)
- dans la balise header, ajouter la navbar Brand /Logo qui se trouve  dans le lien: (https://www.w3schools.com/bootstrap5/bootstrap_navbar.php)

- enlever la classe bg-dark

- en css , selectionner la classe navbar et ajouter ce code qui permettra de créer une ombre sur la barre de navigation  box-shadow: 0 0 20px rgb(0 0 0 / 80%);

- dans la balise <a> ajouter le texte Flixtor, ensuite l'icone <i class="fa-solid fa-video"></i>

- en css, selectionner la classe navbar-brand et changer la couleur du texte en rouge et la taille de l'écriture à 25px

- en css, selectionner la balise i en ajoutant 5px à la marge à gauche 

- dans la div qui contient la classe container-fluid, ajouter les classes d-flex justify-content-center


# deuxième partie de votre page web (main)
- créer une balise section avec les classes m-3 et p-4

- en css, selectionner votre balise <section> et ajouter box-shadow: 0 0 20px rgb(0 0 0 / 80%);

- ajouter une div avec la classe container 

- ajouter une balise <button> à l'interieur de la div

- ajouter les classes btn, mb-2 et btn-md sur le bouton 

- ajouter le texte Derniers Films dans le bouton 

- en css, selectionner la classe btn, ajouter 20px à la taille du texte, rouge comme couleur de fond et blanc comme couleur pour le texte

- copier la balise <button> 8 fois en remplacant la classe btn-md par la classe btn1

- en css, selectionner la classe btn1 et ajouter la couleur de fond #333 et la couleur du texte #ccc

- dans l'ordre ecriver le texte qui correspond à chaque bouton : Par Défault; Animation; Comedie; Action;Aventure; Drame; Horreur et ...

- ajouter une div avec la classe row après les balises <button>

- ajouter une autre div à l'interieur de la div créer précédement avec la classe col-2

- dans la div avec la classe col-2, ajouter la balise <img> avec la classe card-img-top

- ajouter l'image m1.jpg

- toujours dans la div avec la classe col-2, ajouter la balise <a> avec la classe overlay

- à l'interieur de la balise <a>, ajouter l'icone <i class="fa-solid fa-play"></i> 

- recopier 5 fois la div avec la classe col-2 et tout ce qu'elle contient, de manière à avoir 6 images sur une même ligne ensuite remplacer les images par m2.jpg, m3.jpg ainsi de suite. 

- en css, selectionner la classe overlay :
   * mettre la position à relative
   * la propriété bottom à 55%
   * faire appel à flexbox
   * mettre la valeur center quand nous utilisons l'axe principale
   * eliminer les traits sous l'icone 
   * mettre la couleur en rouge
   *  l'opacité à zero


- en css, selectionner la balise  img et ajouter la taille 200 X 250

- en css, selectionner la balise body et ajouter la couleur de fond #222222

- recopier l'integralité de la balise <section> une 2ème fois de manière à avoir une autre section, cette fois ci elle réprésentera la section série télévisée. 

- remplacer le texte du bouton Dernières Films par Dernières Séries 

- remplacer les images par s1.jpg, s2.jpg ainsi de suite 


# troisième partie de votre page web (footer)
- dans la balise footer, ajouter les classses m-3 et p-4

- en css, selectionner la balise footer et ajouter ce code là : box-shadow: 0 0 20px rgb(0 0 0 / 80%);



# javscript
- Sélectionner tous les éléments <img> de la page à l'aide de la méthode document.querySelectorAll("img") et stockez-les dans la variable mesImg.

Sélectionner tous les éléments avec la classe CSS "overlay" à l'aide de la méthode document.querySelectorAll(".overlay") et stockez-les dans la variable playBtn.

- Utiliser une boucle for pour parcourir chaque élément <img> dans la liste mesImg :

- À l'aide de addEventListener, ajoutez un écouteur d'événement "mouseover" (lorsque le pointeur survole l'élément) à chaque élément <img>.
À l'intérieur de la fonction de rappel, modifier les propriétés de style de l'élément en utilisant mesImg[i].style.
Dans la fonction de rappel "mouseover" :

Définisser la bordure arrondie (borderRadius) à '8px' pour créer des coins arrondis.
Réduiser l'opacité (opacity) à '0.2' pour rendre l'image légèrement transparente.
Ajouter une ombre (boxShadow) avec un décalage de (0 0 20px red).
Augmenter l'opacité et la taille de la police (fontSize) des éléments avec la classe "overlay" (playBtn) pour les rendre visibles.
Ajouter un autre écouteur d'événement "mouseout" (lorsque le pointeur quitte l'élément) à chaque élément <img> :

À l'intérieur de la fonction de rappel "mouseout", réinitialisez les propriétés de style à leurs valeurs d'origine pour revenir à l'état initial lorsque le pointeur ne survole pas l'élément.




En utilisant ces étapes, le code permet de modifier les styles des images et des boutons de lecture lorsque le pointeur de la souris survole ou quitte les éléments correspondants.





