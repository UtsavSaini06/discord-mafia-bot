import Discord from 'discord.js';
const { StringSelectMenuBuilder, StringSelectMenuOptionBuilder } = Discord;

export const roles = [
    {
        "name": "Pi",
        "id": "pi",
        "description": "As a freelance investigator, the PI works alone. With only a camera and incredible stealth, the PI can gather information faster than the local law.",
        "whatToDo": [
            "Choose two players each night and check if they are on the same side."
        ],
        "visitType": "Active",
        "side": [
            "Village"
        ],
        "goal": "Help village win",
        "instructions": [
            "If you investigate two neutrals, it will show that they are on the same side."
        ],
        "data": {
            "action": {
                "embedTitle": "Which two people do you want to investigate tonight?",
                "getTargets": async (party, user) => {
                    let targetUsers = party.filter(x => !x.dead && x.userId !== user.userId)
                    const targetSelect = new StringSelectMenuBuilder()
                        .setCustomId('mafia_action_select_target')
                        .setPlaceholder('Choose your target')
                        .setMinValues(2)
                        .setMaxValues(2)
                        .addOptions(
                            targetUsers.map(x => new StringSelectMenuOptionBuilder()
                                .setLabel(x.displayName)
                                .setValue(x.userId)
                                .setDescription(x.username)
                            )
                        )
                    return targetSelect
                }
            }
        }
    },
    {
        "name": "Hoarder",
        "id": "hoarder",
        "description": "A madman driven by panic and fear, the Hoarder will stop at nothing to make sure they have enough toilet paper, even if it means raiding other people's homes and stealing their toilet paper. The Hoarder is also banned from Walmart.",
        "whatToDo": [
            "Visit a person each night to duel them for their toilet paper. If you win, you gain one stack of toilet paper and your target dies."
        ],
        "visitType": "Active",
        "side": [
            "Neutral"
        ],
        "goal": "Aquire at least 3 stacks of toilet paper",
        "instructions": [
            "If you're killed by the mafia, you won't execute your actions.",
            "Your win condition does not affect the whole game. If you win the game will still go on.",
            "You must live until the end of the game in order to win."
        ],
        "data": {
            "action": {
                "embedTitle": "Who would you like to invite to duel tonight?",
                "getTargets": async (party, user) => {
                    let targetUsers = party.filter(x => !x.dead && x.userId !== user.userId)
                    const targetSelect = new StringSelectMenuBuilder()
                        .setCustomId('mafia_action_select_target')
                        .setPlaceholder('Choose your target')
                        .addOptions(
                            targetUsers.map(x => new StringSelectMenuOptionBuilder()
                                .setLabel(x.displayName)
                                .setValue(x.userId)
                                .setDescription(x.username)
                            )
                        )
                    return targetSelect
                }
            }
        }
    },
    {
        "name": "Plague doctor",
        "id": "plague",
        "description": "The town seems to have lost its usual liveliness. The streets are empty, the shops are closed, and a fog covers the entire village. Not a single soul dares to step out into the night. Out of the fog steps out a black, hooded figure with a bird mask. It's time...",
        "whatToDo": [
            "Visit a player each night to infect them with the plague."
        ],
        "visitType": "Passive",
        "side": [
            "Neutral"
        ],
        "goal": "Infect everyone in the town",
        "instructions": [
            "If an infected visits or is visited by someone, there is a chance to spread the plague to that other person.",
            "Once you infect everyone, the town will be alerted of the plague and have one day to vote you out.",
            "If u lynch your last uninfected before the town is alerted, you win"
        ],
        "data": {
            "action": {
                "embedTitle": "Whom do you want to infect tonight?",
                "getTargets": async (party, user) => {
                    let targetUsers = party.filter(x => !x.dead && x.userId !== user.userId)
                    const targetSelect = new StringSelectMenuBuilder()
                        .setCustomId('mafia_action_select_target')
                        .setPlaceholder('Choose your target')
                        .addOptions(
                            targetUsers.map(x => new StringSelectMenuOptionBuilder()
                                .setLabel(x.displayName)
                                .setValue(x.userId)
                                .setDescription(x.username)
                            )
                        )
                    return targetSelect
                }
            }

        }
    },
    {
        "name": "Bomber",
        "id": "bomber",
        "description": "The Bomber loves big booms. Bomber worked at a mine before, but those explosions got old quick. Bomber missed the excitement, the rush! That's why the Bomber came to this town, look for more things to go big boom...",
        "whatToDo": [
            "Plant a bomb on a target",
            "Detonate all your planted bombs"
        ],
        "visitType": "Active",
        "side": [
            "Neutral"
        ],
        "goal": "Kill EVERYONE.",
        "instructions": [
            "Once you face death, you will randomly blow up one of your bombs",
            "Your win condition affects the game. It's either you win or the other sides win."
        ],
        "data": {
            "action": {
                "embedTitle": "Where would you like to plant a bomb tonight?",
                "getTargets": async (party, user) => {
                    let targetUsers = party.filter(x => !x.dead && x.userId !== user.userId)
                    const targetSelect = new StringSelectMenuBuilder()
                        .setCustomId('mafia_action_select_target')
                        .setPlaceholder('Choose your target')
                        .addOptions(new StringSelectMenuOptionBuilder()
                            .setLabel('Detonate all your planter bombs')
                            .setValue('detonate')
                        )
                    targetSelect.addOptions(
                        targetUsers.map(x => new StringSelectMenuOptionBuilder()
                            .setLabel(x.displayName)
                            .setValue(x.userId)
                            .setDescription(x.username)
                        )
                    )
                    return targetSelect
                }
            }

        }
    },
    {
        "name": "Baiter",
        "id": "baiter",
        "description": "The Baiter is a serial killer, but very a lazy one. Instead of hunting for prey, Baiter prefer to stay at home and kill whoever shows up.",
        "whatToDo": [
            "Sit at home and kills whoever actively visits you."
        ],
        "visitType": "None",
        "side": [
            "Neutral"
        ],
        "goal": "Gain at least 3 kills and survive when the game ends.",
        "instructions": [
            "You cannot kill those whose visit type is passive",
            "Your win condition does not affect the game. You can win alongside villagers or mafias."
        ],
        "data": {
            "action": {
                "noAction": true
            }
        }
    },
    {
        "name": "Executioner",
        "id": "executioner",
        "description": "A being of unknown intentions, the Executioner harbors unforgivable hatred towards a specific villager. Did the villager insult him? Stole something? Took the last curly fry? Who knows. All the executioner wants to see is the demise of this villager..",
        "whatToDo": [
            "None"
        ],
        "visitType": "None",
        "side": [
            "Neutral"
        ],
        "goal": "Deceive the village into lynching your target. Target will be DM to you at the start of the game.",
        "instructions": [
            "If your target dies, you will turn into the Jester.",
            "Your target cannot be neutral, mayor or mafia.",
            "Your win condition impacts the rest of the game. If you win the game ends."
        ],
        "data": {
            "action": {
                "noAction": true
            }
        }
    },
    {
        "name": "Mimic",
        "id": "mimic",
        "description": "Thirsty for blood, the Mimic hunts every night for prey to consume. As the Mimic drains the blood of the victims, Mimic's silhouette slowly morphes into their victim's shape...",
        "whatToDo": [
            "Visit a player to drain their blood.\n:white_small_square:If you succeed, you will assume the identity of your target, tricking investigative roles."
        ],
        "visitType": "Active",
        "side": [
            "Mafia"
        ],
        "goal": "Help mafias win",
        "instructions": [
            "You  have a 50% chance of distracting your victim if you successfully drain your target."
        ],
        "data": {
            "action": {
                "embedTitle": "Who would you like to mimic tonight?",
                "getTargets": async (party, user) => {
                    let targetUsers = party.filter(x => !x.dead && (x.role === 'alchemist' || x.side !== 'Mafia') && x.userId !== user.userId)
                    const targetSelect = new StringSelectMenuBuilder()
                        .setCustomId('mafia_action_select_target')
                        .setPlaceholder('Choose your target')
                        .addOptions(
                            targetUsers.map(x => new StringSelectMenuOptionBuilder()
                                .setLabel(x.displayName)
                                .setValue(x.userId)
                                .setDescription(x.username)
                            )
                        )
                    return targetSelect
                }
            }

        }
    },
    {
        "name": "Goose",
        "id": "goose",
        "description": "Goose is the embodiment of chaos. The Goose's sole purpose in life is to torture the living. There are no emotions in the Goose, only the desire to Goose.",
        "whatToDo": [
            "Visit a player and randomly switch their targets."
        ],
        "visitType": "Active",
        "side": [
            "Mafia"
        ],
        "goal": "Help mafias win",
        "instructions": [
            "You cannot Goose someone if your target did not visit anyone.",
            "You cannot Goose Gambler.",
            "If the Godfather dies, you can become the next Godfather."
        ],
        "data": {
            "action": {
                "embedTitle": "Who would you like to goose tonight?",
                "getTargets": async (party, user) => {
                    let targetUsers = party.filter(x => !x.dead && (x.role === 'alchemist' || x.side !== 'Mafia') && x.userId !== user.userId)
                    const targetSelect = new StringSelectMenuBuilder()
                        .setCustomId('mafia_action_select_target')
                        .setPlaceholder('Choose your target')
                        .addOptions(
                            targetUsers.map(x => new StringSelectMenuOptionBuilder()
                                .setLabel(x.displayName)
                                .setValue(x.userId)
                                .setDescription(x.username)
                            )
                        )
                    return targetSelect
                }
            }
        }
    },
    {
        "name": "Framer",
        "id": "framer",
        "description": "A master of deception and cunning, the Framer knows every trick to deceive the town's investigative force. Planting fake evidence and alibis are what makes the Framer feared in the investigative world.",
        "whatToDo": [
            "Visit a player and frame them to look like a mafia to other investigative roles."
        ],
        "visitType": "Active",
        "side": [
            "Mafia"
        ],
        "goal": "Help mafias win.",
        "instructions": [
            "If the Godfather dies, you will turn into the Godfather.",
            "You can affect the Link."
        ],
        "data": {
            "action": {
                "embedTitle": "Who would you like to frame tonight?",
                "getTargets": async (party, user) => {
                    let targetUsers = party.filter(x => !x.dead && (x.role === 'alchemist' || x.side !== 'Mafia') && x.userId !== user.userId)
                    const targetSelect = new StringSelectMenuBuilder()
                        .setCustomId('mafia_action_select_target')
                        .setPlaceholder('Choose your target')
                        .addOptions(
                            targetUsers.map(x => new StringSelectMenuOptionBuilder()
                                .setLabel(x.displayName)
                                .setValue(x.userId)
                                .setDescription(x.username)
                            )
                        )
                    return targetSelect
                }
            }
        }
    },
    {
        "name": "Mafia",
        "id": "mafia",
        "description": "The Godfather's right hand. The mafia lives to serve the Godfather, doing the biddings the Godfather commands. That is always how it is... for now...",
        "whatToDo": [
            "Kill the target the Godfather chooses."
        ],
        "visitType": "Active",
        "side": [
            "Mafia"
        ],
        "goal": "Help mafias win",
        "instructions": [
            "If the Godfather dies, you may become the next Godfather."
        ],
        "data": {
            "action": {
                "noAction": true
            }
        }
    },
    {
        "name": "Alchemist",
        "id": "alchemist",
        "description": "With a mastery in the art of potion brewing, the Alchemist utilizes their knowledge to help their side win through deception, control, and death. However, their allegiances waiver each game...",
        "whatToDo": [
            "Craft a random potion and choose a target to use it on.\nType /potions to view all possible potions."
        ],
        "visitType": "Active",
        "side": [
            "Village",
            "Mafia"
        ],
        "goal": "Help your side win.",
        "instructions": [
            "Your side will be random each game (Village or Mafia)",
            "If your side is mafia, you will not know who your fellow mafias are",
            "Your targets will know what potion is used on them"
        ],
        "data": {
            "action": {
                "embedTitle": "Where do you want to use your ${potion} potion?",
                "getTargets": async (party, user, guild) => {
                    let targetUsers = party.filter(x => !x.dead && x.userId !== user.userId)
                    const targetSelect = new StringSelectMenuBuilder()
                        .setCustomId('mafia_action_select_target')
                        .setPlaceholder('Choose your target')
                        .addOptions(
                            targetUsers.map(x => new StringSelectMenuOptionBuilder()
                                .setLabel(x.displayName)
                                .setValue(x.userId)
                                .setDescription(x.username)
                            )
                        )
                    return targetSelect
                }
            }
        }
    },
    {
        "name": "Link",
        "id": "link",
        "description": "Possessing one of the rarest talents in the world, the Link serves as the medium between two minds. Years of training allows the Link to dig into the hidden minds of others and expose all secrets.",
        "whatToDo": [
            "Select TWO players to link them together. Linked players will see each other's sides, but you cannot see them."
        ],
        "visitType": "Passive",
        "side": [
            "Village"
        ],
        "goal": "Help village win",
        "instructions": [
            "Your results be affected by Framer"
        ],
        "data": {
            "action": {
                "embedTitle": "Which two people do you want to link tonight?",
                "getTargets": async (party, user) => {
                    let targetUsers = party.filter(x => !x.dead && x.userId !== user.userId)
                    const targetSelect = new StringSelectMenuBuilder()
                        .setCustomId('mafia_action_select_target')
                        .setPlaceholder('Choose your target')
                        .setMaxValues(2)
                        .setMinValues(2)
                        .addOptions(
                            targetUsers.map(x => new StringSelectMenuOptionBuilder()
                                .setLabel(x.displayName)
                                .setValue(x.userId)
                                .setDescription(x.username)
                            )
                        )
                    return targetSelect
                }
            }
        }
    },
    {
        "name": "Watcher",
        "id": "watcher",
        "description": "A protective guardian, the Watcher has eyes of a hawk. Unlike the Vigilante, the Watcher does not believe in violence. Justice should be handled the right way.",
        "whatToDo": [
            "Visit a player each night to see who visits your target."
        ],
        "visitType": "Active",
        "side": [
            "Village"
        ],
        "goal": "Help village win",
        "instructions": [
            "If doctor saves themselves, you will see that your target visited themselves."
        ],
        "data": {
            "action": {
                "embedTitle": "Who would you like to watch tonight?",
                "getTargets": async (party, user) => {
                    let targetUsers = party.filter(x => !x.dead && x.userId !== user.userId)
                    const targetSelect = new StringSelectMenuBuilder()
                        .setCustomId('mafia_action_select_target')
                        .setPlaceholder('Choose your target')
                        .addOptions(
                            targetUsers.map(x => new StringSelectMenuOptionBuilder()
                                .setLabel(x.displayName)
                                .setValue(x.userId)
                                .setDescription(x.username)
                            )
                        )
                    return targetSelect
                }
            }
        }
    },
    {
        "name": "Distractor",
        "id": "distractor",
        "description": "A master of distractions, the Distractor can divert the attention of people however they please. With only a fear of poultry, the Distractor are a fearsome foe to the mafia.",
        "whatToDo": [
            "Visit a player to stop them from performing any actions."
        ],
        "visitType": "Active",
        "side": [
            "Village"
        ],
        "goal": "Help villagers win",
        "instructions": [
            "After distracting, you will need to rest for one night before distracting again.",
            "You cannot distract the Goose."
        ],
        "data": {
            "action": {
                "embedTitle": "Who would you like to distract tonight?",
                "getTargets": async (party, user) => {
                    let targetUsers = party.filter(x => !x.dead && x.userId !== user.userId)
                    const targetSelect = new StringSelectMenuBuilder()
                        .setCustomId('mafia_action_select_target')
                        .setPlaceholder('Choose your target')
                        .addOptions(
                            targetUsers.map(x => new StringSelectMenuOptionBuilder()
                                .setLabel(x.displayName)
                                .setValue(x.userId)
                                .setDescription(x.username)
                            )
                        )
                    return targetSelect
                }
            }
        }
    },
    {
        "name": "Spy",
        "id": "spy",
        "description": "Highly trained in espionage, the Spy sneaks around the town to track down mafia activities. However, the Spy stays a safe distance from his targets, knowing he is no match for them yet...",
        "whatToDo": [
            "Visit a player and learns who they visited that night"
        ],
        "visitType": "Active",
        "side": [
            "Village"
        ],
        "goal": "Help village win",
        "instructions": [
            "Cannot spy on PI.",
            "If your target visits no one, you won't get any results."
        ],
        "data": {
            "action": {
                "embedTitle": "Who would you like to spy tonight?",
                "getTargets": async (party, user) => {
                    let targetUsers = party.filter(x => !x.dead && x.userId !== user.userId)
                    const targetSelect = new StringSelectMenuBuilder()
                        .setCustomId('mafia_action_select_target')
                        .setPlaceholder('Choose your target')
                        .addOptions(
                            targetUsers.map(x => new StringSelectMenuOptionBuilder()
                                .setLabel(x.displayName)
                                .setValue(x.userId)
                                .setDescription(x.username)
                            )
                        )
                    return targetSelect
                }
            }
        }
    },
    {
        "name": "Mayor",
        "id": "mayor",
        "description": "The head of the town, Mayor is the one villagers trust the most. However, it also puts a target on the Mayor's back...",
        "whatToDo": [
            "Choose to whether reveal your role to everyone in the morning. If you do you gain 2 votes in voting rounds for the rest of the game."
        ],
        "visitType": "None",
        "side": [
            "Village"
        ],
        "goal": "Help village win",
        "instructions": [
            "None"
        ],
        "data": {
            "action": {
                "embedTitle": "Hey mayor, would you like to reveal yourself the next morning to gain two votes?",
                "embedDescription": "Choose yes/no",
                "getTargets": async (party, user, guild) => {
                    user.revealed = true
                    guild.markModified('party')
                    await guild.save()
                    const targetSelect = new StringSelectMenuBuilder()
                        .setCustomId('mafia_action_select_target')
                        .setPlaceholder('Choose')
                        .addOptions(
                            [new StringSelectMenuOptionBuilder()
                                .setLabel('Yes')
                                .setValue('yes')
                                .setEmoji('✅'),
                            new StringSelectMenuOptionBuilder()
                                .setLabel('No')
                                .setValue('no')
                                .setEmoji('❌'),
                            ]
                        )
                    return targetSelect
                }
            }
        }
    },
    {
        "name": "Vigilante",
        "id": "vigilante",
        "description": "Filled with a sense of justice, the Vigilante watches over the town with the eyes of a hawk. Actually, not really lol the Vigilante might need glasses...",
        "whatToDo": [
            "Visit a player each night and kill them. If you want."
        ],
        "visitType": "Active",
        "side": [
            "Village"
        ],
        "goal": "Help village win",
        "instructions": [
            "If you shoot a villager, you will commit suicide.",
            "You can kill mafias and neutrals.",
            "Shooting N1 is NOT a good idea."
        ],
        "data": {
            "action": {
                "embedTitle": "Who would you like to shoot tonight?",
                "getTargets": async (party, user) => {
                    let targetUsers = party.filter(x => !x.dead && x.userId !== user.userId)
                    const targetSelect = new StringSelectMenuBuilder()
                        .setCustomId('mafia_action_select_target')
                        .setPlaceholder('Choose your target')
                        .addOptions(
                            targetUsers.map(x => new StringSelectMenuOptionBuilder()
                                .setLabel(x.displayName)
                                .setValue(x.userId)
                                .setDescription(x.username)
                            )
                        )
                    return targetSelect
                }
            }
        }
    },
    {
        "name": "Jester",
        "id": "jester",
        "description": "The Jester sits in the corner of the room, waiting in anticipation. The rioters are shouting outside, waiting to lynch the Jester. Does the Jester fear death? No. Death fears the Jester...",
        "whatToDo": [
            "None"
        ],
        "visitType": "None",
        "side": [
            "Neutral"
        ],
        "goal": "Convince the town to lynch you",
        "instructions": [
            "Your win condition affects the rest of the game. If you win, the game ends."
        ],
        "data": {
            "action": {
                "noAction": true
            }
        }
    },
    {
        "name": "Hacker",
        "id": "hacker",
        "description": "The Hacker is a deity in the cyber world. They can find anything about their target in a snap of a finger by tracing their internet histories, banking statements, and social medias. Nothing is safe from the Hacker if it's online.",
        "whatToDo": [
            "Visit a player to see a list of roles the target could be."
        ],
        "visitType": "Passive",
        "side": [
            "Mafia"
        ],
        "goal": "Help mafias win",
        "instructions": [
            "If the Godfather dies, you may become the new Godfather."
        ],
        "data": {
            "action": {
                "embedTitle": "Who would you like to visit tonight?",
                "getTargets": async (party, user) => {
                    let targetUsers = party.filter(x => !x.dead && (x.role === 'alchemist' || x.side !== 'Mafia') && x.userId !== user.userId)
                    const targetSelect = new StringSelectMenuBuilder()
                        .setCustomId('mafia_action_select_target')
                        .setPlaceholder('Choose your target')
                        .addOptions(
                            targetUsers.map(x => new StringSelectMenuOptionBuilder()
                                .setLabel(x.displayName)
                                .setValue(x.userId)
                                .setDescription(x.username)
                            )
                        )
                    return targetSelect
                }
            }
        }
    },
    {
        "name": "Detective",
        "id": "detective",
        "description": "It is late at night. Another case was reported. It's time to start cracking the case and expose the mafias in this town...",
        "whatToDo": [
            "Visit a player and learn if they belong to the mafia"
        ],
        "visitType": "Active",
        "side": [
            "Village"
        ],
        "goal": "Help villagers win",
        "instructions": [
            "If your target is framed by the framer, you will receive information that your target is mafia."
        ],
        "data": {
            "action": {
                "embedTitle": "Who do you suspect?",
                "getTargets": async (party, user) => {
                    let targetUsers = party.filter(x => !x.dead && x.userId !== user.userId)
                    const targetSelect = new StringSelectMenuBuilder()
                        .setCustomId('mafia_action_select_target')
                        .setPlaceholder('Choose your target')
                        .addOptions(
                            targetUsers.map(x => new StringSelectMenuOptionBuilder()
                                .setLabel(x.displayName)
                                .setValue(x.userId)
                                .setDescription(x.username)
                            )
                        )
                    return targetSelect
                }
            }
        }
    },
    {
        "name": "Doctor",
        "id": "doctor",
        "description": "As the village's only medical professional, the Doctor have all the knowledge in saving mafia victims. However, the online degree does not cover non-mafia victims.",
        "whatToDo": [
            "Visit a player and save them from the mafia."
        ],
        "visitType": "Active",
        "side": [
            "Village"
        ],
        "goal": "Help villagers win",
        "instructions": [
            "You can only save targets from mafia attacks.",
            "You cannot save the same person two nights in a row."
        ],
        "data": {
            "action": {
                "embedTitle": "Who would you like to save tonight?",
                "getTargets": async (party, user, guild) => {
                    let targetUsers = party.filter(x => !x.dead && x.userId !== user.lastTarget)
                    const targetSelect = new StringSelectMenuBuilder()
                        .setCustomId('mafia_action_select_target')
                        .setPlaceholder('Choose your target')
                        .addOptions(
                            targetUsers.map(x => new StringSelectMenuOptionBuilder()
                                .setLabel(x.displayName)
                                .setValue(x.userId)
                                .setDescription(x.username)
                            )
                        )
                    return targetSelect
                }
            }

        }
    },
    {
        "name": "God Father",
        "id": "godfather",
        "description": "Godfather is the big bad boss of the town. Every mafia is under his thumb, ready to execute the Godfather's will.",
        "whatToDo": [
            "If a mafia is alive, order the mafia to kill a target of your choosing. If no mafias are alive, you kill the target yourself."
        ],
        "visitType": "Active",
        "side": [
            "Mafia"
        ],
        "goal": "Help Mafias win",
        "instructions": [
            "If you die, one of your mafias alive will become the new Godfather.",
            "If you order a mafia to kill, you will not visit anyone."
        ],
        "data": {
            "action": {
                "embedTitle": "Who would you like to kill tonight?",
                "getTargets": async (party, user) => {
                    let targetUsers = party.filter(x => !x.dead && (x.role === 'alchemist' || x.side !== 'Mafia') && x.userId !== user.userId)
                    const targetSelect = new StringSelectMenuBuilder()
                        .setCustomId('mafia_action_select_target')
                        .setPlaceholder('Choose your target')
                        .addOptions(
                            targetUsers.map(x => new StringSelectMenuOptionBuilder()
                                .setLabel(x.displayName)
                                .setValue(x.userId)
                                .setDescription(x.username)
                            )
                        )
                    return targetSelect
                }
            }

        }

    }
]

export const gameModes = [
    {
        name: 'Crimson',
        id: 'crimson',
        minPlayer: 5,
        choiceOptions: [
            {
                numberOfPlayers: 5,
                guaranteed: { roles: ['godfather', 'detective', 'doctor'] },
                random: [
                    { players: 1, roles: ['executioner'], maybe: true },
                    { players: 'remaining', roles: ['vigilante', 'mayor', 'spy', 'pi', 'distractor', 'watcher', 'link', 'alchemist'] }
                ]
            },
            {
                numberOfPlayers: 8,
                guaranteed: { roles: ['godfather', 'detective', 'doctor'] },
                random: [
                    { players: 1, roles: ['mafia','framer', 'hacker', 'goose', 'mimic'] },
                    { players: 1, roles: ['executioner','baiter', 'bomber', 'plague', 'hoarder'], maybe: true },
                    { players: 'remaining', roles: ['vigilante', 'mayor', 'spy', 'pi', 'distractor', 'watcher', 'link', 'alchemist'] }
                ]
            },
            {
                numberOfPlayers: 11,
                guaranteed: { roles: ['godfather', 'detective', 'doctor'] },
                random: [
                    { players: 1, roles: ['mafia', 'framer', 'hacker', 'goose', 'mimic'] },
                    { players: 1, roles: ['mafia', 'framer', 'hacker', 'goose', 'mimic'], maybe: true },
                    { players: 1, roles: ['executioner', 'baiter', 'bomber', 'plague', 'hoarder'] },
                    { players: 'remaining', roles: ['vigilante', 'mayor', 'spy', 'pi', 'distractor', 'watcher', 'link', 'alchemist'] }
                ]
            },
            {
                numberOfPlayers: 12,
                guaranteed: { roles: ['godfather', 'detective', 'doctor'] },
                random: [
                    { players: 2, roles: ['mafia', 'framer', 'hacker', 'goose', 'mimic'] },
                    { players: 2, roles: ['executioner', 'baiter', 'bomber', 'plague', 'hoarder'] },
                    { players: 'remaining', roles: ['vigilante', 'mayor', 'spy', 'pi', 'distractor', 'watcher', 'link', 'alchemist'] }
                ]
            },
            {
                numberOfPlayers: 14,
                guaranteed: { roles: ['godfather', 'detective', 'doctor'] },
                random: [
                    { players: 2, roles: ['mafia', 'framer', 'hacker', 'goose', 'mimic'] },
                    { players: 1, roles: ['mafia', 'framer', 'hacker', 'goose', 'mimic'], maybe: true },
                    { players: 2, roles: ['executioner', 'baiter', 'bomber', 'plague', 'hoarder'] },
                    { players: 1, roles: ['executioner','baiter', 'bomber', 'plague', 'hoarder'], maybe: true },
                    { players: 'remaining', roles: ['vigilante', 'mayor', 'spy', 'pi', 'distractor', 'watcher', 'link', 'alchemist'] }
                ]
            },
            {
                numberOfPlayers: 16,
                guaranteed: { roles: ['godfather', 'detective', 'doctor'] },
                random: [
                    { players: 3, roles: ['mafia', 'framer', 'hacker', 'goose', 'mimic'] },
                    { players: 3, roles: ['executioner', 'baiter', 'bomber', 'plague', 'hoarder'] },
                    { players: 'remaining', roles: ['vigilante', 'mayor', 'spy', 'pi', 'distractor', 'watcher', 'link', 'alchemist'] }
                ]
            },
            {
                numberOfPlayers: 17,
                guaranteed: { roles: ['godfather', 'detective', 'doctor', 'vigilante', 'mayor', 'spy', 'pi', 'distractor', 'watcher', 'link', 'alchemist'] },
                random: [
                    { players:3, roles: ['mafia', 'framer', 'hacker', 'goose', 'mimic'] },
                    { players: 3, roles: ['executioner', 'baiter', 'bomber', 'plague', 'hoarder'] },
                ]
            },
            {
                numberOfPlayers: 18,
                guaranteed: { roles: ['godfather', 'detective', 'doctor', 'vigilante', 'mayor', 'spy', 'pi', 'distractor', 'watcher', 'link', 'alchemist', 'bomber'] },
                random: [
                    { players:3, roles: ['mafia', 'framer', 'hacker', 'goose', 'mimic'] },
                    { players: 3, roles: ['executioner', 'baiter', 'plague', 'hoarder'] },
                ]
            },
            {
                numberOfPlayers: 19,
                guaranteed: { roles: ['godfather', 'detective', 'doctor', 'vigilante', 'mayor', 'spy', 'pi', 'distractor', 'watcher', 'link', 'alchemist'] },
                random: [
                    { players: 4, roles: ['mafia', 'framer', 'hacker', 'goose', 'mimic'] },
                    { players: 4, roles: ['executioner', 'baiter', 'bomber', 'plague', 'hoarder'] },
                ]
            },
            {
                numberOfPlayers: 20,
                guaranteed: { roles: ['godfather', 'detective', 'doctor', 'vigilante', 'mayor', 'spy', 'pi', 'distractor', 'watcher', 'link', 'alchemist', 'bomber'] },
                random: [
                    { players: 4, roles: ['mafia', 'framer', 'hacker', 'goose', 'mimic'] },
                    { players: 4, roles: ['executioner', 'baiter', 'plague', 'hoarder'] },

                ]
            },
            {
                numberOfPlayers: 21,
                guaranteed: { roles: ['godfather', 'detective', 'doctor', 'vigilante', 'mayor', 'spy', 'pi', 'distractor', 'watcher', 'link', 'alchemist', 'bomber', 'mafia', 'framer', 'hacker', 'goose', 'mimic', 'executioner', 'baiter', 'plague', 'hoarder'] },
            }
        ],
        roles: [
            {
                roleId: 'godfather',
                maxNumberOfPlayers: 1,
            },
            {
                roleId: 'detective',
                maxNumberOfPlayers: 1,
            },
            {
                roleId: 'doctor',
                maxNumberOfPlayers: 1,
            },
            {
                roleId: 'vigilante',
                maxNumberOfPlayers: 1,
            },
            {
                roleId: 'mayor',
                maxNumberOfPlayers: 1,
            },
            {
                roleId: 'spy',
                maxNumberOfPlayers: 1,
            },
            {
                roleId: 'pi',
                maxNumberOfPlayers: 1,
            },
            {
                roleId: 'distractor',
                maxNumberOfPlayers: 1,
            },
            {
                roleId: 'watcher',
                maxNumberOfPlayers: 1,
            },
            {
                roleId: 'link',
                maxNumberOfPlayers: 1,
            },
            {
                roleId: 'alchemist',
                maxNumberOfPlayers: 1,
            },
            {
                roleId: 'mafia',
                guaranteed: false,
            },
            {
                roleId: 'framer',
                guaranteed: false,
            },
            {
                roleId: 'hacker',
                guaranteed: false,
            },
            {
                roleId: 'goose',
                guaranteed: false,
            },
            {
                roleId: 'mimic',
                guaranteed: false,
            },
            {
                roleId: 'executioner',
                guaranteed: false,
            },
            {
                roleId: 'baiter',
                guaranteed: false,
            },
            {
                roleId: 'bomber',
                guaranteed: false,
            },
            {
                roleId: 'plague',
                guaranteed: false,
            },
            {
                roleId: 'hoarder',
                guaranteed: false,
            },
            {
                roleId: 'jester',
                guaranteed: false,
            }
        ],
        data: {
        }
    }
]

export const alchemistPotions = [
    {
        name: 'Lethal Potion',
        id: 'lethal',
        description: 'Kills a person',
        info: 'Kills the player. That\'s it. Pretty simple.\nOh ya if you\'re on the mafia\'s side you can still kill the mafias so be careful with that thing.'
    },
    {
        name: 'Invisibility Potion',
        id: 'invisibility',
        description: 'Makes your target invisible and unvisitable from others.',
        info: 'Makes your target invisible and unvisitable from others.'
    },
    {
        name: 'Truth Potion',
        id: 'truth',
        description: 'Force a player to reveal their side to you.',
        info: 'Force a player to reveal their side to you.'
    },
    {
        name: 'Mundane Potion',
        id: 'mundane',
        description: 'It does nothing. Except it tastes a little bitter.',
        info: 'It does nothing. Except it tastes a little bitter.'
    }
]

export const rolesOrder = [
    'baiter',
    'goose',
    'distractor',
    'mimic',
    'spy',
    'plague',
    'bomber',
    'alchemist',
    'godfather',
    'mafia',
    'hoarder',
    'doctor',
    'framer',
    'link',
    'detective',
    'pi',
    'vigilante',
    'hacker',
    'watcher',
    'executioner',
    'jester',
    'plague'
];


export const mafiaMessages = [
    "{username} was convinced they could defy gravity by flapping their arms like wings. The mafia decided to put their theory to the test. {username}'s life came crashing down as they plummeted to the ground.",
    "Rumors were spreading that {username} had discovered the secret to teleportation. The mafia saw this as a threat and took matters into their own hands. {username} vanished without a trace, leaving behind only confusion and unanswered questions.",
    "{username} had been bragging about their unbeatable ninja skills. The mafia saw it as a challenge and decided to eliminate this self-proclaimed ninja. {username}'s life ended silently, with no trace of the skilled warrior they claimed to be.",
    "{username} thought they could outsmart the mafia by hiding in plain sight. Little did they know, the mafia had their eyes on {username} the whole time. Their life was snuffed out in an instant.",
    "Word got out that {username} had discovered the secret location of the mafia's hideout. The mafia couldn't let such information leak, so they took swift action, silencing {username} forever.",
    "The mafia caught wind of {username}'s ability to read minds. Worried about their own secrets being exposed, they silenced {username} permanently, leaving no trace of their psychic talents.",
    "Rumors were circulating that {username} had a secret stash of diamonds. The mafia saw an opportunity and decided to claim those riches for themselves, leaving {username} lifeless and empty-handed.",
    "{username} had been taunting the mafia, claiming they were untouchable. The mafia took it as a personal challenge and proved {username} wrong, ending their life and silencing their arrogance.",
    "The mafia couldn't tolerate {username}'s incessant singing. They decided to put an end to the off-key melodies by eliminating {username} once and for all.",
    "Word got out that {username} was planning to expose the identities of the mafia members. The mafia swiftly took action, ensuring {username}'s silence forever.",
    "{username} stumbled upon a mysterious briefcase containing evidence against the mafia. Realizing the danger they posed, the mafia took {username} out, ensuring their secrets remained hidden.",
    "Rumors were spreading that {username} possessed the power of invincibility. The mafia decided to test this theory and put an end to {username}'s supposed immortality.",
    "{username} had been boasting about their superior hacking skills. The mafia saw them as a threat to their digital operations and decided to permanently disconnect {username}.",
    "The mafia discovered that {username} had been gathering evidence against them. In an effort to protect their criminal empire, they silenced {username} and destroyed all traces of the evidence.",
    "{username} claimed to have the ability to see through people's lies. The mafia couldn't take the risk of being exposed, so they silenced {username} and ensured their secrets remained hidden.",
    "Word got out that {username} had the power to control minds. Fearing the loss of their autonomy, the mafia made sure {username}'s mind control came to a permanent end.",
    "The mafia intercepted a message indicating that {username} was onto their plans. They quickly eliminated {username}, leaving no room for interference.",
    "Rumors were circulating that {username} possessed a rare artifact with the power to expose the mafia. The mafia wasn't going to let that happen, so they put an end to {username} and secured the artifact.",
    "{username} had been spreading rumors about the mafia's secret operations. The mafia couldn't risk their reputation being tarnished, so they silenced {username} permanently.",
    "The mafia discovered that {username} had been secretly communicating with law enforcement. They swiftly took action, eliminating {username} and cutting off any ties to the authorities."
]
