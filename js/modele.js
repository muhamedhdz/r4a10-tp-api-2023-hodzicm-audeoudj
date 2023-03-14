

//toutes les méthodes de la classe Modele


//l'appel à l'API

export {APP_ID, APP_KEY};



async function fetchAPI() {
    const baseURL = 'https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=15';
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



    //on va retourner les données
    return data;
}