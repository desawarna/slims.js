/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('loan', {
    loan_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    item_code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    member_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    loan_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    renewed: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    loan_rules_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    actual: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_lent: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    is_return: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    return_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    input_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: true
    },
    uid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'loan'
  });
};
