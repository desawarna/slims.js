/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_relation_term', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rt_id: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    rt_desc: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'mst_relation_term'
  });
};
