/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stock_take_item', {
    stock_take_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    item_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    item_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    gmd_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    classification: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    coll_type_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    call_number: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('e','m','u','l'),
      allowNull: false,
      defaultValue: 'm'
    },
    checked_by: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'stock_take_item'
  });
};
