/**
 * @Author: Waris Agung Widodo <user>
 * @Date:   2017-09-28T14:51:40+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: admin.js
 * @Last modified by:   user
 * @Last modified time: 2017-09-29T09:05:50+07:00
 */



 var express = require('express');
 var router = express.Router();

 /* GET users listing. */
 router.get('/', function(req, res, next) {
   if (req.user) {
     return res.render('admin/index', {user: req.user})
   }

   res.redirect('/signin');
 });

 module.exports = router;
