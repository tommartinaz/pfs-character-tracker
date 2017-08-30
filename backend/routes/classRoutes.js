var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', (req, res) => {
  knex('classes')
    .select()
    .then(function (classes) {
      res.send(classes);
    });
});

module.exports = router;
