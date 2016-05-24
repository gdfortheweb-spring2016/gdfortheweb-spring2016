var city = window.location.hash;

	/* find corresponding sentences */

var SentencesSplit = city.split(",");

var cityname = SentencesSplit[1] + SentencesSplit[4] + SentencesSplit[7] + SentencesSplit[10] + SentencesSplit[13];

var text = [];
/* Chapter 1 */
	/* City 1: Diomira */
text[0] = "Leaving there and proceeding for three days toward the east, you reach City #" + cityname + ", a city with sixty silver domes, bronze statues of all the gods, streets paved with lead, a crystal theater, a golden cock that crows each morning on a tower.";
text[1] = "All these beauties will already be familiar to the visitor, who has seen them also in other cities.";
text[2] = "But the special quality of this city for the man who arrives there on a September evening, when the days are growing shorter and the multicolored lamps are lighted all at once at the doors of the food stalls and from a terrace a woman’s voice cries ooh!, is that he feels envy toward those who now believe they have once before lived an evening identical to this and who think they were happy, that time.";
	/* City 2: Isidora */
text[3] = "When a man rides a long time through wild regions he feels the desire for a city.";
text[4] = "Finally he comes to Isidora, a city where the buildings have spiral staircases encrusted with spiral seashells, where perfect telescopes and violins are made, where the foreigner hesitating between two women always encounters a third, where cockfights degenerate into bloody brawls among the bettors.";
text[5] = "He was thinking of all these things when he desired a city.";
text[6] = "City #" + cityname + ", therefore, is the city of his dreams: with one difference.";
text[7] = "The dreamed-of city contained him as a young man; he arrives at Isidora in his old age.";
text[8] = "In the square there is the wall where the old men sit and watch the young go by; he is seated in a row with them.";
text[9] = "Desires are already memories.";
	/* City 3: Dorothea */
text[10] = "There are two ways of describing City #" + cityname + ": you can say that four aluminum towers rise from its walls flanking seven gates with spring operated drawbridges that span the moat whose water feeds four green canals which cross the city, dividing it into nine quarters, each with three hundred houses and seven hundred chimneys.";
text[11] = "And bearing in mind that the nubile girls of each quarter marry youths of other quarters and their parents exchange the goods that each family holds in monopoly—bergamot, sturgeon roe, astrolabes, amethysts—you can then work from these facts until you learn everything you wish about the city in the past, present, and future.";
text[12] = "Or else you can say, like the camel driver who took me there: “I arrived here in my first youth, one morning, many people were hurrying along the streets toward the market, the women had fine teeth and looked you straight in the eye, three soldiers on a platform played the trumpet, and all around wheels turned and colored banners fluttered in the wind. Before then I had known only the desert and the caravan routes. In the years that followed, my eyes returned to contemplate the desert expanses and the caravan routes; but now I know this path is only one of the many that opened before me on that morning in Dorothea.”";
	/* City 4: Zaira */
text[13] = "In vain, great-hearted Kublai, shall I attempt to describe City #" + cityname + ", city of high bastions.";
text[14] = "I could tell you how many steps make up the streets rising like stairways, and the degree of the arcades’ curves, and what kind of zinc scales cover the roofs; but I already know this would be the same as telling you nothing.";
text[15] = "The city does not consist of this, but of relationships between the measurements of its space and the events of its past: the height of a lamppost and the distance from the ground of a hanged usurper’s swaying feet; the line strung from the lamppost to the railing opposite and the festoons that decorate the course of the queen’s nuptial procession; the height of that railing and the leap of the adulterer who climbed over it at dawn; the tilt of a guttering and a cat’s progress along it as he slips into the same window; the firing range of a gunboat which has suddenly appeared beyond the cape and the bomb that destroys the guttering; the rips in the fish net and the three old men seated on the dock mending nets and telling each other for the hundredth time the story of the gunboat of the usurper, who some say was the queen’s illegitimate son, abandoned in his swaddling clothes there on the dock.";
text[16] = "As this wave from memories flows in, the city soaks it up like a sponge and expands.";
text[17] = "A description of City #" + cityname + " as it is today should contain all City #" + cityname + "’s past.";
text[18] = "The city, however, does not tell its past, but contains it like the lines of a hand, written in the corners of he streets, the gratings of the windows, the banisters of the steps, the antennae of the lightning rods, the poles of the Bags, every segment marked in turn with scratches, indentations, scrolls.";
	/* City 5: Aanastasia */
text[19] = "At the end of three days, moving southward, you come upon City #" + cityname + ", a city with concentric canals watering it and kites flying over it.";	
text[20] = "I should now list the wares that can profitably be bought here: agate, onyx, chrysoprase, and other varieties of chalcedony; I should praise the flesh of the golden pheasant cooked here over fires of seasoned cherry wood and sprinkled with much sweet marjoram; and tell of the women I have seen bathing in the pool of a garden and who sometimes-it is said-invite the stranger to disrobe with them and chase them in the water.";
text[21] = "But with all this, I would not be telling you the city’s true essence; for while the description of City #" + cityname + " awakens desires one at a time only to force you to stifle them, when you are in the heart of City #" + cityname + " one morning your desires waken all at once and surround you.";
text[22] = "The city appears to you as a whole where no desire is lost and of which you are a part, and since it enjoys everything you do not enjoy, you can do nothing but inhabit this desire and be content.";
text[23] = "Such is the power, sometimes called malignant, sometimes benign, that City #" + cityname + ", the treacherous city, possesses; if for eight hours a day you work as a cutter of agate, onyx, chrysoprase, your labor which gives form to desire takes from desire its form, and you believe you are enjoying City #" + cityname + " wholly when you are only its slave.";
	/* City 6: Tamara */
text[24] = "You walk for days among trees and among stones.";
text[25] = "Rarely does the eye light on a thing, and then only when it has recognized that thing as the sign of another thing: a print in the sand indicates the tiger’s passage; a marsh announces a vein of water; the hibiscus flower, the end of winter.";
text[26] = "All the rest is silent and interchangeable; trees and stones are only what they are.";
text[27] = "Finally the journey leads to City #" + cityname + ".";
text[28] = "You penetrate it along streets thick with signboards jutting from the walls.";
text[29] = "The eye does not see things but images of things that mean other things: pincers point out the tooth-drawer’s house; a tankard, the tavern; halberds, the barracks; scales, the grocer’s.";
text[30] = "Statues and shields depict lions, dolphins, towers, stars: a sign that something—who knows what?— has as its sign a lion or a dolphin or a tower or a star.";
text[31] = "Other signals warn of what is forbidden in a given place (to enter the alley with wagons, to urinate behind the kiosk, to fish with your pole from the bridge) and what is allowed (watering zebras, playing bowls, burning relatives’ corpses).";
text[32] = "From the doors of the temples the gods’ statues are seen, each portrayed with his attributes—the cornucopia, the hourglass, the medusa—so that the worshiper can recognize them and address his prayers correctly.";
text[32] = "If a building has no signboard or figure, its very form and the position it occupies in the city’s order suffice to indicate its function: the palace, the prison, the mint, the Pythagorean school, the brothel.";
text[34] = "The wares, too, which the vendors display on their stalls are valuable not in themselves but as signs of other things: the embroidered headband stands for elegance; the gilded palanquin, power; the volumes of Averroes, learning; the ankle bracelet, voluptuousness.";
text[35] = "Your gaze scans the streets as if they were written pages: the city says everything you must think, makes you repeat her discourse, and while you believe you are visiting City #" + cityname + " you are only recording the names with which she defines herself and all her parts.";
text[36] = "However the city may really be, beneath this thick coating of signs, whatever it may contain or conceal, you leave City #" + cityname + " without having discovered it.";
text[37] = "Outside, the land stretches, empty, to the horizon; the sky opens, with speeding clouds.";
text[38] = "In the shape that chance and wind give the clouds, you are already intent on recognizing figures: a sailing ship, a hand, an elephant…";
	/* City 7: Zora */
text[39] = "Beyond six rivers and three mountain ranges rises City #" + cityname + ", a city that no one, having seen it, can forget.";
text[40] = "But not because, like other memorable cities, it leaves an unusual image in your recollections.";
text[41] = "City #" + cityname + " has the quality of remaining in your memory point by point, in its succession of streets, of houses along the streets, and of doors and windows in the houses, though nothing in them possesses a special beauty or rarity.";
text[42] = "City #" + cityname + "’s secret lies in the way your gaze runs over patterns following one another as in a musical score where not a note can be altered or displaced.";
text[43] = "The man who knows by heart how City #" + cityname + " is made, if he is unable to sleep at night, can imagine he is walking along the streets and he remembers the order by which the copper clock follows the barber’s striped awning, then the fountain with the nine jets, the astronomer’s glass tower, the melon vendor’s kiosk, the statue of the hermit and the lion, the Turkish bath, the cafe at the corner, the alley that leads to the harbor.";
text[44] = "This city which cannot be expunged from the mind is like an armature, a honeycomb in whose cells each of us can place the things he wants to remember: names of famous men, virtues, numbers, vegetable and mineral classifications, dates of battles, constellations, parts of speech.";
text[45] = "Between each idea and each point of the itinerary an affinity or a contrast can be established, serving as an immediate aid to memory.";
text[46] = "So the world’s most learned men are those who have memorized City #" + cityname + ".";
text[47] = "But in vain I set out to visit the city: forced to remain motionless and always the same, in order to be more easily remembered, City #" + cityname + " has languished, disintegrated, disappeared.";
text[48] = "The earth has forgotten her.";
	/* City 8: Despina */
text[49] = "City #" + cityname + " can be reached in two ways: by ship or by camel.";
text[50] = "The city displays one face to the traveler arriving overland and a different one to him who arrives by sea.";
text[51] = "When the camel driver sees, at the horizon of the tableland, the pinnacles of the skyscrapers come into view, the radar antennae, the white and red windsocks flapping, the chimneys belching smoke, he thinks of a ship; he knows it is a city, but he thinks of it as a vessel that will take him away from the desert, a windjammer about to cast off, with the breeze already swelling the sails, not yet unfurled, or a steamboat with its boiler vibrating in the iron keel; and he thinks of all the ports, the foreign merchandise the cranes unload on the docks, the taverns where crews of different flags break bottles over one another’s heads, the lighted, ground-floor windows, each with a woman combing her hair.";
text[52] = "In the coastline’s haze, the sailor discerns the form of a camel’s withers, an embroidered saddle with glittering fringe between two spotted humps, ad- dancing and swaying; he knows it is a city, but he thinks of it as a camel from whose pack hang wineskins and bags of candied fruit, date wine, tobacco leaves, and already he sees himself at the head of a long caravan taking him away from the desert of the sea, toward oases of fresh water in the palm trees’ jagged shade, toward palaces of thick, whitewashed walls, tiled courts where girls are dancing barefoot, moving their arms, half-hidden by their veils, and half-revealed.";
text[53] = "Each city receives its form from the desert it opposes; and so the camel driver and the sailor see City #" + cityname + ", a border city between two deserts.";
	/* City 9: Zirma */
text[54] = "Travelers return from City #" + cityname + " with distinct memories: a blind black man shouting in the crowd, a lunatic teetering on a skyscraper’s cornice, a girl walking with a puma on a leash.";
text[55] = "Actually many of the blind men who tap their canes on City #" + cityname + "’s cobblestones are black; in every skyscraper there is someone going mad; all lunatics spend hours on cornices; there is no puma that some girl does not raise, as a whim.";
text[56] = "The city is redundant: it repeats itself so that something will stick in the mind.";
text[57] = "I too am returning from City #" + cityname + ": my memory includes dirigibles flying in all directions, at window level; streets of shops where tattoos are drawn on sailors’ skin; underground trains crammed with obese women suffering from the humidity.";
text[58] = "My traveling companions, on the other hand, swear they saw only one dirigible hovering among the city’s spires, only one tattoo artist arranging needles and inks and pierced patterns on his bench, only one fat woman fanning herself on a train’s platform.";
text[59] = "Memory is redundant: it repeats signs so that the city can begin to exist.";
	/* City 10: Isaura */
text[60] = "City #" + cityname + ", city of the thousand wells, is said to rise over a deep, subterranean lake.";
text[61] = "Its green border repeats the dark outline of the buried lake; an invisible landscape conditions the visible one; everything that moves in the sunlight is driven by the lapping wave enclosed beneath the rock’s calcareous sky.";
text[62] = "Consequently two forms of religion exist in City #" + cityname + ".";
text[63] = "The city’s gods, according to some people, live in the depths, in the black lake that feeds the underground streams.";
text[64] = "According to others, the gods live in the buckets that rise, suspended from a cable, as they appear over the edge of the wells, in the revolving pulleys, in the windlasses of the norias, in the pump handles, in the blades of the windmills that draw the water up from the drillings, in the trestles that support the twisting probes, in the reservoirs perched on stilts over the roofs, in the slender arches of the aqueducts, in all the columns of water, the vertical pipes, the plungers, the drains, all the way up to the weathercocks that surmount the airy scaffoldings of City #" + cityname + ", a city that moves entirely upward.";
	/* City 11: Maurilla */
text[65] = "In City #" + cityname + ", the traveler is invited to visit the city and, at the same time, to examine some old post cards that show it as it used to be: the same identical square with a hen in the place of the bus station, a bandstand in the place of the overpass, two young ladies with white parasols in the place of the munitions factory.";
text[66] = "If the traveler does not wish to disappoint the inhabitants, he must praise the postcard city and prefer it to the present one, though he must be careful to contain his regret at the changes within definite limits: admitting that the magnificence and prosperity of the metropolis City #" + cityname + ", when compared to the old, provincial City #" + cityname + ", cannot compensate for a certain lost grace, which, however, can be appreciated only now in the old post cards, whereas before, when that provincial City #" + cityname + " was before one’s eyes, one saw absolutely nothing graceful and would see it even less today, if City #" + cityname + " had remained unchanged; and in any case the metropolis has the added attraction that, through what it has become, one can look back with nostalgia at what it was.";
text[67] = "Beware of saying to them that sometimes different cities follow one another on the same site and under the same name, born and dying without knowing one another, without communication among themselves.";
text[68] = "At times even the names of the inhabitants remain the same, and their voices’ accent, and also the features of the faces; but the gods who live beneath names and above places have gone off without a word and outsiders have settled in their place.";
text[69] = "It is pointless to ask whether the new ones are better or worse than the old, since there is no connection between them, just as the old post cards do not depict City #" + cityname + " as it was, but a different city which, by chance, was called City #" + cityname + ", like this one.";
	/* City 12: Fedroa */
text[70] = "In the center of City #" + cityname + ", that gray stone metropolis, stands a metal building with a crystal globe in every room.";
text[71] = "Looking into each globe, you see a blue city, the model of a different City #" + cityname + ".";
text[72] = "These are the forms the city could have taken if, for one reason or another, it had not become what we see today.";
text[73] = "In every age someone, looking at City #" + cityname + " as it was, imagined a way of making it the ideal city, but while he constructed his miniature model, City #" + cityname + " was already no longer the same as before, and what had been until yesterday a possible future became only a toy in a glass globe.";
text[74] = "The building with the globes is now City #" + cityname + "’s museum: every inhabitant visits it, chooses the city that corresponds to his desires, contemplates it, imagining his reflection in the medusa pond that would have collected the waters of the canal (if it had not been dried up), the view from the high canopied box along the avenue reserved for elephants (now banished from the city), the fun of sliding down the spiral, twisting minaret (which never found a pedestal from which to rise).";
text[75] = "On the map of your empire, Great Khan, there must be room both for the big, stone City #" + cityname + " and the little Fedoras in glass globes.";
text[76] = "Not because they are all equally real, but because all are only assumptions.";
text[77] = "The one contains what is accepted as necessary when it is not yet so; the others, what is imagined as possible and, a moment later, is possible no longer.";  
	/* City 13: Zoe */
text[78] = "The man who is traveling and does not yet know the city awaiting him along his route wonders what the palace will be like, the barracks, the mill, the theater, the bazaar.";
text[79] = "In every city of the empire every building is different and set in a different order: but as soon as the stranger arrives at the unknown city and his eye penetrates the pine cone of pagodas and garrets and haymows, following the scrawl of canals, gardens, rubbish heaps, he immediately distinguishes which are the princes’ palaces, the high priests’ temples, the tavern, the prison, the slum.";
text[80] = "This—some say—confirms the hypothesis that each man bears in his mind a city made only of differences, a city without figures and without form, and the individual cities fill it up.";
text[81] = "This is not true of City #" + cityname + ".";
text[82] = "In every point of this city you can, in turn, sleep, make tools, cook, accumulate gold, disrobe, reign, sell, question oracles.";
text[83] = "Anyone of its pyramid roofs could cover the leprosarium or the odalisques’ baths.";
text[84] = "The traveler roams all around and has nothing but doubts: he is unable to distinguish the features of the city, the features he keeps distinct in his mind also mingle.";
text[85] = "He infers this: if existence in all its moments is all of itself, City #" + cityname + " is the place of indivisible existence.";
text[86] = "But why, then, does the city exist?"; 
text[87] = "What line separates the inside from the outside, the rumble of wheels from the howl of wolves?";
	/* City 14: Zenobia */
text[88] = "Now I shall tell of City #" + cityname + ", which is wonderful in this fashion: though set on dry terrain it stands on high pilings, and the houses are of bamboo and zinc, with many platforms and balconies placed on stilts at various heights, crossing one another, linked by ladders and hanging sidewalks, surmounted by cone-roofed belvederes, barrels storing water, weather vanes, jutting pulleys, and fish poles, and cranes.";
text[89] = "No one remembers what need or command or desire drove City #" + cityname + "’s founders to give their city this form, and so there is no telling whether it was satisfied by the city as we see it today, which has perhaps grown through successive superimpositions from the first, now undecipherable plan.";
text[90] = "But what is certain is that if you ask an inhabitant of City #" + cityname + " to describe his vision of a happy life, it is always a city like City #" + cityname + " that he imagines, with its pilings and its suspended stairways, a City #" + cityname + " perhaps quite different, a-flutter with banners and ribbons, but always derived by combining elements of that first model.";
text[91] = "This said, it is pointless trying to decide whether City #" + cityname + " is to be classified among happy cities or among the unhappy.";
text[92] = "It makes no sense to divide cities into these two species, but rather into another two: those that through the years and the changes continue to give their form to desires, and those in which desires either erase the city or are erased by it.";
	/* City 15: Euphemima */
text[93] = "Proceeding eighty miles into the northwest wind, you reach City #" + cityname + ".";
text[94] = "The boat that lands there with a cargo of ginger and cotton will set sail again, its hold filled with pistachio nuts and poppy seeds, and the caravan that has just unloaded sacks of nutmegs and raisins is already cramming its saddlebags with bolts of golden muslin for the return journey.";
text[95] = "But what drives men to travel up rivers and cross deserts to come here is not only the exchange of wares, which you could find, everywhere the same, in all the bazaars inside and outside the Great Khan’s empire, scattered at your feet on the same yellow mats, in the shade of the same awnings protecting them from the flies, offered with the same lying reduction in prices.";
text[96] = "You do not come to City #" + cityname + " only to buy and sell, but also because at night, by the fires all around the market, seated on sacks or barrels or stretched out on piles of carpets, at each word that one man says­—such as “wolf,” “sister,” “hidden treasure,” “battle,” “scabies,” “lovers”—the others tell, each one his tale of wolves, sisters, treasures, scabies, lovers, battles.";
text[97] = "And you know that in the long journey ahead of you, when to keep awake against the camel’s swaying or the junk’s rocking, you start summoning up your memories one by one, your wolf will have become  another wolf, your sister a different sister, your battle other battles, on your return from City #" + cityname + ", the city where memory is traded at every solstice and at every equinox.";
	/* City 16: Zobeide */
text[98] = "From there, after six days and seven nights, you arrive at City #" + cityname + ", the white city, well exposed to the moon, with streets wound about themselves as in a skein.";
text[99] = "They tell this tale of its foundation: men of various nations had an identical dream.";
text[100] = "They saw a woman running at night through an unknown city; she was seen from behind, with long hair, and she was naked.";
text[101] = "They dreamed of pursuing her.";
text[102] = "As they twisted and turned, each of them lost her.";
text[103] = "After the dream they set out in search of that city; they never found it, but they found one another; they decided to build a city like the one in the dream.";
text[104] = "In laying out the streets, each followed the course of his pursuit; at the spot where they had lost the fugitive’s trail, they arranged spaces and walls differently from the dream, so she would be unable to escape again.";
text[105] = "This was City #" + cityname + ", where they settled, waiting for that scene to be repeated one night.";
text[106] = "None of them, asleep or awake, ever saw the woman again.";
text[107] = "The city’s streets were streets where they went to work every day, with no link any more to the dreamed chase.";
text[108] = "Which, for that matter, had long been forgotten.";
text.push("New men arrived from other lands, having had a dream like theirs, and in City #" + cityname + ", they recognized something of the streets of the dream, and they changed the positions of arcades and stairways to resemble more closely the path of the pursued woman and so, at the spot where she had vanished, there would remain no avenue of escape.");
text.push("The first to arrive could not understand what drew these people to City #" + cityname + ", this ugly city, this trap.");
	/* City 17: Hypatia */
text.push("Of all the changes of language a traveler in distant lands must face, none equals that which awaits him in City #" + cityname + ", because the change regards not words, but things.");
text.push("I entered City #" + cityname + " one morning, a magnolia garden was reflected in blue lagoons, I walked among the hedges, sure I would discover young and beautiful ladies bathing; but at the bottom of the water, crabs were biting the eyes of the suicides, stones tied around their necks, their hair green with seaweed.");
text.push("I felt cheated and I decided to demand justice of the sultan.");
text.push("I climbed the porphyry steps of the palace with the highest domes, I crossed six tiled courtyards with fountains.");
text.push("The central hall was barred by iron gratings: convicts with black chains on their feet were hauling up basalt blocks from a quarry that opened underground.");
text.push("I could only question the philosophers.");
text.push("I entered the great library, I became lost among shelves collapsing under the vellum bindings, I followed the alphabetical order of vanished alphabets, up and down halls, stairs, bridges.");
text.push("In the most remote papyrus cabinet, in a cloud of smoke, the dazed eyes of an adolescent appeared to me, as he lay on a mat, his lips glued to an opium pipe.");
text.push("“Where is the sage?” The smoker pointed out of the window.");
text.push("It was a garden with children’s games: ninepins, a swing, a top.");
text.push("The philosopher was seated on the lawn.");
text.push("He said: “Signs form a language, but not the one you think you know.”");
text.push("I realized I had to free myself from the images which in the past had announced to me the things I sought: only then would I succeed in understanding the language of City #" + cityname + ".");
text.push("Now I have only to hear the neighing of horses and the cracking of whips and I am seized with amorous trepidation: in City #" + cityname + " you have to go to the stables and riding rings to see the beautiful women who mount the saddle, thighs naked, greaves on their calves, and as soon as a young foreigner approaches, they fling him on the piles of hay or sawdust and press their firm nipples against him.");
text.push("And when my spirit wants no stimulus or nourishment save music, I know it is to be sought in the cemeteries: the musicians hide in the tombs; from grave to grave flute trills, harp chords answer one another.");
text.push("True, also in City #" + cityname + " the day will come when my only desire will be to leave.");
text.push("I know I must not go down to the harbor then, but climb the citadel’s highest pinnacle and wait for a ship to go by up there.");
text.push("But will it ever go by? There is no language without deceit.");
	/* City 18: Armilla */
text.push("Whether City #" + cityname + " is like this because it is unfinished or because it has been demolished, whether the cause is some enchantment or only a whim, I do not know.");
text.push("The fact remains that it has no walls, no ceilings, no floors: it has nothing that makes it seem a city, except the water pipes that rise vertically where the houses should be and spread out horizontally where the floors should be: a forest of pipes that end in taps, showers, spouts, overflows.");
text.push("Against the sky a lavabo’s white stands out, or a bathtub, or some other porcelain, like late fruit still hanging from the boughs.");
text.push("You would think the plumbers had finished their job and gone away before the bricklayers arrived; or else their hydraulic systems, indestructible, had survived a catastrophe, an earthquake, or the corrosion of termites.");
text.push("Abandoned before or after it was inhabited, City #" + cityname + " cannot be called deserted.");
text.push("At any hour, raising your eyes among the pipes, you are likely to glimpse a young woman, or many young women, slender, not tall of stature, luxuriating in the bathtubs or arching their backs under the showers suspended in the void, washing or drying or perfuming themselves, or combing their long hair at a mirror.");
text.push("In the sun, the threads of water fanning from the showers glisten, the jets of the taps, the spurts, the splashes, the sponges’ suds.");
text.push("I have come to this explanation: the streams of water channeled in the pipes of City #" + cityname + " have remained in the possession of nymphs and naiads.");
text.push("Accustomed to traveling along underground veins, they found it easy to enter into the new aquatic realm, to burst from multiple fountains, to find new mirrors, new games, new ways of enjoying the water.");
text.push("Their invasion may have driven out the human beings, or City #" + cityname + " may have been built by humans as a votive offering to win the favor of the nymphs, offended at the misuse of the waters.");
text.push("In any case, now they seem content, these maidens: in the morning you hear them singing.");
	/* City 19: Chloe */
text.push("In City #" + cityname + ", a great city, the people who move through the streets are all strangers.");
text.push("At each encounter, they imagine a thousand things about one another; meetings which could take place between them, conversations, surprises, caresses, bites. ");
text.push("But no one greets anyone; eyes lock for a second, then dart away, seeking other eyes, never stopping.");
text.push("A girl comes along, twirling a parasol on her shoulder, and twirling slightly also her rounded hips.");
text.push("A woman in black comes along, showing her full age, her eyes restless beneath her veil, her lips trembling.");
text.push("A tattooed giant comes along; a young man with white hair; a female dwarf; two girls, twins, dressed in coral.");
text.push("Something runs among them, an exchange of glances like lines that connect one figure with another and draw arrows, stars, triangles, until all combinations are used up in a moment, and other characters come on to the scene: a blind man with a cheetah on a leash, a courtesan with an ostrich-plume fan, an ephebe, a Fat Woman.");
text.push("And thus, when some people happen to find themselves together, taking shelter from the rain under an arcade, or crowding beneath an awning of the bazaar, or stopping to listen to the band in the square, meetings, seductions, copulations, orgies are consummated, among them without a word exchanged, without a finger touching anything, almost without an eye raised.");
text.push("A voluptuous vibration constantly stirs City #" + cityname + ", the most chaste of cities.");
text.push("If men and women began to live their ephemeral dreams, every phantom would become a person with whom to begin a story of pursuits, pretenses, misunderstandings, clashes, oppressions, and the carousel of fantasies would stop.");
	/* City 20: Valdrada */
text.push("The ancients built City #" + cityname + " on the shores of a lake, with houses all verandas one above the other, and high streets whose railed parapets look out over the water.");
text.push("Thus the traveler, arriving, sees two cities: one erect above the lake, and the other reflected, upside down.");
text.push("Nothing exists or happens in the one City #" + cityname + " that the other City #" + cityname + " does not repeat, because the city was so constructed that its every point would be reflected in its mirror, and the City #" + cityname + " down in the water contains not only all the flutings and juttings of the facades that rise above the lake, but also the rooms’ interiors with ceilings and floors, the perspective of the halls, the mirrors of the wardrobes.");
text.push("City #" + cityname + "’s inhabitants know that each of their actions is, at once, that action and its mirror-image, which possesses the special dignity of images, and this awareness prevents them from succumbing for a single moment to chance and forgetfulness.");
text.push("Even when lovers twist their naked bodies, skin against skin, seeking the position that will give one the most pleasure in the other, even when murderers plunge the knife into the black veins of the neck and more dotted blood pours out the more they press the blade that slips between the tendons, it is not so much their copulating or murdering that matters as the copulating or murdering of the images, limpid and cold in the mirror.");
text.push("At times the mirror increases a thing’s value, at times denies it.");
text.push("Not everything that seems valuable above the mirror maintains its force when mirrored.");
text.push("The twin cities are not equal, because nothing that exists or happens in City #" + cityname + " is symmetrical: every face and gesture is answered, from the mirror, by a face and gesture inverted, point by point.");
text.push("The two Valdradas live for each other, their eyes interlocked; but there is no love between them.");
	/* City 21: Olivia */
text.push("No one, wise Kublai, knows better than you that the city must never be confused with the words that describe it.");
text.push("And yet between the one and the other there is a connection.");
text.push("If I describe to you City #" + cityname + ", a city rich in products and in profits, I can indicate its prosperity only by speaking of filigree palaces with fringed cushions on the seats by the mullioned windows.");
text.push("Beyond the screen of a patio, spinning jets water a lawn where a white peacock spreads its tail.");
text.push("But from these words you realize at once how City #" + cityname + " is shrouded in a cloud of soot and grease that sticks to the houses, that in the brawling streets, the shifting trailers crush pedestrians against the walls.");
text.push("If I must speak to you of the inhabitants’ industry, I speak of the saddlers’ shops smelling of leather, of the women chattering as they weave raffia rugs, of the hanging canals whose cascades move the paddles of the mills; but the image these words evoke in your enlightened mind is of the mandrel set against the teeth of the lathe, an action repeated by thousands of hands thousands of times at the pace established for each shift.");
text.push("If I must explain to you how City #" + cityname + "’s spirit tends toward a free life and a refined civilization, I will tell you of ladies who glide at night in illuminated canoes between the banks of a green estuary; but it is only to remind you that on the outskirts where men and women land every evening like lines of sleepwalkers, there is always someone who bursts out laughing in the darkness, releasing the flow of jokes and sarcasm.");
text.push("This perhaps you do not know: that to talk of City #" + cityname + ", I could not use different words.");
text.push("If there really were an City #" + cityname + " of mullioned windows and peacocks, of saddlers and rug-weavers and canoes and estuaries, it would be a wretched, black, fly-ridden hole, and to describe it, I would have to fall back on the metaphors of soot, the creaking of wheels, repeated actions, sarcasm.");
text.push("Falsehood is never in words; it is in things.");
	/* City 22: Sophronia */
text.push("City #" + cityname + " is made up of two half-cities. In one there is the great roller coaster with its steep humps, the carousel with its chain spokes, the Ferris wheel of spinning cages, the death-ride with crouching motorcyclists, the big top with the clump of trapezes hanging in the middle.");
text.push("The other half-city is of stone and marble and cement, with the bank, the factories, the palaces, the slaughterhouse, the school, and all the rest.");
text.push("One of the half-cities is permanent, the other is temporary, and when the period of its sojourn is over, they uproot it, dismantle it, and take it off, transplanting it to the vacant lots of another half-city.");
text.push("And so every year the day comes when the workmen remove the marble pediments, lower the stone walls, the cement pylons, take down the Ministry, the monument, the docks, the petroleum refinery, the hospital, load them on trailers, to follow from stand to stand their annual itinerary.");
text.push("Here remains the half-City #" + cityname + " of the shooting-galleries and the carousels, the shout suspended from the cart of the headlong roller coaster, and it begins to count the months, the days it must wait before the caravan returns and a complete life can begin again.")
	/* City 23: Eutropia */
text.push("When he enters the territory of which City #" + cityname + " is the capital, the traveler sees not one city but many, of equal size and not unlike one another, scattered over a vast, rolling plateau.");
text.push("City #" + cityname + " is not one, but all these cities together; only one is inhabited at a time, the others are empty; and this process is carried out in rotation.");
text.push("Now I shall tell you how. On the day when City #" + cityname + "’s inhabitants feel the grip of weariness and no one can bear any longer his job, his relatives, his house and his life, debts, the people he must greet or who greet him, then the whole citizenry decides to move to the next city, which is there waiting for them, empty and good as new; there each will take up a new job, a different wife, will see another landscape on opening his window, and will spend his time with different pastimes, friends, gossip.");
text.push("On the day when City #" + cityname + "’s inhabitants feel the grip of weariness and no one can bear any longer his job, his relatives, his house and his life, debts, the people he must greet or who greet him, then the whole citizenry decides to move to the next city, which is there waiting for them, empty and good as new; there each will take up a new job, a different wife, will see another landscape on opening his window, and will spend his time with different pastimes, friends, gossip.");
text.push("So their life is renewed from move to move, among cities whose exposure or declivity or streams or winds make each site somehow different from the others.");
text.push("Since their society is ordered without great distinctions of wealth or authority, the passage from one function to another takes place almost without jolts; variety is guaranteed by the multiple assignments, so that in the span of a lifetime a man rarely returns to a job that has already been his.");
text.push("Thus the city repeats its life, identical, shifting up and down on its empty chessboard.");
text.push("The inhabitants repeat the same scenes, with the actors changed; they repeat the same speeches with variously combined accents; they open alternate mouths in identical yawns.");
text.push("Alone, among all the cities of the empire, City #" + cityname + " remains always the same.");
text.push("Mercury, god of the fickle, to whom the city is sacred, worked this ambiguous miracle.");
	/* City 24: Zemrude */
text.push("It is the mood of the beholder which gives City #" + cityname + " its form.");
text.push("If you go by whistling, your nose a-tilt behind the whistle, you will know it from below: window sills, flapping curtains, fountains.");
text.push("If you walk along hanging your head, your nails dug into the palms of your hands, your gaze will be held on the ground, in the gutters, the manhole covers, the fish scales, wastepaper.");
text.push("You cannot say that one aspect of the city is truer than the other, but you hear of the upper City #" + cityname + " chiefly from those who remember it, as they sink into the lower City #" + cityname + ", following every day the same stretches of street and finding again each morning the ill-humor of the day before, encrusted at the foot of the walls.");
text.push("For everyone, sooner or later, the day comes when we bring our gaze down along the drainpipes and we can no longer detach it from the cobblestones.");
text.push("The reverse is not impossible, but it is more rare: and so we continue walking through City #" + cityname + "’s streets with eyes now digging into the cellars, the foundations, the wells.");
	/* City 25: Aglaura */
text.push("There is little I can tell you about City #" + cityname + " beyond the things its own inhabitants have always repeated: an array of proverbial virtues, of equally proverbial faults, a few eccentricities, some punctilious regard for rules.");
text.push("Ancient observers, whom there is no reason not to presume truthful, attributed to City #" + cityname + " its enduring assortment of qualities, surely comparing them to those of the other cities of their times.");
text.push("Perhaps neither the City #" + cityname + " that is reported nor the City #" + cityname + " that is visible has greatly changed since then, but what was bizarre has become usual, what seemed normal is now an oddity, and virtues and faults have lost merit or dishonor in a code of virtues and faults differently distributed.");
text.push("In this sense, nothing said of City #" + cityname + " is true, and yet these accounts create a solid and compact image of a city, whereas the haphazard opinions which might be inferred from living there have less substance.This is the result: the city that they speak of has much of what is needed to exist, whereas the city that exists on its site, exists less.");
text.push("So if I wished to describe City #" + cityname + " to you, sticking to what I personally saw and experienced, I should have to tell you that it is a colorless city, without character, planted there at random.");
text.push("But this would not be true, either: at certain hours, in certain places along the street, you see opening before you the hint of something unmistakable, rare, perhaps magnificent; you would like to say what it is, but everything previously said of City #" + cityname + " imprisons your words and obliges you to repeat rather than say.");
text.push("Therefore, the inhabitants still believe they live in an City #" + cityname + " which grows only with the name City #" + cityname + " and they do not notice the City #" + cityname + " that grows on the ground.");
text.push("And even I, who would like to keep the two cities distinct in my memory, can speak only of the one, because the recollection of the other, in the lack of words to fix it, has been lost.");
	/* City 26: Octavia */
text.push("If you choose to believe me, good.");
text.push("Now I will tell how City #" + cityname + ", the spider-web city, is made.");
text.push("There is a precipice between two steep mountains: the city is over the void, bound to the two crests with ropes and chains and catwalks.");
text.push("You walk on the little wooden ties, careful not to set your foot in the open spaces, or you cling to the hempen strands.");
text.push("Below there is nothing for hundreds and hundreds of feet: a few clouds glide past; farther down you can glimpse the chasm’s bed.");
text.push("This is the foundation of the city: a net which serves as passage and as support.");
text.push("All the rest, instead of rising up, is hung below: rope ladders, hammocks, houses made like sacks, clothes hangers, terraces like gondolas, skins of water, gas jets, spits, baskets on strings, dumb-waiters, showers, trapezes and rings for children’s games, cable cars, chandeliers, pots with trailing plants.");
text.push("Suspended over the abyss, the life of City #" + cityname + "’s inhabitants is less uncertain than in other cities.");
text.push("They know the net will last only so long."); 
	/* City 27: Ersilia */
text.push("In City #" + cityname + ", to establish the relationships that sustain the city’s life, the inhabitants stretch strings from the corners of the houses, white or black or gray or black-and-white according to whether they mark a relationship of blood, of trade, authority, agency."); 
text.push("When the strings become so numerous that you can no longer pass among them, the inhabitants leave: the houses are dismantled; only the strings and their supports remain.");
text.push("From a mountainside, camping with their household goods, City #" + cityname + "’s refugees look at the labyrinth of taut strings and poles that rise in the plain");
text.push("That is City #" + cityname + " still, and they are nothing.");
text.push("They rebuild City #" + cityname + " elsewhere.");
text.push("They weave a similar pattern of strings which they would like to be more complex and at the same time more regular than the other.");
text.push("Then they abandon it and take themselves and their houses still farther away.");
text.push("Thus, when traveling in the territory of City #" + cityname + ", you come upon the ruins of the abandoned cities, without the walls which do not last, without the bones of the dead which the wind rolls away:  spiderwebs of intricate relationships seeking a form.");
	/* City 28: Baucis */
text.push("After a seven days’ march through woodland, the traveler directed toward City #" + cityname + " cannot see the city and yet he has arrived.");
text.push("The slender stilts that rise from the ground at a great distance from one another and are lost above the clouds support the city.");
text.push("You climb them with ladders.");
text.push("On the ground the inhabitants rarely show themselves: having already everything they need up there, they prefer not to come down.");
text.push("Nothing of the city touches the earth except those long flamingo legs on which it rests and, when the days are sunny, a pierced, angular shadow that falls on the foliage.");
text.push("There are three hypotheses about the inhabitants of City #" + cityname + ": that they hate the earth; that they respect it so much they avoid all contact; that they love it as it was before they existed and with spyglasses and telescopes aimed downward they never tire of examining it, leaf by leaf, stone by stone, ant by ant, contemplating with fascination their own absence.");
	/* City 29: Leandra */
text.push("Gods of two species protect City #" + cityname + ".");
text.push("Both are too tiny to be seen and too numerous to be counted.");
text.push("One species stands at the doors of the houses, inside, next to the coatrack and the umbrella stand; in moves, they follow the families and install themselves in the new home at the consignment of the keys.");
text.push("The others stay in the kitchen, hiding by preference under pots or in the chimney flue or broom closet: they belong to the house, and when the family that has lived there goes away, they remain with the new tenants; perhaps they were already there before the house existed, among the weeds of the vacant lot, concealed in a rusty can; if the house is torn down and a huge block of fifty families is built in its place, they will be found, multiplied, in the kitchens of that many apartments.");
text.push("To distinguish the two species we will call the first one Penates and the other Lares.");
text.push("Within a given house, Lares do not necessarily stay with Lares, and Penates with Penates: they visit one another, they stroll together on the stucco cornices, on the radiator pipes; they comment on family events; not infrequently they quarrel; but they can also get along peacefully for years—seeing them all in a row, you are unable to tell them apart.");
text.push("The Lares have seen Penates of the most varied origins and customs pass through their walls; the Penates have to make a place for themselves, rubbing elbows with Lares of illustrious, but decaying palaces, full of hauteur, or with Lares from tin shacks, susceptible and distrustful.");
text.push("The true essence of City #" + cityname + " is the subject of endless debate.");
text.push("The Penates believe they are the city’s soul, even if they arrived last year; and they believe they take City #" + cityname + " with them when they emigrate.");
text.push("The Lares consider the Penates temporary guests, importunate, intrusive; the real City #" + cityname + " is theirs, which gives form to all it contains, the City #" + cityname + " that was there before all these upstarts arrived and that will remain when all have gone away.");
text.push("The two species have this in common: whatever happens in the family and in the city, they always criticize.");
text.push("The Penates bring out the old people, the great-grandparents, the great-aunts, the family of the past; The Lares talk about the environment before it was ruined.");
text.push("But this does not mean they live only on memories: they daydream of the careers the children will follow when they grow up (the Penates), or what this house in this neighborhood might become (the Lares) if it were in good hands.");
text.push("If you listen carefully, especially at night, you can hear them in the houses of City #" + cityname + ", murmuring steadily, interrupting one another, huffing, bantering, amid ironic, stifled laughter."); 
	/* City 30: Melania */
text.push("At City #" + cityname + ", every time you enter the square, you find yourself caught in a dialogue: the braggart soldier and the parasite coming from a door meet the young wastrel and the prostitute; or else the miserly father from his threshold utters his final warnings to the amorous daughter and is interrupted by the foolish servant who is taking a note to the procuress."); 
text.push("You return to City #" + cityname + " after years and you find the same dialogue still going on; in the meanwhile the parasite has died, and so have the procuress and the miserly father; but the braggart soldier, the amorous daughter, the foolish servant have taken their places, being replaced in their turn by the hypocrite, the confidante, the astrologer.");
text.push("City #" + cityname + "’s population renews itself: the participants in the dialogues die one by one and meanwhile those who will take their places are born, some in one role, some in another.");
text.push("When one changes role or abandons the square forever or makes his first entrance into it, there is a series of changes, until all the roles have been reassigned; but meanwhile the angry old man goes on replying to the witty maidservant, the usurer never ceases following the disinherited youth, the nurse consoles the stepdaughter, even if none of them keeps the same eyes and voice he had in the previous scene.");
text.push("At times it may happen that a sole person will simultaneously take on two or more roles—tyrant, benefactor, messenger—or one role may be doubled, multiplied, assigned to a hundred, a thousand inhabitants of City #" + cityname + ": three thousand for the hypocrite, thirty thousand for the sponger, a hundred thousand king’s sons fallen in low estate and awaiting recognition.");
text.push("As time passes the roles, too, are no longer exactly the same as before; certainly the action they carry forward through intrigues and surprises leads toward some final denouement, which it continues to approach even when the plot seems to thicken more and more and the obstacles increase."); 
text.push("If you look into the square in successive moments, you hear how from act to act the dialogue changes, even if the lives of City #" + cityname + "’s inhabitants are too short for them to realize it."); 
	/* City 31: Esmeralda */
text.push("In City #" + cityname + ", city of water, a network of canals and a network of streets span and intersect each other.");
text.push("To go from one place to another you have always the choice between land and boat: and since the shortest distance between two points in City #" + cityname + " is not a straight line but a zigzag that ramifies in tortuous optional routes, the ways that open to each passerby are never two, but many, and they increase further for those who alternate a stretch by boat with one on dry land.");
text.push("And so City #" + cityname + "’s inhabitants are spared the boredom of following the same streets every day. And that is not all: the network of routes is not arranged on one level, but follows instead an up and down course of steps, landings, cambered bridges, hanging streets.");
text.push("Combining segments of the various routes, elevated or on ground level, each inhabitant can enjoy every day the pleasure of a new itinerary to reach the same places.");
text.push("The most fixed and calm lives in City #" + cityname + " are spent without any repetition. ");
text.push("Secret and adventurous lives, here as elsewhere, are subject to greater restrictions.");
text.push("City #" + cityname + "’s cats, thieves, illicit lovers move along higher, discontinuous ways, dropping from a rooftop to a balcony, following gutterings with acrobats’ steps. ");
text.push("Below, the rats run in the darkness of the sewers, one behind the other’s tail, along with conspirators and smugglers: they peep out of manholes and drainpipes, they slip through double bottoms and ditches, from one hiding place to another they drag crusts of cheese, contraband goods, kegs of gunpowder, crossing the city’s compactness pierced by the spokes of underground passages."); 
text.push("A map of City #" + cityname + " should include, marked in different colored inks, all these routes, solid and liquid, evident and hidden.");
text.push("It is more difficult to fix on the map the routes of the swallows, who cut the air over the roofs, dropping long invisible parabolas with their still wings, darting to gulp a mosquito, spiraling upward, grazing a pinnacle, dominating from every point of their airy paths all the points of the city.");
	/* City 32: Phyllis */
text.push("When you have arrived at City #" + cityname + ", you rejoice in observing all the bridges over the canals, each different from the others: cambered, covered, on pillars, on barges, suspended, with tracery balustrades.");
text.push("And what a variety of windows looks down on the streets: mullioned, Moorish, lancet. pointed, surmounted by lunettes or stained-glass roses; how many kinds of pavement cover the ground: cobbles, slabs, gravel, blue and white tiles.");
text.push("At every point the city offers surprises to your view: a caper bush jutting from the fortress’ walls, the statues of three queens on corbels, an onion dome with three smaller onions threaded on the spire.");
text.push("“Happy the man who has City #" + cityname + " before his eyes each day and who never ceases seeing the things it contains,” you cry, with regret at having to leave the city when you can barely graze it with your glance.");
text.push("But it so happens that, instead, you must stay in City #" + cityname + " and spend the rest of your days there.");
text.push("Soon the city fades before your eyes, the rose windows are expunged, the statues on the corbels, the domes.");
text.push("Like all of City #" + cityname + "’s inhabitants, you follow zigzag lines from one street to another, you distinguish the patches of sunlight from the patches of shade, a door here, a stairway there, a bench where you can put down your basket, a hole where your foot stumbles if you are not careful.");
text.push("All the rest of the city is invisible.");
text.push("City #" + cityname + " is a space in which routes are drawn between points suspended in the void: the shortest way to reach that certain merchant’s tent, avoiding that certain creditor’s window.");
text.push("Your footsteps follow not what is outside the eyes, but what is within, buried, erased.");
text.push("If, of two arcades, one continues to seem more joyous, it is because thirty years ago a girl went by there, with broad, embroidered sleeves, or else it is only because that arcade catches the light at a certain hour like that other arcade, you cannot recall where.");
text.push("Millions of eyes look up at windows, bridges, capers, and they might be scanning a blank page.");
text.push("Many are the cities like City #" + cityname + ", which elude the gaze of all, except the man who catches them by surprise.");
	/* City 33: Pyrrha */
text.push("For a long time City #" + cityname + " to me was a fortified city on the slopes of a bay, with high windows and towers, enclosed like a goblet, with a central square deep as a well, with a well in its center.");
text.push("I had never seen it.");
text.push("It was one of the many cities where I had never arrived, that I conjured up, through its name: Euphrasia, Odile, Margara, Getullia.");
text.push("City #" + cityname + " had its place among them, different from each of them, and like each of them, unmistakable to the mind’s eye. The day came when my travels took me to City #" + cityname + ".");
text.push("As soon as I set foot there, everything I had imagined was forgotten; City #" + cityname + " had become what is City #" + cityname + "; and I thought I had always known that the sea is invisible from the city, hidden behind a dune of the low, rolling coast; that the streets are long and straight; that the houses are clumped at intervals, not high, and they are separated by open lots with stacks of lumber and with sawmills; that the wind stirs the vanes of the water pumps.");
text.push("From that moment on the name City #" + cityname + " has brought to my mind this view, this light, this buzzing, this air in which a yellowish dust Hies: obviously the name means this and could mean nothing but this.");
text.push("My mind goes on containing a great number of cities I have never seen and will never see, names that bear with them a figure or a fragment or glimmer of an imagined figure: Getullia, Odile, Euphrasia, Margara.");
text.push("The city high above the bay is also there still, with the square enclosing the well, but I can no longer call it by a name, nor remember how I could ever have given it a name that means something entirely different.");
	/* City 34: Adelma */
text.push("Never in all my travels had I ventured as far as City #" + cityname + ".");
text.push("It was dusk when I landed there");
text.push("On the dock the sailor who caught the rope and tied it to the bollard resembled a man who had soldiered with me and was dead.");
text.push("It was the hour of the wholesale fish market.");
text.push("An old man was loading a basket of sea urchins on a cart; I thought I recognized him; when I turned, he had disappeared down an alley, but I realized that he looked like a fisherman who, already old when I was a child, could no longer be among the living.");
text.push("I was upset by the sight of a fever victim huddled on the ground, a blanket over his head: my father a few days before his death had yellow eyes and a growth of beard like this man.");
text.push("I turned my gaze aside; I no longer dared look anyone in the face.");
text.push("I thought: “If City #" + cityname + " is a city I am seeing in a dream, where you encounter only the dead, the dream frightens me. If City #" + cityname + " is a real city, inhabited by living people, I need only continue looking at them and the resemblances will dissolve, alien faces will appear, bearing anguish. In either case it is  best for me not to insist on staring at them.”");
text.push("A vegetable vendor was weighing a cabbage on a scales and put it in a basket dangling on a string a girl lowered from a balcony.");
text.push("The girl was identical with one in my village who had gone mad for love and killed herself.");
text.push("The vegetable vendor raised her face: she was my grandmother.");
text.push("I thought: “You reach a moment in life when, among the people you have known, the dead outnumber the living.And the mind refuses to accept more faces, more expressions: on every new face you encounter, it prints the old forms, tor each one it finds the most suitable mask.”");
text.push("The stevedores climbed the steps in a line, bent beneath demijohns and barrels; their faces were hidden by sackcloth hoods; “Now they will straighten up and I will recognize them,” I thought, with impatience and fear.");
text.push("But I could not take my eyes off them; if I turned my gaze just a little toward the crowd that crammed those narrow streets, I was assailed by unexpected faces, reappearing from far away, staring at me as if demanding recognition, as if to recognize me, as if they had already recognized me.");
text.push("Perhaps, for each of them, I also resembled someone who was dead.");
text.push("I had barely arrived at City #" + cityname + " and I was already one of them, I had gone over to their side, absorbed in that kaleidoscope of eyes, wrinkles, grimaces.");
text.push("I thought: “Perhaps City #" + cityname + " is the city where you arrive dying and where each finds again the people he has known. This means I, too, am dead.”");
text.push("And I also thought: “This means the beyond is not happy.”");
	/* City 35: Eudoxia */
text.push("In City #" + cityname + ", which spreads both upward and down, with winding alleys, steps, dead ends, hovels, a carpet is preserved in which you can observe the city’s true form.");
text.push("At first sight nothing seems to resemble City #" + cityname + " less than the design of that carpet, laid out in symmetrical motives whose patterns are repeated along straight and circular lines, interwoven with brilliantly colored spires, in a repetition that can be followed throughout the whole woof.");
text.push("But if you pause and examine it carefully, you become convinced that each place in the carpet corresponds to a place in the city and all the things contained in the city are included in the design, arranged according to their true relationship, which escapes your eye distracted by the bustle, the throngs, the shoving.");
text.push("All of City #" + cityname + "’s confusion, the mules’ braying, the lampblack stains, the fish smell is what is evident in the incomplete perspective you grasp; but the carpet proves that there is a point from which the city shows its true proportions, the geometrical scheme implicit in its every, tiniest detail.");
text.push("It is easy to get lost in City #" + cityname + ": but when you concentrate and stare at the carpet, you recognize the street you were seeking in a crimson or indigo or magenta thread which, in a wide loop, brings you to the purple enclosure that is your real destination.");
text.push("Every inhabitant of City #" + cityname + " compares the carpet’s immobile order with his own image of the city, an anguish of his own, and each can find, concealed among the arabesques, an answer, the story of his life, the twists of fate. ");
text.push("An oracle was questioned about the mysterious bond between two objects so dissimilar as the carpet and the city.");
text.push("One of the two objects—the oracle replied—has the form the gods gave the starry sky and the orbits in which the worlds revolve; the other is an approximate reflection, like every human creation.");
text.push("For some time the augurs had been sure that the carpet’s harmonious pattern was of divine origin.");
text.push("The oracle was interpreted in this sense, arousing no controversy.");
text.push("But you could, similarly, come to the opposite conclusion: that the true map of the universe is City #" + cityname + ", just as it is, a stain that spreads out shapelessly, with crooked streets, houses that crumble one upon the other amid clouds of dust, fires, screams in the darkness.");
	/* City 36: Moriana */
text.push("When you have forded the river, when you have crossed the mountain pass, you suddenly find before you City #" + cityname + ", its alabaster gates transparent in the sunlight, its coral columns supporting pediments encrusted with serpentine, its villas all of glass like aquariums where the shadows of dancing girls with silvery scales swim beneath the medusa-shaped chandeliers.");
text.push("If this is not your first journey, you already know that cities like this have an obverse: you have only to walk in a semicircle and you will come into view of City #" + cityname + "’s hidden face, an expanse of rusting sheet metal, sackcloth, planks bristling with spikes, pipes black with soot, piles of tins, blind walls with fading signs, frames of staved-in straw chairs, ropes good only for hanging oneself from a rotten beam.");
text.push("From one part to the other, the city seems to continue, in perspective, multiplying its repertory of images: but instead it has no thickness, it consists only of a face and an obverse, like a sheet of paper, with a figure on either side, which can neither be separated nor look at each other.");
	/* City 37: Clarice */
text.push("City #" + cityname + ", the glorious city, has a tormented history.");
text.push("Several times it decayed, then burgeoned again, always keeping the first City #" + cityname + " as an unparalleled model of every splendor, compared to which the city’s present state can only cause more sighs at every fading of the stars.");
text.push("In its centuries of decadence, emptied by plagues, its height reduced by collapsing beams and cornices and by shifts of the terrain, rusted and stopped up through neglect or the lack of maintenance men, the city slowly became populated again as the survivors emerged from the basements and lairs, in hordes, swarming like rats, driven by their fury to rummage and gnaw, and yet also to collect and patch, like nesting birds.");
text.push("They grabbed everything that could be taken from where it was and put it in another place to serve a different use: brocade curtains ended up as sheets; in marble funerary urns they planted basil; wrought-iron gratings tom from the harem windows were used for roasting cat-meat on fires of inlaid wood.");
text.push("Put together with odd bits of the 106 useless City #" + cityname + ", a survivors’ City #" + cityname + " was taking shape, all huts and hovels, festering sewers, rabbit cages.");
text.push("And yet, almost nothing was lost of City #" + cityname + "’s former splendor; it was all there, merely arranged in a different order, no less appropriate to the inhabitants’ needs than it had been before.");
text.push("The days of poverty were followed by more joyous times: a sumptuous butterfly-City #" + cityname + " emerged from the beggared chrysalis-City #" + cityname + ".");
text.push("The new abundance made the city overflow with new materials, buildings, objects; new people flocked in from outside; nothing, no one had any connection with the former City #" + cityname + ", or Clarices.");
text.push("And the more the new city settled triumphantly into the place and the name of the first City #" + cityname + ", the more it realized it was moving away from it, destroying it no less rapidly than the rats and the mold.");
text.push("Despite its pride in its new wealth, the city, at heart, felt itself incongruous, alien, a usurper.");
text.push("And then the shards of the original splendor that had been saved, by adapting them to more obscure needs, were again shifted.");
text.push("They were now preserved under glass bells, locked in display cases, set on velvet cushions, and not because they might still be used for anything, but because people wanted to reconstruct through them a city of which no one knew anything now.");
text.push("More decadences, more burgeonings have followed one another in City #" + cityname + ".");
text.push("Populations and customs have changed several times; the name, the site, and the objects hardest to break remain.");
text.push("Each new City #" + cityname + ", compact as a living body with its smells and its breath, shows off, like a gem, what remains of the  ancient Clarices, fragmentary and dead.");
text.push("There is no knowing when the Corinthian capitals stood on the top of their columns: only one of them is remembered, since for many years, in a chicken run, it supported the basket where the hens laid their eggs, and from there it was moved to the Museum of Capitals, in line with other specimens of the collection.");
text.push("The capitals could have been in the chicken runs before they were in the temples, the marble urns could have been planted with basil before they were filled with dead bones.");
text.push("Only this is known for sure: a given number of objects is shifted within a given space, at times submerged by a quantity of new objects, at times worn out and not replaced; the rule is to shuffle them each time, then try to assemble them.");
text.push("Perhaps City #" + cityname + " has always been only a confusion of chipped gimcracks, ill-assorted, obsolete.");
	/* City 38: Eusapia */
text.push("No city is more inclined than City #" + cityname + " to enjoy life and flee care.");
text.push("And to make the leap from life to death less abrupt, the inhabitants have constructed an identical copy of their city, underground.");
text.push("All corpses, dried in such a way that the skeleton remains sheathed in yellow skin, are carried down there, to continue their former activities.");
text.push("And, of these activities, it is their carefree moments that take first place: most of the corpses are seated around laden tables, or placed in dancing positions, or made to play little trumpets.");
text.push("But all the trades and professions of the living City #" + cityname + " are also at work below ground, or at least those that the living performed with more contentment than irritation: the clockmaker, amid all the stopped clocks of his shop, places his parchment ear against an out-of-tune grandfather’s clock; a barber, with dry brush, lathers the cheekbones of an actor learning his role, studying the script with hollow sockets; a girl with a laughing skull milks the carcass of a heifer.");
text.push("To be sure, many of the living want a fate after death different from their lot in life: the necropolis is crowded with big-game hunters, mezzosopranos, bankers, violinists, duchesses, courtesans, generalsmore than the living city ever contained.");
text.push("The job of accompanying the dead down below and arranging them in the desired place is assigned to a confraternity of hooded brothers.");
text.push("No one else has access to the City #" + cityname + " of the dead and everything known about it has been learned from them.");
text.push("They say that the same confraternity exists among the dead and that it never fails to lend a hand; the hooded brothers, after death, will perform the same job in the other City #" + cityname + "; rumor has it that some of them are already dead but continue going up and down.");
text.push("In any case, this confraternity’s authority in the City #" + cityname + " of the living is vast.");
text.push("They say that every time they go below they find something changed in the lower City #" + cityname + "; the dead make innovations in their city; not many, but surely the fruit of sober reflection, not passing whims.");
text.push("From one year to the next, they say, the City #" + cityname + " of the dead becomes unrecognizable.");
text.push("And the living, to keep up with them, also want to do everything that the hooded brothers tell them about the novelties of the dead.");
text.push("So the City #" + cityname + " of the living has taken to copying its underground copy.");
text.push("They say that this has not just now begun to happen: actually it was the dead who built the upper City #" + cityname + ", in the image of their city.");
text.push("They say that in the twin cities there is no longer any way of knowing who is alive and who is dead.");
	/* City 39: Beersheba */
text.push("This belief is handed down in City #" + cityname + ": that, suspended in the heavens, there exists another City #" + cityname + ", where the city’s most elevated virtues and sentiments are poised, and that if the terrestrial City #" + cityname + " will take the celestial one as its model the two cities will become one.");
text.push("The image propagated by tradition is that of a city of pure gold, with silver locks and diamond gates, a jewel-city, all inset and inlaid, as a maximum of laborious study might produce when applied to materials of the maximum worth.");
text.push("True to this belief, City #" + cityname + "’s inhabitants honor everything that suggests for them the celestial city: they accumulate noble metals and rare stones, they renounce all ephemeral excesses, they develop forms of composite composure.");
text.push("They also believe, these inhabitants, that another City #" + cityname + " exists underground, the receptacle of everything base and unworthy that happens to them, and it is their constant care to erase from the visible City #" + cityname + " every tie or resemblance to the lower twin.");
text.push("In the place of roofs they imagine that the underground city has overturned rubbish bins, with cheese rinds, greasy paper, fish scales, dishwater, uneaten spaghetti, old bandages spilling from them.");
text.push("Or even that its substance is dark and malleable and thick, like the pitch that pours down from the  sewers, prolonging the route of the human bowels, from black hole to black hole, until it splatters against the lowest subterranean floor, and from the lazy, encircled bubbles below, layer upon layer, a fecal city rises, with twisted spires.");
text.push("In City #" + cityname + "’s beliefs there is an element of truth and one of error.");
text.push("It is true that the city is accompanied by two projections of itself, one celestial and one infernal; but the citizens are mistaken about their consistency.");
text.push("The inferno that broods in the deepest subsoil of City #" + cityname + " is a city designed by the most authoritative architects, built with the most expensive materials on the market, with every device and mechanism and gear system functioning, decked with tassels and fringes and frills hanging from all the pipes and levers.");
text.push("Intent on piling up its carats of perfection, City #" + cityname + " takes for virtue what is now a grim mania to fill the empty vessel of itself; the city does not know that its only moments of generous abandon are those when it becomes detached from itself, when it lets go, expands.");
text.push("Still, at the zenith of City #" + cityname + " there gravitates a celestial body that shines with all the city’s riches, enclosed in the treasury of cast-off things: a planet a-flutter with potato peels, broken umbrellas, old socks, candy wrappings, paved with tram tickets, fingernail-cuttings and pared calluses, eggshells.");
text.push("This is the celestial city, and in its heavens long-tailed comets fly past, released to rotate in space from the only free and happy action of the citizens of City #" + cityname + ", a city which, only when it shits, is not miserly, calculating, greedy.");
	/* City 40: Leonia */
text.push("City #" + cityname + " refashions itself every day: every morning the people wake between fresh sheets, wash with just-unwrapped cakes of soap, wear brand-new clothing, take from the latest model refrigerator still unopened tins, listening to the last-minute jingles from the most up-to-date radio.");
text.push("On the sidewalks, encased in spotless plastic bags, the remains of yesterday’s City #" + cityname + " await the garbage truck.");
text.push("Not only squeezed tubes of toothpaste, blown-out light bulbs, newspapers, containers, wrappings, but also boilers, encyclopedias, pianos, procelain dinner services.");
text.push("It is not so much by the things that each day are manufactured, sold, bought that you can measure City #" + cityname + "’s opulence, but rather by the things that each day are thrown out to make room for the new.");
text.push("So you begin to wonder if City #" + cityname + "’s true passion is really, as they say, the enjoyment of new and different things, and not, instead, the joy of expelling, discarding, cleansing itself of a recurrent impurity.");
text.push("The fact is that street cleaners are welcomed like angels, and their task of removing the residue of yesterday’s existence is surrounded by a respectful silence, like a ritual that inspires devotion, perhaps only because once things have been cast off nobody wants to have to think about them further.");
text.push("Nobody wonders where, each day, they carry their load of refuse.");
text.push("Outside the city, surely; but each year the city expands, and the street cleaners have to fall farther back.");
text.push("The bulk of the outflow increases and the piles rise higher, become stratified, extend over a wider perimeter.");
text.push("Besides, the more City #" + cityname + "’s talent for making new materials excels, the more the rubbish improves in quality, resists time, the elements, fermentations, combustions.");
text.push("A fortress of indestructible leftovers surrounds City #" + cityname + ", dominating it on every side, like a chain of mountains.");
text.push("This is the result: the more City #" + cityname + " expels goods, the more it accumulates them; the scales of its past are soldered into a cuirass that cannot be removed.");
text.push("As the city is renewed each day, it preserves all of itself in its only definitive form: yesterday’s sweepings piled up on the sweepings of the day before yesterday and of all its days and years and decades.");
text.push("City #" + cityname + "’s rubbish little by little would invade the world, if, from beyond the final crest of its boundless rubbish heap, the street cleaners of other cities were not pressing, also pushing mountains of refuse in front of themselves.");
text.push("Perhaps the whole world, beyond City #" + cityname + "’s boundaries, is covered by craters of rubbish, each surrounding a metropolis in constant eruption.");
text.push("The boundaries between the alien, hostile cities are infected ramparts where the detritus of both support each other, overlap, mingle.");
text.push("The greater its height grows, the more the danger  of a landslide looms: a tin can, an old tire, an unraveled wine Bask, if it rolls toward City #" + cityname + ", is enough to bring with it an avalanche of unmated shoes, calendars of bygone years, withered flowers, submerging the city in its own past, which it had tried in vain to reject, mingling with the past of the neighboring cities, finally clean.");
text.push("A cataclysm will flatten the sordid mountain range, canceling every trace of the metropolis always dressed in new clothes.");
text.push("In the nearby cities they are all ready, waiting with bulldozers to flatten the terrain, to push into the new territory, expand, and drive the new street cleaners still farther out.");
	/* City 41: Irene */
text.push("City #" + cityname + " is the city visible when you lean out from the edge of the plateau at the hour when the lights come on, and in the limpid air, the pink of the settlement can be discerned spread out in the distance below: where the windows are more concentrated, where it thins out in dimly lighted alleys, where it collects the shadows of gardens, where it raises towers with signal fires; and if the evening is misty, a hazy glow swells like a milky sponge at the foot of the gulleys.");
text.push("Travelers on the plateau, shepherds shifting their flocks, bird-catchers watching their nets, hermits gathering greens: all look down and speak of City #" + cityname + ".");
text.push("At times the wind brings a music of bass drums and trumpets, the bang of firecrackers in the light-display of a festival; at times the rattle of guns, the explosion of a powder magazine in the sky yellow with the fires of civil war.");
text.push("Those who look down from the heights conjecture about what is happening in the city; they wonder if it would be pleasant or unpleasant to be in City #" + cityname + " that evening.");
text.push("Not that they have any intention of going there (in any case the roads winding down to the valley are bad), but City #" + cityname + " is a magnet for the eyes and thoughts of those who stay up above.");
text.push("At this point Kublai Khan expects Marco to speak of City #" + cityname + " as it is seen from within.");
text.push("But Marco cannot do this: he has not succeeded in discovering which is the city that those of the plateau call City #" + cityname + ".");
text.push("For that matter, it is of slight importance: if you saw it, standing in its midst, it would be a different city; City #" + cityname + " is a name for a city in the distance, and if you approach, it changes.");
text.push("For those who pass it without entering, the city is one thing; it is another for those who are trapped by it and never leave.");
text.push("There is the city where you arrive for the first time; and there is another city which you leave never to return.");
text.push("Each deserves a different name; perhaps I have already spoken of City #" + cityname + " under other names; perhaps I have spoken only of City #" + cityname + ".");
	/* City 42: Argia */
text.push("What makes City #" + cityname + " different from other cities is that it has earth instead of air.");
text.push("The streets are completely filled with dirt, clay packs the rooms to the ceiling, on every stair another stairway is set in negative, over the roofs of the houses hang layers of rocky terrain like skies with clouds.");
text.push("We do not know if the inhabitants can move about the city, widening the worm tunnels and the crevices where roots twist: the dampness destroys people’s bodies and they have scant strength; everyone is better off remaining still, prone; anyway, it is dark.");
text.push("From up here, nothing of City #" + cityname + " can be seen; some say, “It’s down below there,” and we can only believe them.");
text.push("The place is deserted.");
text.push("At night, putting your ear to the ground, you can sometimes hear a door slam.");
	/* City 43: Thekla */
text.push("Those who arrive at City #" + cityname + " can see little of the city,  beyond the plank fences, the sackcloth screens, the scaffoldings, the metal armatures, the wooden catwalks hanging from ropes or supported by sawhorses, the ladders, the trestles.");
text.push("If you ask, “Why is City #" + cityname + "’s construction taking such a long time?” the inhabitants continue hoisting sacks, lowering leaded strings, moving long brushes up and down, as they answer, “So that its destruction cannot begin.”");
text.push("And if asked whether they fear that, once the scaffoldings are removed, the city may begin to crumble and fall to pieces, they add hastily, in a whisper, “Not only the city.”");
text.push("If, dissatisfied with the answers, someone puts his eye to a crack in a fence, he sees cranes pulling up other cranes, scaffoldings that embrace other scaffoldings, beams that prop up other beams.");
text.push("“What meaning does your construction have?” he asks.");
text.push("“What is the aim of a city under construction unless it is a city? Where is the plan you are following, the blueprint?”");
text.push("“We will show it to you as soon as the working day is over; we cannot interrupt our work now,” they answer.");
text.push("Work stops at sunset.");
text.push("Darkness falls over the building site.");
text.push("The sky is filled with stars.");
text.push("“There is the blueprint,” they say.");
	/* City 44: Trude */
text.push("If on arriving at Trude I had not read the city’s name written in big letters, I would have thought I was landing at the same airport from which I had taken off.");
text.push("The suburbs they drove me through were no different from the others, with the same little greenish and yellowish houses.");
text.push("Following the same signs we swung around the same flower beds in the same squares.");
text.push("The downtown streets displayed goods, packages, signs that had not changed at all.");
text.push("This was the first time I had come to Trude, but I already knew the hotel where I happened to be lodged; I had already heard and spoken my dialogues with the buyers and sellers of hardware; I had ended other days identically, looking through the same goblets at the same swaying navels.");
text.push("Why come to Trude? I asked myself.");
text.push("And I already wanted to leave.");
text.push("“You can resume your flight whenever you like,” they said to me, “but you will arrive at another Trude, absolutely the same, detail by detail. The world is covered by a sole City #" + cityname + " which does not begin and does not end. Only the name of the airport changes.”");
	/* City 45: Olinda */
text.push("In City #" + cityname + ", if you go out with a magnifying glass and hunt carefully, you may find somewhere a point no bigger than the head of a pin which, if you look at it slightly enlarged, reveals within itself the roofs, the antennas, the skylights, the gardens, the pools, the streamers across the streets, the kiosks in the squares, the horse-racing track.");
text.push("That point does not remain there: a year later you will find it the size of half a lemon, then as large as a mushroom, then a soup plate.");
text.push("And then it becomes a full-size city, enclosed within the earlier city: a new city that forces its way ahead in the earlier city and presses it toward the outside.");
text.push("City #" + cityname + " is certainly not the only city that grows in concentric circles, like tree trunks which each year add one more ring.");
text.push("But in other cities there remains, in the center, the old narrow girdle of the walls from which the withered spires rise, the towers, the tiled roofs, the domes, while the new quarters sprawl around them like a loosened belt.");
text.push(" Not City #" + cityname + ": the old walls expand bearing the old quarters with them, enlarged, but maintaining their proportions on a broader horizon at the edges of the city; they surround the slightly newer quarters, which also grew up on the margins and became thinner to make room for still more recent ones pressing from inside; and so, on and on, to the heart of the city, a totally new City #" + cityname + " which, in its reduced dimensions retains the features and the flow of lymph of the first City #" + cityname + " and of all the Olindas that have blossomed one from the other; and within this innermost circle there are already blossoming—though it is hard to discern them—the next City #" + cityname + " and those that will grow after it.");
	/* City 46: Laudomia */
text.push("Like City #" + cityname + ", every city has at its side another city whose inhabitants are called by the same names: it is the City #" + cityname + " of the dead, the cemetery.");
text.push("But City #" + cityname + "’s special faculty is that of being not only double, but triple; it comprehends, in short, a third City #" + cityname + ", the city of the unborn.");
text.push("The properties of the double city are well known.");
text.push("The more the City #" + cityname + " of the living becomes crowded and expanded, the more the expanse of tombs increases beyond the walls.");
text.push("The streets of the City #" + cityname + " of the dead are just wide enough to allow the gravedigger’s cart to pass, and many windowless buildings look out on them; but the pattern of the streets and the arrangement of the dwellings repeat those of the living City #" + cityname + ", and in both, families are more and more crowded together, in compartments crammed one above the other.");
text.push("On fine afternoons the living population pays a visit to the dead and they decipher their own names on their stone slabs: like the city of the living, this other city communicates a history of toil, anger, illusions, emotions; only here all has become necessary, divorced from chance, categorized, set in order.");
text.push("And to feel sure of itself, the living City #" + cityname + " has to seek in the City #" + cityname + " of the dead the explanation of itself, even at the risk of finding more there, or less: explanations for more than one City #" + cityname + ", for different cities  that could have been and were not, or reasons that are incomplete, contradictory, disappointing.");
text.push("Rightly, City #" + cityname + " assigns an equally vast residence to those who are still to be born.");
text.push("Naturally the space is not in proportion to their number, which is presumably infinite, but since the area is empty, surrounded by an architecture all niches and bays and grooves, and since the unborn can be imagined of any size, big as mice or silkworms or ants or ants’ eggs, there is nothing against imagining them erect or crouching on every object or bracket that juts from the walls, on every capital or plinth, lined up or dispersed, intent on the concerns of their future life, and so you can contemplate in a marble vein all City #" + cityname + " of a hundred or a thousand years hence, crowded with multitudes in clothing never seen before, all in eggplant-colored barracans, for example, or with turkey feathers on their turbans, and you can recognize your own descendants and those of other families, friendly or hostile, of debtors and creditors, continuing their affairs, revenges, marrying for love or for money.");
text.push("The living of City #" + cityname + " frequent the house of the unborn to interrogate them: footsteps echo beneath the hollow domes; the questions are asked in silence; and it is always about themselves that the living ask, not about those who are to come");
text.push("One man is concerned with leaving behind him an  illustrious reputation, another wants his shame to be forgotten; all would like to follow the thread of their own actions’ consequences; but the more they sharpen their eyes, the less they can discern a continuous line; the future inhabitants of City #" + cityname + " seem like dots, grains of dust, detached from any before or after.");
text.push("The City #" + cityname + " of the unborn does not transmit, like the city of the dead, any sense of security to the inhabitants of the living City #" + cityname + ": only alarm.");
text.push("In the end, the visitors’ thoughts find two paths open before them, and there is no telling which harbors more anguish: either you must think that the number of the unborn is far greater than the total of all the living and all the dead, and then in every pore of the stone there are invisible hordes, jammed on the funnel-sides as in the stands of a stadium, and since with each generation City #" + cityname + "’s descendants are multiplied, every funnel contains hundreds of other funnels each with millions of persons who are to be born, thrusting their necks out and opening their mouths to escape suffocation.");
text.push("Or else you think that City #" + cityname + ", too, will disappear, no telling when, and all its citizens with it; in other words the generations will follow one another until they reach a certain number and will then go no further.");
text.push("Then the City #" + cityname + " of the dead and that of the unborn are like  the two bulbs of an hourglass which is not turned over; each passage between birth and death is a grain of sand that passes the neck, and there will be a last inhabitant of City #" + cityname + " born, a last grain to f.lll, which is now at the top of the pile, waiting.");
	/* City 47: Perinthia */
text.push("Summoned to lay down the rules for the foundation of City #" + cityname + ", the astronomers established the place and the day according to the position of the stars; they drew the intersecting lines of the decumanus and the cardo, the first oriented to the passage of the sun and the other like the axis on which the heavens turn.");
text.push("They divided the map according to the twelve houses of the zodiac so that each temple and each neighborhood would receive the proper influence of the favoring constellations; they fixed the point in the walls where gates should be cut, foreseeing how each would frame an eclipse of the moon in the next thousand years.");
text.push("City #" + cityname + "—they guaranteed—would reflect the harmony of the firmament; nature’s reason and the gods’ benevolence would shape the inhabitants’ destinies.");
text.push("Following the astronomers’ calculations precisely, City #" + cityname + " was constructed; various peoples came to populate it; the first generation born in City #" + cityname + " began to grow within its walls; and these citizens reached the age to marry and have children.");
text.push("In City #" + cityname + "’s streets and square today you encounter cripples, dwarfs, hunchbacks, obese men, bearded women.");
text.push("But the worse cannot be seen; guttural howls are heard from cellars and lofts, where families hide children with three heads or with six legs.");
text.push("City #" + cityname + "’s astronomers are faced with a difficult choice.");
text.push("Either they must admit that all their calculations were wrong and their figures are unable to describe the heavens, or else they must reveal that the order of the gods is reflected exactly in the city of monsters.");
	/* City 48: Procopia*/
text.push("Each year in the course of my travels I stop at City #" + cityname + " and take lodgings in the same room in the same inn.");
text.push("Ever since the first time I have lingered to contemplate the landscape to be seen by raising the curtain at the window: a ditch, a bridge, a little wall, a medlar, a field of corn, a bramble patch’ with blackberries, a chicken yard, the yellow hump of a hill, a white cloud, a stretch of blue sky shaped like a trapeze.");
text.push("The first time I am sure there was no one to be seen it was only the following year that, at a movement among the leaves, I could discern a round, flat face, gnawing on an ear of corn.");
text.push("A year later there were three of them on the wall, and at my return I saw six, seated in a row, with their hands on their knees and some medlars in a dish.");
text.push("Each year, as soon as I entered the room, I raised the curtain and counted more faces: sixteen, including those down in the ditch; twenty-nine, of whom eight were perched in the medlar; forty-seven, besides those in the chicken house.");
text.push("They look alike, they seem polite, they have freckles on their cheeks, they smile, some have lips stained by blackberries.");
text.push("Soon I saw the whole bridge filled with round-faced characters, huddled, because they had no more room to move ini they chomped the kernels of corn, then they gnawed on the ears.");
text.push("And so, as year followed year, I saw the ditch  vanish, the tree, the bramble patch, hidden by hedges of calm smiles, between round cheeks, moving, chewing leaves.");
text.push("You have no idea how many people can be contained in a confined space like that little field of corn, especially when they are seated, hugging their knees, motionless.");
text.push("They must have been many more than they seemed: I saw the hump of the hill become covered with a thicker and thicker crowd; but now that the ones on the bridge have got into the habit of straddling one another’s shoulders, my gaze can no longer reach that far.");
text.push("This year, finally, as I raise the curtain, the window frames only an expanse of faces: from one corner to the other, at all levels and all distances, those round, motionless, entirely flat faces are seen, with a hint of a smile, and in their midst, many hands, grasping the shoulders of those in front.");
text.push("Even the sky has disappeared.");
text.push("I might as well leave the window.");
text.push("Not that it is easy for me to move.");
text.push("There are twenty-six of us lodged in my room: to shift my feet I have to disturb those crouching on the floor, I force my way among the knees of those seated on the chest of drawers and the elbows of those taking turns leaning on the bed: all very polite people, luckily.");
	/* City 49: Raissa*/
text.push("In City #" + cityname + ", life is not happy.");
text.push("People wring their hands as they walk in the streets, curse the crying children, lean on the railings over the river and press their fists to their temples.");
text.push("In the morning you wake from one bad dream and another begins.");
text.push("At the workbenches where, every moment, you hit your finger with a hammer or prick it with a needle, or over the columns of figures all awry in the ledgers of merchants and bankers, or at the rows of empty glasses on the zinc counters of the wineshops, the bent heads at least conceal the general grim gaze.");
text.push("Inside the houses it is worse, and you do not have to enter to learn this: in the summer the windows resound with quarrels and broken dishes.");
text.push("And yet, in City #" + cityname + ", at every moment there is a child in a window who laughs seeing a dog that has jumped on a shed to bite into a piece of polenta dropped by a stonemason who has shouted from the top of the scaffolding.");
text.push("“Darling, let me dip into it,” to a young serving-maid who holds up a dish of ragout under the pergola, happy to serve it to the umbrella-maker who is celebrating a successful transaction, a white lace parasol bought to display at the races by a great lady in love with an officer who has smiled at her taking the last jump, happy man, and still happier his horse, flying over the obstacles, seeing a francolin flying in the sky, happy bird freed  from its cage by a painter happy at having painted it feather by feather, speckled with red and yellow in the illumination of that page in the volume where the philosopher says: “Also in City #" + cityname + ", city of sadness, there runs an invisible thread that binds one living being to another for a moment, then unravels, then is stretched again between moving points as it draws new and rapid patterns so that at every second the unhappy city contains a happy city unaware of its own existence.”");
	/* City 50: Andria*/
text.push("City #" + cityname + " was built so artfully that its every street follows a planet’s orbit, and the buildings and the places of community life repeat the order of the constellations and the position of the most luminous stars: Antares, Alpheratz, Capricorn, the Cepheids.");
text.push("The city’s calendar is so regulated that jobs and offices and ceremonies are arranged in a map corresponding to the firmament on that date: and thus the days on earth and the nights in the sky reflect each other.");
text.push("Though it is painstakingly regimented, the city’s life flows calmly like the motion of the celestial bodies and it acquires the inevitability of phenomena not subject to human caprice.");
text.push("In praising City #" + cityname + "’s citizens for their productive industry and their spiritual ease, I was led to say: I can well understand how you, feeling yourselves part of an unchanging heaven, cogs in a meticulous clockwork, take care not to make the slightest change in your city and your habits.");
text.push("City #" + cityname + " is the only city I know where it is best to remain motionless in time.");
text.push("They looked at one another dumbfounded.");
text.push("“But why? Whoever said such a thing?”");
text.push("And they led me to visit a suspended street recently opened over a bamboo grove, a shadow-theater under construction in the place of the municipal kennels, now moved to the pavilions of the former lazaretto, abolished when  the last plague victims were cured, and—just inaugurated—a river port, a statue of Thales, a toboggan slide.");
text.push("“And these innovations do not disturb your city’s astral rhythm?” I asked.");
text.push("“Our city and the sky correspond so perfectly,” they answered, “that any change in City #" + cityname + " involves some novelty among the stars.”");
text.push("The astronomers, after each change takes place in City #" + cityname + ", peer into their telescopes and report a nova’s explosion, or a remote point in the firmament’s change of color from orange to yellow, the expansion of a nebula, the bending of a spiral of the Milky Way.");
text.push("Each change implies a sequence of other changes, in City #" + cityname + " as among the stars: the city and the sky never remain the same.");
text.push("As for the character of City #" + cityname + "’s inhabitants, two virtues are worth mentioning: self-confidence and prudence.");
text.push("Convinced that every innovation in the city influences the sky’s pattern, before taking any decision they calculate the risks and advantages for themselves and for the city and for all worlds.");
	/* City 51: Cecilia*/
text.push("You reproach me because each of my stories takes you right into the heart of a city without telling you of the space that stretches between one city and the other, whether it is covered by seas, or fields of rye, larch forests, swamps");
text.push("I will answer you with a story.");
text.push("In the streets of City #" + cityname + ", an illustrious city, I met once a goatherd, driving a tinkling flock along the walls.");
text.push("“Man blessed by heaven,” he asked me, stopping, “can you tell me the name of the city in which we are?”");
text.push("“May the gods accompany you!” I cried.");
text.push("“How can you fail to recognize the illustrious City #" + cityname + "?”");
text.push("“Bear with me,” that man answered. “I am a wandering herdsman. Sometimes my goats and I have to pass through cities; but we are unable to distinguish them. Ask me the names of the grazing lands: I know them all, the Meadow between the Cliffs, the Green Slope, the Shadowed Grass. Cities have no name for me: they are places without leaves, separating one pasture from another, and where the goats are frightened at street corners and scatter. The dog and I run to keep the flock together.”");
text.push("“I am the opposite of you,” I said.");
text.push("“I recognize only cities and cannot distinguish what is outside them. In uninhabited places each stone and each   clump of grass mingles, in my eyes, with every other stone and clump.”");
text.push("Many years have gone by since then; I have known many more cities and I have crossed continents.");
text.push("One day I was walking among rows of identical houses; I was lost.");
text.push("I asked a passerby: “May the immortals protect you, can you tell me where we are?” “In City #" + cityname + ", worse luck!” he answered. “We have been wandering through its streets, my goats and I, for an age, and we cannot find our way out.”");
text.push("I recognized him, despite his long white beard; it was the same herdsman of long before.");
text.push("He was followed by a few, mangy goats, which did not even stink, they were so reduced to skin-and-bones.");
text.push("They cropped wastepaper in the rubbish bins.");
text.push("“That cannot be!” I shouted.");
text.push("“I, too, entered a city, I cannot remember when, and since then I have gone on, deeper and deeper into its streets. But how have I managed to arrive where you say, when I was in another city, far far away from City #" + cityname + ", and I have not yet left it?” “The places have mingled,” the goatherd said.");
text.push("“City #" + cityname + " is everywhere. Here, once upon a time, there must have been the Meadow of the Low Sage. My goats recognize the grass on the traffic island.”");
	/* City 52: Marozia*/
text.push("A sibyl, questioned about City #" + cityname + "’s fate, said, “I see two cities: one of the rat, one of the swallow.”");
text.push("This was the interpretation of the oracle: today City #" + cityname + " is a city where all run through leaden passages like packs of rats who tear from one another’s teeth the leftovers which fall from the teeth of the most voracious ones; but a new century is about to begin in which all the inhabitants of City #" + cityname + " will fly like swallows in the summer sky, calling one another as in a game, showing off, their wings still, as they swoop, clearing the air of mosquitos and gnats.");
text.push("“It is time for the century of the rat to end and the century of the swallow to begin,” the more determined said.");
text.push("In fact, already beneath the grim and petty rattish dominion, you could sense, among the less obvious people a pondering, the preparation of a swallowlike flight, heading for the transparent air with a deft flick of the tail, then tracing with their wings’ blade the curve of an opening horizon.");
text.push("I have come back to City #" + cityname + " after many years: for some time the sibyl’s prophecy is considered to have come true; the old century is dead and buried, the new is at its climax.");
text.push("The city has surely changed, and perhaps for the better.");
text.push("But the wings I have seen moving about are those of suspicious umbrellas under which heavy eyelids are lowered; there are people who believe they are flying, but it is already an  achievement if they can get off the ground flapping their bat like overcoats.");
text.push("It also happens that, if you move along City #" + cityname + "’s compact walls, when you least expect it, you see a crack open and a different city appear.");
text.push("Then, an instant later, it has already vanished.");
text.push("Perhaps everything lies in knowing what words to speak, whit actions to perform, and in what order and rhythm; or else someone s gaze, answer, gesture is enough; it is enough for someone to do something for the sheer pleasure of doing it, and for his pleasure to become the pleasure of others: at that moment, all spaces change, all heights, distances; ,the city is transfigured, becomes crystalline, transparent as a dragonfly.");
text.push("But everything must happen as if by chance, without attaching too much importance to it, without insisting that you are performing a decisive operation, remembering clearly that any moment the old Marazia will return and solder its ceiling of stone, cobwebs, and mold over all heads.");
text.push("Was the oracle mistaken? Not necessarily.");
text.push("I interpret it in this way: City #" + cityname + " consists of two cities, the rat’s and the swallow’s; both change with time, but their relationship does not change; the second is the one about to free itself from the first.");
	/* City 53:  Penthesilea*/
text.push("To tell you about City #" + cityname + " I should begin by describing the entrance to the city.");
text.push("You, no doubt, imagine seeing a girdle of walls rising from the dusty plain as you slowly approach the gate, guarded by customs men who are already casting oblique glances at your bundles.");
text.push("Until you have reached it you are outside it; you pass beneath an archway and you find yourself within the city; its compact thickness surrounds you; carved in its stone there is a pattern that will be revealed to you if you follow its jagged outline.");
text.push("If this is what you believe, you are wrong: City #" + cityname + " is different.");
text.push("You advance for hours and it is not clear to you whether you are already in the city’s midst or still outside it.");
text.push("Like a lake with low shores lost in swamps, so City #" + cityname + " spreads for miles around, a soupy city diluted in the plain; pale buildings back to back in mangy fields, among plank fences and corrugated-iron sheds.");
text.push("Every now and then at the edges of the street a cluster of constructions with shallow facades, very tall or very low, like a snaggle-toothed comb, seems to indicate that from there the city’s texture will thicken.");
text.push("If you ask the people you meet, “Where is City #" + cityname + "?” they make a broad gesture which may mean “Here,” or else “Farther on,” or “All around you,” or even “In the opposite direction.” “I mean the city,” you ask, insistently.");
text.push("“We come here every morning to work,” someone answers, while others say, “We come back here at night to sleep.” “But the city where people live?” you ask.");
text.push("“It must be that way,” they say, and some raise their arms obliquely toward an aggregation of opaque polyhedrons on the horizon, while others indicate, behind you, the specter of other spires.");
text.push("“Then I’ve gone past it without realizing it?” “No, try going on straight ahead.” And so you continue, passing from outskirts to outskirts, and the time comes to leave City #" + cityname + ".");
text.push("You ask for the road out of the city; you pass again the string of scattered suburbs like a freckled pigmentation; night falls; windows come alight, here more concentrated, sparser there.");
text.push("You have given up trying to understand whether, hidden in some sac or wrinkle of these dilapidated surroundings there exists a City #" + cityname + " the visitor can recognize and remember, or whether City #" + cityname + " is only the outskirts of itself.");
text.push("The question that now begins to gnaw at your mind is more anguished: outside City #" + cityname + " does an outside exist?");
text.push("Or, no matter how far you go from the city, will you only pass from one limbo to another, never managing to leave it?");
	/* City 54:  Theodora*/
text.push("Recurrent invasions racked City #" + cityname + " in the centuries of its history; no sooner was one enemy routed than another gained strength and threatened the survival of the inhabitants.");
text.push("When the sky was cleared of condors, they had to face the propagation of serpents; the spiders’ extermination allowed the flies to multiply into a black swarm; the victory over the termites left the city at the mercy of the woodworms.");
text.push("One by one the species incompatible to the city had to succumb and were extinguished.");
text.push("By dint of ripping away scales and carapaces, tearing off elytra and feathers, the people gave City #" + cityname + " the exclusive image of human city that still distinguishes it.");
text.push("But first, for many long years, it was uncertain whether or not the final victory would not go to the last species left to fight man’s possession of the city: the rats.");
text.push("From each generation of rodents that the people managed to exterminate, the few surviviors gave birth to a tougher progeny, invulnerable to traps and resistant to all poison.");
text.push("In the space of a few weeks, the sewers of City #" + cityname + " were repopulated with hordes of spreading rats.");
text.push("At last, with an extreme massacre, the murderous, versatile ingenuity of mankind defeated the overweening life-force of the enemy.");
text.push("The city, great cemetery of the animal kingdom, was closed, aseptic, over the final buried corpses with their last fleas and their last germs.");
text.push("Man had finally reestablished the order of the world which he had himself upset: no other living species existed to cast any doubts.");
text.push("To recall what had been fauna, City #" + cityname + "’s library would preserve on its shelves the volumes of Buffon and Linnaeus.");
text.push("At least that is what City #" + cityname + "’s inhabitants believed, far from imagining that a forgotten fauna was stirring from its lethargy.");
text.push("Relegated for long eras to remote hiding places, ever since it had been deposed by the system of nonextinct species, the other fauna was coming back to the light from the library’s basements where the incunabula were kept; it was leaping from the capitals and drainpipes, perching at the sleepers’ bedside.");
text.push("Sphinxes, griffons, chimeras, dragons, hircocervi, harpies, hydras, unicorns, basilisks were resuming possession of their city.");
	/* City 55:  Berenice*/
text.push("I should not tell you of City #" + cityname + ", the unjust city, which crowns with triglyphs, abaci, metopes the gears of its meat-grinding machines (the men assigned to polishing, when they raise their chins over the balustrades and contemplate the atria, stairways, porticos, feel even more imprisoned and short of stature).");
text.push("Instead, I should tell you of the hidden City #" + cityname + ", the city of the just, handling makeshift materials in the shadowy rooms behind the shops and beneath the stairs, linking a network of wires and pipes and pulleys and pistons and counterweights that infiltrates like a climbing plant among the great cogged wheels (when they jam, a subdued ticking gives warning that a new precision mechanism is governing the city).");
text.push("Instead of describing to you the perfumed pools of the baths where the unjust of City #" + cityname + " recline and weave their intrigues with rotund eloquence and observe with a proprietary eye the rotund flesh of the bathing odalisques, I should say to you how the just, always cautious to evade the spying sycophants and the Janizaries’ mass arrests, recognize one another by their way of speaking, especially their pronunciation of commas and parentheses; from their habits which remain austere and innocent, avoiding complicated and nervous moods; from their sober but tasty cuisine, which evokes an ancient golden age: rice and celery soup, boiled beans, fried squash flowers.");
text.push("From these data it is possible to deduce an image of the future City #" + cityname + ", which will bring you closer to knowing the truth than any other information about the city as it is seen today.");
text.push("You must nevertheless bear in mind what I am about to say to you: in the seed of the city of the just, a malignant seed is hidden, in its turn: the certainty and pride of being in the right—and of being more just than many others who call themselves more just than the just.");
text.push("This seed ferments in bitterness, rivalry, resentment; and the natural desire of revenge on the: unjust is colored by a yearning to be in their place and to act as they do.");
text.push("Another unjust city, though different from the first, is digging out its space within the double sheath of the unjust and just Berenices.");
text.push("Having said this, I do not wish your eyes to catch a distorted image, so I must draw your attention to an intrinsic quality of this unjust city germinating secretly inside the secret just city: and this is the possible awakening—as if in an excited opening of windows-of a later love for justice, not yet subjected to rules, capable of reassembling a city still more just than it was before it became the vessel of injustice.");
text.push("But if you peer deeper into this new germ of justice you can discern a tiny spot that is spreading like the mounting tendency to impose what is  just through what is unjust, and perhaps this is the germ of an immense metropolis....");
text.push("From my words you will have reached the conclusion that the real City #" + cityname + " is a temporal succession of different cities, alternately just and unjust.");
text.push("But what I wanted to warn you about is something else: all the future Berenices are already present in this instant, wrapped one within the other, confined, crammed, inextricable.");


// console.log(text[0]);