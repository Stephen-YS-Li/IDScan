// Require dependencies
var express = require('express');
var app = express();
var mongoose = require('mongoose');

var courses = require('./routes/courses');

// Declare application parameters
var PORT = process.env.PORT || 3000;

// Configure
require('./config/configuration.js')(app, mongoose);

// Models
Students = require('./models/Students.js');
Courses = require('./models/Courses.js');

// Routes
app.use('/courses', courses);

// Server
app.listen(PORT, function(){
  console.log('[Express.js] Server listening on PORT: '+ PORT);
});