/**
 * @Author: Waris Agung Widodo <user>
 * @Date:   2017-09-29T16:41:36+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: mstModule.js
 * @Last modified by:   user
 * @Last modified time: 2017-09-29T16:44:40+07:00
 */



 'use strict';

 module.exports = function (sequelize, DataTypes) {
   var Module = sequelize.define('Module', {
     module_id: {
       type: DataTypes.INTEGER,
       primaryKey: true
     },
     module_name: DataTypes.STRING(50),
     module_path: DataTypes.STRING(200),
     module_desc: DataTypes.STRING(250)
   }, {
     timestamps: false,
     freezeTableName: true,
     tableName: 'user_group',
     indexes: [
       {
         unique: true,
         fields: ['module_name', 'module_path']
       },
       {
         primary: true,
         fields: ['module_id']
       }
     ]
   })

   return Module
 }
