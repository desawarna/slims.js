/**
 * @Author: Waris Agung Widodo <user>
 * @Date:   2017-09-28T14:51:40+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: admin.js
 * @Last modified by:   ido
 * @Last modified time: 2017-10-02T13:16:35+07:00
 */



 var express = require('express');
 var router = express.Router();

 const db = require('app/modules/db');
 const Biblio = require('app/models/auto/biblio')(db.connection, db.Sequelize);

 /* GET users listing. */
 router.get('/', function(req, res, next) {
  //  store data in object
  var data = {}
  //  set user data
  data.user = req.user;

  if (req.user) {
    return res.render('admin/index', data)
  }

  res.redirect('/signin');
 });

 module.exports = router;
