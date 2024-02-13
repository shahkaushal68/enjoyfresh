'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('states', 
    [
        {
            "id": 1,
            "name": "Andaman and Nicobar Islands",
            "countryId": 1
          },
          {
            "id": 2,
            "name": "Andhra Pradesh",
            "countryId": 1
          },
          {
            "id": 3,
            "name": "Arunachal Pradesh",
            "countryId": 1
          },
        {
            "id": 4,
            "name": "Assam",
            "countryId": 1
        },
        {
            "id": 5,
            "name": "Bihar",
            "countryId": 1
        },
        {
            "id": 6,
            "name": "Chandigarh",
            "countryId": 1
        },
        {
            "id": 7,
            "name": "Chhattisgarh",
            "countryId": 1
        },
        {
            "id": 8,
            "name": "Dadra and Nagar Haveli",
            "countryId": 1
        },
        {
            "id": 9,
            "name": "Daman and Diu",
            "countryId": 1
        },
        {
            "id": 10,
            "name": "Delhi",
            "countryId": 1
        },
        {
            "id": 11,
            "name": "Goa",
            "countryId": 1
        },
        {
            "id": 12,
            "name": "Gujarat",
            "countryId": 1
        },
        {
            "id": 13,
            "name": "Haryana",
            "countryId": 1
        },
        {
            "id": 14,
            "name": "Himachal Pradesh",
            "countryId": 1
        },
        {
            "id": 15,
            "name": "Jammu and Kashmir",
            "countryId": 1
        },
        {
            "id": 16,
            "name": "Jharkhand",
            "countryId": 1
        },
        {
            "id": 17,
            "name": "Karnataka",
            "countryId": 1
        },
        {
            "id": 19,
            "name": "Kerala",
            "countryId": 1
        },
        {
            "id": 20,
            "name": "Lakshadweep",
            "countryId": 1
        },
        {
            "id": 21,
            "name": "Madhya Pradesh",
            "countryId": 1
        },
        {
            "id": 22,
            "name": "Maharashtra",
            "countryId": 1
        },
        {
            "id": 23,
            "name": "Manipur",
            "countryId": 1
        },
        {
            "id": 24,
            "name": "Meghalaya",
            "countryId": 1
        },
        {
            "id": 25,
            "name": "Mizoram",
            "countryId": 1
        },
        {
            "id": 26,
            "name": "Nagaland",
            "countryId": 1
        },
        {
            "id": 29,
            "name": "Odisha",
            "countryId": 1
        },
        {
            "id": 31,
            "name": "Pondicherry",
            "countryId": 1
        },
        {
            "id": 32,
            "name": "Punjab",
            "countryId": 1
        },
        {
            "id": 33,
            "name": "Rajasthan",
            "countryId": 1
        },
        {
            "id": 34,
            "name": "Sikkim",
            "countryId": 1
        },
        {
            "id": 35,
            "name": "Tamil Nadu",
            "countryId": 1
        },
        {
            "id": 36,
            "name": "Telangana",
            "countryId": 1
        },
        {
            "id": 37,
            "name": "Tripura",
            "countryId": 1
        },
        {
            "id": 38,
            "name": "Uttar Pradesh",
            "countryId": 1
        },
        {
            "id": 39,
            "name": "Uttarakhand",
            "countryId": 1
        },
        {
            "id": 41,
            "name": "West Bengal",
            "countryId": 1
        },
 

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('states', null, {});
  }
};
