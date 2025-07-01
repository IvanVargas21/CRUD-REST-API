import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from  './config/db.js'; 
import userRoutes from "./routes/userRoutes.js";
import errorHandling from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";


// Import the database connection
// load environment variables from .env file into process.env
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

// Middleware
// parse incoming reqs with JSON payloads
app.use(express.json());
// enable CORS for all routes
app.use(cors());


// Routes
app.use("/api", userRoutes);

// Error handling middleware
app.use(errorHandling);

// Create table before starting the server
createUserTable();

// Testing POSTGRES Connection
app.get('/', async (req, res) => {
  const result = await pool.query("SELECT current_database()");

  res.send(`The database name is: ${result.rows[0].current_database}`);
}); 

// Server running
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`)
})