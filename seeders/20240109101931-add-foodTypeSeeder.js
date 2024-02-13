'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('foodtypes', [
      {
        title: 'Veg',
        slug: 'veg'
      },
      {
        title: 'Vegan',
        slug: 'vegan'
      },
      {
        title: 'Both',
        slug: 'both'
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('foodtypes', null, {});
  }
};
