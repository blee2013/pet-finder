// const sequelize = require('../config/connection');
// const { Pet, User} = require('../models');
// const userData = require('./userData.json');
// const petData = require('./petData.json');
// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });
//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });
//   for (const pet of petData) {
//     await Pet.create({
//       ...pet,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }
//   process.exit(0);
// };
// seedDatabase();
const { Pet } = require('../models');

const petData = [
    {
        id: 1,
        name: "Bill",
        image: "assets/Bill.png",
        description: "Bill loves to cuddle and be petted",
        breed: "Lab",
        age: 3,
        gender: "male",
        // user_id: 1

    },
    {
        name: "Blue",
        image: "assets/Blue.png",
        description: "Blue likes to fetch tennis balls",
        breed: "Lab",
        age: 1,
        gender: "male",
        // user_id: 2,

    },
    {
        name: "Carly",
        image: "assets/Carly.png",
        description: "furry",
        breed: "Lab Mix",
        age: 3,
        gender: "female",
        // user_id: 1

    },
    {
        name: "Champ",
        image: "assets/Champ.png",
        description: "Loves belly rubs and treats",
        breed: "Lab Mix",
        age: 3,
        gender: "female",
        // user_id: 1

    },
    {
        name: "Charlie",
        image: "assets/Charlie.png",
        description: "Charlie will shake for treats",
        breed: "Lab Mix",
        age: 2,
        gender: "male",
        // user_id: 1

    },
    {
        name: "Mandy",
        image: "assets/Mandy.png",
        description: "fMandy was named after the Barry Manilow song",
        breed: "Lab Mix",
        age: 4,
        gender: "female",
        // user_id: 1

    },
    {
        name: "Reggie",
        image: "assets/Reggie.png",
        description: "Reggie loves listening to Oasis music",
        breed: "Lab Mix",
        age: 5,
        gender: "male",
        // user_id: 1

    },
    {
        name: "Ted",
        image: "assets/Carly.png",
        description: "Ted's full name is Ted 'Theodore' Logan",
        breed: "Lab Mix",
        age: 5,
        gender: "male",
        // user_id: 1

    },
    {
        name: "Whispy",
        image: "assets/Whispy.png",
        description: "Whispy loves to eat and sleep",
        breed: "Lab Mix",
        age: 3,
        gender: "female",
        // user_id: 1

    },
    {
        name: "Zoey",
        image: "assets/Zoey.png",
        description: "Zoey loves to snuggle and sleep under blankets",
        breed: "Lab Mix",
        age: 2,
        gender: "female",
        // user_id: 1

    },


]

const seedPets = Pet.bulkCreate(petData);

module.exports = seedPets;