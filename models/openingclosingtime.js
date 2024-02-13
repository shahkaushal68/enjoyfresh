'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OpeningClosingTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OpeningClosingTime.init({

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    weekDayId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "weekdays",
        key: "id"
      },
      comment: "Id of weekdays table as a froeign key"
    },
    foodSellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "foodsellers",
        key: "id"
      },
      comment: "Id of foodsellers table as a froeign key"
    },
    openingTime: {
      type: DataTypes.TIME
    },
    closingTime: {
      type: DataTypes.TIME
    },

  }, {
    sequelize,
    modelName: 'OpeningClosingTime',
    tableName: "openingclosingtimes"
  });
  return OpeningClosingTime;
};