let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let parkings = require('./routes/parkings');
let cors = require('cors')

let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const uri = 'mongodb+srv://dbUser:QiJjY8MtKqZZM8P0@myassignmentscluster.vw768.mongodb.net/MyAssignmentsDb?retryWrites=true&w=majority';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:false,
  useCreateIndex: true,
  useUnifiedTopology: true
};

mongoose.connect(uri, options)
  .then(() => {
    console.log("Connecté à la base MongoDB assignments dans le cloud !");
    console.log("at URI = " + uri);
    
    },
    err => {
      console.log('Erreur de connexion: ', err);
    });

// Pour accepter les connexions cross-domain (CORS)
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Pour les formulaires
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors())

let port = process.env.PORT || 8010;

// les routes
const prefix = '/api';

app.route(prefix + '/parkings')
  .get(parkings.getParkings)
  .post(parkings.postParking);  


// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log('Serveur démarré sur http://localhost:' + port);

module.exports = app;


