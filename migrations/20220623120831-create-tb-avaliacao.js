'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_avaliacaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        references:{
          model:'tb_usuarios',
          key:'id'
        }
      },
      id_produto: {
        type: Sequelize.INTEGER,
        references:{
          model:'tb_anuncios',
          key:'id'
        }
      },
      avaliacao: {
        type: Sequelize.FLOAT
      },
      descricao: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_avaliacaos');
  }
};