const Student = require("../models/studentModel")

// Create
exports.createStudent = async (req, res) => {
  try {
    const { name, age, city } = req.body;
    const student = new Student({ name, age, city });
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
      if (!student) return res.status(404).json({ message: "Student not found" }); // optional
      res.status(200).json(students);
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
};

// Update Student
exports.updateStudent = async (req, res) => {
  try {
    const { name, age, city } = req.body;
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { name, age, city },
      { new: true }
    );
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Student
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.status(200).json({ message: "Student deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};