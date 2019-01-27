var mongoose = require('mongoose');
// var Student = require('./Student.js');
// var StudentSchema = mongoose.model('Student').schema;

var CourseSchema = mongoose.Schema({
  course_no: String,
  instructor: String,
  section: Number,
  exam_dates: [Date], // We'll just assume three for now; could allow scaling later
  student_list: [{
    student_no: Number,
    attendance: [Boolean] // *** Indexed by exam index
  }]
})

module.exports = mongoose.model('Courses', CourseSchema);