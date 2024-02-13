'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FoodType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FoodType.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    slug: {
      type: DataTypes.STRING
    },
    icon: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'FoodType',
    tableName: 'foodtypes'
  });
  return FoodType;
};