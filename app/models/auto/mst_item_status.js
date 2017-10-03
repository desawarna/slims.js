/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_item_status', {
    item_status_id: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true
    },
    item_status_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    },
    rules: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    no_loan: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    skip_stock_take: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
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
    tableName: 'mst_item_status'
  });
};
