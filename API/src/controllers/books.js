const { sendError } = require("../functions/functions")
const { Book } = require('../db')

//ISBN, título del libro, precio, autor, editorial y número de existencias

module.exports = {
    createBook: async (req, res) => {
        const {ISBN, price, serialCode} = req.body

        try {
            if (!ISBN || !price || !serialCode ) { sendError("faltan parametros obligatorios") }

            else {
                const verifySerial = await Book.findAll({ where: { serialCode } }) || []
            
                if (verifySerial.length) { sendError("ya existe libro con ese serial") }
                const newBook = await Book.create(req.body)

                res.json(newBook)
            }

        } catch (error) {
            res.status(500).json({ status: 500, error:error })
        }
    },
    getBooks: async (req, res) => {
        const { serialCode, active } = req.query
        try {
            if (!serialCode && !active) {
                const allBooks = await Book.findAll() || []
                !allBooks.length
                    ?
                    res.json("no hay libros en la base de datos")
                    :
                    res.json({ status: 200, allBooks })
            }
            else {
                if (serialCode) {
                    const book = await Book.findAll({ where: { serialCode } })
                    res.status(200).json({status: 200, book})
                }
                else {
                    const product = await Book.findAll({ where: { active } })
                    res.status(200).json({status: 200, book})
                }
            }
        }
        catch (error) {
            res.status(500).json({ status: 500, error })
        }
    }
}