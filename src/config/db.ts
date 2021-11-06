import knex from 'knex';

const {
  DB_HOST,
  DB_USER,
  DB_PASS,
  DB_NAME
} = process.env;

const connection = knex({
  client: 'mysql2',
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME
  },
  pool: {
    log (msg, logLevel) {
      console.log(msg, logLevel);
    } 
  }
});

export default connection;
