'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Course.init({
    course: {type:DataTypes.STRING, allowNull:false},
    courseDuration: { type: DataTypes.STRING, allowNull: false },
    courseImage: { type: DataTypes.TEXT('long') }, 
    courseLogo: { type: DataTypes.TEXT('long')},
    jobOpportunities: {type:DataTypes.STRING, allowNull:false},
    courseInfo: { type: DataTypes.TEXT, allowNull: false },
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