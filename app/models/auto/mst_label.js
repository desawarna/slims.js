/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_label', {
    label_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    label_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    label_desc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    label_image: {
      type: DataTypes.STRING(200),
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
    tableName: 'mst_label'
  });
};
