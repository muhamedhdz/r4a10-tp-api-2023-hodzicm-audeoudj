
/*
import { APP_ID, APP_KEY } from 'config.js';
*/


// Path: js/controller.js

let modele = new Modele();

/*
Récupère la valeur de l'input (recherche) et l'envoie à l'API
*/
view.research.addEventListener("click", () => {
    console.log("SLT");
    console.log(s);
    search = document.querySelector("#RechercheForm").value;
    console.log(search);
    modele.setSearchedText(search); // On envoie la valeur de l'input à la classe Modele
    modele.fetchAPI();
});