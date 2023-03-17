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
    }
    //tooltip ?
});
    

view.btnfavoris.addEventListener("click", function () {
    if(modele.searchText != ""){
        const data = modele.getResult();
        if(modele.textisAlreadyFavorite(modele.searchText)){
            const confirmation = confirm("Voulez vous vraiment supprimer ce favoris ?");
            if(confirmation){
                //on supprime le favori de la liste des favoris
                const remove = JSON.parse(localStorage.getItem('donnee'));
                modele.deleteFavorites(remove.getFavoriteIndex(data));
                localStorage.setItem("favoris", JSON.stringify(modele.favorites));
                //on change l'image de l'étoile
                modele.setupImageEtoile();
                //on réaffiche la liste des favoris sans le favori supprimé
                modele.deleteAfficherFavoris();
                modele.afficherFavoris();
            }
        }else{
            modele.addFavorites(data);
            localStorage.setItem("favoris", JSON.stringify(modele.favorites));
            modele.setupImageEtoile();
            modele.afficherFavoris(modele.favorites);
        }
    }
});



// Récupération des données du localStorage lors du chargement de la page
window.addEventListener('load', function() {
    const data = JSON.parse(localStorage.getItem('favoris'));
    modele.afficherFavoris(data);
});

