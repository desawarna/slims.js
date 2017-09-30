/**
 * @Author: Waris Agung Widodo <user>
 * @Date:   2017-09-29T23:16:21+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: auth.js
 * @Last modified by:   user
 * @Last modified time: 2017-09-30T11:29:33+07:00
 */



 var express = require('express');
 var router = express.Router();

 module.exports = function (passport) {

   router.post('/login', passport.authenticate('jwt-login', {session:false}),
    function (req, res) {
      res.json(req.user)
    }
   )

   router.post('/changePassword', passport.authenticate('jwt-token', {session:false}),
     function (req, res) {
       res.send('changePassword')
     }
   )

   return router
 };
