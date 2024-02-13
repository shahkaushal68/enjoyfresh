'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.State, {
        foreignKey: 'countryId'
      })
    }
  }
  Country.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    sortname: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    phonecode: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
  }, {
    sequelize,
    modelName: 'Country',
    tableName: 'countries'
  });
  return Country;
};