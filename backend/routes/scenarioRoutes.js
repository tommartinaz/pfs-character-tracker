var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', (req, res) => {
    knex('scenarios as s')
        .select(
          's.id',
          's.title',
          'c.name',
          'c.id as char_id',
          's.season',
          's.scenario_num',
          's.low_level',
          's.high_level',
          's.description'
        )
        .leftJoin('characters as c', 's.character_id', 'c.id')
        .orderBy('s.id')
        .then(scenarios => {
            res.send(scenarios)
        })
});

router.get('/:id', (req, res) => {
    knex('scenarios')
        .select('scenarios.id', 'scenarios.title', 'characters.id as char_id', 'characters.name')
        .leftJoin('characters', 'scenarios.character_id', 'characters.id')
        .where('scenarios.id', req.params.id)
        .then(scenarios => {
            res.send(scenarios)
        })
})

router.post('/:id', (req, res) => {
    knex('scenarios')
        .update(req.body)
        .where('id', req.params.id)
        .then(res.redirect('/scenarios'))
})

module.exports = router;
