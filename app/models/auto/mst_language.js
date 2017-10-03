/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_language', {
    language_id: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true
    },
    language_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    input_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'mst_language'
  });
};
