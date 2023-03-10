const { DataTypes } = require('sequelize')




module.exports = (sequelizeInstance)=>{
    sequelizeInstance.define("Cart", {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        productsID:{
            type:DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.STRING)),
            defaultValue:[]
        },
        total:{
            type:DataTypes.FLOAT,
            defaultValue:0
        }
    },{timestamps:false})
}