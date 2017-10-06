/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('biblio', {
    biblio_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    gmd_id: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sor: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    edition: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    isbn_issn: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    publisher_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    publish_year: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    collation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    series_title: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    call_number: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    language_id: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: 'en'
    },
    source: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    publish_place_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    classification: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    file_att: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    opac_hide: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    promoted: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    labels: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    frequency_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    spec_detail_info: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    media_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    carrier_type_id: {
      type: DataTypes.INTEGER(11),
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
    tableName: 'biblio',
    timestamps: false
  });
};
