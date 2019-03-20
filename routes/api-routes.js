// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {  

app.get("/api/character/:id", function(req, res) {

    db.Characters.findAll({
      where: {
        id: req.params.id 
      }
    })
    .then(function(dbCharacter) {
      res.json(dbCharacter);
    })
    .catch(function(err) {
      res.json(err);
    });
});

  // POST route for saving a new character
  app.post("/api/create", function(req, res) {
    db.Characters.create({
      name: req.body.name,
      power: req.body.reputation,
      knowlege: req.body.knowlege,
      sanity: req.body.sanity
    }).then(function(dbCharacter) {
      res.json(dbCharacter);
    })
      .catch(function(err) {
        console.log("DB Error on Insert");
        res.json(err);
      });
  });

  // PUT route for updating characters. We can get the updated character data from req.body
  app.put("/api/updateCharacter", function(req, res) {
    db.Characters.update({
      power: req.body.power,
      knowlege: req.body.knowlege,
      sanity: req.body.sanity
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbCharacter) {
      res.json(dbCharacter);
    })
      .catch(function(err) {
        res.json(err);
      });
  });
};
