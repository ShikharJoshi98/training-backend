'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TutorialSection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TutorialSection.init({
    sectionName: {
      type: DataTypes.STRING,
      allowNull:false
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
    modelName: 'TutorialSection',
  });
  return TutorialSection;
};