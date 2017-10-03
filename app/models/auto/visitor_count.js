/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('visitor_count', {
    visitor_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    member_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    member_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    institution: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    checkin_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'visitor_count'
  });
};
