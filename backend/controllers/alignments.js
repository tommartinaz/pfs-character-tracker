const knex = require('../db/knex');

module.exports = {
    getAlignments: (req, res) => {
        knex('alignments')
            .select()
            .then(data => {
                res.send(data)
            });
    }
}