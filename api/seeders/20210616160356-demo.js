'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Testandos', [{
        nome: 'John Doe',
        email: 'jhon@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Isabela Neves',
        email: 'isa@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Testandos', null, {});
     
  }
};
