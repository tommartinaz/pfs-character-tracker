const knex = require('../db/knex');

module.exports = {
    getAllScenarios: (req, res) => {
        knex('scenarios')
            .select()
            .then(data => {
                res.send(data);
            });
    }
}