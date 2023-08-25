import sequelize from "../database/configSequelize.js";
import Sequelize, { UUIDV4 } from "sequelize";
import { Model, DataTypes } from "sequelize";

class Post extends Model {}
Post.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue:Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "post",
    timestamps: false,
  }
);
//?Triggers

export default Post;
