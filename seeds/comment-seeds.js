const { Comment } = require('../models');

const commentData = [
  {
    userId: 1,
    postId: 1,
    commentBody: "This is so true!",
    dateCreated: "11/04/2019",
  },
  {
    userId: 2,
    postId: 2,
    commentBody: "Not sure I can agree with this, but good research",
    dateCreated: "03/04/2023",
  },
  {
    userId: 3,
    postId: 3,
    commentBody: "Where did you get your information from?",
    dateCreated: "02/10/2023",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;