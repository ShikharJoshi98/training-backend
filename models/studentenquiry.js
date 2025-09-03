'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentEnquiry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StudentEnquiry.init({
    name: DataTypes.STRING,
    contact: DataTypes.STRING,
    enquiryAbout: DataTypes.STRING,
    type: DataTypes.STRING,
    isContacted: {
      type: DataTypes.BOOLEAN,
      defaultValue:false
    },
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
    modelName: 'StudentEnquiry',
  });
  return StudentEnquiry;
};