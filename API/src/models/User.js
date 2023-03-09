const { DataTypes, UUIDV4 }= require('sequelize')



module.exports = (sequelzieInstance)=>{
    sequelzieInstance.define('User', {
        id:{
            type:DataTypes.UUID,
            allowNull:false,
            primaryKey:true,
            unique:true,
            defaultValue:UUIDV4
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password: {
            type:DataTypes.STRING,
            allowNull:false,
        },
        admin:{
            type:DataTypes.BOOLEAN,
            defaultValue: false
        }

    }, {timestamps:false})
}