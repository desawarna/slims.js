/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('biblio_marc', {
    biblio_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    marc_tag: {
      type: DataTypes.CHAR(3),
      allowNull: false
    },
    marc_indicator: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: '##'
    },
    marc_subfield: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    marc_data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    input_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'biblio_marc'
  });
};
