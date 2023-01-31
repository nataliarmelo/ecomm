'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const columnDefinitions = {
      type: Sequelize.INTEGER,
      references: {
        model:{ 
          tableName: 'Products'
        },
        key: 'id'
      }    
    }
    queryInterface.addColumn('Features', 'product_id', columnDefinitions);
    queryInterface.addColumn('Images', 'product_id', columnDefinitions)
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('Features', 'product_id');
    queryInterface.removeColumn('Images', 'product_id');
  }
};
