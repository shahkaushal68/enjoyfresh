'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('weekdays', [
      {
        name: 'All Days',
        slug: 'all-days'
      },
      {
        name: 'Monday',
        slug: 'monday'
      },
      {
        name: 'Tuesday',
        slug: 'tuesday'
      },
      {
        name: 'Wednesday',
        slug: 'wednesday'
      },
      {
        name: 'Thursday',
        slug: 'thursday'
      },
      {
        name: 'Friday',
        slug: 'friday'
      },
      {
        name: 'Saturday',
        slug: 'saturday'
      },
      {
        name: 'Sunday',
        slug: 'sunday'
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('weekdays', null, {});
  }
};
