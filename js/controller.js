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
    
view.RechercheInput.addEventListener("keyup", function (){
    if(modele.searchText == ""){
        view.etoile.src = "images/etoile-pleine.svg";
        view.etoile.alt = "étoile vide";
    }else if(modele.search != ""){
        view.etoile.src = "images/etoile-vide.svg";
        view.etoile.alt = "étoile pleine";
    }
})

view.btnfavoris.addEventListener("click", function () {
    if(modele.searchText != ""){
        const data = modele.getSearchedText();
        if(!modele.textisAlreadyFavorite(modele.searchText)){
        //     const confirmation = confirm("Voulez vous vraiment supprimer ce favoris ?");
        //     if(confirmation){
        //         //on supprime le favori de la liste des favoris
        //         const remove = JSON.parse(localStorage.getItem('donnee'));
        //         modele.deleteFavorites(remove.getFavoriteIndex(data));
        //         localStorage.setItem("favoris", JSON.stringify(modele.favorites));
        //         //on change l'image de l'étoile
        //         modele.setupImageEtoile();
        //         //on réaffiche la liste des favoris sans le favori supprimé
        //         modele.deleteAfficherFavoris();
        //         modele.afficherFavoris();
        //     }
        // }else{
            modele.addFavorites(data);
            localStorage.setItem("favoris", JSON.stringify(modele.favorites));
            modele.setupImageEtoile();
            modele.afficherFavoris(modele.favorites);
        }
    }
});
// view.ulfavoris.addEventListener("click", function(event){
    
//     if(event.target.classList.contains("rechercher_fav")) {
//         for(let i = 0; i < view.favSpan.length; i++){
//         view.favSpan[i].addEventListener("click", function () {
//             search = view.favSpan[i].value;
//             console.log("dans le listener");
//             modele.setSearchedText(search);
//             if(search != ""){
//                 modele.deleteAfficher();
//                 modele.fetchAPI();
//             }
//         });
//     }
//     };

// });

view.ulfavoris.addEventListener("click", function(event){
    if (event.target.classList.contains("rechercher_fav")) {
        const search = event.target.textContent;
        document.querySelector("#RechercheForm").value = search;
        console.log(search);
        console.log("dans le listener");
        modele.setSearchedText(search);
        if (search != "") {
            modele.deleteAfficher();
            modele.fetchAPI();
        }
    }
    if (event.target.classList.contains("btn_delete")) {
        const index = event.target.dataset.index;
        modele.deleteFavorites(index)
        //modele.deleteFavorites(event.target.textContent);
        console.log(modele.favorites);
    }
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