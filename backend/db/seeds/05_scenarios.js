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
          "description": "When strange reports of misty undead spread through Absalom, you and your fellow Pathfinders are dispatched to the half-drowned district of Puddles. Notoriously rough, the drooling addicts, flesh panderers, and quick-handed knifers of Puddles are the least of your worries. The night's tide brings with it an ancient armada of some long-forgotten war and you are the only thing between their mist-shrouded ghost fleet and Absalom's utter oblivion.",
          "character_id": 1
        },
        {
          "scenario_num": 2,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "The Hydra's Fang Incident",
          "description": "After an Andoren village is razed by the Hydra's Fang, a renegade Chelish slaver-ship, outrage threatens the stability of both nations. You and your fellow Pathfinders are sent to capture the Fang before the Inner Sea is pitched into political frenzy.",
          "character_id": 2
        },
        {
          "scenario_num": 3,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "Murder on the Silken Caravan",
          "description": "Volunteers are needed to escort the body of a deceased venture-captain across the parched Qadiran desert to Katheer. The Silken Caravan offers passage, hauling exotic treasures across the perilous sea of sands. You'll brave bandits, spies, and unwelcome mourners hell-bent on paying respects to your dead companion. Worse still, the caravan's mistress, a satin-swathed Qadiran princess, has designs of her own on you and your cargo.",
          "character_id": 1
        },
        {
          "scenario_num": 4,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "The Frozen Fingers of Midnight",
          "description": "Skelg the Ripper, envoy from the Land of the Linnorm Kings, lies wasting in his villa on the outskirts of Absalom. A frigid curse followed Skelg from his northern homeland and grips his bearish heart in its frosty embrace. As the bizarre freezing ailment pushes Skelg to the brink of death, the Society dispatches you and your fellow Pathfinders to uncover the secrets of the freezing curse before Absalom falls to its icy grip.",
          "character_id": 3
        },
        {
          "scenario_num": 5,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "Mists of Mwangi",
          "description": "Pathfinder Lugizar Trantos recently returned from the Mwangi Expanse with haunted eyes and a pack full of strange idols. Absalom's famed Blakros Museum purchased his pieces and Lugizar vanished. The strange monkey idols he pulled from the misty jungles of Mwangi carry with them a fell curse, and now their power has laid claim to the museum. Can the Pathfinder Society uncover the source of the curse in time, or will the Blackros Museum be forever lost to the mists of Mwangi?",
          "character_id": 2
        },
        {
          "scenario_num": 6,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "Black Waters",
          "description": "The Pathfinder Society seeks the ancient ruby ring of the salamander and it falls to a team of Pathfinders to find it. Last seen in the Tri-Towers Yard, a once elite academy for the youth of Absalom, the ruby ring is now lost in the Drownyard, all that remains of Tri-Towers after it was destroyed a decade ago in the great quake. The Pathfinders must risk the strange black ichors and salty brine to find their prize—will they risk their very souls as well?",
          "character_id": 3
        },
        {
          "scenario_num": 7,
          "season": 0,
          "low_level": 1,
          "high_level": 7,
          "title": "Among the Living",
          "description": "Famed Pathfinder Bodriggan Wuthers disappeared from his dig site beneath the House of the Immortal Son in Taldor's gilded capital of Oppara. Once a grand temple to Aroden, the Immortal Son is now Oppara's most opulent theater. Sent to locate Wuthers, the Pathfinders must attend an opera with members of the Oppara elite in order to gain access to the secretive theater's dig site. When a cult crashes the performance and the nobility change into hideous walking dead, the Pathfinders are forced to choose between finding Wuthers or saving themselves.",
          "character_id": 1
        },
        {
          "scenario_num": 8,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "Slave Pits of Absalom",
          "description": "Someone kidnapped Lady Anilah Salhar—the Chelish wife of Dremdhet Salhar, one of Osirion's many Grand Ambassadors to Absalom—and sold her into slavery. With Salhar holding delve permits over the heads of the Decemvirute, the Pathfinders are sent to assist the Osirian Ambassador. Venturing into Absalom's darkest corners to save Lady Anilah, the Pathfinders must face the secrets of the Slave Pits to avoid becoming slaves themselves.",
          "character_id": 0
        },
        {
          "scenario_num": 13,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "The Prince of Augustana",
          "description": "When an old beggar shows up filthy and injured on the doorstep of the Augustana Pathfinder Lodge in Andoran and demands to be recognized as Andoran's one true Emperor, Venture-Captain Wallace is inclined to chase him off. But when the old beggar reveals a wayfinder and tells a tale of demons and portals to another world beneath the streets of Augustana, Wallace summons you from Absalom to investigate. Will you make it through sewers, swarms, and sanctuaries to uncover the truth or will the dangers of the Augustana underworld consume you forever?",
          "character_id": 0
        },
        {
          "scenario_num": 14,
          "season": 0,
          "low_level": 1,
          "high_level": 7,
          "title": "The Many Fortunes of Grandmaster Torch",
          "description": "When four statues of unspeakable power were found in a tomb in Osirion and then stolen, the Pathfinder Society assumed they were gone forever. When they appeared again in the illicit inventory of a Qadiran smuggler in the massive trade city of Sedeq, the Society wasted little time dispatching you there to recover them. Finding the smuggler dead and a familiar face from Absalom responsible, your task quickly becomes a race to retrieve the statues before their brutal power can be unleashed on the citizens of the Satrap. Can you find the statues in time or will Sedeq be swallowed in a plague like none Golarion has ever seen?",
          "character_id": 0
        },
        {
          "scenario_num": 16,
          "season": 0,
          "low_level": 5,
          "high_level": 9,
          "title": "To Scale the Dragon",
          "description": "The last remains of a sage from an age long past rests high atop the snow-covered tips of the Fog Peaks in Southern Galt and the Society wants his bones in order to study them and learn from them. They've sent you into a wintry wilderness of primordial beastmen and snow creatures not seen below the snow line to do just that. With the Aspis Consortium also seeking the bones, the race is on to beat them to the top and, once the bones are recovered, to make it back down alive.",
          "character_id": 0
        },
        {
          "scenario_num": 17,
          "season": 0,
          "low_level": 1,
          "high_level": 7,
          "title": "Perils of the Pirate Pact",
          "description": "When the Black Marquis lost all of the men he could trust on a failed treasure hunt, he did the only thing he could: turned to the Pathfinder Society for help. Offering an ancient lost text in return for assistance, the Black Marquis of Deadbridge sends you deep into the spider-haunted Echo Wood of the River Kingdoms to track down his missing pirates and recover an ancient treasure for the Society. You'll face brigands, pirates, spiders and more—but will you survive the perils of the Pirate Pact?",
          "character_id": 0
        },
        {
          "scenario_num": 20,
          "season": 0,
          "low_level": 7,
          "high_level": 11,
          "title": "King Xeros of Old Azlant",
          "description": "Panic grips Absalom when a huge crystalline sailing vessel appears suddenly in the harbor. Identified as the King Xeros of Old Azlant, the ship presents a great opportunity for the Pathfinder Society. You and your fellow adventurers are summoned by Venture-Captain Adril Hestram and dropped aboard the King Xeros to explore it and report back. Only, what you find isn't an empty vessel, but a sinister ship with a vile intent.",
          "character_id": 0
        },
        {
          "scenario_num": 22,
          "season": 0,
          "low_level": 7,
          "high_level": 11,
          "title": "Fingerprints of the Fiend",
          "description": "When a retired Pathfinder's nephew goes missing after allegedly discovered the fabled city of Rachikan of the ancient Jistka Imperium, he turns to the Society for help. Now you've been sent to the coast of devil-tainted Cheliax to uncover the missing nephew's whereabouts and to, quite possibly, uncover one of the most sought-after legendary cities on Golarion. But you have to move quick! The Aspis Consortium is rumored to be racing to the site ahead of you and their involvement could spell disaster for the Pathfinder Society.",
          "character_id": 0
        },
        {
          "scenario_num": 23,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "Tide of Morning",
          "description": "Venture-Captain Dennel Hamshanks sends you to convince an Andoren druid named Hemzel to allow the Pathfinder Society to study his recently discovered lorestone, a minor magical item that unlocks some of the mysteries of the ancient Andoren druid circles. When you arrive and find Hemzel murdered and the lorestone missing, you must race against time to recover the lorestone and stop Hemzel's murderers from using it against the druids of Andoran.",
          "character_id": 0
        },
        {
          "scenario_num": 24,
          "season": 0,
          "low_level": 1,
          "high_level": 7,
          "title": "Delcline of Glory",
          "description": "When the son of a famous Pathfinder gains control of his father's holdings in Taldor, the Pathfinder Society decides to build a new lodge there as a base to explore the many ruins of that crumbling empire. Unfortunately, the Taldan Phalanx has its eye on the holdings and an ancient curse has turned many of the residents into the walking dead. Can you survive the tangled web of Taldor's politics and fight off the echoes of the past or will you, too, see your glory decline?",
          "character_id": 0
        },
        {
          "scenario_num": 26,
          "season": 0,
          "low_level": 7,
          "high_level": 11,
          "title": "Lost at Bitter End",
          "description": "When a Pathfinder Society Priest of Nethys disappears in northern Geb while studying the Mana Wastes, the Society sends you to uncover her whereabouts and find her journals. Arriving in the town of Bitter End, you find it deserted but for a few mysterious creatures never before seen on Golarion. Those creatures quickly lead to more and soon you're embroiled in a mystery that could effect the very fabric of reality. Will you solve the mystery of Bitter End or find yourself lost forever in the Mana Wastes?",
          "character_id": 0
        },
        {
          "scenario_num": 27,
          "season": 0,
          "low_level": 5,
          "high_level": 9,
          "title": "Our Lady of Silver",
          "description": "You and your fellow Pathfinders are sent to Katheer, the shining capital of Qadira, to witness the wedding of Pathfinder Faireven to the wealthy and beautiful Lady of Silver and bring back a trove of relics given to the Society as part of the wedding dowry. When the wedding is disrupted by unscrupulous thieves, you soon find yourself dodging double-crosses, accusations of grave robbery, and worse. You must find the relics soon, or risk facing the eternal expulsion of the Society from the treasure-filled deserts of Qadira.",
          "character_id": 0
        },
        {
          "scenario_num": 28,
          "season": 0,
          "low_level": 7,
          "high_level": 11,
          "title": "Lyrics of Extinction",
          "description": "The fabled ruined city of Dokeran, deep inside the heart of the Mwangi Expanse, has been found and it's your job as a Pathfinder to explore it and discover how it fell. After fighting through fiends, enslaved warriors, and the damned spirits of Dokeran's dead, you find that the ruined city has a dark secret—one you might not survive.",
          "character_id": 0
        },
        {
          "scenario_num": 29,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "The Devil We Know - Part I: Shipyard Rats",
          "description": "When simultaneous kidnappings of Pathfinder and Aspis Consortium agents rock Cassomir's Imperial Naval Shipyards, the Society orders you to join forces with hated Aspis agents to solve the mystery. Can you work together with the enemies of the Society to uncover the source of the kidnappings, or will you perish in the shipyards of Cassomir?",
          "character_id": 0
        },
        {
          "scenario_num": 30,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "The Devil We Know - Part II: Cassomir's Locker",
          "description": "The Pathfinder Society dispatches you to the catacombs called Cassomir's Locker to find the source of a rat cult breeding monstrous vermin. After clearing Cassomir's dank sewers and delving into the dirty dungeons below, will you find the artifact that powers Cassomir's Locker or bring about the destruction of Taldor's most important port?",
          "character_id": 0
        },
        {
          "scenario_num": 31,
          "season": 1,
          "low_level": 5,
          "high_level": 9,
          "title": "Sniper in the Deep",
          "description": "When rumors stir of a hidden treasure ship in Absalom's Flotsam Graveyard, the Pathfinder Society sends you beneath the Inner Sea to investigate. Mayhem, undersea adventure, and chaos are to be had in this rousing rampage beneath the roiling waters of Absalom's harbor.",
          "character_id": 0
        },
        {
          "scenario_num": 32,
          "season": 1,
          "low_level": 7,
          "high_level": 11,
          "title": "Drow of the Darklands Pyramid",
          "description": "A rogue band of drow plague the shipping lanes of Osirion and the Pathfinder Society sends you to stop them. When the drow capture a caravan laden with Society relics, you delve into the Darklands to track down the stolen cargo and explore the mysterious Stalactite Pyramid.",
          "character_id": 0
        },
        {
          "scenario_num": 33,
          "season": 1,
          "low_level": 1,
          "high_level": 5,
          "title": "Assault on the Kingdom of the Impossible",
          "description": "The Pathfinder Society sends you to the fabled Kingdom of the Impossible, the island of Jalmeray, to stop an Aspis Consortium black market relics dealer who is organizing the local bandits and violently robbing Jalmeray and Pathfinder Society caravans laden with relics, artifacts, and magical mysteries. When a venture-captain is murdered by the Aspis Consortium agent, it's up to the PCs to find him and do whatever it takes to stop him.",
          "character_id": 0
        },
        {
          "scenario_num": 34,
          "season": 1,
          "low_level": 7,
          "high_level": 11,
          "title": "Encounter at the Drowning Stones",
          "description": "Rumored to be the most desecrated site in the Mwangi Expanse, the natives have long feared its malevolent presence. Rumors of suicide, infanticide, murder, and chaos have always been mentioned in the same breath with these mysterious rock formations. The Society sends you there after the location is discovered by a demonologist working for the Aspis Consortium. The Society fears the Aspis have discovered the source of the Drowning Stones' power and its up to you to insure that they don't get their hands on it.",
          "character_id": 0
        },
        {
          "scenario_num": 35,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "Voice in the Void",
          "description": "Mystery strikes again at the problem-plagued Blackros Museum in Absalom and its curator, Nigel Aldain, needs your help. When a famed Osirian tomb raider returns to Absalom and disappears in the museum's basement, Aldain fears the worst. When strange sounds echo from below and several of the curator's night watchmen go missing, he panics and begs the Society to investigate the mystery and save his museum from the darkness that infests it.",
          "character_id": 0
        },
        {
          "scenario_num": 36,
          "season": 1,
          "low_level": 7,
          "high_level": 11,
          "title": "Echoes of the Everwar - Part I: THe Prisoner of Skull Hill",
          "description": "A Chelish outpost deep inside the anarchic orc-controlled Hold of Belkzen has gone silent after strange fires were seen burning in the skies above. You have been sent north to investigate the disappearance and find a lost tomb long rumored to exist beneath the outpost's timber tower. When you arrive and find the place choked with monsters and hideous plant creatures from beyond the stars, your mission of exploration quickly turns to one of survival.",
          "character_id": 0
        },
        {
          "scenario_num": 37,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "The Beggar's Pearl",
          "description": "When a thief arrives at the Pathfinder Lodge in Almas bearing stolen artifacts and writings pointing the way to a lost dwarven gallery, you are sent into the rugged Aspodell Mountains to find the famed dwarven explorer last known to be searching for the gallery as well as the gallery itself. Once there you find a tangled web of darklands creatures in the thrall of a charismatic cult leader with ties to the darkest shadows of the First Realm.",
          "character_id": 0
        },
        {
          "scenario_num": 38,
          "season": 1,
          "low_level": 7,
          "high_level": 11,
          "title": "No Plunder, No Pay",
          "description": "The famed Chelish pirate, Captain Caradoc Alazario, infamous nephew of the mayor of Egorian and the brazen enemy of Her Majestrix's Navy, has finally been caught. Unfortunately for you, he was caught after stealing a fiendish artifact of twisted origins bound for the Grand Lodge in Absalom and is the only one who knows where that artifact came to rest off the coast of the forever rain-drenched Sodden Lands. You are charged by the Pathfinder Society to break Captain Alazario out of prison and use him to guide you to the lost artifact. Prison, pirates, and horrors of the deep await you in a land where an honest day's wage never comes honestly.",
          "character_id": 0
        },
        {
          "scenario_num": 39,
          "season": 1,
          "low_level": 1,
          "high_level": 5,
          "title": "The Citadel of Flame",
          "description": "Once the home to a cult preaching self-sacrifice by immolation in order to achieve paradise, the Citadel of Flame in Qadira's Meraz Desert was presumably wiped out decades ago after Sarenrae dervishes led a crusade to end its morbid message. An enormous sandstorm swallowed both the citadel and the army attacking it, burying both beneath hundreds of feet of sand. Thought lost forever, the citadel's rediscovery prompts the Pathfinder Society to send you deep in the unforgiving Meraz to finally close the book on Qadira's most mysterious cult.",
          "character_id": 0
        },
        {
          "scenario_num": 40,
          "season": 1,
          "low_level": 7,
          "high_level": 11,
          "title": "Hall of Drunken Heroes",
          "description": "Something is afoot at Cayden's Hall, the carousing temple-pub in Absalom where Cayden Cailean's faithful pay homage to their Drunken Hero. Pathfinder agent Osprey and his demonologist companion send you to investigate the truth behind a long-rumored demonic lab said to exist beneath the temple-pub's sticky floors. A trail of murders led Osprey to Cayden's Hall and his demonologist sees clues that denizens of the Abyss are involved. It's up to you to find out what demons want with the Drunken Hero's largest temple. Bar fights, revelry, song, and drink await within the Hall of Drunken Heroes.",
          "character_id": 0
        }
      ]);
    });
};
