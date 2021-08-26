import { DataTypes } from 'sequelize';
import { db } from '../../db';

const User = db.define('User', {
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
  tableName: 'auth',
  timestamps: false
});

User.sync({ alter: true });

export default User;
