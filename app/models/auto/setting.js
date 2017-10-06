/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('setting', {
    setting_id: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    setting_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    },
    setting_value: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'setting',
    timestamps: false
  });
};
