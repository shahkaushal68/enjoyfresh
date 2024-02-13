'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.City, {
        foreignKey: 'stateId',
      });

      this.belongsTo(models.Country, {
        foreignKey: 'countryId',
      })
    }
  }
  State.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    countryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      comment: "Id of Countries as Foreign key"
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
  }, {
    sequelize,
    modelName: 'State',
    tableName: "states"
  });
  return State;
};