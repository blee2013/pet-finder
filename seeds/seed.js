
const { Pet } = require('../models');

const petData = [
    {
        name: "Bill",
        description: "Bill loves to cuddle and be petted",
        breed: "Lab",
        age: 3,
        gender: "male",
        picture: "assets/Bill.png",
        
        // user_id: 1

    },
    {
        name: "Blue",
        description: "Blue likes to fetch tennis balls",
        breed: "Lab",
        age: 1,
        gender: "male",
        picture: "assets/Blue.png",
        // user_id: 2,

    },
    {
        name: "Carly",
        description: "furry",
        breed: "Lab Mix",
        age: 3,
        gender: "female",
        picture: "assets/Carly.png",
        // user_id: 1

    },
    {
        name: "Champ",
        description: "Loves belly rubs and treats",
        breed: "Lab Mix",
        age: 3,
        gender: "female",
        picture: "assets/Champ.png",
        // user_id: 1

    },
    {
        name: "Charlie",
        description: "Charlie will shake for treats",
        breed: "Lab Mix",
        age: 2,
        gender: "male",
        picture: "assets/Charlie.png",
        // user_id: 1

    },
    {
        name: "Mandy",
        description: "Mandy was named after the Barry Manilow song",
        breed: "Lab Mix",
        age: 4,
        gender: "female",
        picture: "assets/Mandy.png",
        // user_id: 1

    },
    {
        name: "Reggie",
        description: "Reggie loves listening to Oasis music",
        breed: "Lab Mix",
        age: 5,
        gender: "male",
        picture: "assets/Reggie.png",
        // user_id: 1

    },
    {
        name: "Ted",
        description: "Ted's full name is Ted 'Theodore' Logan",
        breed: "Lab Mix",
        age: 5,
        gender: "male",
        picture: "assets/Carly.png",
        // user_id: 1

    },
    {
        name: "Whispy",
        description: "Whispy loves to eat and sleep",
        breed: "Lab Mix",
        age: 3,
        gender: "female",
        picture: "assets/Whispy.png",
        // user_id: 1

    },
    {
        name: "Zoey",
        description: "Zoey loves to snuggle and sleep under blankets",
        breed: "Lab Mix",
        age: 2,
        gender: "female",
        picture: "assets/Zoey.png",
        // user_id: 1

    },


]

const seedPets = Pet.bulkCreate(petData);

module.exports = seedPets;