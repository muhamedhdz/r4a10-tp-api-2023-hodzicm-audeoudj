const view = {
  RechercheInput: document.getElementById("RechercheForm"),

  research: document.getElementById("btn-lancer-recherche"),

  resultat: document.querySelectorAll(".res"),

  blocresultat: document.getElementById("bloc-resultats"),

  btnfavoris: document.getElementById("btn-favoris"),

  ulfavoris: document.getElementById("liste-favoris"),

  sectionfavoris: document.getElementById("section-favoris"),

  etoile: document.getElementById("etoile"),

  btn_delete: document.querySelectorAll(".btn_delete"),

  favSpan: document.querySelectorAll(".rechercher_fav"),

  loading_gif: document.getElementById("bloc-gif-attente"),


  /**
   * Met à jour l'état de la vue de la calculatrice par rapport au modèle.
   * @param {Modele} modele : Modèle de la calculatrice
   */
  afficherFav(modele) {
    //&& view.ulfavoris.childElementCount == 0
    modele.deleteAfficherFavoris();
    console.log(modele.getFavorites());
    favorites = modele.getFavorites();
    //   favorites = favorites[0];
    const existingEmpty = document.querySelector('#section-favoris .info-vide');
    if (favorites.length === 0 && !existingEmpty) {
      const empty = document.createElement("p");
      empty.classList.add("info-vide");
      empty.innerText = "No favorite";
      view.sectionfavoris.appendChild(empty);
    } else for(let i = 0; i < modele.favorites.length; i++){
      const emptyElements = document.querySelectorAll('#section-favoris .info-vide');
      emptyElements.forEach(empty => empty.remove()); 
      const li = document.createElement("li");
      const img = document.createElement("img");
      const span = document.createElement("span");

      li.appendChild(span);
      li.appendChild(img);

      img.src = "images/croix.svg";
      img.title = "Cliquer pour supprimer le favori";
      img.width = "15";
      img.classList.add("btn_delete");

      span.innerText = modele.favorites[i];
      span.classList.add("rechercher_fav");
      span.title = "Cliquer pour relancer la recherche";

      view.ulfavoris.append(li);
    }
  },
};


