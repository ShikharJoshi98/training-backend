'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
   
  }

  Course.init({
    course: { type: DataTypes.STRING, allowNull: false },
    courseDuration: { type: DataTypes.STRING, allowNull: false },
    courseImage: { type: DataTypes.TEXT('long') },
    courseCategory: { type: DataTypes.STRING, allowNull: false },
    courseLogo: { type: DataTypes.TEXT('long') },
    jobOpportunities: { type: DataTypes.STRING, allowNull: false },
    courseInfo: { type: DataTypes.TEXT, allowNull: false },
    incomeRange: { type: DataTypes.TEXT },
    isTopCourse: { type: DataTypes.BOOLEAN, defaultValue: false },
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
    modelName: 'Course',
  });

  return Course;
};
