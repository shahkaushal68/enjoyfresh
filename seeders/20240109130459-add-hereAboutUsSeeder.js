'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('hereabouts', [
      {
        title: 'Social Media',
        slug: 'social-media'
      },
      {
        title: 'Through a Friend',
        slug: 'through-a-friend'
      },
      {
        title: 'Internet Advertisement',
        slug: 'internet-advertisement'
      },
      {
        title: 'Search Engine',
        slug: 'search-engine'
      },
      {
        title: 'Other',
        slug: 'other'
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('hereabouts', null, {});
  }
};
