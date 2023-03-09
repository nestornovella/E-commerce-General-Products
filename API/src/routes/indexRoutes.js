const {Router} = require('express')
const userAuthRouter = require('./userAuthRouter')
const productRouter = require('./productRoutes')

const router = Router()

router.use("/user", userAuthRouter)
router.use("/products", productRouter)

module.exports= router