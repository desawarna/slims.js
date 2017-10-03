/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    realname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    passwd: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    user_type: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    user_image: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    social_media: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_login_ip: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    groups: {
      type: DataTypes.STRING(200),
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
    tableName: 'user'
  });
};
