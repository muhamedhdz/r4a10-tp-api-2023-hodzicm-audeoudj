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
        this.favorites = [];
    }

    getFavorites(){
        return this.favorites;
    }

    clearFavorites(){
        this.favorites = [];
    }

    addFavorites(data){
        if(!this.isAlreadyFavorite(data)){
            this.favorites.push(data);
        }
    }

    deleteFavorites(index){
        this.favorites.splice(index, 1);
    }

    isAlreadyFavorite(favorite){
        for(let i = 0; i < this.favorites.length; i++){
            if(this.favorites[i] == favorite){
                return true;
            }
        }
        return false;
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
    }


    async fetchAPI() {
        this.loading();
        const baseURL = `https://api.edamam.com/search?q=${this.searchText}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3`;
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
    
    //on va créer une fonction qui va afficher les données de l'API dans l'HTML

    afficher(data){
        // enlever le gif du chargement
        this.removeLoading();

        //si il n'y a pas de résultat
        console.log("ICIIIIIIIIIIIIIIIIIII");
        console.log(data);
        
        if (!data || !data.hits || data.hits.length === 0){
            //création d'un élément HTML
            const empty = document.createElement("p");
            //ajout d'une classe
            empty.classList.add("info-vide");
            //ajout d'un texte
            empty.innerText = "Aucun résultat";
            //ajout de l'élément dans le HTML
            view.blocresultat.appendChild(empty);
        }else{
            for(let i = 0; i < data.hits.length; i++){
                //création des éléments HTML
                const res = document.createElement("div");
                const img = document.createElement("img");
                const titre = document.createElement("h4");
                const ingredients = document.createElement("button");
                //ajout des éléments dans la div
                res.appendChild(img);
                res.appendChild(titre);
                res.appendChild(ingredients);
                //ajout des classes
                res.classList.add("res");
                res.classList.add("card");
                //ingredients.classList.add("btn_ingredients");
                //ajout des attributs
                img.src = data.hits[i].recipe.image;
                titre.innerText = data.hits[i].recipe.label; 
                view.blocresultat.appendChild(res);
            }
        }
    }

    afficherFavoris(favorites){ 
        //&& view.ulfavoris.childElementCount == 0
        console.log(favorites);
        favorites = favorites[0];
        if (!favorites || !favorites.hits || favorites.hits.length === 0){
            const empty = document.createElement("p");
            empty.classList.add("info-vide");
            empty.innerText = "Aucun favoris";
            view.sectionfavoris.appendChild(empty);
        }else{
                const li = document.createElement("li");
                const img = document.createElement("img");
                const span = document.createElement("span");

                li.appendChild(span);
                li.appendChild(img);

                img.src = "images/croix.svg";
                img.title = "Cliquer pour supprimer le favori";
                img.width = "15";
                img.classList.add("btn_delete");

                span.innerText = this.searchText;
                span.title = "Cliquer pour relancer la recherche";

                view.ulfavoris.append(li);

        }
        
    }


    deleteAfficherFavoris(){
    
        while(view.ulfavoris.firstChild){
            view.ulfavoris.removeChild(view.ulfavoris.firstChild);
        }
        view.ulfavoris.nextSibling.remove();
        
    }

    deleteAfficher(){
        if(view.blocresultat.childElementCount > 0){
        while(view.blocresultat.firstChild){
            view.blocresultat.removeChild(view.blocresultat.firstChild);
        }
        }
    }


    textisAlreadyFavorite(){
        for(let i = 0; i < view.ulfavoris.childElementCount; i++){
            if(view.ulfavoris.children[i].firstChild.innerText == this.searchText){
                return true;
            }
        }
        return false;
    }


    setupImageEtoile(){
        if(this.isAlreadyFavorite(this.searchText)){
            view.etoile.src = "images/etoile-pleine.svg";
        }else{
            view.etoile.src = "images/etoile-vide.svg";
        }
    }

    getFavoriteIndex(data){
        for(let i = 0; i < this.favorites.length; i++){
            if(JSON.stringify(this.favorites[i]) === JSON.stringify(data)){
                return i;
            }
        }
        return -1;
    }
    
    loading(){
        view.loading_gif.style.display = "block";
    }

    removeLoading(){
        view.loading_gif.style.display = "none";
    }
}