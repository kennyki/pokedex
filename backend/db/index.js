var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pokedex');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to pokedex!')
});

module.exports = db;
