/**
 * @Author: Waris Agung Widodo <user>
 * @Date:   2017-09-30T11:39:55+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: loan.js
 * @Last modified by:   user
 * @Last modified time: 2017-10-06T10:21:32+07:00
 */



var express = require('express');
var router = express.Router();
var Promise = require("bluebird");
const db = require('app/modules/db');
const Loan = require('app/models/auto/loan')(db.connection, db.Sequelize);
const Item = require('app/models/auto/item')(db.connection, db.Sequelize);
const Biblio = require('app/models/auto/biblio')(db.connection, db.Sequelize);
const Publisher = require('app/models/auto/mst_publisher')(db.connection, db.Sequelize);
const SystemLog = require('app/models/auto/system_log')(db.connection, db.Sequelize);
const date = require('app/modules/date');

// ----------------------------------------------------------------------------
// Loan.belongsToMany(Biblio, { through: 'item', foreignKey: 'item_code', otherKey: 'biblio_id' })
// Biblio.belongsToMany(Loan, { through: 'item', foreignKey: 'biblio_id', otherKey: 'item_code' })

Loan.belongsTo(Item, {foreignKey: 'item_code', targetKey: 'item_code'})
Item.belongsTo(Biblio, {foreignKey: 'biblio_id', targetKey: 'biblio_id'})
Biblio.belongsTo(Publisher, {foreignKey: 'publisher_id'})


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

  router.post('/report/loan-report', function (req, res) {
    var staff, type, start, end, download, criteria = {log_location: 'circulation'}, remove
    for (var f in req.body) {
      if (req.body.hasOwnProperty(f)) {
        staff     = staff     || req.body[f].staff
        type      = type      || req.body[f].type
        start     = start     || req.body[f].start
        end       = end       || req.body[f].end
        download  = download  || req.body[f].download
      }
    }

    if (staff) {
      switch (type) {
        case 'return':
          remove = staff + ' return item '
          criteria.log_msg = {
            like: remove + '%'
          }
          break;
        case 'loan':
          remove = staff + ' insert new loan '
          criteria.log_msg = {
            like: remove + '%'
          }
          break;
        default:

      }
    }

    // start
    if (start && end) {
      criteria.log_date = {gt: new Date(start), lt: new Date(end)}
    } else if (start) {
      criteria.log_date = {gt: new Date(start), lt: new Date()}
    } else if (end) {
      criteria.log_date = {gt: new Date(), lt: new Date(end)}
    } else {
      criteria.log_date = {gt: new Date(), lt: new Date()}
    }

    console.log(criteria);

    SystemLog.findAll({where: criteria})
      .then(data => {
        var promises = [], n = 1

        data.forEach(item => {
          var msg = item.get('log_msg')
          msg = msg.replace(remove, '')
          msg = msg.split(/(\s+)/);
          itemCode = msg[0].trim().replace(/\(/i, '').replace(/\)/i, '')

          promises.push(
            Promise.all([
              Item.findOne({where: {item_code: itemCode}, include: [Biblio]})
            ]).spread((item)=>{
              var biblio = [], B = item.get('biblio')
              biblio.push(n++)
              biblio.push(item.get('item_code'))
              biblio.push(B.get('title'))
              biblio.push('pengarang')
              biblio.push('penerbit')
              biblio.push(B.get('publish_year'))
              return biblio
            })
          )
        })

        return Promise.all(promises)
      })
      .then(function (data) {
        res.json({
          cols: [
            { name: 'No', key: 0 },
            { name: 'Item Code', key: 1 },
            { name: 'Title', key: 2 },
            { name: 'Author', key: 3 },
            { name: 'Publisher', key: 4 },
            { name: 'Publish Year', key: 5 },
          ],
          data: data
        })
      })
  })

  router.get('/report/item-out', function (req,res) {
    Loan.findAll({where: {is_lent:1, is_return:0}, include: [{
      model: Item,
      attributes: [ 'item_code', 'biblio_id' ],
      include: [{
        model: Biblio,
        attributes: [ 'title', 'sor', 'publisher_id', 'publish_year' ],
        include: [Publisher]
      }]
    }]
  })
    .then(data => {

      // console.log(data);

      var result = {
        cols : [
          { name: 'No', key: 0 },
          { name: 'Item Code', key: 1 },
          { name: 'Title', key: 2 },
          { name: 'Author', key: 3 },
          { name: 'Publisher', key: 4 },
          { name: 'Publish Year', key: 5 },
        ],
        data : []
      }

      var n=1
      data.forEach((item) => {
        // console.log(item.item);
        var publisher_name = (item.item.biblio.mst_publisher) ? item.item.biblio.mst_publisher.publisher_name : null
        result.data.push([
          n, item.item.item_code, item.item.biblio.title, item.item.biblio.sor, publisher_name, item.item.biblio.publish_year
        ])
        n++
      })

      res.json(result)
    })
  })

  return router
};
