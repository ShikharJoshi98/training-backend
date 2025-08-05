'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Institute extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Institute.init({
    instituteName: {type:DataTypes.STRING,allowNull:false},
    password: {type:DataTypes.STRING,allowNull:false},
    email: {type:DataTypes.STRING,allowNull:false},
    phone: {type:DataTypes.STRING,allowNull:false},
    altPhone: DataTypes.STRING,
    address: {type:DataTypes.STRING,allowNull:false}
  }, {
    sequelize,
    modelName: 'Institute',
  });
  return Institute;
};