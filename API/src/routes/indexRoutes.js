const {Router} = require('express')
const userAuthRouter = require('./userAuthRouter')
const productRouter = require('./productRoutes')
const booksRoutes = require('./booksRoutes')
const cartRoutes = require('./cartRoutes')
const transactionRoutes = require('./transactionsRoutes')

const router = Router()

router.use("/user", userAuthRouter)
router.use("/products", productRouter)
router.use("/books", booksRoutes)
router.use("/cart", cartRoutes)
router.use("/transaction", transactionRoutes)

module.exports= router