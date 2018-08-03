
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        {
          first_name: 'Tom',
          last_name: 'Martin',
          pfs_id: 62911
        }
      ]);
    });
};
