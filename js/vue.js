const view = {


   RechercheInput : document.getElementById("RechercheForm"),

   
   research: document.getElementById("btn-lancer-recherche"),

   resultat: document.querySelectorAll(".res"),

   blocresultat: document.getElementById('bloc-resultats'),

   btn_favoris: document.querySelectorAll(".btn_favoris"),

  // ingredients: document.querySelectorAll(".btn_ingredients"),
}


/*
  const res = document.querySelector(".res");
            const url = "https://api.edamam.com/search?q=chicken&app_id=1f1d8b1f&app_key=1f1d8b1f";
            fetch(url)
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                res.innerHTML = data.hits[0].recipe.label;
              });
*/