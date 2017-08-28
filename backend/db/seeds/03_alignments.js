
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('alignments').del()
    .then(function () {
      // Inserts seed entries
      return knex('alignments').insert([
        {
          "alignment": "LG"
        },
        {
          "alignment": "LN"
        },
        {
          "alignment": "NG"
        },
        {
          "alignment": "N"
        },
        {
          "alignment": "CG"
        },
        {
          "alignment": "CN"
        }
      ]);
    });
};
