
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        {
          "name": "Obat Al Badaz",
          "race_id": 7,
          "class_id": 6,
          "alignment_id": 2,
          "level": 12
        },
        {
          "name": "Chanos",
          "race_id": 7,
          "class_id": 8,
          "alignment_id": 1,
          "level": 10
        },
        {
          "name": "Barbazel",
          "race_id": 4,
          "class_id": 6,
          "alignment_id": 2,
          "level": 5
        }
      ]);
    });
};
