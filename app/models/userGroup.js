/**
 * @Author: Waris Agung Widodo <user>
 * @Date:   2017-09-29T16:34:05+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: userGroup.js
 * @Last modified by:   user
 * @Last modified time: 2017-09-29T16:43:10+07:00
 */



 'use strict';

 module.exports = function (sequelize, DataTypes) {
   var UserGroup = sequelize.define('UserGroup', {
     group_id: {
       type: DataTypes.INTEGER,
       primaryKey: true
     },
     group_name: DataTypes.STRING(50),
     input_date: DataTypes.DATE,
     last_update: DataTypes.DATE
   }, {
     timestamps: false,
     freezeTableName: true,
     tableName: 'user_group',
     indexes: [
       {
         unique: true,
         fields: ['group_name']
       },
       {
         primary: true,
         fields: ['group_id']
       }
     ]
   })

   return UserGroup
 }
