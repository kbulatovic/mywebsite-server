import { DataTypes, Model } from "sequelize";
import { db } from "../db";

class Users extends Model {}

Users.init({
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  }, 
}, {
  sequelize: db,
  freezeTableName: true,
  modelName: 'Users'
});

Users.sync({ alter: true });
