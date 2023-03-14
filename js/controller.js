
/*
import { APP_ID, APP_KEY } from 'config.js';
*/


// Path: js/controller.js


/*
Récupère la valeur de l'input (recherche) et l'envoie à l'API
*/
view.research.addEventListener("click", (e) => {
    e.preventDefault();
    search = e.target.querySelector("input").value;
    modele.Api();
});