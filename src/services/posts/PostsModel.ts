import { DataTypes } from 'sequelize';
import { db } from '../../db';

const Posts = db.define('User', {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userId: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  category: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'posts',
  timestamps: false
});

Posts.sync({ alter: true });

export default Posts;
