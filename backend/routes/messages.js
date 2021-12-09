const express = require('express');
const Thing = require('../models/things');
const mongoose = require('mongoose');
const router = express.Router();
module.exports = router;

mongoose.connect('mongodb+srv://toko:mot2passe@cluster0.2mayl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


router.get('/', (req, res) => {
    try {
      Thing.find()
      .then(things => res.status(200).json(things))
      .catch(error => res.status(400).json({ error }));
    }
    catch(err) {
      console.log(err)
    }
    
  });