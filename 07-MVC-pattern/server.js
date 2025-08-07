const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
const app = express();

// connect to database
connectDB();

app.get("/", (req, res) => {
  res.send("Api is running");
});

// Server
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    console.log(process.env.MONGO_URI)
})
