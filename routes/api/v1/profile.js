/**
 * @Author: Waris Agung Widodo <user>
 * @Date:   2017-09-30T11:29:53+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: profile.js
 * @Last modified by:   user
 * @Last modified time: 2017-10-04T18:06:24+07:00
 */

 var express = require('express');
 var router = express.Router();
 var unserialize = require('php-unserialize').unserialize;

 const db = require('app/modules/db');
 const Setting = require('app/models/auto/setting')(db.connection, db.Sequelize);
 const User = require('app/models/auto/user')(db.connection, db.Sequelize);

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

   router.get('/library/name', function (req, res) {
     Setting.findOne({where:{setting_name:'library_name'}, attributes: ['setting_value']})
     .then(data => {
       res.json({data: unserialize(data.setting_value)})
     })
   })

   router.get('/library/staff', function (req, res) {
     User.findAll({attributes: ['username', 'realname']})
     .then(data => {
       res.json({data: data})
     })
   })

   return router
 };
