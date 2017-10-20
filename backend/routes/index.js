var express = require('express');
var router = express.Router();

var Pokemon = require('../models/pokemon');

module.exports = function registerRoutes(app) {
  app.get('/api/pokemons', function(req, res) {
    Pokemon.find().then(
      function success(list) {
        res.json(list);
      },
      function error(e) {
        res.status(500).json({
          message: 'An unexpected error has occurred',
          e: e
        });
      });
  });
};
