/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_location', {
    location_id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    location_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true
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
    tableName: 'mst_location'
  });
};
