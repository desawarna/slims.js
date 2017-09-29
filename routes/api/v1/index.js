/**
 * @Author: Waris Agung Widodo <user>
 * @Date:   2017-09-29T13:31:30+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: index.js
 * @Last modified by:   user
 * @Last modified time: 2017-09-29T16:12:34+07:00
 */



 var express = require('express');
 var router = express.Router();

 module.exports = function (passport) {

   router.get('/', function(req, res, next) {
     res.json({data:'index api router'})
   });

   router.post('/login', passport.authenticate('jwt-login', {session:false}),
    function (req, res) {
      res.json(req.user)
    }
   )

   return router
 };
