/**
 * @Author: Waris Agung Widodo <ido>
 * @Date:   2017-07-12T10:00:44+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: index.js
 * @Last modified by:   ido
 * @Last modified time: 2017-07-12T13:42:07+07:00
 */

var express = require('express');
var router = express.Router();
var db = require('app/modules/db');
const Content = require('app/models/content')(db.connection, db.Sequelize);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('opac/index', { title: 'SLiMS.js' });
});

router.get('/page/:path', function (req, res, next) {
  Content.findOne({
    where:{content_path: req.params.path},
    attributes: [['content_title', 'title'], ['content_desc', 'desc']]
  }).then(function (content) {
    if (content != null) {
      res.render('opac/page', {
        path: req.params.path,
        title: content.get('title'),
        desc: content.get('desc')
      })
    } else {
      res.status(400);
      res.render('error', {error: { status: '404 - Not Found' }});
    }
  })
});

router.get('/signin', function (req, res, next) {
  res.render('opac/signin', {path: 'signin'});
});

module.exports = router;
