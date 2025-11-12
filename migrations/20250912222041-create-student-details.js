'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('StudentDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      studentName: {
        type: Sequelize.STRING
      },
     studentImage: {
        type: Sequelize.TEXT('long')
      },
     username: {
        type: Sequelize.STRING
      },
     password: {
        type: Sequelize.STRING
      },
      course: {
        type: Sequelize.STRING
      },
      dateOfBirth: {
        type: Sequelize.STRING
      },
      fatherName: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      lastQualification: {
        type: Sequelize.STRING
      },
      passingYear: {
        type: Sequelize.STRING
      },
      knowledgeOfEnglish: {
        type: Sequelize.STRING
      },
      batches: {
        type: Sequelize.STRING
      },
      workingStatus: {
        type: Sequelize.STRING
      },
      companyName: {
        type: Sequelize.STRING
      },
      designation: {
        type: Sequelize.STRING
      },
      instituteEnquiry: {
        type: Sequelize.STRING
      },
      other: {
        type: Sequelize.STRING
      },
      admissionStatus: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('StudentDetails');
  }
};