/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('search_biblio', {
    biblio_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    title: {
      type: DataTypes.TEXT,
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
    author: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    topic: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    gmd: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    publisher: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    publish_place: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    language: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    classification: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    spec_detail_info: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    carrier_type: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    content_type: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    media_type: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    publish_year: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    series_title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    items: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    collection_types: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_number: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    opac_hide: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    promoted: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    labels: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    collation: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(100),
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
    tableName: 'search_biblio'
  });
};
