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
🌁 Les villes presentent dans la BD : 
- Antibes
- Menton
- Mougins
- Nice
- Biot
- Valbonne
- Villeneuve-Loubet
- Villefranche-sur-Mer
- Vallauris

# 🌐 EndPoints
## GET sur /api/parkings </br>
Retourne la liste des parkings selon les filtres utilisés : </br>
✔️ Action = ["ville", "position"] pour choisir si on va chercher avec le nom de la ville, ou une position avec latitude et longitude</br>
✔️ Ville - si _Action = ville_, on va utiliser cette variable pour chercher les parkings d'une ville</br>
✔️ Latitude & Longitude - si _Action = position_, on va utiliser cette variable pour chercher les parkings les plus proche de cette point</br>
✔️ MaxDistance (en mètres) - si _Action  = position_, on va utiliser cette variable comme distance maximale du point recherché</br> 
✔️ Disponible = ["true", "false"] ce parametre determine si on veut cherche seulement les parking disponible, ou non disponible (ne pas utiliser pour avoir les deux)

# 🌐 Exemples 
