const APP_ID = '22297be0';
const APP_KEY = '9b01c1e1d8cf19df33ed768b6c8f0b64';

class Modele{

    /*
    *  @var string
    */
    searchText;
    data;
    favorites;

    constructor(){
        this.searchText = '';
        this.data = '';
        this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    }

    //Requete API
    async fetchAPI() {
        this.loading();
        const baseURL = `https://api.edamam.com/search?q=${this.searchText}&app_id=${APP_ID}&app_key=${APP_KEY}`; 
        //on va récupérer les données de l'API
        const response = await fetch(baseURL);
        //on va convertir les données en JSON
        const data = await response.json();
        //afficher pr voir
        console.log(data);
        //console.log(JSON.stringify(data));
        this.setResult(data);
        this.deleteAfficher();
        this.afficher(data);
        return data;
    }


    getSearchedText(){
        return this.searchText;
    }

    setSearchedText(search){
        this.searchText = search;
    }

    getResult(){
        return this.data;
    }

    setResult(data){
        this.data = data;
        localStorage.setItem('searchText', JSON.stringify(this.searchText));

    }

  
    
    //on va créer une fonction qui va afficher les données de l'API dans l'HTML

    afficher(data){
        // enlever le gif du chargement
        this.removeLoading();
        if (!data || !data.hits || data.hits.length === 0) {
            //création d'un élément HTML
            const empty = document.createElement("p");
            //ajout d'une classe
            empty.classList.add("info-vide");
            //ajout d'un texte
            empty.innerText = "Aucun résultat";
            //ajout de l'élément dans le HTML
            view.blocresultat.appendChild(empty);
          } else {
            for (let i = 0; i < data.hits.length; i++) {
              //création des éléments HTML
              const res = document.createElement("div");
              const img = document.createElement("img");
              const titre = document.createElement("h4");
              const button = document.createElement("a");
      
              //ajout des éléments dans la div
              res.appendChild(img);
              res.appendChild(titre);
              res.appendChild(button);
      
              //ajout des classes
              res.classList.add("res");
              res.classList.add("card");
      
              //ingredients.classList.add("btn_ingredients");
              //ajout des attributs
              img.src = data.hits[i].recipe.image;
              titre.innerText = data.hits[i].recipe.label;
              view.blocresultat.appendChild(res);
              button.text = "See content";
            }
          }
    }

    deleteAfficher(){
        if(view.blocresultat.childElementCount > 0){
        while(view.blocresultat.firstChild){
            view.blocresultat.removeChild(view.blocresultat.firstChild);
        }
        }
    }

    /* FAVORIS */

    addFavorites(data){
        if (!this.favorites.includes(data)) {
            this.favorites.push(data);
            localStorage.setItem('favorites', JSON.stringify(this.favorites));
            this.setupImageEtoile();
          }
    }

    afficherFavoris(){
        view.afficherFav(this)
    }

    deleteAfficherFavoris(){
    
        // while(view.ulfavoris.firstChild){
        //     view.ulfavoris.removeChild(view.ulfavoris.firstChild);
        // }
        // view.ulfavoris.nextSibling.remove();
        view.ulfavoris.innerHTML = "";
        
    }

    textisAlreadyFavorite(text){
        for(let i=0; i<view.ulfavoris.length; i++){
            const favoriText = view.blocresultatulfavoris[i].querySelector("span").textContent;
            if(favoriText === text){
                return true;
            }
        }
    }

    getFavorites(){
        return this.favorites;
    }

    deleteFavorites(index){

            this.favorites.splice(index, 1);
            //localStorage
            localStorage.setItem('favorites', JSON.stringify(this.favorites));
            this.setupImageEtoile();
            view.afficherFav(this);
        
    }

    isAlreadyFavorite(favorite){
        for(let i = 0; i < this.favorites.length; i++){
            if(this.favorites[i] == favorite){
                return true;
            }
        }
        return false;
    }

    getFavoriteIndex(data){
        for(let i = 0; i < this.favorites.length; i++){
            if(JSON.stringify(this.favorites[i]) === JSON.stringify(data)){
                return i;
            }
        }
        return -1;
    }

    getFavIndexWithText(text) {
        // boucle sur les éléments enfants de la ul-favoris
        for (let i = 0; i < view.ulfavoris.childNodes.length; i++) {
          const li = view.ulfavoris.childNodes[i];
          // récupérer le texte du span
          const favoriText = li.querySelector("span").textContent;
          if (favoriText === text) {
            return i;
          }
        }
    }

    /* *************************** */

    /* REMPLISSAGE ÉTOILE */
    
    setupImageEtoile(){
        if(this.isAlreadyFavorite(this.searchText) | this.textisAlreadyFavorite(this.searchText)){
            view.btnfavoris.disabled = false;
            view.etoile.src = "images/etoile-pleine.svg";
            view.btnfavoris.style.backgroundColor = "rgb(26, 188, 156)";
        }else{
            view.btnfavoris.disabled = false;
            view.etoile.src = "images/etoile-vide.svg";
            view.btnfavoris.style.backgroundColor = "rgb(26, 188, 156)";
        }

        if(this.searchText == ""){
            view.etoile.src = "images/etoile-vide.svg";
            view.btnfavoris.style.backgroundColor = "#bebebe";
            view.btnfavoris.disabled = true;
        }
    }

    /* *************************** */


    /* GIF */
    
    loading(){
        view.loading_gif.style.display = "block";
    }

    removeLoading(){
        view.loading_gif.style.display = "none";
    }

    /* *************************** */

}