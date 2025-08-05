const express = require("express")
const mongoose = require("mongoose")
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT

// database connectivity
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB Connected")
})
app.get("/",(req,res)=>{
    res.send({
        message:"default",
        success:true
    })
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})
