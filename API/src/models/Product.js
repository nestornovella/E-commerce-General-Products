const { DataTypes, UUIDV4 } = require('sequelize')



//ISBN, título del libro, precio, autor, editorial y número de existencias

//precio, código, nombre del producto y número de existencias.
module.exports = (sequelizeInstance)=>{
    sequelizeInstance.define("Product", {
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            allowNull:false,
            unique:true,
            defaultValue:UUIDV4

        },
        price:{
            type:DataTypes.FLOAT,
            allowNull:false,

        },
        serialCode:{
            type:DataTypes.STRING,
            allowNull:false,

        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,

        }, 
        stock:{
            type:DataTypes.INTEGER,
            defaultValue: 0

        },
        active:{
            type:DataTypes.BOOLEAN,
            defaultValue:true,
            allowNull:false
        }

    },{timestamps:false})
}