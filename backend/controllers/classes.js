const knex = require('../db/knex');

module.exports = {
    getAllClasses: (req, res) => {
        knex('classes')
            .select()
            .then(data => {
                res.send(data);
            });
    },
    getOneClass: (req, res) => {
        knex('classes')
            .select()
            .where('id', req.params.id)
            .then(data => {
                res.send(data);
            });
    },
    deleteClass: (req, res) => {
        knex('classes')
            .where('id', req.params.id)
            .del()
            .then(() => res.sendStatus(204));
    },
    addClass: (req, res) => {
        knex('classes')
            .returning(['id', 'class'])
            .insert(req.body)
            .then(data => res.send(data));
    },
    updateClass: (req, res) => {
        knex('classes')
            .returning(['class',])
            .where('id', req.params.id)
            .update(
                req.body
            )
            .then(data => res.send(data));
    }
}