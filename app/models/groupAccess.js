/**
 * @Author: Waris Agung Widodo <user>
 * @Date:   2017-09-29T16:37:29+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: groupAccess.js
 * @Last modified by:   user
 * @Last modified time: 2017-09-29T16:42:58+07:00
 */



 'use strict';

 module.exports = function (sequelize, DataTypes) {
   var GroupAccess = sequelize.define('GroupAccess', {
     group_id: {
       type: DataTypes.INTEGER,
       primaryKey: true
     },
     module_id: DataTypes.INTEGER(11),
     r: DataTypes.INTEGER(1),
     w: DataTypes.INTEGER(1)
   }, {
     timestamps: false,
     freezeTableName: true,
     tableName: 'group_access',
     indexes: [
       {
         primary: true,
         fields: ['group_id', 'module_id']
       }
     ]
   })

   return GroupAccess
 }
