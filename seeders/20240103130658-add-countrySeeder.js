'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('countries', [
      {
        "id": 1,
        "sortname": "IN",
        "name": "India",
        "phoneCode": 91
      },
     
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('countries', null, {})
  }
};
