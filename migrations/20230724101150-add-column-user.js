'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'qty_fail', {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'qty_fail');
  }
};
//npx sequelize-cli db:migrate
// rollback npx sequelize-cli db:migrate:undo
// undo all npx sequelize-cli db:migrate:undo:all
