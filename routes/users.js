/**
 * @Author: Waris Agung Widodo <ido>
 * @Date:   2017-07-11T11:57:07+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: users.js
 * @Last modified by:   ido
 * @Last modified time: 2017-07-11T15:31:37+07:00
 */



var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
