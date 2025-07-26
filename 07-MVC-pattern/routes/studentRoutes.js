const express = require('express')
const router = express.Router();
const studentController = require('../controllers/studentControllers');

// post request to create the students
router.post('/',studentController.createStudent);

// GET request to fetch all the students
router.get('/',studentController.getStudents);

module.exports = router;