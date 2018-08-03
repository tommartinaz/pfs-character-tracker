const knex = require('../db/knex');
// (req, res) => {
//     knex('characters')
//       });
module.exports = {
    getAllCharacters: (req, res) => {
        knex('characters')
            .select('characters.id', 'characters.name', 'alignments.alignment', 'races.race', 'classes.class', 'characters.level')
            .leftJoin('races', 'characters.race_id', 'races.id')
            .leftJoin('alignments', 'characters.alignment_id', 'alignments.id')
            .leftJoin('classes', 'characters.class_id', 'classes.id')
            .orderBy('characters.id')
            .then(function (characters) {
                res.send(characters);
        });
    },
    getOneCharacter: (req, res) => {
        knex('characters')
            .select()
            .where('id', req.params.id)
            .then(data => {
                res.send(data);
            });
    },
    deleteCharacter: (req, res) => {
        knex('characters')
            .where('id', req.params.id)
            .del()
            .then(() => res.sendStatus(204));
    },
    addCharacter: (req, res) => {
        knex('characters')
            .returning(['id', 'name'])
            .insert(req.body)
            .then(data => res.send(data));
    },
    updateCharacter: (req, res) => {
        knex('characters')
            .returning(['name', 'race_id', 'class_id', 'alignment_id', 'level', 'char_num'])
            .where('id', req.params.id)
            .update(
                req.body
            )
            .then(data => res.send(data));
    }
}