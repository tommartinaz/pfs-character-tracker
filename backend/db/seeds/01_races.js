
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('races').del()
    .then(function () {
      // Inserts seed entries
      return knex('races').insert([
        {
          "race": "Aasimar"
        },
        {
          "race": "Dwarf"
        },
        {
          "race": "Elf"
        },
        {
          "race": "Half-elf"
        },
        {
          "race": "Half-orc"
        },
        {
          "race": "Halfling"
        },
        {
          "race": "Human"
        },
        {
          "race": "Nagaji"
        },
        {
          "race": "Sylph"
        },
        {
          "race": "Tiefling"
        }
      ]);
    });
};
