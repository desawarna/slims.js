/**
 * @Author: Waris Agung Widodo <user>
 * @Date:   2017-09-29T13:31:30+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: index.js
 * @Last modified by:   user
 * @Last modified time: 2017-09-30T12:18:29+07:00
 */



 var express = require('express');
 var router = express.Router();

 module.exports = function (passport) {

   router.get('/', function(req, res, next) {
     res.json({data:'Sugeng rawuh selamat datang'})
   });

   return router
 };
