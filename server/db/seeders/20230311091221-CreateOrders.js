'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('Orders', [
        {
      name: 'Иван Иванов',
      addres: 'Самара, проспект Ленина, 26-25',
      status: 'Выполнен',
      comment: 'доставить до 18:00',
      createdAt: 'NOW()',
      updatedAt: 'NOW()',
     },
      {
      name: 'Петр Петров',
      addres: 'Москва, проспект Московский, д.100 кв.1',
      status: 'Новый',
      comment: 'нет домофона',
      createdAt: 'NOW()',
      updatedAt: 'NOW()',
     },
     {
      name: 'Степан Степанов',
      addres: 'Екатеринбург, улица Челюскинцев, 222',
      status: 'Новый',
      comment: 'нет домофона',
      createdAt: 'NOW()',
      updatedAt: 'NOW()',
     },

    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Orders', null, {});
    
  }
};
