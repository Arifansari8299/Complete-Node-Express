const express = require('express')
const connectDB = require('./config/db')
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 4000

// connectDB
connectDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true }))

// Routes
// app.use('/students',)

// listen 
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})