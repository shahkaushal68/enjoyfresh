'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.UserRole, {
        foreignKey: "userId"
      })
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    fullName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING
    },
    mobile: {
      type: DataTypes.STRING
    },
    otp: {
      type: DataTypes.INTEGER
    },
    profileImage: {
      type: DataTypes.STRING
    },
    privacyPolicy: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    termsAndCondition: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: "users"
  });
  return User;
};