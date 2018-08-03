const knex = require('../db/knex');

module.exports = {
    getAllPlayers: (req, res) => {
        knex('players')
            .select()
            .then(data => {
                res.send(data);
            });
    },
    getOnePlayer: (req, res) => {
        knex('players')
            .select()
            .where('id', req.params.id)
            .then(data => {
                res.send(data);
            });
    },
    deletePlayer: (req, res) => {
        knex('players')
            .where('id', req.params.id)
            .del()
            .then(() => res.sendStatus(204));
    },
    addPlayer: (req, res) => {
        knex('players')
            .returning(['id', 'first_name', 'last_name'])
            .insert(req.body)
            .then(data => res.send(data));
    },
    updatePlayer: (req, res) => {
        knex('players')
            .returning(['first_name', 'last_name', 'pfs_id'])
            .where('id', req.params.id)
            .update(
                req.body
            )
            .then(data => res.send(data));
    }
}