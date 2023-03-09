const { sendError } = require("../functions/functions")
const { User, Cart } = require('../db')
const { hashText, hashCompar } = require("../helpers/encript")
const jwt = require("jsonwebtoken")

module.exports = {
    register: async (req, res) => {
        const { name, email, password } = req.body

        try {
            if (!name || !email || !password) { sendError("faltan parametros!") }
            const emailVerify = await User.findAll({ where: { email: email } })
            if (emailVerify.length) { sendError("el email ya fue ingresado por otro usuario!") }

            else {
                const hash = await hashText(password)
                const newUser = await User.create({ ...req.body, password: hash })
                const newCart = await Cart.create({ UserId: newUser.id })

                await User.update({ CartId: newCart.id }, { where: { id: newUser.id } })

                res.status(201).json({ status: 202, created: true, newUser: await User.findOne({ where: { id: newUser.id } }) })
            }
        } catch (error) {
            res.status(500).json({ status: 500, error })
        }
    },
    login: async (req, res) => {
        const { email, password } = req.body
        try {
            if (!!!email || !!!password) { sendError("ingresar password y contraseña") }
            const user = await User.findAll({ where: { email } }) || []

            if (!user.length) { sendError("usuario no existente!") }
            const verify = await hashCompar(password, user[0].password)
            if (verify) {
                jwt.sign({ user }, "secretKey", (err, token) => {
                    res.status(200).json({ user: { name: user[0].name, email: user[0].email, admin: user[0].admin }, token })
                })
            } else {
                sendError("contraseña invalida")
            }
        } catch (error) {
            res.json(error)
        }

    }

}