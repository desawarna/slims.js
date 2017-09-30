/**
 * @Author: Waris Agung Widodo <user>
 * @Date:   2017-09-28T12:07:43+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: passport.js
 * @Last modified by:   user
 * @Last modified time: 2017-09-30T11:19:28+07:00
 */



const LocalStrategy = require('passport-local').Strategy;
const CustomStrategy = require('passport-custom').Strategy;
const db = require('app/modules/db');
const User = require('app/models/user')(db.connection, db.Sequelize);
const bcrypt = require('bcrypt');

var Jwt = require('jsonwebtoken');
var unserialize = require('php-unserialize').unserialize;
var privateKey = '37LvDSm4XvjYOh9Y';

module.exports = function (passport) {
  // --------------------------------------------------------------------------
  // passport session setup
  // --------------------------------------------------------------------------
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session

  // used to serialize the user for the session
  passport.serializeUser((user, callback) => {
    callback(null, user.id)
  })

  // used to deserialize the user
  passport.deserializeUser((id, callback) => {
    // Get data user from database
    // and return error and user data
    User.findOne({
      where:{user_id:id},
      attributes: [['user_id', 'id'], ['user_type', 'type'], 'groups',
                  ['realname', 'name'], ['user_image', 'image']]
    }).then(user => {
      callback(null, user.get({plain:true}))
    })
  })

  // --------------------------------------------------------------------------
  // Local Login
  // --------------------------------------------------------------------------
  passport.use('local-login', new LocalStrategy({
    passReqToCallback : true // allows us to pass back the entire request to the callback
  },
    (req, username, password, callback) => {
      // Find username from database
      User.findOne({
        where:{username:username},
        attributes: [['user_id', 'id'], 'passwd', ['user_type', 'type'], 'groups',
                    ['realname', 'name'], ['user_image', 'image']]
      }).then(user => {
        // user not found
        if (!user) {
          return callback(null, false, req.flash('loginMessage', 'Incorect username'));
        }

        // verify password
        var passwordHash = user.get('passwd').replace(/^\$2y(.+)$/i, '\$2a$1');

        bcrypt.compare(password, passwordHash, function(err, res) {
          if (!res) {
            return callback(null, false, req.flash('loginMessage', 'Incorect password'));
          }

          return callback(null, user.get({plain:true}));
        });

      })
    }
  ))

  // --------------------------------------------------------------------------
  // configuration for jwt token
  // --------------------------------------------------------------------------
  passport.use('jwt-login', new CustomStrategy(
    function (req, callback) {
      var username = req.body.username
      var password = req.body.password
      User.findOne({
        where:{username:username},
        attributes: [['user_id', 'id'], 'passwd', ['user_type', 'type'], 'groups',
                    ['realname', 'name'], ['user_image', 'image']]
      }).then(user => {
        // user not found
        if (!user) {
          return callback(null, false, {message:"no such user found"});
        }

        // verify password
        var passwordHash = user.get('passwd').replace(/^\$2y(.+)$/i, '\$2a$1');

        bcrypt.compare(password, passwordHash, function(err, res) {
          if (!res) {
            return callback(null, false, {message:"password not match"});
          }

          var groups = unserialize(user.get('groups'))

          var tokenData = {
              username: username,
              scope: groups,
              id: user.get('id')
          };
          var result = {
              username: username,
              scope: groups,
              token: Jwt.sign(tokenData, privateKey)
          };

          return callback(null, result);
        });
      })
    }
  ))

  passport.use('jwt-token', new CustomStrategy(
    function (req, callback) {
      // verify token
      var token = req.get('Authorization') || req.params.token
      if (!token) {
        return callback('Token not found')
      }

      Jwt.verify(token, privateKey, (err, decoded) => {
        if (err) {
          return callback(null, false)
        }

        return callback(null, decoded)
      })
    }
  ))

}
