'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Change the default value of your_column_name to a new default value (e.g., '2023-07-25 12:34:56')
    await queryInterface.changeColumn('brands', 'created', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    });
    await queryInterface.changeColumn('categories', 'created', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Revert the changes in case of a rollback (if needed)
    await queryInterface.changeColumn('brands', 'created', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    });

    await queryInterface.changeColumn('categories', 'created', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    });
  }
};