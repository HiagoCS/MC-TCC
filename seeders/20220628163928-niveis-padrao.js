'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('tb_niveis', [{
      id:1,
      nome:'root',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:2,
      nome:'cliente',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id:3,
      nome:'empregado',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tb_niveis', null, {});
  }
};
