'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BusinessLocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BusinessLocation.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    foodSellerId: {
      type: DataTypes.INTEGER,
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      comment: "id of foodSeller table as a foreign key"
    },
    lattitude: {
      type: DataTypes.DECIMAL(11, 10)
    },
    longitude: {
      type: DataTypes.DECIMAL(11, 10)
    },
    address: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'BusinessLocation',
    tableName: 'businesslocations'
  });
  return BusinessLocation;
};