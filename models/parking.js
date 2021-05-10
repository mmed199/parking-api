let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ParkingSchema = Schema({
    id: String,
    ville:String,
    adresse:String,
    nom:String,
    placesDispo:Number,
    placesTotal:Number,
    prixHeure:Number,
    commentaire:String,
    emplacement: {
        type: {
          type: String, 
          enum: ['Point'], 
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
    }
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Parking', ParkingSchema);