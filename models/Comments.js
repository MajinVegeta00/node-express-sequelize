import sequelize from "../database/configSequelize.js";
import Sequelize, { UUIDV4 } from "sequelize";
import { Model, DataTypes } from "sequelize";

class Comments extends Model {}
Comments.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue:Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "comments",
    timestamps: false,
  }
);
//?Triggers

export default Comments;
