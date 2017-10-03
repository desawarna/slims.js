/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_voc_ctrl', {
    vocabolary_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    topic_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    rt_id: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    related_topic_id: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    scope: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'mst_voc_ctrl'
  });
};
