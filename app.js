/**
 * @Author: Waris Agung Widodo <ido>
 * @Date:   2017-07-11T10:07:28+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: app.js
 * @Last modified by:   ido
 * @Last modified time: 2017-10-02T15:33:47+07:00
 */

// ----------------------------------------------------------------------------
// Add the root project directory to the app module search path
// ----------------------------------------------------------------------------
require('app-module-path').addPath(__dirname);

// ----------------------------------------------------------------------------
// require dependecies
// ----------------------------------------------------------------------------
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compass = require('node-compass');
var helmet = require('helmet');
var db = require('app/modules/db');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// ----------------------------------------------------------------------------
// view engine setup
// ----------------------------------------------------------------------------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// ----------------------------------------------------------------------------
// uncomment after placing your favicon in /public
// ----------------------------------------------------------------------------
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()) // parse application/json
app.use(cookieParser());
app.use(compass({ mode: 'expanded' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

// ----------------------------------------------------------------------------
// configuration passport
// ----------------------------------------------------------------------------
require('./config/passport')(passport);
app.use(session({
  secret: 'inikunciyangsangatrahasiasekali', 
  resave: true,
  saveUninitialized: true})) // secure it
app.use(passport.initialize())
app.use(passport.session()) // persistent login sessions
app.use(flash()) // use connect-flash for flash messages stored in session

// ----------------------------------------------------------------------------
// Registering routes
// ----------------------------------------------------------------------------
require('./routes/auth')(app, passport);
app.use('/', index);
app.use('/users', users);
app.use('/admin', require('./routes/admin'));
// Registering API routes
app.use('/api', require('./routes/api/v1/index')(passport));
app.use('/api/auth', require('./routes/api/v1/auth')(passport));
app.use('/api/profile', require('./routes/api/v1/profile')(passport));
app.use('/api/loan', require('./routes/api/v1/loan')(passport));
app.use('/api/biblio', require('./routes/api/v1/biblio')(passport));

// ----------------------------------------------------------------------------
// catch 404 and forward to error handler
// ----------------------------------------------------------------------------
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// ----------------------------------------------------------------------------
// error handler
// ----------------------------------------------------------------------------
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
