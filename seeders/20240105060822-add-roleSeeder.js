'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles',
      [
        {
          name: 'Food Buyer',
          slug: 'food-buyer'
        },
        {
          name: 'Food Seller',
          slug: 'food-seller'
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
