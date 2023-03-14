

//toutes les méthodes de la classe Modele

export {APP_ID, APP_KEY};

class Modele{

    constructor(){
        this.searchText = '';
    }


    async fetchAPI() {
       // const baseURL = `https://api.edamam.com/search?q=${this.searchText}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=15`;
        const baseURL = `https://api.edamam.com/search?q=chicken&app_id=22297be0&app_key=9b01c1e1d8cf19df33ed768b6c8f0b64&from=0&to=15`;
        console.log(this.searchText);
        //on va récupérer les données de l'API
        const response = await fetch(baseURL);
        //on va convertir les données en JSON
        const data = await response.json();

        try {
            // Ouverture du fichier en mode écriture
            $file = fopen('../api/datarep.json', 'w');
            // Écriture de la chaine récupérée dans le fichier etat.json
            fputs($file, $data);
            // Fermeture du fichier
            fclose($file);
          } catch (Exception) {
            // Définition du statut de la réponse puis levée d'une exception
            throw new Exception("Erreur " + Exception);
          }
    
    }

}
