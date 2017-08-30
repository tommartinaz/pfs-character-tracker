var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', (req, res) => {
    knex('scenarios')
        .select('scenarios.id', 'scenarios.title', 'characters.name', 'characters.id as char_id')
        .leftJoin('characters', 'scenarios.character_id', 'characters.id')
        .orderBy('scenarios.id')
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
