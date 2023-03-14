
/*
import { APP_ID, APP_KEY } from 'config.js';
*/


// Path: js/controller.js

let modele = new Modele();

console.log("test");

/*
Récupère la valeur de l'input (recherche) et l'envoie à l'API
*/
view.research.addEventListener("click", () => {
    preventDefault();
    search = document.querySelector("#RechercheForm").value;
    modele.searchText = search;
    modele.fetchAPI(search);
    console.log(search);
    console.log(this.searchText);
    console.log("test");

});