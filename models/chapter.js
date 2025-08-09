'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Chapter extends Model {
    static associate(models) {
      Chapter.belongsTo(models.Institute, {
        foreignKey: 'instituteId',
        as: 'institute'
      });

      Chapter.belongsTo(models.Tutorial, {
        foreignKey: 'tutorialId',
        as: 'tutorial'
      });
    }
  }

  Chapter.init({
    chapter: DataTypes.STRING,
    subChapter: {
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
    modelName: 'Chapter',
  });

  return Chapter;
};
