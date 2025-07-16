const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Student = require("./models/Student");
PORT = 4000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create
app.post("/students", async (req, res) => {
  const { name, age, city } = req.body;
  const student = new Student({ name, age, city });
  await student.save();
  res.send(student);
});

// Reade
app.get("/students", async (req, res) => {
    try {
      const students = await Student.find(); 
      res.send(students);
    } catch (err) {
      res.status(500).send({ error: "Something went wrong" });
    }
  });
  

// database connectivity
mongoose
  .connect("mongodb://localhost:27017/studentdb")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


app.listen(PORT, () => {
  console.log(`server is running on port ${PORT} `);
});
