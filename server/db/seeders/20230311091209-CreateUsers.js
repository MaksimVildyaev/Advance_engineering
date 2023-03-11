'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Users', [
      {
      name: 'Иван Иванов',
      password: '123456789',
      role: 'ADMIN',
      createdAt: 'NOW()',
      updatedAt: 'NOW()',
     },
      {
      name: 'Петр Петров',
      password: '123456789',
      role: 'USER',
      createdAt: 'NOW()',
      updatedAt: 'NOW()',
     },
     {
      name: 'Степан Степанов',
      password: '123456789',
      role: 'USER',
      createdAt: 'NOW()',
      updatedAt: 'NOW()',
     },

    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
