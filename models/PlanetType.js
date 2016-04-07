// require ORM

var mongoose = require('mongoose'); // our ORM


// define what types our values should be
// using a Schema - this is similar to declaring
// table columsn etc using Migration
var PlanetTypeSchema = new mongoose.Schema({
  type: String,
  minMass: Number,
  maxMass: Number,
  desc: String
});

// we export a Mongoose Model with the Schema
module.exports = mongoose.model('Type', PlanetTypeSchema);
