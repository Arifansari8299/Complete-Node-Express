require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
// const port = process.env.PORT || 4000;

port = 4000

// connectDB
connectDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/students", studentRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Student API. Use /students endpoint.");
});

// listen
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});

// require('dotenv').config();
// const express = require('express')
// const PORT = process.env.PORT 
// const app = express();

// app.get('/',(req,res)=>{
//   res.send("hello how are u Tell me something")
// })

// app.listen(PORT,()=>{
//   console.log(`server is runnit at ${PORT}`)
// })
// app.listen(8080,()=>{
//   console.log(`server is running at http://localhost:8080`);
// })