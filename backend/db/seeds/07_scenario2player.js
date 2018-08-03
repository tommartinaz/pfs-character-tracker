
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scenario2player').del()
    .then(function () {
      // Inserts seed entries
      return knex('scenario2player').insert([
        {
          "player_id": 1,
          "scenario_id": 1
        }
      ]);
    });
};
