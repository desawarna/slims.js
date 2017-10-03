/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('content', {
    content_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    content_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    content_desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content_path: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    is_news: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    input_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false
    },
    content_ownpage: {
      type: DataTypes.ENUM('1','2'),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'content'
  });
};
