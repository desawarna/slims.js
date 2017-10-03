/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('files', {
    file_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    file_title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    file_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    file_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    file_dir: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mime_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    file_desc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    uploader_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    input_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'files'
  });
};
