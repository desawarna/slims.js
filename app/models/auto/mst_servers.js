/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_servers', {
    server_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    uri: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    server_type: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    input_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'mst_servers'
  });
};
