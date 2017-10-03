/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fines', {
    fines_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fines_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    member_id: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    debet: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    credit: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'fines'
  });
};
