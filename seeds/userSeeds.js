//require User Model
const { User } = require('../models');

//user seed data
const userData = [
    {
      "username": "Ted",
      "email": "ted@hotmail.com",
      "password": "password1234"
    },
    {
      "username": "Frank",
      "email": "frank@gmail.com",
      "password": "password1234"
    },
    {
      "username": "Johnny",
      "email": "johnny@yahoo.com",
      "password": "password1234"
    },
    {
      "username": "Jeff",
      "email": "yardboy2401@gmail.com",
      "password": "password1234"
      }
  ]

//seed users and hash passwords upon creation
const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

//export seedUsers method
module.exports = seedUsers;