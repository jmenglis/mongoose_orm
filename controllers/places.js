var express = require('express');
var controller = express.Router();

var PlanetPlace = require('../models/PlanetPlace');

// challenge: create a new model + schema in /models/Place.js
// This model we're creating is the 'Place' model
// You will be importing new data to the same database
// but a new collection 'places'
// you will then use controller.get('/') to .find all entries in this collection
// browse to localhost:3000/places/ to see the api
// data will be sourced...


controller.get('/', function(req, res, next) {
  // get ALL of the types from my TYPES collection
  // .find has an error and maybe types that we want.
  PlanetPlace.find(function(err, places) {
    if (err) console.log(err);
    res.json(places);
  });
});

module.exports = controller;
