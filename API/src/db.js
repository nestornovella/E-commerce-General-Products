require('dotenv').config()
const {Sequelize} = require('sequelize')
const userModel = require('./models/User')
const productModel = require('./models/Product')
const booksModel = require('./models/Books')
const cardModel = require('./models/Cart')
const transactionModel = require('./models/Transactions')


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
transactionModel(sequelize)

const {User, Cart, Transaction, Product} = sequelize.models


Transaction.belongsToMany(Product ,{through:"transactions-products"})
Product.belongsToMany(Transaction, {through:"transactions-products"})

Transaction.belongsTo(User)
User.hasMany(Transaction)

User.belongsTo(Cart)
Cart.belongsTo(User)


console.log(sequelize.models)

module.exports = {
    ...sequelize.models,
    connect: sequelize
}