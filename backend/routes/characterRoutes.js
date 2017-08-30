var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', (req, res) => {
  knex('characters')
    .select('id', 'name', 'alignment_id', 'race_id', 'class_id')
    .then(character => res.send(character));
})
router.get('/details', (req, res) => {
  knex('characters')
    .select('characters.id', 'characters.name', 'alignments.alignment', 'races.race', 'classes.class')
    .leftJoin('races', 'characters.race_id', 'races.id')
    .leftJoin('alignments', 'characters.alignment_id', 'alignments.id')
    .leftJoin('classes', 'characters.class_id', 'classes.id')
    .then(function (characters) {
      res.send(characters);
    });
});

router.post('/', (req, res) => {
  knex('characters')
    .insert(req.body)
    .then(res.redirect('/characters'))
})

router.post('/:id', (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  knex('characters')
  .update(req.body)
  .where('id', req.params.id)
  .then(res.redirect(`/characters`))

})

router.delete('/:id', (req, res) => {
  knex('characters')
    .delete()
    .where('id', req.params.id)
    .then(res.redirect('/characters'))
})

router.get('/:id', (req, res) => {
  knex('characters')
    .select('characters.name', 'alignments.alignment', 'races.race', 'classes.class')
    .join('races', 'characters.race_id', 'races.id')
    .join('alignments', 'characters.alignment_id', 'alignments.id')
    .join('classes', 'characters.class_id', 'classes.id')
    .where('characters.id', req.params.id)
    .then(function (characters) {
      res.send(characters);
    });

})

module.exports = router;
