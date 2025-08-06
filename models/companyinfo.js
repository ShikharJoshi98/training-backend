'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompanyInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CompanyInfo.init({
    name: { type: DataTypes.STRING, allowNull: false },
    logo: {type: DataTypes.TEXT('long')},
    abbv: {type:DataTypes.STRING,allowNull:false},
    email: {type:DataTypes.STRING,allowNull:false},
    phone: {type:DataTypes.STRING,allowNull:false},
    altPhone: {type:DataTypes.STRING},
    address: {type:DataTypes.STRING,allowNull:false}
  }, {
    sequelize,
    modelName: 'CompanyInfo',
  });
  return CompanyInfo;
};