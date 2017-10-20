var mongoose = require('mongoose');
var pokemonSchema = mongoose.Schema({
  '#': String,
  'Name': String,
  'Type 1': String,
  'Type 2': String,
  'Total': String,
  'HP': String,
  'Attack': String,
  'Defense': String,
  'Sp Atk': String,
  'Sp Def': String,
  'Speed': String,
  'Generation': String,
  'Legendary': String
});

var Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
