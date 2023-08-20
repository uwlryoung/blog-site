const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

User.belongsToMany(Comment, {through: Post, foreignKey: 'postId' });

Post.belongsToMany(Comment, {through: User, foreignKey: 'userId'});

module.exports = { User, Post, Comment };
