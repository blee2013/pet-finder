
const seedPet = require('./seed');



const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });

 
  await seedPet();
  console.log('--------------');

 

  process.exit(0);
};

seedAll();
