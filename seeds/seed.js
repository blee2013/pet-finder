
const { Pet } = require('../models');

const petData = [
    {
        id: 1,
        name: "Bill",
        description: "Bill loves to cuddle and be petted",
        breed: "Lab",
        age: 3,
        gender: "male",
        picture: "assets/Bill.png",
        
        // user_id: 1

    },
    {
        id: 2,
        name: "Blue",
        description: "Blue likes to fetch tennis balls",
        breed: "Lab",
        age: 1,
        gender: "male",
        picture: "assets/Blue.png",
        
        // user_id: 2,

    },
    {
        id: 3,
        name: "Carly",
        description: "furry",
        breed: "Lab Mix",
        age: 3,
        gender: "female",
        picture: "assets/Carly.png",
        
        // user_id: 1

    },
    {
        id: 4,
        name: "Champ",
        description: "Loves belly rubs and treats",
        breed: "Lab Mix",
        age: 3,
        gender: "female",
        picture: "assets/Champ.png",
        
        // user_id: 1

    },
    {
        id: 5,
        name: "Charlie",
        description: "Charlie will shake for treats",
        breed: "Lab Mix",
        age: 2,
        gender: "male",
        picture: "assets/Charlie.png",
       
        // user_id: 1

    },
    {
        id: 6,
        name: "Mandy",
        description: "Mandy was named after the Barry Manilow song",
        breed: "Lab Mix",
        age: 4,
        gender: "female",
        picture: "assets/Mandy.png",
        
        // user_id: 1

    },
    {
        id: 7,
        name: "Reggie",
        description: "Reggie loves listening to Oasis music",
        breed: "Lab Mix",
        age: 5,
        gender: "male",
        picture: "assets/Reggie.png",
       
        // user_id: 1

    },
    {
        id: 8,
        name: "Ted",
        description: "Ted's full name is Ted 'Theodore' Logan",
        breed: "Lab Mix",
        age: 5,
        gender: "male",
        picture: "assets/Carly.png",
        petId: 8,
        // user_id: 1

    },
    {
        id: 9,
        name: "Whispy",
        description: "Whispy loves to eat and sleep",
        breed: "Lab Mix",
        age: 3,
        gender: "female",
        picture: "assets/Whispy.png",
        
        // user_id: 1

    },
    {
        id: 10,
        name: "Zoey",
        description: "Zoey loves to snuggle and sleep under blankets",
        breed: "Lab Mix",
        age: 2,
        gender: "female",
        picture: "assets/Zoey.png",
        
        // user_id: 1

    },


]

const seedPets =() => Pet.bulkCreate(petData);

module.exports = seedPets;