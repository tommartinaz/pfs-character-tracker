exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scenarios').del()
    .then(function() {
      // Inserts seed entries
      return knex('scenarios').insert([{
          "scenario_num": 1,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "Silent Tide",
          "character_id": 1
        },
        {
          "scenario_num": 2,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "The Hydra's Fang Incident",
          "character_id": 2
        },
        {
          "scenario_num": 3,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "Murder on the Silken Caravan",
          "character_id": 1
        },
        {
          "scenario_num": 4,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "The Frozen Fingers of Midnight",
          "character_id": 3
        },
        {
          "scenario_num": 5,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "Mists of Mwangi",
          "character_id": 4
        },
        {
          "scenario_num": 6,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "Black Waters",
          "character_id": 5
        },
        {
          "scenario_num": 7,
          "season": 0,
          "low_level": 1,
          "high_level": 7,
          "title": "Among the Living",
          "character_id": 1
        },
        {
          "scenario_num": 8,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "Slave Pits of Absalom",
          "character_id": 6
        },
        {
          "scenario_num": 13,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "The Prince of Augustana",
          "character_id": 7
        },
        {
          "scenario_num": 14,
          "season": 0,
          "low_level": 1,
          "high_level": 7,
          "title": "The Many Fortunes of Grandmaster Torch",
          "character_id": 8
        },
        {
          "scenario_num": 16,
          "season": 0,
          "low_level": 5,
          "high_level": 9,
          "title": "To Scale the Dragon",
          "character_id": 8
        },
        {
          "scenario_num": 17,
          "season": 0,
          "low_level": 1,
          "high_level": 7,
          "title": "Perils of the Pirate Pact",
          "character_id": 0
        },
        {
          "scenario_num": 20,
          "season": 0,
          "low_level": 7,
          "high_level": 11,
          "title": "King Xeros of Old Azlant",
          "character_id": 0
        },
        {
          "scenario_num": 22,
          "season": 0,
          "low_level": 7,
          "high_level": 11,
          "title": "Fingerprints of the Fiend",
          "character_id": 0
        },
        {
          "scenario_num": 23,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "Tide of Morning",
          "character_id": 0
        },
        {
          "scenario_num": 24,
          "season": 0,
          "low_level": 1,
          "high_level": 7,
          "title": "Delcline of Glory",
          "character_id": 0
        },
        {
          "scenario_num": 26,
          "season": 0,
          "low_level": 7,
          "high_level": 11,
          "title": "Lost at Bitter End",
          "character_id": 0
        },
        {
          "scenario_num": 27,
          "season": 0,
          "low_level": 5,
          "high_level": 9,
          "title": "Our Lady of Silver",
          "character_id": 0
        },
        {
          "scenario_num": 28,
          "season": 0,
          "low_level": 7,
          "high_level": 11,
          "title": "Lyrics of Extinction",
          "character_id": 0
        },
        {
          "scenario_num": 29,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "The Devil We Know - Part I: Shipyard Rats",
          "character_id": 0
        },
        {
          "scenario_num": 30,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "The Devil We Know - Part II: Cassomir's Locker",
          "character_id": 0
        },
        {
          "scenario_num": 31,
          "season": 1,
          "low_level": 5,
          "high_level": 9,
          "title": "Sniper in the Deep",
          "character_id": 0
        },
        {
          "scenario_num": 32,
          "season": 1,
          "low_level": 7,
          "high_level": 11,
          "title": "Drow of the Darklands Pyramid",
          "character_id": 0
        },
        {
          "scenario_num": 33,
          "season": 1,
          "low_level": 1,
          "high_level": 5,
          "title": "Assault on the Kingdom of the Impossible",
          "character_id": 0
        },
        {
          "scenario_num": 34,
          "season": 1,
          "low_level": 7,
          "high_level": 11,
          "title": "Encounter at the Drowning Stones",
          "character_id": 0
        },
        {
          "scenario_num": 35,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "Voice in the Void",
          "character_id": 0
        },
        {
          "scenario_num": 36,
          "season": 1,
          "low_level": 7,
          "high_level": 11,
          "title": "Echoes of the Everwar - Part I: THe Prisoner of Skull Hill",
          "character_id": 0
        },
        {
          "scenario_num": 37,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "The Beggar's Pearl",
          "character_id": 0
        },
        {
          "scenario_num": 38,
          "season": 1,
          "low_level": 7,
          "high_level": 11,
          "title": "No Plunder, No Pay",
          "character_id": 0
        },
        {
          "scenario_num": 39,
          "season": 1,
          "low_level": 1,
          "high_level": 5,
          "title": "The Citadel of Flame",
          "character_id": 0
        },
        {
          "scenario_num": 40,
          "season": 1,
          "low_level": 7,
          "high_level": 11,
          "title": "Hall of Drunken Heroes",
          "character_id": 0
        }
      ]);
    });
};
