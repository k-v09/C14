const { User } = require('../models');

const userData = [
  {
    username: 'johnDoe',
    email: 'john.doe@example.com',
    password: 'password123'
  },
  {
    username: 'janeDoe',
    email: 'jane.doe@example.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;
