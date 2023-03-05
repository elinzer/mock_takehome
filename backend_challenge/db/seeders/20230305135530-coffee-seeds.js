'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Coffees', [
      {
        name: 'Café au lait',
        year: 1850,
        caffeineContent: 0.1,
        caffeinePercentage: 0.1,
      },
      {
        name: 'Café con leche',
        year: 1850,
        caffeineContent: 0.1,
        caffeinePercentage: 0.1,
      },
      {
        name: 'Café crema',
        year: 1850,
        caffeineContent: 0.1,
        caffeinePercentage: 0.1,
      },
      {
        name: 'Café Cubano',
        year: 1850,
        caffeineContent: 0.1,
        caffeinePercentage: 0.1,
      },
      {
        name: 'Café de olla',
        year: 1850,
        caffeineContent: 0.1,
        caffeinePercentage: 0.1,
      }
    ]);

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Coffees', null, {});
  }
};
