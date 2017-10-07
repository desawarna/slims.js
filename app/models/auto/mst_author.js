/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_author', {
    author_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    author_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    author_year: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    authority_type: {
      type: DataTypes.ENUM('p','o','c'),
      allowNull: true,
      defaultValue: 'p'
    },
    auth_list: {
      type: DataTypes.STRING(20),
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
    tableName: 'mst_author',
    timestamps: false
  });
};
