const { Post } = require('../models');

const postData = [
  {
    title: 'Tech in the World',
    postBody: 'Today, we see lots of tech in the world.',
    dateCreated: "09/04/2019",
    userId: 1,
  },
  {
    title: 'Blogging in a New Age',
    postBody: 'It is all about making your own blog site now',
    dateCreated: "07/04/2023",
    userId: 2,
  },
  {
    title: 'Bug Maddness',
    postBody: 'Bugs continue to be an issue in people\'s code.',
    dateCreated: "01/10/2023",
    userId: 3,
  },

];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

