// schema 
const mongoose = require('mongoose')

const Studentchema = new mongoose.Schema({
    name:String,
    age:Number,
    city:String
});
const Student = mongoose.model('Student',Studentchema);
module.exports = Student;