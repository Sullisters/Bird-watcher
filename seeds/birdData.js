const { Bird } = require('../models')

const birdData = [
    {
        // image:
        common_name:'Great Blue Heron',
        species_name:'Ardea herodias',
        bird_description:'3.2-4.5 feet as adults',
        color:'blue-gray from distance, grey, white',
        habitat:'salt and freshwater, coasts, marshes, ponds, rivers',
        migration_info:'Northern US/Canada to Mexico',
        diet:'fish, frogs, snakes, rodents, birds'
    },
    {
        // image: 
        common_name:'Sparrow',
        species_name:'Passeridae',
        bird_description:'5-7 inches as adult',
        color:'brown, grey, tan, black',
        habitat:'cities, towns, farms, forests',
        migration_info:'Canada/Alaska to Central America',
        diet:'grains, seeds, insects'
    },
    {
        // image:
        common_name:'Canada Goose',
        species_name:'Branta canadensis',
        bird_description:'2.5-3.6 feet as adult',
        color:'black, white, grey',
        habitat:'Lakes, ponds, bays, marshes, fields',
        migration_info:'Canada/Alaska to Mexico',
        diet:'grass, aquatic plants, seeds, berries'
    },
    {
        // image:
        common_name:'Mallard Duck',
        species_name:'Anas platyrhynchos',
        bird_description:'20-26 inches as adult',
        color:'grey, white, emerald green',
        habitat:'Most bodies of fresh water, some saltwater/ wetlands',
        migration_info:'Canada to Souther USA',
        diet:'seeds, roots, grasses, insects'
    },
    {
        // image:
        common_name:'Hummingbird',
        species_name:'Trochilidae',
        bird_description:'3-4 inches as adult',
        color:'large variations: bronze, green, red, brown, purple, etc',
        habitat:'woodlands, mountains, deserts, forests',
        migration_info:'NW United states to Mexico',
        diet:'insects, ants, beetles, mosquitos, wasps'
    }
]

const seedBirds = () => Bird.bulkCreate(birdData);

module.exports = seedBirds;