const APP_ID = '22297be0';
const APP_KEY = '9b01c1e1d8cf19df33ed768b6c8f0b64';

class Modele{

    /*
    *  @var string
    */
    searchText;

    constructor(){
        this.searchText = '';
    }

    getSearchedText(){
        return this.searchText;
    }

    setSearchedText(search){
        this.searchText = search;
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
        this.afficher(data);
        return data;
    }
    
    //on va créer une fonction qui va afficher les données de l'API dans l'HTML

   /* afficher(data){
        for(let i = 0; i < data.hits.length; i++){
            const res = document.createElement("p"); 
            res.classList.add("res");
            res.innerText = data.hits[i].recipe.label;  
            view.blocresultat.appendChild(res);
        }
    }*/


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
                const favoris = document.createElement("button");
                const ingredients = document.createElement("button");
                //ajout des éléments dans la div
                res.appendChild(img);
                res.appendChild(titre);
                res.appendChild(favoris);
                res.appendChild(ingredients);
                //ajout des classes
                res.classList.add("res");
                res.classList.add("card");
                favoris.classList.add("btn_favoris");
                //ingredients.classList.add("btn_ingredients");
                //ajout des attributs
                img.src = data.hits[i].recipe.image;
                titre.innerText = data.hits[i].recipe.label; 
                view.blocresultat.appendChild(res);
            }
        }
    }

    setFavorite(){
        console.log("favoris");
    }
    

}

// on veut afficher

// 1. Image (hits.recipe.image)
// 2. Label (hits.recipe.label)

//étape 2
// 3. Ingredients (hits.recipe.ingredientLines)