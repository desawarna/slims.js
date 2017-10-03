/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_module', {
    module_id: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    module_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    module_path: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    module_desc: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'mst_module'
  });
};
