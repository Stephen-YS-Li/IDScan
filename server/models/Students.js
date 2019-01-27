var mongoose = require('mongoose');

var StudentSchema = mongoose.Schema({
  student_no: Number,
  student_name: String
})

module.exports = mongoose.model('Students', StudentSchema);