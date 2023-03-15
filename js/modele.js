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
        const baseURL = `https://api.edamam.com/search?q=${this.searchText}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=15`;
        //on va récupérer les données de l'API
        const response = await fetch(baseURL);
        //on va convertir les données en JSON
         const data = await response.json();
        //afficher pr voir
        console.log(data);
        //console.log(JSON.stringify(data));
        return data;
    }

}