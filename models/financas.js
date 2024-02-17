'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Financas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Financas.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false 
    },
    saldoInicial: {
      type: DataTypes.FLOAT,
      allowNull: false 
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: false 
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: false 
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false 
    }
  }, {
    sequelize,
    modelName: 'Financas',
  });
  return Financas;
};