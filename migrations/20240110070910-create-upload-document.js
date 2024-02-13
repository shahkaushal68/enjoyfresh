'use strict';

const { STRING } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('uploaddocuments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      foodSellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        comment: "ths id of foodsellers table as friegn key"
      },
      aadharFrontside: {
        type: Sequelize.STRING,
        allowNull: false
      },
      aadharBackside: {
        type: Sequelize.STRING,
        allowNull: false
      },
      foodLicence: {
        type: Sequelize.STRING,
        allowNull: false
      },
      otherIdCardFrontSide: {
        type: Sequelize.STRING
      },
      otherIdCardBackSide: {
        type: Sequelize.STRING
      },
      aadharApprovalStatus: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      foodLicenceApprovalStatus: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      otherIdCardApprovalStatus: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('uploaddocuments');
  }
};