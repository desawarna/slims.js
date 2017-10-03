/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tags', {
    tag_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_number: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    tag_desc: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_fixed: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    is_enabled: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    is_repeatable: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    is_customable: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    is_mandatory: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    length: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    subfield: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false
    },
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'tags'
  });
};
