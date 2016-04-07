var mongoose = require('mongoose');
// this connects us to our database
var connectionString = process.env.DB;
console.log('Attempting to connect to MongoDB');
mongoose.connect(connectionString); // connect to the DB supplied in the connectionString

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to: ' + process.env.DB + ".");
});

mongoose.connection.on('error', function(error) {
  console.log('Mongoose erred: ' + error + ".");
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose Disconnected!');
});
