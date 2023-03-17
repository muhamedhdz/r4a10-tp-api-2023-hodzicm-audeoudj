const view = {


   RechercheInput : document.getElementById("RechercheForm"),

   research: document.getElementById("btn-lancer-recherche"),

   resultat: document.querySelectorAll(".res"),

   blocresultat: document.getElementById('bloc-resultats'),

   btnfavoris: document.getElementById("btn-favoris"),

   ulfavoris: document.getElementById("liste-favoris"),

   sectionfavoris: document.getElementById("section-favoris"),

   etoile: document.getElementById("etoile"),

   btn_delete: document.querySelectorAll(".btn_delete"),

   loading_gif: document.getElementById("bloc-gif-attente"),



  afficherRecettes(data){
   //si il n'y a pas de résultat
   console.log("ICIIIIIIIIIIIIIIIIIII");
   console.log(data);
   
   if (!data || !data.hits || data.hits.length === 0){
       //création d'un élément HTML
       const empty = document.createElement("p");
       //ajout d'une classe
       empty.classList.add("info-vide");
       //ajout d'un texte
       empty.innerText = "Aucun résultat";
       //ajout de l'élément dans le HTML
       view.blocresultat.appendChild(empty);
   }else{
       for(let i = 0; i < data.hits.length; i++){
           //création des éléments HTML
           const res = document.createElement("div");
           const img = document.createElement("img");
           const titre = document.createElement("h4");
           const button = document.createElement("a");
           //ajout des éléments dans la div
           res.appendChild(img);
           res.appendChild(titre);
           res.appendChild(button)
           //ajout des classes
           res.classList.add("res");
           res.classList.add("card");
           //ingredients.classList.add("btn_ingredients");
           //ajout des attributs
           img.src = data.hits[i].recipe.image;
           titre.innerText = data.hits[i].recipe.label; 
           view.blocresultat.appendChild(res);
           button.text = "See content";
       }
   }
  },

   afficherFav(favorites){ 
      //&& view.ulfavoris.childElementCount == 0
      console.log(favorites);
      favorites = favorites[0];
      if (!favorites || !favorites.hits || favorites.hits.length === 0){
          const empty = document.createElement("p");
          empty.classList.add("info-vide");
          empty.innerText = "Aucun favoris";
          view.sectionfavoris.appendChild(empty);
      }else{
              const li = document.createElement("li");
              const img = document.createElement("img");
              const span = document.createElement("span");

              li.appendChild(span);
              li.appendChild(img);

              img.src = "images/croix.svg";
              img.title = "Cliquer pour supprimer le favori";
              img.width = "15";
              img.classList.add("btn_delete");

              span.innerText = this.searchText;
              span.title = "Cliquer pour relancer la recherche";

              view.ulfavoris.append(li);

      }      
  }
}
