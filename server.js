const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');
const app = require('./app');
const crypto = require("crypto");

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running is ${process.env.NODE_ENV} mode on port ${PORT}`)
);