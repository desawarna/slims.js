/**
 * @Author: Waris Agung Widodo <user>
 * @Date:   2017-09-30T11:29:53+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: profile.js
 * @Last modified by:   user
 * @Last modified time: 2017-09-30T11:31:06+07:00
 */



 var express = require('express');
 var router = express.Router();

 module.exports = function (passport) {

   router.get('/info', passport.authenticate('jwt-login', {session:false}),
    function (req, res) {
      res.json(req.user)
    }
   )

   router.put('/edit', passport.authenticate('jwt-token', {session:false}),
     function (req, res) {
       res.send('edit user')
     }
   )

   return router
 };
