const view = {


   RechercheInput : document.getElementById("RechercheForm"),

   research: document.getElementById("btn-lancer-recherche"),

   resultat: document.querySelectorAll(".res"),

   blocresultat: document.getElementById('bloc-resultats'),

   btnfavoris: document.getElementById("btn-favoris"),

   ulfavoris: document.getElementById("liste-favoris"),

   sectionfavoris: document.getElementById("section-favoris"),


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