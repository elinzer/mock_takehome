'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.Coffee, {
        foreignKey: "coffee",
      });
    }
  }
  Post.init({
    title: DataTypes.STRING,
    coffee: DataTypes.INTEGER,
    text: DataTypes.STRING(1000),
    rating: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
