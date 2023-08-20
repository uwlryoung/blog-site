const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Is it ok to have this as 'userId' intead of 'user_id'. It's a little confusing because technically we
// don't have anything called "userId" 
User.hasMany(Post, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'userId'
});

// Do I need these .hasMany associations here with the Many to Many relationships?
User.hasMany(Comment, {
  foreignKey: 'userId'
});

Post.hasMany(Comment, {
  foreignKey: 'postId'
});

// Is 'PostComments/UserComments' the idea with "through" here? We are making a new table if it doesn't exist called "PostComments" 
// and "UserComments"
User.belongsToMany(Comment, {through: 'PostComments', foreignKey: 'postId' });

Post.belongsToMany(Comment, {through: 'UserComments', foreignKey: 'userId'});

module.exports = { User, Post, Comment };
