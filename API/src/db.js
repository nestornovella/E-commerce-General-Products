require('dotenv').config()
const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:Ciro1990@localhost:1024/pruebatecnica',{
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
    native: false,
})
const userModel = require('./models/User')

userModel(sequelize)





console.log(sequelize.models)

module.exports = {
    ...sequelize.models,
    connect: sequelize
}