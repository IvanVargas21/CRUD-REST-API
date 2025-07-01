import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.DB_USER);
console.log(process.env.DB_HOST);
console.log(process.env.DB_NAME);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_PORT);

// Express Postgres Database connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})


pool.on('connect', () => {
  console.log('Connection pool established with Database');
});


export default pool;