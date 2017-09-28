/**
 * @Author: Waris Agung Widodo <user>
 * @Date:   2017-09-28T12:08:47+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: user.js
 * @Last modified by:   user
 * @Last modified time: 2017-09-28T12:18:17+07:00
 */



 'use strict';

 module.exports = function (sequelize, DataTypes) {
   var User = sequelize.define('User', {
     user_id: {
       type: DataTypes.INTEGER,
       primaryKey: true
     },
     username: DataTypes.STRING(50),
     realname: DataTypes.STRING(100),
     passwd: DataTypes.STRING(64),
     email: DataTypes.STRING(200),
     user_type: DataTypes.INTEGER(2),
     user_image: DataTypes.STRING(250),
     social_media: DataTypes.TEXT,
     last_login: DataTypes.DATE,
     last_login_ip: DataTypes.STRING(15),
     groups: DataTypes.STRING(200),
     input_date: DataTypes.DATE,
     last_update: DataTypes.DATE
   }, {
     timestamps: false,
     freezeTableName: true,
     tableName: 'user',
     indexes: [
       {
         unique: true,
         fields: ['username']
       },
       {
         primary: true,
         fields: ['user_id']
       }
     ]
   })

   return User
 }
