var mongoose = require('mongoose');

var PlanetPlaceSchema = new mongoose.Schema ({
  contributor: String,
  place: String,
  notes: String,
  typeOfPlace: String
});

module.exports = mongoose.model('Place', PlanetPlaceSchema);
