//import { Modele } from 'modele.js';
let modele = new Modele();

/*
Récupère la valeur de l'input (recherche) et l'envoie à l'API
*/
view.research.addEventListener("click", function () {
    search = document.querySelector("#RechercheForm").value;
    modele.setSearchedText(search);
    if(search != ""){
        modele.deleteAfficher();
        modele.fetchAPI();
        view.btnfavoris.disabled = false;
    }
       
        modele.setupImageEtoile();
});
    
/*
view.RechercheInput.addEventListener("keyup", function (){
    if(modele.searchText == ""){
        view.etoile.src = "images/etoile-vide.svg";
        view.etoile.alt = "étoile vide";
    }else if(modele.search != ""){
        view.etoile.src = "images/etoile-plein.svg";
        view.etoile.alt = "étoile pleine";
    }
})*/

view.btnfavoris.addEventListener("click", function () {
    if(modele.searchText != ""){
        const data = modele.getSearchedText();
            if(modele.isAlreadyFavorite(data)){
                confirm("Voulez vous vraiment supprimer ce favoris ?");
                if(confirm){
                    const index = modele.getFavIndexWithText(data);
                    modele.deleteFavorites(index);
                    localStorage.setItem("favoris", JSON.stringify(modele.favorites));
                    modele.setupImageEtoile();
                    modele.afficherFavoris(modele.favorites);
                }
        }else{
            modele.addFavorites(data);
            localStorage.setItem("favoris", JSON.stringify(modele.favorites));
            modele.setupImageEtoile();
            modele.afficherFavoris(modele.favorites);
        }
    }
});

view.ulfavoris.addEventListener("click", function(event){
    if (event.target.classList.contains("rechercher_fav")) {
        const search = event.target.textContent;
        document.querySelector("#RechercheForm").value = search;
        modele.setSearchedText(search);
        if (search != "") {
            modele.deleteAfficher();
            modele.fetchAPI();
        }
    }
    if (event.target.classList.contains("btn_delete")) {
        confirm("Voulez vous vraiment supprimer ce favoris ?");
        if(confirm){
        const index = [...event.target.parentNode.parentNode.children].indexOf(event.target.parentNode);
        modele.deleteFavorites(index);
        }
    }
    modele.setupImageEtoile();
});




// Récupération des données du localStorage lors du chargement de la page
window.addEventListener('load', function() {
    const data = JSON.parse(localStorage.getItem('favoris'));
    modele.afficherFavoris(data);
});


// un event sur la touche entrée, pour qu'elle fait research
document.addEventListener("keydown", function (event) { 
    if (event.key == "Enter") {
    search = document.querySelector("#RechercheForm").value;
    modele.setSearchedText(search);
    if(search != ""){
        modele.deleteAfficher();
        modele.fetchAPI();
    }
    }
  }
  ); 