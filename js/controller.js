//import { Modele } from 'modele.js';
let modele = new Modele();

/*
Récupère la valeur de l'input (recherche) et l'envoie à l'API
*/
view.research.addEventListener("click", function () {
    search = document.querySelector("#RechercheForm").value;
    modele.setSearchedText(search); // On envoie la valeur de l'input à la classe Modele
    console.log(search);
    modele.setSearchedText(search); // On envoie la valeur de l'input à la classe Modele
    if(search != ""){
        modele.fetchAPI();
    }
    // set l'input en rouge ? tooltip ?
});
    

view.btnfavoris.addEventListener("click", function () {
    if(modele.searchText != ""){
    //prendre le resultat de l'api pour le stocker dans le localstorage
    const data = modele.getResult();
        if(modele.isAlreadyFavorite(data)){
            console.log("déjà dans les favoris");
        }else{
            modele.addFavorites(data);
            console.log("test");

            localStorage.setItem("favorites", JSON.stringify(modele.getFavorites()));
            console.log(modele.getFavorites());
            modele.afficherFavoris();
        }
    }
})
