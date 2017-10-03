/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kardex', {
    kardex_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date_expected: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_received: {
      type: DataTypes.DATE,
      allowNull: true
    },
    seq_number: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    serial_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
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
    tableName: 'kardex'
  });
};
