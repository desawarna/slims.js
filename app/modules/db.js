/**
 * @Author: Waris Agung Widodo <ido>
 * @Date:   2017-07-12T09:58:23+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: db.js
 * @Last modified by:   user
 * @Last modified time: 2017-10-01T23:01:48+07:00
 */

 // ----------------------------------------------------------------------------
 // Database
 // ----------------------------------------------------------------------------
 const cf = require(__dirname + './../../config/database');
 const Sequelize = require('sequelize')
 const db = new Sequelize(cf.name, cf.user, cf.password, {
   host: cf.host,
   dialect: 'mysql',

   pool: {
     max: 5,
     min: 0,
     idle: 1000
   }
 })

 db.authenticate()
   .then(() => {
     console.log('Database connection has been established successfully.');
   })
   .catch(err => {
     console.error('Unable to connect to the database:', err);
   });

module.exports = {
  connection : db,
  Sequelize : Sequelize
};
