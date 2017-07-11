var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('opac/index', { title: 'SLiMS.js' });
});

router.get('/page/:path', function (req, res, next) {
  res.render('opac/page', { title: req.params.path });
});

router.get('/signin', function (req, res, next) {
  res.render('opac/signin');
});

module.exports = router;
