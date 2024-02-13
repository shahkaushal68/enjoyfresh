'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FoodSeller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FoodSeller.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id"
      },
      comment: "id of users table as foreign key"
    },
    businessName: {
      type: DataTypes.STRING
    },
    sellType: {
      type: DataTypes.INTEGER,
      comment: "Id of selltypes table as a foriegn Key"
    },
    gstNumber: {
      type: DataTypes.INTEGER
    },
    fssaiNumber: {
      type: DataTypes.INTEGER
    },
    foodType: {
      type: DataTypes.INTEGER,
      comment: "Id of foodtypes table as a foriegn Key"
    },
    zipCode: {
      type: DataTypes.INTEGER,
      comment: "Id of zipcodes table as a foriegn Key"
    },
    deliverType: {
      type: DataTypes.INTEGER,
      comment: "Id of deliverytypes table as a foriegn Key"
    },
    hereAboutUs: {
      type: DataTypes.INTEGER,
      comment: "Id of hereabouts table as a foriegn Key"
    },
    tellUsYourSelf: {
      type: DataTypes.STRING,
    },
    requestStatus: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    sequelize,
    modelName: 'FoodSeller',
    tableName: 'foodsellers'
  });
  return FoodSeller;
};