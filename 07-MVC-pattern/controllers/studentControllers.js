const Students = require("../models/Students");

// Create
exports.createStudent = async (req, res) => {
  try {
    const { name, age, city } = req.body;
    const student = new Students({ name, age, city });
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Student
exports.getStudents = async (req, res) => {
    try{
      const students = await Student.find();
      res.status(201).json(students);
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
};
