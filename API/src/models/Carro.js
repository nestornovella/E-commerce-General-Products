const { DataTypes } = require('sequelize')




module.exports = (sequelizeInstance)=>{
    sequelizeInstance.define("Carro", {

    },{timestamps:false})
}