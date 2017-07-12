'use strict';

module.exports = function (sequelize, DataTypes) {
  var Content = sequelize.define('Content', {
    content_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    content_title: DataTypes.STRING,
    content_desc: DataTypes.TEXT,
    content_path: DataTypes.STRING(20),
    is_news: DataTypes.INTEGER(1),
    input_date: DataTypes.DATE,
    last_update: DataTypes.DATE,
    content_ownpage: DataTypes.ENUM('1', '2')
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'content',
    indexes: [
      {
        unique: true,
        fields: ['content_path']
      },
      {
        primary: true,
        fields: ['content_id']
      },
      {
        fulltext: true,
        fields: ['content_title', 'content_desc']
      }
    ]
  })

  return Content
}
