/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('backup_log', {
    backup_log_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    backup_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    backup_file: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'backup_log'
  });
};
