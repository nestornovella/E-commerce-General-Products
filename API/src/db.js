require('dotenv').config()
const {Sequelize} = require('sequelize')
const userModel = require('./models/User')
const productModel = require('./models/Product')

const sequelize = new Sequelize('postgres://postgres:Ciro1990@localhost:1024/pruebatecnica',{
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
    native: false,
})

userModel(sequelize)
productModel(sequelize)




console.log(sequelize.models)

module.exports = {
    ...sequelize.models,
    connect: sequelize
}