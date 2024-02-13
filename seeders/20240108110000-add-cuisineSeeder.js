'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cuisines', [
      {
        title: 'Arabian',
        slug: 'arabian'
      },
      {
        title: 'Beverages',
        slug: 'beverages'
      },
      {
        title: 'American',
        slug: 'american'
      },
      {
        title: 'Chinese',
        slug: 'chinese'
      },
      {
        title: 'Continetal',
        slug: 'continetal'
      },
      {
        title: 'Indian',
        slug: 'indian'
      },
      {
        title: 'Fresh Produce',
        slug: 'fresh-produce'
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cuisines', null, {});
  }
};
