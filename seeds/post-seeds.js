const { Post } = require('../models');

const postData = [
  {
    title: 'Tech Blog Post 1',
    content: 'This is the content for the first post.',
    user_id: 1
  },
  {
    title: 'Tech Blog Post 2',
    content: 'This is the content for the second post.',
    user_id: 2
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
