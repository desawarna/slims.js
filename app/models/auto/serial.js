/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('serial', {
    serial_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date_start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_end: {
      type: DataTypes.DATE,
      allowNull: true
    },
    period: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    biblio_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    gmd_id: {
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
    tableName: 'serial'
  });
};
