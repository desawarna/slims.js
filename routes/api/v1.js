/**
 * @Author: Waris Agung Widodo <ido>
 * @Date:   2017-07-11T10:03:41+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: v1.js
 * @Last modified by:   ido
 * @Last modified time: 2017-07-11T11:11:05+07:00
 */

 var express = require('express');
 var router = express.Router();

 const response = require('app/modules/response');

 /* GET users listing. */
 router.get('/', function(req, res, next) {
   response.json(res, {data:'index api router'})
 });

 module.exports = router;
