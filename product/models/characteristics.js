import { Model, DataTypes } from "sequelize";
import client from "../src/repositories/dbClient.js";

export class Characteristics extends Model {
  static associate(models) {}
}
Characteristics.init(
  {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
  },
  {
    sequelize: client,
    modelName: "Characteristics",
  }
);
