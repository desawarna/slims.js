/**
 * @Author: Waris Agung Widodo <user>
 * @Date:   2017-09-30T11:39:55+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: loan.js
 * @Last modified by:   user
 * @Last modified time: 2017-09-30T11:46:30+07:00
 */



var express = require('express');
var router = express.Router();

module.exports = function (passport) {

  router.get('/list/:page?', passport.authenticate('jwt-login', {session:false}),
    function (req, res) {
      res.json(req.user)
    }
  )

  router.get('/current/:page?', passport.authenticate('jwt-token', {session:false}),
     function (req, res) {
       res.send('current loan')
     }
  )

  router.put('/extend/:itemcode?', passport.authenticate('jwt-token', {session:false}),
    function (req, res) {
      res.send('item extended')
    }
  )

  return router
};
