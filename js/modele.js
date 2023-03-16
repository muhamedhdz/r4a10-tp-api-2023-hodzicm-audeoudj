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

    setFavorites(favorites){
        this.favorites = favorites;
    }

    clearFavorites(){
        this.favorites = [];
    }

    removeFavorites(index){
        this.favorites.splice(index, 1);
    }

    addFavorites(favorite){
        this.favorites.push(favorite);
    }

    deleteFavorites(favorite){
        for(let i = 0; i < this.favorites.length; i++){
            if(this.favorites[i].hits[0].recipe.label == favorite.hits[0].recipe.label){
                this.favorites.splice(i, 1);
            }
        }
    }

    isAlreadyFavorite(favorite){
        for(let i = 0; i < this.favorites.length; i++){
            if(this.favorites[i].hits[0].recipe.label == favorite.hits[0].recipe.label){
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
        const baseURL = `https://api.edamam.com/search?q=${this.searchText}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3`;
        //on va récupérer les données de l'API
        const response = await fetch(baseURL);
        //on va convertir les données en JSON
        const data = await response.json();
        //afficher pr voir
        console.log(data);
        //console.log(JSON.stringify(data));
        this.setResult(data);
        this.afficher(data);
        return data;
    }
    
    //on va créer une fonction qui va afficher les données de l'API dans l'HTML

    afficher(data){
        //si il n'y a pas de résultat
        if(data.hits.length == 0){
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

    afficherFavoris(){
        window.localStorage.setItem("favorites", JSON.stringify(this.favorites)); 
        if(this.favorites.length == 0 && view.ulfavoris.childElementCount == 0){
            const empty = document.createElement("p");
            empty.classList.add("info-vide");
            empty.innerText = "Aucun favoris";
            view.sectionfavoris.appendChild(empty);
        }else{
            for(let i = 0; i < this.favorites.length; i++){
                console.log("test" + i) ;
                const li = document.createElement("li");
                const img = document.createElement("img");
                const span = document.createElement("span");

                li.appendChild(span);
                li.appendChild(img);

                img.src = "img/croix.png";
                img.title = "Cliquer pour supprimer le favori";
                img.width = "15";

                span.innerText = this.searchText;
                span.title = "Cliquer pour relancer la recherche";

                view.ulfavoris.append(li);
            }
    }
}
}

// on veut afficher

// 1. Image (hits.recipe.image)
// 2. Label (hits.recipe.label)

//étape 2
// 3. Ingredients (hits.recipe.ingredientLines)