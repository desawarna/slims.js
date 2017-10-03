/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('biblio_attachment', {
    biblio_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    file_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    access_type: {
      type: DataTypes.ENUM('public','private'),
      allowNull: false
    },
    access_limit: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'biblio_attachment'
  });
};
