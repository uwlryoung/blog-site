const { User } = require('../models');

const userData = [
  {
    name: 'John Jacobs',
    email: 'jjacobs@gmail.com',
    password: "12345678:)",
    userId: 1,
    post: 1
  },
  {
    name: 'Shelli Martins',
    email: 'martinelli@yahoo.om',
    password: "12345678:)",
    userId: 2,
    post: 2
  },
  {
    name: 'Sam Withers',
    email: 'sammyw@hotmail.com',
    password: "12345678:)",
    userId: 3,
    post: 3
  },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

