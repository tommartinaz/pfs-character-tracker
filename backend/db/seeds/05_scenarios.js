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
          "character_id": 8
        },
        {
          "scenario_num": 2,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "The Hydra's Fang Incident",
          "description": "After an Andoren village is razed by the Hydra's Fang, a renegade Chelish slaver-ship, outrage threatens the stability of both nations. You and your fellow Pathfinders are sent to capture the Fang before the Inner Sea is pitched into political frenzy.",
          "character_id": 9
        },
        {
          "scenario_num": 3,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "Murder on the Silken Caravan",
          "description": "Volunteers are needed to escort the body of a deceased venture-captain across the parched Qadiran desert to Katheer. The Silken Caravan offers passage, hauling exotic treasures across the perilous sea of sands. You'll brave bandits, spies, and unwelcome mourners hell-bent on paying respects to your dead companion. Worse still, the caravan's mistress, a satin-swathed Qadiran princess, has designs of her own on you and your cargo.",
          "character_id": 2
        },
        {
          "scenario_num": 4,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "The Frozen Fingers of Midnight",
          "description": "Skelg the Ripper, envoy from the Land of the Linnorm Kings, lies wasting in his villa on the outskirts of Absalom. A frigid curse followed Skelg from his northern homeland and grips his bearish heart in its frosty embrace. As the bizarre freezing ailment pushes Skelg to the brink of death, the Society dispatches you and your fellow Pathfinders to uncover the secrets of the freezing curse before Absalom falls to its icy grip.",
          "character_id": 6
        },
        {
          "scenario_num": 5,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "Mists of Mwangi",
          "description": "Pathfinder Lugizar Trantos recently returned from the Mwangi Expanse with haunted eyes and a pack full of strange idols. Absalom's famed Blakros Museum purchased his pieces and Lugizar vanished. The strange monkey idols he pulled from the misty jungles of Mwangi carry with them a fell curse, and now their power has laid claim to the museum. Can the Pathfinder Society uncover the source of the curse in time, or will the Blackros Museum be forever lost to the mists of Mwangi?",
          "character_id": 1
        },
        {
          "scenario_num": 6,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "Black Waters",
          "description": "The Pathfinder Society seeks the ancient ruby ring of the salamander and it falls to a team of Pathfinders to find it. Last seen in the Tri-Towers Yard, a once elite academy for the youth of Absalom, the ruby ring is now lost in the Drownyard, all that remains of Tri-Towers after it was destroyed a decade ago in the great quake. The Pathfinders must risk the strange black ichors and salty brine to find their prizeâ€”will they risk their very souls as well?",
          "character_id": 1
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
          "description": "Someone kidnapped Lady Anilah Salharâ€”the Chelish wife of Dremdhet Salhar, one of Osirion's many Grand Ambassadors to Absalomâ€”and sold her into slavery. With Salhar holding delve permits over the heads of the Decemvirute, the Pathfinders are sent to assist the Osirian Ambassador. Venturing into Absalom's darkest corners to save Lady Anilah, the Pathfinders must face the secrets of the Slave Pits to avoid becoming slaves themselves.",
          "character_id": 11
        },
        {
          "scenario_num": 13,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "The Prince of Augustana",
          "description": "When an old beggar shows up filthy and injured on the doorstep of the Augustana Pathfinder Lodge in Andoran and demands to be recognized as Andoran's one true Emperor, Venture-Captain Wallace is inclined to chase him off. But when the old beggar reveals aÂ wayfinderÂ and tells a tale of demons and portals to another world beneath the streets of Augustana, Wallace summons you from Absalom to investigate. Will you make it through sewers, swarms, and sanctuaries to uncover the truth or will the dangers of the Augustana underworld consume you forever?",
          "character_id": 1
        },
        {
          "scenario_num": 14,
          "season": 0,
          "low_level": 1,
          "high_level": 7,
          "title": "The Many Fortunes of Grandmaster Torch",
          "description": "When four statues of unspeakable power were found in a tomb in Osirion and then stolen, the Pathfinder Society assumed they were gone forever. When they appeared again in the illicit inventory of a Qadiran smuggler in the massive trade city of Sedeq, the Society wasted little time dispatching you there to recover them. Finding the smuggler dead and a familiar face from Absalom responsible, your task quickly becomes a race to retrieve the statues before their brutal power can be unleashed on the citizens of the Satrap. Can you find the statues in time or will Sedeq be swallowed in a plague like none Golarion has ever seen?",
          "character_id": 8
        },
        {
          "scenario_num": 16,
          "season": 0,
          "low_level": 5,
          "high_level": 9,
          "title": "To Scale the Dragon",
          "description": "The last remains of a sage from an age long past rests high atop the snow-covered tips of the Fog Peaks in Southern Galt and the Society wants his bones in order to study them and learn from them. They've sent you into a wintry wilderness of primordial beastmen and snow creatures not seen below the snow line to do just that. With the Aspis Consortium also seeking the bones, the race is on to beat them to the top and, once the bones are recovered, to make it back down alive.",
          "character_id": 11
        },
        {
          "scenario_num": 17,
          "season": 0,
          "low_level": 1,
          "high_level": 7,
          "title": "Perils of the Pirate Pact",
          "description": "When the Black Marquis lost all of the men he could trust on a failed treasure hunt, he did the only thing he could: turned to the Pathfinder Society for help. Offering an ancient lost text in return for assistance, the Black Marquis of Deadbridge sends you deep into the spider-haunted Echo Wood of the River Kingdoms to track down his missing pirates and recover an ancient treasure for the Society. You'll face brigands, pirates, spiders and moreâ€”but will you survive the perils of the Pirate Pact?",
          "character_id": 4
        },
        {
          "scenario_num": 20,
          "season": 0,
          "low_level": 7,
          "high_level": 11,
          "title": "King Xeros of Old Azlant",
          "description": "Panic grips Absalom when a huge crystalline sailing vessel appears suddenly in the harbor. Identified as theÂ King XerosÂ of Old Azlant, the ship presents a great opportunity for the Pathfinder Society. You and your fellow adventurers are summoned by Venture-Captain Adril Hestram and dropped aboard theÂ King XerosÂ to explore it and report back. Only, what you find isn't an empty vessel, but a sinister ship with a vile intent.",
          "character_id": 7
        },
        {
          "scenario_num": 22,
          "season": 0,
          "low_level": 7,
          "high_level": 11,
          "title": "Fingerprints of the Fiend",
          "description": "When a retired Pathfinder's nephew goes missing after allegedly discovered the fabled city of Rachikan of the ancient Jistka Imperium, he turns to the Society for help. Now you've been sent to the coast of devil-tainted Cheliax to uncover the missing nephew's whereabouts and to, quite possibly, uncover one of the most sought-after legendary cities on Golarion. But you have to move quick! The Aspis Consortium is rumored to be racing to the site ahead of you and their involvement could spell disaster for the Pathfinder Society.",
          "character_id": 4
        },
        {
          "scenario_num": 23,
          "season": 0,
          "low_level": 1,
          "high_level": 5,
          "title": "Tide of Morning",
          "description": "Venture-Captain Dennel Hamshanks sends you to convince an Andoren druid named Hemzel to allow the Pathfinder Society to study his recently discovered lorestone, a minor magical item that unlocks some of the mysteries of the ancient Andoren druid circles. When you arrive and find Hemzel murdered and the lorestone missing, you must race against time to recover the lorestone and stop Hemzel's murderers from using it against the druids of Andoran.",
          "character_id": 6
        },
        {
          "scenario_num": 24,
          "season": 0,
          "low_level": 1,
          "high_level": 7,
          "title": "Delcline of Glory",
          "description": "When the son of a famous Pathfinder gains control of his father's holdings in Taldor, the Pathfinder Society decides to build a new lodge there as a base to explore the many ruins of that crumbling empire. Unfortunately, the Taldan Phalanx has its eye on the holdings and an ancient curse has turned many of the residents into the walking dead. Can you survive the tangled web of Taldor's politics and fight off the echoes of the past or will you, too, see your glory decline?",
          "character_id": 9
        },
        {
          "scenario_num": 26,
          "season": 0,
          "low_level": 7,
          "high_level": 11,
          "title": "Lost at Bitter End",
          "description": "When a Pathfinder Society Priest of Nethys disappears in northern Geb while studying the Mana Wastes, the Society sends you to uncover her whereabouts and find her journals. Arriving in the town of Bitter End, you find it deserted but for a few mysterious creatures never before seen on Golarion. Those creatures quickly lead to more and soon you're embroiled in a mystery that could effect the very fabric of reality. Will you solve the mystery of Bitter End or find yourself lost forever in the Mana Wastes?",
          "character_id": 2
        },
        {
          "scenario_num": 27,
          "season": 0,
          "low_level": 5,
          "high_level": 9,
          "title": "Our Lady of Silver",
          "description": "You and your fellow Pathfinders are sent to Katheer, the shining capital of Qadira, to witness the wedding of Pathfinder Faireven to the wealthy and beautiful Lady of Silver and bring back a trove of relics given to the Society as part of the wedding dowry. When the wedding is disrupted by unscrupulous thieves, you soon find yourself dodging double-crosses, accusations of grave robbery, and worse. You must find the relics soon, or risk facing the eternal expulsion of the Society from the treasure-filled deserts of Qadira.",
          "character_id": 4
        },
        {
          "scenario_num": 28,
          "season": 0,
          "low_level": 7,
          "high_level": 11,
          "title": "Lyrics of Extinction",
          "description": "The fabled ruined city of Dokeran, deep inside the heart of the Mwangi Expanse, has been found and it's your job as a Pathfinder to explore it and discover how it fell. After fighting through fiends, enslaved warriors, and the damned spirits of Dokeran's dead, you find that the ruined city has a dark secretâ€”one you might not survive.",
          "character_id": 3
        },
        {
          "scenario_num": 29,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "The Devil We Know - Part I: Shipyard Rats",
          "description": "When simultaneous kidnappings of Pathfinder and Aspis Consortium agents rock Cassomir's Imperial Naval Shipyards, the Society orders you to join forces with hated Aspis agents to solve the mystery. Can you work together with the enemies of the Society to uncover the source of the kidnappings, or will you perish in the shipyards of Cassomir?",
          "character_id": 9
        },
        {
          "scenario_num": 30,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "The Devil We Know - Part II: Cassomir's Locker",
          "description": "The Pathfinder Society dispatches you to the catacombs called Cassomir's Locker to find the source of a rat cult breeding monstrous vermin. After clearing Cassomir's dank sewers and delving into the dirty dungeons below, will you find the artifact that powers Cassomir's Locker or bring about the destruction of Taldor's most important port?",
          "character_id": 3
        },
        {
          "scenario_num": 31,
          "season": 1,
          "low_level": 5,
          "high_level": 9,
          "title": "Sniper in the Deep",
          "description": "When rumors stir of a hidden treasure ship in Absalom's Flotsam Graveyard, the Pathfinder Society sends you beneath the Inner Sea to investigate. Mayhem, undersea adventure, and chaos are to be had in this rousing rampage beneath the roiling waters of Absalom's harbor.",
          "character_id": 1
        },
        {
          "scenario_num": 32,
          "season": 1,
          "low_level": 7,
          "high_level": 11,
          "title": "Drow of the Darklands Pyramid",
          "description": "A rogue band of drow plague the shipping lanes of Osirion and the Pathfinder Society sends you to stop them. When the drow capture a caravan laden with Society relics, you delve into the Darklands to track down the stolen cargo and explore the mysterious Stalactite Pyramid.",
          "character_id": 3
        },
        {
          "scenario_num": 33,
          "season": 1,
          "low_level": 1,
          "high_level": 5,
          "title": "Assault on the Kingdom of the Impossible",
          "description": "The Pathfinder Society sends you to the fabled Kingdom of the Impossible, the island of Jalmeray, to stop an Aspis Consortium black market relics dealer who is organizing the local bandits and violently robbing Jalmeray and Pathfinder Society caravans laden with relics, artifacts, and magical mysteries. When a venture-captain is murdered by the Aspis Consortium agent, it's up to the PCs to find him and do whatever it takes to stop him.",
          "character_id": 3
        },
        {
          "scenario_num": 34,
          "season": 1,
          "low_level": 7,
          "high_level": 11,
          "title": "Encounter at the Drowning Stones",
          "description": "Rumored to be the most desecrated site in the Mwangi Expanse, the natives have long feared its malevolent presence. Rumors of suicide, infanticide, murder, and chaos have always been mentioned in the same breath with these mysterious rock formations. The Society sends you there after the location is discovered by a demonologist working for the Aspis Consortium. The Society fears the Aspis have discovered the source of the Drowning Stones' power and its up to you to insure that they don't get their hands on it.",
          "character_id": 3
        },
        {
          "scenario_num": 35,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "Voice in the Void",
          "description": "Mystery strikes again at the problem-plagued Blackros Museum in Absalom and its curator, Nigel Aldain, needs your help. When a famed Osirian tomb raider returns to Absalom and disappears in the museum's basement, Aldain fears the worst. When strange sounds echo from below and several of the curator's night watchmen go missing, he panics and begs the Society to investigate the mystery and save his museum from the darkness that infests it.",
          "character_id": 2
        },
        {
          "scenario_num": 36,
          "season": 1,
          "low_level": 7,
          "high_level": 11,
          "title": "Echoes of the Everwar - Part I: THe Prisoner of Skull Hill",
          "description": "A Chelish outpost deep inside the anarchic orc-controlled Hold of Belkzen has gone silent after strange fires were seen burning in the skies above. You have been sent north to investigate the disappearance and find a lost tomb long rumored to exist beneath the outpost's timber tower. When you arrive and find the place choked with monsters and hideous plant creatures from beyond the stars, your mission of exploration quickly turns to one of survival.",
          "character_id": 2
        },
        {
          "scenario_num": 37,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "The Beggar's Pearl",
          "description": "When a thief arrives at the Pathfinder Lodge in Almas bearing stolen artifacts and writings pointing the way to a lost dwarven gallery, you are sent into the rugged Aspodell Mountains to find the famed dwarven explorer last known to be searching for the gallery as well as the gallery itself. Once there you find a tangled web of darklands creatures in the thrall of a charismatic cult leader with ties to the darkest shadows of the First Realm.",
          "character_id": 11
        },
        {
          "scenario_num": 38,
          "season": 1,
          "low_level": 7,
          "high_level": 11,
          "title": "No Plunder, No Pay",
          "description": "The famed Chelish pirate, Captain Caradoc Alazario, infamous nephew of the mayor of Egorian and the brazen enemy of Her Majestrix's Navy, has finally been caught. Unfortunately for you, he was caught after stealing a fiendish artifact of twisted origins bound for the Grand Lodge in Absalom and is the only one who knows where that artifact came to rest off the coast of the forever rain-drenched Sodden Lands. You are charged by the Pathfinder Society to break Captain Alazario out of prison and use him to guide you to the lost artifact. Prison, pirates, and horrors of the deep await you in a land where an honest day's wage never comes honestly.",
          "character_id": 3
        },
        {
          "scenario_num": 39,
          "season": 1,
          "low_level": 1,
          "high_level": 5,
          "title": "The Citadel of Flame",
          "description": "Once the home to a cult preaching self-sacrifice by immolation in order to achieve paradise, the Citadel of Flame in Qadira's Meraz Desert was presumably wiped out decades ago after Sarenrae dervishes led a crusade to end its morbid message. An enormous sandstorm swallowed both the citadel and the army attacking it, burying both beneath hundreds of feet of sand. Thought lost forever, the citadel's rediscovery prompts the Pathfinder Society to send you deep in the unforgiving Meraz to finally close the book on Qadira's most mysterious cult.",
          "character_id": 8
        },
        {
          "scenario_num": 40,
          "season": 1,
          "low_level": 7,
          "high_level": 11,
          "title": "Hall of Drunken Heroes",
          "description": "Something is afoot at Cayden's Hall, the carousing temple-pub in Absalom where Cayden Cailean's faithful pay homage to their Drunken Hero. Pathfinder agent Osprey and his demonologist companion send you to investigate the truth behind a long-rumored demonic lab said to exist beneath the temple-pub's sticky floors. A trail of murders led Osprey to Cayden's Hall and his demonologist sees clues that denizens of the Abyss are involved. It's up to you to find out what demons want with the Drunken Hero's largest temple. Bar fights, revelry, song, and drink await within the Hall of Drunken Heroes.",
          "character_id": 7
        },
        {
          "scenario_num": 41,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "The Devil We Know Part III: Crypt of Fools",
          "description": "Another kidnapping spree erupts in Cassomir and the Pathfinder Society sends you to the notorious Swift Prison to interrogate a captured cultist about the recent disappearances. With clues gathered there, you must explore Old Cassomir and find secret locations that lead you to the source of the spree: the long lost Crypt of Fools.",
          "character_id": 9
        },
        {
          "scenario_num": 42,
          "season": 1,
          "low_level": 7,
          "high_level": 11,
          "title": "Echoes of the Everwar - Part II: The Watcher of Ages",
          "description": "Hundreds of years ago a once mighty fortress in Cheliax sank into the earth and was forever destroyed. You are sent there to catalog the ruins, known as the Collapsed Halls, and to find the rumored hidden tomb of an Osiriani concubine. After clearing the ruins of hideous beasts, you explore deeper into the ruins than anyone before you and uncover a malevolent intelligence that has watched Golarion for more than 5,000 years. Worse, he knows you're coming.",
          "character_id": 2
        },
        {
          "scenario_num": 43,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "The Pallid Plague",
          "description": "Reports from Andoran's Darkmoon Vale indicate that a new plague is causing the deaths of untold fey. The Pathfinder Society sends you there to aid the nymph queen in stopping the plague and finding and destroying its source. When the plague spreads to the human population of Falcon's Hollow, the need to find a cure grows more frantic. Can you save the many denizens of Darkmoon Vale from certain death?",
          "character_id": 10
        },
        {
          "scenario_num": 44,
          "season": 1,
          "low_level": 7,
          "high_level": 11,
          "title": "Echoes of the Everwar - Part III: Terror at Whistledown",
          "description": "The citizens of the gnome enclave of Whistledown in distant Varisia are being kidnapped by malevolent creatures that stalk the night. You are sent there by the Pathfinder Society to see if this sudden surge of vile activity is linked to the rumors of a hidden tomb near Whistledown that holds the body of a famed Osirion concubine. Can you save the town of Whistledown from certain doom and find the lost tomb of the ancient concubine?",
          "character_id": 2
        },
        {
          "scenario_num": 45,
          "season": 1,
          "low_level": 1,
          "high_level": 5,
          "title": "Delirium's Tangle",
          "description": "The Pathfinder Society owes Grandmaster Torch a favor and he's calling it in. It seems he misplaced Nuar Spiritskin, the famous minotaur prince of Absalom, and Torch needs you to find the prince before the city discovers that the minotaur is missing. He sends you deep beneath Absalom into a maddening maze of malign shapes, hideous creatures, and secrets that haven't seen the light of day for more than a thousand years.",
          "character_id": 6
        },
        {
          "scenario_num": 46,
          "season": 1,
          "low_level": 12,
          "high_level": 12,
          "title": "Eyes of the Ten - Part I: Requiem for the Red Raven",
          "description": "You and your fellow veteran Pathfinders are sent, along with Venture-Captain Adril Hestram, to revolution-torn Galt to deliver the famous sword, the Pale Maiden, to the newly re-opened Woodsedge Lodge. All is not as it seems, however, when the lodge is attacked during a ceremony and a famous Pathfinder is murdered. The Lady of the Lodge, Venture-Captain Eliza Petulengro, puts you on the mission to solving the murder and catching those responsible.",
          "character_id": 1
        },
        {
          "scenario_num": 47,
          "season": 1,
          "low_level": 1,
          "high_level": 5,
          "title": "The Darkest Vengeance",
          "description": "When a newly opened Ustalav Pathfinder Lodge goes silent, it's up to you to investigate and report back to the Society as to the source of the disappearance. The mystery deepens when you arrive and find the house silent but infiltrated by an old threat now in control of one of Ustalav's most powerful artifacts.",
          "character_id": 2
        },
        {
          "scenario_num": 48,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "The Devil We Know - Part IV: Rules of the Swift",
          "description": "In the conclusion of the Devil We Know campaign arc, you are called once more to Cassomir, where a mass abduction of the residents of Swift Prison has the entire town in a panic. Venture-Captain Hestia Themis once more partners you with an Aspis agent to see what link the Swift Prison event has to the earlier kidnapping of a Pathfinder agent. You will explore an empty prison, delve the tunnels below, and come face-to-face with the source of Cassomir's troubles in a vile grotto deep beneath the city.",
          "character_id": 9
        },
        {
          "scenario_num": 49,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "Among the Dead",
          "description": "Several years ago, a Taldan Zyphus cult took over a famous Oppara opera house, murdered a Pathfinder, and turned dozens of Taldor's wealthiest citizens into the walking dead. The Pathfinder Society has finally tracked down their hideout and sends you to Oppara for one purpose: revenge. Can you face the servants of Golarion's god of accidents unharmed or will you find yourself among Zyphus's cursed souls?",
          "character_id": 2
        },
        {
          "scenario_num": 50,
          "season": 1,
          "low_level": 5,
          "high_level": 9,
          "title": "Fortunes Blight",
          "description": "You're sent to the wild River Kingdoms to find and kill a green hag who holds the last fragment of a powerful ancient sword called Passion's Edge, sundered into three pieces a decade ago. Things aren't as simple as they seem: the last creature to control the fabled sword wants it back at any cost, ghosts of the sword's past seek revenge for wrongs committed by former wielders of Passion's Edge, and the Pathfinder Society wants the sword whole again before being returned to Absalom. Madness, murder, and mayhem await you in the River Kingdoms!",
          "character_id": 1
        },
        {
          "scenario_num": 51,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "The City of Strangers - Part I: The Shadow Gambit",
          "description": "The Pathfinder Society sends you to Kaer Maga, the City of Strangers, where you are ordered to find a local Pathfinder associate who sent a strange letter to Venture-Captain Drandle Dreng in Absalom. When the local associate turns up dead and you find evidence linking his death to a mysterious organization called The Shadow Lodge, it's up to you to track them down and solve the man's murder.",
          "character_id": 4
        },
        {
          "scenario_num": 52,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "The City of Strangers - Part II: The Twofold Demise",
          "description": "A powerful local gang in Kaer Maga demands that you end the threat of the Shadow Lodge at once as the Lodge's very existence upsets the delicate local balance of power. Refusal means both the expulsion of the Pathfinder Society from Kaer Maga forever and your untimely deaths. The choice is yours.",
          "character_id": 4
        },
        {
          "scenario_num": 53,
          "season": 1,
          "low_level": 7,
          "high_level": 11,
          "title": "Echoes of the Everwar Part IV: The Faithless Dead",
          "description": "The famous concubines of Sothis, recently returned to Osirion by the Pathfinder Society, are stolen from the Pathfinder Lodge in that nation's capital and it's up to you to find them and return them before their combined power can be used to awaken an ancient evil.",
          "character_id": 2
        },
        {
          "scenario_num": 54,
          "season": 1,
          "low_level": 12,
          "high_level": 12,
          "title": "Eyes of the Ten - Part II: The Maze of the Open Road",
          "description": "The mysteries of the Woodsedge Lodge continue as you and your fellow Pathfinders are sent to devil-tainted Cheliax and the steamy jungles of the Mwangi Expanse to find two missing venture-captains",
          "character_id": 1
        },
        {
          "scenario_num": 55,
          "season": 1,
          "low_level": 1,
          "high_level": 7,
          "title": "The Infernal Vault",
          "description": "A decade ago, the Decklands family, a house of Chelish nobles, were exiled from Absalom for treason. Their fate made for an interesting story and when a Pathfinder agent in Cheliax studying the family's long history and exile from the City at the Center of the World ends up murdered, the Society sends you to the recently discovered Deckland Vaults in Absalom to see what connection their old home might have to your murdered colleague.",
          "character_id": 10
        },
        {
          "scenario_num": 56,
          "season": 1,
          "low_level": 5,
          "high_level": 9,
          "title": "The Jester's Fraud",
          "description": "Life in Taldor is fraught with peril, especially for the crumbling noble houses of the Taldan countryside. One such house, the Bourtze Family, has fallen on hard times and they've informed the Pathfinder Society that, in exchange for a small sum of money, they'd be willing to part with a treasure trove of lore about Qadira's Grand Campaign, the 300-year invasion of Taldor. On your arrival, things quickly turn for the worse and instead of evaluating the worth of a few scraps of historical paper, you must instead retrieve one of the most dangerous artifacts in the empire.",
          "character_id": 1
        },
        {
          "scenario_num": 1,
          "season": 2,
          "low_level": 1,
          "high_level": 7,
          "title": "Before the Dawn - Part I: The Bloodcave Disguise",
          "description": "You are sent to Aspis Consortium-infested Bloodcove to gather supplies for a nearly doomed Pathfinder mission nearby. Disguised as ordinary merchants, you have little time to gather what you need and get out before the Consortium discovers and destroys you.",
          "character_id": 11
        },
        {
          "scenario_num": 2,
          "season": 2,
          "low_level": 1,
          "high_level": 7,
          "title": "Before the Dawn - Part II: Rescue at Azlant Ridge",
          "description": "With supplies in hand, you rush from Bloodcove to the Pathfinder expedition site at Azlant Ridge only to find it under siege. You must brave the newly discovered halls beneath the ridge in order to find the key that might save everyone.",
          "character_id": 10
        },
        {
          "scenario_num": 3,
          "season": 2,
          "low_level": 5,
          "high_level": 9,
          "title": "The Rebel's Ransom",
          "description": "The Ruby Prince of Osirion sends you to the Parched Dunes to find what became of a secret Pathfinder expedition sent there to recover artifacts for the Ruby Prince himself. What you find there may very well end the Pathfinder Society as you know it.",
          "character_id": 1
        },
        {
          "scenario_num": 4,
          "season": 2,
          "low_level": 7,
          "high_level": 11,
          "title": "Shadows Fall on Absalom",
          "description": "One of the Pathfinder Society's most beloved venture-captains, Drandle Dreng, is nearly killed in a failed assassination attempt on the grounds of the Grand Lodge itself. Your mission to catch the assassin is complicated when you learn he is the son of an influential Pathfinder. Can you catch the assassin before his blade strikes again while avoiding the outrage of your peers?",
          "character_id": 7
        },
        {
          "scenario_num": 5,
          "season": 2,
          "low_level": 12,
          "high_level": 12,
          "title": "Eyes of the Ten - Part III: Red Revolution",
          "description": "You and your fellow Pathfinders are hot on the trail of the traitor to the Pathfinder Society as Venture-Captain Eliza Petulengro once again sends you into the Maze of the Open Road to track the traitors' co-conspirators. Stepping through a portal, you find yourself on the cold, red desert planet Akiton, fourth planet from the sun and Golarion's outward neighbor. You arrive in the midst of revolution, however, and are quickly embroiled in the politics of a new world. Can you survive the frigid, violent revolution of the alien Akiton and put an end to the Society's traitor once and for all?",
          "character_id": 1
        },
        {
          "scenario_num": 6,
          "season": 2,
          "low_level": 5,
          "high_level": 9,
          "title": "The Heresy of Man - Part I: The First Heresy",
          "description": "For more than 2 millennia, the nation of Rahadoum has lived under the Laws of Man that decreed \"let no man be beholden to a god.\" While this has led to relative peace without religious strife, it has left the nation devoid of divine healing and magical methods to provide succor to those ravaged by disease or injury. When a new and mysterious plague begins ravaging the coastal villages of Rahadoum, you are sent by the Pathfinder Society to escort a cleric of Sarenrae into the heart of the plague in order to protect a secret Pathfinder research project. Getting there means smuggling the cleric in as contraband and when the Pure Legion, Rahadoum's defense against religion, get wind of your arrival, you must fight not only to protect the cleric, but to keep yourselves from being executed for violating the First Heresy.",
          "character_id": 7
        },
        {
          "scenario_num": 7,
          "season": 2,
          "low_level": 5,
          "high_level": 9,
          "title": "The Heresy of Man - Part II: Where Dark Things Sleep",
          "description": "When a Pathfinder team in the godless nation of Rahadoum disappears, the Pathfinder Society sends the PCs to investigate. Deep beneath the sands of the small village of Wadi al-Hesr, a long imprisoned evil—responsible in part for the destruction of an ancient empire—now stirs and threatens the entire region with a deadly plague. Can the Pathfinders survive a sinister game of cat-and-mouse and escape with their lives?",
          "character_id": 7
        },
        {
          "scenario_num": 8,
          "season": 2,
          "low_level": 7,
          "high_level": 11,
          "title": "The Sarkorian Prophecy",
          "description": "When a novice Pathfinder in the Grand Lodge of Absalom discovers an account of a long lost prophecy which may hold the key to defeating the Shadow Lodge, a team of brave agents heads into the heart of the Worldwound to recover the document. Not only do the forces of the Abyss and the demon-tainted environment stand in their way, but so does a rival team of Pathfinders set on recovering the Sarkorian Prophecy first.",
          "character_id": 2
        },
        {
          "scenario_num": 9,
          "season": 2,
          "low_level": 5,
          "high_level": 9,
          "title": "THe Heresy of Man - Part III: Beneath Forgotten Sands",
          "description": "Beneath the desolate deserts of godless Rahadoum, the Pathfinder Society races against time to beat the traitorous Shadow Lodge to an ancient Jistkan citadel. But their rivals aren't the only obstacle in the PCs' way: the long-lost ruins teem with terrible outsiders set on manipulation and destruction, including a self-proclaimed avatar of the div god Ahriman. Beneath Forgotten Sands brings the three-part Heresy of Man series to a stunning conclusion.",
          "character_id": 7
        },
        {
          "scenario_num": 10,
          "season": 2,
          "low_level": 7,
          "high_level": 11,
          "title": "Fury of the Fiend",
          "description": "The Pathfinder Society once again sends a team of agents into the deadly ruins of Rachikan in western Cheliax. This time, however, the Pathfinders must infiltrate a Hellknight encampment to gain access to the lost city's lower levels. Can they work their way past the suspicious soldiers and survive the ancient terrors that lurk below? Fury of the Fiend is the spiritual sequel of Fingerprints of the Fiend, though the scenarios can be played in any order.",
          "character_id": 3
        },
        {
          "scenario_num": 11,
          "season": 2,
          "low_level": 1,
          "high_level": 5,
          "title": "The Penumbral Accords",
          "description": "The daughters of Absalom's mysterious Blakros family have long been among the most pursued maidens in the Inner Sea. Now the family's matriarch approaches the Pathfinder Society to help her break a centuries-old pact with the denizens of the Plane of Shadow to save her twin daughters from a life of servitude at the hands of the Onyx Alliance. Heading into the fan-favorite adventuring location of Blakros Museum, the PCs have only a short amount of time to break the Penumbral Accords and solidify the Pathfinder Society's ties to the powerful Blakroses.",
          "character_id": 9
        },
        {
          "scenario_num": 12,
          "season": 2,
          "low_level": 7,
          "high_level": 11,
          "title": "Below the Silver Tarn",
          "description": "In the rural Menador Mountains of southern Nidal, the PCs find themselves in a fog-enshrouded mining town facing a terrible fate. Silver Tarn, on the banks of which the settlement of Stom's Claim stands, has grown a mind of its own. Reaching out with strange abominations of the deep to siphon the souls of the stubborn populace, the lake hopes to release a powerful fiend bound centuries earlier by Arodenite clerics. If the PCs can't stop the Silver Tarn Entity, Stom's Claim and much of western Avistan may soon fall to a fate beyond comprehension.",
          "character_id": 1
        },
        {
          "scenario_num": 13,
          "season": 2,
          "low_level": 1,
          "high_level": 5,
          "title": "Murder on the Throaty Mermaid",
          "description": "While on a routine mission to escort a dignitary to the mysterious Mordant Spire aboard a disreputable smuggler's ship, the PCs find themselves embroiled in a murder mystery that could jeopardize the Pathfinder Society's relationship with the isolationist elves who call the citadel home. Can the cunning Pathfinders discover who among the ship's crew of scum and villains is responsible for the crime in time to clear their own names? This murder mystery upon the open sea features a mechanic allowing for a different killer each time it's run to ensure that no amount of word of mouth will spoil the investigation for any team of canny players.",
          "character_id": 7
        },
        {
          "scenario_num": 14,
          "season": 2,
          "low_level": 7,
          "high_level": 11,
          "title": "The Chasm of Screams",
          "description": "When the Decemvirate sends the PCs on a mission into the desolate Mindspin Mountains to retrieve a much-needed alchemical reagent from a hermitic ex-Pathfinder known as the Phitoness of Axioms, the players soon find themselves deep in the mythical howling caves commonly referred to as the Chasm of Screams. Can the brave adventurers survive the harsh environment and defeat the demented thralls of the powerful, icy master of the oft-avoided cavern? Or will their cries of pain join the chorus of tormented voices that already echoes from the Chasm of Screams?",
          "character_id": 3
        },
        {
          "scenario_num": 15,
          "season": 2,
          "low_level": 1,
          "high_level": 5,
          "title": "Shades of Ice - Part I: Written in Blood",
          "description": "When the Decemvirate sends the PCs to the Viking city of Trollheim in the frigid northern Lands of the Linnorm Kings to deliver a package to an allied scholar there, the Pathfinders soon find themselves unwelcome visitors. Forced to navigate the rugged, isolated city and interact with the standoffish natives, can they deliver their cargo to its target, or will they find themselves exiled from the city... or worse?",
          "character_id": 2
        },
        {
          "scenario_num": 16,
          "season": 2,
          "low_level": 7,
          "high_level": 11,
          "title": "The Flesh Collector",
          "description": "A priceless manuscript has gone missing from the Pathfinder lodge in Almas, and the Pathfinder Society has traced its current whereabouts to a remote monastery off the coast of southwestern Nex. Arriving at the Monastery of the Unremitting Tide, the PCs face the suspicious scholars who study there, and in the process risk enraging an ancient spirit and uncovering a long-lost secret that, more than possibly costing them the stolen manuscript, could cost them their very lives.",
          "character_id": 8
        },
        {
          "scenario_num": 17,
          "season": 2,
          "low_level": 1,
          "high_level": 5,
          "title": "Shades of Ice - Part II: Exiles of Winter",
          "description": "Following the trail of the insidious Shadow Lodge from Trollheim to the icebound city of Whitethrone in the witch-ruled nation of Irrisen, the PCs must locate the hidden lodge of their contact’s kidnapper. Can they get past the city’s defenses, infiltrate the Shadow Lodge headquarters and rescue the Pathfinder Society’s valuable ally, or will they—like so many before them—find their bones ground to make Baba Yaga’s bread?",
          "character_id": 7
        },
        {
          "scenario_num": 18,
          "season": 2,
          "low_level": 7,
          "high_level": 11,
          "title": "The Forbidden Furnace of Forgotten Koor",
          "description": "When a Qadiran Pathfinder known for her knowledge of genie-kind fails to report back to the Katheer Lodge, the PCs are sent into the long-abandoned ruins of Koor, a former forge city high in the Zho Mountains. In their effort to find the lost agent, the Pathfinders may find themselves facing a foe long locked in a secure vault by the city’s former occupants—guardians whose departure weakened their defenses, paving the way for a terrible escape.",
          "character_id": 7
        },
        {
          "scenario_num": 19,
          "season": 2,
          "low_level": 1,
          "high_level": 5,
          "title": "Shades of Ice - Part III: Keep of the Huscarl King",
          "description": "Information in the Shadow Lodge headquarters in Whitethrone leads you into the Realm of the Mammoth Lords in search of an abandoned tower of a lost Ulfen king. The powerful weapon rumored to be there could be disastrous if it falls into the hands of those who plot the Pathfinder Society’s destruction; who will find it first?",
          "character_id": 1
        },
        {
          "scenario_num": 20,
          "season": 2,
          "low_level": 7,
          "high_level": 11,
          "title": "Wrath of the Accursed",
          "description": "When Pathfinders in and around the Osirian capital of Sothis don’t respond to an emergency summons to the Sothis Lodge, you are sent to discover their whereabouts. What you discover are a series of horrific murders all tied to a long-forgotten curse from the Society’s past.",
          "character_id": 1
        },
        {
          "scenario_num": 21,
          "season": 2,
          "low_level": 1,
          "high_level": 7,
          "title": "The Dalsine Affair",
          "description": "Your mission takes you to the Taldan capital city of Oppara where the intricate web of political intrigue and ages-old religious conflicts threaten the Pathfinder Society’s presence in the land. When Baron Jacquo Dalsine’s cousin is implicated in a recent attack on Society allies, the situation becomes even tighter for the Pathfinders, and at the end of the day some members of the Dalsine family may not get out unscathed.",
          "character_id": 10
        },
        {
          "scenario_num": 22,
          "season": 2,
          "low_level": 12,
          "high_level": 12,
          "title": "Eyes of the Ten - Part IV: Nothing Ventured, Nothing Gained",
          "description": "In the secret upper levels of the Pathfinder Society’s headquarters, you must survive the deadly defenses laid in place by the masked Decemvirate and save one of their number from an assassin’s blade.",
          "character_id": 1
        },
        {
          "scenario_num": 23,
          "season": 2,
          "low_level": 1,
          "high_level": 7,
          "title": "Shadow's Last Stand - Part I: At Shadow's Door",
          "description": "The Shadow Lodge’s assault on the Pathfinder Society has come to a head in the Andoren city of Almas, where renegade Shadow Pathfinders have taken over the Grand Cathedral of Aroden, holding the Pathfinders and Venture-Captain stationed there hostage. You must gain entry into the overrun Pathfinder lodge and put an end to the open warfare within the Society.",
          "character_id": 1
        },
        {
          "scenario_num": 24,
          "season": 2,
          "low_level": 1,
          "high_level": 7,
          "title": "Shadow's Last Stand - Part II: Web of Corruption",
          "description": "The mastermind behind the Shadow Lodge incursion on the Pathfinder Society has been revealed—a mysterious figure known only as The Spider. Your journey to discover the traitor’s whereabouts and identities will take you throughout the streets and underground of Almas, even to the floor of the People’s Council itself.",
          "character_id": 1
        },
        {
          "scenario_num": 25,
          "season": 2,
          "low_level": 5,
          "high_level": 9,
          "title": "You Only Die Twice",
          "description": "The Pathfinder Society sends you into the undead-ruled nation of Geb for an undercover mission, not disguised as undead, but temporarily transformed into a shambling, zombie version of yourself. Can you survive the ordeal to return to the land of the living, or will your final grave be among Geb’s bones?",
          "character_id": 1
        },
        {
          "scenario_num": 26,
          "season": 2,
          "low_level": 7,
          "high_level": 11,
          "title": "The Mantis's Prey",
          "description": "The Red Mantis have a contract to assassinate Grandmaster Torch, and the famed Absalom information broker calls in a favor from the Society to prevent his untimely demise. You must locate the Red Mantis assassins sent to kill him and eliminate the threat before they strike.",
          "character_id": 3
        },
        {
          "scenario_num": 1,
          "season": 3,
          "low_level": 1,
          "high_level": 5,
          "title": "The Frostfur Captives",
          "description": "Tasked with escorting a group of goblin prisoners from their camp to civilization for interrogation by the Pathfinder Society, you must protect them not only from the beasts and hazards of the wilderness, but themselves.",
          "character_id": 1
        },
        {
          "scenario_num": 2,
          "season": 3,
          "low_level": 3,
          "high_level": 7,
          "title": "Sewer Dragons of Absaolom",
          "description": "Absalom is Golarion’s busiest and most populous city, but one of its largest populations goes largely unnoticed. You must venture into the sewers beneath the City at the Center of the World to stop the meddling dragons within from disrupting a vital Pathfinder Society operation.",
          "character_id": 9
        },
        {
          "scenario_num": 3,
          "season": 3,
          "low_level": 5,
          "high_level": 9,
          "title": "The Ghenett Manor Gauntlet",
          "description": "When the Pathfinder Society failed to obtain a valuable artifact from a wealthy Druman noble using diplomatic means, the eccentric collector challenged them to take it through skill from one of his well-guarded manors throughout the world. You are sent to Ghenett Manor in Katapesh with the hopes of surviving long enough to return with the prize—assuming it’s there at all.",
          "character_id": 9
        },
        {
          "scenario_num": 4,
          "season": 3,
          "low_level": 7,
          "high_level": 11,
          "title": "The Kortos Envoy",
          "description": "The centaur tribes of the Isle of Kortos have long been an enigma to the people of Absalom. But the Pathfinder Society needs the help of one of the horsemen’s greatest heroes, in it falls to you to negotiate an agreement between the Decemvirate and the centaurs of the plains.",
          "character_id": 7
        },
        {
          "scenario_num": 5,
          "season": 3,
          "low_level": 1,
          "high_level": 5,
          "title": "Tide of Twilight",
          "description": "In researching a recently recovered druidic lorestone, the Pathfinder Society learns of a powerful artifact with the power to turn men into bestial abominations. Amid claims of increased werewolf activity in the region, the PCs travel into the heart of the Verduran Forest to retrieve the valuable relic from a cabal of evil druids believed to currently hold it.",
          "character_id": 3
        },
        {
          "scenario_num": 6,
          "season": 3,
          "low_level": 3,
          "high_level": 7,
          "title": "Song of the Sea Witch",
          "description": "When an unlucky historian in Absalom uncovers an infernal book from distant Tian Xia, he unwittingly unleashes a terrible evil into the city—the legions of devils imprisoned within its dusty pages. Only the book's holy counterpart can end the threat, and the Pathfinder Society has been called in to assist. Can the PCs locate and retrieve the key to ending the diabolical invasion of the City at the Center of the World, or will Absalom be drowned in the sea of destruction wrought by the Infernal Incantation?",
          "character_id": 3
        },
        {
          "scenario_num": 7,
          "season": 3,
          "low_level": 1,
          "high_level": 5,
          "title": "Echoes of the Overwatched",
          "description": "When a Pathfinder agent working in the famed Blakros Museum in Absalom falls victim to a terrible, ancient evil, if falls to the PCs to hunt down the released terror before it can retrieve a relic of the mad astronomer Ralzeros the Overwatched.",
          "character_id": 3
        },
        {
          "scenario_num": 8,
          "season": 3,
          "low_level": 3,
          "high_level": 7,
          "title": "Among the Gods",
          "description": "The Pathfinder Society sends the PCs to the mountaintop mausoleum and monument known as Antios's Crown in search of a long-lost relic believed to be contained there, but all is not as it seems. Can the Pathfinders survive the denizens of the remote mountain complex and the sinister plot of a powerful cultists who plans revenge on the Society that has foiled their plans one too many times?",
          "character_id": 4
        },
        {
          "scenario_num": 9,
          "season": 3,
          "low_level": 1,
          "high_level": 5,
          "title": "The Quest for Perfection - Part I: The Edge of Heaven",
          "description": "In the distant land of Tian Xia, the Pathfinder Society's Lantern Lodge sends a team of agents high into the mountains of the Wall of Heaven to an abandoned Iroran monastery in search of a powerful relic to assist them in ensure victory in the upcoming Ruby Phoenix Tournament. Though the monastery has long laid unused by the faithful of the Master of Masters, it is not completely devoid of danger, and the PCs soon discover that merely retrieving the ancient artifact is but the beginning of a much larger quest.",
          "character_id": 8
        },
        {
          "scenario_num": 10,
          "season": 3,
          "low_level": 5,
          "high_level": 9,
          "title": "The Immortal Conundrum",
          "description": "When the Pathfinder Society receives an invitation to a dinner party at the Thuvian Embassy, hosted by the guardian of this year's six doses of the infamous sun orchid elixir, the Decemvirate sends a team of Pathfinders to represent them and uncover the nature of the event. Can the PCs navigate the complex social landscape of Absalom's elite and gain access to the mysterious vault known as the Conundrum, or will they face public ridicule or worse in the face of the steepest competition in the Inner Sea?",
          "character_id": 1
        },
        {
          "scenario_num": 11,
          "season": 3,
          "low_level": 1,
          "high_level": 5,
          "title": "The Quest for Perfection - Part II: On Hostile Waters",
          "description": "With an ancient Iroran relic in hand, the Pathfinders must make a long river voyage to the inland nation of Shokuro to return it to the only person who can reactivate the long-dormant artifact. Whether dangers take the form of goblinoid menaces on the shores of Kaoling to the north or the powerful armies of Lingshen to the south, the Pathfinders' journey will be anything but a pleasure cruise. Can the PCs survive hostile waters to safely reach their destination, or will they fall victim to the perils of river travel in Tian Xia?",
          "character_id": 8
        },
        {
          "scenario_num": 12,
          "season": 3,
          "low_level": 5,
          "high_level": 9,
          "title": "Wonders in the Weave - Part I: The Dog Pharaoh's Tomb",
          "description": "On an isolated demiplane, the Pathfinders explore an Osirian ruin transported from Golarion by a powerful sorcerer centuries ago. And though the Pathfinder Society believes the fruits of their delve to be ripe for the picking, the unnatural landscape surrounding the tomb and a run-in with an unexpected guest make getting out with the treasure a tough task for the PCs.",
          "character_id": 3
        },
        {
          "scenario_num": 13,
          "season": 3,
          "low_level": 1,
          "high_level": 5,
          "title": "The Quest for Perfection Part III: Defenders of Nesting Swallow",
          "description": "As the Pathfinders approach the village of Nesting Swallow in the Tian nation of Shokuro, they find it besieged by a gang of tengu bandits. Before their contact in the village will aid them in restoring the Iroran relic that brought them hundreds of miles to the isolated town, the PCs must repulse the attackers, using every ounce of tactical mettle and military strategy they possess to train the villagers, augment their defenses, and ultimately face off against the bandits' charge.",
          "character_id": 1
        },
        {
          "scenario_num": 14,
          "season": 3,
          "low_level": 5,
          "high_level": 9,
          "title": "Wonders in the Weave - Part II: Snakes in the Fold",
          "description": "In a world the Pathfinder Society thought theirs for the exploring, the agents sent to retrieve a simple relic find themselves at odds with an entire lizardfolk village. As if that weren't enough, however, a longtime rival to the Society has allied with the lizardfolk, and if not stopped, the Pathfinders' entire operation on the newly discovered demiplane could be in jeopardy.",
          "character_id": 1
        },
        {
          "scenario_num": 15,
          "season": 3,
          "low_level": 5,
          "high_level": 9,
          "title": "The Haunting of Hinojai",
          "description": "Ever seeking long-lost secrets, the Pathfinder Society sends a team of agents to explore a reportedly haunted house in the Dragon Empires nation of Minkai, hoping they can uncover the secret behind the legendary location's tormented past.",
          "character_id": 1
        },
        {
          "scenario_num": 16,
          "season": 3,
          "low_level": 3,
          "high_level": 7,
          "title": "The Midnight Mauler",
          "description": "The Decemvirate sends members of the Pathfinder Society to the former crown jewel of Ustalav's royal courts, the decaying city of Ardis. Tasked by the Society to look into the fate of Absalom's former Master of Blades, Vonran Vilk, what they find will lead to exploration, diplomacy, murder, haunted pasts, and tragic love. Can the PCs stop the rampage of the Midnight Mauler before he kills again?",
          "character_id": 1
        },
        {
          "scenario_num": 17,
          "season": 3,
          "low_level": 7,
          "high_level": 11,
          "title": "Red Harvest",
          "description": "In the naga-ruled nation of Nagajor in southern Tian Xia, the Pathfinder Society finds itself caught between feuding factions in a remote village. Forced to choose a side, the decisions of the agents involved could determine whether or not the Society gains access to a valuable religious artifact considered sacred by the village's nagaji population.",
          "character_id": 1
        },
        {
          "scenario_num": 18,
          "season": 3,
          "low_level": 1,
          "high_level": 5,
          "title": "The God's Market Gamble",
          "description": "Valuable relics of religious natures have been disappearing on their way into Absalom and the Pathfinder Society stands to lose countless irreplaceable artifacts if the cause isn't found. Amid the bustling markets of the God's Market in the shadow of the Starstone Cathedral, the Society sets a plan in motion to ensure the parties responsible for the recent thefts are caught and brought to justice.",
          "character_id": 1
        },
        {
          "scenario_num": 19,
          "season": 3,
          "low_level": 1,
          "high_level": 5,
          "title": "The Icebound Outpost",
          "description": "The Pathfinder Society discovers an Aspis Consortium base in an ancient Vudran temple now encased in a glacier and sends the PCs to infiltrate it and investigate the extent of the rival organization's regional operations. Can the PCs get in the well-guarded Aspis outpost and escape with their lives and the information the Society seeks?",
          "character_id": 5
        },
        {
          "scenario_num": 20,
          "season": 3,
          "low_level": 7,
          "high_level": 11,
          "title": "The Rats of Round Mountain - Part I: The Sundered Path",
          "description": "In an effort to prevent an alliance between the Aspis Consortium and a contingent of ratfolk with incredible regional influence, the Pathfinder Society sends its best agents deep into a Darklands passage to the heart of Round Mountain, where the ratfolk hold court. But as is often the case for Pathfinders, the journey is an adventure unto itself, potentially deadly enough to prevent the PCs from reaching their destination at all.",
          "character_id": 1
        },
        {
          "scenario_num": 21,
          "season": 3,
          "low_level": 1,
          "high_level": 5,
          "title": "The Temple of Empyreal Enlightenment",
          "description": "In order to learn about the esoteric faith of the Empyreal Lord Korada, the PCs are sent by the Pathfinder Society to explore an abandoned aasimar temple to the benevolent deity. But what they find there is anything but an opportunity for peaceful reflection and enlightenment.",
          "character_id": 10
        },
        {
          "scenario_num": 22,
          "season": 3,
          "low_level": 7,
          "high_level": 11,
          "title": "The Rats of Round Mountain - Part II: Pagoda of the Rat",
          "description": "In the hollow center of Round Mountain, the Pathfinder Society's crack team of special agents must navigate the so-called Pagoda of the Rat, where the influential ratfolk of the region hold court. Can they break up negotiations between the ratfolk and the sinister Aspis Consortium, or will the risks taken to reach this point have been in vain? The future of the Pathfinder Society's viability in the region lies in the PCs' hands.",
          "character_id": 7
        },
        {
          "scenario_num": 23,
          "season": 3,
          "low_level": 1,
          "high_level": 5,
          "title": "The Goblinblood Dead",
          "description": "More than a decade has passed since the Goblinblood Wars left the nation of Isger in shambles, and the Pathfinder Society uses the many abandoned roads through the county's interior to smuggle valuable relics. But when a series of attacks on the Varisian caravans carrying the illicit cargo puts the route in jeopardy, it falls to the PCs to investigate and rid the region of the threat to the Society's operations.",
          "character_id": 1
        },
        {
          "scenario_num": 24,
          "season": 3,
          "low_level": 5,
          "high_level": 9,
          "title": "The Golden Serpent",
          "description": "The Pathfinder Society sends a team of agents to meet an important contact in an unassuming restaurant in Absalom’s Ivy District, but not everything is as it seems. What the Pathfinders find there will lead them into a lion’s den of danger and intrigue in the City at the Center of the World.",
          "character_id": 9
        },
        {
          "scenario_num": 25,
          "season": 3,
          "low_level": 3,
          "high_level": 7,
          "title": "Storming the Diamond Gate",
          "description": "Agents of the Pathfinder Society have discovered the location of a back door into their private demiplane that puts the entire realm at risk of plunder and exploitation at the hands of the Aspis Consortium. Rather than close the access point into their adventuring paradise, however, the Decemvirate sends a crack team of Pathfinders to secure the gate for future Society use... at any cost.",
          "character_id": 2
        },
        {
          "scenario_num": 26,
          "season": 3,
          "low_level": 7,
          "high_level": 11,
          "title": "Portal of the Sacred Rune",
          "description": "The Pathfinder Society has secured one end of a portal from Golarion leading to an isolated demiplane rife with adventuring opportunities. Now all that remains is gaining control of the other end, thereby ensuring safe and continued use by Pathfinders for years to come. The PCs are selected as the best chance the Decemvirate has of claiming the portal for their own.",
          "character_id": 1
        },
        {
          "scenario_num": 1,
          "season": 4,
          "low_level": 1,
          "high_level": 5,
          "title": "Rise of the Goblin Guild",
          "description": "When a monster is discovered on the grounds of the Pathfinder Lodge at Heidmarch Manor in Magnimar, an investigation into its appearance leads the PCs deep under the City of Monuments—and face to face with a burgeoning thieves’ guild.",
          "character_id": 1
        },
        {
          "scenario_num": 2,
          "season": 4,
          "low_level": 3,
          "high_level": 7,
          "title": "In Wrath's Shadow",
          "description": "In the ruins of Xin-Bakrakhan—seat of power of the Runelord of Wrath—the Pathfinder Society stands on the verge of a great discovery, but first the brave agents exploring the ruins must survive ages-old dangers and contemporary threats to return with the knowledge and wealth they’ve unearthed.",
          "character_id": 1
        },
        {
          "scenario_num": 3,
          "season": 4,
          "low_level": 5,
          "high_level": 9,
          "title": "The Golemworks Incident",
          "description": "When the Golemworks in Magnimar starts reporting some “problems” with their most recent batch of golems, the PCs are sent to investigate in the hope that the Pathfinder Society can get on good terms with the influential arcane organization.",
          "character_id": 1
        },
        {
          "scenario_num": 4,
          "season": 4,
          "low_level": 7,
          "high_level": 11,
          "title": "King of the Storval Stairs",
          "description": "The PCs are sent to map the Storval Stairs and ensure the stairs provide a safe route to the Storval Rise from Magnimar, but upon their arrival, they find the ancient site claimed and “ruled” by the self-proclaimed King of the Storval Stairs. Only through guile, diplomacy, or cold steel will the Pathfinders ensure access to iconic Thassilonian location.",
          "character_id": 1
        },
        {
          "scenario_num": 5,
          "season": 4,
          "low_level": 3,
          "high_level": 7,
          "title": "The Sanos Abduction",
          "description": "The Pathfinders are sent to the Sanos Forest in central Varisia to assist an agent researching the fey who inhabit the remote wood. But like many seemingly routine tasks in a Pathfinder's adventuring career, the simple support mission quickly turns into an adventure the PCs aren't soon to forget—presuming they survive.",
          "character_id": 1
        },
        {
          "scenario_num": 6,
          "season": 4,
          "low_level": 5,
          "high_level": 9,
          "title": "The Green Market",
          "description": "When an ally of the Society reports that her sister's business is being harassed by the Aspis Consortium in the Varisian city of Korvosa, a team of Pathfinder agents is dispatched to the Green Market to assist. What they find there is more than simple strong-arming and intimidation, however. What mysterious forces bring the popular market its unlikely success, and can the PCs stop the Aspis Consortium from gaining control of what could become a lucrative resource for the rival organization?",
          "character_id": 1
        },
        {
          "scenario_num": 7,
          "season": 4,
          "low_level": 1,
          "high_level": 5,
          "title": "Severing Ties",
          "description": "The Pathfinder Society has discovered a new Aspis Consortium base in the pirate city of Riddleport and sends a small team of agents to infiltrate the rival cell disguised as newly hired mercenaries from Magnimar. After proving their value to the Aspis Consortium by carrying out a number of tasks throughout the City of Cyphers, the Pathfinders can learn the location of one of the consortium's local allies and ensure that the support the Aspis Consortium is counting on from their friends won't come.",
          "character_id": 2
        },
        {
          "scenario_num": 8,
          "season": 4,
          "low_level": 7,
          "high_level": 11,
          "title": "The Cultist's Kiss",
          "description": "An active cell of the cult of Lissala—ancient goddess of runes and obedience—has been discovered in the Varisian town of Palin's Cove. Seeking a chance to learn about this long-lost faith not from millennia-old relics but from its current practice, a team of Pathfinders travels to the industrial seaside settlement to uncover the secret coven and infiltrate its services in the guise of prospective converts. Will the Pathfinders discover the knowledge they seek, or will the evil cult subvert them with its vile and seductive faith?",
          "character_id": 1
        },
        {
          "scenario_num": 9,
          "season": 4,
          "low_level": 3,
          "high_level": 7,
          "title": "The Blakros Matrimony",
          "description": "The eldest daughter of the prominent Blakros family is set to wed an influential Hellknight, and the Pathfinder Society is invited to the festivities. Dressed for a wedding befitting royalty, a team of Pathfinders attend the ceremony on behalf of the Decemvirate, but will their presence ultimately strengthen the Society's relationship with the influential Blakroses, or will events at the wedding bring the already tenuous alliance to a breaking point?",
          "character_id": 2
        },
        {
          "scenario_num": 10,
          "season": 4,
          "low_level": 7,
          "high_level": 11,
          "title": "Feast of Sigils",
          "description": "In Kaer Maga, the mysterious and dangerous cliffside City of Strangers in untamed Varisia, the Pathfinder Society will come face to face with a sect of the cult of Lissala who prey upon the city's most vulnerable denizens to increase their own power. To what end do they conduct the ancient Feast of Sigils ritual, and can the Pathfinders stop them before their evil plans come to fruition?",
          "character_id": 1
        },
        {
          "scenario_num": 11,
          "season": 4,
          "low_level": 1,
          "high_level": 5,
          "title": "The Disappeared",
          "description": "A powerful ally of the Pathfinder Society has disappeared, and no one but the Pathfinders even remembers that she ever existed. Can the PCs discover the fate of their missing associate, or will all memory of her be erased completely from history?",
          "character_id": 3
        },
        {
          "scenario_num": 12,
          "season": 4,
          "low_level": 7,
          "high_level": 11,
          "title": "The Refuge of Time",
          "description": "In the ruins of a fallen empire built on the power of sin lies the key to awakening a great evil from a time long gone. The Pathfinder Society isn't the only organization seeking this potent artifact, however, and the result of failure could mean disaster for the whole of Varisia and beyond.",
          "character_id": 1
        },
        {
          "scenario_num": 13,
          "season": 4,
          "low_level": 5,
          "high_level": 9,
          "title": "Fortress of the Nail",
          "description": "The Pathfinder Society sends a team of agents into a Hellknight citadel to free a wrongfully imprisoned ally. Among the law-bound knights, however, they may find that getting out of the prison isn't as easy as getting in.",
          "character_id": 1
        },
        {
          "scenario_num": 14,
          "season": 4,
          "low_level": 3,
          "high_level": 7,
          "title": "My Enemy's Enemy",
          "description": "Someone in the city of Magnimar is committing crimes and leaving evidence implicating the Pathfinder Society. It falls to the Pathfinders to get to the bottom of it, and what they find may signal the resurgence of an enemy thought long defeated.",
          "character_id": 2
        },
        {
          "scenario_num": 15,
          "season": 4,
          "low_level": 1,
          "high_level": 5,
          "title": "The Cyphermage Dilemma",
          "description": "In the shadow of the cyclopean Cyphergate that spans Riddleport's harbor, the PCs find themselves embroiled in a dangerous plot of deception that one could only find in Varisia's infamous pirate port.",
          "character_id": 3
        },
        {
          "scenario_num": 16,
          "season": 4,
          "low_level": 5,
          "high_level": 9,
          "title": "The Fabric of Reality",
          "description": "For the past year, the Pathfinder Society has used the isolated demiplane contained in the Hao Jin Tapestry as a private adventuring realm and, since discovering a backdoor out of the demiplane, as a shortcut from the tapestry's location to a hidden corner of Varisia. But the tapestry wasn't designed for this purpose, and travel from Absalom to Varisia could be more efficient. Now a team of Pathfinders must discover how the infamous sorcerer known as the Ruby Phoenix created her private demiplane and enter the heart of the tapestry and alter the very nature of the magical realm.",
          "character_id": 2
        },
        {
          "scenario_num": 17,
          "season": 4,
          "low_level": 5,
          "high_level": 9,
          "title": "Tower of the Ironwood Watch",
          "description": "On the edge of Varisia's Mierani Forest stand the ruins of an ancient guardtower that once served as the native elves' first line of defense against the threat of invasion from the bordering Thassilonian realm of Envy. Just as the elves fled Golarion to avoid the destruction of Earthfall, so too did they leave behind the Tower of the Ironwood Watch, which the Pathfinder Society now hopes to explore—a task that could prove more dangerous than anyone anticipates.",
          "character_id": 2
        },
        {
          "scenario_num": 18,
          "season": 4,
          "low_level": 1,
          "high_level": 5,
          "title": "The Veteran's Vault",
          "description": "While many Pathfinders meet unfortunate fates in their ongoing explorations of the dangerous world of Golarion, some retire with decades' worth of treasure in their coffers, and their lives still intact. When one such Pathfinder approaches the Grand Lodge with the hidden location of her treasure vault, it falls upon a new generation of Pathfinders to retrieve from within a valuable keepsake. That they can keep anything other than the ex-Pathfinder's locket makes the assignment all the sweeter.",
          "character_id": 3
        },
        {
          "scenario_num": 19,
          "season": 4,
          "low_level": 1,
          "high_level": 5,
          "title": "The Night March of Kalkamedes",
          "description": "A veteran Pathfinder exploring the Fenwall Mountains of Varisia has begun sleepwalking, traveling through the dead of night in the same direction each time. The following mornings, however, he awakens injured and lost in the wilderness, never reaching the mysterious destination that drew him from his bed in the night. Something is calling Kalkamedes, something powerful, but unless he can make it safely to the source of his somnambulism, that power will remain a mystery. It falls to a team of Pathfinders to escort the sleepwalker to his destination and uncover the true nature of the strange phenomenon overtaking Kalkamedes's dreams.",
          "character_id": 3
        },
        {
          "scenario_num": 20,
          "season": 4,
          "low_level": 7,
          "high_level": 11,
          "title": "Words of the Ancients",
          "description": "After countless divinations and the efforts of undercover agents throughout Varisia, the Pathfinder Society has discovered the location of the last component needed to awaken a sleeping runelord. In a mad dash to beat the cult of Lissala to this ancient Thassilonian ruin, the Pathfinders must do whatever it takes to ensure they and not the evil cultists acquire the power within. But the arcane components are not unguarded, and even after 10,000 years, the cost of ensuring the safety of the region could be higher than the veteran adventurers are prepared or willing to pay.",
          "character_id": 1
        },
        {
          "scenario_num": 21,
          "season": 4,
          "low_level": 3,
          "high_level": 7,
          "title": "Way of the Kirin",
          "description": "On the eastern continent of Tian Xia, the Pathfinder Society remains a small player in the greater political landscape, but Amara Li, head of the Lantern Lodge in the teeming city of Goka, has plans to change that. In order to secure the Pathfinder Society's place as an influential organization on the far side of the world from the Grand Lodge in Absalom, she must orchestrate an alliance with the mysterious Way of the Kirin. But the longtime rival of the Pathfinder Society, the Aspis Consortium, has plans to form an alliance of its own, and if the consortium succeeds, the Pathfinder Society's hopes of cementing their place in the Dragon Empires could be dashed forever.",
          "character_id": 3
        },
        {
          "scenario_num": 22,
          "season": 4,
          "low_level": 5,
          "high_level": 9,
          "title": "Halls of Dwarven Lore",
          "description": "The dwarven sky citadel of Janderhoff in eastern Varisia is one of the least visited settlements in the land, at least by non-dwarves. Nevertheless, the Pathfinder Society has been invited to assist in the excavation of a forgotten ruin within the large underground complex. What the fearless adventurers stand to find within could be the greatest discovery of the Age of Lost Omens, something sure to immortalize all involved in the pages of the Pathfinder Chronicles for ever more. But the ruins under Janderhoff aren't the end of the Pathfinders' journey; rather they illuminate a treacherous path ahead, from the familiar land of Varisia into much more dangerous territory.",
          "character_id": 2
        },
        {
          "scenario_num": 23,
          "season": 4,
          "low_level": 3,
          "high_level": 7,
          "title": "Rivalry's End",
          "description": "The Pathfinder Society's conflict with the Aspis Consortium in the frontier region of Varisia has come to a head, and the time to secure dominance of the ancient land is now. But despite mounting victories on the Society's part, the Aspis Consortium still has a few tricks up its sleeves, including several powerful agents from the Pathfinders' past who could prove too challenging an obstacle to surmount. Can the PCs end the ongoing struggle for control of the flow of ancient Thassilonian artifacts out of Varisia's ports, or will the Aspis Consortium succeed in keeping the Pathfinder Society ever in its shadow as it profits on the exploitation of the millennia?",
          "character_id": 3
        },
        {
          "scenario_num": 24,
          "season": 4,
          "low_level": 5,
          "high_level": 9,
          "title": "The Price of Friendhsip",
          "description": "The Pathfinder Society has discovered the hint of a monumental revelation, but in order to confirm their find, they must send a team of agents into the dangerous and unwelcoming orc-ruled Hold of Belkzen. While an expedition could easily be dispatched to the orc capital of Urgir, the Decemvirate urges caution to ensure success. Thus, a team of Pathfinders must seek out a guide in the Varisian orc city of Urglin. Can they navigate the treacherous city of denizens who wouldn't mind seeing them dead, or will the orcs' Second Home be the site of their final mission?",
          "character_id": 2
        },
        {
          "scenario_num": 25,
          "season": 4,
          "low_level": 5,
          "high_level": 9,
          "title": "The Secrets Stones Keep",
          "description": "Deep beneath the orc city of Urgir in the Hold of Belkzen lie the ruins of the ancient dwarven Sky Citadel of Koldukar, where awaits what could be the greatest discovery of the Age of Lost Omens: confirmation of the location of one of the lost Sky Citadels, built by the dwarves in their earliest days on the surface of Golarion. But reaching their destination won't be easy for the Pathfinders, and only the most skilled will survive Urgir and the terrors guarding the dwarves' long-abandoned secrets. Can they uncover the location of the lost Sky Citadel, or will the Pathfinders suffer the same fate as Koldukar—defeat at the hands of ruthless orcs and centuries of decay under the earth?",
          "character_id": 2
        },
        {
          "scenario_num": 26,
          "season": 4,
          "low_level": 7,
          "high_level": 11,
          "title": "The Waking Rune",
          "description": "After a year of searching and risking life and limb, the agents of the Pathfinder Society have discovered the resting place of the Runelord of Sloth, who has been sequestered from the world at large for 10,000 years awaiting the proper time for his return. Thanks to the efforts of the sinister cult of Lissala, that time is now. In a desperate attempt to defeat this ancient evil once and for all, the Decemvirate sends its best agents, armed with relics found throughout ancient Thassilon, to foil the cult's last-ditch efforts to usher in a new era of tyranny and strife. Will the party succeed in preventing Krune's return to Golarion, or will the Pathfinder Society serve simply as a speed-bump in the runelord's path to domination over the entire region?",
          "character_id": 1
        },
        {
          "scenario_num": 1,
          "season": 5,
          "low_level": 1,
          "high_level": 5,
          "title": "The Glass River Rescue",
          "description": "A Pathfinder leading a diplomatic envoy from the dwarven holds of the Five Kings Mountains has gone missing, and the balance of power in a time of war hangs on her rescue. The Pathfinder Society's divinations indicate the agent was waylaid in the theocratic nation of Razmiran, when one of her escorted diplomats failed to pay a requested tithe. Now it falls to the party to enter Razmiran, locate the missing Pathfinder and the dwarven diplomats, and escape with their lives.",
          "character_id": 9
        },
        {
          "scenario_num": 2,
          "season": 5,
          "low_level": 3,
          "high_level": 7,
          "title": "The Wardstone Patrol",
          "description": "All-out war has erupted on the long-contested border between the crusader nation of Mendev and the demon-infested Worldwound. With the magical defenses that once held the demons at bay failing, defense of the region now falls to small patrols of mobile soldiers to resupply, reinforce, and communicate between the border's many fortresses and outposts. With so much at stake, the Pathfinder Society has enlisted many of its agents to assist in the war effort, both to protect its own interests and to prevent the onrushing tide of demonic attackers from plunging the entire Inner Sea region into chaos. On one such wardstone patrol, however, the party may find itself facing an enemy of an entirely different nature.",
          "character_id": 4
        },
        {
          "scenario_num": 3,
          "season": 5,
          "low_level": 5,
          "high_level": 9,
          "title": "The Hellknight's Feast",
          "description": "War between demons and the civilized peoples of the Inner Sea region has broken out in the Worldwound far to the north of Absalom, but despite the regional implications of an Abyssal victory, many nations are ambivalent toward the cause. The Pathfinder Society, at the urging of Silver Crusade leader Ollysta Zadrian, arranges a formal banquet to be hosted by newlyweds Michellia and Damian Blakros, at which the society's agents can attempt to sway the political opinions of Absalom's movers and shakers. Will the Pathfinders succeed in securing the much-needed military support of Absalom and other nations bordering the Inner Sea, or will the crusaders and Pathfinders fighting on the front lines in Mendev find themselves standing alone before the demonic hordes?",
          "character_id": 4
        },
        {
          "scenario_num": 4,
          "season": 5,
          "low_level": 1,
          "high_level": 5,
          "title": "The Stolen Heir",
          "description": "The Mendevian Crusade draws heavily on the Pathfinder Society’s resources, and unless the Decemvirate can secure the assistance of generous patrons, the society may not have sufficient capital both to fight off the demonic invasion and to prepare its expedition to a lost historical site within the Worldwound. Upon hearing that the daughter of an eminent and wealthy of citizen of Sauerton has gone missing, the Pathfinders rush to her aid in the hope of earning her father’s goodwill and support in upcoming endeavors.",
          "character_id": 4
        },
        {
          "scenario_num": 5,
          "season": 5,
          "low_level": 7,
          "high_level": 11,
          "title": "The Elven Entanglement",
          "description": "Nearly every nation has contributed to the Mendevian Crusade, but few are willing to send additional aid to assist the Pathfinder Society directly. Owed a favor the elves cannot refuse, Pathfinders travel to Kyonin to secure a force of some of the finest demon-hunters in Avistan only to find that the hunters are missing in action. Can the Pathfinders extract the lost elves from the depths of Tanglebriar, or will they become the latest casualties of Treerazer’s domain?",
          "character_id": 1
        },
        {
          "scenario_num": 6,
          "season": 5,
          "low_level": 3,
          "high_level": 7,
          "title": "You Have What You Hold",
          "description": "As an act of retribution, an enemy of the society begins hiring river pirates to waylay Pathfinder boats bound for the crusader nation of Mendev. Unless the Pathfinders can track down the party responsible and put an end to their piracy, the raids may spell the doom of the society’s ambitions to the north.",
          "character_id": 6
        },
        {
          "scenario_num": 7,
          "season": 5,
          "low_level": 5,
          "high_level": 9,
          "title": "Port Godless",
          "description": "Few are as adept at fighting demons as the Riftwardens, an organization of spellcasters dedicated to protecting the boundaries between the planes. Many are already committed to the Fifth Crusade in Mendev and are unable to assist the Pathfinders directly in the society’s upcoming expedition into the Worldwound, but if the Pathfinders assist the Riftwardens elsewhere, perhaps a small number of the mages might be free to return the favor. Unfortunately, this means entering the godless nation Rahadoum, where several Riftwardens have recently disappeared.",
          "character_id": 4
        },
        {
          "scenario_num": 8,
          "season": 5,
          "low_level": 1,
          "high_level": 2,
          "title": "The Confirmation",
          "description": "Almost all Pathfinders undergo extensive training for three or more years to learn the tricks of the trade, and their last test before graduating from the ranks of the initiates to the status of a full Pathfinder agent is the Confirmation, a special research project that involves considerable fieldwork and is designed to simulate the initiates' future work as a Pathfinder. Even the noteworthy field commissioned agents sometimes participate in such trials as a way to familiarize themselves with the Pathfinder Society’s rules and expectations. Although Confirmation is typically an individual affair, the society recently discovered a site on the Isle of Kortos that would be perfect for initiates but perhaps too dangerous to handle alone. Successfully uncovering this site’s secrets will not only contribute to the society’s body of knowledge but shape the exciting careers ahead for each of the prospective agents.",
          "character_id": 8
        },
        {
          "scenario_num": 9,
          "season": 5,
          "low_level": 3,
          "high_level": 7,
          "title": "The Traitor's Lodge",
          "description": "During the recent attack on Nerosyan, Pathfinders sought out a local venture-captain to aid in the city’s defense. What they found instead suggested the leader had not only fled recently but had played a part in the demons’ offensive. Venture-Captain Jorsal has determined that the safety and integrity of the Pathfinder Society requires that a team delve into the sealed basement beneath the abandoned lodge to determine what other plans his turncoat colleague may have set in motion.",
          "character_id": 4
        },
        {
          "scenario_num": 10,
          "season": 5,
          "low_level": 7,
          "high_level": 11,
          "title": "Where Mammoths Dare Not Tread",
          "description": "Despite several promising developments on the front lines, it’s increasingly clear to the Pathfinder Society that fighting its way across the entire Worldwound would prove far more costly than approaching the Sky Citadel Jormurdun from the west. What it might gain in ease of use, the society lacks in an established basecamp, so the PCs must travel to the Realm of the Mammoth Lords to win over the locals and secure a beachhead—all without falling prey to the area’s powerful megafauna, savage demons, and relentless barbarian tribes.",
          "character_id": 7
        },
        {
          "scenario_num": 11,
          "season": 5,
          "low_level": 1,
          "high_level": 5,
          "title": "Library of the Lion",
          "description": "Few societies have so vaunted a tradition of leading crusades as Taldor, yet the constant revisions to its history by scheming factions leaves the truth obscured by countless acts of political modifications. Even the lauded Kitharodian Academy’s texts are riddled with these changes, so when a secretive ally approaches the Pathfinder Society with information about a hidden archive that contains the unaltered histories, the Pathfinders plan a daring infiltration to recover the secrets of Taldor’s past victories so that Mendev might benefit from the discovery.",
          "character_id": 11
        },
        {
          "scenario_num": 12,
          "season": 5,
          "low_level": 1,
          "high_level": 5,
          "title": "Destiny of the Sands Part 1: A Bitter Bargain",
          "description": "Amenopheus has learned that the legacy of the Jeweled Sages lies near the Osirian trade city of Eto, and the Pathfinder Society has pledged its support in the Sapphire Sage’s investigation of his ancient order; however the lead dried up—that was until a familiar information broker contacted Amenopheus offering an exchange of services. To assist an ally and unlock the secrets of Osirion’s past, the Society must deal with a deadly antagonist once more by sending the PCs to fulfill the bargain and collect its due. The only question is what price their foe will demand.",
          "character_id": 6
        },
        {
          "scenario_num": 13,
          "season": 5,
          "low_level": 5,
          "high_level": 9,
          "title": "Weapon in the Rift",
          "description": "Dire need begets great innovation, and Ghalcor, a cleric of Iomedae, created a revolutionary new weapon to fight the demons that poured out of the Worldwound at the end of the First Mendevian Crusade. Unfortunately, the fiends overwhelmed Ghalcor and his assistants before they could arm and trigger the weapon, but complex fail-safes sealed off Ghalcor’s tower and kept the device from falling into abyssal hands. As the Fifth Mendevian Crusade rages on, Ghalcor’s secret weapon could be the factor that turns the tide, so the Pathfinder Society has agreed to find a way past the indiscriminate safeguards to secure the device for the crusaders—a task complicated by their pushing past enemy lines.",
          "character_id": 7
        },
        {
          "scenario_num": 14,
          "season": 5,
          "low_level": 3,
          "high_level": 7,
          "title": "Day of the Demon",
          "description": "The Blakros family, long an ally of the Pathfinder Society, has come into possession of a manor house in the imperial nation of Cheliax, where a once prominent noble family was known to practice diabolism before the Age of Lost Omens. The Pathfinders' task is simple: clear the abandoned manor of any remaining threats before the Blakroses move in. Unfortunately, the estate hasn't sat empty as long as the Blakroses think it has, and its recent inhabitants were anything but the devil-worshipers who originally built the manor.",
          "character_id": 3
        },
        {
          "scenario_num": 15,
          "season": 5,
          "low_level": 1,
          "high_level": 5,
          "title": "Destiny of the Sands Part 2: Race to Seeker's Folly",
          "description": "The Pathfinder Society has discovered the location of a powerful Osirian artifact secreted beneath the sands, but they are not the only ones who seek its power. The Pathfinders must endure the scalding Osirian desert, brave its inhabitants, and watch for hidden dangers if they are to survive. Can the PCs reach the ruins before their rivals claim the prize?",
          "character_id": 6
        },
        {
          "scenario_num": 16,
          "season": 5,
          "low_level": 3,
          "high_level": 7,
          "title": "Destiny of the Sands Part 3: Sanctum of the Sages",
          "description": "Uncovering the secrets of a Jeweled Sage reveals that the others are in grave danger, and the PCs set off after notorious jewel thieves before the criminals can disappear with another priceless treasure. When the trail leads to the sages’ hidden sanctum deep within the Pillars of the Sun, the Pathfinders must draw upon both their own resourcefulness and the ancient historians’ power if they are to preserve a millennia-old organization and Osirion’s past.",
          "character_id": 6
        },
        {
          "scenario_num": 17,
          "season": 5,
          "low_level": 7,
          "high_level": 11,
          "title": "Fate of the Fiend",
          "description": "Years after the Pathfinder Society delved deep into the Jistkan ruins of Rachikan in western Cheliax, archaeological investigations continue to uncover ancient wonder. Reports recently ceased after scholars reported finding a sealed chamber believed to contain cadres of battle golems untouched since the Jistka Imperium’s collapse. The Pathfinder Society hopes to recover the golems for study and possible use in the Worldwound, but can its agents reach the sealed storeroom before the constructs fall into enemy hands? “Fate of the Fiend” is the spiritual sequel to “Fingerprints of the Fiend” and “Fury of the Fiend,” though the scenarios can be played in any order.",
          "character_id": 3
        },
        {
          "scenario_num": 18,
          "season": 5,
          "low_level": 5,
          "high_level": 9,
          "title": "The Stranger Within",
          "description": "Guaril Karela, a close ally of the Pathfinder Society and the leader of the Sczarni faction, made dangerous enemies during his bid for territory and influence, and several of the rivals that he once thought defeated have returned with every intention of ending Guaril’s little empire and his life. The PCs must travel to the dangerous city of Kaer Maga, track down these assassins, and sabotage their efforts in order to save one of the Society’s most reliable spymasters.",
          "character_id": 8
        },
        {
          "scenario_num": 19,
          "season": 5,
          "low_level": 1,
          "high_level": 5,
          "title": "The Horn of Aroden",
          "description": "For months Taldor faction leader Lady Gloriana Morilla has mustered a small army to aid the Mendevian Crusade; however, without a powerful, unifying icon to rally around, progress is slow. When her agents learned of a dormant relic that might be awakened, she petitioned the Pathfinder Society for its aid in recovering this so-called Horn of Aroden, knowing that the Society would benefit from her army’s hastened arrival. The PCs travel to Brevoy, a fragmented land of dueling, cold, and conquest to secure this horn, though in doing so they join an ongoing plot of politics and intrigue.",
          "character_id": 10
        },
        {
          "scenario_num": 20,
          "season": 5,
          "low_level": 7,
          "high_level": 11,
          "title": "The Sealed Gate",
          "description": "Following its efforts to set up a base camp in the Realm of the Mammoth Lords, the Pathfinder Society seemed ready to mobilize its forces when Marcos Farabellus received troubling news: something dire had befallen the camp. What’s worse, these events resulted in the disappearance of one of the Society’s most valuable tools as well as two of its esteemed leaders. The PCs must investigate the ruined camp, track down the perpetrators, and recover a powerful relic to prevent this tragedy from ruining the entire expedition.",
          "character_id": 7
        },
        {
          "scenario_num": 21,
          "season": 5,
          "low_level": 1,
          "high_level": 5,
          "title": "The Merchant's Wake",
          "description": "A powerful Qadiran trade prince has died, and faction leader Aaqir al’Hakam rushes to his homeland to attend his mentor’s funeral. As an act of support, the Pathfinder Society sends the PCs as representatives to the event; however the death of such an influential merchant and politician has created a considerable power vacuum, and ambitious acquaintances from across the Inner Sea are in attendance to pay their respects, claim a piece of the trade prince’s legacy, and undercut their rivals’ attempts to do the same. Can the Pathfinders keep this somber event from spiraling into a bloodbath?",
          "character_id": 9
        },
        {
          "scenario_num": 22,
          "season": 5,
          "low_level": 1,
          "high_level": 5,
          "title": "Scars of the Third Crusade",
          "description": "The fiery inquisitions that raged through Mendev during the Third Mendevian Crusade may have been damped but never truly extinguished. Fanatics have reignited the witch-hunts in eastern Mendev, and in doing so they have captured and accused allies of the Pathfinder Society. Unless the PCs intercede and put a stop to this mob justice, their allies' deaths will spark a new wave of internecine executions throughout the crusader nation.",
          "character_id": 13
        },
        {
          "scenario_num": 23,
          "season": 5,
          "low_level": 5,
          "high_level": 9,
          "title": "Cairn of Shadows",
          "description": "The innumerable cairns and burial mounds of Barrowmoor in northern Nidal contain untold treasures and terrors, and the local taboos and Nidalese theocracy are typically enough to keep any but the boldest from exploring the site; however, when the Blakros family informs the Pathfinder Society that their shared enemy is in pursuit of a dangerous artifact, the PCs must brave the shadow-stricken region to keep this object from falling into the wrong hands.",
          "character_id": 6
        },
        {
          "scenario_num": 24,
          "season": 5,
          "low_level": 3,
          "high_level": 7,
          "title": "Assault on the Wound",
          "description": "The Pathfinder Society embarks on its expedition to the lost Sky Citadel Jormurdun with a small army of allies in tow, but they are not the only ones seeking the dwarven fortress. Two of the Society’s nemeses have rallied the fiends of Frostmire to crush the Pathfinders, hoping to buy the villains enough time to secure Jormurdun first. If the campaign is to succeed, the Society’s forces will need bold leadership. Can the PCs lead their motley army to victory deep in the Worldwound?",
          "character_id": 8
        },
        {
          "scenario_num": 25,
          "season": 5,
          "low_level": 7,
          "high_level": 11,
          "title": "Vengeance at Sundered Crag",
          "description": "Two foes of the Pathfinder Society race toward the dwarven Sky Citadel Jormurdun, aiming to snatch away the Pathfinders' prize. The Society dispatches its best agents to intercept the duo. Can the PCs prevent their enemies from ruining the expedition and put an end to the threat posed by these villains?",
          "character_id": 3
        },
        {
          "scenario_num": 1,
          "season": 6,
          "low_level": 1,
          "high_level": 5,
          "title": "Trial by Machine",
          "description": "More than a millennium has passed since the \"machine mage\" Karamoss's failed siege of Absalom, and for years the Pathfinder Society has used upper reaches of his subterranean siege tower as a training ground for initiates. During a routine drill, the once-dormant dungeon springs to life, and it will take all the PCs' resourcefulness and skill to make it out alive.",
          "character_id": 10
        },
        {
          "scenario_num": 2,
          "season": 6,
          "low_level": 3,
          "high_level": 7,
          "title": "The Silver Mount Collection",
          "description": "The esteemed Blakros family—famous for their museum in Absalom—receives a large shipment of artifacts from Numeria but fears that the ever-vigilant Technic League will attack to reclaim its \"stolen\" property. When they request the help of Pathfinders to help guard the collection, the PCs discover that the Technic League is the least of their worries.",
          "character_id": 10
        },
        {
          "scenario_num": 3,
          "season": 6,
          "low_level": 5,
          "high_level": 9,
          "title": "The Technic Siege",
          "description": "When the Pathfinder Society acquires a copy of A Thread of Silver, a written survey of some of Numeria's most closely guarded sites, the Technic League dispatches its own agents to the Pathfinder lodge in Nantambu to recover the text and make an example of those who would investigate Numeria's otherworldly secrets. Can the PCs prevent the League from stealing this valuable tome and destroying the Society's foothold in the Mwangi Expanse?",
          "character_id": 6
        },
        {
          "scenario_num": 4,
          "season": 6,
          "low_level": 7,
          "high_level": 11,
          "title": "The Beacon Below",
          "description": "Thousands of years ago, a defeated order of Osirian sages sought refuge in the perilous Pillars of the Sun in central Osirian. Until recently they were presumed lost, but recent exploration has uncovered the fortress sanctum they left behind. When the PCs delve into one of its sealed halls, they find the sages’ millennia-old projects dormant but not dead.",
          "character_id": 7
        },
        {
          "scenario_num": 5,
          "season": 6,
          "low_level": 1,
          "high_level": 5,
          "title": "Slave Ships of Absalom",
          "description": "The metropolis of Absalom promotes commerce in its many forms, and although slavery is legal, it is increasingly common for citizens to frown on the institution. The practice becomes more questionable when an ally of the Pathfinder Society traces an attempt at supernatural surveillance through a slave. Sent as independent sleuths, the PCs must track down the source of this espionage, which takes them deep into underbelly of one of Absalom’s darkest industries.",
          "character_id": 10
        },
        {
          "scenario_num": 6,
          "season": 6,
          "low_level": 1,
          "high_level": 5,
          "title": "Hall of the Flesh Eaters",
          "description": "Shrouded in thick fog, the shifting Gloomspires north of the Shackles have long frustrated explorers. However, a recent discovery by the Pathfinder Society has revealed a brief opportunity to navigate the columns safely and search for the lost treasure of the legendary pirate Sevenfingers. The only problem is that the Pathfinders are not the only visitors to the Gloomspires.",
          "character_id": 10
        },
        {
          "scenario_num": 7,
          "season": 6,
          "low_level": 5,
          "high_level": 9,
          "title": "Valley of Veiled Flame",
          "description": "For years a Pathfinder team has surveyed Qadira’s Zho Mountains in an attempt to reconcile its twisting valleys with a series of old maps recovered years ago on the Silken Way. When the team disappears soon after reporting a strange illusory effect in a mountain pass, the Society sends the PCs—funded by an unusual benefactor—to uncover whatever is hidden in those peaks and rescue the agents.",
          "character_id": 8
        },
        {
          "scenario_num": 8,
          "season": 6,
          "low_level": 1,
          "high_level": 5,
          "title": "The Segang Expedition",
          "description": "Rumors of a lost shrine in the Segang Jungle draw the Pathfinder Society’s attention, but the prohibitive cost of sending a team into the wilds of Jalmeray threatens to shut down the expedition before it even begins. Fortunately, a wealthy patron has offered to fund the PCs travel expenses in return for their help in his decades-old quest. Can the Pathfinders balance this new obligation with their exploration of the archaeological site?",
          "character_id": 11
        },
        {
          "scenario_num": 9,
          "season": 6,
          "low_level": 3,
          "high_level": 7,
          "title": "By Way of Bloodcove",
          "description": "For centuries the city of Bloodcove has controlled access to the invaluable Vanji River, and for nearly as long, the Aspis Consortium has controlled Bloodcove. If the Pathfinder Society is to move the equipment and personnel it needs into the Mwangi Expanse, it needs a reliable means of smuggling resources through this unforgiving settlement operated by its enemies. It’s up to the PCs to establish a backdoor through Bloodcove—all without being caught by Aspis agents.",
          "character_id": 10
        },
        {
          "scenario_num": 10,
          "season": 6,
          "low_level": 1,
          "high_level": 2,
          "title": "The Wounded Wisp",
          "description": "More than 400 years have transpired since the Pathfinder Society began in a humble tavern that has quietly weathered the centuries without incident. When a routine errand there uncovers a clue left behind by one of the founding Pathfinders, it’s up to the PCs to solve a puzzle whose pieces are scattered across Absalom—and whose prize dates back to the Society’s darkest years.",
          "character_id": 14
        },
        {
          "scenario_num": 11,
          "season": 6,
          "low_level": 3,
          "high_level": 7,
          "title": "The Slave Master's Mirror",
          "description": "An elusive enemy of the Society has launched a campaign of espionage and intrigue from Stonespine Island, the homeport of the infamous Okeno pirates. The Society must sneak a team of agents through one of the largest slave markets on the Inner Sea and track the slippery mastermind to her base if they are to successfully capture the villain, and Venture-Captain Ambrus Valsin has just the team of Pathfinders in mind for the task. Can the PCs defeat this remote slave ring without becoming slaves themselves?",
          "character_id": 10
        },
        {
          "scenario_num": 12,
          "season": 6,
          "low_level": 1,
          "high_level": 5,
          "title": "Scions of the Sky Key Part 1: On Sharrowsmith's Trail",
          "description": "Weeks have passed since Venture-Captain Nieford Sharrowsmith departed for the Bandu Hills, and having not heard from him since but learned of an Aspis Consortium expedition bound for the same destination, the Society and local allies have grown worried for the aging explorer’s safety. As the PCs travel south on Sharrowsmith’s trail, they must track the venture-captain to the ruins he sought while also dealing with the aftermath of his actions.",
          "character_id": 13
        },
        {
          "scenario_num": 13,
          "season": 6,
          "low_level": 7,
          "high_level": 11,
          "title": "Of Kirin and Kraken",
          "description": "When imperial Lung Wa collapsed over a century ago, it shattered not only the political ties that united the successor states but also the philanthropic order known as the Way of the Kirin. Today, despite having allied itself with Venture-Captain Amara Li’s thriving Lantern Lodge and funded the Pathfinder Society’s endeavors in Tian Xia, the Way controls only a handful of its once-extensive web of strongholds. One of its leaders in Kwanlai has decided that it is time for Amara Li to demonstrate her dedication to her allies: by recovering one of the order’s most treasured relics lost in the swamps of Wanshou. It is up to the PCs to brave the realm of a kraken god-king in order to keep the Society’s alliance intact.",
          "character_id": 7
        },
        {
          "scenario_num": 14,
          "season": 6,
          "low_level": 1,
          "high_level": 5,
          "title": "Scions of the Sky Key Part 2: Kaava Quarry",
          "description": "A powerful guardian stands vigil over the ancient ruins where Venture-Captain Nieford Sharrowsmith disappeared recently, yet the beast has a weakness: a prophesied talisman now in the possession of an elusive grippli tribe deep in the Kaava Lands. The PCs must win the reclusive people’s trust and claim the prize—all before the Aspis Consortium does!",
          "character_id": 11
        },
        {
          "scenario_num": 15,
          "season": 6,
          "low_level": 1,
          "high_level": 5,
          "title": "The Overflow Archives",
          "description": "Beneath the Grand Lodge of Absalom lie the vaults, a series of storerooms and libraries that contain much of the Society’s findings from the past centuries. Cataloguing the sundry relics and texts takes time, and finds requiring closer study find their way to an extensive vault called the Overflow Archives. Soon after a pair of initiates sneaks into the archive and steals a few items on a dare, the complex inexplicably springs a leak. It is up to the PCs to investigate this strange phenomenon and put a stop to it before thousands of priceless documents are ruined forever.",
          "character_id": 14
        },
        {
          "scenario_num": 16,
          "season": 6,
          "low_level": 1,
          "high_level": 5,
          "title": "Scions of the Sky Key Part 3: The Golden Guardian",
          "description": "Having bested the Aspis Consortium and recovered a powerful weapon, the PCs return to the Bandu Hills to delve into its ruins, confront the ancient guardian within, and find their missing venture-captain. Even greater secrets lie below, and the Pathfinders soon find that there is more to the so-called Golden Guardian than legends suggest. Are the PCs resourceful enough to survive the mounting danger and find Nieford Sharrowsmith?",
          "character_id": 11
        },
        {
          "scenario_num": 17,
          "season": 6,
          "low_level": 5,
          "high_level": 9,
          "title": "Fires of Karamoss",
          "description": "A Pathfinder expedition has uncovered hitherto unknown levels in the Red Redoubt, a millennium-old siege fortress created by the machine-mage Karamoss. A source of Numerian technology in its own backyard piques the Society’s interest, yet informants in the redoubt speak of an aggressive contingent deep below that aims to reactivate Karamoss’s powerful forges. Can the PCs salvage the fortress’s treasure while also preventing a catastrophe that could crush Absalom?",
          "character_id": 10
        },
        {
          "scenario_num": 18,
          "season": 6,
          "low_level": 1,
          "high_level": 5,
          "title": "From Under Ice",
          "description": "Rumors of an ancient settlement and its priceless treasure locked beneath Irrisen’s perpetual ice have reached the Society’s ears. The Pathfinders set out to the Land of the Linnorm Kings with a precious cargo of trade goods to buy their way into the witch-ruled nation, but even approaching Irrisen is fraught with danger. Can the PCs navigate the frozen wastes and recover the relics within, or will the icy climate claim their lives?",
          "character_id": 13
        },
        {
          "scenario_num": 19,
          "season": 6,
          "low_level": 3,
          "high_level": 7,
          "title": "Test of Tar Kuata",
          "description": "The Iroran monastery of Tar Kuata nestled in Osirion’s Barrier Wall Mountains is famous both for its extensive history and its curious order of dwarven monks known as the Ouat. When the Society uncovers a dusty field report that identifies Tar Kuata as the home of a strange, otherworldly relic, Pathfinders set off to recover it. However the Ouat are strict judges of perfection, and the PCs must prove their worth if they are to win the monks’ trust and treasure.",
          "character_id": 13
        },
        {
          "scenario_num": 20,
          "season": 6,
          "low_level": 7,
          "high_level": 11,
          "title": "Returned to the Sky",
          "description": "Part of a Numerian relic once thought scattered to the winds has found its way back to the savage land of super-science, and the Pathfinder Society must track down the component if they are to unlock the device’s secrets. Clues point to the economic hub Chesed, where only the descendants of a shattered clan can share where their revered ancestor buried the strange artifact. Can the PCs brave the troubled city, evade the vigilant agents of the Technic League, and survive a trip into the Numerian wastes?",
          "character_id": 7
        },
        {
          "scenario_num": 21,
          "season": 6,
          "low_level": 5,
          "high_level": 9,
          "title": "Tapestry's Toil",
          "description": "A simple retrieval mission takes an unexpected turn when the Pathfinder Society learns a valuable treasure was under its nose—within the curious demiplane connected to the Hao Jin Tapestry. The descendants of the original owners have changed in the centuries since their sequestration, though, and initial attempts to parley have ended in failure. Can the PCs discover what became of this lost people and secure the relic they guard?",
          "character_id": 11
        },
        {
          "scenario_num": 22,
          "season": 6,
          "low_level": 1,
          "high_level": 5,
          "title": "Out of Anarchy",
          "description": "Several years ago, rebellion in the seaside town of Pezzack resulted in a Chelish blockade to slowly starve the rioters into submission. Since then few have entered or left, trapping the increasingly desperate citizens with little with which to repair their broken homes and eke out a living. When the Society learns that an important informant still lives in the ruined town, the PCs must smuggle themselves into Pezzack, navigate the devastated urban landscape, and extract their contact—all without igniting a new rebellion and inviting Cheliax’s unfettered wrath.",
          "character_id": 0
        },
        {
          "scenario_num": 23,
          "season": 6,
          "low_level": 7,
          "high_level": 11,
          "title": "The Darkest Abduction",
          "description": "The occasional unexplained disappearance is common enough in Ustalav, yet a rash of unexplained abductions has led to fearful speculation on the verge of panic in the streets. Hoping to improve the Pathfinder Society’s reputation in Ustalav, Venture-Captain Basia Kalistoff has offered her lodge’s services in putting an end to this crime wave. But in a city where countless terrors haunt its underworld and institutions, can the PCs unveil the true culprit without unleashing an even darker fate on Karcau?",
          "character_id": 9
        },
        {
          "scenario_num": 1,
          "season": 7,
          "low_level": 1,
          "high_level": 5,
          "title": "Between the Lines",
          "description": "Rival explorers have beaten the Pathfinders to a valuable site in Katapesh, but fortunately most of the riches—including the obscure text the Society sought in the first place—have ended up in the capitol’s extensive bazaars. What is at first a routine shopping trip spirals out of control as the PCs uncovers the writing’s secret past—and secret messages.",
          "character_id": 12
        },
        {
          "scenario_num": 2,
          "season": 7,
          "low_level": 3,
          "high_level": 7,
          "title": "Six Seconds to Midnight",
          "description": "A strange confluence of circumstances leaves the researchers of Uringen understaffed and in need of able-bodied assistants. Conveniently, recent Pathfinder Society experiments call for a rare reagent found only in that area, and the two organizations have negotiated a mutually beneficial deal. Can the PCs reach the secluded settlement in time to witness this extraordinary event—and handle the phenomenon’s aftermath?",
          "character_id": 0
        },
        {
          "scenario_num": 3,
          "season": 7,
          "low_level": 5,
          "high_level": 9,
          "title": "The Bronze House Reprisal",
          "description": "A recent assault on the Pathfinder Society has renewed hostilities with the Aspis Consortium, and clues left behind point to one of its masterminds: the gold agent Maiveer Sloan. By infiltrating one of the Consortium’s artifact-smuggling operations, the PCs can sabotage their rivals’ criminal operations and send a clear message: No attack will go unanswered.",
          "character_id": 10
        },
        {
          "scenario_num": 4,
          "season": 7,
          "low_level": 7,
          "high_level": 11,
          "title": "The Ironbound Schism",
          "description": "The cataclysmic Earthfall shattered the ancient Thassilonian civilization, and like its slumbering runelords who fled the destruction, many ruins lie hidden. The Ironbound Archipelago was once part of Edasseril, kingdom of envy, and word has reached the Pathfinder Society that an ancient ruin has emerged on the isle of Flintyreach. Can the PCs gain the local half-orcs’ trust and brave the resident giants’ wrath to secure this archaeological treasure?",
          "character_id": 0
        },
        {
          "scenario_num": 5,
          "season": 7,
          "low_level": 1,
          "high_level": 5,
          "title": "School of Spirits",
          "description": "Seven years ago, Pathfinders entered Absalom’s shattered Precipice Quarter in pursuit of a ruby ring but also rescued a strange survivor. She has since grown to adulthood and exhibited a rebellious spirit connected to the ruined school where the Pathfinders found her. The woman’s family has contacted the Society, hoping that its agents can escort her back to the haunted site and unravel the Drownyard’s relentless mysteries.",
          "character_id": 13
        },
        {
          "scenario_num": 6,
          "season": 7,
          "low_level": 3,
          "high_level": 7,
          "title": "To Judge a Sould Part 1: The Lost Legacy",
          "description": "When a samsaran dies, he is reborn again with few memories of his past lives. The cycle continues until he has earned a righteous place in the afterlife. After years of service and lifetimes of accomplishment, Venture-Captain Bakten nears the end of his noble existence and has begun investigating his past lives as a means of understanding Tian Xia's rich history. However, he cannot complete his research alone, and only with the PCs' assistance can they decipher the region's past.",
          "character_id": 0
        },
        {
          "scenario_num": 7,
          "season": 7,
          "low_level": 1,
          "high_level": 5,
          "title": "Trouble in Tamran",
          "description": "Less than a decade ago, the Pathfinder Society established a lodge in Nirmathas, an act that infuriated the nation's expansionist rival Molthune. The latter outlawed the Society soon after, and ever since Pathfinders have relied on smugglers like the Varisian entrepreneur Guaril Karela to slip supplies past the Molthuni blockade for both the lodge and the Society's war-torn neighbors. Something has intercepted those shipments. Can the PCs uncover the culprit and save the Society's reputation in Nirmathas?",
          "character_id": 0
        },
        {
          "scenario_num": 8,
          "season": 7,
          "low_level": 3,
          "high_level": 7,
          "title": "To Judge a Sould Part 2:",
          "description": "Venture-Captain Bakten's past lives and the history of northern Tian Xia are interwoven, and with the PCs' assistance he has uncovered a troubling legacy secreted within the mountains of Zi Ha. It is up to the Pathfinders to ascend into the ice-capped mountains to unveil the crimes of past generations and save one of the region's greatest heroes.",
          "character_id": 0
        },
        {
          "scenario_num": 9,
          "season": 7,
          "low_level": 5,
          "high_level": 9,
          "title": "The Blakros Connection",
          "description": "A recent attack on the Grand Lodge became all the more heinous when one of the invading agents employed an eldritch relic to abduct a high-ranking Pathfinder. In order to release the captive, the Society must understand the relic and track down the fleeing operative—a mission that leads the PCs into Absalom's most prestigious archives to uncover a dark secret.",
          "character_id": 0
        },
        {
          "scenario_num": 10,
          "season": 7,
          "low_level": 1,
          "high_level": 2,
          "title": "The Consortium Compact",
          "description": "The Aspis Consortium pays well, but few can stand its underhanded tactics for long. One operative fed up with the Consortium's practices has contacted the Pathfinder Society with a tempting offer: assist her in leaving the organization, and she will supply the Society with years of insider intelligence about their longstanding rival. It's up to the PCs to navigate Diobel—a proud town run by cutthroat smugglers—earn the defector's trust, and deal a telling blow to their Aspis foes.",
          "character_id": 0
        },
        {
          "scenario_num": 11,
          "season": 7,
          "low_level": 7,
          "high_level": 11,
          "title": "Ancient's Anguish",
          "description": "When the Jeweled Sages, an ancient order of Osirian scholars, fled Qadiran invaders millennia ago, some perished, and others disappeared deep into territories once held by the pharaohs of old. With the help of the Jeweled Sages' long-abandoned tools, the eminent Tahonikepsu has discovered one of the sages' last known whereabouts in the wilds of Nex. What secrets lie within these inhospitable ruins that date back to the Age of Darkness, and what fate did the so-called Amethyst Sage meet within?",
          "character_id": 7
        },
        {
          "scenario_num": 12,
          "season": 7,
          "low_level": 1,
          "high_level": 5,
          "title": "The Twisted Circle",
          "description": "A magical war between the archmages Geb and Nex left the landscape between their nations scarred and wracked by magical anomalies—a barren stretch known as the Mana Wastes. During the conflict, their generals also created countless weapons and defenses that pushed the limits of magic, yet most of these were destroyed in battle or lost forever. Recent investigations suggest that some of this ancient power is at play in an insular town outside Alkenstar, but there the trail runs cold. Can the PCs uncover the truth while braving the residents' eccentricities?",
          "character_id": 0
        },
        {
          "scenario_num": 13,
          "season": 7,
          "low_level": 5,
          "high_level": 9,
          "title": "Captive in Crystal",
          "description": "Recent events have left the Master of Spells Aram Zey unable to fulfill his duties, and without his expertise, the Pathfinder Society struggles to resolve pressing arcane matters. The Decemvirate has reopened the decade-old case of the most qualified replacement: Aram Zey's predecessor and former Master of Spells Sorrina Westyr, who disappeared while handling a powerful wayfinder that the Society has since kept closely guarded. It is up to the PCs to track down Sorrina Westyr—and bring back whatever remains.",
          "character_id": 0
        },
        {
          "scenario_num": 14,
          "season": 7,
          "low_level": 1,
          "high_level": 5,
          "title": "Faithless and Forgotten Part 1: Let Bygones Be",
          "description": "Ever since the tragedy at Delvehaven decades ago, the infernal empire Cheliax has rarely allowed Pathfinders to explore its many ruins and archaeological treasures—even then only after its recently disenfranchised liaison Zarta Dralneen fought for that privilege. Cheliax has once again extended its hand to the Society, inviting its agents to investigate an abandoned keep that dates back to the Chelish civil war. It's up to the PCs to navigate the Corentyn's streets and politics as they uncover the buried past and lay the foundation for a new partnership with a one-time foe.",
          "character_id": 12
        },
        {
          "scenario_num": 15,
          "season": 7,
          "low_level": 3,
          "high_level": 7,
          "title": "The Deepmarket Deception",
          "description": "When the Pathfinder Society claimed the Hao Jin Tapestry in Tian Xia, it seemed as though the Aspis Consortium's influence there had ended. An anonymous informant recently identified an Aspis resurgence in Goka's Deepmarket, and Venture-Captain Amara Li hopes that a small, well-trained team can ferret out the villains and prevent any greater atrocities. Can the PCs traverse the Deepmarket's treacherous politics and tunnels and neutralize the Consortium's local ringleader?",
          "character_id": 0
        },
        {
          "scenario_num": 16,
          "season": 7,
          "low_level": 1,
          "high_level": 5,
          "title": "Faithless and Forgotten Part 2: Lost Colony of Taldor",
          "description": "The Society’s excavations continue, now taking the PCs to the long-contested territory of Kharijite—Cheliax’s southernmost territory, where the great Arch of Aroden bridges the Hespereth Strait and establishes an Avistani foothold in Rahadoum’s backyard. There, an ancient Taldan ruin suggests that empire’s great Armies of Exploration traveled even farther than believed possible. Can the PCs uncover the site’s secrets—and in doing so reshape the Inner Sea region’s history?",
          "character_id": 0
        },
        {
          "scenario_num": 17,
          "season": 7,
          "low_level": 5,
          "high_level": 9,
          "title": "Thralls of the Shattered God",
          "description": "After two years of blood and bravery, the Fifth Mendevian Crusade has struck a terrible blow to the Worldwound’s demons and reclaimed lost territory. The Pathfinder Society, as one of the crusade’s partners in this endeavor, has earned the right to explore and salvage what it can of the lost Sarkorian sites under Mendev’s control, and it has identified one ruin as a priority. In fact, the site seems to actively call to one agent in particular, a scarred survivor of abyssal experiments. Venture-Captain Jorsal of Lauterbury has asked the PCs to accompany this agent into the wasteland, where perhaps she might learn how to control her demonic half—or purge it completely.",
          "character_id": 0
        },
        {
          "scenario_num": 18,
          "season": 7,
          "low_level": 1,
          "high_level": 5,
          "title": "Faithless and Forgotten Part 3: The Infernal Inheritance",
          "description": "Tragedy has struck, and the Society’s attention must turn from academics to action as they infiltrate a seemingly impenetrable facility in the heart of Ostenso, one of Cheliax’s greatest ports. They must act quickly, for only the distraction of a national holiday can provide the PCs the cover they need to get in, get the job done, and get out without drawing the attention of an entire city’s guards.",
          "character_id": 0
        },
        {
          "scenario_num": 19,
          "season": 7,
          "low_level": 3,
          "high_level": 7,
          "title": "Labyrinth of Hungry Ghosts",
          "description": "Following a successful mission into the mist-shrouded and shifting Gloomspires, the Pathfinder Society sent another team to explore the tomb of the legendary pirate Sevenfingers. Unfortunately, this team never returned. The spires have momentarily halted, allowing a new team to brave the tomb’s many dangers, hopefully rescuing their allies in the process.",
          "character_id": 11
        },
        {
          "scenario_num": 20,
          "season": 7,
          "low_level": 12,
          "high_level": 15,
          "title": "All for Immortality Part 1: First Taste of Eternity",
          "description": "Every year, one of Thuvia’s five city-states receives a mere six vials of the famous sun orchid elixir—a potent and extravagantly expensive tonic able to reverse the effects of aging. After both of his last two shipments disappeared without a trace, the ruler of Pashow has retained the services of the Pathfinder Society to ensure that this year the elixir arrives unharmed and restores prosperity to his realm. However, what begins as an unusual security assignment quickly spirals into a revelatory unveiling of Pashow’s treacherous underbelly.",
          "character_id": 1
        },
        {
          "scenario_num": 21,
          "season": 7,
          "low_level": 1,
          "high_level": 5,
          "title": "The Sun Orchid Scheme",
          "description": "With the power to vastly extend life, the sun orchid elixir is one of the most prized items in the Inner Sea—and as a result one of the most dangerous to transport. After his shipments of sun orchid elixir vanished without a trace two years in a row, the ruler of Pashow is desperate to ensure that his next delivery goes off without a hitch. In order to test its security, Pashow has hired a team of Pathfinders to execute their finest heist and test the convoy’s defenses. Are the PCs up to the challenge?",
          "character_id": 0
        },
        {
          "scenario_num": 22,
          "season": 7,
          "low_level": 1,
          "high_level": 5,
          "title": "Bid for Alabastrine",
          "description": "Decades ago, the merchant nation of Druma anticipated a wave of migrants and built the city Alabastrine to accommodate them. The mass migration never happened. Always seeking a return on investment, Druma recently began auctioning off control of the city to the highest bidders and wealthiest entrepreneurs for five years at a time. The next auction begins soon, and the powerful Aspis Consortium gold agent Myrosype—an enemy of the Society responsible for countless Pathfinders’ deaths—is poised to take control of the whole city for her own nefarious ends. The Society has secured a few invitations for the PCs to attend the auction. Can they disrupt the event’s delicate politics in order to stop their rival, or will the Aspis Consortium gain an unassailable stronghold?",
          "character_id": 0
        },
        {
          "scenario_num": 23,
          "season": 7,
          "low_level": 7,
          "high_level": 11,
          "title": "Abducted in Aether",
          "description": "Among the greatest crimes committed during an attack on the Grand Lodge was the abduction of a high-ranking member of the Pathfinder Society. The Society has tracked the kidnapped to another plane of existence, where his captor is preparing to sell her prize to a host of otherworldly bidders. Can the PCs intervene and mount a rescue before the esteemed captive disappears forever?",
          "character_id": 0
        },
        {
          "scenario_num": 24,
          "season": 7,
          "low_level": 1,
          "high_level": 5,
          "title": "Dead Man's Debt",
          "description": "Every Pathfinder’s adventures come to an end eventually. When the Society an esteemed venture-captain laid to rest, it was unaware of his outstanding debt to the Ekujae elves of the Mwangi Expanse. The elves have not forgotten, and they expect the Society to make good on the late venture-captain’s promises. Its up to the PCs to brave the Mwangi jungle and the dangers within to salvage the Society’s reputation in the region.",
          "character_id": 0
        },
        {
          "scenario_num": 25,
          "season": 7,
          "low_level": 5,
          "high_level": 9,
          "title": "Orders from the Gate",
          "description": "Ongoing unrest in Cheliax has strained the nation’s military resources, so when the Order of the Gate sensed an imminent disaster brewing in the Menador Mountains, it had to seek outside assistance. The Pathfinder Society has answered the call. After all, the same site the Hellknights identified is one of the ancient ruins the Society has long wanted to study. Can the PCs salvage the site’s historic wonders while also honoring their commitment to the Order of the Gate?",
          "character_id": 0
        },
        {
          "scenario_num": 26,
          "season": 7,
          "low_level": 12,
          "high_level": 15,
          "title": "All for Immortality Part 2: All the Gods Beyond",
          "description": "Recent revelations suggest the Thuvian crisis is part of a more devious scheme—one that extends far beyond the sun orchid trade. On the trail of the villainous mastermind at the heart of it all, the PCs set out for shadow-cursed Nidal to infiltrate a clandestine facility established to study the utterly otherworldly.",
          "character_id": 1
        },
        {
          "scenario_num": 27,
          "season": 7,
          "low_level": 3,
          "high_level": 7,
          "title": "Beyond Azlant Ridge",
          "description": "Six years ago, the Pathfinder Society narrowly avoided disaster at an archaeological excavation in the Terwa Uplands. The expedition recovered and resumed its work, and at long last they have learned what the ancient culture had hoped to guard. That’s when all correspondence ended. Fearing the excavation may be besieged once more, the Society has sent the PCs to save who they can, salvage what they must, and uncover a secret that has laid buried outside Bloodcove for millennia.",
          "character_id": 0
        },
        {
          "scenario_num": 28,
          "season": 7,
          "low_level": 7,
          "high_level": 11,
          "title": "Ageless Ambitions",
          "description": "The time has come to strike down the vile Korholm Agenda, the faction of the Aspis Consortium that launched a staggering attack against the Pathfinder Society a year ago. The Agenda’s leader has allied himself with one of the most powerful men in Thuvia, and together they are on the cusp of pitching the entire region into a brutal war of conquest and greed. The Pathfinder Society has placed its trust in the PCs to stop this internecine conflict. To do so, they must confront the Korholm Agenda’s leader in his own domain.",
          "character_id": 0
        },
        {
          "scenario_num": 29,
          "season": 7,
          "low_level": 12,
          "high_level": 15,
          "title": "All for Immortality Part 3: Serpents Fall",
          "description": "The elite Pathfinders have unraveled secrets within secrets, all of which point to a mastermind poised to strike from the Chelish military port of Ostenso. Sending agents so deep into enemy territory risks brutal reprisal, yet it cannot compare to the evils that will arise if the Society does not intervene. There is no recourse but to strike at the very heart of the Aspis Consortium itself, and the PCs shall wield the blade!",
          "character_id": 0
        },
        {
          "scenario_num": 1,
          "season": 8,
          "low_level": 1,
          "high_level": 5,
          "title": "Portent's Peril",
          "description": "Even in an age where prophecy rarely comes true, many in Varisia hold the mysterious Harrow cards and their predictions in high esteem. The Pathfinder Society’s ally Zeeva Foxglove recently received a Harrow reading as repayment for her generosity, but a rare card appeared and portended imminent doom. Now that these terrible predictions are coming true, Zeeva realizes she cannot weather this storm alone. It’s up to the PCs to save this friend and philanthropist—perhaps by changing fate entirely.",
          "character_id": 0
        },
        {
          "scenario_num": 2,
          "season": 8,
          "low_level": 3,
          "high_level": 7,
          "title": "Ward Asunder",
          "description": "The legendary sorceress Hao Jin transferred many abandoned historical sites to her museum demiplane, though even her magic had limits, forcing her to transport only part of an architectural treasure. The half of a temple she left behind in the jungles of Dtang Ma has developed a haunted reputation in the centuries since. Now an unlikely ally has approached the Society with tales of unspoiled historical secrets and hidden treasure left within the shattered sanctuary of Yamatsumi, the mountain god.",
          "character_id": 0
        },
        {
          "scenario_num": 3,
          "season": 8,
          "low_level": 5,
          "high_level": 9,
          "title": "Captives of Toil",
          "description": "Two years ago, the Pathfinder Society concluded its extended campaign to find, reclaim, and explore the lost sky citadel Jormurdun. After ousting the vile demons and duergar within, the Society turned over control to their dwarven allies, who have defended the ancient fortress ever since. A recent raid by duergar slavers has captured some of Jormurdun’s dwarves, who have disappeared into the Darklands and bound for the cruel capitol of Hagegraf. Only the Pathfinder Society is equipped and able to launch a daring rescue into the lightless depths, intercept the slaver convoy, and save these dwarves from a grisly fate.",
          "character_id": 0
        },
        {
          "scenario_num": 4,
          "season": 8,
          "low_level": 7,
          "high_level": 11,
          "title": "Wardens of Sulfur Gulch",
          "description": "Among the earliest Pathfinders was the Gojan the Sharp, famed for his studies of the technology-strewn wasteland of Numeria before he disappeared forever into the infamous Silver Mount. The Pathfinder Society has uncovered a forgotten cache of Gojan’s Numerian journals identifying sites unknown even to the local barbarian chieftains. The time is right to unearth a pristine piece of alien technology! However, Pathfinders should remember that for every untouched marvel that remains, an unblinking sentry may lie in wait.",
          "character_id": 0
        },
        {
          "scenario_num": 5,
          "season": 8,
          "low_level": 1,
          "high_level": 5,
          "title": "Ungrounded but not Unbroken",
          "description": "The Peerless Empire of shaitan genies has warred with their fiery counterparts for centuries, and thinly stretched resources leave the shaitans in need of additional aid. They have founded a new state-sanctioned mercenary company known as the Ungrounded, which draws upon free agents from across the multiverse. One of the Society’s few friends on the Plane of Earth has recommended at least a handful of Pathfinders join the Ungrounded, knowing that even a few months’ service could dramatically enhance the Society’s reputation (and fill those agents’ pockets) in this distant realm. The PCs travel to the magnificent Opaline Vault as the Society’s first envoys, but in doing so they must survive the otherworldly threats that lurk in both this strange environment and within their own ranks.",
          "character_id": 0
        },
        {
          "scenario_num": 6,
          "season": 8,
          "low_level": 1,
          "high_level": 5,
          "title": "Reaping What We Sow",
          "description": "When the flames of revolution swept through Galt, the Society lost much of what it held there: dozens of agents, several lodges, and the fellowship of countless contacts who foreswore the Society rather than become targets themselves. Although Venture-Captain Eliza Petulengro has reestablished a foothold in the country, she needs to rebuild her network of allies. One of the most important figures resides in Rosehaven, a small village due to celebrate its yearly festival of light and forgiveness. Petulengro hopes that an entourage of Pathfinders might participate in the festivities and endear itself to the Society’s former friend. Past evils have other plans, however, and unless the PCs can keep their wits about them, they might not just lose sight of the mission; they might lose their lives.",
          "character_id": 0
        },
        {
          "scenario_num": 7,
          "season": 8,
          "low_level": 3,
          "high_level": 7,
          "title": "From the Tome of Righteous Repose",
          "description": "When the necromancer-king Tar-Baphon rose as a lich and threatened to conquer all of Avistan, Taldor rallied its neighbors and led the Shining Crusade, a glorious campaign that defeated the Whispering Tyrant’s armies and sealed him away. For the better part of a millennium, Lastwall has guarded Tar-Baphon’s prison and fended off the orc tribes to the north, rarely sparing a second thought to the rich archaeological secrets that lie just below the soil. A local venture-captain has found a lost chapter to the Tome of Righteous Repose, which chronicles the demise of countless heroes of the Shining Crusade. At long last, this has earned the Society Lastwall’s blessing to uncover these lost sites, lay to rest the fallen crusaders, and repatriate the family heirlooms they carried to battle.",
          "character_id": 0
        },
        {
          "scenario_num": 8,
          "season": 8,
          "low_level": 1,
          "high_level": 5,
          "title": "Tyranny of Winds, Part 1: The Sandstorm Prophecy",
          "description": "As a repurposed prison, the Sandswept Hall Pathfinder lodge in Sothis is an imposing target for thieves, yet an enemy operative recently broken in, stole valuable property, and escaped into the sun-scorched deserts of eastern Osirion. The PCs are the best disposed to follow the culprit's trail. Be warned, though, for the Scorpion Coast is the battleground of powerful elemental tribes that have assailed Osirion's frontier with cruel sandstorms and deadly force for millennia.",
          "character_id": 0
        },
        {
          "scenario_num": 9,
          "season": 8,
          "low_level": 5,
          "high_level": 9,
          "title": "Forged in Flame, Part 1: The Cindersworn Pact",
          "description": "When an impossibly vile fiend proves too powerful to destroy, the forces of good often resort to banishing or sealing the villain away to be remembered only in fearsome legends. Less common are the instances in which wrongdoers bound benevolent titans and demigods, yet Society agents recently uncovered just such a prison. Few know how to unlock such a jail, much less locate the key. The Society has identified just such a sage: a disgraced efreeti who has sworn to share her priceless knowledge in exchange for the PCs' assistance. The Pathfinders travel to the cosmopolitan melting pot of Zjarra on the Plane of Fire, where they must fulfill the cruel genie's schemes—or find some other way to fulfill the deal.",
          "character_id": 0
        },
        {
          "scenario_num": 10,
          "season": 8,
          "low_level": 1,
          "high_level": 5,
          "title": "Tyranny of Winds, Part 2: Secrets of the Endless Sky",
          "description": "Recent discoveries suggest what was a simple theft is part of a grander plot that directs the PCs to floating metropolis of Armun Kelisk, capitol of the djinni empire. As the Pathfinders pursue the culprit and uncover the past that has brought them in conflict, they may find they have more in common than they had expected—including a shared enemy.",
          "character_id": 0
        },
        {
          "scenario_num": 11,
          "season": 8,
          "low_level": 5,
          "high_level": 9,
          "title": "Forged in Flame, Part 2: Cleansed with Fire",
          "description": "Few places on the Plane of Fire are as rich in folklore, opportunities, and material wealth as the City of Brass, and it is there that the disgraced efreeti Qalkami aims to reestablish her credentials with the Society's help. Only by teaming up with this genie—at least in name, if not in spirit or practice—can the PCs both secure the secrets she owes the Society and help topple a major fixture of the City of Brass. None are better equipped than Pathfinders to infiltrate forbidden districts, crush an evil operation, and make the most of the chaos that ensues, but in a metropolis built largely of superheated metal, can the PCs take the heat?",
          "character_id": 0
        },
        {
          "scenario_num": 12,
          "season": 8,
          "low_level": 3,
          "high_level": 7,
          "title": "Tyranny of Winds, Part 3: Caught in the Eclipse",
          "description": "The Society's investigations have borne fruit, but they've also awakened a terrible foe. To avert disaster, the PCs embark for the lawless frontier harbor of Port Eclipse, where one of the Society's allies disappeared while seeking a powerful weapon. In this shadowy urban landscape, it's up to the PCs to find the lost operative, track down this relic, and bring it to bear against the ancient evil that now threatens them all.",
          "character_id": 0
        },
        {
          "scenario_num": 13,
          "season": 8,
          "low_level": 7,
          "high_level": 11,
          "title": "What Sleeps in Stone",
          "description": "The snowcapped summits and volcanic peaks of the Kullan Dei range cuts across Tian Xia, yet there is more to these mountains than ice and wind; the Pathfinder Society has learned of a priceless artifact hidden within a dormant volcano long ago. As the PCs retrace the path of an ancient hero, will they conquer the mountains or perish as have so many who came before?",
          "character_id": 0
        },
        {
          "scenario_num": 14,
          "season": 8,
          "low_level": 1,
          "high_level": 5,
          "title": "To Seal the Shadow",
          "description": "To most, Mount Shibotai's devastating eruption was a footnote in Tian history. To the shadow-bound wayangs who settled the jagged crater in Minata, the volcano was the reason they inhabited Golarion at all. In their de facto capitol Inahiyi, the wayangs host an annual festival to commemorate the catastrophe that brought them into this world and forced them to ally with their neighbors against a common threat. On especially auspicious anniversaries, the wayangs invite foreigners to contribute to the ceremony, and the Pathfinder Society has negotiated the privilege of having its agents observe the sacred ceremonies as these outside participants. This is no mere anthropological opportunity, though, and the PCs may be all that stands between their world and an unspeakable evil.",
          "character_id": 0
        },
        {
          "scenario_num": 15,
          "season": 8,
          "low_level": 5,
          "high_level": 9,
          "title": "Hrethnar's Throne",
          "description": "The mist-shrouded Gloomspires have defied local seafarers and treasure hunters for centuries, but Venture-Captain Calisro Benarry has nearly unlocked the secrets of the spire where the dread pirate Sevenfingers hid his treasure. Great prizes beget jealous rivals, though, and the PCs must be prepared to fend off all others who desire Sevenfingers's riches—rivals both past and present.",
          "character_id": 0
        },
        {
          "scenario_num": 16,
          "season": 8,
          "low_level": 1,
          "high_level": 5,
          "title": "House of Harmonious Wisdom",
          "description": "Mighty Lung Wa once controlled much of Tian Xia, but the empire crumbled a century ago. Three Successor States have squabbled for dominance ever since, each insisting that it alone is the rightful inheritor of Lung Wa's glory. In the shadow of these mighty nations, the humble land of Shokuro has sought the means to discourage its neighbors' territorial ambitions and earn their respect. When a retired hero learns of a lost, legendary palace that might protect relics of the old empire, she calls on the Pathfinder Society for assistance finding the fabled site. The PCs must travel to each of the Successor States in search of clues to uncover the palace and the treasures within.",
          "character_id": 0
        },
        {
          "scenario_num": 17,
          "season": 8,
          "low_level": 7,
          "high_level": 11,
          "title": "Refugees of the Weary Sky",
          "description": "As the Jistka Imperium decayed from within, its artificers and elementalists struggled to repel invaders from Osirion to the east. To channel their elemental power, the spellcasters constructed the mighty Citadel of the Weary Sky, but so much energy attracted a mighty fiend that crushed the tower. The Pathfinder Society knows that many of the mages escaped, but only recently and with the help of a new ally did it learn where they fled. Now the PCs set off for a forgotten Jistkan sanctuary where otherworldly forces now reign.",
          "character_id": 0
        },
        {
          "scenario_num": 18,
          "season": 8,
          "low_level": 1,
          "high_level": 5,
          "title": "Champion's Chalice, Part 1: Blazing Dangerous Trails",
          "description": "Every year, the Sargavan government hosts the Sargava Chalice, a contest of speed and survival that draws eager competitors from far and wide, each hoping to win fame, fortune, and glory. This year, Pathfinder Society has taken a special interest in the competition, sponsoring a team of agents to compete to with the trophy. Can PCs overcome their competition and the dangers of the Sargavan wilderness to emerge victorious?",
          "character_id": 0
        },
        {
          "scenario_num": 19,
          "season": 8,
          "low_level": 3,
          "high_level": 7,
          "title": "Treacherous Waves",
          "description": "The Society believes that a powerful relic lies in the depths of the Plane of Water, yet the most recent expedition to retrieve it failed for mysteriously tragic reasons. It's up to the PCs to travel to the aquatic metropolis of Vialesk to investigate that ill-fated mission and overcome the forces determined to keep the truth from coming to light.",
          "character_id": 0
        },
        {
          "scenario_num": 20,
          "season": 8,
          "low_level": 7,
          "high_level": 11,
          "title": "Torrent's Last Will",
          "description": "On the Plane of Water, familiar sights grow on impossible scales, from monumental swaths of kelp to utterly titanic sea creatures. The Society has traced a powerful relic to a tremendous shell adrift within a miles-wide swarm of giant jellyfish, and with the help of new allies, the PCs might recover it. They had best beware, though, for the Plane of Water is home to sahuagin and worse that are not eager to welcome intruders.",
          "character_id": 0
        },
        {
          "scenario_num": 21,
          "season": 8,
          "low_level": 1,
          "high_level": 5,
          "title": "Champion's Chalice, Part 2: Agents of the Eye",
          "description": "Ages before the rise of modern civilization, the cyclops empire of Ghol-Gan ruled what is now the Mwangi Expanse. The Society sends the PCs deep into the untamed Kaava lands to explore a cyclops ruin, where with a new tool in hand, the Pathfinders might uncover its forgotten and dark history. Can the PCs prevent the ruin's past from becoming Sargava's future?",
          "character_id": 0
        },
        {
          "scenario_num": 22,
          "season": 8,
          "low_level": 1,
          "high_level": 5,
          "title": "Wrath of the Fleshwarped Queen",
          "description": "When members of the Shoanti Axe Clan saw fire shooting up into the sky over Varisia's Caliphak Mountains, they rushed to investigate. They found a pair of doors inscribed with runes from ancient Thassilon, along with clear signs that the doors had recently been opened. In recognition of the Axe Clan's expanding alliances, the Shoanti offered both the Society and a priest of Soralyon from Riddleport the opportunity to explore the ruin and neutralize its dangers. Now that the priest has vanished within the complex, the PCs must uncover the ruin's history before the Shoanti lose faith in them and take matters into their own hands.",
          "character_id": 0
        },
        {
          "scenario_num": 23,
          "season": 8,
          "low_level": 3,
          "high_level": 7,
          "title": "Graves of Crystalmaw Pass",
          "description": "One of Master of Spells Sorrina Westyr's former adventuring companions vanished to the Plane of Earth and was presumed dead. She has recently resurfaced along an old road between the Plane of Earth and the Plane of Fire—one that even the warring forces of the planes' greatest cities had abandoned—and has shown little interest in discussing her circumstances with the Pathfinder Society. Can the PCs uncover why she disappeared and enlist her help in reaching a site on the war-torn and volcanic borderlands?",
          "character_id": 0
        },
        {
          "scenario_num": 24,
          "season": 8,
          "low_level": 5,
          "high_level": 9,
          "title": "Raid on the Cloudborne Keep",
          "description": "Followers of the evil elemental lord of air Hshurha have learned of the Pathfinder Society's plans to break open the Untouchable Opal and release Hshurha's ancient rival. One of Hshurha's lieutenants is gathering forces to deal a decisive blow to the Society and its new allies in the Concordance of Elements. If the PCs act quickly, they can make a daring strike, commandeering an airship on the Plane of Air and overtaking their enemy's fortress before it has the chance to rally its army.",
          "character_id": 0
        },
        {
          "scenario_num": 25,
          "season": 8,
          "low_level": 12,
          "high_level": 15,
          "title": "Unleashing the Untouchable",
          "description": "The Pathfinder Society has secured the tools and uncovered the secret to shattering the Untouchable Opal and liberating the demigod within. All the Pathfinders lack is an impossibly hot flame—one that can match the searing hatred of Ymeri herself. The Society's best bet is Kandirion's Pyre, a supernatural forge situated where the elemental planes of earth and fire relentlessly batter each other. Freeing a demigod could send ripples through the multiverse and attract the attention of powerful creatures. Only the greatest agents stand a chance of breaking the Opal and surviving.",
          "character_id": 0
        },
        {
          "scenario_num": 1,
          "season": 9,
          "low_level": 1,
          "high_level": 5,
          "title": "The Cost of Enlightenment",
          "description": "The Qadiran city of Qaharid is famous for its turquoise mines and fine pottery, yet it is also the center of worship for the monks of the White Feather. Most recently, the cult of Roidira has identified Qaharid as a pilgrimage city, and the once innocuous cultists have begun exhibiting truly strange behaviors. Society contacts recognize these actions as a sign that the Roidirans have uncovered some extraordinary secret in the wilderness nearby, and it fall to the PCs to speak with witnesses and track down the cult's discovery.",
          "character_id": 0
        },
        {
          "scenario_num": 2,
          "season": 9,
          "low_level": 3,
          "high_level": 7,
          "title": "A Case of Missing Persons",
          "description": "When several Andoren officials vanished, the Pathfinders of the Almas lodge were quick to lend their aid in investigating the disappearances. It's since become apparent that the officials didn't leave; they were abducted, and the captors' trail leads into revolution-torn Galt. The trail grew cold in Woodsedge, where Venture-Captain Eliza Petulengro has gathered a team of agents to renew the investigation. The PCs must rediscover the trail, and in the process they'll uncover a secret that has long plagued the town.",
          "character_id": 0
        },
        {
          "scenario_num": 3,
          "season": 9,
          "low_level": 5,
          "high_level": 9,
          "title": "On the Border of War",
          "description": "Brevoy may seem a united country, but its noble houses are ever on the brink of warfare while King Noleski Surtova struggles to keep the peace and prove his legitimacy. A neutral township's baron has died, and the loyalists of several houses have rekindled old rivalries while maneuvering for their respective lords to control the region. As the noble houses maneuver armies nearby in the name of \"peacekeeping,\" the teeters on the precipice of war. Hostilities could spell the end of a famous ruin that the Society is yet to document, and Pathfinders must travel into the powder keg region to delay hostilities long enough to salvage and study the site. For the truly ambitious, it may be possible to avert the war altogether, but canny nobles as likely to see the PCs as pawns as mediators.",
          "character_id": 0
        }
      ]);
    });
};
