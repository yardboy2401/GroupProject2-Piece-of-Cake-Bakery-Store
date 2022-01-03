const { User } = require('../models');

const userData = [
    {
      "name": "Ted",
      "email": "ted@hotmail.com",
      "role": "customer",
      "password": "password1234"
    },
    {
      "name": "Frank",
      "email": "frank@gmail.com",
      "role": "customer",
      "password": "password1234"
    },
    {
      "name": "Johnny",
      "email": "johnny@yahoo.com",
      "role": "supervisor",
      "password": "password1234"
    },
    {
        "name": "Jeff",
        "email": "yardboy2401@gmail.com",
        "role": "admin",
        "password": "password1234"
      }
  ]

  //seed users and hash passwords upon creation
const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;