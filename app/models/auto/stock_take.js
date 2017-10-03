/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stock_take', {
    stock_take_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    stock_take_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    init_user: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    total_item_stock_taked: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    total_item_lost: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    total_item_exists: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    total_item_loan: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    stock_take_users: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_active: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    report_file: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'stock_take'
  });
};
