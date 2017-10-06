/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_publisher', {
    publisher_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    publisher_name: {
      type: DataTypes.STRING(100),
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
    tableName: 'mst_publisher',
    timestamps: false
  });
};
