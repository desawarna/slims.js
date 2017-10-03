/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_frequency', {
    frequency_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    frequency: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    language_prefix: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    time_increment: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    time_unit: {
      type: DataTypes.ENUM('day','week','month','year'),
      allowNull: true,
      defaultValue: 'day'
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
    tableName: 'mst_frequency'
  });
};
