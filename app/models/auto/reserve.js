/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reserve', {
    reserve_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    member_id: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    biblio_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    item_code: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    reserve_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'reserve'
  });
};
