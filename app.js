/**
 * @Author: Waris Agung Widodo <ido>
 * @Date:   2017-07-11T10:07:28+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: app.js
 * @Last modified by:   ido
 * @Last modified time: 2017-07-11T11:06:03+07:00
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

var index = require('./routes/index');
var users = require('./routes/users');
var api = require('./routes/api/v1');

var app = express();

// ----------------------------------------------------------------------------
// view engine setup
// ----------------------------------------------------------------------------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// ----------------------------------------------------------------------------
// uncomment after placing your favicon in /public
// ----------------------------------------------------------------------------
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compass({ mode: 'expanded' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

// ----------------------------------------------------------------------------
// Registering router
// ----------------------------------------------------------------------------
app.use('/', index);
app.use('/users', users);
app.use('/api', api);

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