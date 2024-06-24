'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Peserta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Peserta.init({
    id_user: DataTypes.INTEGER,
    id_kelompok: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Peserta',
  });
  return Peserta;
};