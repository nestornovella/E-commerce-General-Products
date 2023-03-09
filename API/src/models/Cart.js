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
        

    
    },{timestamps:false})
}