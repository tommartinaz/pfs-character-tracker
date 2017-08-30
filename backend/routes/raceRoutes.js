var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', (req, res) => {
  knex('races')
    .select()
    .then(function (races) {
      res.send(races);
    });
});

module.exports = router;
