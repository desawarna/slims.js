/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('biblio_custom', {
    biblio_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'biblio_custom'
  });
};
