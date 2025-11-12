'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StudentDetails.init({
    studentName: DataTypes.STRING,
    studentImage: { type: DataTypes.TEXT('long') },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    course: DataTypes.STRING,
    dateOfBirth: DataTypes.STRING,
    fatherName: DataTypes.STRING,
    address: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    lastQualification: DataTypes.STRING,
    passingYear: DataTypes.STRING,
    knowledgeOfEnglish: DataTypes.STRING,
    batches: DataTypes.STRING,
    workingStatus: DataTypes.STRING,
    companyName: DataTypes.STRING,
    designation: DataTypes.STRING,
    instituteEnquiry: DataTypes.STRING,
    other: DataTypes.STRING,
    admissionStatus: DataTypes.STRING,
    instituteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Institutes', 
      key: 'id'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  }
  }, {
    sequelize,
    modelName: 'StudentDetails',
  });
  return StudentDetails;
};