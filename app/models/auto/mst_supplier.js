/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_supplier', {
    supplier_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    supplier_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    postal_code: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    phone: {
      type: DataTypes.CHAR(14),
      allowNull: true
    },
    contact: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    fax: {
      type: DataTypes.CHAR(14),
      allowNull: true
    },
    account: {
      type: DataTypes.CHAR(12),
      allowNull: true
    },
    e_mail: {
      type: DataTypes.CHAR(80),
      allowNull: true
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
    tableName: 'mst_supplier'
  });
};
