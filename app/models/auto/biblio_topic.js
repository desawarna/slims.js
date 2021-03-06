/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('biblio_topic', {
    biblio_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    topic_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    level: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'biblio_topic'
  });
};
