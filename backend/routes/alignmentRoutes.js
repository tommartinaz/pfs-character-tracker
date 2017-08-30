var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', (req, res) => {
  knex('alignments')
    .select()
    .then(function (alignments) {
      res.send(alignments);
    });
});

module.exports = router;
