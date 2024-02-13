'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UploadDocument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UploadDocument.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    foodSellerId: {
      type: DataTypes.INTEGER,
      references: {
        model: "foodsellers",
        key: "id"
      },
      comment: "id of foodsellers table as friegn key"
    },
    aadharFrontside: {
      type: DataTypes.STRING
    },
    aadharBackside: {
      type: DataTypes.STRING
    },
    foodLicence: {
      type: DataTypes.STRING
    },
    otherIdCardFrontSide: {
      type: DataTypes.STRING
    },
    otherIdCardBackSide: {
      type: DataTypes.STRING
    },
    aadharApprovalStatus: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    foodLicenceApprovalStatus: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    otherIdCardApprovalStatus: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    sequelize,
    modelName: 'UploadDocument',
    tableName: 'uploaddocuments'
  });
  return UploadDocument;
};