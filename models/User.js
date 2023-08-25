import sequelize from "../database/configSequelize.js";
import Sequelize, { STRING } from "sequelize";
import { Model, DataTypes } from "sequelize";

class User extends Model {}
User.init(
  {
    pk: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    id: {
      type: DataTypes.STRING,
      unique:true,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "El CI no puede estar vacio",
        },
        isNumeric: {
          args: true,
          msg: "el Id tiene que contener solo numeros",
        },
        len: {
          args: [11, 11],
          msg: "tiene que ser estrictamente de 11 caracteres el id",
        },
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: "Email invalido",
        },
        notNull: {
          args: true,
          msg: "El email no puede estar vacio",
        },
      },
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        isInt: {
          args: true,
          msg: "El numero de telefono es invalido",
        },
      },
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false
    },
    username:{
      type:DataTypes.STRING,
      allowNull:false
    }
  },
  {
    sequelize,
    modelName: "user",
    timestamps: false,
  }
);
//?Triggers

export default User;
