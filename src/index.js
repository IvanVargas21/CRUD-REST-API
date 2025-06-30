import express from "express";
import cors from "cors";
import dotenv from "dotenv";

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

// Error handling middleware

// Server running
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`)
})