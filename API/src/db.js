require('dotenv').config()
const {Sequelize, BelongsToMany, BelongsTo} = require('sequelize')
const userModel = require('./models/User')
const productModel = require('./models/Product')
const booksModel = require('./models/Books')
const cardModel = require('./models/Cart')

const sequelize = new Sequelize('postgres://postgres:Ciro1990@localhost:1024/pruebatecnica',{
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
    native: false,
})

userModel(sequelize)
productModel(sequelize)
booksModel(sequelize)
cardModel(sequelize)

const {User, Cart} = sequelize.models

User.belongsTo(Cart)
Cart.belongsTo(User)






console.log(sequelize.models)

module.exports = {
    ...sequelize.models,
    connect: sequelize
}