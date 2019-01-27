var express = require('express');
var router = express.Router();

// Retrieve all courses' data
router.get('/', function(req, res) {
  Courses.find({})
  .exec(function (err, courses) {
    res.send(courses);
  })
})

// Retrieve a single course's data
router.get('/:course_no', function(req, res) {
  var courseNo = req.params.course_no;

  Courses.findOne({course_no: courseNo})
  .exec(function(err, course) {
    if (course == undefined) {
      res.send('Course Does Not Exist');
    } else {
      res.send(course);
    }
  })
})

// Add a course
router.post('/', function(req, res) {
  var reqCourse = req.body;
  var courseNo = reqCourse.course_no;

  Courses.findOne({course_no: courseNo})
  .exec(function(err, course) {
    if (course == undefined) {
      var newCourse = new Courses(reqCourse);
    
      newCourse.save(function(err, course) {
        if (err) {
          console.log(err);
          res.send('Something Went Wrong');
        } else {
          res.send('Successfully Added Course');
        }
      });
    } else {
      // Course already exists
      res.send('Course Already Registered');
    }
  })
})

// Remove a course
router.delete('/:course_no', function(req, res) {
  var courseNo = req.params.course_no;

  Courses.deleteOne({course_no: courseNo})
  .exec(function(err) {
    if (err) {
      console.log(err);
      res.send('There was a problem removing this course');
    } else {
      res.send('Successfully Removed Course');
    }
  });
})

// Add student to course
router.post('/:course_no/students', function(req, res) {
  var courseNo = req.params.course_no;
  var student = req.body;

  var newStudent = {
    student_no: student.student_no,
    attendance: [false, false, false]
  };

  // Check for duplicate student
  Courses.findOne({course_no: courseNo})
  .exec(function (err, course) {
    if (course == undefined) {
      res.send('Unable to add student: Course does not exist');
    } else {
      course.student_list.push(newStudent);
      course.save(function(err, course) {
        if (err) {
          console.log(err);
          res.send('Something Went Wrong');
        } else {
          res.send('Successfully Added Student');
        }
      });
    }
  })
})

// Remove student from course
router.delete('/:course_no/students/:student_no', function(req, res) {
  var courseNo = req.params.course_no;
  var studentNo = req.params.student_no;
  console.log(studentNo);

  Courses.updateOne(
    {course_no: courseNo},
    { $pull: {student_list: {student_no: studentNo}}},
    {safe: true, multi: true})
  .exec(function(err, course) {
    if (course == undefined) {
      res.send('Invalid Course');
    } else {
      if (err) {
        res.send('Something went wrong');
      } else {
        res.send('Successfully deleted student');
      }
    }
  });
})

// Verify student in course
router.put('/:course_no/students/:student_no', function(req, res) {
  var courseNo = req.params.course_no;
  var examIndex = req.body.exam_index;
  var studentNo = req.params.student_no;
  var found = false;

  Courses.findOne({course_no: courseNo})
  .exec(function (err, course) {
    if (course == undefined) {
      res.send('Unable to verify student: Course does not exist');
    } else {
      for (var i = 0; i < course.student_list.length; i++) {
        if (course.student_list[i].student_no == studentNo) {
          found = true;
        }
      }
      if (found) {
        res.send('Successfully Checked In Student');
      } else {
        res.send('Student Not Enrolled');
      }
    }
  })
})

module.exports = router;