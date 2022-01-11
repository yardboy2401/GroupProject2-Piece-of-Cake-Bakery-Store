//requires for seeding users/store
const seedStore = require('./storeSeeds');
const seedUsers = require('./userSeeds');
const sequelize = require('../config/connection');

//seedAll method for users/store
const seedAll = async () => {
  await sequelize.sync({ force: true })
  console.log('Database Synced');

  await seedUsers();
  console.log('Users Seeded');

  await seedStore();
  console.log('Store seeded');

  process.exit(0);
};

seedAll();