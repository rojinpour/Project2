module.exports = function(sequelize, DataTypes) {

  console.log("In Character Model Code");
  var Characters = sequelize.define("Characters", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    }, 
    power: {
      type: DataTypes.INTEGER,
      defaultValue: false
    },
    knowlege: {
      type: DataTypes.INTEGER,
      defaultValue: false
    },
    sanity: {
      type: DataTypes.INTEGER,
      defaultValue: false
    } 
  });
return Characters;
}