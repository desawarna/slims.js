/**
 * @Author: Waris Agung Widodo <ido>
 * @Date:   2017-10-02T15:26:32+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: biblio.js
 * @Last modified by:   ido
 * @Last modified time: 2017-10-03T11:25:40+07:00
 */



 var express = require('express');
 var router = express.Router();
 const db = require('app/modules/db');
 const Biblio = require('app/models/auto/biblio')(db.connection, db.Sequelize);
 const Item = require('app/models/auto/item')(db.connection, db.Sequelize);
 const Sequelize = require('sequelize');
 const date = require('app/modules/date');

 module.exports = function (passport) {

   router.get('/count/:type?',
     function (req, res, next) {
       var lastMonth = date.lastMonth(new Date(), 1)
       switch (req.params.type) {
         case 'new-title':
           Biblio.count({where: {input_date: {gt: lastMonth, lt: new Date()}}}).then(c => {
            res.json({data: c})
           })
           break;
         case 'title':
           Biblio.count().then(c => {
            res.json({data: c})
           })
           break;
         case 'new-item':
           Item.count({where: {input_date: {gt: lastMonth, lt: new Date()}}}).then(c => {
            res.json({data: c})
           })
           break;
         case 'item':
           Item.count().then(c => {
            res.json({data: c})
           })
           break;
         default:
           Biblio.count().then(c => {
            res.json({data: c})
           })
       }

     }
   )

   router.get('/', function (req, res, next) {
     res.json({data: 'biblio data'})
   })

   return router
 };
