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
    await queryInterface.bulkInsert('Posts', [
      {
        title: 'First Cup',
        coffee: 1,
        text: "The first cup of coffee in the morning is the most important cup of coffee of the day.",
        rating: 5.0,
      },
      {
        title: 'Second Cup',
        coffee: 2,
        text: "The second cup of coffee in the morning is the most important cup of coffee of the day.",
        rating: 4.0,
      },
      {
        title: 'Third Cup',
        coffee: 3,
        text: "If I'm having a bad day, I'll have a third cup of coffee.",
        rating: 4.0,
      },

    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
