/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('member', {
    member_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    member_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    gender: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    member_type_id: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    member_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    member_mail_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    member_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    postal_code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    inst_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    is_new: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    member_image: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    pin: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    member_phone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    member_fax: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    member_since_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    register_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    expire_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    member_notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_pending: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    mpasswd: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_login_ip: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    input_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'member'
  });
};
