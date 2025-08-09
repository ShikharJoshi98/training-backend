'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      course: {
        type: Sequelize.STRING
      },
      courseDuration: {
        type: Sequelize.STRING
      },
      jobOpportunities: {
        type: Sequelize.STRING
      },
      courseInfo: {
        type: Sequelize.TEXT
      },
      isTopCourse: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
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
    await queryInterface.dropTable('Courses');
  }
};