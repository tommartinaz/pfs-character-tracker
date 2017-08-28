
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scenarios').del()
    .then(function () {
      // Inserts seed entries
      return knex('scenarios').insert([
        {
          "scenario_num": 1,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "Silent Tide",
          "character_id": 8
        },
        {
          "scenario_num": 2,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "The Hydra's Fang Incident",
          "character_id": 9
        },
        {
          "scenario_num": 3,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "Murder on the Silken Caravan",
          "character_id": 2
        },
        {
          "scenario_num": 4,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "The Frozen Fingers of Midnight",
          "character_id": 6
        },
        {
          "scenario_num": 5,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "Mists of Mwangi",
          "character_id": 1
        },
        {
          "scenario_num": 6,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "Black Waters",
          "character_id": 1
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
          "character_id": 11
        },
        {
          "scenario_num": 13,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "The Prince of Augustana",
          "character_id": 1
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
          "character_id": 11
        },
        {
          "scenario_num": 17,
          "season": 0,
          "low_level": 1,
          "high_level": 7,
          "title": "Perils of the Pirate Pact",
          "character_id": 4
        },
        {
          "scenario_num": 20,
          "season": 0,
          "low_level": 7,
          "high_level": 11,
          "title": "King Xeros of Old Azlant",
          "character_id": 7
        },
        {
          "scenario_num": 22,
          "season": 0,
          "low_level": 7,
          "high_level": 11,
          "title": "Fingerprints of the Fiend",
          "character_id": 4
        },
        {
          "scenario_num": 23,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "Tide of Morning",
          "character_id": 6
        },
        {
          "scenario_num": 24,
          "season": 0,
          "low_level": 1,
          "high_level": 7,
          "title": "Delcline of Glory",
          "character_id": 9
        },
        {
          "scenario_num": 26,
          "season": 0,
          "low_level": 7,
          "high_level": 11,
          "title": "Lost at Bitter End",
          "character_id": 2
        },
        {
          "scenario_num": 27,
          "season": 0,
          "low_level": 5,
          "high_level": 9,
          "title": "Our Lady of Silver",
          "character_id": 4
        },
        {
          "scenario_num": 28,
          "season": 0,
          "low_level": 7,
          "high_level": 11,
          "title": "Lyrics of Extinction",
          "character_id": 3
        },
        {
          "scenario_num": 29,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "The Devil We Know - Part I: Shipyard Rats",
          "character_id": 9
        },
        {
          "scenario_num": 30,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "The Devil We Know - Part II: Cassomir's Locker",
          "character_id": 3
        },
        {
          "scenario_num": 31,
          "season": 1,
          "low_level": 5,
          "high_level": 9,
          "title": "Sniper in the Deep",
          "character_id": 1
        },
        {
          "scenario_num": 32,
          "season": 1,
          "low_level": 7,
          "high_level": 11,
          "title": "Drow of the Darklands Pyramid",
          "character_id": 3
        },
        {
          "scenario_num": 33,
          "season": 1,
          "low_level": 1,
          "high_level": 5,
          "title": "Assault on the Kingdom of the Impossible",
          "character_id": 3
        },
        {
          "scenario_num": 34,
          "season": 1,
          "low_level": 7,
          "high_level": 11,
          "title": "Encounter at the Drowning Stones",
          "character_id": 3
        },
        {
          "scenario_num": 35,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "Voice in the Void",
          "character_id": 2
        },
        {
          "scenario_num": 36,
          "season": 1,
          "low_level": 7,
          "high_level": 11,
          "title": "Echoes of the Everwar - Part I: THe Prisoner of Skull Hill",
          "character_id": 2
        },
        {
          "scenario_num": 37,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "The Beggar's Pearl",
          "character_id": 11
        },
        {
          "scenario_num": 38,
          "season": 1,
          "low_level": 7,
          "high_level": 11,
          "title": "No Plunder, No Pay",
          "character_id": 3
        },
        {
          "scenario_num": 39,
          "season": 1,
          "low_level": 1,
          "high_level": 5,
          "title": "The Citadel of Flame",
          "character_id": 8
        },
        {
          "scenario_num": 40,
          "season": 1,
          "low_level": 7,
          "high_level": 11,
          "title": "Hall of Drunken Heroes",
          "character_id": 7
        },
        {
          "scenario_num": 41,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "The Devil We Know Part III: Crypt of Fools",
          "character_id": 9
        },
        {
          "scenario_num": 42,
          "season": 1,
          "low_level": 7,
          "high_level": 11,
          "title": "Echoes of the Everwar - Part II: The Watcher of Ages",
          "character_id": 2
        },
        {
          "scenario_num": 43,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "The Pallid Plague",
          "character_id": 10
        },
        {
          "scenario_num": 44,
          "season": 1,
          "low_level": 7,
          "high_level": 11,
          "title": "Echoes of the Everwar - Part III: Terror at Whistledown",
          "character_id": 2
        },
        {
          "scenario_num": 45,
          "season": 1,
          "low_level": 1,
          "high_level": 5,
          "title": "Delirium's Tangle",
          "character_id": 6
        },
        {
          "scenario_num": 46,
          "season": 1,
          "low_level": 12,
          "high_level": 12,
          "title": "Eyes of the Ten - Part I: Requiem for the Red Raven",
          "character_id": 1
        },
        {
          "scenario_num": 47,
          "season": 1,
          "low_level": 1,
          "high_level": 5,
          "title": "The Darkest Vengeance",
          "character_id": 2
        },
        {
          "scenario_num": 48,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "The Devil We Know - Part IV: Rules of the Swift",
          "character_id": 9
        },
        {
          "scenario_num": 49,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "Among the Dead",
          "character_id": 2
        },
        {
          "scenario_num": 50,
          "season": 1,
          "low_level": 5,
          "high_level": 9,
          "title": "Fortunes Blight",
          "character_id": 1
        },
        {
          "scenario_num": 51,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "The City of Strangers - Part I: The Shadow Gambit",
          "character_id": 4
        },
        {
          "scenario_num": 52,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "The City of Strangers - Part II: The Twofold Demise",
          "character_id": 4
        },
        {
          "scenario_num": 53,
          "season": 1,
          "low_level": 7,
          "high_level": 11,
          "title": "Echoes of the Everwar Part IV: The Faithless Dead",
          "character_id": 2
        },
        {
          "scenario_num": 54,
          "season": 1,
          "low_level": 12,
          "high_level": 12,
          "title": "Eyes of the Ten - Part II: The Maze of the Open Road",
          "character_id": 1
        },
        {
          "scenario_num": 55,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "The Infernal Vault",
          "character_id": 10
        },
        {
          "scenario_num": 56,
          "season": 1,
          "low_level": 5,
          "high_level": 9,
          "title": "The Jester's Fraud",
          "character_id": 1
        },
        {
          "scenario_num": 1,
          "season": 2,
          "low_level": 1,
          "high_level": 7,
          "title": "Before the Dawn - Part I: The Bloodcave Disguise",
          "character_id": 11
        },
        {
          "scenario_num": 2,
          "season": 2,
          "low_level": 1,
          "high_level": 7,
          "title": "Before the Dawn - Part II: Rescue at Azlant Ridge",
          "character_id": 10
        },
        {
          "scenario_num": 3,
          "season": 2,
          "low_level": 5,
          "high_level": 9,
          "title": "The Rebel's Ransom",
          "character_id": 1
        },
        {
          "scenario_num": 4,
          "season": 2,
          "low_level": 7,
          "high_level": 11,
          "title": "Shadows Fall on Absalom",
          "character_id": 7
        },
        {
          "scenario_num": 5,
          "season": 2,
          "low_level": 12,
          "high_level": 12,
          "title": "Eyes of the Ten - Part III: Red Revolution",
          "character_id": 1
        },
        {
          "scenario_num": 6,
          "season": 2,
          "low_level": 5,
          "high_level": 9,
          "title": "The Heresy of Man - Part I: The First Heresy",
          "character_id": 7
        },
        {
          "scenario_num": 7,
          "season": 2,
          "low_level": 5,
          "high_level": 9,
          "title": "The Heresy of Man - Part II: Where Dark Things Sleep",
          "character_id": 7
        },
        {
          "scenario_num": 8,
          "season": 2,
          "low_level": 7,
          "high_level": 11,
          "title": "The Sarkorian Prophecy",
          "character_id": 2
        },
        {
          "scenario_num": 9,
          "season": 2,
          "low_level": 5,
          "high_level": 9,
          "title": "THe Heresy of Man - Part III: Beneath Forgotten Sands",
          "character_id": 7
        },
        {
          "scenario_num": 10,
          "season": 2,
          "low_level": 7,
          "high_level": 11,
          "title": "Fury of the Fiend",
          "character_id": 3
        },
        {
          "scenario_num": 11,
          "season": 2,
          "low_level": 1,
          "high_level": 5,
          "title": "The Penumbral Accords",
          "character_id": 9
        },
        {
          "scenario_num": 12,
          "season": 2,
          "low_level": 7,
          "high_level": 11,
          "title": "Below the Silver Tarn",
          "character_id": 1
        },
        {
          "scenario_num": 13,
          "season": 2,
          "low_level": 1,
          "high_level": 5,
          "title": "Murder on the Throaty Mermaid",
          "character_id": 7
        },
        {
          "scenario_num": 14,
          "season": 2,
          "low_level": 7,
          "high_level": 11,
          "title": "The Chasm of Screams",
          "character_id": 3
        },
        {
          "scenario_num": 15,
          "season": 2,
          "low_level": 1,
          "high_level": 5,
          "title": "Shades of Ice - Part I: Written in Blood",
          "character_id": 2
        },
        {
          "scenario_num": 16,
          "season": 2,
          "low_level": 7,
          "high_level": 11,
          "title": "The Flesh Collector",
          "character_id": 8
        },
        {
          "scenario_num": 17,
          "season": 2,
          "low_level": 1,
          "high_level": 5,
          "title": "Shades of Ice - Part II: Exiles of Winter",
          "character_id": 7
        },
        {
          "scenario_num": 18,
          "season": 2,
          "low_level": 7,
          "high_level": 11,
          "title": "The Forbidden Furnace of Forgotten Koor",
          "character_id": 7
        },
        {
          "scenario_num": 19,
          "season": 2,
          "low_level": 1,
          "high_level": 5,
          "title": "Shades of Ice - Part III: Keep of the Huscarl King",
          "character_id": 1
        },
        {
          "scenario_num": 20,
          "season": 2,
          "low_level": 7,
          "high_level": 11,
          "title": "Wrath of the Accursed",
          "character_id": 1
        },
        {
          "scenario_num": 21,
          "season": 2,
          "low_level": 1,
          "high_level": 7,
          "title": "The Dalsine Affair",
          "character_id": 10
        },
        {
          "scenario_num": 22,
          "season": 2,
          "low_level": 12,
          "high_level": 12,
          "title": "Eyes of the Ten - Part IV: Nothing Ventured, Nothing Gained",
          "character_id": 1
        },
        {
          "scenario_num": 23,
          "season": 2,
          "low_level": 1,
          "high_level": 7,
          "title": "Shadow's Last Stand - Part I: At Shadow's Door",
          "character_id": 1
        },
        {
          "scenario_num": 24,
          "season": 2,
          "low_level": 1,
          "high_level": 7,
          "title": "Shadow's Last Stand - Part II: Web of Corruption",
          "character_id": 1
        },
        {
          "scenario_num": 25,
          "season": 2,
          "low_level": 5,
          "high_level": 9,
          "title": "You Only Die Twice",
          "character_id": 1
        },
        {
          "scenario_num": 26,
          "season": 2,
          "low_level": 7,
          "high_level": 11,
          "title": "The Mantis's Prey",
          "character_id": 3
        },
        {
          "scenario_num": 1,
          "season": 3,
          "low_level": 1,
          "high_level": 5,
          "title": "The Frostfur Captives",
          "character_id": 1
        },
        {
          "scenario_num": 2,
          "season": 3,
          "low_level": 3,
          "high_level": 7,
          "title": "Sewer Dragons of Absaolom",
          "character_id": 9
        },
        {
          "scenario_num": 3,
          "season": 3,
          "low_level": 5,
          "high_level": 9,
          "title": "The Ghenett Manor Gauntlet",
          "character_id": 9
        },
        {
          "scenario_num": 4,
          "season": 3,
          "low_level": 7,
          "high_level": 11,
          "title": "The Kortos Envoy",
          "character_id": 7
        },
        {
          "scenario_num": 5,
          "season": 3,
          "low_level": 1,
          "high_level": 5,
          "title": "Tide of Twilight",
          "character_id": 3
        },
        {
          "scenario_num": 6,
          "season": 3,
          "low_level": 3,
          "high_level": 7,
          "title": "Song of the Sea Witch",
          "character_id": 3
        },
        {
          "scenario_num": 7,
          "season": 3,
          "low_level": 1,
          "high_level": 5,
          "title": "Echoes of the Overwatched",
          "character_id": 3
        },
        {
          "scenario_num": 8,
          "season": 3,
          "low_level": 3,
          "high_level": 7,
          "title": "Among the Gods",
          "character_id": 4
        },
        {
          "scenario_num": 9,
          "season": 3,
          "low_level": 1,
          "high_level": 5,
          "title": "The Quest for Perfection - Part I: The Edge of Heaven",
          "character_id": 8
        },
        {
          "scenario_num": 10,
          "season": 3,
          "low_level": 5,
          "high_level": 9,
          "title": "The Immortal Conundrum",
          "character_id": 1
        },
        {
          "scenario_num": 11,
          "season": 3,
          "low_level": 1,
          "high_level": 5,
          "title": "The Quest for Perfection - Part II: On Hostile Waters",
          "character_id": 8
        },
        {
          "scenario_num": 12,
          "season": 3,
          "low_level": 5,
          "high_level": 9,
          "title": "Wonders in the Weave - Part I: The Dog Pharaoh's Tomb",
          "character_id": 3
        },
        {
          "scenario_num": 13,
          "season": 3,
          "low_level": 1,
          "high_level": 5,
          "title": "The Quest for Perfection Part III: Defenders of Nesting Swallow",
          "character_id": 1
        },
        {
          "scenario_num": 14,
          "season": 3,
          "low_level": 5,
          "high_level": 9,
          "title": "Wonders in the Weave - Part II: Snakes in the Fold",
          "character_id": 1
        },
        {
          "scenario_num": 15,
          "season": 3,
          "low_level": 5,
          "high_level": 9,
          "title": "The Haunting of Hinojai",
          "character_id": 1
        },
        {
          "scenario_num": 16,
          "season": 3,
          "low_level": 3,
          "high_level": 7,
          "title": "The Midnight Mauler",
          "character_id": 1
        },
        {
          "scenario_num": 17,
          "season": 3,
          "low_level": 7,
          "high_level": 11,
          "title": "Red Harvest",
          "character_id": 1
        },
        {
          "scenario_num": 18,
          "season": 3,
          "low_level": 1,
          "high_level": 5,
          "title": "The God's Market Gamble",
          "character_id": 1
        },
        {
          "scenario_num": 19,
          "season": 3,
          "low_level": 1,
          "high_level": 5,
          "title": "The Icebound Outpost",
          "character_id": 5
        },
        {
          "scenario_num": 20,
          "season": 3,
          "low_level": 7,
          "high_level": 11,
          "title": "The Rats of Round Mountain - Part I: The Sundered Path",
          "character_id": 1
        },
        {
          "scenario_num": 21,
          "season": 3,
          "low_level": 1,
          "high_level": 5,
          "title": "The Temple of Empyreal Enlightenment",
          "character_id": 10
        },
        {
          "scenario_num": 22,
          "season": 3,
          "low_level": 7,
          "high_level": 11,
          "title": "The Rats of Round Mountain - Part II: Pagoda of the Rat",
          "character_id": 7
        },
        {
          "scenario_num": 23,
          "season": 3,
          "low_level": 1,
          "high_level": 5,
          "title": "The Goblinblood Dead",
          "character_id": 1
        },
        {
          "scenario_num": 24,
          "season": 3,
          "low_level": 5,
          "high_level": 9,
          "title": "The Golden Serpent",
          "character_id": 9
        },
        {
          "scenario_num": 25,
          "season": 3,
          "low_level": 3,
          "high_level": 7,
          "title": "Storming the Diamond Gate",
          "character_id": 2
        },
        {
          "scenario_num": 26,
          "season": 3,
          "low_level": 7,
          "high_level": 11,
          "title": "Portal of the Sacred Rune",
          "character_id": 1
        },
        {
          "scenario_num": 1,
          "season": 4,
          "low_level": 1,
          "high_level": 5,
          "title": "Rise of the Goblin Guild",
          "character_id": 1
        },
        {
          "scenario_num": 2,
          "season": 4,
          "low_level": 3,
          "high_level": 7,
          "title": "In Wrath's Shadow",
          "character_id": 1
        },
        {
          "scenario_num": 3,
          "season": 4,
          "low_level": 5,
          "high_level": 9,
          "title": "The Golemworks Incident",
          "character_id": 1
        },
        {
          "scenario_num": 4,
          "season": 4,
          "low_level": 7,
          "high_level": 11,
          "title": "King of the Storval Stairs",
          "character_id": 1
        },
        {
          "scenario_num": 5,
          "season": 4,
          "low_level": 3,
          "high_level": 7,
          "title": "The Sanos Abduction",
          "character_id": 1
        },
        {
          "scenario_num": 6,
          "season": 4,
          "low_level": 5,
          "high_level": 9,
          "title": "The Green Market",
          "character_id": 1
        },
        {
          "scenario_num": 7,
          "season": 4,
          "low_level": 1,
          "high_level": 5,
          "title": "Severing Ties",
          "character_id": 2
        },
        {
          "scenario_num": 8,
          "season": 4,
          "low_level": 7,
          "high_level": 11,
          "title": "The Cultist's Kiss",
          "character_id": 1
        },
        {
          "scenario_num": 9,
          "season": 4,
          "low_level": 3,
          "high_level": 7,
          "title": "The Blakros Matrimony",
          "character_id": 2
        },
        {
          "scenario_num": 10,
          "season": 4,
          "low_level": 7,
          "high_level": 11,
          "title": "Feast of Sigils",
          "character_id": 1
        },
        {
          "scenario_num": 11,
          "season": 4,
          "low_level": 1,
          "high_level": 5,
          "title": "The Disappeared",
          "character_id": 3
        },
        {
          "scenario_num": 12,
          "season": 4,
          "low_level": 7,
          "high_level": 11,
          "title": "The Refuge of Time",
          "character_id": 1
        },
        {
          "scenario_num": 13,
          "season": 4,
          "low_level": 5,
          "high_level": 9,
          "title": "Fortress of the Nail",
          "character_id": 1
        },
        {
          "scenario_num": 14,
          "season": 4,
          "low_level": 3,
          "high_level": 7,
          "title": "My Enemy's Enemy",
          "character_id": 2
        },
        {
          "scenario_num": 15,
          "season": 4,
          "low_level": 1,
          "high_level": 5,
          "title": "The Cyphermage Dilemma",
          "character_id": 3
        },
        {
          "scenario_num": 16,
          "season": 4,
          "low_level": 5,
          "high_level": 9,
          "title": "The Fabric of Reality",
          "character_id": 2
        },
        {
          "scenario_num": 17,
          "season": 4,
          "low_level": 5,
          "high_level": 9,
          "title": "Tower of the Ironwood Watch",
          "character_id": 2
        },
        {
          "scenario_num": 18,
          "season": 4,
          "low_level": 1,
          "high_level": 5,
          "title": "The Veteran's Vault",
          "character_id": 3
        },
        {
          "scenario_num": 19,
          "season": 4,
          "low_level": 1,
          "high_level": 5,
          "title": "The Night March of Kalkamedes",
          "character_id": 3
        },
        {
          "scenario_num": 20,
          "season": 4,
          "low_level": 7,
          "high_level": 11,
          "title": "Words of the Ancients",
          "character_id": 1
        },
        {
          "scenario_num": 21,
          "season": 4,
          "low_level": 3,
          "high_level": 7,
          "title": "Way of the Kirin",
          "character_id": 3
        },
        {
          "scenario_num": 22,
          "season": 4,
          "low_level": 5,
          "high_level": 9,
          "title": "Halls of Dwarven Lore",
          "character_id": 2
        },
        {
          "scenario_num": 23,
          "season": 4,
          "low_level": 3,
          "high_level": 7,
          "title": "Rivalry's End",
          "character_id": 3
        },
        {
          "scenario_num": 24,
          "season": 4,
          "low_level": 5,
          "high_level": 9,
          "title": "The Price of Friendhsip",
          "character_id": 2
        },
        {
          "scenario_num": 25,
          "season": 4,
          "low_level": 5,
          "high_level": 9,
          "title": "The Secrets Stones Keep",
          "character_id": 2
        },
        {
          "scenario_num": 26,
          "season": 4,
          "low_level": 7,
          "high_level": 11,
          "title": "The Waking Rune",
          "character_id": 1
        },
        {
          "scenario_num": 1,
          "season": 5,
          "low_level": 1,
          "high_level": 5,
          "title": "The Glass River Rescue",
          "character_id": 9
        },
        {
          "scenario_num": 2,
          "season": 5,
          "low_level": 3,
          "high_level": 7,
          "title": "The Wardstone Patrol",
          "character_id": 4
        },
        {
          "scenario_num": 3,
          "season": 5,
          "low_level": 5,
          "high_level": 9,
          "title": "The Hellknight's Feast",
          "character_id": 4
        },
        {
          "scenario_num": 4,
          "season": 5,
          "low_level": 1,
          "high_level": 5,
          "title": "The Stolen Heir",
          "character_id": 4
        },
        {
          "scenario_num": 5,
          "season": 5,
          "low_level": 7,
          "high_level": 11,
          "title": "The Elven Entanglement",
          "character_id": 1
        },
        {
          "scenario_num": 6,
          "season": 5,
          "low_level": 3,
          "high_level": 7,
          "title": "You Have What You Hold",
          "character_id": 6
        },
        {
          "scenario_num": 7,
          "season": 5,
          "low_level": 5,
          "high_level": 9,
          "title": "Port Godless",
          "character_id": 4
        },
        {
          "scenario_num": 8,
          "season": 5,
          "low_level": 1,
          "high_level": 2,
          "title": "The Confirmation",
          "character_id": 8
        },
        {
          "scenario_num": 9,
          "season": 5,
          "low_level": 3,
          "high_level": 7,
          "title": "The Traitor's Lodge",
          "character_id": 4
        },
        {
          "scenario_num": 10,
          "season": 5,
          "low_level": 7,
          "high_level": 11,
          "title": "Where Mammoths Dare Not Tread",
          "character_id": 7
        },
        {
          "scenario_num": 11,
          "season": 5,
          "low_level": 1,
          "high_level": 5,
          "title": "Library of the Lion",
          "character_id": 11
        },
        {
          "scenario_num": 12,
          "season": 5,
          "low_level": 1,
          "high_level": 5,
          "title": "Destiny of the Sands Part 1: A Bitter Bargain",
          "character_id": 6
        },
        {
          "scenario_num": 13,
          "season": 5,
          "low_level": 5,
          "high_level": 9,
          "title": "Weapon in the Rift",
          "character_id": 7
        },
        {
          "scenario_num": 14,
          "season": 5,
          "low_level": 3,
          "high_level": 7,
          "title": "Day of the Demon",
          "character_id": 3
        },
        {
          "scenario_num": 15,
          "season": 5,
          "low_level": 1,
          "high_level": 5,
          "title": "Destiny of the Sands Part 2: Race to Seeker's Folly",
          "character_id": 6
        },
        {
          "scenario_num": 16,
          "season": 5,
          "low_level": 3,
          "high_level": 7,
          "title": "Destiny of the Sands Part 3: Sanctum of the Sages",
          "character_id": 6
        },
        {
          "scenario_num": 17,
          "season": 5,
          "low_level": 7,
          "high_level": 11,
          "title": "Fate of the Fiend",
          "character_id": 3
        },
        {
          "scenario_num": 18,
          "season": 5,
          "low_level": 5,
          "high_level": 9,
          "title": "The Stranger Within",
          "character_id": 8
        },
        {
          "scenario_num": 19,
          "season": 5,
          "low_level": 1,
          "high_level": 5,
          "title": "The Horn of Aroden",
          "character_id": 10
        },
        {
          "scenario_num": 20,
          "season": 5,
          "low_level": 7,
          "high_level": 11,
          "title": "The Sealed Gate",
          "character_id": 7
        },
        {
          "scenario_num": 21,
          "season": 5,
          "low_level": 1,
          "high_level": 5,
          "title": "The Merchant's Wake",
          "character_id": 9
        },
        {
          "scenario_num": 22,
          "season": 5,
          "low_level": 1,
          "high_level": 5,
          "title": "Scars of the Third Crusade",
          "character_id": 13
        },
        {
          "scenario_num": 23,
          "season": 5,
          "low_level": 5,
          "high_level": 9,
          "title": "Cairn of Shadows",
          "character_id": 6
        },
        {
          "scenario_num": 24,
          "season": 5,
          "low_level": 3,
          "high_level": 7,
          "title": "Assault on the Wound",
          "character_id": 8
        },
        {
          "scenario_num": 25,
          "season": 5,
          "low_level": 7,
          "high_level": 11,
          "title": "Vengeance at Sundered Crag",
          "character_id": 3
        },
        {
          "scenario_num": 1,
          "season": 6,
          "low_level": 1,
          "high_level": 5,
          "title": "Trial by Machine",
          "character_id": 10
        },
        {
          "scenario_num": 2,
          "season": 6,
          "low_level": 3,
          "high_level": 7,
          "title": "The Silver Mount Collection",
          "character_id": 10
        },
        {
          "scenario_num": 3,
          "season": 6,
          "low_level": 5,
          "high_level": 9,
          "title": "The Technic Siege",
          "character_id": 6
        },
        {
          "scenario_num": 4,
          "season": 6,
          "low_level": 7,
          "high_level": 11,
          "title": "The Beacon Below",
          "character_id": 7
        },
        {
          "scenario_num": 5,
          "season": 6,
          "low_level": 1,
          "high_level": 5,
          "title": "Slave Ships of Absalom",
          "character_id": 10
        },
        {
          "scenario_num": 6,
          "season": 6,
          "low_level": 1,
          "high_level": 5,
          "title": "Hall of the Flesh Eaters",
          "character_id": 10
        },
        {
          "scenario_num": 7,
          "season": 6,
          "low_level": 5,
          "high_level": 9,
          "title": "Valley of Veiled Flame",
          "character_id": 8
        },
        {
          "scenario_num": 8,
          "season": 6,
          "low_level": 1,
          "high_level": 5,
          "title": "The Segang Expedition",
          "character_id": 11
        },
        {
          "scenario_num": 9,
          "season": 6,
          "low_level": 3,
          "high_level": 7,
          "title": "By Way of Bloodcove",
          "character_id": 10
        },
        {
          "scenario_num": 10,
          "season": 6,
          "low_level": 1,
          "high_level": 2,
          "title": "The Wounded Wisp",
          "character_id": 14
        },
        {
          "scenario_num": 11,
          "season": 6,
          "low_level": 3,
          "high_level": 7,
          "title": "The Slave Master's Mirror",
          "character_id": 10
        },
        {
          "scenario_num": 12,
          "season": 6,
          "low_level": 1,
          "high_level": 5,
          "title": "Scions of the Sky Key Part 1: On Sharrowsmith's Trail",
          "character_id": 13
        },
        {
          "scenario_num": 13,
          "season": 6,
          "low_level": 7,
          "high_level": 11,
          "title": "Of Kirin and Kraken",
          "character_id": 7
        },
        {
          "scenario_num": 14,
          "season": 6,
          "low_level": 1,
          "high_level": 5,
          "title": "Scions of the Sky Key Part 2: Kaava Quarry",
          "character_id": 11
        },
        {
          "scenario_num": 15,
          "season": 6,
          "low_level": 1,
          "high_level": 5,
          "title": "The Overflow Archives",
          "character_id": 14
        },
        {
          "scenario_num": 16,
          "season": 6,
          "low_level": 1,
          "high_level": 5,
          "title": "Scions of the Sky Key Part 3: The Golden Guardian",
          "character_id": 11
        },
        {
          "scenario_num": 17,
          "season": 6,
          "low_level": 5,
          "high_level": 9,
          "title": "Fires of Karamoss",
          "character_id": 10
        },
        {
          "scenario_num": 18,
          "season": 6,
          "low_level": 1,
          "high_level": 5,
          "title": "From Under Ice",
          "character_id": 13
        },
        {
          "scenario_num": 19,
          "season": 6,
          "low_level": 3,
          "high_level": 7,
          "title": "Test of Tar Kuata",
          "character_id": 13
        },
        {
          "scenario_num": 20,
          "season": 6,
          "low_level": 7,
          "high_level": 11,
          "title": "Returned to the Sky",
          "character_id": 7
        },
        {
          "scenario_num": 21,
          "season": 6,
          "low_level": 5,
          "high_level": 9,
          "title": "Tapestry's Toil",
          "character_id": 11
        },
        {
          "scenario_num": 22,
          "season": 6,
          "low_level": 1,
          "high_level": 5,
          "title": "Out of Anarchy",
          "character_id": 0
        },
        {
          "scenario_num": 23,
          "season": 6,
          "low_level": 7,
          "high_level": 11,
          "title": "The Darkest Abduction",
          "character_id": 9
        },
        {
          "scenario_num": 1,
          "season": 7,
          "low_level": 1,
          "high_level": 5,
          "title": "Between the Lines",
          "character_id": 12
        },
        {
          "scenario_num": 2,
          "season": 7,
          "low_level": 3,
          "high_level": 7,
          "title": "Six Seconds to Midnight",
          "character_id": 0
        },
        {
          "scenario_num": 3,
          "season": 7,
          "low_level": 5,
          "high_level": 9,
          "title": "The Bronze House Reprisal",
          "character_id": 10
        },
        {
          "scenario_num": 4,
          "season": 7,
          "low_level": 7,
          "high_level": 11,
          "title": "The Ironbound Schism",
          "character_id": 0
        },
        {
          "scenario_num": 5,
          "season": 7,
          "low_level": 1,
          "high_level": 5,
          "title": "School of Spirits",
          "character_id": 13
        },
        {
          "scenario_num": 6,
          "season": 7,
          "low_level": 3,
          "high_level": 7,
          "title": "To Judge a Sould Part 1: The Lost Legacy",
          "character_id": 0
        },
        {
          "scenario_num": 7,
          "season": 7,
          "low_level": 1,
          "high_level": 5,
          "title": "Trouble in Tamran",
          "character_id": 0
        },
        {
          "scenario_num": 8,
          "season": 7,
          "low_level": 3,
          "high_level": 7,
          "title": "To Judge a Sould Part 2:",
          "character_id": 0
        },
        {
          "scenario_num": 9,
          "season": 7,
          "low_level": 5,
          "high_level": 9,
          "title": "The Blakros Connection",
          "character_id": 0
        },
        {
          "scenario_num": 10,
          "season": 7,
          "low_level": 1,
          "high_level": 2,
          "title": "The Consortium Compact",
          "character_id": 0
        },
        {
          "scenario_num": 11,
          "season": 7,
          "low_level": 7,
          "high_level": 11,
          "title": "Ancient's Anguish",
          "character_id": 7
        },
        {
          "scenario_num": 12,
          "season": 7,
          "low_level": 1,
          "high_level": 5,
          "title": "The Twisted Circle",
          "character_id": 0
        },
        {
          "scenario_num": 13,
          "season": 7,
          "low_level": 5,
          "high_level": 9,
          "title": "Captive in Crystal",
          "character_id": 0
        },
        {
          "scenario_num": 14,
          "season": 7,
          "low_level": 1,
          "high_level": 5,
          "title": "Faithless and Forgotten Part 1: Let Bygones Be",
          "character_id": 12
        },
        {
          "scenario_num": 15,
          "season": 7,
          "low_level": 3,
          "high_level": 7,
          "title": "The Deepmarket Deception",
          "character_id": 0
        },
        {
          "scenario_num": 16,
          "season": 7,
          "low_level": 1,
          "high_level": 5,
          "title": "Faithless and Forgotten Part 2: Lost Colony of Taldor",
          "character_id": 0
        },
        {
          "scenario_num": 17,
          "season": 7,
          "low_level": 5,
          "high_level": 9,
          "title": "Thralls of the Shattered God",
          "character_id": 0
        },
        {
          "scenario_num": 18,
          "season": 7,
          "low_level": 1,
          "high_level": 5,
          "title": "Faithless and Forgotten Part 3: The Infernal Inheritance",
          "character_id": 0
        },
        {
          "scenario_num": 19,
          "season": 7,
          "low_level": 3,
          "high_level": 7,
          "title": "Labyrinth of Hungry Ghosts",
          "character_id": 11
        },
        {
          "scenario_num": 20,
          "season": 7,
          "low_level": 12,
          "high_level": 15,
          "title": "All for Immortality Part 1: First Taste of Eternity",
          "character_id": 1
        },
        {
          "scenario_num": 21,
          "season": 7,
          "low_level": 1,
          "high_level": 5,
          "title": "The Sun Orchid Scheme",
          "character_id": 0
        },
        {
          "scenario_num": 22,
          "season": 7,
          "low_level": 1,
          "high_level": 5,
          "title": "Bid for Alabastrine",
          "character_id": 0
        },
        {
          "scenario_num": 23,
          "season": 7,
          "low_level": 7,
          "high_level": 11,
          "title": "Abducted in Aether",
          "character_id": 0
        },
        {
          "scenario_num": 24,
          "season": 7,
          "low_level": 1,
          "high_level": 5,
          "title": "Dead Man's Debt",
          "character_id": 0
        },
        {
          "scenario_num": 25,
          "season": 7,
          "low_level": 5,
          "high_level": 9,
          "title": "Orders from the Gate",
          "character_id": 0
        },
        {
          "scenario_num": 26,
          "season": 7,
          "low_level": 12,
          "high_level": 15,
          "title": "All for Immortality Part 2: All the Gods Beyond",
          "character_id": 1
        },
        {
          "scenario_num": 27,
          "season": 7,
          "low_level": 3,
          "high_level": 7,
          "title": "Beyond Azlant Ridge",
          "character_id": 0
        },
        {
          "scenario_num": 28,
          "season": 7,
          "low_level": 7,
          "high_level": 11,
          "title": "Ageless Ambitions",
          "character_id": 0
        },
        {
          "scenario_num": 29,
          "season": 7,
          "low_level": 12,
          "high_level": 15,
          "title": "All for Immortality Part 3: Serpents Fall",
          "character_id": 0
        }
      ]);
    });
};
