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
    queryInterface.addColumn('Characteristics', 'product_id', columnDefinitions);
    queryInterface.addColumn('Images', 'product_id', columnDefinitions)
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('Characteristics', 'product_id');
    queryInterface.removeColumn('Images', 'product_id');
  }
};
