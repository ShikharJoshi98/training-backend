'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Blogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      heading: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      tagline: {
        type: Sequelize.TEXT('long'),
      },
      desc: {
        type: Sequelize.TEXT('long'),
      },
      instituteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Institutes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('Blogs');
  }
};