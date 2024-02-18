const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // Here we set the data type to INTEGER
      allowNull: false, // Here we disallow NULL values
      primaryKey: true, // Here we set as the primary key
      autoIncrement: true, // Automatically increment the value for each new record
    },

    category_name: {
      type: DataTypes.STRING, // Here we set the data type to STRING
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
