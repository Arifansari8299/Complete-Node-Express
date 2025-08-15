const express = require('express')
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const connectDB = require("./config/db")
dotenv.config();

// MongoDB connection
// mongoose.connect(process.env.MONGODB_URI)
// .then(()=>console.log("MongoDB Connected"))
// .catch((err)=>console.log(err))
connectDB();
app.get('/',(req, res)=> {
    res.send("hello everyone how are u")
})
PORT = process.env.PORT || 8080
app.listen(PORT, () =>{
    console.log(`server is running on ${PORT}`)
})