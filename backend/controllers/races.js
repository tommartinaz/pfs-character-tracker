const knex = require('../db/knex');
const moment = require('moment');

module.exports = {
    getAllRaces: (req, res) => {
        knex('races')
            .select()
            .then(data => {
                res.send(data);
            });
    },
    getOneRace: (req, res) => {
        knex('races')
            .select()
            .where('id', req.params.id)
            .then(data => {
                res.send(data);
            });
    },
    deleteRace: (req, res) => {
        knex('races')
            .where('id', req.params.id)
            .del()
            .then(() => res.sendStatus(204));
    },
    addRace: (req, res) => {
        knex('races')
            .returning(['id', 'race'])
            .insert(req.body)
            .then(data => res.send(data));
    },
    updateRace: (req, res) => {
        const { race } = req.body;
        knex('races')
            .returning(['id', 'race'])
            .where('id', req.params.id)
            .update(
                {
                    race,
                    updated_at: moment(Date.now())
                }
            )
            .then(data => res.send(data));
    }
}