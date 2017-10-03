/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_gmd', {
    gmd_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    gmd_code: {
      type: DataTypes.STRING(3),
      allowNull: true,
      unique: true
    },
    gmd_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    },
    icon_image: {
      type: DataTypes.STRING(100),
      allowNull: true
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
    tableName: 'mst_gmd'
  });
};
