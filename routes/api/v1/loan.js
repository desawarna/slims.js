/**
 * @Author: Waris Agung Widodo <user>
 * @Date:   2017-09-30T11:39:55+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: loan.js
 * @Last modified by:   ido
 * @Last modified time: 2017-10-03T11:26:19+07:00
 */



var express = require('express');
var router = express.Router();
const db = require('app/modules/db');
const Loan = require('app/models/auto/loan')(db.connection, db.Sequelize);

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

  router.get('/count/:type?', function (req, res) {
    switch (req.params.type) {
      case 'lent':
        Loan.count({where: {
                           is_lent: 1,
                           is_return: 0
                           }
                  }).then(c => {
          res.json({data: c})
        })
        break;
      case 'overdue':
        Loan.count({where: {due_date: {lt: new Date()}, is_return: 0}}).then(c => {
          res.json({data: c})
        })
        break;
      case 'extend':
        Loan.count({where: {is_lent:1, is_return:0, renewed: {gt: 0}}}).then(c => {
          res.json({data: c})
        })
        break;
      default:
        Loan.count().then(c => {
          res.json({data: c})
        })
    }
  })

  return router
};
