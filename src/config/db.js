import pkg from 'pg'; // Node.js Postgres client
const { Pool } = pkg; // Pool is hte connection pool class from pkg module
import dotenv from 'dotenv';

// load env variables from .env file into process.env
dotenv.config();

console.log(process.env.DB_USER);
console.log(process.env.DB_HOST);
console.log(process.env.DB_NAME);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_PORT);

// Express Postgres Database connection
// Pool manages multiple connections to the database.
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})


// logs a message whenever a new connection is established in the pool
pool.on('connect', () => {
  console.log('Connection pool established with Database');
});


export default pool;