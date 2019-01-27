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

  Courses.findOne({course_no: courseNo})
  .exec(function (err, course) {
    if (course == undefined) {
      res.send('Unable to add student: Course does not exist');
    } else {
      course.student_list.pull(newStudent);
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

// Add student to course
router.delete('/:course_no/:student_no', function(req, res) {
  var courseNo = req.params.course_no;
  var studentNo = req.params.student_no;
  console.log(studentNo);

  Courses.updateOne(
    {course_no: courseNo},
    { $pull: {student_list: {student_no: studentNo}}},
    {safe: true, multi: true})
  .exec(function(err, course) {
    console.log('ran');
    res.send('removed');
  });

  // Courses.findOne({course_no: courseNo})
  // .exec(function (err, course) {
  //   if (course == undefined) {
  //     res.send('Unable to remove student: Course does not exist');
  //   } else {
  //     console.log(course.student_list);
  //     course.student_list.pull({student_no: studentNo});
  //     course.save(function(err, course) {
  //       if (err) {
  //         console.log(err);
  //         res.send('Something Went Wrong');
  //       } else {
  //         res.send('Successfully removed Student');
  //       }
  //     });
  //   }
  // })
})

module.exports = router;