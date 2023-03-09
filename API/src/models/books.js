const { DataTypes, UUIDV4 } = require('sequelize')



//ISBN, título del libro, precio, autor, editorial y número de existencias

//precio, código, nombre del producto y número de existencias.
module.exports = (sequelizeInstance)=>{
    sequelizeInstance.define("Book", {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true

        },
        title:{
            type:DataTypes.STRING,
            allowNull:false,

        }
        ,
        price:{
            type:DataTypes.FLOAT,
            allowNull:false,

        },
        serialCode:{
            type:DataTypes.STRING,
            allowNull:false,

        },
        ISBN:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        editorial:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        autor:{
            type:DataTypes.STRING,
            allowNull:false,
            defaultValue:"anonimous"
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