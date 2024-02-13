'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('deliverytypes', [
      {
        title: 'Self-Pickup',
        slug: 'self-pickup'
      },
      {
        title: 'Self Delivery',
        slug: 'self-delivery'
      },
      {
        title: 'Dunzo-Delivery',
        slug: 'dunzo-delivery'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('deliverytypes', null, {});
  }
};
