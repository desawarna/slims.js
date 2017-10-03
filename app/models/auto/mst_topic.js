/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_topic', {
    topic_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    topic: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    topic_type: {
      type: DataTypes.ENUM('t','g','n','tm','gr','oc'),
      allowNull: false
    },
    auth_list: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    classification: {
      type: DataTypes.STRING(50),
      allowNull: false
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
    tableName: 'mst_topic'
  });
};
