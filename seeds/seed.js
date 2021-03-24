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
        name: "Liam",
        image: "",
        description: "furry",
        breed: "Beagle",
        age: 3,
        gender: "male",
        // user_id: 1

    },
    {
        name: "Noel",
        image: "",
        description: "furry",
        breed: "Lab",
        age: 1,
        gender: "male",
        // user_id: 2,

    },
    {
        name: "Liam",
        image: "",
        description: "furry",
        breed: "Beagle",
        age: 3,
        gender: "male",
        // user_id: 1

    },

]

const seedPets = Pet.bulkCreate(petData);

module.exports = seedPets;