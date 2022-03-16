import { Sequelize } from 'sequelize';

export const db = new Sequelize(
  process.env.DATABASE_NAME || 'database',
  process.env.DATABASE_USER || 'root',
  process.env.DATABASE_PASS || 'root',
  {
    dialect:"mysql",
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
  }
);
