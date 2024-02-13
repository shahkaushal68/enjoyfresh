'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('foodsellers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        comment: "Id of users table as a foriegn Key"
      },
      businessName: {
        type: Sequelize.STRING
      },
      sellType: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        comment: "Id of selltypes table as a foriegn Key"
      },
      gstNumber: {
        type: Sequelize.INTEGER
      },
      fssaiNumber: {
        type: Sequelize.INTEGER
      },
      foodType: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        comment: "Id of foodTypes table as a foriegn Key"
      },
      zipCode: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        comment: "Id of zipcodes table as a foriegn Key"
      },
      deliverType: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        comment: "Id of deliverytypes table as a foriegn Key"
      },
      hereAboutUs: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        comment: "Id of hereabouts table as a foriegn Key"
      },
      tellUsYourSelf: {
        type: Sequelize.STRING,
      },
      requestStatus: {
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
    await queryInterface.dropTable('foodsellers');
  }
};