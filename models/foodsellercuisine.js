'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FoodSellerCuisine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FoodSellerCuisine.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "foodsellers",
        key: "id"
      },
      comment: "The id of foodsellers table as foriegn key"
    },
    cuisineId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "cuisines",
        key: "id"
      },
      comment: "The id of cuisines table as foriegn key"
    },
  }, {
    sequelize,
    modelName: 'FoodSellerCuisine',
    tableName: "foodsellercuisines"
  });
  return FoodSellerCuisine;
};