/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('holiday', {
    holiday_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    holiday_dayname: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    holiday_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'holiday'
  });
};
