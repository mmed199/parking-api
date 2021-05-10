let Parking = require('../models/parking');

// Récupérer tous les parking (GET)
function getParkings(req, res){
    let action = req.query.action
    let ville = req.query.ville
    let latitude = req.query.latitude
    let longitude = req.query.longitude
    let disponible = req.query.disponible
    let maxDistance = req.query.maxDistance
    let query = {}

    if(jsUcfirst(action) == "Ville") {
        query.ville = jsUcfirst(ville)
    } else if (jsUcfirst(action) == "Position") {
        maxDistance = maxDistance || 100000
        query.emplacement = {
            "$near": {
                "$geometry": {
                    "type": "Point",
                    "coordinates": [latitude, longitude]
                },
                "$maxDistance": maxDistance
                
            }
        } 
    }

    if(disponible == "true") {
        query.placesDispo = { $ne: 0 }
    } else if (disponible == "false") {
        query.placesDispo = { $eq: 0 }
    }


    Parking.find(query, (err, parkings) => {
        if(err){
            res.send(err)
        } else {
            res.send(parkings);
        }
    });
}


// Ajout d'un parking (POST)
function postParking(req, res){
    let parking = new Parking(req.body)
    console.log(parking)
    if(parking.ville && parking.emplacement && parking.prixHeure) {
        parking.save((err) => {
            if(err){
                res.json({
                    error : true,
                    message : "Erreur pendant l'ajout du parking"
                })
            } else {
                res.json({
                    error : false,
                    message : 'Parking ajouté'
                })
            }

        })
    } else {
        res.send({
            error: true,
            message : "Les colonnes ville, location, prix sont obligatoire"
        });
    }
}


function jsUcfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

module.exports = { getParkings, postParking };
