
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {
          "class": "Alchemist"
        },
        {
          "class": "Barbarian"
        },
        {
          "class": "Bloodrager"
        },
        {
          "class": "Cleric"
        },
        {
          "class": "Druid"
        },
        {
          "class": "Fighter"
        },
        {
          "class": "Investigator"
        },
        {
          "class": "Paladin"
        },
        {
          "class": "Ranger"
        },
        {
          "class": "Sorcerer"
        },
        {
          "class": "Summoner"
        },
        {
          "class": "Wizard"
        }
      ]);
    });
};
