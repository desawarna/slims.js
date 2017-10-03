/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mst_member_type', {
    member_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    member_type_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    loan_limit: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    loan_periode: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    enable_reserve: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    reserve_limit: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    member_periode: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    reborrow_limit: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    fine_each_day: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    grace_periode: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
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
    tableName: 'mst_member_type'
  });
};
