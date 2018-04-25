'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.User, {
      foreignKey: 'user_id',
      onDelete: 'SET NULL'
    });
  };
  return Post;
};