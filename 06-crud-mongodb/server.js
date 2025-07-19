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

// Read ALl
app.get("/students", async (req, res) => {
    try {
      const students = await Student.find();
      res.send(students);
    } catch (err) {
      res.status(500).send({ error: "Something went wrong" });
    }
  });

// Read one 
app.get('/students/:id',async(req,res)=>{
const student = await Student.findById(req.params.id);
res.send(student);
})

// UPDATE
app.put('/students/:id',async(req,res)=>{
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  );
  res.send(student)
})

// DELETE
app.delete('/students/:id',async(req,res)=>{
  const student = await Student.findByIdAndDelete(
    req.params.id,
    req.body,
    {new:true}
  );
  res.send(Student);
})

// database connectivity
mongoose
  .connect("mongodb://localhost:27017/studentdb")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT} `);
});
