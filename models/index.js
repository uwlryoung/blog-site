const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'userId'
});

User.hasMany(Comment, {
  foreignKey: 'userId'
});

Comment.belongsTo(User, {
  foreignKey: 'userId'
});

Post.hasMany(Comment, {
  foreignKey: 'postId'
});

Comment.belongsTo(Post, {
  foreignKey: 'postId'
});



module.exports = { User, Post, Comment };
