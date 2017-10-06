/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('system_log', {
    log_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    log_type: {
      type: DataTypes.ENUM('staff','member','system'),
      allowNull: false,
      defaultValue: 'staff'
    },
    id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    log_location: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    log_msg: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    log_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'system_log',
    timestamps: false
  });
};
