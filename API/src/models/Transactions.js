const { DataTypes, UUIDV4 } = require('sequelize')




module.exports = (sequelizeInstance)=>{
    sequelizeInstance.define("Transaction", {
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            allowNull:false,
            unique:true,
            defaultValue:UUIDV4
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