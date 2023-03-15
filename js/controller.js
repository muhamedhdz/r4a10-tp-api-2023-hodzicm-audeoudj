//import { Modele } from 'modele.js';
let modele = new Modele();

/*
Récupère la valeur de l'input (recherche) et l'envoie à l'API
*/
view.research.addEventListener("click", function () {
    search = document.querySelector("#RechercheForm").value;
    console.log(search);
    modele.setSearchedText(search); // On envoie la valeur de l'input à la classe Modele
    modele.fetchAPI();
});
