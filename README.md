# 🚗  Parkings API
Cette Api présente des informations sur les parkings de la region Alpes Maritimes, **actuellement Les données sont aléatoire.** </br>

# 😃 Structure des données :
Chaque parking à les informations suivantes :
- ville: le nom de la ville (liste en dessous)
- adresse: aléatoire,
- nom: aléatoire,
- placesDispo: nombre aléatoire,
- placesTotal: nombre aléatoire,
- prixHeure: aléatoire,
- commentaire: aléatoire,
- emplacement [Latitude, Longitude] aléatoire

</br>
🌁 Les villes presentent dans la BD : </br>
- Antibes </br>
- Menton </br>
- Mougins </br>
- Nice </br>
- Biot </br>
- Valbonne </br>
- Villeneuve-Loubet </br>
- Villefranche-sur-Mer </br>
- Vallauris </br>

# 🌐 EndPoints
## GET sur /api/parkings </br>
Retourne la liste des parkings selon les filtres utilisés : </br>
✔️ Action = ["ville", "position"] pour choisir si on va chercher avec le nom de la ville, ou une position avec latitude et longitude</br>
✔️ Ville - si _Action = ville_, on va utiliser cette variable pour chercher les parkings d'une ville</br>
✔️ Latitude & Longitude - si _Action = position_, on va utiliser cette variable pour chercher les parkings les plus proche de cette point</br>
✔️ MaxDistance (en mètres) - si _Action  = position_, on va utiliser cette variable comme distance maximale du point recherché</br> 
✔️ Disponible = ["true", "false"] ce parametre determine si on veut cherche seulement les parking disponible, ou non disponible (ne pas utiliser pour avoir les deux)

# 🌐 Exemples 
https://parkingsapi.herokuapp.com/api/parkings List complète des parkings </br>
https://parkingsapi.herokuapp.com/api/parkings?action=ville&ville=antibes&disponible=true les parkings disponible à Antibes </br>
https://parkingsapi.herokuapp.com/api/parkings?action=vposition&latitude=1&longitude=1&maxDistance=1000000&disponible=false les parkings disponible en utilisant une position </br>
**NB** : vu que les latitudes et les longitudes sont aléatoire, c'est recommandé d'utiliser des grande MaxDistance pour avoir plus de résultats

