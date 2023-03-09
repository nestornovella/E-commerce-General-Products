const { sendError } = require("../functions/functions")
const { User, Cart } = require('../db')
const { Transaction, Product } = require("../db")





module.exports = {
    createTransaction: async (req, res) => {
        const { userId } = req.body

        try {
            if (!userId) { sendError("faltan parametros") }

            const user = await User.findOne({ where: { id: userId } }) || []
            if (!user) { sendError("el usuario no se encuentra en la base de datos") }

            const cart = await Cart.findOne({ where: { id: user.CartId } })
            const { productsID, total } = cart


            const newTransaction = await Transaction.create({ total, productsID, UserId: userId })

            console.log(productsID)
            productsID.forEach(async (prod) => {
                const product = await Product.findByPk(prod[0])
                console.log(product.id)
                await newTransaction.addProduct(product.id)
            })
            
            const result = await Transaction.findAll({where:{id:newTransaction.id}})

                res.json(result)
         


        } catch (error) {


        }
    },
    getTransactios:async(req, res )=>{

        const transaction = await Transaction.findAll({include:{model:Product}})
        res.json(transaction)
    }
}