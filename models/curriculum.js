'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curriculum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Curriculum.init({
    topic: DataTypes.STRING,
    subTopic: {
      type: DataTypes.TEXT,
      get() {
        const rawValue = this.getDataValue('subChapter');
        if (!rawValue) return [];
        return rawValue
          .replace(/^\[|\]$/g, '')
          .split(',')
          .map(str => str.trim());
      },
      set(value) {
        if (Array.isArray(value)) {
          this.setDataValue('subChapter', `[${value.join(',')}]`);
        } else if (typeof value === 'string') {
          this.setDataValue('subChapter', value);
        } else {
          this.setDataValue('subChapter', '[]'); 
        }
      }
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
    },
    tutorialId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Tutorials',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'Curriculum',
  });
  return Curriculum;
};