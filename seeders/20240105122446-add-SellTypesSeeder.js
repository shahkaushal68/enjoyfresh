'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('selltypes', [
      {
        title: 'As a Chef',
        slug: 'as-a-chef'
      },
      {
        title: 'As a Restaurant',
        slug: 'as-a-restaurant'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('selltypes', null, {});
  }
};
