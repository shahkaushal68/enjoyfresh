'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('zipcodes', [
      {
        zipCode: 396445,
        cityId: 986
      },
      {
        zipCode: 380001,
        cityId: 783
      },
      {
        zipCode: 380002,
        cityId: 783
      },
      {
        zipCode: 380003,
        cityId: 783
      },
      {
        zipCode: 380004,
        cityId: 783
      },
      {
        zipCode: 380005,
        cityId: 783
      },
      {
        zipCode: 380006,
        cityId: 783
      },
      {
        zipCode: 380007,
        cityId: 783
      },
      {
        zipCode: 394101,
        cityId: 1041
      },
      {
        zipCode: 394104,
        cityId: 1041
      },
      {
        zipCode: 394105,
        cityId: 1041
      },
      {
        zipCode: 394107,
        cityId: 1041
      },
      {
        zipCode: 4000001,
        cityId: 2707
      },
      {
        zipCode: 4000002,
        cityId: 2707
      },
      {
        zipCode: 4000003,
        cityId: 2707
      },
      {
        zipCode: 4000004,
        cityId: 2707
      },
      {
        zipCode: 4000011,
        cityId: 2707
      },
      {
        zipCode: 4000012,
        cityId: 2707
      },
      {
        zipCode: 4000013,
        cityId: 2707
      },
      {
        zipCode: 4000014,
        cityId: 2707
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('zipcodes', null, {});
  }
};
