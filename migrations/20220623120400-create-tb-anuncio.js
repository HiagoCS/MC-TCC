'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_anuncios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_vendedor: {
        type: Sequelize.INTEGER,
        references:{
          model:'tb_usuarios',
          key:'id'
        }
      },
      id_servico: {
        type: Sequelize.INTEGER,
        references:{
          model:'tb_servico',
          key:'id'
        }
      },
      nome: {
        type: Sequelize.STRING
      },
      custo: {
        type: Sequelize.FLOAT
      },
      num_vendas: {
        type: Sequelize.INTEGER
      },
      tempo_servico: {
        type: Sequelize.TIME
      },
      media_avalicao: {
        type: Sequelize.FLOAT
      },
      descricao: {
        type: Sequelize.TEXT('long')
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
    await queryInterface.dropTable('tb_anuncios');
  }
};