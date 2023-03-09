const { sendError } = require("../functions/functions")
const { Product } = require('../db')



module.exports = {
    createProduct: async (req, res) => {
        const { price, serialCode, name } = req.body

        try {
            if (!price || !serialCode || !name) { sendError("faltan parametros obligatorios") }
            else {
                const verifySerial = await Product.findAll({ where: { serialCode } }) || []
                console.log(verifySerial)
                if (verifySerial.length) { sendError("ya existe producto con ese serial") }
                const newProduct = await Product.create(req.body)
                res.json(newProduct)
            }

        } catch (error) {
            res.status(500).json({ status: 500, error })
        }
    },
    getProducts: async (req, res) => {
        const { serialCode, active } = req.query
        try {
            if (!serialCode && !active) {
                const allProducts = await Product.findAll() || []
                !allProducts.length
                    ?
                    res.json("no hay productos en la base de datos")
                    :
                    res.json({ status: 200, allProducts })
            }
            else {
                if (serialCode) {
                    const product = await Product.findAll({ where: { serialCode } })
                    res.status(200).json({status: 200, product})
                }
                else {
                    const product = await Product.findAll({ where: { active } })
                    res.status(200).json({status: 200,product})
                }
            }
        }
        catch (error) {
            res.status(500).json({ status: 500, error })
        }
    }
}