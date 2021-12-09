const mongoose = require('mongoose');
const express = require('express');
const app = express();
const Thing = require('./models/things');
const cors = require('cors');

const messages =  require('./routes/messages.js');

app.use(cors());
app.use('/messages', messages);

// mongoose.connect('mongodb+srv://toko:mot2passe@cluster0.2mayl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  // { useNewUrlParser: true,
    // useUnifiedTopology: true })
  // .then(() => console.log('Connexion à MongoDB réussie !'))
  // .catch(() => console.log('Connexion à MongoDB échouée !'));



/* 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use('/api/message', (req, res, next) => {
    try {
      Thing.find()
      .then(things => res.status(200).json(things))
      .catch(error => res.status(400).json({ error }));
    }
    catch(err) {
      console.log(err)
    }
    
  }); */


module.exports = app;