'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ZipCode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ZipCode.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    zipCode: {
      type: DataTypes.INTEGER
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "cities",
        key: "id"
      },
      comment: "id of cities table as a foreign key"
    },
  }, {
    sequelize,
    modelName: 'ZipCode',
    tableName: 'zipcodes'
  });
  return ZipCode;
};