'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      cep: {
        type: Sequelize.STRING
      },
      id_categoria: {
        type: Sequelize.INTEGER,
        references:{
          model:'tb_categoria',
          key:'id'
        }
      },
      nivel: {
        type: Sequelize.INTEGER,
        references:{
          model:'tb_niveis',
          key:'id'
        }
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
    await queryInterface.dropTable('tb_usuarios');
  }
};