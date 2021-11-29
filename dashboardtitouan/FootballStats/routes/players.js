var express = require('express');
var router = express.Router();
const _=require("lodash");
var Bodyparser = require("body-parser");
var urlencodedparser = Bodyparser.urlencoded({extended:false});

module.exports = router;


let TablePlayers = [{
  player:"Lucas Paqueta",
  id:"0"
}];

router.get('/',(req,res) => {
  res.status(200).json({ TablePlayers });
});


router.get('/:id',(req,res) => {
  const id = req.params.id;
  const player = _.find(TablePlayers,["id",id]);
  
  res.status(200).json({
    message:'Players found!',
    player
  });
});


/* PUT new user. */
router.put('/', urlencodedparser, (req, res) => {
  // Get the data from request from request
  const player = req.body.player;
  // Create new unique id
  const id = _.uniqueId();
  // Insert it in array (normaly with connect the data with the database)
  TablePlayers.push({ player, id });
  // Return message
  res.json({
    message: `Just added ${id}`,
    player: { player, id }
  });
});
