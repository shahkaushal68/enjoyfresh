'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "userId"
      });
      this.belongsTo(models.Role, {
        foreignKey: "roleId"
      })
    }
  }
  UserRole.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER,
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      comment: "id of userstable as a Foriegn key"
    },
    roleId: {
      type: DataTypes.INTEGER,
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      comment: "id of roles table as a Foriegn key"
    },
  }, {
    sequelize,
    modelName: 'UserRole',
    tableName: "userroles"
  });
  return UserRole;
};