/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item', {
    item_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    biblio_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    call_number: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    coll_type_id: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    item_code: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: true
    },
    inventory_code: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    received_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    supplier_id: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    order_no: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    location_id: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    item_status_id: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    site: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    source: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    invoice: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    price_currency: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    invoice_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    input_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: true
    },
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'item'
  });
};
