const { DataTypes } = require("sequelize");
const {sequelize} = require('./dbConnection.model');

const User = sequelize.define(
  "users",
  {
    numeroId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true
    },
    nombre: {
      type: DataTypes.STRING,
    },
    apellido: {
      type: DataTypes.STRING,
    },
    fechaNacimiento: {
      type: DataTypes.DATE,
    },
    ocupacion: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING
    },
    telefono: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: true,
  }
);

module.exports = User;